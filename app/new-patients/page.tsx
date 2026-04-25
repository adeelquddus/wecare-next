import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import BookingCTA from '@/components/sections/BookingCTA';
import { CLINIC, HOURS_DISPLAY, INSURANCE } from '@/lib/clinic';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'New Patients — WeCare Wellness Clinic Brandon, FL',
  description:
    'Accepting new patients in Brandon, FL. Learn what to expect, what to bring, and how to book your first visit at WeCare Wellness Clinic. Most insurance accepted. Same-week appointments.',
  keywords: [
    'new patients Brandon FL',
    'accepting new patients Brandon FL',
    'new patient primary care Brandon FL',
    'first visit WeCare Wellness Clinic',
    'how to register new patient Brandon FL',
    'primary care doctor accepting patients Brandon FL',
    'new patient appointment Brandon Florida',
    'same week appointment Brandon FL',
  ],
  alternates: { canonical: 'https://www.wecarewellnessclinic.com/new-patients' },
  openGraph: {
    title: 'New Patients — WeCare Wellness Clinic Brandon, FL',
    description: 'Now accepting new patients. Same-week appointments, most insurance accepted, Saturday hours. Book your first visit today.',
    url: 'https://www.wecarewellnessclinic.com/new-patients',
    type: 'website',
  },
};

const STEPS = [
  {
    step: 1,
    icon: '📋',
    title: 'Book your appointment',
    desc: 'Book online 24/7 or call (813) 438-5220. Same-week and same-day slots are often available. Telehealth video visits are available for patients anywhere in Florida.',
  },
  {
    step: 2,
    icon: '🪪',
    title: 'Gather your documents',
    desc: 'Bring a valid photo ID, your insurance card, a list of current medications (or your prescription bottles), and any relevant medical records you have.',
  },
  {
    step: 3,
    icon: '⏰',
    title: 'Arrive a few minutes early',
    desc: 'First-time patients should arrive 10–15 minutes before their appointment to complete intake paperwork. Our team will verify your insurance and go over your copay details.',
  },
  {
    step: 4,
    icon: '🩺',
    title: 'Meet your provider',
    desc: 'Your board-certified provider will review your medical history, discuss your health goals, perform any needed exams, and create a personalised care plan.',
  },
];

const WHAT_TO_BRING = [
  'Valid government-issued photo ID',
  'Insurance card (if applicable)',
  'List of current medications and dosages',
  'Any prior lab results or imaging reports',
  'List of allergies (medications or otherwise)',
  'Emergency contact information',
  'Referral letter (if your plan requires one)',
];

const WHY_CHOOSE = [
  {
    icon: '📅',
    title: 'Same-week appointments',
    desc: 'We keep same-week and same-day slots available so you never wait weeks to see a provider.',
  },
  {
    icon: '🏥',
    title: '8 services under one roof',
    desc: 'Primary care, GLP-1 weight loss, women\'s health, men\'s health, telehealth, IV hydration, HRT, and HIV PrEP — all at one clinic.',
  },
  {
    icon: '⏱️',
    title: 'Saturday hours',
    desc: 'Open Saturday 9 AM–1 PM — one of very few primary care clinics in Brandon with weekend availability.',
  },
  {
    icon: '💻',
    title: 'Telehealth statewide',
    desc: 'Live anywhere in Florida? Our video visits let you see a board-certified provider without leaving home.',
  },
  {
    icon: '💳',
    title: 'Insurance + self-pay',
    desc: 'We accept Aetna, UHC, Medicare, BCBS, and MultiPlan. Transparent self-pay rates available for uninsured patients.',
  },
  {
    icon: '🤝',
    title: 'Judgment-free care',
    desc: 'We treat every patient with respect and dignity — whether you\'re here for a physical, PrEP, hormone therapy, or weight loss.',
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
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '09:00', closes: '17:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '09:00', closes: '18:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '13:00' },
      ],
      paymentAccepted: 'Cash, Credit Card, Aetna, United Healthcare, Medicare, Blue Cross Blue Shield, MultiPlan',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.wecarewellnessclinic.com' },
        { '@type': 'ListItem', position: 2, name: 'New Patients', item: 'https://www.wecarewellnessclinic.com/new-patients' },
      ],
    },
  ],
};

