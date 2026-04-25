import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import BookingCTA from '@/components/sections/BookingCTA';
import RelatedServices from '@/components/sections/RelatedServices';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: "Women's Health & Gynecology in Brandon, FL — WeCare Wellness Clinic",
  description:
    "Compassionate women's health care in Brandon, FL. Annual well-woman exams, pap smears, HRT, menopause management, PCOS treatment, birth control & more. Most insurance accepted.",
  keywords: [
    "women's health Brandon FL",
    'gynecology Brandon FL',
    'well-woman exam Brandon FL',
    'OB/GYN Brandon FL',
    'hormone replacement therapy women Brandon FL',
    'PCOS treatment Brandon FL',
    'menopause management Brandon FL',
    'pap smear Brandon FL',
    'birth control Brandon FL',
    'STI testing Brandon FL',
    'perimenopause care Brandon FL',
    'thyroid treatment women Brandon FL',
    'UTI treatment Brandon FL',
    "women's clinic Brandon Florida",
  ],
  alternates: { canonical: 'https://www.wecarewellnessclinic.com/womens-health' },
  openGraph: {
    title: "Women's Health & Gynecology — WeCare Wellness Clinic | Brandon, FL",
    description:
      "Complete gynecological & women's wellness care in Brandon, FL. Annual exams, HRT, menopause management, PCOS, birth control, and more. Same-week appointments available.",
    url: 'https://www.wecarewellnessclinic.com/womens-health',
  },
};

/* ── JSON-LD schemas ──────────────────────────────────────────────────── */

const medicalClinicSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  name: 'WeCare Wellness Clinic — Women\'s Health',
  url: 'https://www.wecarewellnessclinic.com/womens-health',
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
  medicalSpecialty: [
    'Gynecology',
    'ObstetricsAndGynecology',
    'WomensHealth',
    'Endocrinology',
    'PrimaryCare',
  ],
  availableService: [
    { '@type': 'MedicalProcedure', name: 'Well-Woman Annual Exam' },
    { '@type': 'MedicalProcedure', name: 'Pap Smear & Cervical Cancer Screening' },
    { '@type': 'MedicalProcedure', name: 'STI/STD Testing and Treatment' },
    { '@type': 'MedicalProcedure', name: 'Birth Control Counseling and Prescriptions' },
    { '@type': 'MedicalProcedure', name: 'Hormone Replacement Therapy (HRT)' },
    { '@type': 'MedicalProcedure', name: 'Menopause Management' },
    { '@type': 'MedicalProcedure', name: 'PCOS Diagnosis and Management' },
    { '@type': 'MedicalProcedure', name: 'Thyroid Disorder Management' },
    { '@type': 'MedicalProcedure', name: 'Breast Exam and Mammogram Referral' },
    { '@type': 'MedicalProcedure', name: 'UTI Diagnosis and Treatment' },
    { '@type': 'MedicalProcedure', name: 'Pelvic Pain Evaluation' },
    { '@type': 'MedicalProcedure', name: 'Perimenopause Counseling' },
    { '@type': 'MedicalProcedure', name: 'Mental Health Screening' },
    { '@type': 'MedicalProcedure', name: 'Pregnancy Testing and Prenatal Referrals' },
  ],
  priceRange: '$$',
  paymentAccepted: 'Cash, Credit Card, Insurance',
  currenciesAccepted: 'USD',
  areaServed: {
    '@type': 'City',
    name: 'Brandon',
    containedInPlace: { '@type': 'State', name: 'Florida' },
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How often should I have a well-woman exam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most women benefit from an annual well-woman exam regardless of age. The visit includes a physical assessment, breast exam, blood pressure screening, and a thorough discussion of your health goals and concerns. Pap smears for cervical cancer screening are recommended every 3 years for women ages 21–65 per USPSTF guidelines, or every 5 years combined with HPV co-testing for women 30–65.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is included in a well-woman visit at WeCare?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our comprehensive well-woman visit includes a full physical exam, pelvic exam, breast exam, blood pressure and BMI screening, review of immunizations, and lab orders as needed (hormone panel, cholesterol, thyroid, STI screening). We also discuss family planning, mental health, bone health, and any concerns you have — giving you ample time to speak openly with your provider.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you manage menopause and perimenopause symptoms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. We offer a full spectrum of menopause care including hormone replacement therapy (HRT) with estrogen and/or progesterone, non-hormonal prescription options, lifestyle and nutrition guidance, and regular monitoring. Whether you are experiencing hot flashes, night sweats, mood swings, sleep disruption, or vaginal dryness, our team creates a personalized plan so you can feel like yourself again.',
      },
    },
    {
      '@type': 'Question',
      name: 'What birth control options do you offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We counsel on and prescribe the full range of reversible contraceptives: daily oral contraceptive pills, the transdermal patch, the vaginal ring, and Depo-Provera injections. We can also provide referrals for IUD placement and implant insertion. We take time to review your medical history, lifestyle, and reproductive goals so you can make a confident, informed choice.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is PCOS and how is it treated?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Polycystic ovary syndrome (PCOS) is a hormonal condition affecting roughly 1 in 10 women of reproductive age. Symptoms include irregular or absent periods, excess androgen (causing acne or unwanted hair growth), weight gain, and difficulty conceiving. At WeCare, we diagnose PCOS through lab work and ultrasound referral, then create a management plan that may include lifestyle changes, metformin, oral contraceptives, or other targeted therapies.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you test and treat thyroid conditions in women?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Hypothyroidism and hyperthyroidism are significantly more common in women than men and can cause fatigue, weight changes, hair loss, irregular periods, and mood issues. We screen with a TSH blood test, diagnose thyroid disorders, and manage your condition with medication (levothyroxine for hypothyroidism) and regular lab monitoring to keep your levels in the optimal range.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is STI testing confidential?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — completely. All STI screening, results, and treatment at WeCare are handled with strict confidentiality and without judgment. We offer comprehensive panels for chlamydia, gonorrhea, syphilis, HIV, hepatitis B and C, and herpes. If a result comes back positive, we provide treatment, partner notification guidance, and compassionate counseling to help you move forward confidently.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you help with heavy or irregular periods?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Heavy bleeding (menorrhagia), prolonged periods, and irregular cycles can significantly affect your quality of life and may signal underlying conditions such as fibroids, endometriosis, thyroid disease, PCOS, or hormonal imbalance. We evaluate your symptoms with a thorough history, pelvic exam, and targeted lab work, then discuss medical management options including hormonal therapy, iron supplementation, or specialist referral when appropriate.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you screen for mental health conditions in women?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Women are significantly more likely to experience depression and anxiety, and these conditions are often under-diagnosed at routine visits. At WeCare, every well-woman exam includes validated mental health screening tools (PHQ-9 for depression, GAD-7 for anxiety). If screening is positive, we discuss counseling referrals, lifestyle strategies, and medication management in a safe, supportive environment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does insurance cover well-woman visits and women\'s health screenings?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Under the Affordable Care Act (ACA), most insurance plans cover preventive women\'s health services — including annual well-woman exams, pap smears, mammogram referrals, STI screening, and contraception counseling — at no cost to you. We accept Aetna, United Healthcare, Medicare, Blue Cross Blue Shield, and MultiPlan. We also welcome uninsured patients and offer transparent, affordable self-pay pricing.',
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
      name: "Women's Health",
      item: 'https://www.wecarewellnessclinic.com/womens-health',
    },
  ],
};

/* ── Data ─────────────────────────────────────────────────────────────── */

