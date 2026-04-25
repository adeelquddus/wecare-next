import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import BookingCTA from '@/components/sections/BookingCTA';
import RelatedServices from '@/components/sections/RelatedServices';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Medical Weight Loss Brandon FL — Semaglutide & Tirzepatide | WeCare Wellness',
  description:
    'Physician-supervised GLP-1 weight loss in Brandon, FL. Semaglutide (Ozempic/Wegovy), Tirzepatide (Mounjaro/Zepbound), nutrition counseling & lab monitoring. Insurance accepted.',
  keywords: [
    'medical weight loss Brandon FL',
    'semaglutide Brandon FL',
    'GLP-1 weight loss clinic Brandon FL',
    'tirzepatide Brandon FL',
    'Ozempic doctor Brandon FL',
    'supervised weight loss program Brandon FL',
    'Wegovy Brandon FL',
    'Mounjaro Brandon FL',
    'weight loss clinic Brandon Florida',
    'GLP-1 injections Brandon FL',
  ],
  alternates: { canonical: 'https://www.wecarewellnessclinic.com/medical-weight-loss' },
  openGraph: {
    title: 'Medical Weight Loss (Semaglutide/Tirzepatide) — WeCare Wellness | Brandon, FL',
    description:
      'GLP-1 weight loss programs using Semaglutide and Tirzepatide, supervised by board-certified physicians in Brandon, FL. Lab monitoring and nutrition counseling included.',
    url: 'https://www.wecarewellnessclinic.com/medical-weight-loss',
    type: 'website',
  },
};

