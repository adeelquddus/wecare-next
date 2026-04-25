import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import BookingCTA from '@/components/sections/BookingCTA';
import RelatedServices from '@/components/sections/RelatedServices';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Telehealth Doctor Florida — Virtual Visits | WeCare Brandon FL',
  description:
    'Board-certified telehealth doctor, statewide Florida. Virtual visits for primary care, prescriptions & chronic conditions. Most insurance accepted.',
  keywords: [
    'telehealth doctor Florida',
    'virtual doctor visit Brandon FL',
    'online doctor Florida',
    'telehealth primary care Florida',
    'same day telehealth Florida',
    'video doctor appointment Florida',
    'virtual urgent care Florida',
    'online prescription refill Florida',
    'telehealth doctor near me',
    'video visit doctor Brandon FL',
    'telehealth clinic Brandon Florida',
    'same day online doctor appointment',
  ],
  alternates: { canonical: 'https://www.wecarewellnessclinic.com/telehealth' },
  openGraph: {
    title: 'Telehealth Doctor in Florida — Same-Day Video Visits | WeCare Wellness Clinic',
    description:
      'Same-day telehealth visits with board-certified providers across Florida. Primary care, prescriptions, chronic condition management & more. Book online now.',
    url: 'https://www.wecarewellnessclinic.com/telehealth',
    type: 'website',
    siteName: 'WeCare Wellness Clinic',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Telehealth Doctor in Florida — WeCare Wellness Clinic',
    description:
      'See a board-certified doctor today from anywhere in Florida. Same-day video visits for primary care, prescriptions & more.',
  },
};

/* ─── JSON-LD Schemas ──────────────────────────────────────────────── */

const medicalClinicSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
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
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '09:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '09:00',
      closes: '13:00',
    },
  ],
  medicalSpecialty: 'PrimaryCare',
  availableService: [
    {
      '@type': 'MedicalTherapy',
      name: 'Telehealth Primary Care',
      description:
        'Virtual primary care visits via secure video for Florida residents. Includes prescription refills, sick visits, chronic condition management, and follow-ups.',
    },
    {
      '@type': 'MedicalTherapy',
      name: 'Online Prescription Refills',
      description:
        'Board-certified providers can renew most prescriptions via telehealth, including medications for blood pressure, diabetes, thyroid, and more.',
    },
    {
      '@type': 'MedicalTherapy',
      name: 'Virtual Urgent Care',
      description:
        'Same-day telehealth appointments for non-emergency sick visits: sinus infections, UTIs, cold and flu, allergies, pink eye, and minor skin conditions.',
    },
    {
      '@type': 'MedicalTherapy',
      name: 'Telehealth Weight Loss Consultations',
      description:
        'Follow-up visits for GLP-1 and medical weight loss programs available via telehealth across Florida.',
    },
  ],
  areaServed: {
    '@type': 'State',
    name: 'Florida',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What conditions can be treated via telehealth in Florida?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Telehealth is ideal for cold and flu symptoms, UTIs, sinus infections, allergies, pink eye, prescription refills, chronic condition follow-ups (diabetes, hypertension, thyroid), mental health check-ins, lab result reviews, weight loss program visits, hormone therapy monitoring, skin rashes, and work or school excuse documentation. Emergencies and conditions requiring physical examination must be seen in person.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is telehealth covered by insurance in Florida?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Most major insurance plans now cover telehealth visits at the same rate as in-person visits. WeCare Wellness Clinic accepts Aetna, United Healthcare, Medicare, Blue Cross Blue Shield, and MultiPlan for telehealth. Coverage expanded significantly after 2020, including permanent Medicare telehealth benefits. Uninsured patients are also welcome — ask about our self-pay rates.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to download an app for a telehealth visit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No app download is required. Our telehealth platform runs directly in your web browser on any smartphone, tablet, or computer with a camera and microphone. You will receive a secure link via email or text before your appointment — just click it to join.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get a prescription through a telehealth visit in Florida?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our board-certified providers can prescribe most medications through telehealth, including antibiotics, blood pressure medications, diabetes medications, thyroid medications, GLP-1 weight loss injections, birth control, and more. Controlled substances such as opioids and certain stimulants are generally not prescribed via telehealth per federal regulations.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I prepare for a telehealth visit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Find a quiet, private space with good lighting. Have your current medication list and any recent lab results or medical records handy. Ensure your device camera and microphone are working. Log in a few minutes early to test your connection. Our care team will send a reminder with full instructions before your appointment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use telehealth as a new patient at WeCare Wellness Clinic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. New patients are welcome to start with a telehealth visit for a meet-and-greet or health history review. Your provider will determine during the visit whether your needs can be fully addressed virtually or whether an in-person visit is recommended for your specific situation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is WeCare Wellness Clinic telehealth available throughout all of Florida?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Florida telehealth law allows our licensed providers to treat any Florida resident via telehealth, regardless of where in the state you live. Whether you are in Jacksonville, Orlando, Miami, Tampa, or a rural community, you can see a WeCare provider without traveling to our Brandon office.',
      },
    },
    {
      '@type': 'Question',
      name: 'How soon can I get a telehealth appointment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Same-day telehealth appointments are available when slots are open. You can book online at any time through our patient portal. For urgent needs during business hours (Monday–Friday 9AM–6PM, Saturday 9AM–1PM), call us at (813) 438-5220 and we will do our best to accommodate you the same day.',
      },
    },
    {
      '@type': 'Question',
      name: 'What technology do I need for a telehealth visit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Any smartphone, tablet, laptop, or desktop computer with a working camera and microphone will work. You need a stable internet or cellular connection — 4G LTE or higher is sufficient. No special software or app is needed. Google Chrome or Safari browsers are recommended. If you have trouble connecting, our team can assist over the phone.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are telehealth visits private and HIPAA compliant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. All video visits at WeCare Wellness Clinic are conducted over a HIPAA-compliant, end-to-end encrypted platform. Your visit and medical information are fully protected. We recommend conducting your visit from a private location so you can speak freely with your provider.',
      },
    },
  ],
};

