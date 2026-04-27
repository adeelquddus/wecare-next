/**
 * MemberDashboard — the personalized loyalty experience for a logged-in
 * Wix Member. Server component: receives the loyalty account, the active
 * reward catalog, and the optional tier list as props. All data is real.
 *
 * Visual layout:
 *   1. Hero card        — personalized greeting + animated points counter
 *   2. Stats strip      — earned / redeemed / available / expiring (4 tiles)
 *   3. Progress band    — "X points away from next reward" with a gradient bar
 *   4. Rewards rail     — the actual rewards from the Wix catalog
 *   5. Earn-more grid   — list of EARN_ACTIONS with CTAs
 *   6. (Optional) Tier ladder — only when tiers are configured
 *   7. Sign out + Help footer
 */

import Link from 'next/link';
import {
  StarIcon, BadgeIcon, AwardIcon, SparkleIcon, LightningIcon,
  CalendarIcon, CardIcon, HandshakeIcon,
  type IconProps,
} from '@/components/ui/AnimatedIcons';
import AnimatedCounter from './AnimatedCounter';
import MemberAvatar from './MemberAvatar';
import {
  EARN_ACTIONS, rewardLabel, nextReward,
  type LoyaltyAccount, type LoyaltyReward, type LoyaltyTier,
} from '@/lib/wix-loyalty';
import styles from './MemberDashboard.module.css';

type FC = React.FC<IconProps>;

interface Props {
  account: LoyaltyAccount;
  rewards: LoyaltyReward[];
  tiers: LoyaltyTier[];
  /** Wix Members fields — used to greet the member */
  member: {
    displayName?: string | null;
    firstName?: string | null;
    email?: string | null;
    photo?: string | null;
  };
}

/* Pick a friendly icon for each EARN_ACTION id */
const earnIconMap: Record<string, FC> = {
  signup:   BadgeIcon,
  visit:    CalendarIcon,
  plan:     CardIcon,
  birthday: SparkleIcon,
  social:   HandshakeIcon,
};

/* Format YYYY-MM-DD-ish date strings into a nice "Apr 27, 2026" */
function formatDate(iso?: string): string {
  if (!iso) return '';
  try {
    return new Date(iso).toLocaleDateString('en-US', {
      year: 'numeric', month: 'short', day: 'numeric',
    });
  } catch { return ''; }
}

/* Initials fallback for avatar */
function initials(name?: string | null): string {
  if (!name) return 'WC';
  return name.split(/\s+/).map((p) => p[0]?.toUpperCase() ?? '').join('').slice(0, 2);
}

