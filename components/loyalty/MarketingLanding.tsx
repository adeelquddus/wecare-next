import Button from '@/components/ui/Button';
import {
  StarIcon,
  BadgeIcon,
  SparkleIcon,
  LightningIcon,
  HandshakeIcon,
  CalendarIcon,
  CardIcon,
  MedicalCrossIcon,
  ClipboardIcon,
  AwardIcon,
  type IconProps,
} from '@/components/ui/AnimatedIcons';
import { EARN_ACTIONS, type LoyaltyReward, type EarnAction } from '@/lib/wix-loyalty';
import styles from './MarketingLanding.module.css';

interface Props {
  rewards: LoyaltyReward[];
}

type IconComponent = (props: IconProps) => JSX.Element;

/** Map an EarnAction id to a brand-coloured animated icon. */
const EARN_ICONS: Record<string, IconComponent> = {
  signup: BadgeIcon,
  visit: CalendarIcon,
  plan: CardIcon,
  birthday: SparkleIcon,
  social: LightningIcon,
};

/** Pretty label for a redemption reward - e.g. "$1 off". */
function rewardSubtitle(r: LoyaltyReward): string {
  if (r.type === 'DISCOUNT_AMOUNT' && r.discountAmount) {
    return `$${Number(r.discountAmount.amount).toFixed(0)} off any service`;
  }
  return r.name;
}

