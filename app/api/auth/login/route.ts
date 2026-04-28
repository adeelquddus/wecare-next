/**
 * GET /api/auth/login
 *
 * Kicks off the Wix Members OAuth flow:
 *   1. Generates PKCE OAuth data (state + code verifier/challenge).
 *   2. Stashes that data in a short-lived httpOnly cookie so the callback
 *      can verify the response.
 *   3. Asks Wix for the hosted-login URL and 307-redirects the visitor there.
 *
 * Optional `?return=<path>` query param controls where the user lands after
 * a successful login (defaults to `/loyalty`).
 */
import { NextResponse, type NextRequest } from 'next/server';
import { wixClient } from '@/lib/wix';

const OAUTH_STATE_COOKIE = 'wix_oauth_state';
const TEN_MINUTES_SECONDS = 60 * 10;

export async function GET(req: NextRequest): Promise<NextResponse> {
  /* Derive the redirect URI from the incoming request so the OAuth flow
     "just works" on whatever host the user is on - localhost in dev, the
     prod domain in production, a Vercel preview URL, etc. - without
     needing per-environment env vars. The host comes from the request,
     respecting any reverse-proxy `x-forwarded-host` header.

     Both this URI and the prod equivalent must be registered as allowed
     redirect URIs in the Wix Headless OAuth app. */
  const proto = req.headers.get('x-forwarded-proto') ?? req.nextUrl.protocol.replace(':', '');
  const host  = req.headers.get('x-forwarded-host')  ?? req.nextUrl.host;
  const origin = `${proto}://${host}`;
  const redirectUri = `${origin}/api/auth/callback`;

  const returnParam = req.nextUrl.searchParams.get('return');
  const originalUri = returnParam && returnParam.startsWith('/') ? returnParam : '/loyalty';

  const oauthData = wixClient.auth.generateOAuthData(redirectUri, originalUri);
  const { authUrl } = await wixClient.auth.getAuthUrl(oauthData);

  const res = NextResponse.redirect(authUrl, 307);
  res.cookies.set({
    name: OAUTH_STATE_COOKIE,
    value: JSON.stringify(oauthData),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: TEN_MINUTES_SECONDS,
  });
  return res;
}