const BENEFITS = [
  {
    icon: '🌸',
    title: 'Annual well-woman exams',
    desc: 'Comprehensive preventive visits that go beyond a basic checkup. We review your full health history, perform a physical and pelvic exam, check blood pressure and BMI, discuss immunizations, and order labs tailored to your age and risk factors — all in one appointment.',
  },
  {
    icon: '🔬',
    title: 'Pap smears & cervical screening',
    desc: 'Cervical cancer is largely preventable with routine screening. We follow USPSTF guidelines — Pap smear every 3 years for women 21–65, or combined Pap + HPV co-testing every 5 years for women 30–65. We walk you through your results and any next steps with clarity and care.',
  },
  {
    icon: '⚖️',
    title: 'Hormone replacement therapy (HRT)',
    desc: 'Menopause does not have to derail your life. We design individualized HRT plans — estrogen, progesterone, or combination therapy — to ease hot flashes, night sweats, mood shifts, sleep disruption, and bone loss, while monitoring your health closely at every follow-up.',
  },
  {
    icon: '💊',
    title: 'Birth control counseling',
    desc: 'Family planning on your terms. We review your medical history, lifestyle, and goals to help you choose the right method — oral contraceptive pills, the patch, vaginal ring, Depo-Provera injection, or IUD referral. No pressure, just honest guidance so you feel confident in your decision.',
  },
  {
    icon: '🌿',
    title: 'PCOS diagnosis & management',
    desc: 'Polycystic ovary syndrome affects roughly 1 in 10 women and is one of the most common causes of irregular periods and infertility. We diagnose PCOS through lab work and exam, then build a care plan that may include lifestyle coaching, metformin, hormonal therapy, or specialist coordination.',
  },
  {
    icon: '🌡️',
    title: 'Menopause & perimenopause care',
    desc: 'The transition to menopause can span a decade. We support every stage — from the first irregular periods of perimenopause through post-menopause — with HRT, non-hormonal options, bone health monitoring, cardiovascular risk reduction, and compassionate counseling every step of the way.',
  },
  {
    icon: '🧪',
    title: 'STI testing & treatment',
    desc: 'Confidential, judgment-free STI screening for chlamydia, gonorrhea, syphilis, HIV, hepatitis B/C, and herpes. We provide rapid results, same-visit treatment when possible, and supportive counseling so you can protect your health and your partners without shame or stigma.',
  },
  {
    icon: '🧠',
    title: 'Mental health & thyroid screening',
    desc: 'Women are disproportionately affected by depression, anxiety, and thyroid disorders. Every well-woman visit includes validated mental health screening (PHQ-9, GAD-7) and thyroid testing as indicated. If screening is positive, we discuss counseling, medication options, and referrals right then and there.',
  },
];

const CONDITIONS = [
  { name: 'Irregular or heavy periods (menorrhagia)', detail: 'Evaluation and medical management of abnormal uterine bleeding.' },
  { name: 'PCOS (polycystic ovary syndrome)', detail: 'Hormonal and metabolic management of this common reproductive condition.' },
  { name: 'Menopause & perimenopause', detail: 'Full-spectrum support through all phases of the menopausal transition.' },
  { name: 'Hypothyroidism & hyperthyroidism', detail: 'TSH screening, diagnosis, and ongoing thyroid medication management.' },
  { name: 'Urinary tract infections (UTIs)', detail: 'Rapid diagnosis and antibiotic treatment; prevention counseling for recurrent UTIs.' },
  { name: 'Pelvic pain', detail: 'Evaluation of pelvic pain with referral to gynecology or pelvic floor PT as needed.' },
  { name: 'Vaginal dryness & atrophy', detail: 'Hormonal and non-hormonal treatments to restore comfort and quality of life.' },
  { name: 'Cervical dysplasia (abnormal Pap results)', detail: 'Follow-up care, colposcopy referrals, and surveillance planning.' },
  { name: 'STIs & STDs', detail: 'Testing and treatment for all major sexually transmitted infections.' },
  { name: 'Depression & anxiety in women', detail: 'Screening, medication management, and referrals for therapy or psychiatry.' },
  { name: 'Osteoporosis risk', detail: 'Bone density screening referrals and preventive therapy counseling post-menopause.' },
  { name: 'Premenstrual syndrome (PMS & PMDD)', detail: 'Lifestyle, nutritional, and pharmacological strategies for cycle-related mood and physical symptoms.' },
  { name: 'Pregnancy testing & prenatal referrals', detail: 'Confirmation, early prenatal guidance, and warm OB referrals.' },
  { name: 'Breast health & mammogram referrals', detail: 'Clinical breast exams and age-appropriate mammography referrals per ACS guidelines.' },
  { name: 'Hormone imbalances', detail: 'Comprehensive hormone panels to identify and treat estrogen, progesterone, and testosterone imbalances.' },
  { name: 'Recurrent yeast infections', detail: 'Diagnosis, treatment, and strategies to reduce recurrence.' },
];

