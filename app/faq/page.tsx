import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import BookingCTA from '@/components/sections/BookingCTA';
import { CLINIC } from '@/lib/clinic';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'FAQ — WeCare Wellness Clinic Brandon, FL',
  description:
    'Answers to common questions about appointments, insurance, GLP-1 weight loss, telehealth, PrEP, women\'s health and more at WeCare Wellness Clinic in Brandon, FL.',
  keywords: [
    'FAQ WeCare Wellness Clinic',
    'how to book appointment Brandon FL',
    'does WeCare accept insurance',
    'GLP-1 semaglutide questions Brandon FL',
    'telehealth Florida questions',
    'PrEP clinic Brandon FL questions',
    'same day appointment Brandon FL',
    'primary care FAQ Brandon FL',
  ],
  alternates: { canonical: 'https://www.wecarewellnessclinic.com/faq' },
  openGraph: {
    title: 'Frequently Asked Questions — WeCare Wellness Clinic',
    description: 'Common questions about appointments, insurance, GLP-1, telehealth, and more at WeCare in Brandon, FL.',
    url: 'https://www.wecarewellnessclinic.com/faq',
    type: 'website',
  },
};

const FAQ_SECTIONS = [
  {
    category: 'Appointments & Availability',
    icon: '📅',
    faqs: [
      {
        q: 'How do I book an appointment at WeCare Wellness Clinic?',
        a: 'You can book online 24/7 through our booking page, call us at (813) 438-5220 during office hours, or walk in based on availability. Same-week appointments are typically available for most services.',
      },
      {
        q: 'Do you accept walk-in patients?',
        a: 'Yes — we welcome walk-ins based on daily availability. To guarantee your time slot and avoid waiting, we recommend booking online or by phone in advance.',
      },
      {
        q: 'Are same-day appointments available?',
        a: 'Same-day appointments are often available for acute illness, urgent concerns, and telehealth visits. Call us at (813) 438-5220 first thing in the morning for the best chance of a same-day slot.',
      },
      {
        q: 'What are your hours?',
        a: 'We are open Monday–Thursday 9 AM–5 PM, Friday 9 AM–6 PM, and Saturday 9 AM–1 PM. We are closed on Sundays. Our extended Friday hours and Saturday clinic make us one of the most accessible primary care providers in Brandon.',
      },
      {
        q: 'What should I bring to my first appointment?',
        a: 'Please bring a valid photo ID, your insurance card (if applicable), a list of any current medications, and your medical history if you have it. Arriving 10 minutes early helps us get you checked in smoothly.',
      },
    ],
  },
  {
    category: 'Insurance & Billing',
    icon: '💳',
    faqs: [
      {
        q: 'What insurance plans do you accept?',
        a: 'We currently accept Aetna, United Healthcare, Medicare, Blue Cross Blue Shield (Florida Blue), and MultiPlan/PHCS. We are continually adding new plans — call us to verify your specific plan.',
      },
      {
        q: 'Do you offer self-pay rates?',
        a: 'Yes. We offer transparent, affordable self-pay rates for uninsured or underinsured patients. Our team will explain costs upfront before your visit so there are no surprises.',
      },
      {
        q: 'Are annual wellness exams covered at no cost?',
        a: 'Under the Affordable Care Act, most insurance plans cover annual wellness exams, preventive screenings, and well-woman visits at 100% — meaning no copay for you. Confirm with your specific plan\'s Summary of Benefits.',
      },
      {
        q: 'Do you accept Medicaid?',
        a: 'We currently do not accept Florida Medicaid. However, our self-pay rates are often more affordable than patients expect. Call us to discuss your options.',
      },
      {
        q: 'How do I verify my insurance before visiting?',
        a: 'Call our office at (813) 438-5220 and have your insurance card handy. Our team will verify your benefits, copay, and deductibles before your appointment — at no charge.',
      },
    ],
  },
  {
    category: 'GLP-1 & Medical Weight Loss',
    icon: '⚕️',
    faqs: [
      {
        q: 'Do you prescribe Semaglutide (Ozempic / Wegovy) and Tirzepatide (Mounjaro / Zepbound)?',
        a: 'Yes. Our physicians prescribe Semaglutide and Tirzepatide as part of our supervised Medical Weight Loss program. All prescriptions include ongoing clinical support, monthly provider check-ins, and lab monitoring.',
      },
      {
        q: 'Does insurance cover GLP-1 medications for weight loss?',
        a: 'Coverage varies. Semaglutide and tirzepatide are often covered for Type 2 diabetes under brand names Ozempic and Mounjaro. Coverage for weight loss specifically depends on your plan. We help patients navigate prior authorizations and appeal denials. Self-pay and compounded options are also available.',
      },
      {
        q: 'How much does the Medical Weight Loss program cost?',
        a: 'Program costs depend on your insurance coverage and the specific medication. During your initial consultation, we will give you a clear breakdown of costs before you commit to anything.',
      },
      {
        q: 'What is included in the Medical Weight Loss program?',
        a: 'Our program includes a comprehensive intake evaluation, body composition analysis, physician-supervised medication management, nutrition guidance, monthly check-in visits, and ongoing lab monitoring to ensure your safety and progress.',
      },
      {
        q: 'Am I a candidate for GLP-1 therapy?',
        a: 'Most adults with a BMI of 27+ with a weight-related condition, or BMI of 30+ regardless of other conditions, may qualify. A physician evaluation is required. Book a weight loss consultation to find out.',
      },
    ],
  },
  {
    category: 'Telehealth',
    icon: '💻',
    faqs: [
      {
        q: 'Can I see a doctor online with WeCare?',
        a: 'Yes — we offer telehealth video visits with board-certified providers for patients anywhere in Florida. Same-day telehealth slots are often available.',
      },
      {
        q: 'What conditions can be treated via telehealth?',
        a: 'Telehealth is suitable for non-emergency concerns including chronic condition follow-ups, prescription refills, mental health check-ins, lab result reviews, cold and flu symptoms, UTIs, skin concerns, and more.',
      },
      {
        q: 'Does insurance cover telehealth visits?',
        a: 'Yes — most major insurance plans we accept cover telehealth visits. Medicare also covers most telehealth primary care services. Copays may apply.',
      },
      {
        q: 'What do I need for a telehealth visit?',
        a: 'You need a smartphone, tablet, or computer with a camera and microphone, and a stable internet connection. We will send you a secure link before your appointment.',
      },
    ],
  },
  {
    category: 'HIV PrEP & Sexual Health',
    icon: '🛡️',
    faqs: [
      {
        q: 'Do you prescribe PrEP (pre-exposure prophylaxis) in Brandon, FL?',
        a: 'Yes. We prescribe Truvada, Descovy, and can consult on injectable Apretude (cabotegravir). We also offer comprehensive STI screening, HIV testing, and hepatitis testing in a confidential, judgment-free environment.',
      },
      {
        q: 'Is PrEP covered by insurance?',
        a: 'Under federal law, most insurance plans must cover PrEP at no cost to the patient, including the medication and the required labs and follow-up visits. We will verify your coverage before your appointment.',
      },
      {
        q: 'Can I get PrEP via telehealth?',
        a: 'Yes — we manage PrEP remotely for patients anywhere in Florida via telehealth, including prescription management and lab coordination.',
      },
      {
        q: 'Is my visit confidential?',
        a: 'Absolutely. All sexual health care at WeCare is strictly confidential. Our providers offer judgment-free, compassionate care for every patient.',
      },
    ],
  },
  {
    category: "Women's & Men's Health",
    icon: '🩺',
    faqs: [
      {
        q: 'Do you offer gynecology services?',
        a: 'Yes — we provide annual well-woman exams, Pap smears, cervical cancer screening, contraception counseling, hormone replacement therapy, and menopause management.',
      },
      {
        q: 'Do you offer testosterone replacement therapy (TRT)?',
        a: 'Yes. Our men\'s health program includes testosterone replacement therapy, cardiovascular screening, prostate health monitoring, and sexual health services including ED treatment.',
      },
      {
        q: 'Do you manage menopause symptoms?',
        a: 'Yes. We offer evidence-based hormone replacement therapy (HRT) and non-hormonal options to manage hot flashes, sleep disturbances, mood changes, and other menopause-related symptoms.',
      },
    ],
  },
];

