import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import BookingCTA from '@/components/sections/BookingCTA';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: "Women's Health & Gynecology in Brandon, FL — WeCare Wellness Clinic",
  description:
    "Compassionate women's health care in Brandon, FL. Annual well-woman exams, pap smears, hormone therapy, menopause management, contraception counseling & more. Most insurance accepted.",
  alternates: { canonical: 'https://www.wecarewellnessclinic.com/womens-health' },
  openGraph: {
    title: "Women's Health — WeCare Wellness Clinic | Brandon, FL",
    description: "Complete gynecological & women's wellness care. Annual exams, hormone balancing, menopause management.",
    url: 'https://www.wecarewellnessclinic.com/womens-health',
  },
};

const BENEFITS = [
  {
    icon: '🌸',
    title: 'Annual well-woman exams',
    desc: 'Comprehensive gynecological checkups including pelvic exam, breast exam, and health screenings.',
  },
  {
    icon: '🔬',
    title: 'Pap smears & cervical screening',
    desc: 'Routine cervical cancer screening with timely results and follow-up guidance.',
  },
  {
    icon: '⚖️',
    title: 'Hormone replacement therapy',
    desc: 'Personalized HRT plans to manage menopause symptoms, hot flashes, mood changes, and bone health.',
  },
  {
    icon: '💊',
    title: 'Contraception counseling',
    desc: 'Explore your birth control options — oral contraceptives, IUDs, implants, and more.',
  },
  {
    icon: '🌡️',
    title: 'Menopause management',
    desc: 'Evidence-based care to ease the transition through perimenopause and menopause.',
  },
  {
    icon: '🧪',
    title: 'STI testing & treatment',
    desc: 'Confidential, compassionate STI screening and treatment in a judgment-free environment.',
  },
];

const PROCESS = [
  { num: 1, title: 'Schedule online', desc: 'Book a well-woman, new patient, or specialist visit at your convenience.' },
  { num: 2, title: 'Meet your provider', desc: 'Talk openly with our experienced women\'s health team about your concerns.' },
  { num: 3, title: 'Get your personalized plan', desc: 'Leave with a clear, customized care plan and any prescriptions or referrals needed.' },
  { num: 4, title: 'Ongoing support', desc: 'We\'re here between visits — call, message, or book a quick telehealth follow-up.' },
];

const FAQS = [
  {
    q: 'How often should I have a well-woman exam?',
    a: 'Most women should have an annual well-woman exam. This includes a physical, breast exam, and discussion of any health concerns. Pap smears are recommended every 3 years for women 21–65.',
  },
  {
    q: 'Do you manage menopause symptoms?',
    a: 'Yes. We offer hormone replacement therapy (HRT), lifestyle counseling, and non-hormonal options to help you feel your best through perimenopause and menopause.',
  },
  {
    q: 'What contraception options do you offer?',
    a: 'We discuss and prescribe a full range of contraceptive options including birth control pills, patches, rings, Depo-Provera, and can refer for IUD or implant placement.',
  },
  {
    q: 'Is STI testing confidential?',
    a: 'Absolutely. All STI testing and results are handled with complete confidentiality and compassion — no judgment, ever.',
  },
  {
    q: 'Can I get my labs done at your office?',
    a: 'Yes. We offer in-house lab draws for hormone panels, STI screening, thyroid tests, and more so you don\'t have to visit a separate facility.',
  },
  {
    q: 'Do you accept my insurance for women\'s health visits?',
    a: 'We accept Aetna, United Healthcare, Medicare, Blue Cross Blue Shield, and MultiPlan. Many preventive services, like annual well-woman exams, are covered at no cost under ACA guidelines.',
  },
];

export default function WomensHealthPage() {
  return (
    <>
      <Hero
        headline="Women's health care you can count on"
        subtext="Compassionate, evidence-based gynecology and wellness care for women at every stage of life — annual exams, hormones, menopause management, and more."
        ctaLabel="Book a Visit"
        ctaHref="/booking"
        secondaryLabel="Call us"
        secondaryHref="tel:+18134385220"
        badgeText="Accepting new patients"
        variant="gradient"
      />

      {/* Intro */}
      <section className={styles.intro} aria-labelledby="intro-heading">
        <div className="container">
          <div className={styles.introGrid}>
            <div>
              <p className={styles.introLabel}>Gynecology & women's wellness</p>
              <h2 id="intro-heading" className={styles.introHeading}>
                A practice that listens to women
              </h2>
              <p className={styles.introBody}>
                WeCare Wellness Clinic provides a full spectrum of women's health services in a warm, respectful environment. Whether you need a routine annual exam, help navigating menopause, or guidance on family planning, our providers take the time to understand your body and your goals.
              </p>
              <p className={styles.introBody}>
                We treat women of all ages — from adolescents navigating their first exam to women managing post-menopausal health. Our team combines medical expertise with genuine compassion.
              </p>
              <ul className={styles.featuresList} role="list">
                {[
                  'Annual well-woman exams',
                  'Pap smears & cervical cancer screening',
                  'Hormone replacement therapy (HRT)',
                  'Contraception counseling & prescriptions',
                  'Menopause & perimenopause management',
                  'STI testing & treatment',
                ].map((f) => (
                  <li key={f} className={styles.featuresListItem}>
                    <span className={styles.checkIcon} aria-hidden="true">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.statsPanel} aria-label="Quick facts">
              {[
                { value: '4.9★', label: 'Average patient rating' },
                { value: 'Same week', label: 'Appointment availability' },
                { value: 'All ages', label: 'Adolescent to post-menopause' },
                { value: 'Telehealth', label: 'Available statewide in FL' },
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
            <p className="ds-eyebrow">What we offer</p>
            <h2 id="benefits-heading" className="ds-h2">Women's health services</h2>
            <p className="ds-lede" style={{ marginTop: 'var(--space-2)' }}>
              Comprehensive gynecological and wellness care tailored to your life stage and personal health goals.
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
            <h2 id="process-heading" className="ds-h2">What to expect</h2>
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
            <h2 id="faq-heading" className="ds-h2">Women's health FAQs</h2>
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
        <p className={styles.insuranceText}>Insurance accepted</p>
        <p className={styles.insuranceNames}>Aetna · United Healthcare · Medicare · Blue Cross Blue Shield · MultiPlan</p>
      </div>

      <BookingCTA
        heading="Take care of your health today"
        subtext="Our women's health team is ready to see you. Same-week appointments available in Brandon, FL."
      />
    </>
  );
}
