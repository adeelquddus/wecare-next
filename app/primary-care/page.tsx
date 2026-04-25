import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import BookingCTA from '@/components/sections/BookingCTA';
import styles from './page.module.css';

/* ── Metadata ─────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Primary Care Doctor in Brandon, FL — WeCare Wellness Clinic',
  description:
    'Board-certified primary care in Brandon, FL. Annual physicals, chronic disease management, same-week appointments & Saturday hours. Aetna, Medicare & uninsured accepted.',
  keywords: [
    'primary care doctor Brandon FL',
    'family doctor Brandon FL',
    'annual physical Brandon FL',
    'chronic disease management Brandon FL',
    'primary care accepting new patients Brandon FL',
    'primary care clinic Brandon Florida',
    'same-day primary care Brandon',
    'primary care near Valrico FL',
    'primary care near Riverview FL',
    'primary care uninsured Brandon FL',
  ],
  alternates: { canonical: 'https://www.wecarewellnessclinic.com/primary-care' },
  openGraph: {
    title: 'Primary Care Doctor in Brandon, FL — WeCare Wellness Clinic',
    description:
      'Comprehensive primary care for every age. Same-week appointments, Saturday hours, telehealth available. Accepting new patients in Brandon, FL.',
    url: 'https://www.wecarewellnessclinic.com/primary-care',
    type: 'website',
  },
};

/* ── Data ─────────────────────────────────────────────────────────────── */
const BENEFITS = [
  {
    icon: '🩺',
    title: 'Whole-family care',
    desc: 'From pediatric checkups to senior wellness visits, we treat every age under one roof — no referral needed to get started.',
  },
  {
    icon: '📋',
    title: 'Annual wellness exams',
    desc: 'Comprehensive preventive exams with lab work, cancer screenings, and immunization reviews tailored to your age and risk profile.',
  },
  {
    icon: '💊',
    title: 'Chronic disease management',
    desc: 'Structured care plans for diabetes, hypertension, high cholesterol, asthma, thyroid disorders, and other long-term conditions.',
  },
  {
    icon: '🔬',
    title: 'In-house lab & diagnostics',
    desc: 'On-site blood draws, urinalysis, EKG, and rapid diagnostics mean faster answers without sending you to a separate lab facility.',
  },
  {
    icon: '📱',
    title: 'Telehealth follow-ups',
    desc: "Can't make it in? Continue your care via secure video from anywhere in Florida — ideal for follow-ups, results review, and Rx refills.",
  },
  {
    icon: '🤝',
    title: 'Specialist referrals',
    desc: 'We coordinate warm referrals to trusted specialists in cardiology, endocrinology, orthopedics, and more so your care stays connected.',
  },
  {
    icon: '💉',
    title: 'Immunizations & travel vaccines',
    desc: 'Stay up to date with flu shots, COVID-19 boosters, tetanus, shingles, pneumonia, and travel-specific vaccines.',
  },
  {
    icon: '🏃',
    title: 'Preventive screenings',
    desc: 'Evidence-based screenings for colorectal cancer, hypertension, diabetes, STIs, and vision and hearing changes — caught early, treated better.',
  },
  {
    icon: '🧠',
    title: 'Behavioral health integration',
    desc: 'Primary care includes routine screening for anxiety and depression, with medication management and referrals to licensed therapists.',
  },
];

const CONDITIONS = [
  'Type 2 Diabetes',
  'Hypertension (High Blood Pressure)',
  'High Cholesterol (Hyperlipidemia)',
  'Asthma & COPD',
  'Thyroid Disorders (Hypothyroidism / Hyperthyroidism)',
  'GERD & Acid Reflux',
  'Obesity & Metabolic Syndrome',
  'Anxiety & Depression',
  'Urinary Tract Infections',
  'Skin Conditions (Acne, Eczema, Rashes)',
  'Seasonal Allergies',
  'Iron-Deficiency Anemia',
  'Pre-Diabetes',
  'Sleep Disorders & Insomnia',
  'Osteoarthritis & Joint Pain',
  'Migraine & Tension Headaches',
  'Erectile Dysfunction',
  'Polycystic Ovary Syndrome (PCOS)',
  'Back Pain & Musculoskeletal Complaints',
  'Vitamin D & B12 Deficiencies',
  'Fatty Liver Disease (NAFLD)',
  'Heart Palpitations & Arrhythmia',
  'Flu, Strep, COVID-19 & Acute Illness',
  'Pre-operative Medical Clearance',
];

