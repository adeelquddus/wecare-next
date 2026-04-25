import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import BookingCTA from '@/components/sections/BookingCTA';
import Card from '@/components/ui/Card';
import { SERVICES } from '@/lib/clinic';
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero
        headline="All the care you need, in one place"
        subtext="From everyday primary care to specialized weight loss programs — WeCare Wellness covers your health from every angle."
        badgeText="8 services available"
        secondaryLabel="Book appointment"
        secondaryHref="/booking"
        ctaLabel="View all services"
        ctaHref="#services"
      />

      <section id="services" className={styles.servicesSection}>
        <div className="container">
          <div className={styles.servicesGrid}>
            {SERVICES.map((service) => (
              <Card key={service.slug} as="article" padding="lg" className={styles.serviceCard}>
                <div className={styles.cardTop}>
                  <span className={styles.icon} aria-hidden="true">{service.icon}</span>
                  <span className={styles.tagline}>{service.tagline}</span>
                </div>
                <h2 className={`ds-h3 ${styles.name}`}>{service.name}</h2>
                <p className={`ds-body ${styles.desc}`}>{service.description}</p>

                <ul className={styles.features} aria-label={`${service.name} includes`} role="list">
                  {service.features.map((f) => (
                    <li key={f} className={styles.featureItem}>
                      <span className={styles.check} aria-hidden="true">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className={styles.cardActions}>
                  <Link href="/booking" className={styles.bookLink}>
                    Book this service →
                  </Link>
                  <Link href={service.url} className={styles.learnLink}>
                    Learn more
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA
        heading="Start your wellness journey"
        subtext="Same-week appointments available. Walk-ins welcome based on availability."
      />
    </>
  );
}
