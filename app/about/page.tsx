import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import BookingCTA from '@/components/sections/BookingCTA';
import Card from '@/components/ui/Card';
import { TRUST_STATS, INSURANCE, SERVICES } from '@/lib/clinic';
import styles from './page.module.css';

/* ── Metadata ─────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'About WeCare Wellness Clinic — Primary Care in Brandon, FL',
  description:
    'WeCare Wellness Clinic is a patient-centered primary care and wellness clinic in Brandon, FL. Board-certified providers, same-week appointments, and 8 services under one roof. Serving Brandon, Riverview, Valrico, and Tampa.',
  keywords: [
    'WeCare Wellness Clinic Brandon FL',
    'about WeCare Wellness',
    'primary care clinic Brandon FL',
    'board certified doctor Brandon FL',
    'patient centered care Brandon FL',
    'family medicine Brandon Florida',
    'healthcare clinic Brandon FL',
    'wellness clinic near Tampa FL',
    'medical clinic Riverview FL',
    'primary care Valrico FL',
  ],
  alternates: { canonical: 'https://www.wecarewellnessclinic.com/about' },
  openGraph: {
    title: 'About WeCare Wellness Clinic — Brandon, FL Primary Care',
    description:
      'Learn about WeCare Wellness Clinic — our mission, our providers, and our commitment to modern, patient-centered care in Brandon, FL.',
    url: 'https://www.wecarewellnessclinic.com/about',
    type: 'website',
  },
};

/* ── Schema ────────────────────────────────────────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['MedicalClinic', 'LocalBusiness'],
      '@id': 'https://www.wecarewellnessclinic.com/#clinic',
      name: 'WeCare Wellness Clinic',
      description:
        'WeCare Wellness Clinic is a patient-centered primary care and wellness clinic in Brandon, FL offering primary care, medical weight loss, women\'s health, men\'s health, telehealth, IV hydration, and hormone therapy.',
      url: 'https://www.wecarewellnessclinic.com',
      telephone: '+18134385220',
      email: 'info@wecarewellnessclinic.com',
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
        latitude: 27.9375,
        longitude: -82.2859,
      },
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '09:00', closes: '17:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '09:00', closes: '18:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '13:00' },
      ],
      sameAs: [
        'https://www.facebook.com/wecarewellnessclinic',
        'https://www.instagram.com/wecarewellnessclinic',
      ],
      medicalSpecialty: [
        'Family Practice',
        'Internal Medicine',
        'Gynecology',
        'Endocrinology',
      ],
      availableService: SERVICES.map((s) => ({
        '@type': 'MedicalTherapy',
        name: s.name,
        description: s.description,
      })),
      paymentAccepted: 'Cash, Credit Card, Insurance',
      priceRange: '$$',
      areaServed: [
        { '@type': 'City', name: 'Brandon', containedInPlace: 'Florida' },
        { '@type': 'City', name: 'Riverview', containedInPlace: 'Florida' },
        { '@type': 'City', name: 'Valrico', containedInPlace: 'Florida' },
        { '@type': 'City', name: 'Lithia', containedInPlace: 'Florida' },
        { '@type': 'City', name: 'Sun City Center', containedInPlace: 'Florida' },
        { '@type': 'State', name: 'Florida' },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.wecarewellnessclinic.com' },
        { '@type': 'ListItem', position: 2, name: 'About Us', item: 'https://www.wecarewellnessclinic.com/about' },
      ],
    },
  ],
};

/* ── Data ─────────────────────────────────────────────────────────────── */
const VALUES = [
  {
    icon: '❤️',
    title: 'Patient-first',
    desc: 'Every clinical decision we make starts with what is best for you — not what is fastest or cheapest. We take the time to listen, explain, and collaborate.',
  },
  {
    icon: '🔬',
    title: 'Evidence-based',
    desc: 'We follow the latest clinical guidelines from the AMA, CDC, ACC, and specialty boards. Our protocols evolve as medicine evolves.',
  },
  {
    icon: '🤝',
    title: 'Accessible',
    desc: 'Same-week in-person appointments, same-day telehealth, Saturday morning hours, and five major insurance plans accepted. Care should be within reach.',
  },
  {
    icon: '🌿',
    title: 'Whole-person',
    desc: 'We treat the full person — mind, body, and lifestyle. Nutrition, mental health, sleep, and stress are just as important as lab values and prescriptions.',
  },
];