export default function MarketingLanding({ rewards }: Props) {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className={styles.hero} aria-labelledby="loyalty-hero-heading">
        <span className={`${styles.blob} ${styles.blobOne}`} aria-hidden="true" />
        <span className={`${styles.blob} ${styles.blobTwo}`} aria-hidden="true" />
        <span className={`${styles.blob} ${styles.blobThree}`} aria-hidden="true" />
        <div className={styles.dotPattern} aria-hidden="true" />

        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span className={styles.pulseDot} aria-hidden="true" />
              <span>WeCare rewards · Free to join</span>
            </div>

            <h1 id="loyalty-hero-heading" className={styles.heroHeadline}>
              <span className={styles.headlineDark}>Earn rewards every time you</span>
              <span className={styles.headlineGradient}>take care of your health.</span>
            </h1>

            <p className={styles.heroLede}>
              Real points for real care. Sign up free, earn points on every visit, plan
              purchase, and birthday - then redeem them for instant savings on any service.
            </p>

            <div className={styles.heroCtas}>
              {/*
                Use a plain <a> for the auth endpoint - Next's <Link> would try to
                client-side route to a non-existent page, but /api/auth/login is a
                server redirect handled by the auth route handler.
              */}
              <a href="/api/auth/login" className={styles.ctaPrimary}>
                Sign in & view my points
              </a>
              <Button href="#how-it-works" variant="outline" size="lg">
                How it works
              </Button>
            </div>

            <ul className={styles.trustPills} role="list">
              <li>
                <StarIcon size={16} />
                <span>50 pt sign-up bonus</span>
              </li>
              <li>
                <HandshakeIcon size={16} />
                <span>16+ members enrolled</span>
              </li>
              <li>
                <CardIcon size={16} />
                <span>10 pts = $1 off</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── How it works ──────────────────────────────────────────── */}
      <section
        id="how-it-works"
        className={`section ${styles.howSection}`}
        aria-labelledby="how-it-works-heading"
      >
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">How it works</p>
            <h2 id="how-it-works-heading" className="ds-h2">
              Three simple steps to start saving
            </h2>
            <p className="ds-lede">
              Joining takes a minute. Earning starts on your very next visit.
            </p>
          </div>

          <ol className={styles.howGrid} role="list">
            <li className={styles.howCard}>
              <span className={styles.howStep}>01</span>
              <span className={styles.howIcon}>
                <ClipboardIcon size={32} />
              </span>
              <h3 className={styles.cardTitle}>Join for free</h3>
              <p className={styles.cardBody}>
                Get enrolled automatically on your next visit - or sign up online in
                under a minute. No fees, ever.
              </p>
            </li>
            <li className={styles.howCard}>
              <span className={styles.howStep}>02</span>
              <span className={styles.howIcon}>
                <MedicalCrossIcon size={32} />
              </span>
              <h3 className={styles.cardTitle}>Earn points</h3>
              <p className={styles.cardBody}>
                Every visit, every plan purchase, your birthday, even an Instagram
                follow - your points add up automatically.
              </p>
            </li>
            <li className={styles.howCard}>
              <span className={styles.howStep}>03</span>
              <span className={styles.howIcon}>
                <BadgeIcon size={32} />
              </span>
              <h3 className={styles.cardTitle}>Redeem rewards</h3>
              <p className={styles.cardBody}>
                Trade 10 points for $1 off any service at checkout. Use them any time -
                they never expire mid-month.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* ── Earn points ───────────────────────────────────────────── */}
      <section className={`section ${styles.earnSection}`} aria-labelledby="earn-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">Ways to earn</p>
            <h2 id="earn-heading" className="ds-h2">
              Five real ways to stack points
            </h2>
            <p className="ds-lede">
              These are the actual rules running on our live program - pulled
              straight from our Wix Loyalty configuration.
            </p>
          </div>

          <ul className={styles.earnGrid} role="list">
            {EARN_ACTIONS.map((action: EarnAction) => {
              const Icon = EARN_ICONS[action.id] ?? AwardIcon;
              return (
                <li key={action.id} className={styles.earnCard}>
                  <span className={styles.earnIcon}>
                    <Icon size={28} />
                  </span>
                  <div className={styles.earnPoints}>
                    <span className={styles.earnPointsValue}>+{action.points}</span>
                    <span className={styles.earnPointsLabel}>
                      {action.points === 1 ? 'pt / $1' : action.oneTime ? 'pts · one-time' : 'pts'}
                    </span>
                  </div>
                  <h3 className={styles.cardTitle}>{action.title}</h3>
                  <p className={styles.cardBody}>{action.desc}</p>
                  {action.cta && (
                    <div className={styles.earnCta}>
                      <Button
                        href={action.cta.href}
                        variant="ghost"
                        size="sm"
                        external={action.cta.href.startsWith('http')}
                      >
                        {action.cta.label} →
                      </Button>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ── Available rewards ─────────────────────────────────────── */}
      <section className={`section ${styles.rewardsSection}`} aria-labelledby="rewards-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">Available rewards</p>
            <h2 id="rewards-heading" className="ds-h2">
              Redeem your points for instant savings
            </h2>
            <p className="ds-lede">
              {rewards.length === 1
                ? 'One simple, generous redemption - no fine print.'
                : 'Pick the reward that works for you.'}
            </p>
          </div>

          {rewards.length === 0 ? (
            <p className={styles.rewardsEmpty}>
              New rewards are being prepared. Check back soon - your points are still stacking.
            </p>
          ) : (
            <ul
              className={`${styles.rewardsGrid} ${rewards.length === 1 ? styles.rewardsGridSingle : ''}`}
              role="list"
            >
              {rewards.map((r) => (
                <li key={r.id} className={styles.rewardCard}>
                  <span className={styles.rewardIcon}>
                    <AwardIcon size={36} />
                  </span>
                  <p className={styles.rewardEyebrow}>{rewardSubtitle(r)}</p>
                  <h3 className={styles.rewardName}>{r.name}</h3>
                  <p className={styles.rewardCost}>
                    <span className={styles.rewardCostValue}>{r.requiredPoints}</span>
                    <span className={styles.rewardCostLabel}>points</span>
                  </p>
                  <span className={styles.rewardBadge}>
                    <span className={styles.pulseDot} aria-hidden="true" />
                    Available now
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* ── Sign-in band ──────────────────────────────────────────── */}
      <section className={styles.signInBand} aria-labelledby="signin-heading">
        <span className={`${styles.blob} ${styles.bandBlobOne}`} aria-hidden="true" />
        <span className={`${styles.blob} ${styles.bandBlobTwo}`} aria-hidden="true" />
        <div className="container">
          <div className={styles.signInInner}>
            <div>
              <p className={styles.signInEyebrow}>Already a member?</p>
              <h2 id="signin-heading" className={styles.signInHeading}>
                Sign in to view your points
              </h2>
              <p className={styles.signInBody}>
                Check your balance, see your progress toward the next reward, and
                redeem in seconds.
              </p>
            </div>
            <div className={styles.signInCtaWrap}>
              <a href="/api/auth/login" className={styles.signInCta}>
                Sign in to my account
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
