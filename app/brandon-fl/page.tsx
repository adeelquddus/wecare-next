import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import BookingCTA from '@/components/sections/BookingCTA';
import { CLINIC, HOURS_DISPLAY, INSURANCE, SERVICES } from '@/lib/clinic';
import { PinIcon, PhoneIcon, ClockIcon, CardIcon } from '@/components/ui/AnimatedIcons';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Primary Care Doctor in Brandon, FL - WeCare Wellness Clinic',
  description:
    'WeCare Wellness Clinic is a primary care and wellness clinic at 214 W Brandon Blvd, Brandon, FL 33511. Same-week appointments, Saturday hours, most insurance accepted. Serving Brandon, Riverview, Valrico, Seffner & Tampa Bay.',
  keywords: [
    'primary care doctor Brandon FL',
    'clinic Brandon FL',
    'doctor Brandon Florida',
    'family doctor Brandon FL',
    'primary care Brandon FL accepting new patients',
    'GLP-1 weight loss Brandon FL',
    'telehealth doctor Brandon FL',
    'women\'s health Brandon FL',
    'HIV PrEP Brandon FL',
    'IV hydration Brandon FL',
    'medical clinic Brandon Florida 33511',
    'doctor near me Brandon FL',
    'same day appointment Brandon FL',
  ],
  alternates: { canonical: 'https://www.wecarewellnessclinic.com/brandon-fl' },
  openGraph: {
    title: 'Primary Care & Wellness Clinic in Brandon, FL - WeCare',
    description: 'Board-certified primary care, GLP-1 weight loss, telehealth & more in Brandon, FL. Saturday hours. Most insurance accepted.',
    url: 'https://www.wecarewellnessclinic.com/brandon-fl',
    type: 'website',
  },
};

const AREAS_SERVED = [
  'Brandon', 'Riverview', 'Valrico', 'Seffner', 'Plant City', 'Sun City Center',
  'Apollo Beach', 'Gibsonton', 'FishHawk', 'Bloomingdale',
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
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 27.9378,
        longitude: -82.2859,
      },
      hasMap: CLINIC.mapUrl,
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '09:00', closes: '17:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '09:00', closes: '18:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '13:00' },
      ],
      areaServed: AREAS_SERVED.map((area) => ({
        '@type': 'City',
        name: area,
        '@id': `https://www.wikidata.org/wiki/Q?name=${encodeURIComponent(area)}`,
      })),
      paymentAccepted: 'Cash, Credit Card, Aetna, United Healthcare, Medicare, Blue Cross Blue Shield, MultiPlan',
      priceRange: '$$',
      medicalSpecialty: [
        'Primary Care', 'General Practice', 'Family Medicine', 'Preventive Medicine',
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.wecarewellnessclinic.com' },
        { '@type': 'ListItem', position: 2, name: 'Brandon, FL', item: 'https://www.wecarewellnessclinic.com/brandon-fl' },
      ],
    },
  ],
};