/* ─── JSON-LD schemas ─────────────────────────────────────────────────── */

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
  medicalSpecialty: 'General Practice',
  availableService: [
    {
      '@type': 'MedicalTherapy',
      name: 'Semaglutide Weight Loss Program',
      description:
        'Physician-supervised semaglutide (GLP-1 agonist) injections for medically supervised weight loss, the active ingredient in Ozempic and Wegovy.',
    },
    {
      '@type': 'MedicalTherapy',
      name: 'Tirzepatide Weight Loss Program',
      description:
        'Physician-supervised tirzepatide (GIP/GLP-1 dual agonist) injections, the active ingredient in Mounjaro and Zepbound, for significant medically supervised weight loss.',
    },
    {
      '@type': 'MedicalTherapy',
      name: 'Phentermine Weight Loss',
      description:
        'Short-term FDA-approved appetite suppressant for appropriate candidates, combined with lifestyle and nutrition counseling.',
    },
    {
      '@type': 'MedicalTherapy',
      name: 'B12 Injections',
      description:
        'Vitamin B12 injections to support energy, metabolism, and overall wellness during a weight loss program.',
    },
  ],
  sameAs: [
    'https://www.facebook.com/wecarewellnessclinic',
    'https://www.google.com/maps?cid=wecarewellnessclinic',
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Am I a candidate for GLP-1 weight loss therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "GLP-1 medications are typically prescribed for adults with a BMI of 30 or higher, or a BMI of 27 or higher with at least one weight-related condition such as type 2 diabetes, hypertension, or high cholesterol. An initial consultation with our physician will review your health history, labs, and goals to determine if GLP-1 therapy is right for you.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between Semaglutide and Tirzepatide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Semaglutide (the active ingredient in Ozempic and Wegovy) works by activating GLP-1 receptors to reduce appetite and slow digestion. Tirzepatide (Mounjaro and Zepbound) activates both GLP-1 and GIP receptors simultaneously — a dual-agonist mechanism that typically produces greater weight loss. In SURMOUNT-1 trials, tirzepatide achieved up to 22.5% average body weight reduction. Your provider will recommend the best option based on your health profile.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does insurance cover medical weight loss at WeCare?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Coverage varies by plan. We accept Aetna, United Healthcare, Medicare, Blue Cross Blue Shield, and MultiPlan. Some plans cover GLP-1 medications when prescribed for type 2 diabetes or obesity. We will verify your benefits during your initial consultation and discuss affordable self-pay options if your plan does not cover the medication.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much weight can I expect to lose on semaglutide or tirzepatide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Clinical trials show meaningful results: the STEP-1 trial of semaglutide demonstrated an average 14.9% body weight reduction over 68 weeks, and the SURMOUNT-1 trial of tirzepatide showed up to 22.5% average reduction. Individual results depend on starting weight, adherence, diet, activity level, and other health factors. Our team works with you to maximize and sustain your progress.",
      },
    },
    {
      '@type': 'Question',
      name: 'What are the side effects of GLP-1 medications?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The most common side effects are nausea, reduced appetite, and mild gastrointestinal symptoms such as bloating or constipation — particularly when starting or increasing your dose. These typically improve within two to four weeks as your body adjusts. We start at a low dose and titrate slowly to minimize discomfort, and we are available to guide you through the adjustment period.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to stay on GLP-1 medication long term?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Many patients do continue long term for sustained weight management, as obesity is a chronic condition. However, we also integrate nutrition counseling and lifestyle coaching so you build lasting habits. When you are ready to taper, we create a structured plan to help you maintain your results without medication.",
      },
    },
    {
      '@type': 'Question',
      name: 'What lab work is required for the weight loss program?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Before starting, we order a baseline metabolic panel, A1C (blood sugar), thyroid panel, kidney function, and lipid panel. We repeat key labs at regular intervals throughout the program to monitor safety and effectiveness. This ongoing monitoring is a major advantage of our medically supervised approach versus online-only programs.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can I do the weight loss program via telehealth?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. After your initial in-person consultation and lab work, many follow-up appointments — including dosing reviews and progress check-ins — can be conducted via telehealth. This makes it easy to stay on track even with a busy schedule. We serve patients throughout Hillsborough County and the greater Tampa Bay area.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is phentermine and who qualifies for it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Phentermine is an FDA-approved short-term appetite suppressant that works by stimulating the central nervous system. It is suitable for some patients as a bridge or adjunct to GLP-1 therapy, particularly those who need faster initial results. It is not appropriate for patients with certain cardiovascular conditions, hyperthyroidism, or a history of stimulant misuse. Your provider will determine your eligibility.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is included in the monthly program cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Your program includes the provider consultation, body composition monitoring, nutrition guidance, and medication management. Lab work is billed through your insurance when possible. Medication costs vary depending on whether you use insurance or pay out of pocket; we will give you a transparent cost breakdown before you start so there are no surprises.",
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
      name: 'Medical Weight Loss',
      item: 'https://www.wecarewellnessclinic.com/medical-weight-loss',
    },
  ],
};

/* ─── Page data ───────────────────────────────────────────────────────── */

const BENEFITS = [
  {
    icon: '💉',
    title: 'Semaglutide (GLP-1)',
    desc: 'The active ingredient in Ozempic® and Wegovy®. Semaglutide reduces hunger signals, slows gastric emptying, and improves insulin sensitivity — producing an average 14.9% body weight reduction in the STEP-1 clinical trial over 68 weeks.',
  },
  {
    icon: '⚕️',
    title: 'Tirzepatide (GIP + GLP-1)',
    desc: 'The dual-agonist in Mounjaro® and Zepbound® targets both GIP and GLP-1 receptors simultaneously. SURMOUNT-1 trials showed up to 22.5% average body weight reduction — the highest of any approved weight-loss medication to date.',
  },
  {
    icon: '💊',
    title: 'Phentermine (short-term)',
    desc: 'FDA-approved since 1959, phentermine is a fast-acting appetite suppressant suitable for appropriate candidates who need a short-term boost or bridge. Prescribed only after a thorough cardiovascular and medical history review.',
  },
  {
    icon: '⚡',
    title: 'B12 Injections',
    desc: 'Vitamin B12 supports red blood cell production, neurological function, and energy metabolism. Injections deliver higher bioavailability than oral supplements and can help counteract the fatigue some patients experience early in a caloric deficit.',
  },
  {
    icon: '🥗',
    title: 'Nutrition counseling',
    desc: 'Our GLP-1-optimized nutrition guidance focuses on protein-forward, anti-inflammatory eating to preserve lean muscle mass during weight loss. We provide practical macro targets and meal strategies that complement your medication.',
  },
  {
    icon: '🔬',
    title: 'Lab monitoring included',
    desc: 'Baseline and ongoing metabolic panels, A1C, kidney function, thyroid, and lipid panels ensure your program is safe and progressing well. We monitor markers that online-only programs often skip entirely.',
  },
  {
    icon: '📊',
    title: 'Body composition analysis',
    desc: 'Scale weight alone is misleading. We track body fat percentage versus lean mass so we can confirm you are losing fat — not muscle — and adjust your program accordingly to preserve strength and metabolic rate.',
  },
  {
    icon: '📅',
    title: 'Monthly provider check-ins',
    desc: 'Regular one-on-one appointments with your physician to review lab trends, adjust dosing, troubleshoot side effects, and celebrate milestones. Follow-up visits are available via telehealth for convenience.',
  },
];

