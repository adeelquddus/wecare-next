import type { Metadata } from 'next';
import {
  CLINIC,
  HOURS_DISPLAY,
  INSURANCE,
  TRUST_STATS,
} from '@/lib/clinic';
import BookingFlow from './BookingFlow';
import styles from './page.module.css';

const SITE_URL = 'https://www.wecarewellnessclinic.com';
const PAGE_URL = `${SITE_URL}/booking`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Book an Appointment - WeCare Wellness Clinic Brandon, FL | Same-Week Availability',
  description:
    'Request an appointment in seconds. Same-week in-person visits in Brandon, FL or telehealth across all 67 Florida counties. Primary care, GLP-1 weight loss, women\'s & men\'s health, hormone therapy, telehealth, HIV PrEP. Most insurance accepted - Aetna, UHC, Medicare, BCBS, Tricare, MultiPlan.',
  keywords: [
    // Booking-specific
    'book appointment Brandon FL',
    'schedule doctor appointment Brandon',
    'same-week appointment Brandon FL',
    'same-day appointment Brandon FL',
    'online doctor booking Florida',
    'request appointment WeCare Wellness',
    'doctor appointment near me Brandon',
    'walk-in primary care Brandon FL',
    // Service-specific
    'primary care appointment Brandon FL',
    'GLP-1 appointment Florida',
    'Semaglutide consultation Brandon',
    'Tirzepatide consultation Florida',
    'telehealth appointment Florida',
    'video doctor visit Florida',
    'PrEP consultation Brandon FL',
    'HIV PrEP appointment Tampa',
    'TRT consultation Brandon FL',
    'HRT appointment Florida',
    'women\'s health appointment Brandon',
    // Insurance / payment
    'Aetna doctor Brandon FL',
    'United Healthcare clinic Brandon',
    'Medicare clinic Brandon FL',
    'BCBS doctor Brandon FL',
    'Tricare doctor Brandon FL',
    'MultiPlan provider Brandon',
    'self-pay clinic Brandon FL',
    'sliding scale clinic Tampa',
    // Local
    'doctor Brandon FL 33511',
    'clinic 214 W Brandon Blvd',
    'family doctor Brandon Florida',
    'Riverview FL doctor',
    'Valrico FL primary care',
    'Lithia FL telehealth',
    'Sun City Center FL doctor',
    'east Tampa primary care',
    'Hillsborough County clinic',
    // Provider / brand
    'Darlyne Georges FNP-C Brandon',
    'WeCare Wellness Clinic booking',
    'wecarewellnessclinic.com book',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Book an Appointment - WeCare Wellness Clinic Brandon, FL',
    description:
      'Request a visit in under a minute. Same-week appointments in Brandon, FL or video visits across all 67 Florida counties. Most insurance accepted.',
    url: PAGE_URL,
    siteName: 'WeCare Wellness Clinic',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: `${SITE_URL}/hero-image.png`,
        width: 1200,
        height: 630,
        alt: 'Book an appointment at WeCare Wellness Clinic in Brandon, Florida',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book an appointment - WeCare Wellness Clinic',
    description:
      'Same-week in-person or telehealth appointments. Primary care, weight loss, women\'s & men\'s health, PrEP, more.',
    images: [`${SITE_URL}/hero-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
};

const BOOKING_FAQS = [
  {
    q: 'How quickly can I get an appointment?',
    a: 'Most patients are seen within the same week. Telehealth visits often have same-day or next-day availability. After you submit this form we will call you within one business day to confirm an exact time that works for you.',
  },
  {
    q: 'Do you accept my insurance?',
    a: 'WeCare Wellness accepts Aetna, United Healthcare, Medicare, Blue Cross Blue Shield, MultiPlan, and Tricare. We also offer transparent self-pay rates and a sliding scale for uninsured patients.',
  },
  {
    q: 'Is this an actual confirmed appointment or just a request?',
    a: 'This form sends a request to our front desk. We confirm an exact date and time by phone within one business day. If you need to be seen today, please call (813) 438-5220 directly.',
  },
  {
    q: 'Can I do this from anywhere in Florida?',
    a: 'Yes. In-person visits are at our Brandon, FL clinic. Telehealth video visits are available to anyone physically located in any of the 67 Florida counties at the time of the visit.',
  },
];

// JSON-LD @graph - WebPage + Breadcrumb + WebSite + MedicalClinic + FAQPage + ImageObject
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'WeCare Wellness Clinic',
      publisher: { '@id': `${SITE_URL}/#org` },
    },
    {
      '@type': 'ImageObject',
      '@id': `${PAGE_URL}#og-image`,
      url: `${SITE_URL}/hero-image.png`,
      contentUrl: `${SITE_URL}/hero-image.png`,
      width: 1200,
      height: 630,
      caption: 'Book an appointment at WeCare Wellness Clinic in Brandon, Florida',
    },
    {
      '@type': 'WebPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: 'Book an Appointment - WeCare Wellness Clinic Brandon, FL',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      primaryImageOfPage: { '@id': `${PAGE_URL}#og-image` },
      breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` },
      about: { '@id': `${SITE_URL}/#org` },
      inLanguage: 'en-US',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',  item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Book',  item: PAGE_URL },
      ],
    },
    {
      '@type': ['MedicalClinic', 'LocalBusiness'],
      '@id': `${SITE_URL}/#org`,
      name: CLINIC.name,
      url: SITE_URL,
      telephone: CLINIC.phoneDisplay,
      email: CLINIC.email,
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: CLINIC.addressParts.street,
        addressLocality: CLINIC.addressParts.city,
        addressRegion: CLINIC.addressParts.state,
        postalCode: CLINIC.addressParts.zip,
        addressCountry: CLINIC.addressParts.country,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 27.9378,
        longitude: -82.2859,
      },
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '09:00', closes: '17:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday',   opens: '09:00', closes: '18:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '13:00' },
      ],
      potentialAction: {
        '@type': 'ReserveAction',
        target: PAGE_URL,
        result: { '@type': 'Reservation', name: 'Appointment request' },
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '18',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: BOOKING_FAQS.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
};

