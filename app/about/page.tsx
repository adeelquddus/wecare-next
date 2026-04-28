import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import BookingCTA from '@/components/sections/BookingCTA';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { TRUST_STATS, INSURANCE, INSURANCE_LOGOS, SERVICES, SERVICE_IMAGES, DARLYNE_PORTRAIT_URL } from '@/lib/clinic';
import LogoLoop from '@/components/ui/LogoLoop';
import {
  HeartIcon, MicroscopeIcon, HandshakeIcon, LeafIcon,
  CalendarIcon, GlobeIcon, ClipboardIcon, HospitalIcon, ChatIcon, LightbulbIcon,
  StethoscopeIcon, ShieldIcon, PillsIcon, StarIcon,
} from '@/components/ui/AnimatedIcons';
import type { IconProps } from '@/components/ui/AnimatedIcons';
import styles from './page.module.css';

/* ── Metadata ─────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'About WeCare Wellness Clinic | Darlyne Georges FNP-C - Brandon, FL',
  description:
    'Meet Darlyne Georges, MSN, APRN, FNP-C - a family nurse practitioner with 20+ years of experience in Brandon, FL. WeCare Wellness Clinic is devoted to comprehensive, patient-centered primary care for the whole family.',
  keywords: [
    'WeCare Wellness Clinic about',
    'Darlyne Georges FNP Brandon FL',
    'family nurse practitioner Brandon FL',
    'APRN FNP-C Brandon Florida',
    'primary care provider Brandon FL',
    'wellness clinic mission Brandon FL',
    'patient centered care Brandon FL',
    'nurse practitioner primary care Tampa Bay',
    'WeCare Wellness mission vision',
    'about primary care clinic Brandon Florida',
  ],
  alternates: { canonical: 'https://www.wecarewellnessclinic.com/about' },
  openGraph: {
    title: 'About WeCare Wellness Clinic - Darlyne Georges FNP-C, Brandon FL',
    description:
      'WeCare Wellness Clinic is devoted to comprehensive primary care in Brandon, FL. Meet Darlyne Georges, FNP-C, and learn about our mission to support your healthy lifestyle.',
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
        'WeCare Wellness Clinic is devoted to providing an environment that promotes general health by supporting positive well-being and providing medical services designed to support a healthy lifestyle.',
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
      geo: { '@type': 'GeoCoordinates', latitude: 27.9378, longitude: -82.2859 },
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '09:00', closes: '17:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '09:00', closes: '18:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '13:00' },
      ],
      sameAs: [
        'https://www.facebook.com/wecarewellnessclinic',
        'https://www.instagram.com/wecarewellnessclinic',
      ],
      employee: {
        '@type': 'Physician',
        name: 'Darlyne Georges',
        jobTitle: 'Family Nurse Practitioner',
        description:
          'Darlyne Georges, MSN, APRN, FNP-C is a board-certified family nurse practitioner with over 20 years of healthcare experience specializing in primary care, critical care, and gynecology in Brandon, FL.',
        knowsAbout: ['Primary Care', 'Family Medicine', 'Gynecology', 'Critical Care', 'Physical Fitness'],
      },
      medicalSpecialty: ['Family Practice', 'Internal Medicine', 'Gynecology'],
      availableService: SERVICES.map((s) => ({
        '@type': 'MedicalTherapy',
        name: s.name,
        description: s.description,
      })),
      paymentAccepted: 'Cash, Credit Card, Aetna, United Healthcare, Medicare, Blue Cross Blue Shield, MultiPlan, Tricare',
      priceRange: '$$',
      areaServed: [
        { '@type': 'City', name: 'Brandon', containedInPlace: 'Florida' },
        { '@type': 'City', name: 'Riverview', containedInPlace: 'Florida' },
        { '@type': 'City', name: 'Valrico', containedInPlace: 'Florida' },
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

/* ── Static data ──────────────────────────────────────────────────────── */
const VISION_POINTS = [
  {
    num: '01',
    heading: 'Highest quality of care',
    body: 'WeCare Wellness Clinic is committed to delivering the highest quality of health services - encompassing prevention, health promotion, and medical care for every patient who walks through our doors.',
  },
  {
    num: '02',
    heading: 'Maximising your health potential',
    body: 'We pride ourselves on creating a healthy environment that maximises every patient\'s true health potential by integrating personalised lifestyle services alongside evidence-based clinical medicine.',
  },
];

