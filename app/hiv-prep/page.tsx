import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import BookingCTA from '@/components/sections/BookingCTA';
import RelatedServices from '@/components/sections/RelatedServices';
import { CLINIC, INSURANCE } from '@/lib/clinic';
import {
  ShieldIcon,
  StethoscopeIcon,
  LockIcon,
  CalendarIcon,
  CardIcon,
  GlobeIcon,
  MicroscopeIcon,
  HandshakeIcon,
  PillsIcon,
  SyringeIcon,
} from '@/components/ui/AnimatedIcons';
import type { IconProps } from '@/components/ui/AnimatedIcons';
import styles from './page.module.css';

/* ── Metadata ─────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'HIV PrEP Prescription & STI Testing Brandon FL - WeCare Wellness Clinic',
  description:
    'HIV PrEP (Truvada/Descovy) prescribed in Brandon, FL. Discreet care, lab monitoring, insurance accepted. Telehealth available statewide in Florida.',
  keywords: [
    'HIV PrEP Brandon FL',
    'PrEP prescription Brandon Florida',
    'Truvada Brandon FL',
    'Descovy Brandon FL',
    'HIV prevention Brandon FL',
    'PrEP clinic near me Brandon',
    'PrEP near Tampa FL',
    'STI testing Brandon FL',
    'sexual health clinic Brandon FL',
    'HIV testing Brandon FL',
    'PrEP telehealth Florida',
    'PrEP doctor Brandon FL',
    'HIV prevention medication Florida',
    'PrEP Riverview FL',
    'gay health clinic Brandon FL',
  ],
  alternates: { canonical: 'https://www.wecarewellnessclinic.com/hiv-prep' },
  openGraph: {
    title: 'HIV PrEP & Sexual Health Care - WeCare Wellness Clinic Brandon, FL',
    description:
      'Discreet, judgment-free HIV PrEP prescriptions and STI testing in Brandon, FL. Same-week appointments, insurance accepted.',
    url: 'https://www.wecarewellnessclinic.com/hiv-prep',
    type: 'website',
  },
};

/* ── Schema ────────────────────────────────────────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalWebPage',
      name: 'HIV PrEP & Sexual Health Services - WeCare Wellness Clinic',
      url: 'https://www.wecarewellnessclinic.com/hiv-prep',
      description:
        'HIV PrEP prescriptions, STI testing, and sexual health services in Brandon, FL. Discreet, compassionate care with board-certified providers.',
      medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
      about: [
        { '@type': 'MedicalTherapy', name: 'HIV Pre-Exposure Prophylaxis (PrEP)' },
        { '@type': 'MedicalProcedure', name: 'STI Screening and Testing' },
        { '@type': 'MedicalTherapy', name: 'HIV Post-Exposure Prophylaxis (PEP)' },
      ],
      provider: {
        '@type': 'MedicalClinic',
        name: 'WeCare Wellness Clinic',
        url: 'https://www.wecarewellnessclinic.com',
        telephone: CLINIC.phone,
        address: {
          '@type': 'PostalAddress',
          streetAddress: CLINIC.addressParts.street,
          addressLocality: CLINIC.addressParts.city,
          addressRegion: CLINIC.addressParts.state,
          postalCode: CLINIC.addressParts.zip,
          addressCountry: CLINIC.addressParts.country,
        },
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is HIV PrEP and how effective is it?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'PrEP (Pre-Exposure Prophylaxis) is a daily medication taken by HIV-negative individuals to prevent HIV infection. When taken consistently, PrEP reduces the risk of getting HIV from sex by approximately 99% and from injection drug use by at least 74%. The CDC recommends PrEP for anyone at substantial risk of HIV. Two FDA-approved PrEP medications are available: Truvada (tenofovir/emtricitabine) and Descovy (tenofovir alafenamide/emtricitabine).',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I get a PrEP prescription in Brandon, FL?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Getting PrEP at WeCare Wellness Clinic is straightforward. Book a same-week appointment online or call (813) 438-5220. At your appointment, our provider will conduct a brief medical evaluation, order required baseline labs (HIV test, kidney function, STI panel), and if you are a good candidate, prescribe PrEP the same day. Follow-up labs and refills every 3 months.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does insurance cover PrEP?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Under the Affordable Care Act, most insurance plans are required to cover PrEP, including the medication and associated lab tests, at no cost to you (zero copay). We accept Aetna, United Healthcare, Medicare, Blue Cross Blue Shield, and MultiPlan. For uninsured patients, the Ready, Set, PrEP program provides free PrEP medication with a valid prescription.',
          },
        },
        {
          '@type': 'Question',
          name: 'Who should consider taking PrEP?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The CDC recommends PrEP for adults and adolescents who are HIV-negative and: have had anal or vaginal sex in the past 6 months with a partner who is HIV-positive or whose status is unknown; do not always use condoms; or have been diagnosed with an STI in the past 6 months. PrEP is also recommended for people who inject drugs and share equipment. PrEP is appropriate for all genders and sexual orientations.',
          },
        },
        {
          '@type': 'Question',
          name: 'What labs are required before starting PrEP?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Before starting PrEP, we order: HIV test (must be HIV-negative), kidney function tests (creatinine, eGFR), hepatitis B test, STI panel (gonorrhea, chlamydia, syphilis), and pregnancy test if applicable. These labs are repeated every 3 months on PrEP to monitor kidney health and confirm HIV-negative status.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is PrEP available via telehealth?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. WeCare Wellness Clinic offers PrEP consultations and follow-up management via telehealth for patients across Florida. Initial labs can be ordered to a LabCorp or Quest near you. After confirming negative labs, PrEP can be prescribed at the telehealth visit and sent to your pharmacy. Call (813) 438-5220 to arrange telehealth PrEP care.',
          },
        },
        {
          '@type': 'Question',
          name: 'What STI testing do you offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We offer comprehensive STI screening including HIV (4th generation antigen/antibody), gonorrhea and chlamydia (urine and/or swab), syphilis (RPR with reflex TPHA), herpes simplex (HSV IgG), hepatitis B and C, and trichomonas. Testing is discreet, confidential, and covered by most major insurance plans for at-risk individuals.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is HIV PEP and when should I take it?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'PEP (Post-Exposure Prophylaxis) is emergency medication taken after a potential HIV exposure. PEP must be started within 72 hours of exposure and taken for 28 days. It is not a substitute for PrEP but is highly effective when started promptly. If you believe you have been exposed to HIV, call our office immediately or go to an emergency room. We can prescribe PEP during urgent same-day or telehealth visits.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is your HIV PrEP service confidential?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutely. Your HIV status, PrEP use, and sexual health history are protected health information under HIPAA. We do not share this information with employers, family members, or anyone not directly involved in your care without your explicit written consent. Our clinic is a judgment-free, inclusive environment for patients of all identities.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take for PrEP to become effective?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For receptive anal sex (bottoming), Truvada reaches maximum protection after 7 days of daily use. For receptive vaginal sex and injection drug use, protection is maximal after 21 days. Truvada and Descovy are not interchangeable in all populations - your WeCare provider will recommend the right medication for your situation.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.wecarewellnessclinic.com' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.wecarewellnessclinic.com/services' },
        { '@type': 'ListItem', position: 3, name: 'HIV PrEP & Sexual Health', item: 'https://www.wecarewellnessclinic.com/hiv-prep' },
      ],
    },
  ],
};

/* ── Data ─────────────────────────────────────────────────────────────── */
const BENEFITS: Array<{ Icon: React.FC<IconProps>; title: string; desc: string }> = [
  {
    Icon: ShieldIcon,
    title: '~99% HIV protection',
    desc: 'When taken daily as prescribed, PrEP reduces the risk of getting HIV from sex by approximately 99%. It is the most effective biomedical HIV prevention tool available.',
  },
  {
    Icon: StethoscopeIcon,
    title: 'Board-certified providers',
    desc: 'Our physicians and nurse practitioners have extensive experience prescribing PrEP, managing STI care, and providing inclusive sexual health services.',
  },
  {
    Icon: LockIcon,
    title: 'Completely confidential',
    desc: 'Your PrEP use and sexual health information is protected under HIPAA. We maintain strict confidentiality. No judgment. No disclosure without your consent.',
  },
  {
    Icon: CalendarIcon,
    title: 'Same-week appointments',
    desc: 'New PrEP patients are typically seen within 3–5 business days. Emergency PEP consultations are available same-day in-person or via telehealth.',
  },
  {
    Icon: CardIcon,
    title: 'Insurance covered',
    desc: 'Under the ACA, most insurance plans must cover PrEP at zero cost-sharing - that means the prescription AND the quarterly labs. We verify your coverage before your visit.',
  },
  {
    Icon: GlobeIcon,
    title: 'Telehealth across Florida',
    desc: 'Start or continue PrEP via telehealth from anywhere in Florida. Labs ordered to your nearest draw site. Prescription sent to your pharmacy. No travel required.',
  },
  {
    Icon: MicroscopeIcon,
    title: 'Comprehensive STI testing',
    desc: 'HIV, gonorrhea, chlamydia, syphilis, hepatitis B/C, herpes, and more - all at one visit. Discreet, fast results with follow-up guidance from your provider.',
  },
  {
    Icon: HandshakeIcon,
    title: 'Inclusive, affirming care',
    desc: 'WeCare is a welcoming clinic for LGBTQ+ patients, people of color, sex workers, and anyone seeking non-judgmental sexual health care in Brandon, FL.',
  },
];