const PROCESS = [
  {
    num: 1,
    title: 'Initial consultation & labs',
    desc: 'Meet with your physician to review your health history, weight loss goals, and any prior attempts. We order a comprehensive baseline lab panel — metabolic panel, A1C, thyroid, lipids, and kidney function — before prescribing anything.',
  },
  {
    num: 2,
    title: 'Personalized program design',
    desc: 'Based on your labs, BMI, medical history, and goals, your provider selects the right medication (semaglutide, tirzepatide, or phentermine), starting dose, and nutrition strategy specifically for you.',
  },
  {
    num: 3,
    title: 'Start your program',
    desc: 'You begin your medication at a low starting dose with detailed guidance on self-injection technique, storage, what to expect, and how to manage any early side effects. We are available between appointments for questions.',
  },
  {
    num: 4,
    title: 'Monthly monitoring & dose titration',
    desc: 'Monthly check-ins review your progress, labs, and how you are tolerating the medication. Your provider adjusts your dose on schedule — typically increasing every 4 weeks — to maximize effectiveness while minimizing side effects.',
  },
  {
    num: 5,
    title: 'Long-term maintenance planning',
    desc: 'As you approach your goal weight, we transition focus to maintenance — developing a sustainable nutrition and activity plan, and a structured tapering schedule if you choose to reduce or stop medication.',
  },
];