const PROVIDER_CREDENTIALS = [
  'Over 20 years\' experience in healthcare',
  'Specialises in primary care for all ages',
  'Trained in critical care & gynecology',
  'Certified physical fitness trainer',
];

const VALUES: Array<{ Icon: React.FC<IconProps>; title: string; desc: string }> = [
  { Icon: HeartIcon,       title: 'Patient-First',   desc: 'Every decision begins with what is best for you - we take the time to listen, explain, and build a care plan around your individual goals.' },
  { Icon: MicroscopeIcon,  title: 'Evidence-Based',  desc: 'We follow the latest clinical guidelines from the AMA, CDC, and specialty boards. Our protocols evolve as medicine evolves.' },
  { Icon: HandshakeIcon,   title: 'Accessible',      desc: 'Same-week in-person appointments, Saturday hours, and five major insurance plans accepted. Quality care should always be within reach.' },
  { Icon: LeafIcon,        title: 'Whole-Person',    desc: 'We treat the full person - mind, body, and lifestyle. Nutrition, mental health, sleep, and stress are just as important as lab values.' },
];

const DIFFERENTIATORS: Array<{ Icon: React.FC<IconProps>; title: string; desc: string }> = [
  { Icon: CalendarIcon,   title: 'Same-week appointments', desc: 'New and existing patients are typically seen within 3–5 business days, with same-day telehealth available for urgent needs.' },
  { Icon: GlobeIcon,      title: 'Statewide telehealth',   desc: 'See your WeCare provider from anywhere in Florida - no travel required. We serve patients across all 67 Florida counties via video.' },
  { Icon: ClipboardIcon,  title: 'Comprehensive care',     desc: 'Eight services under one roof: primary care, weight loss, women\'s health, men\'s health, telehealth, IV hydration, HRT, and HIV PrEP.' },
  { Icon: HospitalIcon,   title: 'Independent & unbiased', desc: 'We are an independent clinic. Your care plan is built around your needs - not hospital quotas, referral targets, or system pressures.' },
  { Icon: ChatIcon,       title: 'Direct provider access', desc: 'Reach your actual provider, not an answering service. We prioritise continuity of care so you see the same trusted face every visit.' },
  { Icon: LightbulbIcon,  title: 'Modern medicine',        desc: 'Electronic records, online scheduling, patient portal, telehealth, GLP-1 therapy, and bioidentical HRT - the latest tools for your health.' },
];

const AREAS_SERVED = [
  'Brandon, FL', 'Riverview, FL', 'Valrico, FL', 'Lithia, FL',
  'Sun City Center, FL', 'Plant City, FL', 'Gibsonton, FL', 'Seffner, FL',
  'Temple Terrace, FL', 'Tampa, FL (East)',
];

const FAQS_ABOUT = [
  { q: 'Where is WeCare Wellness Clinic located?', a: 'We are at 214 W Brandon Blvd, Brandon, FL 33511 - in the heart of Brandon with easy parking and ADA-accessible facilities.' },
  { q: 'Are you accepting new patients?', a: 'Yes - WeCare is currently accepting new patients for primary care, all specialty services, and telehealth. Book online or call (813) 438-5220.' },
  { q: 'What are your hours?', a: 'Mon–Thu 9 AM–5 PM · Fri 9 AM–6 PM · Sat 9 AM–1 PM · Sun Closed. Telehealth appointments may be available outside these hours.' },
  { q: 'Do I need a referral?', a: 'No referral is needed. Book online or call (813) 438-5220 directly. Most insurance plans accept us as your primary care provider (PCP).' },
  { q: 'What insurance do you accept?', a: 'We accept Aetna, United Healthcare, Medicare, Blue Cross Blue Shield, MultiPlan, and Tricare. Transparent self-pay rates are also available.' },
  { q: 'Do you offer telehealth statewide?', a: 'Yes. Our providers see telehealth patients across all of Florida - covering primary care, follow-ups, prescription refills, and chronic condition management.' },
];