const breadcrumbSchema = {
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
      name: 'Services',
      item: 'https://www.wecarewellnessclinic.com/services',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Telehealth',
      item: 'https://www.wecarewellnessclinic.com/telehealth',
    },
  ],
};

/* ─── Page Data ────────────────────────────────────────────────────── */

const BENEFITS = [
  {
    icon: '📱',
    title: 'Same-day appointments',
    desc: 'No waiting rooms, no long drives. Book a slot online and see a provider today from your phone, tablet, or computer — often within hours.',
  },
  {
    icon: '🏠',
    title: 'Care from anywhere in Florida',
    desc: 'Our telehealth service is available to all Florida residents — from Jacksonville to Key West, Tampa to Orlando. Distance is no barrier to quality care.',
  },
  {
    icon: '💊',
    title: 'Prescription management',
    desc: 'Refills, new prescriptions, and medication adjustments handled during your video visit. Prescriptions are sent directly to your preferred pharmacy.',
  },
  {
    icon: '🔄',
    title: 'Chronic condition follow-ups',
    desc: 'Manage diabetes, hypertension, thyroid disorders, and other ongoing conditions from home. Skip the office trip for routine monitoring visits.',
  },
  {
    icon: '🧠',
    title: 'Mental health check-ins',
    desc: 'Brief mental health screenings, counseling conversations, and medication management for anxiety, depression, and stress — from your private space.',
  },
  {
    icon: '📋',
    title: 'Lab result reviews',
    desc: 'Review blood work and diagnostic results with your provider over video. Understand what your numbers mean and get a clear care plan.',
  },
  {
    icon: '⚖️',
    title: 'Weight loss program visits',
    desc: 'GLP-1 and medical weight loss follow-ups are available via telehealth. Stay on track with your Semaglutide program without driving to the clinic.',
  },
  {
    icon: '🔒',
    title: 'Secure and HIPAA compliant',
    desc: 'All video visits are end-to-end encrypted and fully HIPAA compliant. Your health information stays private — just find a quiet spot and connect.',
  },
];

