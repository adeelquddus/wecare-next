import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import BookingCTA from '@/components/sections/BookingCTA';
import RelatedServices from '@/components/sections/RelatedServices';
import {
  LightningIcon,
  ChartIcon,
  HeartIcon,
  MicroscopeIcon,
  StethoscopeIcon,
  ClipboardIcon,
  ScaleIcon,
  BrainIcon,
  AlertIcon,
} from '@/components/ui/AnimatedIcons';
import type { IconProps } from '@/components/ui/AnimatedIcons';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: "Men's Health Brandon FL — TRT, Low Testosterone & ED Treatment | WeCare Wellness",
  description:
    "Men's health clinic in Brandon, FL. Testosterone replacement therapy, low T treatment, ED evaluation, prostate screening, annual physicals & more. Insurance accepted. Same-week appointments.",
  keywords: [
    "men's health Brandon FL",
    "testosterone therapy Brandon FL",
    "low testosterone treatment Brandon FL",
    "TRT clinic Brandon FL",
    "erectile dysfunction Brandon FL",
    "men's health doctor near me Brandon FL",
    "testosterone replacement therapy Brandon",
    "low T doctor Brandon FL",
    "men's annual physical Brandon FL",
    "prostate screening Brandon FL",
    "men's health clinic near me",
    "hormone therapy for men Brandon FL",
  ],
  alternates: { canonical: 'https://www.wecarewellnessclinic.com/mens-health' },
  openGraph: {
    title: "Men's Health — TRT, Low Testosterone & ED Treatment | WeCare Wellness Clinic Brandon FL",
    description:
      "Insurance-accepted men's health care in Brandon, FL. Testosterone replacement therapy, ED evaluation, prostate health, annual physicals & more from a board-certified physician.",
    url: 'https://www.wecarewellnessclinic.com/mens-health',
    type: 'website',
  },
};

/* ─── JSON-LD Schemas ───────────────────────────────────────────────── */

const medicalClinicSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  name: 'WeCare Wellness Clinic — Men\'s Health',
  url: 'https://www.wecarewellnessclinic.com/mens-health',
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
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '09:00', closes: '17:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Friday'], opens: '09:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '09:00', closes: '13:00' },
  ],
  medicalSpecialty: ['Primary Care', 'Men\'s Health', 'Endocrinology', 'Preventive Care'],
  availableService: [
    { '@type': 'MedicalTherapy', name: 'Testosterone Replacement Therapy (TRT)' },
    { '@type': 'MedicalTherapy', name: 'Erectile Dysfunction Treatment' },
    { '@type': 'MedicalTest', name: 'PSA Prostate Screening' },
    { '@type': 'MedicalTest', name: 'Testosterone Panel' },
    { '@type': 'MedicalTest', name: 'Annual Men\'s Health Exam' },
    { '@type': 'MedicalTherapy', name: 'Weight Management for Men' },
    { '@type': 'MedicalTest', name: 'STI / STD Testing' },
    { '@type': 'MedicalTherapy', name: 'HIV PrEP' },
  ],
  paymentAccepted: 'Cash, Credit Card, Insurance',
  currenciesAccepted: 'USD',
  priceRange: 'Copay applies; uninsured rates available',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I know if I have low testosterone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Common symptoms of low testosterone include persistent fatigue, reduced sex drive, difficulty maintaining erections, unexplained weight gain, loss of muscle mass, brain fog, depression, and irritability. Many men experience these gradually and write them off as normal aging. A simple blood test measuring total and free testosterone levels — performed here at WeCare — gives you a definitive answer so you can take action.',
      },
    },
    {
      '@type': 'Question',
      name: 'What forms of testosterone replacement therapy do you offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer intramuscular injections (the most cost-effective and precise option), topical gels or creams applied daily, and can discuss pellet therapy. Your provider will recommend the best delivery method based on your lifestyle, insurance coverage, preference, and clinical picture. All TRT at WeCare is physician-supervised with regular lab monitoring every 3–6 months.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is testosterone replacement therapy safe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TRT is safe when properly supervised by a qualified physician. Risks — including changes to red blood cell count, fertility impact, or fluid retention — are manageable with regular monitoring. At WeCare, we check your CBC, PSA, estradiol, and testosterone levels on a scheduled basis to keep you in the optimal range and catch any changes early. We do not prescribe TRT without appropriate labs and follow-up.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you treat erectile dysfunction at WeCare?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We start with a thorough evaluation to identify underlying causes — low testosterone, cardiovascular disease, diabetes, anxiety, or medication side effects are all common contributors. Treatment may include PDE5 inhibitors (sildenafil, tadalafil), hormone optimization, lifestyle modifications, or a referral to urology for cases requiring further workup. ED is a medical issue, not a personal failure, and we treat it clinically and without judgment.',
      },
    },
    {
      '@type': 'Question',
      name: 'At what age should men start prostate cancer screening?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Current guidelines recommend discussing PSA screening with your doctor starting at age 50 for average-risk men. However, if you are African American or have a first-degree relative diagnosed with prostate cancer before age 65, that conversation should happen at age 40–45. We individualize this recommendation based on your personal and family history rather than applying a one-size-fits-all rule.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you accept insurance for men\'s health and TRT visits?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — we accept Aetna, United Healthcare, Medicare, Blue Cross Blue Shield, and MultiPlan. Annual preventive physicals are typically covered at 100% under most plans. TRT and lab work coverage vary by plan, but many patients are surprised by how much their insurance covers. We also see uninsured patients at transparent self-pay rates. Unlike some men\'s health clinics in Brandon, we do not require cash-only payment.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is included in a men\'s annual health exam at WeCare?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A comprehensive men\'s annual exam at WeCare includes a full physical, blood pressure and BMI assessment, fasting lipid panel (cholesterol), hemoglobin A1C (diabetes screening), complete blood count (CBC), comprehensive metabolic panel, testosterone level, PSA if age-appropriate, STI screening if indicated, and a detailed conversation about your health goals, mental health, and any concerns you\'ve been putting off.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you help with mental health issues like depression and anxiety in men?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Men are significantly under-diagnosed for depression and anxiety — often because symptoms present differently (irritability, withdrawal, risky behavior) and because men are less likely to seek help. Our providers screen for mental health conditions during primary care visits using validated tools, and we can start treatment, adjust existing medications, or coordinate with mental health specialists when appropriate.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer weight management for men, including GLP-1 medications?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We offer medically supervised weight management that combines GLP-1 receptor agonists (semaglutide / Ozempic, tirzepatide / Mounjaro) with personalized nutrition guidance and lifestyle coaching. For men, weight loss also directly improves testosterone levels, cardiovascular health, and sexual function — making it one of the highest-impact interventions we offer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I discuss hair loss at my men\'s health appointment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Male-pattern hair loss (androgenetic alopecia) is very common and treatable. We can discuss and prescribe finasteride (oral) or minoxidil as first-line FDA-approved options. We will also review your testosterone and DHT levels to ensure any treatment plan is appropriate given your hormonal health, especially if you are on or considering TRT.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.wecarewellnessclinic.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.wecarewellnessclinic.com/services' },
    { '@type': 'ListItem', position: 3, name: "Men's Health", item: 'https://www.wecarewellnessclinic.com/mens-health' },
  ],
};

/* ─── Page Data ─────────────────────────────────────────────────────── */