export default function BookingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className={styles.hero} aria-labelledby="booking-heading">
        <span className={`${styles.blob} ${styles.blobOne}`} aria-hidden="true" />
        <span className={`${styles.blob} ${styles.blobTwo}`} aria-hidden="true" />
        <span className={`${styles.blob} ${styles.blobThree}`} aria-hidden="true" />
        <span className={styles.dotPattern} aria-hidden="true" />

        <div className="container">
          <div className={styles.heroInner}>
            <p className={styles.heroBadge}>
              <span className={styles.pulseDot} aria-hidden="true" />
              Same-week availability
            </p>
            <h1 id="booking-heading" className={styles.heroHeadline}>
              <span className={styles.headlineDark}>Book your visit</span>
              <span className={styles.headlineGradient}>in under a minute.</span>
            </h1>
            <p className={styles.heroSub}>
              Tell us what you need and we&apos;ll call within one business day to lock in
              a real time. In-person at our Brandon, FL clinic - or video visit anywhere in Florida.
            </p>

            <div className={styles.heroStats} role="list">
              {TRUST_STATS.map((s) => (
                <div key={s.label} className={styles.statItem} role="listitem">
                  <span className={styles.statValue}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>

            <div className={styles.heroCallout}>
              <span aria-hidden="true">📞</span>
              <span>
                Need to be seen today?{' '}
                <a href={`tel:${CLINIC.phone}`} className={styles.heroCalloutLink}>
                  Call {CLINIC.phoneDisplay}
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main booking section ──────────────────────────────── */}
      <section className={styles.mainSection}>
        <div className="container">
          <div className={styles.layout}>
            {/* Booking flow (client) */}
            <div className={styles.flowWrap}>
              <BookingFlow />
            </div>

            {/* Side rail */}
            <aside className={styles.rail} aria-label="What to expect, hours, and insurance">
              <article className={styles.railCard}>
                <h2 className={styles.railTitle}>What happens next</h2>
                <ol className={styles.timeline}>
                  <li>
                    <span className={styles.tlNum} aria-hidden="true">1</span>
                    <div>
                      <strong>You submit this request</strong>
                      <p>We see it instantly at the front desk.</p>
                    </div>
                  </li>
                  <li>
                    <span className={styles.tlNum} aria-hidden="true">2</span>
                    <div>
                      <strong>We call within 1 business day</strong>
                      <p>To confirm exact time and verify insurance.</p>
                    </div>
                  </li>
                  <li>
                    <span className={styles.tlNum} aria-hidden="true">3</span>
                    <div>
                      <strong>You get a confirmation</strong>
                      <p>Email + SMS with the address or video link.</p>
                    </div>
                  </li>
                  <li>
                    <span className={styles.tlNum} aria-hidden="true">4</span>
                    <div>
                      <strong>See your provider</strong>
                      <p>Same-week, in-person or by video - your call.</p>
                    </div>
                  </li>
                </ol>
              </article>

              <article className={styles.railCard}>
                <h2 className={styles.railTitle}>Office hours</h2>
                <ul className={styles.hoursList}>
                  {HOURS_DISPLAY.map((h) => (
                    <li key={h.days} className={styles.hoursItem}>
                      <span className={styles.hoursDay}>{h.days}</span>
                      <span className={styles.hoursTime}>{h.hours}</span>
                    </li>
                  ))}
                </ul>
                <p className={styles.hoursNote}>
                  Telehealth slots may run earlier or later than clinic hours.
                </p>
              </article>

              <article className={styles.railCard}>
                <h2 className={styles.railTitle}>Insurance accepted</h2>
                <ul className={styles.insuranceList}>
                  {INSURANCE.map((ins) => (
                    <li key={ins} className={styles.insuranceChip}>
                      <span aria-hidden="true">✓</span> {ins}
                    </li>
                  ))}
                </ul>
                <p className={styles.selfPay}>
                  Self-pay welcome. Sliding scale available - just ask.
                </p>
              </article>

              <article className={`${styles.railCard} ${styles.callCard}`}>
                <h2 className={styles.railTitle}>Prefer to talk?</h2>
                <p className={styles.callBody}>
                  Our front desk is friendly and quick. We can usually schedule you in under 90 seconds.
                </p>
                <a href={`tel:${CLINIC.phone}`} className={styles.callBtn}>
                  Call {CLINIC.phoneDisplay}
                </a>
                <a href={`mailto:${CLINIC.email}`} className={styles.emailLink}>
                  or email {CLINIC.email}
                </a>
              </article>
            </aside>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────── */}
      <section className={styles.faqSection} aria-labelledby="booking-faq-heading">
        <div className="container">
          <div className={styles.faqWrap}>
            <h2 id="booking-faq-heading" className={styles.faqHeading}>
              Booking questions, answered
            </h2>
            <div className={styles.faqGrid}>
              {BOOKING_FAQS.map((f) => (
                <details key={f.q} className={styles.faqItem}>
                  <summary className={styles.faqSummary}>
                    <span className={styles.faqQ}>{f.q}</span>
                    <span className={styles.faqIcon} aria-hidden="true">+</span>
                  </summary>
                  <p className={styles.faqA}>{f.a}</p>
                </details>
              ))}
            </div>
            <p className={styles.faqMore}>
              Got something else on your mind?{' '}
              <a href="/faq" className={styles.faqMoreLink}>Read our full FAQ</a>{' '}
              or{' '}
              <a href={`tel:${CLINIC.phone}`} className={styles.faqMoreLink}>
                call us at {CLINIC.phoneDisplay}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
