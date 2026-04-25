import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import BookingCTA from '@/components/sections/BookingCTA';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { SERVICES, TRUST_STATS, INSURANCE } from '@/lib/clinic';
import styles from './page.module.css';

/* ── JSON-LD ───────────────────────────────────────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['MedicalClinic', 'LocalBusiness'],
      '@id': 'https://www.wecarewellnessclinic.com/#clinic',
      name: 'WeCare Wellness Clinic',
      url: 'https://www.wecarewellnessclinic.com',
      logo: 'https://www.wecarewellnessclinic.com/logo.png',
      image: 'https://www.wecarewellnessclinic.com/og-image.jpg',
      telephone: '+18134385220',
      email: 'info@wecarewellnessclinic.com',
      description:
        'WeCare Wellness Clinic is a patient-centered primary care and wellness clinic in Brandon, FL offering primary care, medical weight loss, women\'s health, men\'s health, telehealth, IV hydration, HRT, and HIV PrEP.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '214 W Brandon Blvd',
        addressLocality: 'Brandon',
        addressRegion: 'FL',
        postalCode: '33511',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 27.9378,
        longitude: -82.2859,
      },
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '09:00', closes: '17:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '09:00', closes: '18:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '13:00' },
      ],
      priceRange: '$$',
      paymentAccepted: 'Cash, Credit Card, Insurance',
      sameAs: [
        'https://www.facebook.com/wecarewellnessclinic',
        'https://www.instagram.com/wecarewellnessclinic',
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: 4.9,
        reviewCount: 3,
        bestRating: 5,
      },
      areaServed: [
        { '@type': 'City', name: 'Brandon', containedInPlace: 'Florida' },
        { '@type': 'City', name: 'Riverview', containedInPlace: 'Florida' },
        { '@type': 'City', name: 'Valrico', containedInPlace: 'Florida' },
        { '@type': 'State', name: 'Florida' },
      ],
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Maria G.' },
      reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
      reviewBody:
        'The team at WeCare is incredibly caring and professional. They actually listen and take time to explain everything. I finally feel like I have a doctor who genuinely cares about my health.',
      itemReviewed: { '@id': 'https://www.wecarewellnessclinic.com/#clinic' },
      datePublished: '2025-01-01',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'James T.' },
      reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
      reviewBody:
        'I started the medical weight loss program and lost 28 lbs in 4 months. The Semaglutide program with monthly check-ins kept me on track. Life-changing.',
      itemReviewed: { '@id': 'https://www.wecarewellnessclinic.com/#clinic' },
      datePublished: '2025-01-01',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Sandra M.' },
      reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
      reviewBody:
        'The telehealth visits are incredibly convenient. Same quality care as in-person, no travel needed. Perfect when I need a quick follow-up or prescription refill.',
      itemReviewed: { '@id': 'https://www.wecarewellnessclinic.com/#clinic' },
      datePublished: '2025-01-01',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What services does WeCare Wellness Clinic offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'WeCare Wellness Clinic in Brandon, FL offers primary care, medical weight loss (GLP-1/Semaglutide/Tirzepatide), women\'s health & gynecology, men\'s health & testosterone therapy, telehealth (statewide Florida), IV hydration therapy & hormone replacement therapy (HRT), and HIV PrEP & sexual health services.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does WeCare Wellness Clinic accept insurance?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. WeCare Wellness Clinic accepts Aetna, United Healthcare, Medicare, Blue Cross Blue Shield, and MultiPlan. Self-pay rates are also available for uninsured patients.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I book an appointment at WeCare Wellness?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can book an appointment online at wecarewellnessclinic.com/booking or call (813) 438-5220. Same-week appointments are typically available for new and existing patients.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does WeCare offer telehealth visits?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. WeCare Wellness Clinic offers telehealth video visits for patients across the entire state of Florida. Services available by telehealth include primary care, prescription refills, follow-ups, chronic condition management, GLP-1 weight loss, and PrEP management.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where is WeCare Wellness Clinic located?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'WeCare Wellness Clinic is located at 214 W Brandon Blvd, Brandon, FL 33511. We serve patients from Brandon, Riverview, Valrico, Lithia, Sun City Center, and the greater Tampa Bay area.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are WeCare Wellness Clinic\'s hours?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our office hours are Monday through Thursday 9 AM to 5 PM, Friday 9 AM to 6 PM, and Saturday 9 AM to 1 PM. We are closed on Sundays.',
          },
        },
      ],
    },
  ],
};

export const metadata: Metadata = {
  title: 'WeCare Wellness Clinic | Primary Care, Weight Loss & Telehealth — Brandon, FL',
  description:
    'Primary care, GLP-1 weight loss, telehealth, IV hydration & HIV PrEP in Brandon, FL. Same-week appointments. Aetna, Medicare & BCBS accepted. Self-pay welcome.',
  keywords: [
    'WeCare Wellness Clinic Brandon FL',
    'primary care Brandon FL',
    'doctor Brandon FL',
    'medical weight loss Brandon FL',
    'GLP-1 Brandon FL',
    'Semaglutide Brandon FL',
    'telehealth doctor Florida',
    "women's health Brandon FL",
    "men's health Brandon FL",
    'IV hydration Brandon FL',
    'hormone replacement therapy Brandon FL',
    'HIV PrEP Brandon FL',
    'same week appointment Brandon FL',
    'family doctor Brandon Florida',
    'wellness clinic near Tampa FL',
  ],
  alternates: { canonical: 'https://www.wecarewellnessclinic.com' },
  openGraph: {
    title: 'WeCare Wellness Clinic — Primary Care, Weight Loss & Telehealth Brandon, FL',
    description:
      'Board-certified primary care, GLP-1 weight loss, telehealth & more in Brandon, FL. Same-week appointments. Aetna, Medicare & BCBS accepted.',
    url: 'https://www.wecarewellnessclinic.com',
    type: 'website',
  },
};

/* Testimonials */
const TESTIMONIALS = [
  {
    id: 1,
    text: "The team at WeCare is incredibly caring and professional. They actually listen and take time to explain everything. I finally feel like I have a doctor who genuinely cares about my health.",
    name: 'Maria G.',
    detail: 'Primary Care Patient, Brandon FL',
    rating: 5,
  },
  {
    id: 2,
    text: "I started the medical weight loss program and lost 28 lbs in 4 months. The Semaglutide program with monthly check-ins kept me on track. Life-changing.",
    name: 'James T.',
    detail: 'Medical Weight Loss Patient',
    rating: 5,
  },
  {
    id: 3,
    text: "The telehealth visits are incredibly convenient. Same quality care as in-person, no travel needed. Perfect when I need a quick follow-up or prescription refill.",
    name: 'Sandra M.',
    detail: 'Telehealth Patient, Riverview FL',
    rating: 5,
  },
];