const TEAM = [
  {
    name: 'Dr. [Provider Name]',
    title: 'Medical Director, Primary Care',
    credentials: 'MD, Board-Certified Family Medicine',
    bio: 'Board-certified in Family Medicine with over 10 years of experience serving the Brandon community. Special interest in preventive health, chronic disease management, and medical weight loss. Graduate of the University of South Florida College of Medicine.',
    img: null,
  },
  {
    name: 'APRN [Provider Name]',
    title: "Nurse Practitioner, Women's Health",
    credentials: 'APRN, FNP-C',
    bio: "Specializing in gynecology, hormone therapy, and women's wellness with 8+ years of clinical practice. Committed to compassionate, evidence-based care for women at every stage of life — from adolescence through menopause and beyond.",
    img: null,
  },
];

const DIFFERENTIATORS = [
  {
    icon: '📅',
    title: 'Same-week appointments',
    desc: "We don't make you wait 6 weeks to see your doctor. New and existing patients can typically schedule within 3–5 business days, with same-day telehealth available.",
  },
  {
    icon: '🌐',
    title: 'Statewide telehealth',
    desc: 'See your WeCare provider from anywhere in Florida — no travel required. We see telehealth patients across all 67 Florida counties.',
  },
  {
    icon: '📋',
    title: 'Comprehensive care',
    desc: 'Eight services under one roof: primary care, weight loss, women\'s health, men\'s health, telehealth, IV hydration, HRT, and HIV PrEP.',
  },
  {
    icon: '🏥',
    title: 'No hospital affiliations pressure',
    desc: 'We are an independent clinic. Your care plan is designed around your needs — not hospital admission targets, referral quotas, or insurance system pressures.',
  },
  {
    icon: '💬',
    title: 'Direct provider access',
    desc: 'Reach your actual provider — not an answering service or call center. We prioritize continuity of care so you see the same trusted face at every visit.',
  },
  {
    icon: '💡',
    title: 'Modern medicine',
    desc: 'Electronic health records, online scheduling, patient portal, telehealth, and the latest evidence-based treatments including GLP-1 therapy and bioidentical HRT.',
  },
];

const AREAS_SERVED = [
  'Brandon, FL', 'Riverview, FL', 'Valrico, FL', 'Lithia, FL',
  'Sun City Center, FL', 'Plant City, FL', 'Gibsonton, FL', 'Seffner, FL',
  'Temple Terrace, FL', 'Tampa, FL (East)',
];

const FAQS_ABOUT = [
  {
    q: 'Where is WeCare Wellness Clinic located?',
    a: 'We are located at 214 W Brandon Blvd, Brandon, FL 33511. We are conveniently situated in the heart of Brandon with easy parking and ADA-accessible facilities.',
  },
  {
    q: 'Are you accepting new patients?',
    a: 'Yes — WeCare Wellness Clinic is currently accepting new patients for primary care, all specialty services, and telehealth. Book online or call (813) 438-5220.',
  },
  {
    q: 'What are your hours?',
    a: 'We are open Monday through Thursday 9 AM to 5 PM, Friday 9 AM to 6 PM, and Saturday 9 AM to 1 PM. We are closed on Sundays. Telehealth appointments may be available outside these hours.',
  },
  {
    q: 'Do I need a referral to book an appointment?',
    a: 'No referral is needed. You can book directly online or by calling our front desk at (813) 438-5220. Most insurance plans accept us as a primary care provider (PCP).',
  },
  {
    q: 'What insurance plans do you accept?',
    a: 'We accept Aetna, United Healthcare, Medicare, Blue Cross Blue Shield, and MultiPlan. We also offer transparent self-pay rates for uninsured patients.',
  },
  {
    q: 'Do you offer telehealth statewide?',
    a: 'Yes. Our board-certified providers see telehealth patients across the entire state of Florida — all 67 counties. Video visits cover primary care, follow-ups, prescription refills, chronic condition management, and more.',
  },
];

