import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import BookingCTA from '@/components/sections/BookingCTA';
import Card from '@/components/ui/Card';
import { SERVICES } from '@/lib/clinic';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Services — Primary Care, Weight Loss, Telehealth & More',
  description:
    'WeCare Wellness Clinic offers primary care, GLP-1 medical weight loss (Semaglutide/Tirzepatide), telehealth, women\'s health, men\'s health, IV hydration & hormone therapy in Brandon, FL.',
  alternates: { canonical: 'https://www.wecarewellnessclinic.com/services' },
};

export default function ServicesPage() {
  return (
    <>
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
                  {service.url !== '/services' && (
                    <Link href={service.url} className={styles.learnLink}>
                      Learn more
                    </Link>
                  )}
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