const WELL_WOMAN_STEPS = [
  {
    num: 1,
    title: 'Health history review',
    desc: 'We start by reviewing your personal and family medical history, current medications, lifestyle factors, and any specific concerns you have brought to the visit. Nothing is off limits — this is your time.',
  },
  {
    num: 2,
    title: 'Physical & vital signs',
    desc: 'We check blood pressure, heart rate, BMI, and perform a head-to-toe physical exam. Any new findings are discussed with you immediately so there are no surprises.',
  },
  {
    num: 3,
    title: 'Pelvic exam & Pap smear',
    desc: 'A pelvic exam allows us to assess your reproductive organs for any abnormalities. If you are due for cervical cancer screening, a Pap smear (and HPV co-test if appropriate) is collected — a quick, two-minute procedure.',
  },
  {
    num: 4,
    title: 'Breast exam',
    desc: 'We perform a clinical breast exam and discuss self-exam technique. If you are 40 or older — or have a family history of breast cancer — we will order a mammogram referral.',
  },
  {
    num: 5,
    title: 'Lab work & screenings',
    desc: 'Based on your age and risk factors, we order relevant labs: hormone panel, TSH, CBC, lipid panel, STI screening, glucose, and more. Blood can be drawn right in our office — no extra trip needed.',
  },
  {
    num: 6,
    title: 'Your personalized care plan',
    desc: 'Before you leave, your provider walks you through all findings, answers every question, and provides a clear action plan — prescriptions, referrals, follow-up schedule, and any lifestyle recommendations — all in plain language.',
  },
];