const TREATABLE_CONDITIONS = {
  'Sick Visits & Infections': [
    'Sinus infections and sinusitis',
    'UTIs (urinary tract infections)',
    'Cold, flu, and COVID-19 symptoms',
    'Strep throat (symptom assessment)',
    'Pink eye (conjunctivitis)',
    'Ear infections (outer ear)',
    'Allergies and seasonal allergy flare-ups',
    'Mild bronchitis and upper respiratory infections',
  ],
  'Chronic Condition Management': [
    'Diabetes — A1c reviews and medication adjustments',
    'Hypertension (high blood pressure) monitoring',
    'Thyroid disorders (hypothyroidism, hyperthyroidism)',
    'High cholesterol — labs review and medication',
    'Asthma management and inhaler prescriptions',
    'GERD and acid reflux management',
    'Chronic migraines and headache management',
    'Obesity and metabolic health monitoring',
  ],
  'Mental & Behavioral Health': [
    'Anxiety screening and medication management',
    'Depression check-ins and medication follow-ups',
    'Stress management counseling',
    'Lifestyle and sleep hygiene counseling',
    'Nutrition and weight-related behavioral support',
  ],
  'Prescriptions & Medication Management': [
    'Prescription refills (most non-controlled medications)',
    'New prescriptions after symptom review',
    'GLP-1 / Semaglutide weight loss medications',
    'Hormone replacement therapy (HRT) monitoring',
    'Birth control prescriptions',
    'Blood pressure, thyroid, and diabetes medications',
  ],
  'Preventive & Lifestyle Care': [
    'Annual wellness consultation and health review',
    'Lab result review and interpretation',
    'Nutrition and dietary counseling',
    'Weight management and BMI discussion',
    'School and work excuse documentation',
    'Referral requests and care coordination',
    'New patient health history review',
  ],
  'Specialty Program Follow-Ups': [
    'GLP-1 / Medical weight loss program check-ins',
    'Hormone therapy monitoring visits',
    'Men\'s health — testosterone therapy follow-ups',
    'Women\'s health — routine medication management',
    'HIV PrEP follow-up consultations',
    'IV hydration program assessments',
  ],
};

const TECH_REQUIREMENTS = [
  {
    device: 'Smartphone',
    icon: '📱',
    desc: 'iPhone or Android — any model from the past 5 years. Use Safari (iPhone) or Chrome (Android) for the best experience.',
  },
  {
    device: 'Tablet',
    icon: '💻',
    desc: 'iPad, Android tablet, or Surface. Larger screen makes it easy to see your provider clearly. Any modern browser works.',
  },
  {
    device: 'Laptop or Desktop',
    icon: '🖥️',
    desc: 'Windows or Mac computer with a webcam and microphone. Chrome or Safari recommended. No software to install.',
  },
];

const PROCESS = [
  {
    num: 1,
    title: 'Book your video visit online',
    desc: 'Go to our online booking page, select "Telehealth" as your visit type, and choose an available time slot. Same-day appointments are often available. New patients are welcome.',
  },
  {
    num: 2,
    title: 'Receive your secure visit link',
    desc: 'Before your appointment, you will receive a HIPAA-compliant video link via email or text message. No app download needed — it opens in your browser.',
  },
  {
    num: 3,
    title: 'Complete a brief intake form',
    desc: 'A short digital intake form collects your symptoms, current medications, and reason for visit. This helps your provider review your information before the call.',
  },
  {
    num: 4,
    title: 'Connect with your provider',
    desc: 'Click your link at appointment time to join your video visit. Your board-certified provider will review your history, assess your symptoms, and develop your care plan — just like an in-person visit.',
  },
  {
    num: 5,
    title: 'Receive your care plan instantly',
    desc: 'Prescriptions are sent to your pharmacy electronically. Referrals, lab orders, and follow-up instructions are provided before the visit ends. You are done — no waiting, no checkout line.',
  },
];

