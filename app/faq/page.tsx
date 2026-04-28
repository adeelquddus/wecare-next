import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import BookingCTA from '@/components/sections/BookingCTA';
import { CLINIC } from '@/lib/clinic';
import {
  CalendarIcon, CardIcon, MedicalCrossIcon, LaptopIcon, ShieldIcon, StethoscopeIcon,
} from '@/components/ui/AnimatedIcons';
import type { IconProps } from '@/components/ui/AnimatedIcons';
import React from 'react';
import styles from './page.module.css';

/* ── Metadata ────────────────────────────────────────────────────────────
   Comprehensive set: title, description, robust keyword list (long-tail
   + local + service + condition modifiers), canonical, Open Graph card,
   Twitter card, robots directives.
   ────────────────────────────────────────────────────────────────────── */
const SITE = 'https://www.wecarewellnessclinic.com';
const OG_IMAGE = `${SITE}/hero-image.png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: 'FAQ - Appointments, Insurance, GLP-1, Telehealth | WeCare Wellness Clinic Brandon FL',
  description:
    'Answers to the most common questions about WeCare Wellness Clinic in Brandon, FL - appointments, insurance, GLP-1 weight loss (Semaglutide / Tirzepatide), telehealth across Florida, HIV PrEP, women\'s and men\'s health, hormone therapy, and same-week availability.',
  keywords: [
    /* Brand + page */
    'WeCare Wellness Clinic FAQ',
    'WeCare Wellness Clinic questions',
    'frequently asked questions WeCare Wellness',
    /* Local - Brandon FL */
    'primary care FAQ Brandon FL',
    'doctor FAQ Brandon Florida',
    'medical clinic Brandon FL questions',
    'how to book appointment Brandon FL',
    'same day doctor Brandon FL',
    'walk-in clinic Brandon FL',
    /* Insurance */
    'does WeCare accept Aetna',
    'does WeCare accept United Healthcare',
    'does WeCare accept Medicare',
    'does WeCare accept Blue Cross Blue Shield',
    'does WeCare accept MultiPlan',
    'does WeCare accept Tricare',
    'self-pay primary care Brandon FL',
    'uninsured doctor Brandon FL',
    /* GLP-1 / Weight loss */
    'GLP-1 weight loss FAQ',
    'Semaglutide questions Brandon FL',
    'Tirzepatide questions Brandon FL',
    'Ozempic Wegovy weight loss Brandon FL',
    'Mounjaro Zepbound Brandon FL',
    'medical weight loss program FAQ',
    /* Telehealth */
    'telehealth Florida questions',
    'online doctor Florida FAQ',
    'video doctor visit Brandon FL',
    'virtual urgent care Florida',
    /* PrEP / Sexual health */
    'PrEP clinic Brandon FL questions',
    'HIV PrEP telehealth Florida',
    'STI testing Brandon FL',
    'confidential sexual health Brandon FL',
    /* Women / Men */
    "women's health FAQ Brandon FL",
    "men's health FAQ Brandon FL",
    'menopause management Brandon FL',
    'TRT testosterone replacement Brandon FL',
    'hormone replacement therapy questions',
  ],
  alternates: { canonical: '/faq' },
  openGraph: {
    title: 'FAQ - WeCare Wellness Clinic | Brandon, FL',
    description:
      'Answers to common patient questions about appointments, insurance, GLP-1 weight loss, telehealth, PrEP, women\'s and men\'s health at WeCare Wellness Clinic.',
    url: `${SITE}/faq`,
    siteName: 'WeCare Wellness Clinic',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'WeCare Wellness Clinic - frequently asked questions for patients in Brandon, FL',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WeCare Wellness Clinic - FAQ',
    description:
      'Common questions about appointments, insurance, GLP-1 weight loss, telehealth, PrEP, and more.',
    images: [OG_IMAGE],
    site: '@WeCareWellness',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  category: 'Health',
};

/* ── Data ────────────────────────────────────────────────────────────── */

interface FaqEntry {
  q: string;
  a: string;
}

interface FaqSection {
  category: string;
  /** kebab-case anchor id - derived once and reused for both nav + section */
  slug: string;
  Icon: React.FC<IconProps>;
  /** Short context string used for aria-label on the section */
  context: string;
  faqs: FaqEntry[];
}

function slugify(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

const FAQ_SECTIONS: FaqSection[] = [
  {
    category: 'Appointments & Availability',
    slug: 'appointments',
    Icon: CalendarIcon,
    context: 'Booking, walk-ins, hours, what to bring',
    faqs: [
      {
        q: 'How do I book an appointment at WeCare Wellness Clinic?',
        a: 'You can book online 24/7 through our booking page, call us at (813) 438-5220 during office hours, or walk in based on availability. Same-week appointments are typically available for most services.',
      },
      {
        q: 'Do you accept walk-in patients?',
        a: 'Yes - we welcome walk-ins based on daily availability. To guarantee your time slot and avoid waiting, we recommend booking online or by phone in advance.',
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
    slug: 'insurance',
    Icon: CardIcon,
    context: 'Accepted plans, self-pay, preventive coverage, verification',
    faqs: [
      {
        q: 'What insurance plans do you accept?',
        a: 'We currently accept Aetna, United Healthcare, Medicare, Blue Cross Blue Shield (Florida Blue), MultiPlan/PHCS, and Tricare. We are continually adding new plans - call us to verify your specific plan.',
      },
      {
        q: 'Do you offer self-pay rates?',
        a: 'Yes. We offer transparent, affordable self-pay rates for uninsured or underinsured patients. Our team will explain costs upfront before your visit so there are no surprises.',
      },
      {
        q: 'Are annual wellness exams covered at no cost?',
        a: 'Under the Affordable Care Act, most insurance plans cover annual wellness exams, preventive screenings, and well-woman visits at 100% - meaning no copay for you. Confirm with your specific plan\'s Summary of Benefits.',
      },
      {
        q: 'Do you accept Medicaid?',
        a: 'We currently do not accept Florida Medicaid. However, our self-pay rates are often more affordable than patients expect. Call us to discuss your options.',
      },
      {
        q: 'How do I verify my insurance before visiting?',
        a: 'Call our office at (813) 438-5220 and have your insurance card handy. Our team will verify your benefits, copay, and deductibles before your appointment - at no charge.',
      },
    ],
  },
  {
    category: 'GLP-1 & Medical Weight Loss',
    slug: 'glp1-weight-loss',
    Icon: MedicalCrossIcon,
    context: 'Semaglutide, Tirzepatide, eligibility, costs, what is included',
    faqs: [
      {
        q: 'Do you prescribe Semaglutide (Ozempic / Wegovy) and Tirzepatide (Mounjaro / Zepbound)?',
        a: 'Yes. Our physicians prescribe Semaglutide and Tirzepatide as part of our supervised Medical Weight Loss program. All prescriptions include ongoing clinical support, monthly provider check-ins, and lab monitoring.',
      },
      {
        q: 'Does insurance cover GLP-1 medications for weight loss?',
        a: 'Coverage varies. Semaglutide and Tirzepatide are often covered for Type 2 diabetes under brand names Ozempic and Mounjaro. Coverage for weight loss specifically depends on your plan. We help patients navigate prior authorizations and appeal denials. Self-pay and compounded options are also available.',
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
    slug: 'telehealth',
    Icon: LaptopIcon,
    context: 'Online visits, what telehealth treats, insurance, technology',
    faqs: [
      {
        q: 'Can I see a doctor online with WeCare?',
        a: 'Yes - we offer telehealth video visits with board-certified providers for patients anywhere in Florida. Same-day telehealth slots are often available.',
      },
      {
        q: 'What conditions can be treated via telehealth?',
        a: 'Telehealth is suitable for non-emergency concerns including chronic condition follow-ups, prescription refills, mental health check-ins, lab result reviews, cold and flu symptoms, UTIs, skin concerns, and more.',
      },
      {
        q: 'Does insurance cover telehealth visits?',
        a: 'Yes - most major insurance plans we accept cover telehealth visits. Medicare also covers most telehealth primary care services. Copays may apply.',
      },
      {
        q: 'What do I need for a telehealth visit?',
        a: 'You need a smartphone, tablet, or computer with a camera and microphone, and a stable internet connection. We will send you a secure link before your appointment.',
      },
    ],
  },
  {
    category: 'HIV PrEP & Sexual Health',
    slug: 'prep-sexual-health',
    Icon: ShieldIcon,
    context: 'PrEP prescriptions, insurance coverage, telehealth PrEP, confidentiality',
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
        a: 'Yes - we manage PrEP remotely for patients anywhere in Florida via telehealth, including prescription management and lab coordination.',
      },
      {
        q: 'Is my visit confidential?',
        a: 'Absolutely. All sexual health care at WeCare is strictly confidential. Our providers offer judgment-free, compassionate care for every patient.',
      },
    ],
  },
  {
    category: "Women's & Men's Health",
    slug: 'womens-mens-health',
    Icon: StethoscopeIcon,
    context: 'Gynecology, TRT, menopause, hormone therapy',
    faqs: [
      {
        q: 'Do you offer gynecology services?',
        a: 'Yes - we provide annual well-woman exams, Pap smears, cervical cancer screening, contraception counseling, hormone replacement therapy, and menopause management.',
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

/* ── JSON-LD ──────────────────────────────────────────────────────────── */

const allFaqEntities = FAQ_SECTIONS.flatMap((section) =>
  section.faqs.map((faq) => ({
    '@type': 'Question' as const,
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer' as const,
      text: faq.a,
    },
  }))
);

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    /* Tells Google this is a WebPage that lives inside a MedicalBusiness.
       Linking the FAQPage to the WebPage lets the schema chain be discovered
       in one fetch. */
    {
      '@type': 'WebPage',
      '@id': `${SITE}/faq#webpage`,
      url: `${SITE}/faq`,
      name: 'FAQ - WeCare Wellness Clinic',
      description:
        'Answers to common patient questions about WeCare Wellness Clinic in Brandon, FL.',
      isPartOf: { '@id': `${SITE}/#website` },
      about: { '@id': `${SITE}/#clinic` },
      primaryImageOfPage: { '@id': `${SITE}/faq#primaryimage` },
      breadcrumb: { '@id': `${SITE}/faq#breadcrumb` },
      inLanguage: 'en-US',
      datePublished: '2026-01-01',
      dateModified: '2026-04-28',
    },
    {
      '@type': 'ImageObject',
      '@id': `${SITE}/faq#primaryimage`,
      url: OG_IMAGE,
      contentUrl: OG_IMAGE,
      width: 1200,
      height: 630,
      caption: 'WeCare Wellness Clinic - frequently asked questions',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE}/faq#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'FAQ',  item: `${SITE}/faq` },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE}/faq#faqpage`,
      mainEntity: allFaqEntities,
      isPartOf: { '@id': `${SITE}/faq#webpage` },
      about: { '@id': `${SITE}/#clinic` },
    },
    /* Provide the WebSite identity for sitelinks-search-box eligibility */
    {
      '@type': 'WebSite',
      '@id': `${SITE}/#website`,
      url: SITE,
      name: 'WeCare Wellness Clinic',
      publisher: { '@id': `${SITE}/#clinic` },
      inLanguage: 'en-US',
    },
  ],
};