const FAQS = [
  {
    q: 'How often should I have a well-woman exam?',
    a: 'Most women should have an annual well-woman exam. The visit covers physical assessment, breast exam, and comprehensive health screenings. Pap smears for cervical cancer are recommended every 3 years for women ages 21–65 per USPSTF guidelines, or every 5 years with HPV co-testing for women 30–65. Annual visits ensure no concern goes unaddressed as your health evolves.',
  },
  {
    q: 'What is included in a well-woman visit at WeCare?',
    a: 'Our well-woman visits include a full physical exam, pelvic exam, breast exam, blood pressure and BMI check, immunization review, and individualized lab orders — hormone panel, cholesterol, thyroid, STI screening, and more. We also cover family planning, mental health, bone health, and any personal concerns you want to discuss. You will never feel rushed.',
  },
  {
    q: 'Do you manage menopause and perimenopause symptoms?',
    a: 'Absolutely. We offer the full spectrum of menopause care: hormone replacement therapy (HRT) with estrogen and/or progesterone, non-hormonal prescription options, lifestyle and nutrition guidance, and regular monitoring. Whether you are dealing with hot flashes, night sweats, mood swings, sleep disruption, or vaginal dryness, we build a personalized plan to help you feel like yourself again.',
  },
  {
    q: 'What birth control options do you offer?',
    a: 'We counsel on and prescribe all major reversible contraceptives: daily oral contraceptive pills, the transdermal patch, the vaginal ring, and Depo-Provera injections. We also provide IUD and implant referrals. We take time to review your medical history, reproductive goals, and lifestyle so you leave with a confident, informed choice — not a rushed prescription.',
  },
  {
    q: 'What is PCOS and how is it treated?',
    a: 'Polycystic ovary syndrome (PCOS) affects roughly 1 in 10 women of reproductive age and causes irregular periods, excess androgen, weight gain, acne, and difficulty conceiving. We diagnose PCOS through labs and exam, then create a management plan using lifestyle changes, metformin, oral contraceptives, or other targeted therapies based on your individual presentation and goals.',
  },
  {
    q: 'Do you treat thyroid conditions in women?',
    a: 'Yes. Hypothyroidism and hyperthyroidism are far more common in women and can cause fatigue, weight changes, hair loss, irregular periods, and mood problems. We screen with a TSH blood test, diagnose thyroid disorders, and manage your condition with medication and regular lab monitoring to keep your levels optimally balanced throughout the year.',
  },
  {
    q: 'Is STI testing confidential?',
    a: 'Yes — completely confidential and judgment-free. We offer comprehensive STI panels for chlamydia, gonorrhea, syphilis, HIV, hepatitis B/C, and herpes. If a result is positive, we provide same-visit treatment when possible, compassionate counseling, and guidance on partner notification. Your health and dignity are our priority at every step of the process.',
  },
  {
    q: 'Can you help with heavy or irregular periods?',
    a: 'Heavy or irregular bleeding can significantly impact daily life and may signal fibroids, endometriosis, thyroid disease, PCOS, or hormonal imbalance. We evaluate with a thorough history, pelvic exam, and targeted labs, then discuss medical management options including hormonal therapy, iron supplementation for anemia, or specialist referral when structural causes need further investigation.',
  },
  {
    q: 'Do you screen for depression and anxiety in women?',
    a: 'Yes. Women are significantly more likely to experience depression and anxiety, yet these are often under-screened at routine visits. Every well-woman exam at WeCare includes the PHQ-9 depression screen and GAD-7 anxiety screen. Positive results lead directly to a discussion of counseling referrals, lifestyle strategies, and medication management — all in the same appointment.',
  },
  {
    q: 'Does insurance cover well-woman visits and women\'s health screenings?',
    a: 'Under the ACA, most insurance plans cover preventive women\'s health services — annual well-woman exams, pap smears, mammogram referrals, STI screening, and contraception counseling — at no cost to you. We accept Aetna, United Healthcare, Medicare, Blue Cross Blue Shield, and MultiPlan, and we welcome uninsured patients with transparent self-pay pricing.',
  },
];

/* ── Page component ───────────────────────────────────────────────────── */

