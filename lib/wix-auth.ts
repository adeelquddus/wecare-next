/**
 * Wix Members OAuth - server-side session helpers.
 *
 * Stores Wix OAuth `Tokens` (access + refresh) in an httpOnly cookie so server
 * components / route handlers can call `wixClient.members.getCurrentMember()`
 * on behalf of the logged-in visitor.
 *
 * Cookies are httpOnly so tokens are never exposed to client JS.
 */
import { cookies } from 'next/headers';
import type { Tokens } from '@wix/sdk';
import { wixClient } from './wix';

const COOKIE_NAME = 'wix_member_tokens';
const THIRTY_DAYS_SECONDS = 60 * 60 * 24 * 30;

/**
 * Narrows an unknown JSON-decoded value into a Wix `Tokens` object.
 * The Wix SDK does not export a runtime type-guard, so we do a structural check.
 */
function isTokens(value: unknown): value is Tokens {
  if (!value || typeof value !== 'object') return false;
  const v = value as Record<string, unknown>;
  const access = v.accessToken as Record<string, unknown> | undefined;
  const refresh = v.refreshToken as Record<string, unknown> | undefined;
  if (!access || typeof access !== 'object') return false;
  if (!refresh || typeof refresh !== 'object') return false;
  if (typeof access.value !== 'string') return false;
  if (typeof refresh.value !== 'string') return false;
  return true;
}

/**
 * Reads tokens from the httpOnly cookie. Returns null if missing/malformed.
 */
export async function getMemberTokens(): Promise<Tokens | null> {
  const store = cookies();
  const raw = store.get(COOKIE_NAME)?.value;
  if (!raw) return null;
  try {
    const parsed: unknown = JSON.parse(raw);
    return isTokens(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

/**
 * Writes tokens to the httpOnly cookie. 30-day expiry, secure in production.
 */
export async function setMemberTokens(tokens: Tokens): Promise<void> {
  const store = cookies();
  store.set({
    name: COOKIE_NAME,
    value: JSON.stringify(tokens),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: THIRTY_DAYS_SECONDS,
  });
}

/**
 * Deletes the tokens cookie.
 */
export async function clearMemberTokens(): Promise<void> {
  const store = cookies();
  store.delete(COOKIE_NAME);
}

/**
 * Loose shape of `wixClient.members.getCurrentMember()` for the bits we use.
 * The SDK returns a richer object; we narrow what we expose.
 */
export interface CurrentMember {
  _id?: string;
  loginEmail?: string;
  contact?: {
    firstName?: string;
    lastName?: string;
    emails?: string[];
  };
  profile?: {
    nickname?: string;
    photo?: { url?: string };
  };
  // Allow callers to read additional fields without a type error.
  [key: string]: unknown;
}

/**
 * Returns the currently logged-in Wix Member, or null if not authenticated.
 *
 * Uses tokens from the cookie store. Any error (expired token, network, etc.)
 * yields `null` and clears the cookie so the caller can prompt re-login.
 */
export async function getCurrentMember(): Promise<CurrentMember | null> {
  const tokens = await getMemberTokens();
  if (!tokens) return null;

  try {
    wixClient.auth.setTokens(tokens);
    const result: unknown = await wixClient.members.getCurrentMember();
    // SDK returns `{ member: {...} }`
    if (result && typeof result === 'object' && 'member' in result) {
      const member = (result as { member?: CurrentMember }).member;
      return member ?? null;
    }
    return null;
  } catch {
    // Token likely expired or revoked - clear so next request can re-auth.
    await clearMemberTokens();
    return null;
  }
}