const BENEFITS: Array<{ Icon: React.FC<IconProps>; title: string; desc: string }> = [
  {
    Icon: LightningIcon,
    title: 'Testosterone Replacement Therapy (TRT)',
    desc: 'Physician-supervised TRT using injections, gels, or pellets to restore testosterone to healthy levels. We run a full hormone panel before starting and monitor your labs every 3–6 months. No cookie-cutter protocols — your dosing is tailored to your symptoms and bloodwork.',
  },
  {
    Icon: ChartIcon,
    title: 'Low Testosterone Evaluation',
    desc: 'Comprehensive low-T workup including total testosterone, free testosterone, LH, FSH, and estradiol. We identify root causes — not just low numbers — whether it\'s primary hypogonadism, secondary causes, or age-related decline. Results reviewed with you in plain language.',
  },
  {
    Icon: HeartIcon,
    title: 'Erectile Dysfunction Treatment',
    desc: 'Discreet, evidence-based ED evaluation and treatment. We investigate cardiovascular, hormonal, and psychological contributors and offer PDE5 inhibitors (sildenafil, tadalafil), hormone optimization, and urology referrals when needed. ED is a health issue — we treat it that way.',
  },
  {
    Icon: MicroscopeIcon,
    title: 'Prostate Health & PSA Screening',
    desc: 'Age-appropriate PSA screening with individualized risk assessment. We follow current USPSTF and ACS guidelines and have an honest conversation about the benefits and limitations of testing. High-risk patients (African American men, family history) start discussion at age 40.',
  },
  {
    Icon: StethoscopeIcon,
    title: 'Cardiovascular Risk Assessment',
    desc: 'Men develop heart disease at nearly twice the rate of women before age 65. We assess your full cardiovascular risk profile — lipids, blood pressure, blood sugar, family history, smoking, and BMI — and build a prevention plan before a problem develops.',
  },
  {
    Icon: ClipboardIcon,
    title: 'Comprehensive Annual Physicals',
    desc: 'A thorough annual exam covering all the labs men actually need: testosterone panel, PSA, lipid panel, A1C, CBC, and metabolic panel. Most preventive physicals are covered 100% by insurance. This is your reset point — come in once a year and stay ahead of everything.',
  },
  {
    Icon: ScaleIcon,
    title: 'Weight Management for Men',
    desc: 'Medical weight management combining GLP-1 medications (semaglutide, tirzepatide) with personalized lifestyle guidance. For men, losing excess body fat directly raises testosterone, improves ED, and cuts cardiovascular risk — making weight management one of the most impactful things you can do.',
  },
  {
    Icon: BrainIcon,
    title: "Men's Mental Health",
    desc: "Men are under-diagnosed for depression and anxiety because symptoms show up differently — as irritability, withdrawal, or risky behavior rather than sadness. Our providers screen for mental health conditions at primary care visits and offer treatment or coordination with specialists without stigma.",
  },
];

const LOW_T_SYMPTOMS = [
  'Persistent fatigue or lack of energy even after rest',
  'Reduced sex drive or libido',
  'Difficulty achieving or maintaining erections',
  'Loss of muscle mass despite working out',
  'Unexplained weight gain, especially around the midsection',
  'Brain fog, difficulty concentrating, or memory issues',
  'Depression, irritability, or mood swings',
  'Decreased bone density or joint aches',
  'Reduced body or facial hair',
  'Sleep disturbances or insomnia',
  'Hot flashes or night sweats (less common, but real)',
  'Decreased sense of well-being or motivation',
];

