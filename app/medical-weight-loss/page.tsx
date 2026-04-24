import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import BookingCTA from '@/components/sections/BookingCTA';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Medical Weight Loss — Semaglutide & Tirzepatide in Brandon, FL | WeCare Wellness',
  description:
    'Physician-supervised medical weight loss in Brandon, FL. Semaglutide (Ozempic/Wegovy), Tirzepatide (Mounjaro/Zepbound), GLP-1 therapy, nutrition guidance & ongoing clinical support. Insurance may apply.',
  alternates: { canonical: 'https://www.wecarewellnessclinic.com/medical-weight-loss' },
  openGraph: {
    title: 'Medical Weight Loss (Semaglutide/Tirzepatide) — WeCare Wellness | Brandon, FL',
    description: 'GLP-1, Semaglutide & Tirzepatide weight loss programs supervised by board-certified physicians.',
    url: 'https://www.wecarewellnessclinic.com/medical-weight-loss',
  },
};

const BENEFITS = [
  {
    icon: '💉',
    title: 'Semaglutide (GLP-1)',
    desc: 'The active ingredient in Ozempic® and Wegovy® — proven to reduce appetite and promote significant, sustained weight loss.',
  },
  {
    icon: '⚕️',
    title: 'Tirzepatide (GIP/GLP-1)',
    desc: 'The dual-agonist in Mounjaro® and Zepbound® — clinically shown to produce even greater weight loss than single GLP-1 medications.',
  },
  {
    icon: '🔬',
    title: 'Lab monitoring included',
    desc: 'Regular bloodwork to track metabolic health, kidney function, thyroid, and ensure your program is safe and effective.',
  },
  {
    icon: '🥗',
    title: 'Nutrition guidance',
    desc: 'Practical, realistic nutrition counseling to complement your medication and build habits that last long-term.',
  },
  {
    icon: '📅',
    title: 'Monthly provider check-ins',
    desc: 'Regular one-on-one appointments with your physician to review progress, adjust dosing, and keep you on track.',
  },
  {
    icon: '📊',
    title: 'Body composition analysis',
    desc: 'Track fat loss vs. lean mass to ensure your weight loss is healthy and sustainable.',
  },
];

const PROCESS = [
  { num: 1, title: 'Initial consultation', desc: 'Review your health history, labs, and goals with your physician.' },
  { num: 2, title: 'Personalized program', desc: 'Receive a custom medication, dosing, and nutrition plan.' },
  { num: 3, title: 'Start your program', desc: 'Begin your GLP-1 therapy with full guidance on administration and side effects.' },
  { num: 4, title: 'Monthly monitoring', desc: 'Regular check-ins and lab reviews ensure progress and safety throughout.' },
];

const FAQS = [
  {
    q: 'Am I a candidate for GLP-1 weight loss therapy?',
    a: 'GLP-1 medications are typically prescribed for adults with a BMI of 30+ or 27+ with a weight-related condition (diabetes, hypertension, etc.). An initial consultation will determine if you\'re a good candidate.',
  },
  {
    q: 'What is the difference between Semaglutide and Tirzepatide?',
    a: 'Semaglutide (Ozempic/Wegovy) targets the GLP-1 receptor. Tirzepatide (Mounjaro/Zepbound) targets both GLP-1 and GIP receptors, which generally produces greater weight loss but may have different side effect profiles. Your provider will help you decide which is right for you.',
  },
  {
    q: 'Does insurance cover medical weight loss?',
    a: 'Coverage varies by plan. Some insurance plans cover GLP-1 medications when prescribed for type 2 diabetes. We\'ll help verify your benefits and discuss affordable options if not covered.',
  },
  {
    q: 'How much weight can I expect to lose?',
    a: 'Clinical trials show 10–22% average body weight loss over 12–18 months depending on the medication. Individual results vary based on adherence, lifestyle, and starting weight.',
  },
  {
    q: 'Are there side effects?',
    a: 'Common side effects include nausea, decreased appetite, and mild GI symptoms — especially when starting or increasing dose. These typically improve within a few weeks. We guide you through the adjustment period.',
  },
  {
    q: 'Do I need to stay on medication long-term?',
    a: 'Many patients do continue long-term for sustained results. We also work with you on lifestyle modifications so that when you\'re ready to taper, you have the tools to maintain your progress.',
  },
];

export default function MedicalWeightLossPage() {
  return (
    <>
      <Hero
        headline="Science-backed weight loss that actually works"
        subtext="Physician-supervised GLP-1 programs using Semaglutide and Tirzepatide — the same medications behind Ozempic, Wegovy, Mounjaro, and Zepbound — with clinical monitoring and ongoing support."
        ctaLabel="Book a Consultation"
        ctaHref="/booking"
        secondaryLabel="Call us"
        secondaryHref="tel:+18134385220"
        badgeText="GLP-1 programs available"
        variant="gradient"
      />

      {/* Intro */}
      <section className={styles.intro} aria-labelledby="intro-heading">
        <div className="container">
          <div className={styles.introGrid}>
            <div>
              <p className={styles.introLabel}>GLP-1 · Semaglutide · Tirzepatide</p>
              <h2 id="intro-heading" className={styles.introHeading}>
                Medical weight loss — physician supervised
              </h2>
              <p className={styles.introBody}>
                The GLP-1 revolution in weight management is real. At WeCare Wellness Clinic, our physicians create personalized programs using FDA-approved and compounded GLP-1 medications, backed by regular lab monitoring and nutrition support to maximize your results safely.
              </p>
              <p className={styles.introBody}>
                This isn't a diet plan. It's a medically supervised program that addresses the hormonal and metabolic drivers of weight gain — so the results can be long-lasting.
              </p>
              <ul className={styles.featuresList} role="list">
                {[
                  'Semaglutide (Ozempic/Wegovy) programs',
                  'Tirzepatide (Mounjaro/Zepbound) programs',
                  'Body composition analysis',
                  'Nutrition & lifestyle guidance',
                  'Monthly provider check-ins',
                  'Lab monitoring included',
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
                { value: '10–22%', label: 'Average body weight reduction (clinical trials)' },
                { value: 'Monthly', label: 'Provider check-ins included' },
                { value: 'Labs', label: 'Regular monitoring for safety' },
                { value: 'Telehealth', label: 'Follow-up visits available' },
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
            <p className="ds-eyebrow">Program components</p>
            <h2 id="benefits-heading" className="ds-h2">What's included in your program</h2>
            <p className="ds-lede" style={{ marginTop: 'var(--space-2)' }}>
              A complete, physician-managed approach to weight loss — not just a prescription.
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

      {/* Process */}
      <section className={styles.processSection} aria-labelledby="process-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">Getting started</p>
            <h2 id="process-heading" className="ds-h2">How the program works</h2>
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
            <h2 id="faq-heading" className="ds-h2">Medical weight loss FAQs</h2>
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

      <div className={styles.insuranceStrip} role="complementary" aria-label="Insurance accepted">
        <p className={styles.insuranceText}>Insurance accepted — coverage for GLP-1 medications may apply</p>
        <p className={styles.insuranceNames}>Aetna · United Healthcare · Medicare · Blue Cross Blue Shield · MultiPlan</p>
      </div>

      <BookingCTA
        heading="Ready to start your weight loss journey?"
        subtext="Book a consultation with our medical weight loss team. Same-week appointments in Brandon, FL or via telehealth."
      />
    </>
  );
}