export default function WomensHealthPage() {
  return (
    <>
      {/* JSON-LD schemas */}
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
        headline="Women's health care that listens"
        subtext="Compassionate, evidence-based gynecology and wellness care for women at every stage of life — annual exams, hormones, menopause, PCOS, birth control, and more. You deserve a provider who truly sees you."
        ctaLabel="Book a Well-Woman Visit"
        ctaHref="/booking"
        secondaryLabel="Call (813) 438-5220"
        secondaryHref="tel:+18134385220"
        badgeText="Accepting new patients"
        variant="gradient"
      />

      {/* ── Intro ── */}
      <section className={styles.intro} aria-labelledby="intro-heading">
        <div className="container">
          <div className={styles.introGrid}>
            <div>
              <p className={styles.introLabel}>Gynecology &amp; women&apos;s wellness — Brandon, FL</p>
              <h2 id="intro-heading" className={styles.introHeading}>
                A practice built around women&apos;s needs
              </h2>
              <p className={styles.introBody}>
                WeCare Wellness Clinic provides a full spectrum of women&apos;s health services in a warm, respectful environment in Brandon, FL. We understand that your health needs shift throughout your life — from your first annual exam to navigating pregnancy, managing hormones in your 40s, and thriving in post-menopause. Our providers take the time to listen, answer every question, and partner with you in your care.
              </p>
              <p className={styles.introBody}>
                Most competitors in the Brandon area offer only brief, transactional visits. At WeCare, we go further — combining thorough preventive screenings, evidence-based hormone care, and genuine compassion so you always leave feeling heard, informed, and confident in your health plan.
              </p>
              <ul className={styles.featuresList} role="list">
                {[
                  'Annual well-woman exams (comprehensive preventive care)',
                  'Pap smears & cervical cancer screening (USPSTF guidelines)',
                  'Hormone replacement therapy (HRT) for menopause',
                  'PCOS diagnosis and ongoing management',
                  'Birth control counseling and prescriptions',
                  'STI/STD testing — confidential and judgment-free',
                  'Thyroid disorder screening and treatment',
                  'Mental health screening (depression, anxiety)',
                  'Pregnancy testing and prenatal referrals',
                  'Breast exams and mammogram referrals',
                ].map((f) => (
                  <li key={f} className={styles.featuresListItem}>
                    <span className={styles.checkIcon} aria-hidden="true">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.statsPanel} aria-label="Quick facts about our women's health services">
              {[
                { value: '4.9★', label: 'Average patient rating on Google' },
                { value: 'Same week', label: 'New patient appointment availability' },
                { value: 'All stages', label: 'Adolescent through post-menopause' },
                { value: 'Telehealth', label: 'Women\'s health visits statewide in FL' },
                { value: '15+', label: 'Women\'s health conditions managed' },
                { value: 'In-house labs', label: 'Hormone, thyroid & STI panels on-site' },
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

      {/* ── Benefits / Services ── */}
      <section className={styles.benefitsSection} aria-labelledby="benefits-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">What we offer</p>
            <h2 id="benefits-heading" className="ds-h2">Women&apos;s health services in Brandon, FL</h2>
            <p className="ds-lede" style={{ marginTop: 'var(--space-2)' }}>
              From routine preventive care to complex hormonal management, our team is equipped to support every aspect of your health — with same-week appointments and most insurance accepted.
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

      {/* ── Conditions We Address ── */}
      <section className={styles.processSection} aria-labelledby="conditions-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">Comprehensive care</p>
            <h2 id="conditions-heading" className="ds-h2">Conditions we address</h2>
            <p className="ds-lede" style={{ marginTop: 'var(--space-2)' }}>
              Our women&apos;s health providers are experienced in diagnosing, managing, and coordinating care for a wide range of conditions — all in our Brandon, FL clinic.
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: 'var(--space-4)',
              marginTop: 'var(--space-2)',
            }}
            role="list"
          >
            {CONDITIONS.map((c) => (
              <div
                key={c.name}
                className={styles.benefitCard}
                role="listitem"
                style={{ flexDirection: 'row', alignItems: 'flex-start', gap: 'var(--space-3)' }}
              >
                <span className={styles.checkIcon} aria-hidden="true" style={{ flexShrink: 0, marginTop: '2px' }}>✓</span>
                <div>
                  <h3 className={styles.benefitTitle} style={{ marginBottom: 'var(--space-1)' }}>{c.name}</h3>
                  <p className={styles.benefitDesc}>{c.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Annual Well-Woman Visit: What to Expect ── */}
      <section className={styles.benefitsSection} aria-labelledby="wellwoman-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">Your annual visit, explained</p>
            <h2 id="wellwoman-heading" className="ds-h2">Annual well-woman visit: what to expect</h2>
            <p className="ds-lede" style={{ marginTop: 'var(--space-2)' }}>
              Many women feel nervous about their annual exam — especially if it has been a few years. Here is exactly what happens at your WeCare well-woman visit, step by step. We want you to walk in prepared and walk out empowered.
            </p>
          </div>
          <ol
            className={styles.processSteps}
            role="list"
            style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}
          >
            {WELL_WOMAN_STEPS.map((step) => (
              <li key={step.num} className={styles.processStep} style={{ textAlign: 'left', alignItems: 'flex-start' }}>
                <div className={styles.stepNum} aria-label={`Step ${step.num}`}>{step.num}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc} style={{ maxWidth: '100%' }}>{step.desc}</p>
              </li>
            ))}
          </ol>
          <div
            style={{
              marginTop: 'var(--space-8)',
              background: 'var(--color-primary)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--space-6) var(--space-8)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 'var(--space-4)',
            }}
          >
            <div>
              <p
                style={{
                  color: '#fff',
                  fontWeight: 'var(--weight-bold)',
                  fontSize: 'var(--text-lg)',
                  margin: '0 0 var(--space-1)',
                }}
              >
                Ready to schedule your well-woman visit?
              </p>
              <p style={{ color: 'rgba(255,255,255,0.85)', margin: 0, fontSize: 'var(--text-sm)' }}>
                Same-week appointments available in Brandon, FL — most insurance accepted.
              </p>
            </div>
            <a
              href="/booking"
              style={{
                background: '#fff',
                color: 'var(--color-primary)',
                padding: 'var(--space-3) var(--space-6)',
                borderRadius: 'var(--radius-md)',
                fontWeight: 'var(--weight-semibold)',
                textDecoration: 'none',
                fontSize: 'var(--text-sm)',
                whiteSpace: 'nowrap',
              }}
            >
              Book Now
            </a>
          </div>
        </div>
      </section>

      {/* ── Why WeCare ── */}
      <section className={styles.processSection} aria-labelledby="why-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">Why patients choose us</p>
            <h2 id="why-heading" className="ds-h2">Women&apos;s health care that goes beyond the basics</h2>
            <p className="ds-lede" style={{ marginTop: 'var(--space-2)' }}>
              In a region where most primary care practices offer rushed, superficial women&apos;s health visits, WeCare deliberately does more.
            </p>
          </div>
          <ol className={styles.processSteps} role="list">
            {[
              {
                num: 1,
                title: 'You are heard, not hurried',
                desc: 'Our providers build in time to listen. No five-minute appointments. No dismissed concerns. Every question you bring deserves a real answer.',
              },
              {
                num: 2,
                title: 'Evidence-based, not one-size-fits-all',
                desc: 'From USPSTF screening guidelines to the latest HRT research, we practice up-to-date medicine — and we tailor every plan to your unique history and goals.',
              },
              {
                num: 3,
                title: 'Everything in one place',
                desc: 'Labs, hormone panels, STI testing, mental health screening, and prescriptions — handled in our Brandon office so you are not bounced between providers.',
              },
              {
                num: 4,
                title: 'Telehealth when you need it',
                desc: 'Follow-up appointments for HRT, UTI treatment, birth control refills, and mental health check-ins available by secure video — no drive required.',
              },
            ].map((step) => (
              <li key={step.num} className={styles.processStep}>
                <div className={styles.stepNum} aria-hidden="true">{step.num}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={styles.faqSection} aria-labelledby="faq-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">Common questions</p>
            <h2 id="faq-heading" className="ds-h2">Women&apos;s health FAQs</h2>
            <p className="ds-lede" style={{ marginTop: 'var(--space-2)' }}>
              Questions about your care should never go unanswered. Here are the ones we hear most often — with honest, detailed answers.
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

      {/* ── Insurance strip ── */}
      <div className={styles.insuranceStrip} role="complementary" aria-label="Insurance accepted for women's health visits">
        <p className={styles.insuranceText}>Insurance accepted — including for preventive well-woman visits</p>
        <p className={styles.insuranceNames}>
          Aetna &nbsp;·&nbsp; United Healthcare &nbsp;·&nbsp; Medicare &nbsp;·&nbsp; Blue Cross Blue Shield &nbsp;·&nbsp; MultiPlan &nbsp;·&nbsp; Uninsured patients welcome
        </p>
      </div>

      <RelatedServices currentSlug="womens-health" />

      <BookingCTA
        heading="Take charge of your women's health today"
        subtext="Our compassionate team is ready to see you. Same-week appointments available in Brandon, FL — and telehealth available statewide. You deserve care that truly sees you."
      />
    </>
  );
}