const CONDITIONS = [
  { name: 'Hypogonadism (Low Testosterone)', desc: 'Primary or secondary — we identify the cause and treat it appropriately.' },
  { name: 'Erectile Dysfunction (ED)', desc: 'Evaluation, labs, and evidence-based treatment — with or without TRT.' },
  { name: 'Benign Prostatic Hyperplasia (BPH)', desc: 'Management of urinary symptoms and coordination with urology.' },
  { name: 'Hypertension', desc: 'Diagnosis, medication management, and lifestyle interventions.' },
  { name: 'Type 2 Diabetes & Prediabetes', desc: 'Screening, early intervention, and ongoing management.' },
  { name: 'High Cholesterol (Hyperlipidemia)', desc: 'Statin therapy, dietary counseling, and monitoring.' },
  { name: 'Obesity & Metabolic Syndrome', desc: 'GLP-1 medications, weight loss planning, and metabolic labs.' },
  { name: 'Depression & Anxiety', desc: 'Screening and treatment in a primary care setting, referrals when needed.' },
  { name: 'Male-Pattern Hair Loss', desc: 'Finasteride and minoxidil discussion — coordinated with hormone levels.' },
  { name: 'STI / STD Screening & Treatment', desc: 'Confidential testing and treatment for all common STIs.' },
  { name: 'HIV PrEP (Pre-Exposure Prophylaxis)', desc: 'Prescriptions and quarterly lab monitoring for eligible patients.' },
  { name: 'Thyroid Disorders', desc: 'TSH, T3/T4 panels, and management of hypo/hyperthyroidism.' },
  { name: 'Sleep Apnea Screening', desc: 'Referral for sleep study when clinical picture warrants it.' },
  { name: 'Testosterone & Cardiovascular Monitoring on TRT', desc: 'Hematocrit, PSA, and lipid tracking during therapy.' },
  { name: 'Hormone Imbalance Over 40', desc: 'Estradiol, cortisol, DHEA, and testosterone in aging men.' },
  { name: 'Preventive Cancer Screenings', desc: 'Colorectal, skin, and prostate — age and risk-appropriate protocols.' },
];

const PROCESS = [
  {
    num: 1,
    title: 'Book your visit',
    desc: 'Schedule online in minutes — new patient physicals, TRT follow-ups, or specific concern appointments are all available. Same-week slots are typically open.',
  },
  {
    num: 2,
    title: 'Labs & pre-visit assessment',
    desc: 'We can order labs before your visit so results are ready when you arrive. For TRT workups, we draw testosterone, CBC, PSA, and metabolic panels upfront.',
  },
  {
    num: 3,
    title: 'Sit down with your provider',
    desc: 'A board-certified physician reviews your labs, listens to your concerns, and builds a care plan around your goals — not a one-size-fits-all protocol.',
  },
  {
    num: 4,
    title: 'Treatment, prescriptions & follow-up',
    desc: 'Walk out with your care plan. TRT patients get a clear monitoring schedule. Telehealth follow-ups available so you don\'t have to come in for every check-in.',
  },
];