const PREP_MEDS: Array<{
  name: string;
  generic: string;
  Icon: React.FC<IconProps>;
  desc: string;
  notes: string[];
}> = [
  {
    name: 'Truvada',
    generic: 'Tenofovir Disoproxil Fumarate / Emtricitabine',
    Icon: PillsIcon,
    desc: 'The original FDA-approved PrEP medication. Available as generic (very affordable). Approved for all populations at risk of HIV. Most widely prescribed PrEP worldwide.',
    notes: ['Available as low-cost generic', 'Approved for all genders', 'Most studied PrEP medication'],
  },
  {
    name: 'Descovy',
    generic: 'Tenofovir Alafenamide / Emtricitabine',
    Icon: PillsIcon,
    desc: "Newer formulation with a more favorable kidney and bone safety profile. Preferred for patients with kidney concerns or low bone density. Not FDA-approved for individuals at risk via vaginal sex.",
    notes: ['Better kidney safety profile', 'Preferred for older patients', 'Not for vaginal sex risk'],
  },
  {
    name: 'Apretude (CAB-LA)',
    generic: 'Cabotegravir Long-Acting Injectable',
    Icon: SyringeIcon,
    desc: 'Injectable PrEP given every 2 months. Ideal for people who struggle with daily pill adherence. Requires initial 2-injection series (4 weeks apart), then bimonthly injections. Ask if available.',
    notes: ['Injection every 2 months', 'No daily pill required', 'Requires office visits'],
  },
];