// Build FAQPage schema from all Q&A pairs
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_SECTIONS.flatMap((section) =>
    section.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    }))
  ),
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.wecarewellnessclinic.com' },
    { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://www.wecarewellnessclinic.com/faq' },
  ],
};

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <Hero
        headline="Your questions, answered"
        subtext="Everything you need to know about appointments, insurance, GLP-1 weight loss, telehealth, PrEP, and more — before you even call us."
        ctaLabel="Book an Appointment"
        ctaHref="/booking"
        secondaryLabel={`Call ${CLINIC.phoneDisplay}`}
        secondaryHref={`tel:${CLINIC.phone}`}
        badgeText="Comprehensive FAQ"
        variant="light"
      />

      <section className={styles.faqPage}>
        <div className="container">
          {/* Category nav */}
          <nav className={styles.catNav} aria-label="FAQ categories">
            {FAQ_SECTIONS.map((section) => (
              <a
                key={section.category}
                href={`#${section.category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                className={styles.catLink}
              >
                <span aria-hidden="true">{section.icon}</span>
                {section.category}
              </a>
            ))}
          </nav>

          {/* FAQ sections */}
          <div className={styles.sections}>
            {FAQ_SECTIONS.map((section) => (
              <section
                key={section.category}
                id={section.category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                className={styles.section}
                aria-labelledby={`heading-${section.category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
              >
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionIcon} aria-hidden="true">{section.icon}</span>
                  <h2
                    id={`heading-${section.category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                    className={styles.sectionTitle}
                  >
                    {section.category}
                  </h2>
                </div>

                <dl className={styles.faqList}>
                  {section.faqs.map((faq) => (
                    <div key={faq.q} className={styles.faqItem}>
                      <dt className={styles.question}>{faq.q}</dt>
                      <dd className={styles.answer}>{faq.a}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            ))}
          </div>

          {/* Still have questions CTA */}
          <div className={styles.ctaStrip} role="complementary">
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaHeading}>Still have a question?</h2>
              <p className={styles.ctaBody}>
                Our team is happy to help. Call us at{' '}
                <a href={`tel:${CLINIC.phone}`} className={styles.ctaPhone}>{CLINIC.phoneDisplay}</a>
                {' '}or send us a message.
              </p>
              <div className={styles.ctaActions}>
                <Link href="/booking" className={styles.ctaBtnPrimary}>Book an Appointment</Link>
                <Link href="/contact" className={styles.ctaBtnOutline}>Send a Message</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingCTA
        heading="Ready to get started?"
        subtext="Same-week appointments available in-person or via telehealth across Florida."
      />
    </>
  );
}
