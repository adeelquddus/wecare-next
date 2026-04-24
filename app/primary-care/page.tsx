import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import BookingCTA from '@/components/sections/BookingCTA';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Primary Care in Brandon, FL — WeCare Wellness Clinic',
  description:
    'Board-certified primary care for the whole family in Brandon, FL. Annual exams, chronic disease management, preventive screenings & same-week appointments. Most insurance accepted.',
  alternates: { canonical: 'https://www.wecarewellnessclinic.com/primary-care' },
  openGraph: {
    title: 'Primary Care — WeCare Wellness Clinic | Brandon, FL',
    description: 'Comprehensive primary care for every age. Same-week appointments, telehealth available.',
    url: 'https://www.wecarewellnessclinic.com/primary-care',
  },
};

const BENEFITS = [
  {
    icon: '🩺',
    title: 'Whole-family care',
    desc: 'From pediatric checkups to senior wellness, we treat every age under one roof.',
  },
  {
    icon: '📋',
    title: 'Annual wellness exams',
    desc: 'Preventive checkups with comprehensive lab work to catch issues early.',
  },
  {
    icon: '💊',
    title: 'Chronic disease management',
    desc: 'Ongoing support for diabetes, hypertension, high cholesterol, asthma & more.',
  },
  {
    icon: '🔬',
    title: 'In-house lab & diagnostics',
    desc: 'Fast, convenient lab draws and results without leaving our Brandon office.',
  },
  {
    icon: '📱',
    title: 'Telehealth follow-ups',
    desc: 'Can\'t make it in? Continue your care via secure video from anywhere in Florida.',
  },
  {
    icon: '🤝',
    title: 'Specialist referrals',
    desc: 'We coordinate warm referrals so your care stays connected and continuous.',
  },
];

const PROCESS = [
  { num: 1, title: 'Book online', desc: 'Choose your appointment type — new patient, follow-up, or urgent.' },
  { num: 2, title: 'See your provider', desc: 'Meet with a board-certified physician in-person or by video.' },
  { num: 3, title: 'Get your care plan', desc: 'Receive a personalized plan with next steps, labs, and referrals.' },
  { num: 4, title: 'Stay connected', desc: 'We follow up between visits to keep your health on track.' },
];

const FAQS = [
  {
    q: 'Do you accept new patients?',
    a: 'Yes — we are actively accepting new patients with same-week appointment availability.',
  },
  {
    q: 'What insurance do you accept?',
    a: 'We accept Aetna, United Healthcare, Medicare, Blue Cross Blue Shield, and MultiPlan. Self-pay options are also available.',
  },
  {
    q: 'Can I see a doctor for an urgent issue?',
    a: 'Yes. We offer same-day and next-day urgent appointments for established patients, and often same-week for new patients.',
  },
  {
    q: 'Do you offer telehealth for primary care?',
    a: 'Absolutely. Many primary care visits — including follow-ups, prescription refills, and lab result reviews — can be done via secure video.',
  },
  {
    q: 'What conditions do you manage?',
    a: 'We manage diabetes, hypertension, high cholesterol, asthma, thyroid disorders, GERD, anxiety, depression, and many other chronic conditions.',
  },
  {
    q: 'How do I prepare for my first visit?',
    a: 'Bring a photo ID, insurance card, list of current medications, and any recent lab or imaging results. New patient forms are available online.',
  },
];

export default function PrimaryCarePage() {
  return (
    <>
      <Hero
        headline="Primary care that puts you first"
        subtext="Board-certified physicians providing comprehensive, continuous care for patients of all ages in Brandon, FL — in-person and via telehealth."
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
              <p className={styles.introLabel}>Comprehensive primary care</p>
              <h2 id="intro-heading" className={styles.introHeading}>
                Your health partner for the long haul
              </h2>
              <p className={styles.introBody}>
                At WeCare Wellness Clinic, our primary care providers don't just treat symptoms — they build lasting relationships with patients to understand the full picture of your health. From your first well-child visit to managing a chronic condition, we're with you at every stage.
              </p>
              <p className={styles.introBody}>
                Located at 214 W Brandon Blvd, we serve Brandon, Valrico, Riverview, and patients across Florida via telehealth. Most major insurance plans are accepted.
              </p>
              <ul className={styles.featuresList} role="list">
                {['Annual wellness & preventive exams', 'Chronic disease management', 'Acute illness & injury treatment', 'Lab work & diagnostics on-site', 'Referrals to trusted specialists', 'Same-week & telehealth appointments'].map((f) => (
                  <li key={f} className={styles.featuresListItem}>
                    <span className={styles.checkIcon} aria-hidden="true">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.statsPanel} aria-label="Quick facts">
              {[
                { value: '500+', label: 'Patients served' },
                { value: '4.9★', label: 'Average patient rating' },
                { value: 'Same week', label: 'Appointment availability' },
                { value: '5+', label: 'Years serving Brandon, FL' },
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
            <h2 id="benefits-heading" className="ds-h2">Primary care services</h2>
            <p className="ds-lede" style={{ marginTop: 'var(--space-2)' }}>
              Everything you need to manage and protect your health — all in one place.
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
            <h2 id="process-heading" className="ds-h2">How a visit works</h2>
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
            <h2 id="faq-heading" className="ds-h2">Primary care FAQs</h2>
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

      {/* Insurance strip */}
      <div className={styles.insuranceStrip} role="complementary" aria-label="Insurance accepted">
        <p className={styles.insuranceText}>Insurance accepted</p>
        <p className={styles.insuranceNames}>Aetna · United Healthcare · Medicare · Blue Cross Blue Shield · MultiPlan</p>
      </div>

      <BookingCTA
        heading="Ready to make primary care a priority?"
        subtext="New and returning patients welcome. Same-week appointments available in Brandon or via telehealth across Florida."
      />
    </>
  );
}