const FAQS = [
  {
    q: 'Am I a candidate for GLP-1 weight loss therapy?',
    a: "GLP-1 medications are typically prescribed for adults with a BMI of 30 or higher, or 27 or higher with a weight-related condition such as type 2 diabetes, hypertension, or high cholesterol. An initial consultation with our physician will review your health history, labs, and goals to determine the safest and most effective plan for you.",
  },
  {
    q: 'What is the difference between Semaglutide and Tirzepatide?',
    a: "Semaglutide (Ozempic/Wegovy) activates GLP-1 receptors to reduce appetite and slow digestion. Tirzepatide (Mounjaro/Zepbound) activates both GLP-1 and GIP receptors — a dual-agonist approach that typically produces greater weight loss, with up to 22.5% body weight reduction in SURMOUNT-1 trials versus ~15% for semaglutide. Your provider will recommend the best fit for your health profile and goals.",
  },
  {
    q: 'Does insurance cover medical weight loss at WeCare?',
    a: "Coverage depends on your specific plan. We accept Aetna, United Healthcare, Medicare, Blue Cross Blue Shield, and MultiPlan. Some plans cover GLP-1 medications when prescribed for type 2 diabetes or obesity management. We verify your benefits before you start and offer transparent self-pay pricing for patients without coverage.",
  },
  {
    q: 'How much weight can I expect to lose?',
    a: "Clinical data is encouraging: the STEP-1 semaglutide trial showed an average 14.9% body weight reduction over 68 weeks, while SURMOUNT-1 tirzepatide data showed up to 22.5% reduction. Individual results vary based on adherence, starting weight, diet, and activity. Many patients lose 1–2 pounds per week in the early months.",
  },
  {
    q: 'What are the side effects?',
    a: "The most common side effects are nausea, reduced appetite, and mild GI symptoms — especially when starting or increasing your dose. These typically improve within 2–4 weeks. We use a slow titration protocol to minimize discomfort and provide guidance on timing injections with meals and managing symptoms throughout your program.",
  },
  {
    q: 'Who should NOT take GLP-1 medications?',
    a: "GLP-1 medications are contraindicated in patients with a personal or family history of medullary thyroid carcinoma (MTC) or Multiple Endocrine Neoplasia syndrome type 2 (MEN 2), as well as those with a history of pancreatitis or severe gastrointestinal disease. Pregnancy is also a contraindication. Your physician will review your full history to confirm eligibility.",
  },
  {
    q: 'What lab work is required for the program?',
    a: "Before starting, we order a baseline metabolic panel, A1C, thyroid panel, kidney and liver function, and lipid panel. We repeat relevant labs at regular intervals throughout the program to monitor safety and effectiveness. This comprehensive monitoring is a major advantage over online-only GLP-1 programs.",
  },
  {
    q: 'Can I do the program via telehealth?',
    a: "After your initial in-person visit and lab work, many follow-up appointments — including dosing reviews and progress check-ins — can be done via telehealth. This makes it easy to stay on track with a busy schedule. We serve patients throughout Hillsborough County and the greater Tampa Bay area, including Brandon, Valrico, Riverview, and Plant City.",
  },
  {
    q: 'Do I need to stay on medication long term?',
    a: "Many patients benefit from long-term use since obesity is a chronic condition with a biological basis. However, we also build in nutrition and lifestyle coaching so you have the tools to maintain results. When you are ready to taper, we create a structured plan to help you sustain your progress off medication.",
  },
  {
    q: 'What does the program cost, and how does it compare to competitors?',
    a: "Program costs vary based on medication, dose, and insurance coverage. We provide a fully transparent cost breakdown at your consultation — no hidden fees. For reference, some local competitors charge $350 per 4-dose cycle for tirzepatide 5 mg and $550 for 10 mg. We are competitively priced and accept insurance, which can significantly reduce your out-of-pocket cost.",
  },
];

/* ─── Component ───────────────────────────────────────────────────────── */