const LIMITATIONS = [
  {
    icon: '🩺',
    title: 'Physical examinations',
    desc: 'Conditions that require hands-on assessment — listening to heart or lung sounds, abdominal palpation, wound inspection — need an in-person visit.',
  },
  {
    icon: '🧪',
    title: 'In-office lab draws',
    desc: 'Bloodwork, urine cultures, and other lab tests must be performed in person at our Brandon clinic or at a partner lab. Your provider can order labs during a telehealth visit.',
  },
  {
    icon: '💉',
    title: 'Controlled substances',
    desc: 'Federal law generally prohibits prescribing Schedule II–IV controlled substances via telehealth without a prior in-person relationship. An office visit may be required.',
  },
  {
    icon: '🚨',
    title: 'Medical emergencies',
    desc: 'Chest pain, difficulty breathing, stroke symptoms, severe injuries, or any life-threatening condition — call 911 or go to your nearest emergency room immediately.',
  },
];

const FAQS = [
  {
    q: 'What conditions can be treated via telehealth in Florida?',
    a: 'Telehealth works well for a wide range of common issues: cold and flu, UTIs, sinus infections, pink eye, allergies, prescription refills, chronic condition check-ins (diabetes, hypertension, thyroid), mental health screenings, lab result reviews, weight loss program visits, and hormone therapy monitoring. Conditions requiring physical examination or emergency care need an in-person visit. Our providers will tell you if a telehealth visit is not appropriate for your needs.',
  },
  {
    q: 'Is telehealth covered by my insurance?',
    a: 'Most likely, yes. Telehealth coverage expanded significantly after 2020, and major insurers now treat video visits on par with in-person visits. WeCare Wellness Clinic accepts Aetna, United Healthcare, Medicare, Blue Cross Blue Shield, and MultiPlan for telehealth. Medicare permanently extended its telehealth benefits for primary care. If you are uninsured, we offer transparent self-pay rates — ask our team when you book.',
  },
  {
    q: 'Do I need to download a special app?',
    a: 'No app is required. Our telehealth platform runs entirely in your web browser — Chrome or Safari on any smartphone, tablet, laptop, or desktop computer. You will receive a secure video link before your appointment. Just click it at your appointment time and you will be connected to your provider. If you have any trouble, our front desk can walk you through it over the phone.',
  },
  {
    q: 'Can I get a prescription through a telehealth visit?',
    a: 'Yes. Our board-certified providers can prescribe most medications electronically during your video visit, including antibiotics, blood pressure drugs, diabetes medications, thyroid medications, GLP-1 weight loss injections (Semaglutide), birth control, and more. Prescriptions are sent directly to your pharmacy. Note that controlled substances such as opioids, benzodiazepines, and certain stimulants are generally restricted under federal telehealth prescribing rules.',
  },
  {
    q: 'I have never done a telehealth visit before — is it complicated?',
    a: 'Not at all. If you have ever made a video call to a family member, you already know how to do this. You book online, receive a link, click it at your appointment time, and you are face-to-face with your provider. No technical knowledge is needed. Our team is happy to help if you run into any issues. Many patients say their first telehealth visit was easier than they expected.',
  },
  {
    q: 'Can I be a new patient and start with a telehealth visit?',
    a: 'Yes. New patients are welcome to schedule a telehealth visit for a meet-and-greet or health history review. Your provider will get to know your medical background, current medications, and health goals during the visit. Some new patient needs may require an initial in-person visit — your provider will let you know if that applies to your situation.',
  },
  {
    q: 'Is WeCare Wellness Clinic telehealth available outside of Brandon?',
    a: 'Yes — our telehealth service is available to all Florida residents, statewide. Florida telehealth law allows our licensed providers to treat any patient physically located in Florida during the visit. Whether you live in Tampa, Orlando, Jacksonville, Miami, or a small town, you can see a WeCare provider without making the drive to Brandon.',
  },
  {
    q: 'How quickly can I get a telehealth appointment?',
    a: 'Same-day telehealth appointments are available when slots are open, which is common. You can book online anytime through our patient portal. For urgent needs, call us at (813) 438-5220 during business hours (Mon–Thu 9AM–5PM, Fri 9AM–6PM, Sat 9AM–1PM) and we will do our best to fit you in the same day. Evening and weekend slots are more limited, so booking early in the day gives you the best availability.',
  },
  {
    q: 'What technology do I need for a telehealth visit?',
    a: 'Any device with a camera and microphone works — smartphone, tablet, laptop, or desktop. You need a stable internet or cellular connection; 4G LTE or standard home broadband is more than sufficient. Recommended browsers are Google Chrome or Apple Safari. No downloads or installs are needed. If you prefer, you can do an audio-only visit in certain situations — ask when you book.',
  },
  {
    q: 'Are telehealth visits private and confidential?',
    a: 'Absolutely. All WeCare telehealth visits are conducted over a fully HIPAA-compliant, end-to-end encrypted video platform. Your medical information is protected the same as it would be in our office. We recommend finding a quiet, private space for your visit so you can speak openly with your provider. No one else has access to your visit recording or notes.',
  },
];

