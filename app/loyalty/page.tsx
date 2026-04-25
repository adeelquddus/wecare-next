import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import BookingCTA from '@/components/sections/BookingCTA';
import Card from '@/components/ui/Card';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Patient Loyalty Program — WeCare Wellness Clinic Brandon FL',
  description:
    'Join the WeCare Wellness Loyalty Program in Brandon, FL. Earn points on every visit, unlock discounts on services, and get exclusive member benefits as a returning patient.',
  keywords: [
    'patient loyalty program Brandon FL',
    'healthcare rewards program Brandon FL',
    'WeCare Wellness loyalty',
    'patient rewards Brandon Florida',
    'wellness membership Brandon FL',
    'doctor loyalty program Brandon FL',
  ],
  alternates: { canonical: 'https://www.wecarewellnessclinic.com/loyalty' },
  openGraph: {
    title: 'Patient Loyalty Program — WeCare Wellness Clinic',
    description: 'Earn points on every visit, redeem rewards, and unlock exclusive benefits. Free to join at WeCare Wellness Clinic in Brandon, FL.',
    url: 'https://www.wecarewellnessclinic.com/loyalty',
  },
};

const TIERS = [
  {
    name: 'Wellness',
    icon: '🌱',
    color: 'teal',
    points: '0–499 pts',
    perks: [
      'Welcome gift on first visit',
      'Birthday month bonus points',
      'Email health tips & reminders',
      'Online booking priority',
    ],
  },
  {
    name: 'Vitality',
    icon: '⭐',
    color: 'blue',
    points: '500–1,499 pts',
    perks: [
      'All Wellness perks',
      '5% off in-house supplements',
      'Free annual wellness screening',
      'Priority same-day appointment access',
      'Quarterly health check-in call',
    ],
    featured: true,
  },
  {
    name: 'Premier',
    icon: '👑',
    color: 'gold',
    points: '1,500+ pts',
    perks: [
      'All Vitality perks',
      '10% off all services',
      'Dedicated care coordinator',
      'Free telehealth visits (2/year)',
      'Exclusive member-only events',
      'Family member referral bonus',
    ],
  },
];

const HOW_IT_WORKS = [
  { step: 1, icon: '📋', title: 'Join for free', desc: 'Sign up at your next visit or online — no fees, no minimums.' },
  { step: 2, icon: '⚕️', title: 'Earn points', desc: 'Get points on every visit, referral, and eligible service.' },
  { step: 3, icon: '🎁', title: 'Redeem rewards', desc: 'Use points for discounts, free services, and exclusive perks.' },
];

export default function LoyaltyPage() {
  return (
    <>
      <Hero
        headline="Rewarding you for taking care of your health"
        subtext="The WeCare Loyalty Program gives you points every time you invest in your wellness — and turns those points into real benefits."
        ctaLabel="Join the program"
        ctaHref="/booking"
        secondaryLabel="Learn how it works"
        secondaryHref="#how-it-works"
        badgeText="Free to join"
        variant="gradient"
      />

      {/* How it works */}
      <section id="how-it-works" className={styles.howSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">Simple by design</p>
            <h2 className="ds-h2">How it works</h2>
          </div>
          <ol className={styles.steps} role="list">
            {HOW_IT_WORKS.map((item) => (
              <li key={item.step} className={styles.step}>
                <div className={styles.stepNum} aria-hidden="true">{item.step}</div>
                <span className={styles.stepIcon} aria-hidden="true">{item.icon}</span>
                <h3 className={styles.stepTitle}>{item.title}</h3>
                <p className={styles.stepDesc}>{item.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Tiers */}
      <section className={styles.tiersSection} aria-labelledby="tiers-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">Membership tiers</p>
            <h2 id="tiers-heading" className="ds-h2">Choose your level</h2>
            <p className="ds-lede" style={{ marginTop: 'var(--space-2)' }}>
              Start at Wellness and earn your way to Premier — the more you engage with your health, the more you earn.
            </p>
          </div>
          <ul className={styles.tiersGrid} role="list">
            {TIERS.map((tier) => (
              <li key={tier.name}>
                <Card padding="lg" className={`${styles.tierCard} ${tier.featured ? styles.tierFeatured : ''}`}>
                  {tier.featured && (
                    <div className={styles.popularBadge} aria-label="Most popular tier">Most popular</div>
                  )}
                  <span className={styles.tierIcon} aria-hidden="true">{tier.icon}</span>
                  <h3 className={styles.tierName}>{tier.name}</h3>
                  <p className={styles.tierPoints}>{tier.points}</p>
                  <ul className={styles.perkList} role="list">
                    {tier.perks.map((perk) => (
                      <li key={perk} className={styles.perk}>
                        <span className={styles.perkCheck} aria-hidden="true">✓</span>
                        {perk}
                      </li>
                    ))}
                  </ul>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <BookingCTA
        heading="Ready to start earning?"
        subtext="Join free at your next appointment — in-person or telehealth. Points start accumulating from day one."
      />
    </>
  );
}
