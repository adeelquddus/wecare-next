import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import BookingCTA from '@/components/sections/BookingCTA';
import Image from 'next/image';
import { INSURANCE, INSURANCE_LOGOS } from '@/lib/clinic';
import { CardIcon } from '@/components/ui/AnimatedIcons';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Insurance Accepted — WeCare Wellness Clinic | Brandon, FL',
  description:
    'WeCare Wellness Clinic accepts Aetna, United Healthcare, Medicare, Blue Cross Blue Shield, and MultiPlan. Self-pay options available. Serving Brandon, FL and telehealth patients across Florida.',
  keywords: [
    'insurance accepted Brandon FL',
    'Aetna primary care Brandon FL',
    'Medicare doctor Brandon FL',
    'United Healthcare Brandon FL',
    'Blue Cross Blue Shield Brandon FL',
    'MultiPlan Brandon FL',
    'insurance clinic Brandon Florida',
    'does doctor accept Aetna Brandon',
    'self-pay primary care Brandon FL',
    'telehealth insurance Florida',
  ],
  alternates: { canonical: 'https://www.wecarewellnessclinic.com/insurance' },
  openGraph: {
    title: 'Insurance We Accept — WeCare Wellness Clinic',
    description: 'Aetna, United Healthcare, Medicare, BCBS & MultiPlan accepted. Self-pay options available.',
    url: 'https://www.wecarewellnessclinic.com/insurance',
    type: 'website',
  },
};

const INSURANCE_DETAILS = [
  {
    name: 'Aetna',
    desc: 'Aetna commercial, Aetna Medicare Advantage, and most Aetna employer plans accepted for in-person and telehealth visits.',
  },
  {
    name: 'United Healthcare',
    desc: 'UnitedHealthcare commercial, UHC Medicare Advantage, and UHC Choice Plus plans accepted.',
  },
  {
    name: 'Medicare',
    desc: 'Original Medicare (Parts A & B) accepted. Medicare Advantage plans from major carriers also accepted — verify at booking.',
  },
  {
    name: 'Blue Cross Blue Shield',
    desc: 'Florida Blue, BCBS commercial, and BlueCard plans accepted for primary care, specialty services, and telehealth.',
  },
  {
    name: 'MultiPlan',
    desc: 'MultiPlan/PHCS network plans accepted, covering many employer-sponsored and association health plans.',
  },
];

const FAQS = [
  {
    q: 'What if I don\'t see my insurance listed?',
    a: 'Call us at (813) 438-5220 — our team can verify your benefits in minutes. We may accept additional plans not listed here and are continually expanding our network.',
  },
  {
    q: 'Do you offer self-pay rates?',
    a: 'Yes. We offer transparent, affordable self-pay rates for uninsured or underinsured patients. Ask about our self-pay pricing when you call or book.',
  },
  {
    q: 'Are preventive visits covered at 100%?',
    a: 'Under the Affordable Care Act, most insurance plans cover annual wellness exams, preventive screenings, and well-woman visits at no cost to you. Check your plan\'s Summary of Benefits to confirm.',
  },
  {
    q: 'Does Medicare cover telehealth?',
    a: 'Yes — Medicare covers telehealth visits for most primary care services. Coverage expanded significantly in recent years, and your copay or coinsurance may apply.',
  },
  {
    q: 'How do I verify my coverage before my visit?',
    a: 'Call our office at (813) 438-5220 and provide your insurance card information. We\'ll verify your plan, copay, and any applicable deductibles before your appointment.',
  },
  {
    q: 'Do you accept Medicaid?',
    a: 'We currently do not accept Medicaid/Florida Medicaid. Please call us to discuss self-pay options, which may be more affordable than you expect.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['MedicalClinic', 'LocalBusiness'],
      '@id': 'https://www.wecarewellnessclinic.com/#clinic',
      name: 'WeCare Wellness Clinic',
      url: 'https://www.wecarewellnessclinic.com',
      telephone: '+18134385220',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '214 W Brandon Blvd',
        addressLocality: 'Brandon',
        addressRegion: 'FL',
        postalCode: '33511',
        addressCountry: 'US',
      },
      paymentAccepted: 'Cash, Credit Card, Aetna, United Healthcare, Medicare, Blue Cross Blue Shield, MultiPlan',
      priceRange: '$$',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.wecarewellnessclinic.com' },
        { '@type': 'ListItem', position: 2, name: 'Insurance Accepted', item: 'https://www.wecarewellnessclinic.com/insurance' },
      ],
    },
  ],
};