const DIFFERENTIATORS = [
  {
    icon: '📅',
    title: 'Saturday appointments available',
    desc: "We're open Saturday 9 AM–1 PM — one of the few Brandon clinics that offers weekend primary care so you don't have to miss work or school.",
  },
  {
    icon: '⚡',
    title: 'Same-week access for new patients',
    desc: 'Most primary care practices make new patients wait weeks. We consistently offer same-week appointments — and often same-day for urgent needs.',
  },
  {
    icon: '💼',
    title: 'Full-service under one roof',
    desc: 'Beyond primary care, we offer GLP-1 weight loss, IV hydration, hormone therapy, and gynecology — reducing the specialists you have to coordinate.',
  },
  {
    icon: '💳',
    title: 'Uninsured patients welcome',
    desc: 'We believe cost should not be a barrier to good health. Transparent self-pay rates are available, and we will work with you on a plan.',
  },
  {
    icon: '🌐',
    title: 'Telehealth across Florida',
    desc: 'Licensed to see patients anywhere in Florida via video — great for snowbirds, remote workers, and anyone with a busy schedule.',
  },
  {
    icon: '🏥',
    title: 'Coordinated, continuous care',
    desc: 'We maintain complete medical records and proactively follow up after specialist visits, ER trips, and lab results so nothing falls through the cracks.',
  },
];

const PROCESS = [
  {
    num: 1,
    title: 'Book online or call',
    desc: 'Choose your appointment type — new patient visit, annual physical, follow-up, or urgent care. Evening and Saturday slots available.',
  },
  {
    num: 2,
    title: 'Complete intake forms',
    desc: 'New patient paperwork is available online so your provider has your full medical history before you arrive — no wasted time in the waiting room.',
  },
  {
    num: 3,
    title: 'See your provider',
    desc: 'Meet with a board-certified physician in-person or by secure video. We spend adequate time with each patient — no rushed 7-minute visits.',
  },
  {
    num: 4,
    title: 'Get your care plan',
    desc: 'Leave with a clear, personalized plan: lab orders, medication changes, referrals, and a follow-up schedule tailored to your goals.',
  },
];

const FAQS = [
  {
    q: 'Do you accept new patients for primary care?',
    a: 'Yes — we actively welcome new patients and typically offer same-week availability. Whether you have recently moved to Brandon, lost your previous doctor, or have never had a primary care provider, our team will get you set up quickly. Call (813) 438-5220 or book online at any time to schedule your new patient visit.',
  },
  {
    q: 'What insurance plans do you accept?',
    a: 'We are in-network with Aetna, United Healthcare, Medicare, Blue Cross Blue Shield, and MultiPlan. We also see patients who are uninsured or underinsured at transparent self-pay rates. If you are unsure whether your specific plan is accepted, our front office team is happy to verify your benefits before your visit so there are no surprises at check-in.',
  },
  {
    q: 'Can I see a primary care doctor for an urgent issue?',
    a: 'Absolutely. We reserve same-day and next-day appointment slots for established patients with acute needs such as fever, infections, respiratory illness, or sudden pain. New patients experiencing urgent concerns are typically seen within the same week. If you need immediate care outside our hours, our team can advise you on the most appropriate level of care.',
  },
  {
    q: 'Do you offer telehealth primary care visits?',
    a: 'Yes. Many primary care services can be delivered via secure video, including follow-up appointments, lab result reviews, prescription refills, chronic disease check-ins, and behavioral health screenings. Telehealth visits are available for patients throughout Florida. You just need a smartphone, tablet, or computer with a camera — no special app required.',
  },
  {
    q: 'What is included in an annual wellness exam?',
    a: 'Our annual physical includes a comprehensive head-to-toe examination, review of your medical history, and personalized screening recommendations based on your age, sex, and risk factors. We order appropriate lab work (lipid panel, metabolic panel, A1c, thyroid, and more), review immunization status, discuss preventive screenings like colonoscopy or mammography, and address any ongoing concerns. Most insurance plans cover annual wellness exams at 100%.',
  },
  {
    q: 'What chronic conditions do you manage?',
    a: 'Our primary care team manages a broad range of chronic conditions including type 2 diabetes, hypertension, high cholesterol, asthma, COPD, hypothyroidism, GERD, anxiety, depression, obesity, and pre-diabetes, among many others. We create individualized care plans with medication management, lifestyle counseling, regular monitoring, and specialist coordination so your conditions stay well-controlled over the long term.',
  },
  {
    q: 'Do you see children and seniors?',
    a: 'Yes. We provide care for patients of all ages, from pediatric well-child visits and school physicals to Medicare-covered annual wellness visits for seniors. We are experienced in age-appropriate preventive care, growth and development monitoring for children, and geriatric concerns such as fall prevention, polypharmacy review, and cognitive screening for older adults.',
  },
  {
    q: 'Are you open on Saturdays?',
    a: 'Yes — we are open Saturday from 9 AM to 1 PM, making us one of the few primary care practices in the Brandon area with weekend availability. Saturday hours are ideal for working adults, parents with school-aged children, and anyone who finds it difficult to take time off during the week. Regular Monday–Thursday hours are 9 AM–5 PM, and Friday hours extend to 6 PM.',
  },
  {
    q: 'How do I transfer my medical records from a previous provider?',
    a: 'Transferring records is straightforward. You can sign a release-of-information form at your new patient visit or download it from our patient portal in advance. Our staff will contact your previous provider to request records on your behalf. In the meantime, please bring a list of your current medications, recent lab results if you have them, and any specialist reports so your new provider has the full picture from day one.',
  },
  {
    q: 'Do you offer preventive care and health screenings?',
    a: 'Preventive care is central to what we do. We follow USPSTF guidelines for screenings including colorectal cancer, cervical cancer, breast cancer, diabetes, hypertension, depression, and sexually transmitted infections. We also offer cardiovascular risk assessment, bone density referrals, skin checks, and vision and hearing evaluations. Catching problems early is always less costly — in every sense — than treating them late.',
  },
];