export default function MemberDashboard({ account, rewards, tiers, member }: Props) {
  const greetingName = member.firstName ?? member.displayName?.split(' ')[0] ?? 'there';
  const balance = account.points.balance;
  const lifetime = account.points.earned;
  const redeemed = account.points.redeemed;
  const expiring = account.pointsExpiration?.expiringPointsAmount ?? 0;
  const expDate = account.pointsExpiration?.expirationDate;

  /* ─── Reward maths ────────────────────────────────────────────────────
     The Wix loyalty program is "stackable": every {nextThreshold} points
     buys one more {unitDollars} discount, indefinitely. So we need:
       - dollarsAvailable: how much they can already redeem RIGHT NOW
       - pointsInProgress: how far through the CURRENT increment they are
       - pointsToNextIncrement: how many more pts to unlock the NEXT $1
       - incrementProgress: 0–100 within the current $1 step (resets after each)
       - nextDollarValue: what their balance becomes once they earn one more increment
     ─────────────────────────────────────────────────────────────────── */
  const next = nextReward(rewards);
  const nextThreshold = next?.requiredPoints ?? 10;
  const unitDollars = next?.discountAmount
    ? Number(next.discountAmount.amount)
    : 1;
  const dollarsAvailable = Math.floor(balance / nextThreshold) * unitDollars;
  const pointsInProgress = balance % nextThreshold;
  const pointsToNextIncrement = pointsInProgress === 0
    ? nextThreshold              /* exactly at a multiple — full {nextThreshold} away from the NEXT one */
    : nextThreshold - pointsInProgress;
  const incrementProgress = (pointsInProgress / nextThreshold) * 100;
  const nextDollarValue = dollarsAvailable + unitDollars;

  /* Roadmap milestones — sensible dollar tiers that stack on top of the
     basic increment. We pick a few realistic targets and tell the member
     exactly how many points they need + how far they are. */
  const milestoneDollarValues = [unitDollars, unitDollars * 5, unitDollars * 10, unitDollars * 20, unitDollars * 50];
  const milestones = milestoneDollarValues.map((d) => {
    const pts = (d / unitDollars) * nextThreshold;
    return {
      dollars: d,
      points: pts,
      reached: balance >= pts,
      pointsNeeded: Math.max(0, pts - balance),
    };
  });
  /* Find the index of the highest milestone they've already reached, so we
     can highlight that step plus the immediate next one. */
  const currentMilestoneIdx = milestones.reduce(
    (best, m, i) => (m.reached ? i : best), -1
  );

  return (
    <main className={styles.page}>

      {/* ── 1. Hero card — gradient banner with greeting + animated counter ─── */}
      <section className={styles.hero} aria-labelledby="dash-greeting">
        <span className={`${styles.blob} ${styles.blobOne}`} aria-hidden="true" />
        <span className={`${styles.blob} ${styles.blobTwo}`} aria-hidden="true" />
        <span className={`${styles.blob} ${styles.blobThree}`} aria-hidden="true" />
        <span className={styles.dotPattern} aria-hidden="true" />

        <div className={styles.heroInner}>
          <div className={styles.heroLeft}>
            <span className={styles.welcomePill}>
              <span className={styles.pulseDot} aria-hidden="true" />
              Logged in as a member
            </span>
            <h1 id="dash-greeting" className={styles.greeting}>
              Welcome back,<br />
              <span className={styles.greetingName}>{greetingName}.</span>
            </h1>
            <p className={styles.subgreeting}>
              Thanks for being part of the WeCare family. Here are your rewards.
            </p>

            <div className={styles.heroActions}>
              {balance >= nextThreshold ? (
                <Link href="/booking" className={styles.heroCta}>
                  <SparkleIcon size={18} animate={false} /> Use my discount on the next visit
                </Link>
              ) : (
                <Link href="/booking" className={styles.heroCta}>
                  <CalendarIcon size={18} animate={false} /> Earn more — book a visit
                </Link>
              )}
              <Link href="/api/auth/logout" className={styles.heroSecondary}>
                Sign out
              </Link>
            </div>
          </div>

          {/* Right side: avatar + animated points number */}
          <aside className={styles.heroRight} aria-label="Your points balance">
            <div className={styles.avatarWrap}>
              <MemberAvatar
                src={member.photo}
                initials={initials(member.displayName)}
                className={styles.avatar}
                fallbackClassName={styles.avatarFallback}
              />
              <span className={styles.avatarBadge} aria-hidden="true" title="Loyalty member">
                <StarIcon size={14} animate={false} />
              </span>
            </div>

            <div className={styles.pointsBadge}>
              <span className={styles.pointsLabel}>Points balance</span>
              <AnimatedCounter
                target={balance}
                duration={1600}
                className={styles.pointsValue}
              />
              <span className={styles.pointsCash}>
                {dollarsAvailable > 0 ? (
                  <>
                    <strong>${dollarsAvailable}</strong> ready to redeem
                    <span className={styles.pointsCashSub}>
                      {pointsToNextIncrement === nextThreshold
                        ? `Earn ${nextThreshold} more for $${nextDollarValue}`
                        : `${pointsToNextIncrement} pts to $${nextDollarValue}`}
                    </span>
                  </>
                ) : (
                  <>
                    {pointsToNextIncrement} pts to your first $1 reward
                  </>
                )}
              </span>
            </div>
          </aside>
        </div>
      </section>


      {/* ── 2. Stats strip — earned / redeemed / available / expiring ───────── */}
      <section className={styles.statsStrip} aria-label="Lifetime stats">
        <div className={`${styles.statTile} ${styles.statBlue}`}>
          <span className={styles.statIcon} aria-hidden="true"><StarIcon size={26} /></span>
          <span className={styles.statValue}><AnimatedCounter target={lifetime} duration={1400} /></span>
          <span className={styles.statLabel}>Total earned (lifetime)</span>
        </div>
        <div className={`${styles.statTile} ${styles.statMint}`}>
          <span className={styles.statIcon} aria-hidden="true"><AwardIcon size={26} /></span>
          <span className={styles.statValue}><AnimatedCounter target={balance} duration={1400} /></span>
          <span className={styles.statLabel}>Available now</span>
        </div>
        <div className={`${styles.statTile} ${styles.statAmber}`}>
          <span className={styles.statIcon} aria-hidden="true"><BadgeIcon size={26} /></span>
          <span className={styles.statValue}><AnimatedCounter target={redeemed} duration={1400} /></span>
          <span className={styles.statLabel}>Redeemed so far</span>
        </div>
        <div className={`${styles.statTile} ${styles.statRose}`}>
          <span className={styles.statIcon} aria-hidden="true"><LightningIcon size={26} /></span>
          <span className={styles.statValue}>
            {expiring > 0
              ? <AnimatedCounter target={expiring} duration={1400} />
              : <span aria-hidden="true">—</span>}
          </span>
          <span className={styles.statLabel}>
            {expiring > 0 ? `Expiring ${formatDate(expDate)}` : 'No points expiring soon'}
          </span>
        </div>
      </section>


      {/* ── 3. Progress band — cumulative dollars + next $1 increment ───────── */}
      {next && (
        <section className={styles.progressBand} aria-labelledby="progress-heading">
          <div className={styles.progressHeader}>
            <div>
              <p className="ds-eyebrow">Your rewards</p>
              <h2 id="progress-heading" className={styles.progressTitle}>
                {dollarsAvailable > 0 ? (
                  <>
                    You have <span className={styles.progressEm}>${dollarsAvailable}</span> in rewards ready to redeem.
                  </>
                ) : (
                  <>
                    {pointsToNextIncrement} more {pointsToNextIncrement === 1 ? 'point' : 'points'} to unlock your first <span className={styles.progressEm}>${unitDollars}</span> off.
                  </>
                )}
              </h2>
              <p className={styles.progressSubtitle}>
                {pointsInProgress === 0
                  ? <>Earn <strong>{nextThreshold}</strong> more points to add another <strong>${unitDollars}</strong> on top.</>
                  : <>You're <strong>{pointsInProgress}/{nextThreshold}</strong> of the way to your next <strong>${unitDollars}</strong>{' '}
                      — {pointsToNextIncrement} {pointsToNextIncrement === 1 ? 'point' : 'points'} to go.</>
                }
              </p>
            </div>
            <div className={styles.progressMeta}>
              <span className={styles.progressMetaValue}>{balance}</span>
              <span className={styles.progressMetaLabel}>points total</span>
            </div>
          </div>

          {/* Bar shows progress within the CURRENT increment (0 → nextThreshold pts). */}
          <div
            className={styles.progressTrack}
            role="progressbar"
            aria-label={`Progress to next $${unitDollars} reward`}
            aria-valuemin={0}
            aria-valuemax={nextThreshold}
            aria-valuenow={pointsInProgress}
          >
            <div
              className={styles.progressFill}
              style={{ width: `${incrementProgress}%` }}
            >
              <span className={styles.progressShine} aria-hidden="true" />
            </div>
            <span className={styles.progressBarStart} aria-hidden="true">${dollarsAvailable}</span>
            <span className={styles.progressBarEnd}   aria-hidden="true">${nextDollarValue}</span>
          </div>
        </section>
      )}


      {/* ── 4. Roadmap — milestone ladder so members see what's coming ──────── */}
      {next && (
        <section className={styles.roadmapSection} aria-labelledby="roadmap-heading">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">Reward roadmap</p>
            <h2 id="roadmap-heading" className="ds-h2">Stack your points for bigger discounts</h2>
            <p className="ds-lede">
              Your rewards never reset and never have to be used in small increments.
              Here's what your balance unlocks now and where you're headed:
            </p>
          </div>
          <ol className={styles.milestones} role="list">
            {milestones.map((m, i) => {
              const isCurrent = i === currentMilestoneIdx;
              const isNext = i === currentMilestoneIdx + 1;
              return (
                <li
                  key={m.dollars}
                  className={[
                    styles.milestone,
                    m.reached ? styles.milestoneReached : '',
                    isCurrent ? styles.milestoneCurrent : '',
                    isNext ? styles.milestoneNext : '',
                  ].filter(Boolean).join(' ')}
                >
                  <span className={styles.milestoneIcon} aria-hidden="true">
                    {m.reached ? <BadgeIcon size={20} animate={false} /> : <StarIcon size={20} animate={false} />}
                  </span>
                  <span className={styles.milestoneAmount}>${m.dollars}</span>
                  <span className={styles.milestonePts}>{m.points} pts</span>
                  <span className={styles.milestoneStatus}>
                    {m.reached
                      ? (isCurrent ? '✓ You are here' : '✓ Unlocked')
                      : `${m.pointsNeeded} pts to go`}
                  </span>
                </li>
              );
            })}
          </ol>
          <p className={styles.howToRedeem}>
            <SparkleIcon size={18} animate={false} />
            <span>
              <strong>How redemption works:</strong> when you book your next visit
              we'll automatically apply your full available balance — up to{' '}
              <strong>${dollarsAvailable || unitDollars}</strong>{' '}
              {dollarsAvailable > 0 ? 'right now' : 'once you reach your first reward'}
              . You don't have to redeem in small chunks; one visit can use the whole stack.
            </span>
          </p>
        </section>
      )}


      {/* ── 4. Rewards rail — the live Wix catalog ──────────────────────────── */}
      <section className={styles.rewardsSection} aria-labelledby="rewards-heading">
        <div className={styles.sectionHeader}>
          <p className="ds-eyebrow">Available rewards</p>
          <h2 id="rewards-heading" className="ds-h2">Redeem your points</h2>
          <p className="ds-lede">
            Use them on any service — primary care, weight loss, telehealth, hormone therapy.
          </p>
        </div>
        <ul className={styles.rewardsGrid} role="list">
          {rewards.length === 0 && (
            <li className={styles.rewardEmpty}>
              No rewards configured yet — check back soon.
            </li>
          )}
          {rewards.map((r) => {
            const canRedeem = balance >= r.requiredPoints;
            const rewardUnit = r.discountAmount ? Number(r.discountAmount.amount) : 0;
            const stacks = rewardUnit > 0 ? Math.floor(balance / r.requiredPoints) : 0;
            const totalDiscount = stacks * rewardUnit;
            const isStackable = r.type === 'DISCOUNT_AMOUNT' && rewardUnit > 0;
            return (
              <li key={r.id} className={`${styles.rewardCard} ${canRedeem ? styles.rewardReady : ''}`}>
                <div className={styles.rewardIcon} aria-hidden="true">
                  {r.type === 'DISCOUNT_AMOUNT' ? <CardIcon size={36} /> : <BadgeIcon size={36} />}
                </div>
                <h3 className={styles.rewardName}>
                  {isStackable && stacks > 1 ? (
                    <>${totalDiscount} <span className={styles.rewardSub}>off your next visit</span></>
                  ) : isStackable ? (
                    <>${rewardUnit} <span className={styles.rewardSub}>off any service</span></>
                  ) : (
                    r.name
                  )}
                </h3>
                <p className={styles.rewardCost}>
                  {isStackable && stacks > 1
                    ? `Stack of ${stacks} × $${rewardUnit} ($${totalDiscount} total) · ${rewardLabel(r)}`
                    : rewardLabel(r)}
                </p>
                {canRedeem ? (
                  <Link
                    href={`/booking?reward=${r.id}`}
                    className={styles.rewardBtn}
                    aria-label={`Redeem $${totalDiscount || rewardUnit} off`}
                  >
                    {isStackable && stacks > 1
                      ? `Apply $${totalDiscount} to my next visit`
                      : 'Redeem now'}
                  </Link>
                ) : (
                  <span className={styles.rewardLocked}>
                    {r.requiredPoints - balance} more pts needed
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </section>


      {/* ── 5. Earn-more grid ───────────────────────────────────────────────── */}
      <section className={styles.earnSection} aria-labelledby="earn-heading">
        <div className={styles.sectionHeader}>
          <p className="ds-eyebrow">Stack up faster</p>
          <h2 id="earn-heading" className="ds-h2">Ways to earn more points</h2>
        </div>
        <ul className={styles.earnGrid} role="list">
          {EARN_ACTIONS.map((a) => {
            const Icon: FC = earnIconMap[a.id] ?? BadgeIcon;
            return (
              <li key={a.id} className={styles.earnCard}>
                <span className={styles.earnIcon} aria-hidden="true"><Icon size={28} /></span>
                <span className={styles.earnPoints}>
                  {a.id === 'plan' ? '1 pt / $1' : `+${a.points} pts`}
                </span>
                <h3 className={styles.earnTitle}>{a.title}</h3>
                <p className={styles.earnDesc}>{a.desc}</p>
                {a.cta && (
                  <Link href={a.cta.href} className={styles.earnCta}>
                    {a.cta.label} →
                  </Link>
                )}
                {a.oneTime && !a.cta && (
                  <span className={styles.earnNote}>One-time bonus</span>
                )}
              </li>
            );
          })}
        </ul>
      </section>


      {/* ── 6. Tier ladder — only when tiers are configured ─────────────────── */}
      {tiers.length > 0 && (
        <section className={styles.tierSection} aria-labelledby="tier-heading">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">Membership status</p>
            <h2 id="tier-heading" className="ds-h2">Climb the tiers</h2>
          </div>
          <ol className={styles.tierLadder} role="list">
            {tiers.map((t, i) => {
              const reached = lifetime >= t.requiredPoints;
              return (
                <li key={t.id} className={`${styles.tierStep} ${reached ? styles.tierReached : ''}`}>
                  <span className={styles.tierIndex}>{i + 1}</span>
                  <span className={styles.tierName}>{t.name}</span>
                  <span className={styles.tierPoints}>{t.requiredPoints} pts</span>
                  {reached && <span className={styles.tierBadgeText}>Unlocked</span>}
                </li>
              );
            })}
          </ol>
        </section>
      )}


      {/* ── 7. Footer band ───────────────────────────────────────────────── */}
      <section className={styles.footerBand}>
        <div className={styles.footerInner}>
          <div>
            <h3 className={styles.footerHeading}>Questions about your rewards?</h3>
            <p className={styles.footerBody}>
              Call <a href="tel:+18134385220" className={styles.footerLink}>(813) 438-5220</a>
              {' '}or email <a href="mailto:info@wecarewellnessclinic.com" className={styles.footerLink}>info@wecarewellnessclinic.com</a> — we are happy to help.
            </p>
          </div>
          <div className={styles.footerActions}>
            <Link href="/loyalty/terms" className={styles.footerSecondary}>Program terms</Link>
            <Link href="/api/auth/logout" className={styles.footerSecondary}>Sign out</Link>
          </div>
        </div>
        {member.email && (
          <p className={styles.footerEmail}>
            Signed in as <strong>{member.email}</strong> · Member since {formatDate(account.createdDate)}
          </p>
        )}
      </section>
    </main>
  );
}