/* ── Page ─────────────────────────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero
        headline="Modern care. Real relationships."
        subtext="WeCare Wellness Clinic was founded on one belief: you deserve a healthcare team that actually knows you, listens to you, and grows with you — in Brandon, FL and across Florida via telehealth."
        ctaLabel="Meet our team"
        ctaHref="#team"
        secondaryLabel="Book Appointment"
        secondaryHref="/booking"
      />

      {/* ── Mission ──────────────────────────────────────────────── */}
      <section className={`section ${styles.missionSection}`} aria-labelledby="mission-heading">
        <div className="container">
          <div className={styles.missionGrid}>
            <div>
              <p className="ds-eyebrow">Our mission</p>
              <h2 id="mission-heading" className="ds-h2">
                Healthcare that feels human
              </h2>
              <p className="ds-lede">
                At WeCare Wellness Clinic, we believe that modern medicine and genuine human
                connection are not mutually exclusive. We combine the latest clinical practices
                with the kind of personal attention that has become rare in healthcare today.
              </p>
              <p className="ds-body" style={{ marginTop: 'var(--space-3)', color: 'var(--text-secondary)' }}>
                Founded in Brandon, FL, our clinic serves patients across the greater Tampa Bay
                area — from routine annual physicals to comprehensive medical weight loss programs
                to specialized telehealth consultations available statewide. We are here when you
                need us, with same-week appointments, extended Friday hours, and Saturday
                availability so that healthcare fits your schedule — not the other way around.
              </p>
              <p className="ds-body" style={{ marginTop: 'var(--space-3)', color: 'var(--text-secondary)' }}>
                Our clinic is independent and physician-led. Your care plan is built around your
                individual health goals, informed by comprehensive lab work, evidence-based
                medicine, and a provider who knows your name — not just your chart number.
              </p>
            </div>

            {/* Stats */}
            <ul className={styles.statsGrid} role="list" aria-label="Clinic statistics">
              {TRUST_STATS.map((s) => (
                <li key={s.label} className={styles.statItem}>
                  <span className={styles.statValue}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────────── */}
      <section className={`section ${styles.valuesSection}`} aria-labelledby="values-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">What we stand for</p>
            <h2 id="values-heading" className="ds-h2">Our values</h2>
            <p className="ds-lede" style={{ marginTop: 'var(--space-2)' }}>
              Four principles guide every interaction — with every patient, every day.
            </p>
          </div>
          <ul className={styles.valuesGrid} role="list">
            {VALUES.map((v) => (
              <li key={v.title}>
                <Card padding="lg" className={styles.valueCard}>
                  <span className={styles.valueIcon} aria-hidden="true">{v.icon}</span>
                  <h3 className="ds-h3">{v.title}</h3>
                  <p className="ds-body" style={{ color: 'var(--text-secondary)', margin: 0 }}>
                    {v.desc}
                  </p>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Why WeCare differentiators ───────────────────────────── */}
      <section className={`section ${styles.whySection}`} aria-labelledby="why-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">Why patients choose us</p>
            <h2 id="why-heading" className="ds-h2">
              What makes WeCare Wellness different
            </h2>
            <p className="ds-lede" style={{ marginTop: 'var(--space-2)' }}>
              Hundreds of families in Brandon, Riverview, and across Florida choose WeCare
              for primary care, weight loss, and specialty services. Here is why.
            </p>
          </div>
          <div className={styles.whyGrid}>
            {DIFFERENTIATORS.map((d) => (
              <div key={d.title} className={styles.whyCard}>
                <span className={styles.whyIcon} aria-hidden="true">{d.icon}</span>
                <h3 className={styles.whyTitle}>{d.title}</h3>
                <p className={styles.whyDesc}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ─────────────────────────────────────────────────── */}
      <section id="team" className={`section ${styles.teamSection}`} aria-labelledby="team-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">Our providers</p>
            <h2 id="team-heading" className="ds-h2">Meet the team</h2>
            <p className="ds-lede" style={{ marginTop: 'var(--space-2)' }}>
              Board-certified providers who put your health first — every appointment, every time.
            </p>
          </div>
          <ul className={styles.teamGrid} role="list">
            {TEAM.map((member) => (
              <li key={member.name}>
                <Card as="article" padding="lg" className={styles.teamCard}>
                  <div className={styles.teamAvatar} aria-hidden="true">
                    {member.img ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={member.img} alt="" className={styles.teamImg} />
                    ) : (
                      <span className={styles.teamPlaceholder}>👩‍⚕️</span>
                    )}
                  </div>
                  <h3 className={`ds-h3 ${styles.teamName}`}>{member.name}</h3>
                  <p className={styles.teamCredentials}>{member.credentials}</p>
                  <p className={styles.teamTitle}>{member.title}</p>
                  <p className="ds-body" style={{ color: 'var(--text-secondary)', margin: 0 }}>
                    {member.bio}
                  </p>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Services overview ────────────────────────────────────── */}
      <section className={`section ${styles.servicesSection}`} aria-labelledby="services-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">Comprehensive care</p>
            <h2 id="services-heading" className="ds-h2">
              Everything under one roof
            </h2>
            <p className="ds-lede" style={{ marginTop: 'var(--space-2)' }}>
              From everyday primary care to specialized weight loss and hormone therapy —
              WeCare covers your health from every angle.
            </p>
          </div>
          <ul className={styles.servicesList} role="list">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={s.url} className={styles.serviceItem}>
                  <span className={styles.serviceIcon} aria-hidden="true">{s.icon}</span>
                  <div>
                    <h3 className={styles.serviceName}>{s.name}</h3>
                    <p className={styles.serviceTagline}>{s.tagline}</p>
                  </div>
                  <span className={styles.serviceArrow} aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Areas served ─────────────────────────────────────────── */}
      <section className={`section ${styles.areasSection}`} aria-labelledby="areas-heading">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
            <p className="ds-eyebrow">Service area</p>
            <h2 id="areas-heading" className="ds-h2" style={{ marginBottom: 'var(--space-3)' }}>
              Serving Brandon and the greater Tampa Bay area
            </h2>
            <p className="ds-body" style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-5)' }}>
              Our Brandon clinic serves patients from across Hillsborough County and beyond.
              Telehealth patients are accepted statewide across all of Florida.
            </p>
            <ul className={styles.areasList} role="list" aria-label="Areas we serve">
              {AREAS_SERVED.map((area) => (
                <li key={area} className={styles.areaPill}>{area}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Insurance ────────────────────────────────────────────── */}
      <section className={`section ${styles.insuranceSection}`} aria-labelledby="insurance-heading">
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="ds-eyebrow">Coverage</p>
          <h2 id="insurance-heading" className="ds-h2" style={{ marginBottom: 'var(--space-3)' }}>
            We accept your insurance
          </h2>
          <p className="ds-body" style={{ color: 'var(--text-secondary)', maxWidth: 520, margin: '0 auto var(--space-5)' }}>
            Accepted plans include Aetna, United Healthcare, Medicare, Blue Cross Blue Shield,
            and MultiPlan. Transparent self-pay rates available for uninsured patients.
          </p>
          <ul className={styles.insuranceList} role="list">
            {INSURANCE.map((ins) => (
              <li key={ins} className={styles.insurancePill}>{ins}</li>
            ))}
          </ul>
          <p style={{ marginTop: 'var(--space-4)' }}>
            <Link href="/insurance" className="ds-link">
              View full insurance details & FAQs →
            </Link>
          </p>
        </div>
      </section>

      {/* ── About FAQs ───────────────────────────────────────────── */}
      <section className={`section ${styles.faqSection}`} aria-labelledby="faq-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">Common questions</p>
            <h2 id="faq-heading" className="ds-h2">Questions about WeCare Wellness</h2>
          </div>
          <div className={styles.faqGrid}>
            {FAQS_ABOUT.map((faq) => (
              <div key={faq.q} className={styles.faqItem}>
                <h3 className={styles.faqQ}>{faq.q}</h3>
                <p className={styles.faqA}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA
        heading="Ready to experience better healthcare?"
        subtext="Same-week appointments available. Walk-ins welcome based on availability. Call (813) 438-5220."
      />
    </>
  );
}