/* ── JSON-LD ──────────────────────────────────────────────────────────── */
const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: 'WeCare Wellness Clinic',
    url: 'https://www.wecarewellnessclinic.com',
    logo: 'https://www.wecarewellnessclinic.com/logo.png',
    image: 'https://www.wecarewellnessclinic.com/og-image.jpg',
    description:
      'Board-certified primary care clinic in Brandon, FL offering annual physicals, chronic disease management, same-week appointments, and Saturday hours. Accepting new patients. Most insurance accepted.',
    telephone: '+1-813-438-5220',
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
      latitude: 27.937,
      longitude: -82.285,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '09:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Friday',
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '13:00',
      },
    ],
    medicalSpecialty: 'PrimaryCare',
    availableService: [
      { '@type': 'MedicalProcedure', name: 'Annual Wellness Exam' },
      { '@type': 'MedicalProcedure', name: 'Chronic Disease Management' },
      { '@type': 'MedicalProcedure', name: 'Preventive Screenings' },
      { '@type': 'MedicalProcedure', name: 'Immunizations' },
      { '@type': 'MedicalProcedure', name: 'Telehealth Visits' },
      { '@type': 'MedicalProcedure', name: 'Acute Illness & Injury Treatment' },
    ],
    hasMap: 'https://maps.google.com/?q=214+W+Brandon+Blvd+Brandon+FL+33511',
    sameAs: [
      'https://www.facebook.com/wecarewellnessclinic',
      'https://www.instagram.com/wecarewellnessclinic',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.wecarewellnessclinic.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Primary Care',
        item: 'https://www.wecarewellnessclinic.com/primary-care',
      },
    ],
  },
];