export default function NewPatientsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Hero
        headline="Now welcoming new patients"
        subtext="Getting started at WeCare Wellness is easy — same-week appointments, flexible hours including Saturdays, and most major insurance plans accepted."
        ctaLabel="Book Your First Visit"
        ctaHref="/booking"
        secondaryLabel={`Call ${CLINIC.phoneDisplay}`}
        secondaryHref={`tel:${CLINIC.phone}`}
        badgeText="Accepting new patients"
        variant="light"
      />

      {/* Steps */}
      <section className={styles.stepsSection} aria-labelledby="steps-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">Simple process</p>
            <h2 id="steps-heading" className="ds-h2">Your first visit — what to expect</h2>
            <p className="ds-lede" style={{ marginTop: 'var(--space-2)' }}>
              We make it easy to get started. Here is how your first visit works.
            </p>
          </div>
          <ol className={styles.steps} role="list">
            {STEPS.map((item) => (
              <li key={item.step} className={styles.step}>
                <div className={styles.stepNum} aria-label={`Step ${item.step}`}>{item.step}</div>
                <span className={styles.stepIcon} aria-hidden="true">{item.icon}</span>
                <h3 className={styles.stepTitle}>{item.title}</h3>
                <p className={styles.stepDesc}>{item.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What to bring + hours */}
      <section className={styles.infoSection} aria-labelledby="info-heading">
        <div className="container">
          <div className={styles.infoGrid}>
            {/* What to bring */}
            <div className={styles.infoCard}>
              <h2 id="info-heading" className={styles.cardHeading}>
                <span aria-hidden="true">🧳</span> What to bring
              </h2>
              <ul className={styles.bringList} role="list">
                {WHAT_TO_BRING.map((item) => (
                  <li key={item} className={styles.bringItem}>
                    <span className={styles.check} aria-hidden="true">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Hours & location */}
            <div className={styles.infoCard}>
              <h2 className={styles.cardHeading}>
                <span aria-hidden="true">🕘</span> Office hours
              </h2>
              <ul className={styles.hoursList} role="list">
                {HOURS_DISPLAY.map((h) => (
                  <li key={h.days} className={styles.hoursItem}>
                    <span className={styles.hoursDay}>{h.days}</span>
                    <span className={styles.hoursTime}>{h.hours}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.divider} />

              <h3 className={styles.subHeading}>
                <span aria-hidden="true">📍</span> Location
              </h3>
              <a
                href={CLINIC.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.addressLink}
              >
                {CLINIC.addressParts.street}<br />
                {CLINIC.addressParts.city}, {CLINIC.addressParts.state} {CLINIC.addressParts.zip}
              </a>

              <div className={styles.divider} />

              <h3 className={styles.subHeading}>
                <span aria-hidden="true">💳</span> Insurance accepted
              </h3>
              <p className={styles.insuranceList}>{INSURANCE.join(' · ')}</p>
              <p className={styles.selfPayNote}>+ self-pay rates available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className={styles.whySection} aria-labelledby="why-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">Why WeCare</p>
            <h2 id="why-heading" className="ds-h2">Why patients choose us</h2>
          </div>
          <div className={styles.whyGrid}>
            {WHY_CHOOSE.map((item) => (
              <div key={item.title} className={styles.whyCard}>
                <span className={styles.whyIcon} aria-hidden="true">{item.icon}</span>
                <h3 className={styles.whyTitle}>{item.title}</h3>
                <p className={styles.whyDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick links to services */}
      <section className={styles.servicesSection} aria-labelledby="services-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">Everything in one place</p>
            <h2 id="services-heading" className="ds-h2">Services available to new patients</h2>
          </div>
          <div className={styles.serviceLinks}>
            {[
              { label: 'Primary Care', href: '/primary-care' },
              { label: 'Medical Weight Loss', href: '/medical-weight-loss' },
              { label: 'Telehealth', href: '/telehealth' },
              { label: "Women's Health", href: '/womens-health' },
              { label: "Men's Health", href: '/mens-health' },
              { label: 'IV Hydration & HRT', href: '/iv-hydration' },
              { label: 'HIV PrEP', href: '/hiv-prep' },
            ].map((s) => (
              <Link key={s.href} href={s.href} className={styles.serviceLink}>
                {s.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA
        heading="Ready to book your first appointment?"
        subtext="Same-week appointments available. We'll verify your insurance before your visit and answer any questions you have."
      />
    </>
  );
}
