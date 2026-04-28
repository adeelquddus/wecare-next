import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import BookingCTA from '@/components/sections/BookingCTA';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Image from 'next/image';
import { SERVICES, TRUST_STATS, INSURANCE, INSURANCE_LOGOS, SERVICE_IMAGES } from '@/lib/clinic';
import LogoLoop from '@/components/ui/LogoLoop';
import {
  AwardIcon, CalendarIcon, CardIcon, LaptopIcon, LeafIcon, MicroscopeIcon,
} from '@/components/ui/AnimatedIcons';
import type { IconProps } from '@/components/ui/AnimatedIcons';
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
        ratingValue: 5,
        reviewCount: 18,
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
      author: { '@type': 'Person', name: 'Miguel Medina' },
      reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
      reviewBody:
        'Darlyne is an exceptional Family Nurse Practitioner who consistently provides compassionate, thorough, and professional care. She takes the time to listen carefully, explains things clearly, and makes her patients feel genuinely valued and respected.',
      itemReviewed: { '@id': 'https://www.wecarewellnessclinic.com/#clinic' },
      datePublished: '2026-04-20',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Saint Thompson' },
      reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
      reviewBody:
        'WeCare Wellness is truly one of the best primary care clinics in the Riverview/Tampa area. The facility is clean, modern, and the doctor takes the time to actually listen, explain everything clearly, and address all concerns. What really sets WeCare apart is their affordable monthly plan for patients without insurance.',
      itemReviewed: { '@id': 'https://www.wecarewellnessclinic.com/#clinic' },
      datePublished: '2025-12-15',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Heather Allen' },
      reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
      reviewBody:
        'Highly recommend!!! The office staff is very professional and attentive. The nurse practitioner is kind, warm and listens to your needs as well as very knowledgeable.',
      itemReviewed: { '@id': 'https://www.wecarewellnessclinic.com/#clinic' },
      datePublished: '2025-12-10',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Terry H.' },
      reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
      reviewBody:
        "Darlyne has been so helpful and supportive! Her suggestions and insights are making my weight loss journey less daunting and more doable.",
      itemReviewed: { '@id': 'https://www.wecarewellnessclinic.com/#clinic' },
      datePublished: '2026-01-11',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'María M.' },
      reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
      reviewBody:
        'In 2 weeks, I lost 19 pounds, and as you can imagine, I AM SO HAPPY with the results! Darlyne walked me through every step.',
      itemReviewed: { '@id': 'https://www.wecarewellnessclinic.com/#clinic' },
      datePublished: '2025-11-20',
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
  title: 'WeCare Wellness Clinic | Primary Care, Weight Loss & Telehealth - Brandon, FL',
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
    title: 'WeCare Wellness Clinic - Primary Care, Weight Loss & Telehealth Brandon, FL',
    description:
      'Board-certified primary care, GLP-1 weight loss, telehealth & more in Brandon, FL. Same-week appointments. Aetna, Medicare & BCBS accepted.',
    url: 'https://www.wecarewellnessclinic.com',
    type: 'website',
  },
};

