import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import BookingCTA from '@/components/sections/BookingCTA';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Telehealth in Florida — Video Visits with WeCare Wellness Clinic | Brandon, FL',
  description:
    'Board-certified telehealth visits across Florida. Same-day video appointments for primary care, prescription refills, follow-ups, weight loss, and more. Most insurance accepted.',
  alternates: { canonical: 'https://www.wecarewellnessclinic.com/telehealth' },
  openGraph: {
    title: 'Telehealth — WeCare Wellness Clinic | Video Visits Across Florida',
    description: 'Same-day video appointments with board-certified providers. Primary care, prescriptions, follow-ups & more.',
    url: 'https://www.wecarewellnessclinic.com/telehealth',
  },
};

const BENEFITS = [
  {
    icon: '📱',
    title: 'Same-day appointments',
    desc: 'No waiting rooms. See a provider today from your phone, tablet, or computer.',
  },
  {
    icon: '🏠',
    title: 'Care from anywhere in FL',
    desc: 'Available to all Florida residents — from Jacksonville to Miami. No travel required.',
  },
  {
    icon: '💊',
    title: 'Prescription management',
    desc: 'Refills, new prescriptions, and medication adjustments handled during your video visit.',
  },
  {
    icon: '🔄',
    title: 'Chronic condition follow-ups',
    desc: 'Manage diabetes, hypertension, thyroid disorders, and other conditions without leaving home.',
  },
  {
    icon: '🧠',
    title: 'Mental health check-ins',
    desc: 'Brief mental health screenings and medication management for anxiety and depression.',
  },
  {
    icon: '📋',
    title: 'Lab result reviews',
    desc: 'Go over your blood work results with your provider and understand what they mean for you.',
  },
];

const PROCESS = [
  { num: 1, title: 'Book online', desc: 'Select telehealth as your visit type and choose an available time slot.' },
  { num: 2, title: 'Get a link', desc: 'Receive a secure video link via email or text before your appointment.' },
  { num: 3, title: 'Connect with your provider', desc: 'Join your visit from any device — no downloads required.' },
  { num: 4, title: 'Receive your care plan', desc: 'Get prescriptions, referrals, and follow-up instructions sent directly to you.' },
];

const FAQS = [
  {
    q: 'What conditions can be treated via telehealth?',
    a: 'Telehealth is great for cold & flu, UTIs, allergies, prescription refills, follow-up visits, lab reviews, chronic disease check-ins, and mental health screenings. Emergency conditions should always be seen in person.',
  },
  {
    q: 'Is telehealth covered by insurance?',
    a: 'Yes — most plans including Aetna, United Healthcare, Medicare, BCBS, and MultiPlan cover telehealth visits. Coverage expanded significantly since 2020 and most plans now treat video visits like in-person visits.',
  },
  {
    q: 'Do I need to download an app?',
    a: 'No. Our telehealth platform works directly in your web browser on any smartphone, tablet, or computer. Just click the link we send you.',
  },
  {
    q: 'Can I get a prescription through telehealth?',
    a: 'Yes. Our providers can prescribe most medications via telehealth, including antibiotics, blood pressure medications, GLP-1 weight loss medications, and more. Controlled substances may require an in-person visit per federal law.',
  },
  {
    q: 'Are telehealth visits private?',
    a: 'Yes. All video visits are conducted over a HIPAA-compliant, encrypted platform. We recommend finding a private space for your visit.',
  },
  {
    q: 'Can I do my weight loss program via telehealth?',
    a: 'Absolutely. Our GLP-1 medical weight loss program follow-up appointments are available via telehealth, making it convenient to stay on track no matter where you are in Florida.',
  },
];

export default function TelehealthPage() {
  return (
    <>
      <Hero
        headline="See a doctor today — from anywhere in Florida"
        subtext="Board-certified providers available via secure video for primary care, prescription refills, chronic condition management, and more. No commute. No waiting room."
        ctaLabel="Book a Video Visit"
        ctaHref="/booking"
        secondaryLabel="Call us"
        secondaryHref="tel:+18134385220"
        badgeText="Same-day visits available"
        variant="gradient"
      />

      {/* Intro */}
      <section className={styles.intro} aria-labelledby="intro-heading">
        <div className="container">
          <div className={styles.introGrid}>
            <div>
              <p className={styles.introLabel}>Telehealth visits — Florida-wide</p>
              <h2 id="intro-heading" className={styles.introHeading}>
                Quality care without the commute
              </h2>
              <p className={styles.introBody}>
                WeCare Wellness Clinic's telehealth service brings board-certified providers to you — wherever you are in Florida. Whether you can't make it to our Brandon office or simply prefer the convenience, our video visits deliver the same quality care as an in-person appointment for most conditions.
              </p>
              <p className={styles.introBody}>
                Available Monday through Saturday, with same-day scheduling when slots are open. All it takes is a phone or computer and a few minutes of your time.
              </p>
              <ul className={styles.featuresList} role="list">
                {[
                  'Same-day video appointments available',
                  'No app download required',
                  'Prescriptions sent to your pharmacy',
                  'Available to all Florida residents',
                  'HIPAA-compliant & secure',
                  'Most insurance accepted',
                ].map((f) => (
                  <li key={f} className={styles.featuresListItem}>
                    <span className={styles.checkIcon} aria-hidden="true">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.statsPanel} aria-label="Telehealth facts">
              {[
                { value: 'Same day', label: 'Appointment availability' },
                { value: 'FL-wide', label: 'Available to all Florida residents' },
                { value: 'No app', label: 'Works in your browser' },
                { value: '4.9★', label: 'Average patient rating' },
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
            <p className="ds-eyebrow">What we treat via telehealth</p>
            <h2 id="benefits-heading" className="ds-h2">Telehealth services</h2>
            <p className="ds-lede" style={{ marginTop: 'var(--space-2)' }}>
              Most primary care needs can be addressed from the comfort of your home.
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
            <p className="ds-eyebrow">It's simple</p>
            <h2 id="process-heading" className="ds-h2">How a telehealth visit works</h2>
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
            <h2 id="faq-heading" className="ds-h2">Telehealth FAQs</h2>
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
        <p className={styles.insuranceText}>Insurance accepted for telehealth visits</p>
        <p className={styles.insuranceNames}>Aetna · United Healthcare · Medicare · Blue Cross Blue Shield · MultiPlan</p>
      </div>

      <BookingCTA
        heading="Book your telehealth visit today"
        subtext="Same-day video appointments available across Florida. All you need is a phone or computer."
      />
    </>
  );
}
