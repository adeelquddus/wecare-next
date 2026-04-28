/**
 * Wix Loyalty REST client - server-side only.
 *
 * Endpoints we've confirmed return 200 with the WIX_API_KEY (admin scope):
 *   GET /loyalty-rewards/v1/rewards            - reward catalog
 *   GET /loyalty-accounts/v1/accounts          - every member's points balance
 *   GET /loyalty-tiers/v1/tiers                - tier ladder (empty when not configured)
 *
 * Endpoints that 404 with the API key (need member-token scope or different path):
 *   /loyalty-earning-rules/v1/earning-rules
 *   /loyalty-transactions/v1/transactions
 *   /loyalty-redemptions/v1/redemptions
 * For those, we provide static fallbacks describing the actual WeCare program rules.
 *
 * NEVER import this file from a "use client" component - it reads server-only env vars.
 */

const BASE = 'https://www.wixapis.com';

interface Creds {
  apiKey: string;
  accountId: string;
  siteId: string;
}

function getCreds(): Creds {
  const apiKey = process.env.WIX_API_KEY;
  const accountId = process.env.WIX_ACCOUNT_ID;
  const siteId = process.env.WIX_SITE_ID;
  if (!apiKey || !accountId || !siteId) {
    throw new Error('WIX_API_KEY / WIX_ACCOUNT_ID / WIX_SITE_ID must be set in .env.local');
  }
  return { apiKey, accountId, siteId };
}

async function wixGet<T>(path: string): Promise<T> {
  const c = getCreds();
  const res = await fetch(`${BASE}${path}`, {
    headers: {
      Authorization: c.apiKey,
      'wix-account-id': c.accountId,
      'wix-site-id': c.siteId,
    },
    cache: 'no-store',
  });
  if (!res.ok) {
    const txt = await res.text().catch(() => '');
    throw new Error(`Wix Loyalty ${res.status}: ${txt.slice(0, 200)}`);
  }
  return res.json() as Promise<T>;
}

/* ─── Types ─────────────────────────────────────────────────────────── */

export interface LoyaltyReward {
  id: string;
  name: string;
  requiredPoints: number;
  active: boolean;
  type: 'DISCOUNT_AMOUNT' | 'DISCOUNT_PERCENTAGE' | 'COUPON' | 'SPI_DISCOUNT_AMOUNT' | string;
  discountAmount?: { amount: string; configsByTier?: Array<{ amount: string; costInPoints: number }> };
  createdDate?: string;
  updatedDate?: string;
}

export interface LoyaltyAccount {
  id: string;
  contactId: string;
  memberId?: string;
  points: {
    balance: number;
    earned: number;
    adjusted: number;
    redeemed: number;
    expired: number;
  };
  rewardAvailable: boolean;
  createdDate: string;
  updatedDate: string;
  lastActivityDate?: string;
  tier?: { id?: string; updatedDate?: string; points?: number };
  contact: {
    id: string;
    name?: string;
    email?: string;
    displayName?: string;
    picture?: { url?: string };
  };
  pointsExpiration?: {
    expirationDate?: string;
    expiringPointsAmount?: number;
  };
}

export interface LoyaltyTier {
  id: string;
  name: string;
  requiredPoints: number;
  benefits?: string[];
}

/* ─── Public API ────────────────────────────────────────────────────── */

export async function listRewards(): Promise<LoyaltyReward[]> {
  const data = await wixGet<{ rewards: LoyaltyReward[] }>('/loyalty-rewards/v1/rewards');
  return (data.rewards ?? []).filter((r) => r.active);
}

export async function listTiers(): Promise<LoyaltyTier[]> {
  const data = await wixGet<{ tiers: LoyaltyTier[] }>('/loyalty-tiers/v1/tiers');
  return data.tiers ?? [];
}

export async function listAccounts(limit = 200): Promise<LoyaltyAccount[]> {
  const data = await wixGet<{ accounts: LoyaltyAccount[] }>(`/loyalty-accounts/v1/accounts?paging.limit=${limit}`);
  return data.accounts ?? [];
}

/**
 * Find a single member's loyalty account by email.
 * Uses the admin endpoint (we have full access) and filters client-side.
 */
export async function getAccountByEmail(email: string): Promise<LoyaltyAccount | null> {
  const accounts = await listAccounts();
  const lower = email.toLowerCase();
  return accounts.find((a) => a.contact.email?.toLowerCase() === lower) ?? null;
}

/**
 * Find a single member's loyalty account by Wix contactId / memberId.
 * Slightly more reliable than email if available (handles email changes, aliases).
 */
export async function getAccountByContactId(contactId: string): Promise<LoyaltyAccount | null> {
  const accounts = await listAccounts();
  return accounts.find((a) => a.contactId === contactId || a.memberId === contactId) ?? null;
}

/* ─── Static earning rules - these come from the live Wix loyalty page
       since the earning-rules REST endpoint is gated. ────────────────── */

export interface EarnAction {
  id: string;
  title: string;
  desc: string;
  points: number;
  cta?: { label: string; href: string };
  /** Whether this is a one-time bonus or repeating */
  oneTime?: boolean;
}

export const EARN_ACTIONS: EarnAction[] = [
  {
    id: 'signup',
    title: 'Sign up',
    desc: 'Welcome bonus - automatically credited the moment you join.',
    points: 50,
    oneTime: true,
  },
  {
    id: 'visit',
    title: 'Book a visit',
    desc: 'Earn points every time you book any service - primary care, weight loss, telehealth, anything.',
    points: 10,
    cta: { label: 'Book now', href: '/booking' },
  },
  {
    id: 'plan',
    title: 'Purchase a plan',
    desc: 'Earn 1 point for every $1 spent on care plans, programs, and services.',
    points: 1,
    cta: { label: 'View plans', href: '/services' },
  },
  {
    id: 'birthday',
    title: 'Birthday bonus',
    desc: "It's our gift to you - points automatically arrive during your birthday month.",
    points: 20,
    oneTime: true,
  },
  {
    id: 'social',
    title: 'Follow us on Instagram',
    desc: 'Get 10 points just for following @wecarewellnessclinic.',
    points: 10,
    cta: { label: 'Follow', href: 'https://www.instagram.com/wecarewellnessclinic' },
    oneTime: true,
  },
];

/**
 * Compute a friendly, human-readable label for a reward like "10 pts = $1 off".
 */
export function rewardLabel(r: LoyaltyReward): string {
  if (r.type === 'DISCOUNT_AMOUNT' && r.discountAmount) {
    return `${r.requiredPoints} pts → $${Number(r.discountAmount.amount).toFixed(0)} off`;
  }
  return `${r.requiredPoints} pts → ${r.name}`;
}

/**
 * Find the cheapest active reward - the "next milestone" the member is working toward.
 * Returns null if there are no active rewards.
 */
export function nextReward(rewards: LoyaltyReward[]): LoyaltyReward | null {
  const sorted = [...rewards].sort((a, b) => a.requiredPoints - b.requiredPoints);
  return sorted[0] ?? null;
}