/* Testimonials - verbatim verified reviews from BirdEye, Tebra & EvexiPEL */
const TESTIMONIALS = [
  {
    id: 1,
    text: "Darlyne is an exceptional Family Nurse Practitioner who consistently provides compassionate, thorough, and professional care. She takes the time to listen carefully, explains things clearly, and makes her patients feel genuinely valued and respected. Her clinical knowledge, attention to detail, and calm, reassuring manner make you feel welcomed and comfortable.",
    name: 'Miguel Medina',
    detail: 'Verified Google Review · Primary Care',
    rating: 5,
  },
  {
    id: 2,
    text: "Amazing office staff. Doctor & Nurse were both great and showed they really cared and wasn't just another patient. Very happy with my visit.",
    name: 'Jalisa Rivera',
    detail: 'Verified Google Review',
    rating: 5,
  },
  {
    id: 3,
    text: "We care clinic primary care is top notch. The NP is good and I love the way she takes care of patients.",
    name: 'Sally Olembo',
    detail: 'Verified Google Review · Primary Care',
    rating: 5,
  },
  {
    id: 4,
    text: "WeCare Wellness is truly one of the best primary care clinics in the Riverview/Tampa area. The facility is clean, modern, which immediately makes you feel comfortable. The doctor takes the time to actually listen, explain everything clearly, and make sure all concerns are addressed - something that's hard to find in healthcare today. I never feel rushed, and the care feels personal and thorough every visit. What really sets WeCare apart is their affordable monthly plan for patients without insurance.",
    name: 'Saint Thompson',
    detail: 'Verified Google Review · Riverview FL',
    rating: 5,
  },
  {
    id: 5,
    text: "Highly recommend!!! The office staff is very professional and attentive. The nurse practitioner is kind, warm and listens to your needs as well as very knowledgeable.",
    name: 'Heather Allen',
    detail: 'Verified Google Review',
    rating: 5,
  },
  {
    id: 6,
    text: "Darlyne has been so helpful and supportive! Her suggestions and insights are making my weight loss journey less daunting and more 'doable!' Thank you, Darlyne!",
    name: 'Terry H.',
    detail: 'Verified Tebra Review · Medical Weight Loss',
    rating: 5,
  },
  {
    id: 7,
    text: "WeCare Wellness Clinic has friendly staff and cares about your health.",
    name: 'Vicanna C.',
    detail: 'Verified Tebra Review',
    rating: 5,
  },
  {
    id: 8,
    text: "Nurse practitioner Darlyne is amazing - I hadn't been to the doctor in forever and she really took the time to listen to my concerns and questions and patiently explained all my results to me.",
    name: 'Taquita Z.',
    detail: 'Verified EvexiPEL Patient',
    rating: 5,
  },
  {
    id: 9,
    text: "I want to start by thanking WeCare Wellness and Darlyne Georges, APRN, FNP-C for the support in my weight loss journey. She understood what was going on with my body and helped me reach my weight loss goal.",
    name: 'Tamaraa R.',
    detail: 'Verified Patient · Medical Weight Loss',
    rating: 5,
  },
  {
    id: 10,
    text: "In 2 weeks, I lost 19 pounds, and as you can imagine, I AM SO FREAKING HAPPY with the results! Darlyne walked me through every step.",
    name: 'María M.',
    detail: 'Verified Patient · GLP-1 Weight Loss',
    rating: 5,
  },
  {
    id: 11,
    text: "Dr Georges was professional, patient and thorough. She offered compassion and listened to each concern I had.",
    name: 'Jamie T.',
    detail: 'Verified Patient',
    rating: 5,
  },
  {
    id: 12,
    text: "Darlyne is very knowledgeable in her practice. I decided to get NAD injections and I am very happy with the extra energy and vitality. I recommend this clinic for improving health and wellbeing.",
    name: 'Colleen M.',
    detail: 'Verified Patient · IV / NAD Therapy',
    rating: 5,
  },
];