const PROCESS_STEPS = [
  {
    num: '1',
    title: 'Book a consultation',
    desc: 'Same-week in-person or same-day telehealth. No referral needed.',
  },
  {
    num: '2',
    title: 'Baseline labs drawn',
    desc: 'HIV test, kidney panel, STI screening, hepatitis B - all in-house or at a nearby lab.',
  },
  {
    num: '3',
    title: 'PrEP prescribed',
    desc: 'If labs confirm HIV-negative and you are a good candidate, we prescribe PrEP same day.',
  },
  {
    num: '4',
    title: 'Ongoing monitoring',
    desc: 'Every 3 months: HIV test, kidney labs, STI check. Refills tied to continued care.',
  },
];

const FAQS = [
  {
    q: 'What is PrEP and how effective is it?',
    a: 'PrEP (Pre-Exposure Prophylaxis) is a daily pill that prevents HIV in HIV-negative people. Taken consistently, it reduces HIV risk from sex by ~99% and from injection drug use by at least 74%.',
  },
  {
    q: 'How do I get PrEP in Brandon, FL?',
    a: 'Book online or call (813) 438-5220. We will order baseline labs, evaluate your health, and prescribe PrEP the same day if labs are negative and you are medically appropriate.',
  },
  {
    q: 'Is PrEP covered by insurance?',
    a: 'Yes - the ACA requires most plans to cover PrEP at zero out-of-pocket cost, including quarterly labs. We verify your benefits before your visit. Uninsured patients qualify for the Ready, Set, PrEP program (free medication).',
  },
  {
    q: 'Who needs PrEP?',
    a: 'The CDC recommends PrEP for any HIV-negative person at substantial risk: those with an HIV-positive partner, multiple sex partners, inconsistent condom use, or recent STI diagnosis. All genders and sexual orientations.',
  },
  {
    q: 'What labs do I need before starting?',
    a: 'HIV test (must be negative), kidney function, hepatitis B, and STI panel. Repeated every 3 months while on PrEP.',
  },
  {
    q: 'Can I get PrEP via telehealth in Florida?',
    a: 'Yes. We prescribe and manage PrEP via telehealth across all of Florida. Labs are ordered to your nearest LabCorp or Quest. Prescription sent directly to your pharmacy.',
  },
  {
    q: 'What STI testing do you offer?',
    a: 'HIV (4th gen), gonorrhea, chlamydia, syphilis, herpes, hepatitis B/C, and trichomonas - all at one visit, confidential, covered by most insurance for at-risk individuals.',
  },
  {
    q: 'What is PEP and when do I need it?',
    a: 'PEP is emergency HIV prevention taken within 72 hours of potential HIV exposure, for 28 days. Call us immediately or go to an ER if you think you were exposed. We offer urgent-care PEP consultations.',
  },
  {
    q: 'Is my PrEP use confidential?',
    a: 'Completely. Your sexual health information is protected under HIPAA. We never share it with employers, family, or anyone outside your care team without written consent.',
  },
  {
    q: 'Do you offer injectable PrEP (Apretude)?',
    a: 'We offer consultations for long-acting injectable PrEP (cabotegravir/Apretude), given every 2 months. Ask about eligibility at your appointment.',
  },
];

