/**
 * Loyalty program terms — patient-facing legal/program rules.
 *
 * Server component. Pulls live data from Wix where possible so the
 * displayed earn/redeem values match the program in real time.
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import {
  StarIcon, BadgeIcon, AwardIcon, ShieldIcon, CalendarIcon,
  HandshakeIcon, AlertIcon, MailIcon, PhoneIcon, ClipboardIcon,
} from '@/components/ui/AnimatedIcons';
import {
  listRewards, EARN_ACTIONS, rewardLabel,
} from '@/lib/wix-loyalty';
import { CLINIC } from '@/lib/clinic';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Loyalty Program Terms — WeCare Wellness Clinic',
  description:
    'Official program terms for the WeCare Wellness Loyalty Program — eligibility, earning rules, redemption, point expiration, and contact information.',
  alternates: { canonical: 'https://www.wecarewellnessclinic.com/loyalty/terms' },
  robots: { index: true, follow: true },
};

export const revalidate = 3600;

const lastUpdated = '28 April 2026';

export default async function LoyaltyTermsPage() {
  const rewards = await listRewards().catch(() => []);

  return (
    <main className={styles.page}>

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className={styles.hero}>
        <span className={`${styles.blob} ${styles.blobOne}`} aria-hidden="true" />
        <span className={`${styles.blob} ${styles.blobTwo}`} aria-hidden="true" />

        <div className={styles.heroInner}>
          <p className="ds-eyebrow" style={{ color: 'rgba(255,255,255,0.85)' }}>
            <Link href="/loyalty" className={styles.crumb}>Loyalty</Link>
            <span aria-hidden="true"> · </span>
            Program terms
          </p>
          <h1 className={styles.title}>WeCare Loyalty Program Terms</h1>
          <p className={styles.lede}>
            Plain-English rules for earning, redeeming, and managing your WeCare Wellness rewards points.
            Last updated {lastUpdated}.
          </p>
        </div>
      </section>


      {/* ── Body ─────────────────────────────────────────── */}
      <article className={styles.body}>

        {/* Quick-jump nav */}
        <nav className={styles.toc} aria-label="Sections">
          <a href="#overview"   className={styles.tocLink}><BadgeIcon size={18} /> Overview</a>
          <a href="#eligibility" className={styles.tocLink}><HandshakeIcon size={18} /> Eligibility</a>
          <a href="#earn"        className={styles.tocLink}><StarIcon size={18} /> Earning points</a>
          <a href="#redeem"      className={styles.tocLink}><AwardIcon size={18} /> Redemption</a>
          <a href="#expire"      className={styles.tocLink}><CalendarIcon size={18} /> Expiration</a>
          <a href="#changes"     className={styles.tocLink}><AlertIcon size={18} /> Changes</a>
          <a href="#contact"     className={styles.tocLink}><PhoneIcon size={18} /> Contact</a>
        </nav>


        <section id="overview" className={styles.section}>
          <div className={styles.sectionIcon}><BadgeIcon size={32} /></div>
          <h2 className={styles.sectionTitle}>1. Program overview</h2>
          <p>
            The WeCare Wellness Loyalty Program (the "Program") is a free, opt-in rewards
            program offered by <strong>WeCare Wellness Clinic, LLC</strong> ("WeCare", "we",
            "our") to active patients. Members earn points for engaging with their care —
            booking visits, purchasing care plans, and other qualifying actions — and
            redeem those points for discounts and benefits at the clinic.
          </p>
          <p>
            By joining the Program you agree to be bound by these Terms and by the
            general site <Link href="/terms" className={styles.inlineLink}>Terms of Use</Link>{' '}
            and <Link href="/privacy" className={styles.inlineLink}>Privacy Policy</Link>.
          </p>
        </section>


        <section id="eligibility" className={styles.section}>
          <div className={styles.sectionIcon}><HandshakeIcon size={32} /></div>
          <h2 className={styles.sectionTitle}>2. Eligibility &amp; enrolment</h2>
          <ul className={styles.list}>
            <li>Membership is open to U.S. residents aged 18 and older who are patients
              (current or new) of WeCare Wellness Clinic.</li>
            <li>Enrolment is free. There are no participation fees, no minimum spend, and
              no cancellation fees.</li>
            <li>You enrol by creating a Wix Member account on our website. One account
              per person.</li>
            <li>Membership is non-transferable. Points may not be sold, traded, or
              gifted to another individual.</li>
          </ul>
        </section>


        <section id="earn" className={styles.section}>
          <div className={styles.sectionIcon}><StarIcon size={32} /></div>
          <h2 className={styles.sectionTitle}>3. How you earn points</h2>
          <p>
            You earn points automatically when any of the following actions are recorded
            against your member account. Earning rules are defined in our member system
            and may be updated; the current rules are:
          </p>
          <ul className={styles.earnGrid}>
            {EARN_ACTIONS.map((a) => (
              <li key={a.id} className={styles.earnRow}>
                <span className={styles.earnPoints}>
                  {a.id === 'plan' ? '1 pt / $1' : `+${a.points} pts`}
                </span>
                <div>
                  <strong>{a.title}</strong>
                  <p>{a.desc}</p>
                  {a.oneTime && <span className={styles.tag}>One-time</span>}
                </div>
              </li>
            ))}
          </ul>
          <p className={styles.fineprint}>
            Points are credited within 24–48 hours of the qualifying action. Refunded,
            cancelled, no-show, or chargeback transactions will reverse any points earned
            from those transactions. Points have no cash value, are not securities, and
            cannot be redeemed for cash.
          </p>
        </section>


        <section id="redeem" className={styles.section}>
          <div className={styles.sectionIcon}><AwardIcon size={32} /></div>
          <h2 className={styles.sectionTitle}>4. Redemption</h2>
          <p>
            Points are redeemable for discounts on services and products offered by the
            clinic. Active rewards in the catalog right now:
          </p>
          {rewards.length > 0 ? (
            <ul className={styles.rewardList}>
              {rewards.map((r) => (
                <li key={r.id} className={styles.rewardRow}>
                  <ShieldIcon size={20} />
                  <span>{rewardLabel(r)}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles.fineprint}>
              No active rewards configured at the moment. Check back soon — or call us
              and we will let you know when new rewards launch.
            </p>
          )}
          <ul className={styles.list}>
            <li>Rewards must be redeemed against an eligible purchase or visit at the
              clinic. Discounts cannot be applied retroactively to past transactions.</li>
            <li>Discounts cannot be combined with other offers, promotional codes, or
              insurance copays unless explicitly stated.</li>
            <li>Points required per reward are subject to change; the cost shown at the
              time of redemption is final for that transaction.</li>
            <li>Redemption is processed at checkout (in-clinic) or at the time of
              booking confirmation (online).</li>
          </ul>
        </section>


        <section id="expire" className={styles.section}>
          <div className={styles.sectionIcon}><CalendarIcon size={32} /></div>
          <h2 className={styles.sectionTitle}>5. Point expiration</h2>
          <p>
            Each batch of earned points expires <strong>twelve (12) months</strong> from
            the date it was credited to your account. Your member dashboard displays the
            next batch's expiration date. Expired points cannot be reinstated.
          </p>
          <p>
            If your account becomes inactive (no qualifying activity for 24 consecutive
            months) we may close your account and forfeit any remaining balance. We will
            attempt to notify you via the email on file before doing so.
          </p>
        </section>


        <section id="changes" className={styles.section}>
          <div className={styles.sectionIcon}><AlertIcon size={32} /></div>
          <h2 className={styles.sectionTitle}>6. Changes, suspension &amp; cancellation</h2>
          <ul className={styles.list}>
            <li>We may modify earning rules, redemption rates, or these Terms at any time
              with reasonable notice via email or via this page. Changes apply
              prospectively only.</li>
            <li>We may suspend or terminate any member account, with or without notice,
              for fraud, abuse, misrepresentation, violation of these Terms, or
              violation of clinic policies. Forfeited points will not be refunded.</li>
            <li>You may close your member account at any time by contacting us. Unredeemed
              points are forfeited on closure.</li>
            <li>We reserve the right to discontinue the entire Program at our discretion.
              If we do, we will give members at least 30 days' notice to redeem
              outstanding points.</li>
          </ul>
        </section>


        <section id="contact" className={styles.section}>
          <div className={styles.sectionIcon}><PhoneIcon size={32} /></div>
          <h2 className={styles.sectionTitle}>7. Questions or issues</h2>
          <p>
            We are happy to help with any question about your account, your points, or these Terms.
          </p>
          <ul className={styles.contactList}>
            <li>
              <PhoneIcon size={20} />
              <a href={`tel:${CLINIC.phone}`} className={styles.inlineLink}>{CLINIC.phoneDisplay}</a>{' '}
              · Mon–Thu 9–5 · Fri 9–6 · Sat 9–1
            </li>
            <li>
              <MailIcon size={20} />
              <a href={`mailto:${CLINIC.email}`} className={styles.inlineLink}>{CLINIC.email}</a>
            </li>
            <li>
              <ClipboardIcon size={20} />
              {CLINIC.address}
            </li>
          </ul>
          <p className={styles.fineprint}>
            <strong>Governing law.</strong> The Program is administered from the State of
            Florida, USA. These Terms are governed by Florida law without regard to its
            conflict-of-law principles. Disputes will be resolved by the state and federal
            courts located in Hillsborough County, Florida.
          </p>
        </section>


        <div className={styles.footerActions}>
          <Link href="/loyalty" className={styles.backBtn}>← Back to my loyalty</Link>
          <Link href="/contact" className={styles.contactBtn}>Contact support</Link>
        </div>
      </article>
    </main>
  );
}
