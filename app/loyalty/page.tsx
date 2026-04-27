/**
 * Loyalty page — branches on Wix Members authentication state.
 *
 *   ┌──────────────────────────────────────────────────────────┐
 *   │  visitor logged in?                                      │
 *   │     ├─ YES → fetch their loyalty account by email,       │
 *   │              render <MemberDashboard /> (personalised)   │
 *   │     └─ NO  → render <MarketingLanding />                 │
 *   └──────────────────────────────────────────────────────────┘
 *
 * Both branches share the live reward catalog and tier list (fetched
 * once via the server-side Wix Loyalty API key).
 */

import type { Metadata } from 'next';
import { getCurrentMember } from '@/lib/wix-auth';
import {
  listRewards, listTiers, getAccountByEmail, getAccountByContactId,
} from '@/lib/wix-loyalty';
import MemberDashboard from '@/components/loyalty/MemberDashboard';
import MarketingLanding from '@/components/loyalty/MarketingLanding';

export const metadata: Metadata = {
  title: 'Loyalty Rewards Program — WeCare Wellness Clinic Brandon, FL',
  description:
    'Earn points every time you book a visit, refer a friend, or purchase a plan at WeCare Wellness Clinic. Free to join. 10 points = $1 off any service.',
  keywords: [
    'WeCare loyalty program',
    'patient rewards Brandon FL',
    'healthcare loyalty rewards',
    'wellness rewards program Brandon FL',
  ],
  alternates: { canonical: 'https://www.wecarewellnessclinic.com/loyalty' },
  openGraph: {
    title: 'WeCare Loyalty Rewards — Earn Points On Every Visit',
    description: 'Free patient loyalty program in Brandon, FL. Earn points, redeem rewards, save on every visit.',
    url: 'https://www.wecarewellnessclinic.com/loyalty',
    type: 'website',
  },
};

// Always render fresh — points balance is dynamic
export const revalidate = 0;

export default async function LoyaltyPage() {
  // Fetch in parallel for speed
  const [rewards, tiers, member] = await Promise.all([
    listRewards().catch(() => []),
    listTiers().catch(() => []),
    getCurrentMember().catch(() => null),
  ]);

  // Logged-out → marketing landing
  if (!member) {
    return <MarketingLanding rewards={rewards} />;
  }

  /* Logged-in → look up their loyalty account.
     Try contactId first (most reliable), then fall back to email. */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const m = member as any;
  const contactId =
    m?.contactId ??
    m?._id ??
    m?.id ??
    null;
  const email =
    m?.loginEmail ??
    m?.profile?.email ??
    m?.profile?.emailAddress ??
    m?.email ??
    null;

  let account = null;
  if (contactId) account = await getAccountByContactId(contactId).catch(() => null);
  if (!account && email) account = await getAccountByEmail(email).catch(() => null);

  /* Fallback: this member is logged in via Wix but doesn't have a loyalty
     record yet (extremely rare — Wix auto-creates one on signup). Show the
     marketing landing with a note that they're already authenticated. */
  if (!account) {
    return <MarketingLanding rewards={rewards} />;
  }

  // Build the friendly profile shape MemberDashboard expects
  const memberProfile = {
    displayName: m?.profile?.nickname ?? m?.profile?.firstName ?? account.contact.displayName ?? null,
    firstName:   m?.profile?.firstName ?? account.contact.name?.split(/\s+/)[0] ?? null,
    email:       email ?? account.contact.email ?? null,
    photo:       m?.profile?.photo?.url ?? account.contact.picture?.url ?? null,
  };

  return (
    <MemberDashboard
      account={account}
      rewards={rewards}
      tiers={tiers}
      member={memberProfile}
    />
  );
}
