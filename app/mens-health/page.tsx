import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import BookingCTA from '@/components/sections/BookingCTA';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: "Men's Health in Brandon, FL — Testosterone, PrEP & More | WeCare Wellness",
  description:
    "Men's health services in Brandon, FL. Testosterone replacement therapy, cardiovascular screening, prostate health, sexual health, HIV PrEP & annual physicals. Same-week appointments.",
  alternates: { canonical: 'https://www.wecarewellnessclinic.com/mens-health' },
  openGraph: {
    title: "Men's Health — WeCare Wellness Clinic | Brandon, FL",
    description: "Proactive men's health care. TRT, cardiovascular screening, prostate health, sexual health & HIV PrEP.",
    url: 'https://www.wecarewellnessclinic.com/mens-health',
  },
};

const BENEFITS = [
  {
    icon: '💪',
    title: 'Testosterone replacement therapy',
    desc: 'Physician-supervised TRT to restore energy, libido, muscle mass, and mood for men with low testosterone.',
  },
  {
    icon: '❤️',
    title: 'Cardiovascular screening',
    desc: 'Cholesterol panels, blood pressure monitoring, and risk assessment to protect your heart.',
  },
  {
    icon: '🔬',
    title: 'Prostate health',
    desc: 'PSA testing and prostate screenings recommended for men 50+ or high-risk individuals.',
  },
  {
    icon: '🛡️',
    title: 'Sexual health & ED',
    desc: 'Discreet, evidence-based evaluation and treatment for erectile dysfunction and sexual health concerns.',
  },
  {
    icon: '💊',
    title: 'HIV PrEP',
    desc: 'Pre-exposure prophylaxis prescriptions and regular monitoring for at-risk individuals.',
  },
  {
    icon: '📋',
    title: 'Annual physicals',
    desc: 'Comprehensive annual health screenings tailored to men — including labs, vitals, and lifestyle review.',
  },
];

const PROCESS = [
  { num: 1, title: 'Book your visit', desc: 'Schedule online — new patient, physical, or specialist appointment.' },
  { num: 2, title: 'Labs & assessment', desc: 'We run targeted labs (testosterone, PSA, metabolic panel) before or at your visit.' },
  { num: 3, title: 'Provider review', desc: 'Sit down with your provider to review results and discuss your health priorities.' },
  { num: 4, title: 'Treatment & follow-up', desc: 'Receive your care plan, prescriptions, and schedule your next check-in.' },
];

const FAQS = [
  {
    q: 'How do I know if I have low testosterone?',
    a: 'Symptoms include fatigue, low libido, weight gain, mood changes, and reduced muscle mass. A simple blood test measures your testosterone levels — we\'ll review the results together.',
  },
  {
    q: 'Is testosterone replacement therapy safe?',
    a: 'TRT is safe when properly supervised. We monitor labs every 3–6 months to ensure optimal dosing and watch for any side effects.',
  },
  {
    q: 'At what age should men start prostate screening?',
    a: 'We recommend discussing PSA testing at age 50 for average-risk men, or 40–45 for those with a family history of prostate cancer or who are African American.',
  },
  {
    q: 'Do you prescribe HIV PrEP?',
    a: 'Yes. We prescribe PrEP (Truvada/Descovy) and provide the required quarterly lab monitoring for eligible patients.',
  },
  {
    q: 'Can ED be treated at WeCare?',
    a: 'Absolutely. We evaluate underlying causes (cardiovascular, hormonal, or psychological) and offer evidence-based treatments including medications and lifestyle interventions.',
  },
  {
    q: 'Do you accept insurance for men\'s health visits?',
    a: 'Yes — Aetna, United Healthcare, Medicare, BCBS, and MultiPlan are all accepted. Annual physicals are typically covered at 100% under most plans.',
  },
];