/* ── Page ─────────────────────────────────────────────────────────────── */
export default function HivPrepPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero
        headline="HIV PrEP & Sexual Health Care in Brandon, FL"
        subtext="Discreet, judgment-free PrEP prescriptions, STI testing, and sexual health services. Same-week appointments. Insurance covered. Telehealth available statewide in Florida."
        ctaLabel="Book PrEP Appointment"
        ctaHref="/booking"
        secondaryLabel="Call (813) 438-5220"
        secondaryHref={`tel:${CLINIC.phone}`}
      />

      {/* ── Intro ────────────────────────────────────────────────── */}
      <section className={styles.intro} aria-labelledby="intro-heading">
        <div className="container">
          <div className={styles.introGrid}>
            <div>
              <p className={styles.introLabel}>Brandon, FL - Discreet & Affirming Care</p>
              <h2 className={styles.introHeading} id="intro-heading">
                PrEP Prescriptions, STI Testing & Sexual Health Services
              </h2>
              <p className={styles.introBody}>
                WeCare Wellness Clinic provides comprehensive HIV prevention and sexual health
                services in Brandon, FL. Our board-certified providers prescribe PrEP (Truvada,
                Descovy, and injectable Apretude), manage STI diagnosis and treatment, and offer
                emergency PEP consultations - all in a confidential, inclusive, judgment-free
                environment.
              </p>
              <p className={styles.introBody}>
                Getting on PrEP at WeCare is simple: book a same-week appointment, complete
                baseline labs (HIV test, kidney function, STI panel), and receive your
                prescription the same day if you qualify. Most insurance plans, including
                Medicare, cover PrEP and all required monitoring labs at no cost to you
                under the Affordable Care Act.
              </p>
              <ul className={styles.featuresList} aria-label="Key facts about our PrEP service">
                {[
                  '~99% HIV reduction with consistent daily PrEP',
                  'Truvada, Descovy & injectable Apretude available',
                  'Baseline labs ordered same day',
                  'Zero-cost under most ACA insurance plans',
                  'Free PrEP available via Ready, Set, PrEP program',
                  'Telehealth PrEP management across all of Florida',
                  'Comprehensive STI testing - one visit',
                  'Emergency PEP consultations same-day',
                ].map((item) => (
                  <li key={item} className={styles.featuresListItem}>
                    <span className={styles.checkIcon} aria-hidden="true">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.statsPanel} aria-label="PrEP at a glance">
              {[
                { value: '~99%', label: 'HIV risk reduction with PrEP (sexual transmission)' },
                { value: '≤72 hrs', label: 'Window to start PEP after exposure' },
                { value: '$0', label: 'PrEP & labs under most ACA insurance plans' },
                { value: '3 months', label: 'Follow-up interval for monitoring & refills' },
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

      {/* ── Benefits ─────────────────────────────────────────────── */}
      <section className={styles.benefitsSection} aria-labelledby="benefits-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Why WeCare for PrEP</p>
            <h2 className={styles.sectionTitle} id="benefits-heading">
              Expert PrEP care in Brandon - discreet, fast, & covered
            </h2>
            <p className={styles.sectionSubtitle}>
              Same-week appointments, insurance verification, and a welcoming team that puts
              your privacy first.
            </p>
          </div>
          <div className={styles.benefitsGrid}>
            {BENEFITS.map(({ Icon, title, desc }) => (
              <div key={title} className={styles.benefitCard}>
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

      {/* ── PrEP Medications ─────────────────────────────────────── */}
      <section className={styles.medsSection} aria-labelledby="meds-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>PrEP Medications</p>
            <h2 className={styles.sectionTitle} id="meds-heading">
              FDA-Approved PrEP Options
            </h2>
            <p className={styles.sectionSubtitle}>
              Your WeCare provider will recommend the right PrEP for your specific situation,
              health history, and lifestyle.
            </p>
          </div>
          <div className={styles.medsGrid}>
            {PREP_MEDS.map((med) => {
              const { Icon } = med;
              return (
                <div key={med.name} className={styles.medCard}>
                  <div className={styles.medHeader}>
                    <span className={styles.medIcon} aria-hidden="true">
                      <Icon size={32} />
                    </span>
                    <div>
                      <h3 className={styles.medName}>{med.name}</h3>
                      <p className={styles.medGeneric}>{med.generic}</p>
                    </div>
                  </div>
                  <p className={styles.medDesc}>{med.desc}</p>
                  <ul className={styles.medNotes} aria-label={`${med.name} key points`}>
                    {med.notes.map((n) => (
                      <li key={n} className={styles.medNote}>
                        <span aria-hidden="true">✓</span> {n}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────────── */}
      <section className={styles.processSection} aria-labelledby="process-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Getting Started</p>
            <h2 className={styles.sectionTitle} id="process-heading">
              How to get PrEP at WeCare - 4 simple steps
            </h2>
          </div>
          <ol className={styles.processSteps} aria-label="Process steps">
            {PROCESS_STEPS.map((step) => (
              <li key={step.num} className={styles.processStep}>
                <div className={styles.stepNum} aria-hidden="true">{step.num}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Insurance strip ───────────────────────────────────────── */}
      <div className={styles.insuranceStrip} aria-label="Insurance accepted">
        <div className="container">
          <p className={styles.insuranceText}>PrEP & labs covered at no cost under most plans:</p>
          <p className={styles.insuranceNames}>{INSURANCE.join('  ·  ')}</p>
        </div>
      </div>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className={styles.faqSection} aria-labelledby="faq-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Common Questions</p>
            <h2 className={styles.sectionTitle} id="faq-heading">
              HIV PrEP FAQs - Brandon, FL
            </h2>
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

      {/* ── Disclaimer ───────────────────────────────────────────── */}
      <div className={styles.disclaimer}>
        <div className="container">
          <p className={styles.disclaimerText}>
            <strong>Medical note:</strong> PrEP does not protect against other sexually
            transmitted infections. Use condoms to reduce STI risk. If you think you have
            been exposed to HIV in the last 72 hours, contact us immediately for emergency
            PEP evaluation. PrEP requires a prescription and regular medical monitoring.
          </p>
        </div>
      </div>

      <RelatedServices currentSlug="hiv-prep" />
      <BookingCTA
        heading="Start PrEP today - same-week appointments available"
        subtext="Confidential, judgment-free care in Brandon, FL. Insurance verified before your visit. Telehealth available across Florida."
      />
    </>
  );
}
