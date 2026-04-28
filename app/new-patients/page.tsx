import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import BookingCTA from '@/components/sections/BookingCTA';
import Button from '@/components/ui/Button';
import { CLINIC, HOURS_DISPLAY, INSURANCE, INSURANCE_LOGOS, SERVICES, SERVICE_IMAGES } from '@/lib/clinic';
import LogoLoop from '@/components/ui/LogoLoop';
import {
  CalendarBookIllustration,
  DocumentsIllustration,
  ClockIllustration,
  StethoscopeIllustration,
  SameWeekIllustration,
  ServicesClusterIllustration,
  WeekendIllustration,
  TelehealthIllustration,
  InsuranceCardIllustration,
  CareHandshakeIllustration,
  IdIcon,
  PillsIcon,
  PaperIcon,
  AlertIcon,
  PhoneIcon,
  LetterIcon,
  NewPatientHeroIllustration,
} from '@/components/ui/Illustrations';
import { CalendarIcon, HospitalIcon, GlobeIcon } from '@/components/ui/AnimatedIcons';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'New Patients - WeCare Wellness Clinic Brandon, FL',
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
    title: 'New Patients - WeCare Wellness Clinic Brandon, FL',
    description: 'Now accepting new patients. Same-week appointments, most insurance accepted, Saturday hours. Book your first visit today.',
    url: 'https://www.wecarewellnessclinic.com/new-patients',
    type: 'website',
  },
};

const STEPS = [
  {
    step: 1,
    Illustration: CalendarBookIllustration,
    title: 'Book your appointment',
    desc: 'Book online 24/7 or call (813) 438-5220. Same-week and same-day slots are often available. Telehealth video visits are available statewide across Florida.',
  },
  {
    step: 2,
    Illustration: DocumentsIllustration,
    title: 'Gather your documents',
    desc: 'Bring a valid photo ID, your insurance card, a list of current medications (or your prescription bottles), and any relevant medical records you have.',
  },
  {
    step: 3,
    Illustration: ClockIllustration,
    title: 'Arrive a few minutes early',
    desc: 'First-time patients should arrive 10–15 minutes before their appointment to complete intake paperwork. Our team will verify your insurance and copay details.',
  },
  {
    step: 4,
    Illustration: StethoscopeIllustration,
    title: 'Meet your provider',
    desc: 'Your board-certified provider will review your medical history, discuss your health goals, perform any needed exams, and create a personalised care plan with you.',
  },
];

const WHAT_TO_BRING = [
  { Icon: IdIcon, text: 'Valid government-issued photo ID' },
  { Icon: InsuranceCardIllustration, text: 'Insurance card (if applicable)', small: true },
  { Icon: PillsIcon, text: 'List of current medications and dosages' },
  { Icon: PaperIcon, text: 'Any prior lab results or imaging reports' },
  { Icon: AlertIcon, text: 'List of allergies (medications or otherwise)' },
  { Icon: PhoneIcon, text: 'Emergency contact information' },
  { Icon: LetterIcon, text: 'Referral letter (if your plan requires one)' },
];