export default function MedicalWeightLossPage() {
  return (
    <>
      {/* JSON-LD structured data */}
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
        headline="Science-backed weight loss that actually works"
        subtext="Physician-supervised GLP-1 programs using Semaglutide and Tirzepatide — the same medications behind Ozempic, Wegovy, Mounjaro, and Zepbound — with clinical monitoring, lab work, and nutrition support included."
        ctaLabel="Book a Consultation"
        ctaHref="/booking"
        secondaryLabel="Call us: (813) 438-5220"
        secondaryHref="tel:+18134385220"
        badgeText="GLP-1 programs available"
        variant="gradient"
      />

      {/* ── Intro ──────────────────────────────────────────────────────── */}
      <section className={styles.intro} aria-labelledby="intro-heading">
        <div className="container">
          <div className={styles.introGrid}>
            <div>
              <p className={styles.introLabel}>GLP-1 · Semaglutide · Tirzepatide · Brandon, FL</p>
              <h2 id="intro-heading" className={styles.introHeading}>
                Medically supervised weight loss — the right way
              </h2>
              <p className={styles.introBody}>
                The GLP-1 revolution has changed what is achievable in weight management. At WeCare Wellness Clinic in Brandon, FL, our board-certified physicians build personalized programs around FDA-approved GLP-1 medications, comprehensive lab monitoring, and nutrition counseling — giving you clinical-grade support, not just a prescription.
              </p>
              <p className={styles.introBody}>
                This is not a diet plan or a mail-order service. It is a fully supervised medical program that addresses the hormonal and metabolic drivers of weight gain. When the biology is treated properly, sustainable results follow.
              </p>
              <ul className={styles.featuresList} role="list">
                {[
                  'Semaglutide (Ozempic/Wegovy) programs',
                  'Tirzepatide (Mounjaro/Zepbound) programs',
                  'Phentermine for appropriate candidates',
                  'B12 injections for energy and metabolism',
                  'GLP-1-optimized nutrition counseling',
                  'Body composition monitoring',
                  'Regular lab monitoring (A1C, metabolic panel, thyroid)',
                  'Monthly provider check-ins — telehealth available',
                ].map((f) => (
                  <li key={f} className={styles.featuresListItem}>
                    <span className={styles.checkIcon} aria-hidden="true">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.statsPanel} aria-label="Program facts">
              {[
                { value: '14–22%', label: 'Average body weight reduction in clinical trials' },
                { value: '22.5%', label: 'Max avg loss with tirzepatide (SURMOUNT-1)' },
                { value: 'Monthly', label: 'Provider check-ins with dose adjustment' },
                { value: 'Labs', label: 'Baseline + ongoing monitoring included' },
                { value: 'Telehealth', label: 'Follow-up visits available remotely' },
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

      {/* ── How GLP-1 Works ────────────────────────────────────────────── */}
      <section aria-labelledby="glp1-heading" style={{ background: 'var(--color-surface-2, #f8f9fa)', padding: 'var(--space-16, 4rem) 0' }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">The science explained simply</p>
            <h2 id="glp1-heading" className="ds-h2">How GLP-1 medications produce weight loss</h2>
            <p className="ds-lede" style={{ marginTop: 'var(--space-2)' }}>
              Understanding the mechanism helps you understand why these medications work when diets alone have not.
            </p>
          </div>
          <div style={{ maxWidth: '780px', margin: '0 auto', display: 'grid', gap: 'var(--space-6, 1.5rem)' }}>
            <p style={{ lineHeight: 1.75 }}>
              GLP-1 (glucagon-like peptide-1) is a hormone your gut naturally releases after eating. It signals your brain that you are full, slows the rate at which food leaves your stomach, and prompts your pancreas to release insulin in response to rising blood sugar. In people with obesity, this signaling system is often dysregulated — the brain does not receive adequate satiety signals, hunger persists despite sufficient caloric intake, and the body defends a higher weight set-point.
            </p>
            <p style={{ lineHeight: 1.75 }}>
              <strong>Semaglutide</strong> is a synthetic GLP-1 receptor agonist — it mimics and amplifies the natural GLP-1 signal. The result is significantly reduced appetite, earlier feelings of fullness during meals, slower gastric emptying, and stabilized blood sugar. In the landmark STEP-1 clinical trial, participants lost an average of 14.9% of their body weight over 68 weeks.
            </p>
            <p style={{ lineHeight: 1.75 }}>
              <strong>Tirzepatide</strong> goes one step further by also activating GIP (glucose-dependent insulinotropic polypeptide) receptors. This dual-agonist action produces synergistic effects on appetite suppression, insulin sensitivity, and fat metabolism. SURMOUNT-1 trial participants on the highest tirzepatide dose lost an average of 22.5% of their body weight over 72 weeks — the largest average reduction ever recorded for a weight-loss medication in a major clinical trial.
            </p>
            <p style={{ lineHeight: 1.75 }}>
              The key insight: these medications are not willpower substitutes. They correct a biological signaling deficit, making it physiologically easier to eat less and lose weight sustainably.
            </p>
          </div>
        </div>
      </section>

      {/* ── Program Components (Benefits) ──────────────────────────────── */}
      <section className={styles.benefitsSection} aria-labelledby="benefits-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">What is included</p>
            <h2 id="benefits-heading" className="ds-h2">A complete program — not just a prescription</h2>
            <p className="ds-lede" style={{ marginTop: 'var(--space-2)' }}>
              Every component below is part of your supervised program, because medication alone is only part of the equation.
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

      {/* ── Who Is a Candidate ─────────────────────────────────────────── */}
      <section aria-labelledby="candidate-heading" style={{ background: 'var(--color-surface-2, #f8f9fa)', padding: 'var(--space-16, 4rem) 0' }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">Is this right for you?</p>
            <h2 id="candidate-heading" className="ds-h2">Who is a candidate for medical weight loss?</h2>
            <p className="ds-lede" style={{ marginTop: 'var(--space-2)' }}>
              GLP-1 therapy is clinically indicated for a broad range of patients — not only those with severe obesity.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-8, 2rem)', maxWidth: '900px', margin: '0 auto' }}>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: 'var(--space-4, 1rem)' }}>You may qualify if you have:</h3>
              <ul className={styles.featuresList} role="list">
                {[
                  'BMI of 30 or higher (obesity)',
                  'BMI of 27 or higher + type 2 diabetes',
                  'BMI of 27 or higher + hypertension',
                  'BMI of 27 or higher + high cholesterol',
                  'BMI of 27 or higher + sleep apnea',
                  'Struggled with diet-only weight loss',
                  'Weight-related joint pain or mobility issues',
                ].map((item) => (
                  <li key={item} className={styles.featuresListItem}>
                    <span className={styles.checkIcon} aria-hidden="true">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: 'var(--space-4, 1rem)' }}>Safety considerations — not suitable if you have:</h3>
              <ul className={styles.featuresList} role="list" aria-label="Contraindications list">
                {[
                  'Personal/family history of medullary thyroid carcinoma',
                  'Multiple Endocrine Neoplasia type 2 (MEN 2)',
                  'History of pancreatitis (GLP-1 medications)',
                  'Severe gastrointestinal motility disorders',
                  'Current pregnancy or breastfeeding',
                  'Certain cardiovascular conditions (for phentermine)',
                ].map((item) => (
                  <li key={item} className={styles.featuresListItem}>
                    <span className={styles.checkIcon} aria-hidden="true" style={{ color: 'var(--color-warning, #d97706)' }}>!</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '0.875rem', marginTop: 'var(--space-4, 1rem)', color: 'var(--color-text-secondary, #6b7280)', lineHeight: 1.6 }}>
                This list is not exhaustive. Your physician will conduct a thorough medical history review at your consultation to confirm your eligibility and identify any individual risk factors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Expected Results ───────────────────────────────────────────── */}
      <section aria-labelledby="results-heading" style={{ padding: 'var(--space-16, 4rem) 0' }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">Clinical evidence</p>
            <h2 id="results-heading" className="ds-h2">What results can you expect?</h2>
            <p className="ds-lede" style={{ marginTop: 'var(--space-2)' }}>
              GLP-1 and GIP medications have some of the strongest clinical evidence of any weight-loss intervention ever studied.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--space-6, 1.5rem)', marginBottom: 'var(--space-10, 2.5rem)' }}>
            {[
              {
                trial: 'STEP-1 (Semaglutide)',
                stat: '14.9%',
                detail: 'Average body weight reduction at 68 weeks in participants without diabetes. 86% of participants lost 5%+ of body weight.',
                source: 'Wilding et al., NEJM 2021',
              },
              {
                trial: 'SURMOUNT-1 (Tirzepatide)',
                stat: '22.5%',
                detail: 'Average body weight reduction at 72 weeks on the 15 mg dose. Over 50% of participants lost 20%+ of body weight.',
                source: 'Jastreboff et al., NEJM 2022',
              },
              {
                trial: 'Real-world outcomes',
                stat: '1–2 lbs/week',
                detail: 'Typical early weight loss rate in compliant patients. Results taper over time as your body approaches its new set-point.',
                source: 'Clinical practice data',
              },
            ].map((r) => (
              <div key={r.trial} className={styles.benefitCard} style={{ borderLeft: '4px solid var(--color-primary, #2563eb)' }}>
                <p style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-primary, #2563eb)', marginBottom: 'var(--space-2, 0.5rem)' }}>{r.trial}</p>
                <p style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1, marginBottom: 'var(--space-2, 0.5rem)' }}>{r.stat}</p>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, marginBottom: 'var(--space-2, 0.5rem)' }}>{r.detail}</p>
                <p style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary, #6b7280)' }}>Source: {r.source}</p>
              </div>
            ))}
          </div>
          <p style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center', fontSize: '0.875rem', color: 'var(--color-text-secondary, #6b7280)', lineHeight: 1.7 }}>
            Individual results vary. Clinical trial results reflect outcomes under controlled conditions with dose titration protocols. Weight regain is common if medication is discontinued without concurrent lifestyle modification — which is why our program emphasizes both.
          </p>
        </div>
      </section>

      {/* ── Process ────────────────────────────────────────────────────── */}
      <section className={styles.processSection} aria-labelledby="process-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">Getting started</p>
            <h2 id="process-heading" className="ds-h2">How the program works — step by step</h2>
            <p className="ds-lede" style={{ marginTop: 'var(--space-2)' }}>
              From first appointment to long-term maintenance, here is exactly what to expect.
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

      {/* ── Safety Information ─────────────────────────────────────────── */}
      <section aria-labelledby="safety-heading" style={{ background: 'var(--color-surface-warning, #fffbeb)', borderTop: '1px solid var(--color-border, #e5e7eb)', borderBottom: '1px solid var(--color-border, #e5e7eb)', padding: 'var(--space-12, 3rem) 0' }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">Important safety information</p>
            <h2 id="safety-heading" className="ds-h2">What you should know before starting</h2>
          </div>
          <div style={{ maxWidth: '780px', margin: '0 auto', display: 'grid', gap: 'var(--space-5, 1.25rem)', fontSize: '0.95rem', lineHeight: 1.75 }}>
            <p>
              <strong>Thyroid tumors:</strong> GLP-1 receptor agonists, including semaglutide and tirzepatide, caused thyroid C-cell tumors in rodent studies. It is unknown whether these findings apply to humans. These medications should not be used in patients with a personal or family history of medullary thyroid carcinoma or MEN 2.
            </p>
            <p>
              <strong>Pancreatitis:</strong> Acute pancreatitis, including fatal and non-fatal hemorrhagic or necrotizing pancreatitis, has been reported in patients treated with GLP-1 receptor agonists. Discontinue use and seek care immediately if you experience persistent severe abdominal pain.
            </p>
            <p>
              <strong>Hypoglycemia:</strong> When used without insulin or sulfonylureas, GLP-1 agonists have a low risk of hypoglycemia in non-diabetic patients. Risk increases if combined with other glucose-lowering agents — inform your provider of all medications.
            </p>
            <p>
              <strong>Gastrointestinal risk:</strong> GLP-1 medications slow gastric emptying. Patients scheduled for surgery requiring anesthesia should inform their surgical team, as aspiration risk may be elevated. Your provider will advise on pre-procedure management.
            </p>
            <p style={{ fontSize: '0.825rem', color: 'var(--color-text-secondary, #6b7280)' }}>
              This summary does not replace the full prescribing information. Your WeCare physician will review the complete risk profile with you at your consultation. Always report new or worsening symptoms promptly.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────── */}
      <section className={styles.faqSection} aria-labelledby="faq-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">Common questions</p>
            <h2 id="faq-heading" className="ds-h2">Medical weight loss FAQs</h2>
            <p className="ds-lede" style={{ marginTop: 'var(--space-2)' }}>
              Straight answers to the questions we hear most often from patients in Brandon, FL and the surrounding area.
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

      {/* ── Insurance strip ────────────────────────────────────────────── */}
      <div className={styles.insuranceStrip} role="complementary" aria-label="Insurance accepted">
        <p className={styles.insuranceText}>Insurance accepted — GLP-1 medication coverage may apply. Uninsured patients welcome.</p>
        <p className={styles.insuranceNames}>Aetna · United Healthcare · Medicare · Blue Cross Blue Shield · MultiPlan</p>
      </div>

      <RelatedServices currentSlug="medical-weight-loss" />

      <BookingCTA
        heading="Ready to start your weight loss journey in Brandon, FL?"
        subtext="Book a consultation with our medical weight loss team. Same-week appointments available in our Brandon, FL clinic or via telehealth. We will verify your insurance and give you a transparent cost breakdown before you commit to anything."
      />
    </>
  );
}