/* ── Page component ───────────────────────────────────────────────────── */
export default function PrimaryCarePage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero
        headline="Primary care that puts you first"
        subtext="Board-certified physicians providing comprehensive, continuous care for patients of all ages in Brandon, FL — in-person and via telehealth. Same-week appointments available."
        ctaLabel="Book a Visit"
        ctaHref="/booking"
        secondaryLabel="Call (813) 438-5220"
        secondaryHref="tel:+18134385220"
        badgeText="Accepting new patients"
        variant="gradient"
      />

      {/* ── Intro ──────────────────────────────────────────────────────── */}
      <section className={styles.intro} aria-labelledby="intro-heading">
        <div className="container">
          <div className={styles.introGrid}>
            <div>
              <p className={styles.introLabel}>Comprehensive primary care in Brandon, FL</p>
              <h2 id="intro-heading" className={styles.introHeading}>
                Your long-term health partner in Brandon
              </h2>
              <p className={styles.introBody}>
                At WeCare Wellness Clinic, our board-certified primary care providers do more than treat today's symptoms — they invest in understanding your complete health history so they can help you prevent tomorrow's problems. Whether you need a routine annual physical, are managing a chronic condition like diabetes or hypertension, or have an urgent concern that can't wait, our team delivers timely, personalized care that you can count on.
              </p>
              <p className={styles.introBody}>
                Conveniently located at 214 W Brandon Blvd, we serve Brandon, Valrico, Riverview, Sun City Center, and patients across Florida via telehealth. We accept Aetna, United Healthcare, Medicare, Blue Cross Blue Shield, and MultiPlan, and we welcome uninsured patients with transparent self-pay pricing. Most importantly, we're accepting new patients right now — with same-week availability that most clinics simply can't match.
              </p>
              <p className={styles.introBody}>
                Unlike practices that rush patients through in seven minutes, we allocate real time for every visit. You'll leave with a clear understanding of your health status, a personalized care plan, and direct access to your care team for questions in between appointments.
              </p>
              <ul className={styles.featuresList} role="list">
                {[
                  'Annual wellness & preventive exams',
                  'Chronic disease management (diabetes, hypertension & more)',
                  'Acute illness & injury treatment',
                  'In-house lab work & rapid diagnostics',
                  'Warm referrals to trusted specialists',
                  'Same-week & Saturday appointments',
                  'Telehealth for all of Florida',
                  'Uninsured & self-pay patients welcome',
                ].map((f) => (
                  <li key={f} className={styles.featuresListItem}>
                    <span className={styles.checkIcon} aria-hidden="true">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.statsPanel} aria-label="Quick facts about WeCare Wellness Clinic">
              {[
                { value: '500+', label: 'Patients served in Brandon' },
                { value: '4.9★', label: 'Average patient rating' },
                { value: 'Same week', label: 'New patient availability' },
                { value: '6 days', label: 'Open Mon–Sat for your convenience' },
                { value: '5+', label: 'Years serving the Brandon community' },
                { value: '5+', label: 'Insurance plans accepted' },
              ].map((s) => (
                <div key={s.label} className={styles.statRow}>
                  <span className={styles.statValue}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services / Benefits ────────────────────────────────────────── */}
      <section className={styles.benefitsSection} aria-labelledby="benefits-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">What we offer</p>
            <h2 id="benefits-heading" className="ds-h2">Primary care services</h2>
            <p className="ds-lede" style={{ marginTop: 'var(--space-2)' }}>
              Everything you need to manage, protect, and improve your health — all delivered by a team that knows you by name, not just a chart number.
            </p>
          </div>
          <div className={styles.benefitsGrid} role="list">
            {BENEFITS.map((b) => (
              <div key={b.title} className={styles.benefitCard} role="listitem">
                <span className={styles.benefitIcon} aria-hidden="true">{b.icon}</span>
                <h3 className={styles.benefitTitle}>{b.title}</h3>
                <p className={styles.benefitDesc}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Conditions We Treat ───────────────────────────────────────── */}
      <section className={styles.processSection} aria-labelledby="conditions-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">Conditions we treat</p>
            <h2 id="conditions-heading" className="ds-h2">
              Treating the full spectrum of primary care needs
            </h2>
            <p className="ds-lede" style={{ marginTop: 'var(--space-2)' }}>
              Our providers are trained to diagnose, treat, and manage a broad range of acute and chronic conditions. Below is a partial list — if your condition isn't listed, call us and we'll let you know if we can help.
            </p>
          </div>
          <ul className={styles.featuresList} role="list"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 'var(--space-2)', maxWidth: '900px', margin: '0 auto' }}>
            {CONDITIONS.map((c) => (
              <li key={c} className={styles.featuresListItem}>
                <span className={styles.checkIcon} aria-hidden="true">✓</span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Why Choose WeCare ─────────────────────────────────────────── */}
      <section className={styles.benefitsSection} aria-labelledby="why-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">Why choose WeCare</p>
            <h2 id="why-heading" className="ds-h2">
              What makes us different from other Brandon primary care practices
            </h2>
            <p className="ds-lede" style={{ marginTop: 'var(--space-2)' }}>
              Brandon has several primary care options — here is why our patients choose WeCare Wellness Clinic and why they keep coming back.
            </p>
          </div>
          <div className={styles.benefitsGrid} role="list">
            {DIFFERENTIATORS.map((d) => (
              <div key={d.title} className={styles.benefitCard} role="listitem">
                <span className={styles.benefitIcon} aria-hidden="true">{d.icon}</span>
                <h3 className={styles.benefitTitle}>{d.title}</h3>
                <p className={styles.benefitDesc}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ───────────────────────────────────────────────────── */}
      <section className={styles.processSection} aria-labelledby="process-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">Getting started</p>
            <h2 id="process-heading" className="ds-h2">How a visit works</h2>
            <p className="ds-lede" style={{ marginTop: 'var(--space-2)' }}>
              From booking to your care plan, the process is simple, transparent, and designed around your schedule.
            </p>
          </div>
          <ol className={styles.processSteps} role="list">
            {PROCESS.map((step) => (
              <li key={step.num} className={styles.processStep}>
                <div className={styles.stepNum} aria-hidden="true">{step.num}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Hours & Location callout ──────────────────────────────────── */}
      <section className={styles.intro} aria-labelledby="location-heading">
        <div className="container">
          <div className={styles.introGrid}>
            <div>
              <p className={styles.introLabel}>Hours &amp; location</p>
              <h2 id="location-heading" className={styles.introHeading}>
                Conveniently located in Brandon, FL
              </h2>
              <p className={styles.introBody}>
                We are located at <strong>214 W Brandon Blvd, Brandon, FL 33511</strong> — just off the main corridor with ample free parking. Our clinic is easily accessible from Valrico, Riverview, Sun City Center, and the greater Tampa Bay area.
              </p>
              <p className={styles.introBody}>
                Can't make it in during the week? Our <strong>Saturday morning hours (9 AM–1 PM)</strong> and <strong>Friday evening hours (open until 6 PM)</strong> mean there is almost always a time that works for your schedule. For patients throughout Florida, telehealth visits are available on the same schedule.
              </p>
              <ul className={styles.featuresList} role="list">
                {[
                  'Monday – Thursday: 9:00 AM – 5:00 PM',
                  'Friday: 9:00 AM – 6:00 PM',
                  'Saturday: 9:00 AM – 1:00 PM',
                  'Sunday: Closed',
                  'Telehealth available during all open hours',
                  'Phone: (813) 438-5220',
                ].map((f) => (
                  <li key={f} className={styles.featuresListItem}>
                    <span className={styles.checkIcon} aria-hidden="true">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.statsPanel} aria-label="Service area quick facts">
              {[
                { value: 'Brandon', label: 'Primary service area' },
                { value: 'Valrico', label: 'Nearby community served' },
                { value: 'Riverview', label: 'Nearby community served' },
                { value: 'All FL', label: 'Telehealth coverage' },
                { value: '< 15 min', label: 'Average wait time' },
              ].map((s) => (
                <div key={s.label} className={styles.statRow}>
                  <span className={styles.statValue}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────── */}
      <section className={styles.faqSection} aria-labelledby="faq-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">Common questions</p>
            <h2 id="faq-heading" className="ds-h2">Primary care FAQs</h2>
            <p className="ds-lede" style={{ marginTop: 'var(--space-2)' }}>
              Answers to the questions we hear most often from new and existing patients considering primary care in Brandon.
            </p>
          </div>
          <div className={styles.faqGrid} role="list">
            {FAQS.map((faq) => (
              <div key={faq.q} className={styles.faqItem} role="listitem">
                <h3 className={styles.faqQ}>{faq.q}</h3>
                <p className={styles.faqA}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Insurance strip ───────────────────────────────────────────── */}
      <div className={styles.insuranceStrip} role="complementary" aria-label="Insurance accepted at WeCare Wellness Clinic">
        <p className={styles.insuranceText}>Insurance accepted — and uninsured patients always welcome</p>
        <p className={styles.insuranceNames}>
          Aetna &nbsp;·&nbsp; United Healthcare &nbsp;·&nbsp; Medicare &nbsp;·&nbsp; Blue Cross Blue Shield &nbsp;·&nbsp; MultiPlan &nbsp;·&nbsp; Self-Pay
        </p>
      </div>

      <BookingCTA
        heading="Ready to make primary care a priority?"
        subtext="New and returning patients welcome. Same-week appointments available in Brandon, FL — or via telehealth anywhere in Florida. Saturday hours available."
      />
    </>
  );
}