const WHY_CHOOSE = [
  {
    Illustration: SameWeekIllustration,
    title: 'Same-week appointments',
    desc: 'We hold same-week and same-day slots open every week, so you never wait weeks just to see a provider.',
    accent: 'blue',
  },
  {
    Illustration: ServicesClusterIllustration,
    title: '8 services under one roof',
    desc: "Primary care, GLP-1 weight loss, women's health, men's health, telehealth, IV hydration, HRT, and HIV PrEP - all here.",
    accent: 'mint',
  },
  {
    Illustration: WeekendIllustration,
    title: 'Saturday hours',
    desc: 'Open Saturday 9 AM–1 PM - one of very few primary care clinics in Brandon with weekend availability.',
    accent: 'amber',
  },
  {
    Illustration: TelehealthIllustration,
    title: 'Telehealth statewide',
    desc: 'Live anywhere in Florida? Our video visits let you see a board-certified provider without leaving home.',
    accent: 'blue',
  },
  {
    Illustration: InsuranceCardIllustration,
    title: 'Insurance + self-pay',
    desc: 'Aetna, UHC, Medicare, BCBS, MultiPlan & Tricare accepted. Transparent self-pay rates available for uninsured patients.',
    accent: 'mint',
  },
  {
    Illustration: CareHandshakeIllustration,
    title: 'Judgment-free care',
    desc: "We treat every patient with respect and dignity - whether you're here for a physical, PrEP, hormone therapy, or weight loss.",
    accent: 'rose',
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
      paymentAccepted: 'Cash, Credit Card, Aetna, United Healthcare, Medicare, Blue Cross Blue Shield, MultiPlan, Tricare',
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

      {/* ── Custom Hero ──────────────────────────────────────────────── */}
      <section className={styles.npHero} aria-labelledby="np-hero-heading">
        <span className={`${styles.heroBlob} ${styles.heroBlobOne}`} aria-hidden="true" />
        <span className={`${styles.heroBlob} ${styles.heroBlobTwo}`} aria-hidden="true" />
        <span className={styles.heroDots} aria-hidden="true" />

        <div className="container">
          <div className={styles.npHeroGrid}>
            <div className={styles.npHeroContent}>
              <span className={styles.npHeroBadge}>
                <span className={styles.pulseDot} aria-hidden="true" />
                Now accepting new patients
              </span>
              <h1 id="np-hero-heading" className={styles.npHeroTitle}>
                Your <span className={styles.titleAccent}>first visit</span><br />
                made simple.
              </h1>
              <p className={styles.npHeroLede}>
                Same-week appointments, transparent pricing, and a provider who actually listens.
                Here is everything you need to know before stepping through our doors - or hopping
                on a telehealth visit.
              </p>
              <div className={styles.npHeroCtas}>
                <Button href="/booking" size="lg" variant="primary">Book Your First Visit</Button>
                <Button href={`tel:${CLINIC.phone}`} size="lg" variant="outline">
                  Call {CLINIC.phoneDisplay}
                </Button>
              </div>
              <ul className={styles.npHeroPills} role="list">
                <li><CalendarIcon size={16} /> Same-week slots</li>
                <li><HospitalIcon size={16} /> 8 services here</li>
                <li><GlobeIcon size={16} /> Telehealth FL-wide</li>
              </ul>
            </div>
            <div className={styles.npHeroIllustration} aria-hidden="true">
              <NewPatientHeroIllustration size={420} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Steps ────────────────────────────────────────────────────── */}
      <section className={styles.stepsSection} aria-labelledby="steps-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">Simple process</p>
            <h2 id="steps-heading" className="ds-h2">Your first visit - what to expect</h2>
            <p className="ds-lede" style={{ marginTop: 'var(--space-2)' }}>
              Four straightforward steps from booking to walking out with a personalised care plan.
            </p>
          </div>
          <ol className={styles.steps} role="list">
            {STEPS.map(({ step, Illustration, title, desc }) => (
              <li key={step} className={styles.step}>
                <div className={styles.stepIllusWrap}>
                  <Illustration size={110} />
                </div>
                <div className={styles.stepNumBadge} aria-label={`Step ${step}`}>
                  Step {step}
                </div>
                <h3 className={styles.stepTitle}>{title}</h3>
                <p className={styles.stepDesc}>{desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Bring + Hours info section ───────────────────────────────── */}
      <section className={styles.infoSection} aria-labelledby="info-heading">
        <div className="container">
          <div className={styles.infoGrid}>
            <div className={styles.bringCard}>
              <p className="ds-eyebrow">First visit checklist</p>
              <h2 id="info-heading" className="ds-h2" style={{ marginBottom: 'var(--space-4)' }}>
                What to bring
              </h2>
              <ul className={styles.bringList} role="list">
                {WHAT_TO_BRING.map(({ Icon, text, small }) => (
                  <li key={text} className={styles.bringItem}>
                    <span className={styles.bringIconWrap} aria-hidden="true">
                      {/* @ts-ignore - both small icon & small SVG renderers accept size */}
                      <Icon size={small ? 36 : 22} />
                    </span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.hoursCard}>
              <p className="ds-eyebrow">Plan your visit</p>
              <h3 className={styles.hoursHeading}>Office hours</h3>
              <ul className={styles.hoursList} role="list">
                {HOURS_DISPLAY.map((h) => (
                  <li key={h.days} className={styles.hoursItem}>
                    <span className={styles.hoursDay}>{h.days}</span>
                    <span className={styles.hoursTime}>{h.hours}</span>
                  </li>
                ))}
              </ul>

              <h3 className={styles.hoursHeading} style={{ marginTop: 'var(--space-5)' }}>Location</h3>
              <a href={CLINIC.mapUrl} target="_blank" rel="noopener noreferrer" className={styles.addressLink}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 22s8-7.5 8-13a8 8 0 1 0-16 0c0 5.5 8 13 8 13z" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="9" r="3" stroke="currentColor" strokeWidth="2" />
                </svg>
                <span>{CLINIC.addressParts.street}<br />{CLINIC.addressParts.city}, {CLINIC.addressParts.state} {CLINIC.addressParts.zip}</span>
              </a>

              <h3 className={styles.hoursHeading} style={{ marginTop: 'var(--space-5)' }}>Insurance accepted</h3>
              <p className={styles.insuranceText}>{INSURANCE.join(' · ')}</p>
              <p className={styles.selfPayNote}>+ transparent self-pay rates available</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why patients choose us - illustrated cards ─────────────── */}
      <section className={styles.whySection} aria-labelledby="why-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">Why WeCare</p>
            <h2 id="why-heading" className="ds-h2">Why patients choose us</h2>
            <p className="ds-lede" style={{ marginTop: 'var(--space-2)' }}>
              Six reasons hundreds of patients keep coming back - and refer their friends.
            </p>
          </div>
          <div className={styles.whyGrid}>
            {WHY_CHOOSE.map(({ Illustration, title, desc, accent }) => (
              <article key={title} className={`${styles.whyCard} ${styles[`whyAccent_${accent}`]}`}>
                <div className={styles.whyIllusWrap}>
                  <Illustration size={96} />
                </div>
                <h3 className={styles.whyTitle}>{title}</h3>
                <p className={styles.whyDesc}>{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services available ───────────────────────────────────────── */}
      <section className={styles.servicesSection} aria-labelledby="services-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">Everything in one place</p>
            <h2 id="services-heading" className="ds-h2">Services available to new patients</h2>
            <p className="ds-lede" style={{ marginTop: 'var(--space-2)' }}>
              Browse what you can book on your first visit - or any visit after.
            </p>
          </div>
          <ul className={styles.serviceTiles} role="list">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={s.url} className={styles.serviceTile}>
                  {SERVICE_IMAGES[s.slug] ? (
                    <Image
                      src={SERVICE_IMAGES[s.slug]}
                      alt=""
                      width={48}
                      height={48}
                      className={styles.serviceTileImg}
                      aria-hidden="true"
                    />
                  ) : (
                    <span className={styles.serviceTileEmoji} aria-hidden="true">{s.icon}</span>
                  )}
                  <span className={styles.serviceTileLabel}>{s.name}</span>
                  <span className={styles.serviceTileArrow} aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Insurance LogoLoop ───────────────────────────────────────── */}
      <section className={styles.insuranceLoopSection} aria-labelledby="insurance-loop-heading">
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="ds-eyebrow">Coverage</p>
          <h2 id="insurance-loop-heading" className="ds-h2">We accept your insurance</h2>
        </div>
        <LogoLoop
          logos={INSURANCE.map((ins) => ({ src: INSURANCE_LOGOS[ins], alt: ins }))}
          speed={60}
          logoHeight={90}
          gap={56}
          hoverSpeed={0}
          fadeOut
          fadeOutColor="#F9FAFB"
          ariaLabel="Insurance plans accepted"
        />
      </section>

      <BookingCTA
        heading="Ready to book your first appointment?"
        subtext="Same-week appointments available. We'll verify your insurance before your visit and answer any questions you have."
      />
    </>
  );
}