const WHY_US: Array<{ Icon: React.FC<IconProps>; title: string; desc: string }> = [
  {
    Icon: AwardIcon,
    title: 'Board-certified providers',
    desc: 'All our physicians are board-certified with years of experience in their specialty areas.',
  },
  {
    Icon: CalendarIcon,
    title: 'Same-week availability',
    desc: 'We know your time matters. Most patients are seen within the same week of requesting an appointment.',
  },
  {
    Icon: CardIcon,
    title: 'Major insurance accepted',
    desc: 'We accept Aetna, United Healthcare, Medicare, Blue Cross Blue Shield, MultiPlan, and Tricare.',
  },
  {
    Icon: LaptopIcon,
    title: 'Telehealth across Florida',
    desc: 'Can\'t come in person? See a provider by video from anywhere in Florida - same great care.',
  },
  {
    Icon: LeafIcon,
    title: 'Whole-person wellness',
    desc: 'We treat you, not just your symptoms. Our approach addresses lifestyle, prevention, and long-term health.',
  },
  {
    Icon: MicroscopeIcon,
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
        headlineLines={[
          { text: 'Personalized Care.', color: 'dark' },
          { text: 'Trusted Expertise.', color: 'gradient' },
          { text: 'Better Health.', color: 'dark' },
        ]}
        subtext="Comprehensive wellness care for the whole family - primary care, medical weight loss, telehealth, and more in Brandon, FL."
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
              From everyday primary care to specialized weight loss programs and telehealth - we cover what you need.
            </p>
          </div>

          <ul className={styles.servicesGrid} role="list">
            {SERVICES.map((service) => (
              <li key={service.slug}>
                <Card as="article" padding="lg" className={styles.serviceCard}>
                  {SERVICE_IMAGES[service.slug] ? (
                    <div className={styles.serviceCardImg} aria-hidden="true">
                      <Image
                        src={SERVICE_IMAGES[service.slug]}
                        alt=""
                        fill
                        className={styles.serviceCardImgEl}
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  ) : (
                    <span className={styles.serviceIcon} aria-hidden="true">
                      {service.icon}
                    </span>
                  )}
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
                We built WeCare Wellness around one belief: you deserve a healthcare provider who actually knows you, listens to you, and works with you - not at you.
              </p>
              <Button href="/about" variant="outline" size="md">
                Our story
              </Button>
            </div>

            <ul className={styles.whyGrid} role="list">
              {WHY_US.map(({ Icon, title, desc }) => (
                <li key={title} className={styles.whyItem}>
                  <span className={styles.whyIcon} aria-hidden="true">
                    <Icon size={32} />
                  </span>
                  <div>
                    <h3 className={styles.whyTitle}>{title}</h3>
                    <p className={styles.whyDesc}>{desc}</p>
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
            <p className="ds-lede" style={{ marginTop: 'var(--space-2)' }}>
              Verified reviews from Google &amp; BirdEye - averaging 5&#9733; across all services.
            </p>
          </div>
        </div>

        <LogoLoop
          logos={TESTIMONIALS.map((t) => ({
            ariaLabel: `Review by ${t.name}`,
            node: (
              <article className={styles.testimonialCard}>
                <div className={styles.stars} aria-label={`${t.rating} stars`}>
                  {'★'.repeat(t.rating)}
                </div>
                <blockquote className={styles.testimonialText}>{t.text}</blockquote>
                <footer className={styles.testimonialFooter}>
                  <span className={styles.testimonialName}>{t.name}</span>
                  <span className={styles.testimonialDetail}>{t.detail}</span>
                </footer>
              </article>
            ),
          }))}
          speed={30}
          logoHeight={320}
          gap={28}
          hoverSpeed={0}
          fadeOut
          fadeOutColor="#F9FAFB"
          ariaLabel="Patient testimonials"
        />
      </section>

      {/* 6. Insurance */}
      <section className={`section ${styles.insuranceSection}`} aria-labelledby="insurance-heading">
        <div className="container">
          <h2 id="insurance-heading" className={`ds-h2 ${styles.insuranceHeading}`}>
            We accept your insurance
          </h2>
        </div>
        <LogoLoop
          logos={INSURANCE.map((ins) => ({ src: INSURANCE_LOGOS[ins], alt: ins }))}
          speed={60}
          logoHeight={100}
          gap={56}
          hoverSpeed={0}
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Insurance plans accepted"
        />
        <div className="container">
          <p className={styles.insuranceNote}>
            Don't see your plan?{' '}
            <Link href="/insurance">Check our full insurance page</Link>
            {' '}or{' '}
            <Link href="/contact">contact us</Link> - we may still be able to help.
          </p>
        </div>
      </section>

      {/* 7. Booking CTA */}
      <BookingCTA />
    </>
  );
}
