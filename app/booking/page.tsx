import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Card from '@/components/ui/Card';
import { CLINIC, HOURS_DISPLAY, INSURANCE, SERVICES } from '@/lib/clinic';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Book an Appointment — WeCare Wellness Clinic Brandon FL',
  description:
    'Book an appointment at WeCare Wellness Clinic in Brandon, FL. Same-week availability for primary care, weight loss, telehealth & more. Call (813) 438-5220 or book online.',
  keywords: [
    'book appointment Brandon FL',
    'schedule doctor appointment Brandon FL',
    'same-week appointment Brandon FL',
    'online doctor booking Brandon FL',
    'telehealth appointment Florida',
    'primary care appointment Brandon FL',
    'new patient appointment Brandon FL',
    'same-day telehealth Florida',
    'doctor appointment near me Brandon',
    'WeCare Wellness book appointment',
  ],
  alternates: { canonical: 'https://www.wecarewellnessclinic.com/booking' },
  openGraph: {
    title: 'Book an Appointment — WeCare Wellness Clinic Brandon FL',
    description: 'Same-week in-person or telehealth appointments. Primary care, weight loss, women\'s health & more in Brandon, FL.',
    url: 'https://www.wecarewellnessclinic.com/booking',
  },
};

const STEPS = [
  { n: 1, label: 'Choose service', desc: 'Select the care you need' },
  { n: 2, label: 'Pick a time',    desc: 'Find a slot that works for you' },
  { n: 3, label: 'Confirm',        desc: 'Enter your details and confirm' },
];

export default function BookingPage() {
  return (
    <>
      <Hero
        headline="Book your appointment"
        subtext="Same-week appointments available in-person in Brandon or via Telehealth across Florida. Most insurance accepted."
        ctaLabel={`Call ${CLINIC.phoneDisplay}`}
        ctaHref={`tel:${CLINIC.phone}`}
        showPhone={false}
        variant="gradient"
      />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>
            {/* Booking panel */}
            <div className={styles.bookingPanel}>
              {/* Stepper */}
              <div className={styles.stepper} aria-label="Booking steps">
                {STEPS.map((step, i) => (
                  <div key={step.n} className={styles.stepWrap}>
                    <div className={`${styles.step} ${i === 0 ? styles.stepActive : ''}`}>
                      <span className={styles.stepNumber} aria-hidden="true">{step.n}</span>
                      <div>
                        <div className={styles.stepLabel}>{step.label}</div>
                        <div className={styles.stepDesc}>{step.desc}</div>
                      </div>
                    </div>
                    {i < STEPS.length - 1 && <div className={styles.stepLine} aria-hidden="true" />}
                  </div>
                ))}
              </div>

              {/* Service picker */}
              <Card padding="lg" className={styles.formCard}>
                <h2 className={`ds-h3 ${styles.formTitle}`}>Choose a service</h2>
                <p className={styles.formSub}>Select the type of appointment you need</p>

                <fieldset className={styles.serviceGrid}>
                  <legend className="ds-eyebrow">Available services</legend>
                  {SERVICES.map((s) => (
                    <label key={s.slug} className={styles.serviceOption}>
                      <input
                        type="radio"
                        name="service"
                        value={s.slug}
                        className={styles.radioInput}
                        aria-label={s.name}
                      />
                      <span className={styles.serviceOptionContent}>
                        <span className={styles.serviceOptionIcon} aria-hidden="true">{s.icon}</span>
                        <span className={styles.serviceOptionName}>{s.name}</span>
                      </span>
                    </label>
                  ))}
                </fieldset>

                <div className={styles.visitType}>
                  <h3 className={styles.visitLabel}>Visit type</h3>
                  <div className={styles.visitOptions}>
                    {['In-person — Brandon, FL', 'Telehealth — Video visit'].map((v) => (
                      <label key={v} className={styles.visitOption}>
                        <input type="radio" name="visitType" value={v} className={styles.radioInput} />
                        <span>{v}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className={styles.orDivider} aria-hidden="true">
                  <span>or</span>
                </div>

                <a
                  href={`tel:${CLINIC.phone}`}
                  className={styles.callToBook}
                >
                  📞 Call to book: <strong>{CLINIC.phoneDisplay}</strong>
                </a>
              </Card>
            </div>

            {/* Info rail */}
            <aside className={styles.rail} aria-label="Appointment information">
              <Card padding="lg" className={styles.railCard}>
                <h2 className={`ds-h3 ${styles.railTitle}`}>What to expect</h2>
                <ul className={styles.expectList} role="list">
                  {[
                    'Confirmation sent to your email or phone',
                    'Arrive 10 min early for new patient paperwork',
                    'Bring your insurance card and photo ID',
                    'Video link sent 1 hour before telehealth visits',
                    'Cancellations: please call 24 hrs in advance',
                  ].map((item) => (
                    <li key={item} className={styles.expectItem}>
                      <span aria-hidden="true" className={styles.expectCheck}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>

              <Card padding="lg" className={styles.railCard}>
                <h3 className={styles.railSubTitle}>Office hours</h3>
                <ul className={styles.hoursList} role="list">
                  {HOURS_DISPLAY.map((h) => (
                    <li key={h.days} className={styles.hoursItem}>
                      <span className={styles.hoursDay}>{h.days}</span>
                      <span className={styles.hoursTime}>{h.hours}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card padding="lg" className={styles.railCard}>
                <h3 className={styles.railSubTitle}>Insurance accepted</h3>
                <ul className={styles.insuranceList} role="list">
                  {INSURANCE.map((ins) => (
                    <li key={ins} className={styles.insuranceItem}>
                      <span aria-hidden="true">✓</span> {ins}
                    </li>
                  ))}
                </ul>
                <p className={styles.selfPayNote}>
                  Self-pay options available. Ask about our sliding scale fees.
                </p>
              </Card>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