export default function MensHealthPage() {
  return (
    <>
      <Hero
        headline="Men's health done right — no excuses"
        subtext="Proactive, personalized men's healthcare covering testosterone, cardiovascular health, prostate screening, sexual health, HIV PrEP, and annual physicals in Brandon, FL."
        ctaLabel="Book a Visit"
        ctaHref="/booking"
        secondaryLabel="Call us"
        secondaryHref="tel:+18134385220"
        badgeText="Accepting new patients"
        variant="gradient"
      />

      {/* Intro */}
      <section className={styles.intro} aria-labelledby="intro-heading">
        <div className="container">
          <div className={styles.introGrid}>
            <div>
              <p className={styles.introLabel}>Men's health & preventive care</p>
              <h2 id="intro-heading" className={styles.introHeading}>
                Your health matters at every age
              </h2>
              <p className={styles.introBody}>
                Too many men put off healthcare until something goes wrong. At WeCare Wellness Clinic, we make it easy to stay ahead of health issues with proactive screenings, hormone optimization, and personalized care plans built around your goals — not just a checklist.
              </p>
              <p className={styles.introBody}>
                Whether you're 25 or 65, our providers understand men's health and create a comfortable, straightforward environment to talk openly about what matters most to you.
              </p>
              <ul className={styles.featuresList} role="list">
                {[
                  'Testosterone replacement therapy (TRT)',
                  'Cardiovascular risk screening',
                  'Prostate health & PSA testing',
                  'Sexual health & ED treatment',
                  'HIV PrEP prescriptions',
                  'Annual physicals & wellness labs',
                ].map((f) => (
                  <li key={f} className={styles.featuresListItem}>
                    <span className={styles.checkIcon} aria-hidden="true">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.statsPanel} aria-label="Quick facts">
              {[
                { value: '4.9★', label: 'Average patient rating' },
                { value: 'Same week', label: 'Appointment availability' },
                { value: 'Discreet', label: 'Confidential care environment' },
                { value: 'Telehealth', label: 'Available statewide in FL' },
              ].map((s) => (
                <div key={s.label} className={styles.statRow}>
                  <span className={styles.statValue}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className={styles.benefitsSection} aria-labelledby="benefits-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">What we offer</p>
            <h2 id="benefits-heading" className="ds-h2">Men's health services</h2>
            <p className="ds-lede" style={{ marginTop: 'var(--space-2)' }}>
              Comprehensive men's health care from preventive screenings to hormone optimization.
            </p>
          </div>
          <div className={styles.benefitsGrid} role="list">
            {BENEFITS.map((b) => (
              <div key={b.title} className={styles.benefitCard} role="listitem">
                <span className={styles.benefitIcon} aria-hidden="true">{b.icon}</span>
                <h3 className={styles.benefitTitle}>{b.title}</h3>
                <p className={styles.benefitDesc}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={styles.processSection} aria-labelledby="process-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">Getting started</p>
            <h2 id="process-heading" className="ds-h2">How a men's health visit works</h2>
          </div>
          <ol className={styles.processSteps} role="list">
            {PROCESS.map((step) => (
              <li key={step.num} className={styles.processStep}>
                <div className={styles.stepNum} aria-hidden="true">{step.num}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection} aria-labelledby="faq-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">Common questions</p>
            <h2 id="faq-heading" className="ds-h2">Men's health FAQs</h2>
          </div>
          <div className={styles.faqGrid} role="list">
            {FAQS.map((faq) => (
              <div key={faq.q} className={styles.faqItem} role="listitem">
                <h3 className={styles.faqQ}>{faq.q}</h3>
                <p className={styles.faqA}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.insuranceStrip} role="complementary" aria-label="Insurance accepted">
        <p className={styles.insuranceText}>Insurance accepted</p>
        <p className={styles.insuranceNames}>Aetna · United Healthcare · Medicare · Blue Cross Blue Shield · MultiPlan</p>
      </div>

      <BookingCTA
        heading="Start taking care of your health today"
        subtext="Men's health appointments available same-week in Brandon, FL or via telehealth across Florida."
      />
    </>
  );
}