export default function BrandonFLPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Hero
        headline="Your primary care doctor in Brandon, FL"
        subtext="WeCare Wellness Clinic serves Brandon and the surrounding Tampa Bay area with board-certified primary care, GLP-1 weight loss, telehealth, and more - with Saturday hours and same-week appointments."
        ctaLabel="Book an Appointment"
        ctaHref="/booking"
        secondaryLabel={`Call ${CLINIC.phoneDisplay}`}
        secondaryHref={`tel:${CLINIC.phone}`}
        badgeText="214 W Brandon Blvd · Brandon, FL 33511"
        variant="light"
      />

      {/* About the location */}
      <section className={styles.introSection} aria-labelledby="intro-heading">
        <div className="container">
          <div className={styles.introGrid}>
            <div className={styles.introContent}>
              <p className="ds-eyebrow">Brandon, Florida</p>
              <h2 id="intro-heading" className="ds-h2">
                Comprehensive care for Brandon & Hillsborough County
              </h2>
              <p className={styles.introPara}>
                WeCare Wellness Clinic is conveniently located on W Brandon Blvd - in the heart of Brandon - making it one of the most accessible primary care clinics for residents of Brandon, Riverview, Valrico, Seffner, and the greater Tampa Bay area.
              </p>
              <p className={styles.introPara}>
                Unlike many clinics in the area, WeCare offers extended Friday hours until 6 PM and Saturday clinic from 9 AM to 1 PM. We also offer telehealth video visits for patients who prefer to see a provider from home - available statewide across Florida.
              </p>
              <p className={styles.introPara}>
                We are currently accepting new patients for all services. Most major insurance plans accepted, including Aetna, United Healthcare, Medicare, Blue Cross Blue Shield, and MultiPlan. Transparent self-pay rates available.
              </p>
              <Link href="/booking" className={styles.introCta}>
                Book your appointment →
              </Link>
            </div>

            {/* Quick info panel */}
            <aside className={styles.infoPanel} aria-label="Quick clinic information">
              <div className={styles.infoPanelItem}>
                <span className={styles.infoPanelIcon} aria-hidden="true"><PinIcon size={28} /></span>
                <div>
                  <div className={styles.infoPanelLabel}>Address</div>
                  <a href={CLINIC.mapUrl} target="_blank" rel="noopener noreferrer" className={styles.infoPanelValue}>
                    {CLINIC.addressParts.street}<br />
                    {CLINIC.addressParts.city}, {CLINIC.addressParts.state} {CLINIC.addressParts.zip}
                  </a>
                </div>
              </div>
              <div className={styles.infoPanelItem}>
                <span className={styles.infoPanelIcon} aria-hidden="true"><PhoneIcon size={28} /></span>
                <div>
                  <div className={styles.infoPanelLabel}>Phone</div>
                  <a href={`tel:${CLINIC.phone}`} className={styles.infoPanelValue}>{CLINIC.phoneDisplay}</a>
                </div>
              </div>
              <div className={styles.infoPanelItem}>
                <span className={styles.infoPanelIcon} aria-hidden="true"><ClockIcon size={28} /></span>
                <div>
                  <div className={styles.infoPanelLabel}>Hours</div>
                  <ul className={styles.hoursList} role="list">
                    {HOURS_DISPLAY.map((h) => (
                      <li key={h.days} className={styles.hoursItem}>
                        <span className={styles.hoursDay}>{h.days}</span>
                        <span className={styles.hoursTime}>{h.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={styles.infoPanelItem}>
                <span className={styles.infoPanelIcon} aria-hidden="true"><CardIcon size={28} /></span>
                <div>
                  <div className={styles.infoPanelLabel}>Insurance</div>
                  <div className={styles.infoPanelValue}>{INSURANCE.join(' · ')}</div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className={styles.servicesSection} aria-labelledby="services-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">Available in Brandon, FL</p>
            <h2 id="services-heading" className="ds-h2">Medical services we offer</h2>
            <p className="ds-lede" style={{ marginTop: 'var(--space-2)' }}>
              All services available to Brandon-area patients - in-person and via telehealth.
            </p>
          </div>
          <div className={styles.servicesGrid}>
            {SERVICES.map((service) => (
              <Link key={service.slug} href={service.url} className={styles.serviceCard}>
                <span className={styles.serviceIcon} aria-hidden="true">{service.icon}</span>
                <h3 className={styles.serviceName}>{service.name}</h3>
                <p className={styles.serviceTagline}>{service.tagline}</p>
                <span className={styles.serviceArrow} aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Areas served */}
      <section className={styles.areasSection} aria-labelledby="areas-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">Greater Tampa Bay</p>
            <h2 id="areas-heading" className="ds-h2">Communities we serve</h2>
            <p className="ds-lede" style={{ marginTop: 'var(--space-2)' }}>
              Our Brandon clinic is easily accessible from across Hillsborough County. Telehealth patients can be seen from anywhere in Florida.
            </p>
          </div>
          <ul className={styles.areasList} role="list">
            {AREAS_SERVED.map((area) => (
              <li key={area} className={styles.areasItem}>
                <PinIcon size={16} />
                {area}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Map */}
      <section className={styles.mapSection} aria-labelledby="map-heading">
        <div className="container">
          <h2 id="map-heading" className={styles.mapHeading}>Find us in Brandon</h2>
          <div className={styles.mapWrap} aria-label="WeCare Wellness Clinic map location">
            <iframe
              title="WeCare Wellness Clinic Brandon FL location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524.8!2d-82.2859!3d27.9378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s214+W+Brandon+Blvd+Brandon+FL!5e0!3m2!1sen!2sus!4v1"
              className={styles.mapIframe}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <BookingCTA
        heading="Ready to become a WeCare patient in Brandon?"
        subtext="Same-week and same-day appointments available. We accept most major insurance and welcome self-pay patients."
      />
    </>
  );
}