const FAQS = [
  {
    q: 'How do I know if I have low testosterone?',
    a: 'Common symptoms include persistent fatigue, reduced sex drive, difficulty with erections, unexplained weight gain, loss of muscle mass, brain fog, depression, and irritability. Many men attribute these to stress or aging and never get checked. A simple blood test measuring total and free testosterone gives you a definitive answer — and if levels are low, there are real treatment options. Don\'t guess. Get tested.',
  },
  {
    q: 'What forms of testosterone replacement therapy do you offer?',
    a: 'We offer intramuscular injections (the most cost-effective and precise option), topical gels and creams applied daily, and can discuss pellet therapy. Your provider will recommend the best delivery method based on your lifestyle, insurance coverage, and clinical picture. All TRT at WeCare is physician-supervised with mandatory lab monitoring every 3–6 months to ensure safety and effectiveness.',
  },
  {
    q: 'Is testosterone replacement therapy safe?',
    a: 'TRT is safe when properly supervised by a qualified physician. Potential risks — such as elevated red blood cell count (polycythemia), effects on fertility, or fluid retention — are manageable with regular monitoring. At WeCare, we track your hematocrit, PSA, estradiol, and testosterone levels on a defined schedule and adjust dosing as needed. We do not prescribe TRT without appropriate labs and follow-up — no exceptions.',
  },
  {
    q: 'Do you treat erectile dysfunction at WeCare?',
    a: 'Yes. We start with a thorough evaluation to identify the underlying cause — low testosterone, cardiovascular disease, diabetes, medication side effects, or psychological factors are all common contributors. Treatment may include PDE5 inhibitors (sildenafil/Viagra, tadalafil/Cialis), hormone optimization, lifestyle changes, or a urology referral. ED is a medical condition, and we treat it with the same clinical seriousness as any other diagnosis.',
  },
  {
    q: 'At what age should men start prostate cancer screening?',
    a: 'We recommend discussing PSA screening at age 50 for average-risk men. If you are African American or have a first-degree relative diagnosed with prostate cancer before age 65, that conversation should happen at age 40–45. PSA screening is a shared decision — we explain what the test does and does not tell us, and you decide with full information. There is no one-size-fits-all answer here.',
  },
  {
    q: 'Do you accept insurance for men\'s health and TRT visits?',
    a: 'Yes — we accept Aetna, United Healthcare, Medicare, Blue Cross Blue Shield, and MultiPlan. Annual preventive physicals are typically covered at 100% under most plans. Lab work and TRT coverage vary by plan. We also see uninsured patients at transparent self-pay rates. Unlike some men\'s health clinics in Brandon that charge cash-only membership fees, we work with your insurance so your care is actually affordable.',
  },
  {
    q: 'What is included in a men\'s annual health exam?',
    a: 'Our comprehensive men\'s annual exam includes a full physical, blood pressure and BMI review, fasting lipid panel, hemoglobin A1C (diabetes screening), complete blood count, comprehensive metabolic panel, testosterone level, age-appropriate PSA discussion, and STI screening if clinically indicated. We also talk about your mental health, sleep, and any symptoms you\'ve been putting off — because the annual exam is the right time to get ahead of everything.',
  },
  {
    q: 'Can you help with depression and anxiety?',
    a: 'Absolutely. Men are significantly under-diagnosed for depression and anxiety — often because symptoms look different: irritability, social withdrawal, increased alcohol use, or risk-taking rather than visible sadness. Our providers use validated screening tools at primary care visits. We can start medications, manage existing prescriptions, and refer to mental health specialists when appropriate. Asking for help is the strongest thing you can do.',
  },
  {
    q: 'Do you offer weight management including GLP-1 medications?',
    a: 'Yes. We offer medically supervised weight management combining GLP-1 receptor agonists (semaglutide/Ozempic, tirzepatide/Mounjaro) with personalized nutrition and lifestyle guidance. For men, meaningful weight loss has a direct positive effect on testosterone levels, sexual function, blood pressure, and cardiovascular risk — making it one of the single highest-impact interventions available. We treat weight medically, not as a willpower problem.',
  },
  {
    q: 'Can I discuss hair loss at my appointment?',
    a: 'Yes. Male-pattern hair loss is common and treatable. We can discuss and prescribe finasteride (oral, FDA-approved) and minoxidil. If you are on or considering TRT, we review your DHT levels and ensure any hair loss treatment plan is compatible with your hormone therapy. Bring it up — it takes two minutes and we take it seriously.',
  },
];

/* ─── Component ─────────────────────────────────────────────────────── */

