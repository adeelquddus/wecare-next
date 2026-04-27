import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import BookingCTA from '@/components/sections/BookingCTA';
import Button from '@/components/ui/Button';
import { SERVICES, SERVICE_IMAGES, INSURANCE, INSURANCE_LOGOS } from '@/lib/clinic';
import LogoLoop from '@/components/ui/LogoLoop';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Medical Services — WeCare Wellness Clinic Brandon, FL',
  description:
    'WeCare Wellness Clinic offers primary care, GLP-1 medical weight loss (Semaglutide/Tirzepatide), telehealth, women\'s health, men\'s health, IV hydration, hormone replacement therapy, and HIV PrEP in Brandon, FL.',
  keywords: [
    'medical services Brandon FL',
    'primary care Brandon FL',
    'GLP-1 weight loss Brandon FL',
    'telehealth Florida',
    "women's health Brandon FL",
    "men's health Brandon FL",
    'IV hydration Brandon FL',
    'hormone replacement therapy Brandon FL',
    'HIV PrEP Brandon FL',
    'wellness clinic Brandon Florida',
  ],
  alternates: { canonical: 'https://www.wecarewellnessclinic.com/services' },
  openGraph: {
    title: 'All Medical Services — WeCare Wellness Clinic Brandon FL',
    description: 'Primary care, weight loss, telehealth, women\'s health, men\'s health, IV therapy, HRT & PrEP under one roof in Brandon, FL.',
    url: 'https://www.wecarewellnessclinic.com/services',
    type: 'website',
  },
};

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
      hasMap: 'https://maps.google.com/?q=214+W+Brandon+Blvd+Brandon+FL+33511',
      medicalSpecialty: [
        'Primary Care', 'Internal Medicine', 'Preventive Medicine',
        'General Practice', 'Family Medicine',
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.wecarewellnessclinic.com' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.wecarewellnessclinic.com/services' },
      ],
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── Custom hero ──────────────────────────────────────────────── */}
      <section className={styles.svcHero} aria-labelledby="services-hero">
        <span className={`${styles.heroBlob} ${styles.heroBlobOne}`} aria-hidden="true" />
        <span className={`${styles.heroBlob} ${styles.heroBlobTwo}`} aria-hidden="true" />

        <div className="container">
          <div className={styles.svcHeroInner}>
            <span className={styles.svcHeroBadge}>8 services available</span>
            <h1 id="services-hero" className={styles.svcHeroTitle}>
              All the care you need,<br />
              <span className={styles.titleAccent}>in one place.</span>
            </h1>
            <p className={styles.svcHeroLede}>
              From everyday primary care to specialised weight loss programs and statewide
              telehealth — WeCare covers your health from every angle, all under one roof.
            </p>
            <div className={styles.svcHeroCtas}>
              <Button href="/booking" size="lg" variant="primary">Book an appointment</Button>
              <Button href="#services" size="lg" variant="outline">View all services</Button>
            </div>
          </div>

          {/* Service preview chips with thumbnails */}
          <ul className={styles.heroChips} role="list" aria-label="Quick service navigation">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <a href={`#svc-${s.slug}`} className={styles.heroChip}>
                  {SERVICE_IMAGES[s.slug] ? (
                    <Image
                      src={SERVICE_IMAGES[s.slug]}
                      alt=""
                      width={28}
                      height={28}
                      className={styles.heroChipImg}
                      aria-hidden="true"
                    />
                  ) : (
                    <span className={styles.heroChipEmoji} aria-hidden="true">{s.icon}</span>
                  )}
                  <span>{s.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Services grid ────────────────────────────────────────────── */}
      <section id="services" className={styles.servicesSection}>
        <div className="container">
          <div className={styles.servicesGrid}>
            {SERVICES.map((service, idx) => {
              const hasImage = !!SERVICE_IMAGES[service.slug];
              return (
                <article
                  key={service.slug}
                  id={`svc-${service.slug}`}
                  className={`${styles.serviceCard} ${idx % 2 === 1 ? styles.cardMint : styles.cardBlue}`}
                >
                  {/* Hero image — fills the top of the card */}
                  <div className={styles.cardImageWrap} aria-hidden="true">
                    {hasImage ? (
                      <Image
                        src={SERVICE_IMAGES[service.slug]}
                        alt=""
                        fill
                        sizes="(max-width: 900px) 100vw, 50vw"
                        className={styles.cardImage}
                        priority={idx < 2}
                      />
                    ) : (
                      <span className={styles.cardImageEmoji}>{service.icon}</span>
                    )}
                    {/* Gradient overlay for text contrast on the badge */}
                    <span className={styles.cardImageOverlay} />
                    <span className={styles.cardTaglineBadge}>{service.tagline}</span>
                  </div>

                  {/* Body */}
                  <div className={styles.cardBody}>
                    <h2 className={styles.cardName}>{service.name}</h2>
                    <p className={styles.cardDesc}>{service.description}</p>

                    <ul className={styles.cardFeatures} role="list" aria-label={`${service.name} includes`}>
                      {service.features.map((f) => (
                        <li key={f} className={styles.cardFeature}>
                          <span className={styles.cardCheck} aria-hidden="true">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                              <path d="M2 7l3 3 7-7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className={styles.cardActions}>
                      <Link href="/booking" className={styles.cardBookBtn}>
                        Book this service
                      </Link>
                      <Link href={service.url} className={styles.cardLearnLink}>
                        Learn more →
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Insurance LogoLoop ───────────────────────────────────────── */}
      <section className={styles.insuranceSection} aria-labelledby="services-insurance-heading">
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="ds-eyebrow">Coverage</p>
          <h2 id="services-insurance-heading" className="ds-h2">We accept your insurance</h2>
          <p className="ds-body" style={{ color: 'var(--text-secondary)', maxWidth: 520, margin: '0 auto var(--space-5)' }}>
            All our services are covered by major insurance plans. Self-pay rates available.
          </p>
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
        heading="Start your wellness journey"
        subtext="Same-week appointments available. Walk-ins welcome based on availability. Call (813) 438-5220."
      />
    </>
  );
}