/* ── Page ──────────────────────────────────────────────────────────────── */

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Hero
        headline="Your questions, answered"
        subtext="Everything you need to know about appointments, insurance, GLP-1 weight loss, telehealth, PrEP, and more - before you even call us."
        ctaLabel="Book an Appointment"
        ctaHref="/booking"
        secondaryLabel={`Call ${CLINIC.phoneDisplay}`}
        secondaryHref={`tel:${CLINIC.phone}`}
        badgeText="Patient FAQ"
        variant="light"
      />

      <section className={styles.faqPage} id="faq-content">
        <div className="container">
          {/* Sticky category nav */}
          <nav className={styles.catNav} aria-label="Jump to FAQ category">
            {FAQ_SECTIONS.map((section) => {
              const SecIcon = section.Icon;
              return (
                <a
                  key={section.slug}
                  href={`#${section.slug}`}
                  className={styles.catLink}
                >
                  <SecIcon size={18} animate={false} />
                  <span>{section.category}</span>
                </a>
              );
            })}
          </nav>

          {/* Categorised FAQ sections */}
          <div className={styles.sections}>
            {FAQ_SECTIONS.map((section) => {
              const SecIcon = section.Icon;
              const headingId = `heading-${section.slug}`;
              return (
                <section
                  key={section.slug}
                  id={section.slug}
                  className={styles.section}
                  aria-labelledby={headingId}
                >
                  <header className={styles.sectionHeader}>
                    <span className={styles.sectionIcon} aria-hidden="true">
                      <SecIcon size={28} />
                    </span>
                    <h2 id={headingId} className={styles.sectionTitle}>
                      {section.category}
                    </h2>
                  </header>

                  <ul className={styles.faqList} role="list">
                    {section.faqs.map((faq, idx) => (
                      <li
                        key={faq.q}
                        className={styles.faqItem}
                        itemScope
                        itemType="https://schema.org/Question"
                      >
                        <span
                          className={styles.qBadge}
                          aria-hidden="true"
                          title={`Question ${idx + 1} in ${section.category}`}
                        >
                          Q
                        </span>
                        <div className={styles.faqBody}>
                          <h3 className={styles.question} itemProp="name">
                            {faq.q}
                          </h3>
                          <div
                            itemScope
                            itemProp="acceptedAnswer"
                            itemType="https://schema.org/Answer"
                          >
                            <p className={styles.answer} itemProp="text">
                              {faq.a}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>

          {/* Still have questions CTA */}
          <aside className={styles.ctaStrip} aria-labelledby="cta-heading">
            <div className={styles.ctaContent}>
              <h2 id="cta-heading" className={styles.ctaHeading}>
                Still have a question?
              </h2>
              <p className={styles.ctaBody}>
                Our team is happy to help. Call us at{' '}
                <a href={`tel:${CLINIC.phone}`} className={styles.ctaPhone}>
                  {CLINIC.phoneDisplay}
                </a>{' '}
                or send us a message - we typically reply within one business day.
              </p>
              <div className={styles.ctaActions}>
                <Link href="/booking" className={styles.ctaBtnPrimary}>
                  Book an Appointment
                </Link>
                <Link href="/contact" className={styles.ctaBtnOutline}>
                  Send a Message
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <BookingCTA
        heading="Ready to get started?"
        subtext="Same-week appointments available in-person or via telehealth across Florida."
      />
    </>
  );
}