export default function MensHealthPage() {
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
        headline="Men's health in Brandon, FL — no excuses, no cash-only clinics"
        subtext="Testosterone replacement therapy, ED treatment, prostate screening, annual physicals & more — from a board-certified physician who accepts your insurance. Same-week appointments available."
        ctaLabel="Book a Visit"
        ctaHref="/booking"
        secondaryLabel="Call (813) 438-5220"
        secondaryHref="tel:+18134385220"
        badgeText="Insurance accepted · New patients welcome"
        variant="gradient"
      />

      {/* Intro */}
      <section className={styles.intro} aria-labelledby="intro-heading">
        <div className="container">
          <div className={styles.introGrid}>
            <div>
              <p className={styles.introLabel}>Men&apos;s health &amp; preventive care in Brandon, FL</p>
              <h2 id="intro-heading" className={styles.introHeading}>
                Most men wait too long. You don&apos;t have to.
              </h2>
              <p className={styles.introBody}>
                Studies consistently show men are less likely to see a doctor, more likely to delay care, and more likely to die preventably as a result. Low testosterone, undiagnosed cardiovascular risk, untreated depression, and ignored ED are not inevitable — they&apos;re treatable. WeCare Wellness Clinic is a full-service primary care clinic in Brandon, FL that takes men&apos;s health seriously and makes it straightforward to get the care you need.
              </p>
              <p className={styles.introBody}>
                Unlike men&apos;s health specialty clinics that see you only for TRT and charge monthly membership fees without accepting insurance, we are a board-certified primary care practice. We address the whole picture — hormones, heart health, mental health, weight, and prevention — under one roof, covered by your insurance.
              </p>
              <ul className={styles.featuresList} role="list">
                {[
                  'Testosterone Replacement Therapy (TRT) — injections, gels, pellets',
                  'Erectile dysfunction evaluation and treatment',
                  'Prostate health and PSA screening',
                  'Annual physicals with full men\'s health labs',
                  'Cardiovascular risk assessment and prevention',
                  'Weight management — GLP-1 medications + coaching',
                  'Mental health screening and treatment',
                  'STI testing and HIV PrEP',
                ].map((f) => (
                  <li key={f} className={styles.featuresListItem}>
                    <span className={styles.checkIcon} aria-hidden="true">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.statsPanel} aria-label="Quick facts about our men's health care">
              {[
                { value: 'Board-certified', label: 'Physician-led care' },
                { value: 'Same week', label: 'New patient availability' },
                { value: 'Insurance', label: 'Aetna, UHC, BCBS, Medicare & more' },
                { value: 'Telehealth', label: 'Follow-ups statewide in FL' },
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

      {/* Benefits / Services */}
      <section className={styles.benefitsSection} aria-labelledby="benefits-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">What we offer</p>
            <h2 id="benefits-heading" className="ds-h2">Men&apos;s health services at WeCare</h2>
            <p className="ds-lede" style={{ marginTop: 'var(--space-2)' }}>
              Comprehensive, insurance-covered men&apos;s healthcare — from testosterone optimization to cardiovascular prevention to mental health.
            </p>
          </div>
          <div className={styles.benefitsGrid} role="list">
            {BENEFITS.map(({ Icon, title, desc }) => (
              <div key={title} className={styles.benefitCard} role="listitem">
                <span className={styles.benefitIcon} aria-hidden="true">
                  <Icon size={32} />
                </span>
                <h3 className={styles.benefitTitle}>{title}</h3>
                <p className={styles.benefitDesc}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Low T Symptoms */}
      <section className={styles.processSection} aria-labelledby="lowt-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">Know the signs</p>
            <h2 id="lowt-heading" className="ds-h2">Signs you might have low testosterone</h2>
            <p className="ds-lede" style={{ marginTop: 'var(--space-2)' }}>
              Low testosterone (hypogonadism) affects roughly 1 in 4 men over 30 — and most of them don&apos;t know it. These symptoms are real, common, and treatable.
            </p>
          </div>
          <div className={styles.benefitsGrid} role="list" aria-label="Low testosterone symptoms">
            {LOW_T_SYMPTOMS.map((symptom) => (
              <div key={symptom} className={styles.benefitCard} role="listitem">
                <span className={styles.benefitIcon} aria-hidden="true">
                  <AlertIcon size={28} />
                </span>
                <p className={styles.benefitDesc}>{symptom}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 'var(--space-6)', textAlign: 'center' }}>
            <p className="ds-lede">
              If you recognize three or more of these symptoms, a testosterone panel is the right next step. A blood draw takes minutes — call <a href="tel:+18134385220" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>(813) 438-5220</a> or book online.
            </p>
          </div>
        </div>
      </section>

      {/* Conditions We Address */}
      <section className={styles.benefitsSection} aria-labelledby="conditions-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">Full-spectrum care</p>
            <h2 id="conditions-heading" className="ds-h2">Conditions we address for men</h2>
            <p className="ds-lede" style={{ marginTop: 'var(--space-2)' }}>
              Men&apos;s health is more than testosterone. We manage the full range of conditions that affect men at every age.
            </p>
          </div>
          <div className={styles.benefitsGrid} role="list">
            {CONDITIONS.map((c) => (
              <div key={c.name} className={styles.benefitCard} role="listitem">
                <h3 className={styles.benefitTitle}>{c.name}</h3>
                <p className={styles.benefitDesc}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why WeCare vs Cash-Only Clinics */}
      <section className={styles.intro} aria-labelledby="advantage-heading">
        <div className="container">
          <div className={styles.introGrid}>
            <div>
              <p className={styles.introLabel}>Why WeCare vs. cash-only men&apos;s health clinics</p>
              <h2 id="advantage-heading" className={styles.introHeading}>
                Insurance accepted. Primary care included. No membership fees.
              </h2>
              <p className={styles.introBody}>
                Brandon has specialty men&apos;s health clinics focused almost exclusively on testosterone and ED — and many require cash or monthly membership fees, do not accept insurance, and don&apos;t offer primary care. If something else is going on — your blood pressure is high, your cholesterol is out of range, or you need a mental health screening — you&apos;re sent elsewhere.
              </p>
              <p className={styles.introBody}>
                At WeCare, you get all of it in one place, covered by your insurance. Our physician manages your testosterone therapy and your blood pressure and your annual physical. You don&apos;t need three separate providers or three separate bills.
              </p>
              <ul className={styles.featuresList} role="list">
                {[
                  'Accepts Aetna, UHC, Medicare, BCBS, MultiPlan — and uninsured',
                  'Board-certified primary care physician',
                  'TRT plus full cardiovascular, metabolic, and mental health management',
                  'Same-week appointments — no long waitlists',
                  'Telehealth follow-ups across all of Florida',
                  'No monthly membership fees or cash-only billing',
                ].map((f) => (
                  <li key={f} className={styles.featuresListItem}>
                    <span className={styles.checkIcon} aria-hidden="true">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.statsPanel} aria-label="WeCare advantage at a glance">
              {[
                { value: '5 insurers', label: 'Major plans accepted' },
                { value: '$0', label: 'Membership fees' },
                { value: '1 provider', label: 'For all your men\'s health needs' },
                { value: 'FL-wide', label: 'Telehealth coverage' },
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

      {/* Process */}
      <section className={styles.processSection} aria-labelledby="process-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">Getting started</p>
            <h2 id="process-heading" className="ds-h2">How a men&apos;s health visit works</h2>
            <p className="ds-lede" style={{ marginTop: 'var(--space-2)' }}>
              Four straightforward steps from booking to treatment — no runaround, no unnecessary visits.
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

      {/* FAQ */}
      <section className={styles.faqSection} aria-labelledby="faq-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">Common questions</p>
            <h2 id="faq-heading" className="ds-h2">Men&apos;s health FAQs</h2>
            <p className="ds-lede" style={{ marginTop: 'var(--space-2)' }}>
              Straight answers to the questions men actually want to ask.
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

      <div className={styles.insuranceStrip} role="complementary" aria-label="Insurance plans accepted">
        <p className={styles.insuranceText}>Insurance accepted</p>
        <p className={styles.insuranceNames}>
          Aetna&nbsp;&middot;&nbsp;United Healthcare&nbsp;&middot;&nbsp;Medicare&nbsp;&middot;&nbsp;Blue Cross Blue Shield&nbsp;&middot;&nbsp;MultiPlan&nbsp;&middot;&nbsp;Uninsured welcome
        </p>
      </div>

      <RelatedServices currentSlug="mens-health" />

      <BookingCTA
        heading="Take the first step — book your men's health visit today"
        subtext="Same-week appointments in Brandon, FL (214 W Brandon Blvd) and telehealth across Florida. Call (813) 438-5220 or book online in under 2 minutes."
      />
    </>
  );
}