export default function InsurancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero
        headline="We accept most major insurance plans"
        subtext="WeCare Wellness Clinic works with Aetna, United Healthcare, Medicare, Blue Cross Blue Shield, and MultiPlan — plus affordable self-pay options for every patient."
        ctaLabel="Book an Appointment"
        ctaHref="/booking"
        secondaryLabel="Call to verify coverage"
        secondaryHref="tel:+18134385220"
        badgeText="Insurance verified before your visit"
        variant="light"
      />

      {/* Intro */}
      <section className={styles.intro} aria-labelledby="intro-heading">
        <div className="container">
          <div className={styles.introGrid}>
            <div>
              <p className={styles.introLabel}>Insurance & payment options</p>
              <h2 id="intro-heading" className={styles.introHeading}>
                Transparent, hassle-free billing
              </h2>
              <p className={styles.introBody}>
                We believe cost shouldn't be a barrier to quality healthcare. WeCare Wellness Clinic accepts the most common insurance plans in Florida and offers straightforward self-pay pricing for patients without coverage.
              </p>
              <p className={styles.introBody}>
                Not sure if your plan is accepted? Call our team before your visit — we'll verify your benefits and explain exactly what to expect regarding copays, deductibles, and coverage.
              </p>
              <ul className={styles.featuresList} role="list">
                {[
                  'Benefits verified before your visit',
                  'Transparent self-pay rates available',
                  'No surprise billing — costs explained upfront',
                  'Medicare & Medicare Advantage accepted',
                  'Telehealth covered by most plans',
                  'Preventive visits often covered at 100%',
                ].map((f) => (
                  <li key={f} className={styles.featuresListItem}>
                    <span className={styles.checkIcon} aria-hidden="true">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.statsPanel} aria-label="Insurance at a glance">
              {[
                { value: '5+', label: 'Major insurance networks accepted' },
                { value: '100%', label: 'Most preventive visits covered' },
                { value: 'Self-pay', label: 'Transparent pricing available' },
                { value: 'Telehealth', label: 'Insurance covered for video visits' },
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

      {/* Insurance cards */}
      <section className={styles.benefitsSection} aria-labelledby="insurance-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">Accepted plans</p>
            <h2 id="insurance-heading" className="ds-h2">Insurance we accept</h2>
            <p className="ds-lede" style={{ marginTop: 'var(--space-2)' }}>
              We accept all of the following — call us to verify your specific plan details.
            </p>
          </div>
          <div className={styles.benefitsGrid} role="list">
            {INSURANCE_DETAILS.map((ins) => (
              <div key={ins.name} className={styles.benefitCard} role="listitem">
                <div className={styles.benefitLogoWrap}>
                  <Image
                    src={INSURANCE_LOGOS[ins.name]}
                    alt={ins.name}
                    width={400}
                    height={200}
                    className={styles.benefitLogo}
                  />
                </div>
                <h3 className={styles.benefitTitle}>{ins.name}</h3>
                <p className={styles.benefitDesc}>{ins.desc}</p>
              </div>
            ))}
            {/* Self-pay card */}
            <div className={styles.benefitCard} role="listitem">
              <span className={styles.benefitIcon} aria-hidden="true"><CardIcon size={56} /></span>
              <h3 className={styles.benefitTitle}>Self-Pay & Uninsured</h3>
              <p className={styles.benefitDesc}>Affordable cash-pay rates available for all services. Ask about pricing when you book.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection} aria-labelledby="faq-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">Common questions</p>
            <h2 id="faq-heading" className="ds-h2">Insurance & billing FAQs</h2>
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

      {/* Call to verify strip */}
      <div className={styles.insuranceStrip} role="complementary" aria-label="Verify coverage">
        <p className={styles.insuranceText}>Not sure if we accept your plan? Call us — we'll verify in minutes.</p>
        <p className={styles.insuranceNames}>
          <a href="tel:+18134385220" style={{ color: '#fff', fontWeight: 600 }}>(813) 438-5220</a>
          {' · Mon–Fri 9AM–6PM · Sat 9AM–1PM'}
        </p>
      </div>

      <BookingCTA
        heading="Ready to book your appointment?"
        subtext="We'll verify your insurance before your visit and explain your coverage clearly. No surprises."
      />
    </>
  );
}