const WHY_US = [
  {
    icon: '🏅',
    title: 'Board-certified providers',
    desc: 'All our physicians are board-certified with years of experience in their specialty areas.',
  },
  {
    icon: '📅',
    title: 'Same-week availability',
    desc: 'We know your time matters. Most patients are seen within the same week of requesting an appointment.',
  },
  {
    icon: '💳',
    title: 'Major insurance accepted',
    desc: 'We accept Aetna, United Healthcare, Medicare, Blue Cross Blue Shield, and MultiPlan.',
  },
  {
    icon: '💻',
    title: 'Telehealth across Florida',
    desc: 'Can\'t come in person? See a provider by video from anywhere in Florida — same great care.',
  },
  {
    icon: '🌿',
    title: 'Whole-person wellness',
    desc: 'We treat you, not just your symptoms. Our approach addresses lifestyle, prevention, and long-term health.',
  },
  {
    icon: '🔬',
    title: 'On-site diagnostics',
    desc: 'Lab work, diagnostics, and screenings available on-site so you get answers faster.',
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero */}
      <Hero
        headline="Your health, our priority"
        subtext="Personalized wellness care for the whole family — primary care, medical weight loss, telehealth, and more in Brandon, FL."
        ctaLabel="Book Appointment"
        ctaHref="/booking"
        secondaryLabel="Explore services"
        secondaryHref="/services"
        badgeText="Now accepting new patients"
        variant="light"
      />

      {/* 2. Trust stats */}
      <section className={styles.statsSection} aria-label="Clinic statistics">
        <div className="container">
          <ul className={styles.statsGrid} role="list">
            {TRUST_STATS.map((stat) => (
              <li key={stat.label} className={styles.statItem}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Services */}
      <section className={`section ${styles.servicesSection}`} aria-labelledby="services-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">What we offer</p>
            <h2 id="services-heading" className="ds-h2">
              Comprehensive care under one roof
            </h2>
            <p className={`ds-lede ${styles.sectionSub}`}>
              From everyday primary care to specialized weight loss programs and telehealth — we cover what you need.
            </p>
          </div>

          <ul className={styles.servicesGrid} role="list">
            {SERVICES.map((service) => (
              <li key={service.slug}>
                <Card as="article" padding="lg" className={styles.serviceCard}>
                  <span className={styles.serviceIcon} aria-hidden="true">
                    {service.icon}
                  </span>
                  <h3 className={`ds-h3 ${styles.serviceName}`}>{service.name}</h3>
                  <p className={styles.serviceTagline}>{service.tagline}</p>
                  <p className={`ds-body ${styles.serviceDesc}`}>{service.description}</p>
                  <ul className={styles.featureList} aria-label={`${service.name} features`} role="list">
                    {service.features.slice(0, 4).map((f) => (
                      <li key={f} className={styles.featureItem}>
                        <span aria-hidden="true" className={styles.featureCheck}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href={service.url} className={styles.serviceLink}>
                    Learn more about {service.name} →
                  </Link>
                </Card>
              </li>
            ))}
          </ul>

          <div className={styles.sectionCta}>
            <Button href="/services" variant="outline" size="lg">
              View all services
            </Button>
          </div>
        </div>
      </section>

      {/* 4. Why choose us */}
      <section className={`section ${styles.whySection}`} aria-labelledby="why-heading">
        <div className="container">
          <div className={styles.whyInner}>
            <div className={styles.whyText}>
              <p className="ds-eyebrow">Why WeCare?</p>
              <h2 id="why-heading" className="ds-h2">
                Healthcare that puts you first
              </h2>
              <p className="ds-lede">
                We built WeCare Wellness around one belief: you deserve a healthcare provider who actually knows you, listens to you, and works with you — not at you.
              </p>
              <Button href="/about" variant="outline" size="md">
                Our story
              </Button>
            </div>

            <ul className={styles.whyGrid} role="list">
              {WHY_US.map((item) => (
                <li key={item.title} className={styles.whyItem}>
                  <span className={styles.whyIcon} aria-hidden="true">{item.icon}</span>
                  <div>
                    <h3 className={styles.whyTitle}>{item.title}</h3>
                    <p className={styles.whyDesc}>{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Testimonials */}
      <section className={`section ${styles.testimonialsSection}`} aria-labelledby="testimonials-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">Patient stories</p>
            <h2 id="testimonials-heading" className="ds-h2">
              What our patients say
            </h2>
          </div>

          <ul className={styles.testimonialsGrid} role="list">
            {TESTIMONIALS.map((t) => (
              <li key={t.id}>
                <Card as="article" padding="lg" className={styles.testimonialCard}>
                  <div className={styles.stars} aria-label={`${t.rating} stars`}>
                    {'★'.repeat(t.rating)}
                  </div>
                  <blockquote className={styles.testimonialText}>
                    "{t.text}"
                  </blockquote>
                  <footer className={styles.testimonialFooter}>
                    <span className={styles.testimonialName}>{t.name}</span>
                    <span className={styles.testimonialDetail}>{t.detail}</span>
                  </footer>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. Insurance */}
      <section className={`section ${styles.insuranceSection}`} aria-labelledby="insurance-heading">
        <div className="container">
          <h2 id="insurance-heading" className={`ds-h2 ${styles.insuranceHeading}`}>
            We accept your insurance
          </h2>
          <ul className={styles.insuranceList} role="list">
            {INSURANCE.map((ins) => (
              <li key={ins} className={styles.insurancePill}>{ins}</li>
            ))}
          </ul>
          <p className={styles.insuranceNote}>
            Don't see your plan?{' '}
            <Link href="/insurance">Check our full insurance page</Link>
            {' '}or{' '}
            <Link href="/contact">contact us</Link> — we may still be able to help.
          </p>
        </div>
      </section>

      {/* 7. Booking CTA */}
      <BookingCTA />
    </>
  );
}