/* ─── Component ────────────────────────────────────────────────────── */

export default function TelehealthPage() {
  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalClinicSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Hero
        headline="See a doctor today — from anywhere in Florida"
        subtext="Board-certified providers available via secure video for primary care, prescription refills, chronic condition management, weight loss, and more. No commute. No waiting room. Same-day appointments available."
        ctaLabel="Book a Video Visit"
        ctaHref="/booking"
        secondaryLabel="Call (813) 438-5220"
        secondaryHref="tel:+18134385220"
        badgeText="Same-day telehealth available"
        variant="gradient"
      />

      {/* Intro */}
      <section className={styles.intro} aria-labelledby="intro-heading">
        <div className="container">
          <div className={styles.introGrid}>
            <div>
              <p className={styles.introLabel}>Telehealth — available statewide across Florida</p>
              <h2 id="intro-heading" className={styles.introHeading}>
                Quality primary care without the commute
              </h2>
              <p className={styles.introBody}>
                WeCare Wellness Clinic's telehealth service connects you with board-certified providers wherever you are in Florida. Whether you cannot make it to our Brandon office, have a busy schedule, or simply prefer the convenience of a video visit, you get the same expert care as an in-person appointment — for most conditions.
              </p>
              <p className={styles.introBody}>
                Florida law allows our licensed providers to treat any Florida resident via telehealth. That means patients in Tampa, Orlando, Jacksonville, Miami, and every city in between can access WeCare care without traveling to Brandon. Post-COVID insurance reforms mean most plans — including Medicare — now cover telehealth visits at the same rate as office visits.
              </p>
              <p className={styles.introBody}>
                Available Monday through Saturday, with same-day scheduling when slots are open. All you need is a phone, tablet, or computer with a camera. No app downloads. No waiting rooms. Just care.
              </p>
              <ul className={styles.featuresList} role="list">
                {[
                  'Same-day video appointments — book online anytime',
                  'No app download — works in your browser',
                  'Prescriptions sent electronically to your pharmacy',
                  'Available to all Florida residents, statewide',
                  'HIPAA-compliant, end-to-end encrypted platform',
                  'Most insurance accepted, including Medicare',
                  'New patients welcome for telehealth visits',
                  'Uninsured patients welcome — transparent self-pay rates',
                ].map((f) => (
                  <li key={f} className={styles.featuresListItem}>
                    <span className={styles.checkIcon} aria-hidden="true">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.statsPanel} aria-label="Telehealth at a glance">
              {[
                { value: 'Same day', label: 'Appointment availability when slots open' },
                { value: 'FL-wide', label: 'All Florida residents eligible' },
                { value: 'No app', label: 'Works in any modern web browser' },
                { value: '4.9★', label: 'Average patient satisfaction rating' },
                { value: '5 steps', label: 'From booking to care plan' },
                { value: 'Mon–Sat', label: 'Telehealth hours availability' },
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

      {/* Benefits */}
      <section className={styles.benefitsSection} aria-labelledby="benefits-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">Why patients choose virtual visits</p>
            <h2 id="benefits-heading" className="ds-h2">8 reasons to try telehealth</h2>
            <p className="ds-lede" style={{ marginTop: 'var(--space-2)' }}>
              Telehealth is not just for convenience — it is a fully legitimate, clinically sound way to receive most primary care services, backed by major insurers and embraced by patients across Florida.
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

      {/* What You Can Be Treated For */}
      <section aria-labelledby="conditions-heading" style={{ padding: 'var(--space-16) 0', background: 'var(--surface-subtle, #f8fafc)' }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">Comprehensive telehealth care</p>
            <h2 id="conditions-heading" className="ds-h2">What you can be treated for via telehealth</h2>
            <p className="ds-lede" style={{ marginTop: 'var(--space-2)' }}>
              More conditions can be addressed via telehealth than most people realize. Here is a detailed look at what our board-certified providers can treat during your video visit.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-6)', marginTop: 'var(--space-8)' }}>
            {Object.entries(TREATABLE_CONDITIONS).map(([category, items]) => (
              <div key={category} style={{ background: 'var(--surface-base, #fff)', borderRadius: 'var(--radius-lg, 12px)', padding: 'var(--space-6)', boxShadow: 'var(--shadow-sm)' }}>
                <h3 style={{ fontSize: 'var(--text-base)', fontWeight: '700', color: 'var(--text-primary)', marginBottom: 'var(--space-3)', borderBottom: '2px solid var(--brand-primary, #0ea5e9)', paddingBottom: 'var(--space-2)' }}>
                  {category}
                </h3>
                <ul role="list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {items.map((item) => (
                    <li key={item} className={styles.featuresListItem} style={{ fontSize: 'var(--text-sm)', marginBottom: 'var(--space-1)' }}>
                      <span className={styles.checkIcon} aria-hidden="true">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* What telehealth cannot do */}
          <div style={{ marginTop: 'var(--space-12)', padding: 'var(--space-8)', background: 'var(--surface-warning, #fffbeb)', borderRadius: 'var(--radius-lg, 12px)', border: '1px solid var(--border-warning, #fcd34d)' }}>
            <h3 className="ds-h2" style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-6)', color: 'var(--text-primary)' }}>
              What telehealth <em>cannot</em> replace
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-6)', maxWidth: '65ch' }}>
              We want to set honest expectations. Some situations genuinely require an in-person visit. Our providers will always let you know if you need to come in — your safety comes first.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'var(--space-4)' }}>
              {LIMITATIONS.map((l) => (
                <div key={l.title} style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '1.5rem', flexShrink: 0 }} aria-hidden="true">{l.icon}</span>
                  <div>
                    <strong style={{ display: 'block', fontSize: 'var(--text-sm)', color: 'var(--text-primary)', marginBottom: 'var(--space-1)' }}>{l.title}</strong>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', margin: 0 }}>{l.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Requirements */}
      <section aria-labelledby="tech-heading" style={{ padding: 'var(--space-16) 0' }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">Any device works</p>
            <h2 id="tech-heading" className="ds-h2">Technology requirements — it is simpler than you think</h2>
            <p className="ds-lede" style={{ marginTop: 'var(--space-2)' }}>
              You do not need any special equipment or tech skills. If you can make a video call, you can do a telehealth visit. Our platform works on any device with a camera and an internet connection.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--space-6)', marginTop: 'var(--space-8)' }}>
            {TECH_REQUIREMENTS.map((t) => (
              <div key={t.device} className={styles.benefitCard}>
                <span className={styles.benefitIcon} aria-hidden="true">{t.icon}</span>
                <h3 className={styles.benefitTitle}>{t.device}</h3>
                <p className={styles.benefitDesc}>{t.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 'var(--space-8)', padding: 'var(--space-6)', background: 'var(--surface-subtle, #f8fafc)', borderRadius: 'var(--radius-lg, 12px)', maxWidth: '720px', margin: 'var(--space-8) auto 0' }}>
            <h3 style={{ fontSize: 'var(--text-base)', fontWeight: '700', marginBottom: 'var(--space-3)', color: 'var(--text-primary)' }}>
              Quick tech checklist before your visit
            </h3>
            <ul role="list" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-2)' }}>
              {[
                'Camera and microphone are working',
                'Using Chrome or Safari browser',
                'Wi-Fi, 4G, or better connection',
                'Device battery charged or plugged in',
                'Found a private, quiet location',
                'Medication list ready to share',
              ].map((item) => (
                <li key={item} className={styles.featuresListItem}>
                  <span className={styles.checkIcon} aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How Your Visit Works */}
      <section className={styles.processSection} aria-labelledby="process-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">Start to finish in minutes</p>
            <h2 id="process-heading" className="ds-h2">How your telehealth visit works — 5 simple steps</h2>
            <p className="ds-lede" style={{ marginTop: 'var(--space-2)' }}>
              From booking to receiving your care plan, the entire process is designed to be fast, intuitive, and stress-free — even if this is your first telehealth visit.
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

      {/* Insurance Coverage */}
      <section aria-labelledby="insurance-heading" style={{ padding: 'var(--space-16) 0', background: 'var(--surface-subtle, #f8fafc)' }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">Coverage you can count on</p>
            <h2 id="insurance-heading" className="ds-h2">Insurance coverage for telehealth</h2>
            <p className="ds-lede" style={{ marginTop: 'var(--space-2)' }}>
              Telehealth coverage has never been better. Following permanent policy changes after 2020, most major insurers — including Medicare — now cover virtual visits at the same rate as in-person appointments.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-6)', marginTop: 'var(--space-8)' }}>
            {[
              {
                name: 'Aetna',
                detail: 'Covers telehealth primary care visits at standard copay rates. Most Aetna plans treat video visits identically to office visits for eligible services.',
              },
              {
                name: 'United Healthcare',
                detail: 'UHC provides broad telehealth coverage across individual, employer, and Medicare Advantage plans. Virtual visits for primary care and chronic care are generally covered.',
              },
              {
                name: 'Medicare',
                detail: 'Medicare permanently expanded telehealth benefits. Part B covers telehealth primary care visits from your home, with standard Part B cost-sharing (20% after deductible).',
              },
              {
                name: 'Blue Cross Blue Shield',
                detail: 'BCBS plans across Florida cover telehealth for a wide range of primary care, preventive, and chronic condition services at in-network rates.',
              },
              {
                name: 'MultiPlan',
                detail: 'MultiPlan network coverage for telehealth applies to many employer-sponsored and association health plans. Our team will verify your benefits before your visit.',
              },
              {
                name: 'Uninsured / Self-Pay',
                detail: 'No insurance? No problem. We offer transparent, affordable self-pay rates for telehealth visits. Ask our team about current rates when you book — no surprises.',
              },
            ].map((ins) => (
              <div key={ins.name} style={{ background: 'var(--surface-base, #fff)', borderRadius: 'var(--radius-lg, 12px)', padding: 'var(--space-5)', boxShadow: 'var(--shadow-sm)', borderLeft: '4px solid var(--brand-primary, #0ea5e9)' }}>
                <h3 style={{ fontSize: 'var(--text-base)', fontWeight: '700', color: 'var(--text-primary)', marginBottom: 'var(--space-2)' }}>{ins.name}</h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6' }}>{ins.detail}</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: 'var(--space-8)', color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', maxWidth: '60ch', margin: 'var(--space-8) auto 0' }}>
            Insurance coverage varies by plan and service. Our team will verify your benefits before your visit and let you know your estimated out-of-pocket cost. Call <a href="tel:+18134385220" style={{ color: 'var(--brand-primary)', fontWeight: '600' }}>(813) 438-5220</a> with any questions.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection} aria-labelledby="faq-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">Everything you need to know</p>
            <h2 id="faq-heading" className="ds-h2">Telehealth frequently asked questions</h2>
            <p className="ds-lede" style={{ marginTop: 'var(--space-2)' }}>
              New to virtual visits? Here are honest, detailed answers to the questions we hear most often from patients considering telehealth for the first time.
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

      {/* Insurance strip */}
      <div className={styles.insuranceStrip} role="complementary" aria-label="Insurance accepted for telehealth">
        <p className={styles.insuranceText}>Insurance accepted for telehealth visits</p>
        <p className={styles.insuranceNames}>
          Aetna · United Healthcare · Medicare · Blue Cross Blue Shield · MultiPlan · Uninsured welcome
        </p>
      </div>

      <RelatedServices currentSlug="telehealth" />

      <BookingCTA
        heading="Book your telehealth visit today"
        subtext="Same-day video appointments available statewide across Florida. All you need is a phone or computer. Most insurance accepted."
      />
    </>
  );
}