/* ── Page ─────────────────────────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── Hero - custom for About page ─────────────────────────── */}
      <section className={styles.aboutHero} aria-labelledby="about-hero-heading">
        {/* Decorative blobs */}
        <span className={`${styles.blob} ${styles.blobOne}`} aria-hidden="true" />
        <span className={`${styles.blob} ${styles.blobTwo}`} aria-hidden="true" />
        <span className={`${styles.blob} ${styles.blobThree}`} aria-hidden="true" />
        <span className={styles.dotPattern} aria-hidden="true" />

        <div className="container">
          <div className={styles.aboutHeroGrid}>
            {/* Left - story */}
            <div className={styles.aboutHeroContent}>
              <span className={styles.aboutHeroBadge}>
                <span className={styles.pulseDot} aria-hidden="true" />
                Our story · Brandon, FL
              </span>

              <h1 id="about-hero-heading" className={styles.aboutHeroHeadline}>
                <span className={styles.headlineDark}>Compassionate care.</span>
                <span className={styles.headlineGradient}>Personalised wellness.</span>
                <span className={styles.headlineDark}>Real relationships.</span>
              </h1>

              <p className={styles.aboutHeroLede}>
                WeCare Wellness Clinic is devoted to promoting general health - supporting
                attitudes that contribute to positive well-being and delivering medical
                services built around your healthy lifestyle.
              </p>

              {/* Trust pills */}
              <ul className={styles.aboutHeroPills} role="list">
                <li><StarIcon size={16} /> 20+ years experience</li>
                <li><StethoscopeIcon size={16} /> 8 services under one roof</li>
                <li><GlobeIcon size={16} /> Telehealth statewide FL</li>
              </ul>

              <div className={styles.aboutHeroCtas}>
                <Button href="/booking" size="lg" variant="primary">Book an Appointment</Button>
                <Button href="#provider" size="lg" variant="outline">Meet Darlyne</Button>
              </div>
            </div>

            {/* Right - floating credential card */}
            <div className={styles.aboutHeroCard} aria-hidden="false">
              <div className={styles.profileCard}>
                <div className={styles.profileImgWrap}>
                  <Image
                    src={DARLYNE_PORTRAIT_URL}
                    alt="Darlyne Georges, FNP-C - Family Nurse Practitioner"
                    fill
                    priority
                    sizes="(max-width: 900px) 80vw, 360px"
                    className={styles.profileImg}
                  />
                </div>
                <div className={styles.profileBody}>
                  <p className={styles.profileEyebrow}>Family Nurse Practitioner</p>
                  <h2 className={styles.profileName}>Darlyne Georges</h2>
                  <p className={styles.profileCreds}>MSN · APRN · FNP-C</p>
                  <ul className={styles.profileStars} role="list">
                    {['Primary care', 'Women\'s health', 'Critical care'].map((s) => (
                      <li key={s}><span aria-hidden="true">★</span>{s}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Floating mini-stat */}
              <div className={styles.floatStat}>
                <span className={styles.floatStatValue}>20+</span>
                <span className={styles.floatStatLabel}>Years caring<br/>for patients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission ──────────────────────────────────────────────── */}
      <section className={`section ${styles.missionSection}`} aria-labelledby="mission-heading">
        <div className="container">
          <div className={styles.missionGrid}>
            {/* Left: Mission text */}
            <div>
              <p className="ds-eyebrow">Our mission</p>
              <h2 id="mission-heading" className="ds-h2" style={{ marginBottom: 'var(--space-4)' }}>
                A comprehensive approach to healthy living
              </h2>
              <blockquote className={styles.missionQuote}>
                "We Care Wellness Clinic is devoted to providing an environment that promotes
                general health by supporting the adoption of attitudes that contribute to positive
                well-being - and providing information, activities, and medical services designed
                to support a healthy lifestyle."
              </blockquote>
              <p className="ds-body" style={{ color: 'var(--text-secondary)', marginTop: 'var(--space-4)' }}>
                Our mission at WeCare Wellness Clinic is to take a comprehensive approach in
                helping others achieve and maintain a healthy lifestyle while improving their
                overall well-being. We believe that prevention, education, and personalised care
                are the cornerstones of a healthier community - one patient at a time.
              </p>
              <div style={{ marginTop: 'var(--space-5)' }}>
                <Button href="/booking" variant="primary" size="md">Book your visit</Button>
              </div>
            </div>

            {/* Right: Stats */}
            <ul className={styles.statsGrid} role="list" aria-label="Clinic highlights">
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

      {/* ── Vision ───────────────────────────────────────────────── */}
      <section className={`section ${styles.visionSection}`} aria-labelledby="vision-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">Our vision</p>
            <h2 id="vision-heading" className="ds-h2">What we are building toward</h2>
            <p className="ds-lede" style={{ marginTop: 'var(--space-2)' }}>
              Two guiding commitments shape everything we do at WeCare Wellness Clinic.
            </p>
          </div>
          <div className={styles.visionGrid}>
            {VISION_POINTS.map((v) => (
              <div key={v.num} className={styles.visionCard}>
                <span className={styles.visionNum}>{v.num}</span>
                <h3 className={styles.visionHeading}>{v.heading}</h3>
                <p className={styles.visionBody}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Provider ─────────────────────────────────────────────── */}
      <section id="provider" className={`section ${styles.providerSection}`} aria-labelledby="provider-heading">
        <div className="container">
          <div className={styles.providerGrid}>

            {/* Photo column */}
            <div className={styles.providerPhotoCol}>
              <div className={styles.providerPhotoWrap}>
                <Image
                  src={DARLYNE_PORTRAIT_URL}
                  alt="Darlyne Georges, MSN, APRN, FNP-C - Family Nurse Practitioner at WeCare Wellness Clinic"
                  fill
                  className={styles.providerPhoto}
                  sizes="(max-width: 900px) 100vw, 45vw"
                />
              </div>
              <div className={styles.providerBadges}>
                <span className={styles.providerBadge}>MSN</span>
                <span className={styles.providerBadge}>APRN</span>
                <span className={styles.providerBadge}>FNP-C</span>
                <span className={styles.providerBadge}>20+ Yrs Experience</span>
              </div>
            </div>

            {/* Bio column */}
            <div className={styles.providerBioCol}>
              <p className="ds-eyebrow">Meet your provider</p>
              <h2 id="provider-heading" className="ds-h2" style={{ marginBottom: 'var(--space-1)' }}>
                Darlyne Georges
              </h2>
              <p className={styles.providerTitle}>MSN, APRN, FNP-C &nbsp;·&nbsp; Family Nurse Practitioner</p>

              <p className="ds-body" style={{ color: 'var(--text-secondary)', marginTop: 'var(--space-4)' }}>
                Darlyne Georges is a board-certified family nurse practitioner who helps her
                patients by addressing multiple conditions with care and expertise. She understands
                that each individual is unique and takes the time to assess the needs of each
                patient personally.
              </p>
              <p className="ds-body" style={{ color: 'var(--text-secondary)', marginTop: 'var(--space-3)' }}>
                Her goal is to use her knowledge and compassion to provide high-quality,
                cost-effective healthcare that gives her patients a higher level of wellness.
                With over 20 years in the healthcare industry, Darlyne is devoted to offering
                the highest level of care with a more personal approach - in a welcoming,
                pleasant environment.
              </p>

              <ul className={styles.credentialList} role="list" aria-label="Credentials and specialisations">
                {PROVIDER_CREDENTIALS.map((c) => (
                  <li key={c} className={styles.credentialItem}>
                    <span className={styles.credentialStar} aria-hidden="true">★</span>
                    {c}
                  </li>
                ))}
              </ul>

              <div className={styles.providerActions}>
                <Button href="/booking" variant="primary" size="md">Book with Darlyne</Button>
                <a href="tel:+18134385220" className={styles.providerPhone}>(813) 438-5220</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Your FNP Matters ─────────────────────────────────── */}
      <section className={`section ${styles.fnpSection}`} aria-labelledby="fnp-heading">
        <div className="container">
          <div className={styles.fnpGrid}>
            <div className={styles.fnpText}>
              <p className="ds-eyebrow">Why a family nurse practitioner?</p>
              <h2 id="fnp-heading" className="ds-h2">
                Your first - and best - step in primary care
              </h2>
              <p className="ds-body" style={{ color: 'var(--text-secondary)', marginTop: 'var(--space-3)' }}>
                In today's healthcare landscape, physicians are often unable to provide the
                necessary check-ups and attentive care patients deserve, due to heavy workloads
                and fragmented scheduling. Many patients travel between different clinics
                throughout the year without ever building a meaningful relationship with a
                consistent provider.
              </p>
              <p className="ds-body" style={{ color: 'var(--text-secondary)', marginTop: 'var(--space-3)' }}>
                People who need medical attention most - including those without health insurance
                - deserve a dedicated advocate in their corner. A family nurse practitioner like
                Darlyne Georges serves as that first and most important step: providing
                comprehensive check-ups, personalised wellness plans, and the kind of
                preventive medicine that catches problems before they become serious.
              </p>
              <p className="ds-body" style={{ color: 'var(--text-secondary)', marginTop: 'var(--space-3)' }}>
                By developing a true understanding of each patient's health history, lifestyle,
                and goals, Darlyne delivers care that is not just reactive - but proactive,
                preventive, and built for long-term wellness.
              </p>
            </div>
            <div className={styles.fnpCards}>
              {([
                { Icon: StethoscopeIcon, stat: '20+',       label: 'Years in healthcare',     sub: 'Serving patients across primary care, critical care & gynecology' },
                { Icon: ShieldIcon,      stat: '100%',      label: 'Personalised plans',      sub: 'Every patient assessed as a unique individual - never a number' },
                { Icon: PillsIcon,       stat: 'Same week', label: 'Appointments available',  sub: 'Fast access to care when you need it, not months later' },
                { Icon: ClipboardIcon,   stat: '8',         label: 'Services offered',        sub: 'Comprehensive wellness under one roof in Brandon, FL' },
              ] as Array<{ Icon: React.FC<IconProps>; stat: string; label: string; sub: string }>).map(({ Icon, stat, label, sub }) => (
                <div key={label} className={styles.fnpCard}>
                  <span className={styles.fnpCardIcon} aria-hidden="true"><Icon size={32} /></span>
                  <span className={styles.fnpCardStat}>{stat}</span>
                  <span className={styles.fnpCardLabel}>{label}</span>
                  <span className={styles.fnpCardSub}>{sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────────── */}
      <section className={`section ${styles.valuesSection}`} aria-labelledby="values-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">What we stand for</p>
            <h2 id="values-heading" className="ds-h2">Our core values</h2>
            <p className="ds-lede" style={{ marginTop: 'var(--space-2)' }}>
              Four principles guide every interaction - with every patient, every day.
            </p>
          </div>
          <ul className={styles.valuesGrid} role="list">
            {VALUES.map(({ Icon, title, desc }) => (
              <li key={title}>
                <Card padding="lg" className={styles.valueCard}>
                  <span className={styles.valueIcon} aria-hidden="true"><Icon size={40} /></span>
                  <h3 className="ds-h3">{title}</h3>
                  <p className="ds-body" style={{ color: 'var(--text-secondary)', margin: 0 }}>{desc}</p>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Why WeCare ───────────────────────────────────────────── */}
      <section className={`section ${styles.whySection}`} aria-labelledby="why-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">Why patients choose us</p>
            <h2 id="why-heading" className="ds-h2">What makes WeCare Wellness different</h2>
            <p className="ds-lede" style={{ marginTop: 'var(--space-2)' }}>
              Hundreds of families in Brandon, Riverview, and across Florida trust WeCare for
              primary care, weight loss, and specialist services. Here is why.
            </p>
          </div>
          <div className={styles.whyGrid}>
            {DIFFERENTIATORS.map(({ Icon, title, desc }) => (
              <div key={title} className={styles.whyCard}>
                <span className={styles.whyIcon} aria-hidden="true"><Icon size={32} /></span>
                <h3 className={styles.whyTitle}>{title}</h3>
                <p className={styles.whyDesc}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────── */}
      <section className={`section ${styles.servicesSection}`} aria-labelledby="services-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">Comprehensive care</p>
            <h2 id="services-heading" className="ds-h2">Everything under one roof</h2>
            <p className="ds-lede" style={{ marginTop: 'var(--space-2)' }}>
              From everyday primary care to specialised weight loss and hormone therapy -
              WeCare covers your health from every angle.
            </p>
          </div>
          <ul className={styles.servicesList} role="list">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={s.url} className={styles.serviceItem}>
                  {SERVICE_IMAGES[s.slug] ? (
                    <Image
                      src={SERVICE_IMAGES[s.slug]}
                      alt=""
                      width={36}
                      height={36}
                      className={styles.serviceThumb}
                      aria-hidden="true"
                    />
                  ) : (
                    <span className={styles.serviceIcon} aria-hidden="true">{s.icon}</span>
                  )}
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
              Serving Brandon & greater Tampa Bay
            </h2>
            <p className="ds-body" style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-5)' }}>
              Our Brandon clinic serves patients across Hillsborough County and beyond.
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
            MultiPlan, and Tricare. Transparent self-pay rates available for uninsured patients.
          </p>
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
        <div className="container" style={{ textAlign: 'center', marginTop: 'var(--space-4)' }}>
          <Link href="/insurance" className="ds-link">
            View full insurance details & FAQs →
          </Link>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
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
        subtext="Same-week appointments available for new and existing patients. Call (813) 438-5220 or book online."
      />
    </>
  );
}
