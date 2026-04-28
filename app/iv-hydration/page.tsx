import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import BookingCTA from '@/components/sections/BookingCTA';
import RelatedServices from '@/components/sections/RelatedServices';
import { CLINIC, INSURANCE } from '@/lib/clinic';
import {
  LightningIcon,
  ShieldIcon,
  BrainIcon,
  ArmStrengthIcon,
  SparkleIcon,
  ScaleIcon,
  StethoscopeIcon,
  MicroscopeIcon,
  PillsIcon,
  DropIcon,
  AwardIcon,
} from '@/components/ui/AnimatedIcons';
import type { IconProps } from '@/components/ui/AnimatedIcons';
import styles from './page.module.css';

/* ── Metadata ─────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'IV Hydration Therapy & Hormone Replacement Therapy Brandon FL - WeCare Wellness',
  description:
    'IV hydration & physician-supervised HRT in Brandon, FL. Myers Cocktail, NAD+, vitamin drips, testosterone & estrogen therapy. Same-day appointments.',
  keywords: [
    'IV hydration therapy Brandon FL',
    'IV infusion Brandon Florida',
    'Myers Cocktail Brandon FL',
    'NAD+ IV therapy Brandon FL',
    'hormone replacement therapy Brandon FL',
    'HRT clinic Brandon FL',
    'testosterone therapy Brandon FL',
    'estrogen replacement Brandon FL',
    'bioidentical hormone therapy Brandon FL',
    'IV vitamin drip near me Brandon',
    'IV therapy near Tampa FL',
    'B12 IV infusion Brandon FL',
    'immune boost IV Brandon FL',
    'energy IV drip Brandon FL',
    'hormone optimization Brandon FL',
  ],
  alternates: { canonical: 'https://www.wecarewellnessclinic.com/iv-hydration' },
  openGraph: {
    title: 'IV Hydration & Hormone Replacement Therapy - WeCare Wellness Clinic Brandon FL',
    description:
      'Restore energy, immunity, and hormonal balance with physician-supervised IV infusions and HRT in Brandon, FL.',
    url: 'https://www.wecarewellnessclinic.com/iv-hydration',
    type: 'website',
  },
};

/* ── Schema ────────────────────────────────────────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalWebPage',
      name: 'IV Hydration Therapy & Hormone Replacement Therapy - WeCare Wellness Clinic',
      url: 'https://www.wecarewellnessclinic.com/iv-hydration',
      description:
        'IV infusion therapy and physician-supervised hormone replacement therapy in Brandon, FL. Myers Cocktail, NAD+, testosterone, and estrogen protocols.',
      medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
      about: [
        { '@type': 'MedicalTherapy', name: 'Intravenous Hydration Therapy' },
        { '@type': 'MedicalTherapy', name: 'Hormone Replacement Therapy' },
        { '@type': 'MedicalTherapy', name: 'NAD+ Infusion Therapy' },
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
          name: 'What is IV hydration therapy and how does it work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'IV hydration therapy delivers fluids, vitamins, minerals, and antioxidants directly into your bloodstream via a small catheter in your arm. Unlike oral supplements, IV delivery bypasses the digestive system, achieving near-100% bioavailability. A session at WeCare takes 30–60 minutes in a relaxed clinical setting. Our medical team customizes each drip to your specific needs - whether for energy, immunity, recovery, or hydration.',
          },
        },
        {
          '@type': 'Question',
          name: 'What IV infusions do you offer in Brandon, FL?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We offer: Myers Cocktail (the gold standard multi-vitamin drip with B vitamins, vitamin C, magnesium, and calcium), NAD+ therapy (cellular energy and brain health), Immune Boost (high-dose vitamin C + zinc), Hydration Plus (saline with electrolytes), Energy & Performance (B12, B-complex, amino acids), Skin Glow (glutathione + vitamin C), Recovery Drip (anti-inflammatory formula), and Custom IV blends designed by our physicians.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is IV therapy covered by insurance?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most elective wellness IV infusions are not covered by insurance and are offered at transparent cash-pay pricing. However, IV fluids administered for a diagnosed medical condition (severe dehydration, nutrient deficiency) may be covered. Our team will review your situation and let you know before your appointment. We accept all major credit cards and HSA/FSA funds.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is hormone replacement therapy (HRT) and who needs it?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Hormone replacement therapy replenishes hormones (estrogen, progesterone, testosterone) that decline due to aging, menopause, andropause, or medical conditions. HRT is appropriate for women experiencing menopause symptoms (hot flashes, night sweats, vaginal dryness, mood changes) and men with low testosterone (fatigue, low libido, loss of muscle mass, brain fog). Our physicians perform comprehensive lab testing and medical evaluation before prescribing any HRT protocol.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you offer bioidentical hormone therapy (BHRT)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. WeCare Wellness Clinic offers both conventional HRT and bioidentical hormone replacement therapy (BHRT). Bioidentical hormones are chemically identical to the hormones your body produces naturally, derived from plant sources. BHRT options include topical creams, patches, pellets, and injections depending on your needs and preferences. All protocols are FDA-regulated and prescribed by our board-certified providers.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long before I feel the effects of HRT?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most patients begin noticing improvements within 2–4 weeks of starting HRT. Full benefits - including improved energy, sleep quality, mood stability, and libido - typically develop over 3–6 months as hormone levels stabilize. We monitor your progress with repeat labs at 6–8 weeks, then every 3–6 months, adjusting your dosage as needed for optimal results.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is hormone replacement therapy safe?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'When prescribed and monitored by a qualified physician, HRT is safe for most patients. We conduct a thorough medical history review, physical exam, and baseline labs before prescribing. Risks vary depending on your personal and family health history. Our providers follow the latest clinical guidelines from the Menopause Society and the American Urological Association for testosterone therapy, ensuring evidence-based, individualized care.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is NAD+ therapy and what are its benefits?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'NAD+ (nicotinamide adenine dinucleotide) is a coenzyme found in every cell that plays a critical role in energy production, DNA repair, and healthy aging. NAD+ levels decline significantly with age. IV NAD+ therapy delivers this coenzyme directly into the bloodstream, bypassing digestive breakdown. Reported benefits include increased mental clarity, improved energy and metabolism, reduced brain fog, enhanced mood, and support for cellular repair and longevity.',
          },
        },
        {
          '@type': 'Question',
          name: 'How often should I get IV hydration therapy?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Frequency depends on your goals and individual health status. For general wellness maintenance, many patients schedule IV infusions monthly. For athletic performance and recovery, weekly sessions may be appropriate. For acute illness recovery or severe deficiency, more frequent sessions may be recommended initially. Our medical team will guide you on the optimal schedule during your consultation.',
          },
        },
        {
          '@type': 'Question',
          name: 'What should I expect during my IV hydration appointment?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Your appointment starts with a brief health assessment and vital signs check by our nursing staff. A physician or PA reviews your health history and selects or customizes your IV formula. The IV catheter is placed in a vein in your arm or hand - most patients find this painless. You relax comfortably for 30–60 minutes while the infusion runs. Afterward, you are free to drive and return to normal activities. Mild warmth or a vitamin taste during infusion is normal.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.wecarewellnessclinic.com' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.wecarewellnessclinic.com/services' },
        { '@type': 'ListItem', position: 3, name: 'IV Hydration & HRT', item: 'https://www.wecarewellnessclinic.com/iv-hydration' },
      ],
    },
  ],
};

/* ── Data ─────────────────────────────────────────────────────────────── */
const BENEFITS: Array<{ Icon: React.FC<IconProps>; title: string; desc: string }> = [
  {
    Icon: LightningIcon,
    title: 'Instant energy boost',
    desc: 'IV delivery achieves near-100% nutrient bioavailability vs. 20–50% from oral supplements, so you feel results within hours - not days.',
  },
  {
    Icon: ShieldIcon,
    title: 'Immune system support',
    desc: 'High-dose vitamin C, zinc, and glutathione administered intravenously provide powerful immune modulation that oral supplements simply cannot match.',
  },
  {
    Icon: BrainIcon,
    title: 'Cognitive clarity',
    desc: 'NAD+ and B-complex infusions support neurotransmitter production and mitochondrial function, improving focus, memory, and mental stamina.',
  },
  {
    Icon: ArmStrengthIcon,
    title: 'Athletic recovery',
    desc: 'Replenish electrolytes, reduce oxidative stress, and accelerate muscle recovery after intense training with our Performance and Recovery IV protocols.',
  },
  {
    Icon: SparkleIcon,
    title: 'Skin & anti-aging',
    desc: "Glutathione - the body's master antioxidant - administered IV reduces oxidative damage, brightens skin tone, and supports healthy aging from the inside out.",
  },
  {
    Icon: ScaleIcon,
    title: 'Hormonal balance',
    desc: 'Physician-prescribed HRT relieves hot flashes, night sweats, fatigue, and mood swings by restoring estrogen, progesterone, and testosterone to optimal levels.',
  },
  {
    Icon: StethoscopeIcon,
    title: 'Physician-supervised safety',
    desc: 'Every IV and HRT protocol is prescribed by our board-certified providers, not wellness spa staff. Full medical oversight with labs before and after.',
  },
  {
    Icon: MicroscopeIcon,
    title: 'Personalized protocols',
    desc: "No one-size-fits-all drips. We assess your lab values, symptoms, and goals to build a custom IV or hormone protocol matched to your body's exact needs.",
  },
];

const IV_MENU: Array<{
  Icon: React.FC<IconProps>;
  name: string;
  desc: string;
  ingredients: string[];
  duration: string;
}> = [
  {
    Icon: PillsIcon,
    name: 'Myers Cocktail',
    desc: 'The gold-standard multi-vitamin IV, clinically used since the 1970s. Addresses chronic fatigue, fibromyalgia, migraines, and general wellness.',
    ingredients: ['Magnesium', 'Calcium', 'B12', 'B-Complex', 'Vitamin C'],
    duration: '45–60 min',
  },
  {
    Icon: LightningIcon,
    name: 'NAD+ Infusion',
    desc: 'Cellular energy and longevity therapy. Supports mitochondrial function, DNA repair, and neuroprotection. Significant for anti-aging and cognitive health.',
    ingredients: ['NAD+', 'B-Complex', 'Magnesium', 'Saline'],
    duration: '2–4 hours',
  },
  {
    Icon: ShieldIcon,
    name: 'Immune Boost',
    desc: 'High-dose vitamin C with zinc and glutathione to supercharge immune response - ideal before travel, during illness, or cold/flu season.',
    ingredients: ['Vitamin C (high-dose)', 'Zinc', 'Glutathione', 'B-Complex'],
    duration: '45–60 min',
  },
  {
    Icon: DropIcon,
    name: 'Hydration Plus',
    desc: 'Premium isotonic hydration with electrolytes. Perfect for dehydration, post-surgery recovery, hangover relief, and heat exhaustion.',
    ingredients: ['Normal Saline', 'Electrolytes', 'Magnesium', 'B-Complex'],
    duration: '30–45 min',
  },
  {
    Icon: SparkleIcon,
    name: 'Skin Glow / Glutathione',
    desc: "Our most popular beauty IV. Glutathione - the body's master antioxidant - reduces hyperpigmentation, brightens complexion, and neutralizes free radicals.",
    ingredients: ['Glutathione', 'Vitamin C', 'Biotin', 'Saline'],
    duration: '30–45 min',
  },
  {
    Icon: AwardIcon,
    name: 'Performance & Recovery',
    desc: 'Built for athletes and active professionals. Reduces inflammation, replenishes amino acids, and speeds post-workout muscle recovery.',
    ingredients: ['Amino Acids', 'B-Complex', 'Magnesium', 'Vitamin C', 'Zinc'],
    duration: '45–60 min',
  },
];

const HRT_SYMPTOMS_WOMEN = [
  'Hot flashes & night sweats',
  'Vaginal dryness',
  'Mood swings & anxiety',
  'Sleep disturbances',
  'Brain fog & poor memory',
  'Reduced sex drive',
  'Bone density loss',
  'Weight gain & metabolism changes',
  'Irregular periods',
  'Chronic fatigue',
  'Dry skin & hair thinning',
  'Joint pain',
];

const HRT_SYMPTOMS_MEN = [
  'Persistent fatigue & low energy',
  'Reduced libido',
  'Erectile dysfunction',
  'Loss of muscle mass',
  'Increased body fat',
  'Brain fog & poor concentration',
  'Depression & mood changes',
  'Poor sleep quality',
  'Decreased bone density',
  'Hair thinning',
  'Reduced stamina',
  'Testicular atrophy',
];

const PROCESS_STEPS = [
  {
    num: '1',
    title: 'Consultation & labs',
    desc: 'Meet with our provider. Comprehensive hormone panel, metabolic labs, and health history review.',
  },
  {
    num: '2',
    title: 'Personalized protocol',
    desc: 'Your physician designs a custom IV menu or HRT prescription based on your lab results and goals.',
  },
  {
    num: '3',
    title: 'Comfortable infusion',
    desc: 'Relax in our clinical suite. Infusions take 30 min – 4 hours depending on your therapy.',
  },
  {
    num: '4',
    title: 'Ongoing optimization',
    desc: 'Follow-up labs at 6–8 weeks. Dosage and frequency adjusted for optimal long-term results.',
  },
];

const FAQS = [
  {
    q: 'What IV infusions do you offer in Brandon, FL?',
    a: "We offer Myers Cocktail, NAD+ therapy, Immune Boost, Hydration Plus, Skin Glow (glutathione), and Performance & Recovery drips. All are physician-prescribed and administered by licensed nursing staff in our Brandon clinic.",
  },
  {
    q: 'Is IV therapy covered by insurance?',
    a: 'Elective wellness IVs are typically cash-pay. IV fluids for a diagnosed condition (deficiency, dehydration) may be covered. We accept HSA/FSA cards. Call us to verify your specific situation.',
  },
  {
    q: 'How long does an IV session take?',
    a: 'Most infusions run 30–60 minutes. NAD+ therapy takes 2–4 hours. You can relax, read, or work during your session. Afterward, you can drive and resume normal activities immediately.',
  },
  {
    q: 'What is bioidentical hormone therapy (BHRT)?',
    a: 'BHRT uses hormones that are molecularly identical to those your body produces. Derived from plant sources and compounded to your exact needs, BHRT comes in creams, patches, pellets, or injections prescribed by our physicians.',
  },
  {
    q: 'How soon will I feel HRT results?',
    a: 'Most patients notice initial improvements within 2–4 weeks. Full benefits - energy, sleep, mood, libido - typically develop over 3–6 months as levels stabilize. We recheck labs at 6–8 weeks and adjust your dose.',
  },
  {
    q: 'Is HRT safe? What are the risks?',
    a: 'When prescribed by a qualified physician and monitored with regular labs, HRT is safe for most healthy patients. Risks vary based on health history. We review all risks and benefits in detail before starting any protocol.',
  },
  {
    q: 'What is NAD+ and why does it matter?',
    a: 'NAD+ is a coenzyme that powers cellular energy production and DNA repair. Levels drop 50%+ by age 50. IV NAD+ therapy replenishes this directly, supporting energy, cognition, and healthy aging.',
  },
  {
    q: 'Can I do IV therapy and HRT together?',
    a: 'Absolutely. Many of our patients combine monthly IV infusions with an ongoing HRT program. The two therapies complement each other - IVs support nutrition and energy while HRT balances hormones at the cellular level.',
  },
  {
    q: 'Do you offer testosterone therapy for men in Brandon?',
    a: 'Yes. We offer testosterone replacement therapy (TRT) for men with clinically low testosterone confirmed by labs. Protocols include injections, topical gels, and pellets. We monitor levels, hematocrit, and PSA regularly.',
  },
  {
    q: 'Do I need a referral to start IV therapy or HRT?',
    a: "No referral needed. Simply book a consultation at our Brandon clinic or call (813) 438-5220. We accept walk-ins for IV therapy on a same-day availability basis.",
  },
];

/* ── Page ─────────────────────────────────────────────────────────────── */
export default function IvHydrationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero
        headline="Restore Energy. Balance Hormones. Feel Your Best."
        subtext="Physician-supervised IV infusions and HRT in Brandon, FL. Customized protocols based on your labs - not cookie-cutter wellness packages."
        ctaLabel="Book a Consultation"
        ctaHref="/booking"
        secondaryLabel="View IV Menu"
        secondaryHref="#iv-menu"
      />

      {/* ── Intro ────────────────────────────────────────────────── */}
      <section className={styles.intro} aria-labelledby="intro-heading">
        <div className="container">
          <div className={styles.introGrid}>
            <div>
              <p className={styles.introLabel}>Brandon, FL - Same-Day IV Appointments</p>
              <h2 className={styles.introHeading} id="intro-heading">
                Medical-Grade Wellness Infusions & Hormone Optimization
              </h2>
              <p className={styles.introBody}>
                WeCare Wellness Clinic brings clinical-grade IV therapy and hormone replacement
                medicine to Brandon, FL. Unlike spa-style "hydration bars," every IV at WeCare
                is prescribed by a physician and administered by licensed nurses in a fully equipped
                medical clinic - with emergency protocols, proper screening, and continuous monitoring.
              </p>
              <p className={styles.introBody}>
                Our IV menu spans essential hydration drips to advanced NAD+ infusions. Our HRT
                programs cover menopause, perimenopause, low testosterone, thyroid optimization,
                and adrenal support - each backed by comprehensive lab work and follow-up testing.
                Insurance is accepted for eligible medical services; transparent cash pricing
                applies to elective wellness programs.
              </p>
              <ul className={styles.featuresList} aria-label="Key services">
                {[
                  'Myers Cocktail, NAD+, Immune Boost & more',
                  'Testosterone, estrogen & bioidentical HRT',
                  'Comprehensive labs before every HRT protocol',
                  'Nurse-administered, physician-supervised infusions',
                  'Same-day IV appointments available',
                  'HSA/FSA accepted for IV and HRT services',
                  'Aetna, Medicare, UHC, BCBS accepted (medical IV)',
                  'Telehealth HRT follow-ups available statewide in FL',
                ].map((item) => (
                  <li key={item} className={styles.featuresListItem}>
                    <span className={styles.checkIcon} aria-hidden="true">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.statsPanel} aria-label="Quick facts">
              {[
                { value: '30–60 min', label: 'Typical IV session duration' },
                { value: '~100%', label: 'Nutrient bioavailability vs. 20–50% oral' },
                { value: '6', label: 'Core IV infusion formulas' },
                { value: '2–4 wks', label: 'Time to notice HRT improvements' },
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
            <p className={styles.sectionEyebrow}>Why IV & HRT</p>
            <h2 className={styles.sectionTitle} id="benefits-heading">
              The WeCare Difference: Medical Oversight, Not a Wellness Spa
            </h2>
            <p className={styles.sectionSubtitle}>
              Physician-prescribed protocols, licensed nursing staff, and real lab data - every time.
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

      {/* ── IV Menu ──────────────────────────────────────────────── */}
      <section className={styles.menuSection} id="iv-menu" aria-labelledby="menu-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>IV Infusion Menu</p>
            <h2 className={styles.sectionTitle} id="menu-heading">
              Our IV Therapy Menu in Brandon, FL
            </h2>
            <p className={styles.sectionSubtitle}>
              All formulas are physician-prescribed and customizable. Ask about add-ons including
              glutathione push, extra B12, anti-nausea, and pain relief.
            </p>
          </div>
          <div className={styles.menuGrid}>
            {IV_MENU.map((item) => {
              const { Icon } = item;
              return (
                <div key={item.name} className={styles.menuCard}>
                  <div className={styles.menuCardHeader}>
                    <span className={styles.menuCardIcon} aria-hidden="true">
                      <Icon size={32} />
                    </span>
                    <h3 className={styles.menuCardName}>{item.name}</h3>
                  </div>
                  <p className={styles.menuCardDesc}>{item.desc}</p>
                  <ul className={styles.menuCardIngredients} aria-label={`${item.name} ingredients`}>
                    {item.ingredients.map((ing) => (
                      <li key={ing} className={styles.menuCardIngredient}>{ing}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── HRT Section ──────────────────────────────────────────── */}
      <section className={styles.hrtSection} aria-labelledby="hrt-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Hormone Replacement Therapy</p>
            <h2 className={styles.sectionTitle} id="hrt-heading">
              Physician-Supervised HRT for Men & Women in Brandon, FL
            </h2>
            <p className={styles.sectionSubtitle}>
              Hormonal decline is a medical condition, not just "getting older." Our HRT programs
              restore balance with evidence-based protocols, not guesswork.
            </p>
          </div>
          <div className={styles.hrtGrid}>
            <div className={styles.hrtContent}>
              <p className={styles.hrtBody}>
                WeCare Wellness Clinic provides comprehensive hormone replacement therapy for both
                men and women in Brandon, FL. Our approach starts with a full hormone panel -
                estradiol, progesterone, free and total testosterone, DHEA-S, cortisol, and thyroid
                function - before any prescription is written.
              </p>
              <p className={styles.hrtBody}>
                <strong>For women:</strong> We treat perimenopause and menopause symptoms,
                irregular cycles, surgical menopause, and hormonal imbalances with bioidentical
                estrogen, progesterone, and low-dose testosterone. Treatment forms include patches,
                creams, pellets, and oral micronized progesterone.
              </p>
              <p className={styles.hrtBody}>
                <strong>For men:</strong> Our testosterone replacement therapy (TRT) program
                addresses hypogonadism confirmed by labs. We offer testosterone cypionate
                injections, topical gels, and pellet therapy. All patients are monitored for
                hematocrit, PSA, and lipid levels.
              </p>
              <p className={styles.sectionEyebrow} style={{ marginTop: 'var(--space-3)' }}>
                Common symptoms in women that HRT addresses:
              </p>
              <ul className={styles.symptomsList} aria-label="HRT symptoms - women">
                {HRT_SYMPTOMS_WOMEN.map((s) => (
                  <li key={s} className={styles.symptomItem}>
                    <span className={styles.symptomDot} aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ul>
              <p className={styles.sectionEyebrow} style={{ marginTop: 'var(--space-3)' }}>
                Low testosterone symptoms in men:
              </p>
              <ul className={styles.symptomsList} aria-label="HRT symptoms - men">
                {HRT_SYMPTOMS_MEN.map((s) => (
                  <li key={s} className={styles.symptomItem}>
                    <span className={styles.symptomDot} aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.hrtPanel} aria-label="HRT program highlights">
              <h3 className={styles.hrtPanelTitle}>Our HRT Program Includes</h3>
              <ul className={styles.hrtPanelList}>
                {[
                  'Comprehensive hormone & metabolic lab panel',
                  'One-on-one physician consultation',
                  'Custom HRT prescription (bioidentical or conventional)',
                  'Estrogen, progesterone, testosterone & thyroid protocols',
                  'Follow-up labs at 6–8 weeks',
                  'Quarterly monitoring & dose optimization',
                  'Telehealth follow-ups available (Florida-wide)',
                  'HRT for menopause, perimenopause & andropause',
                  'Pellet, patch, cream, gel & injection options',
                  'Insurance billed for eligible services',
                ].map((item) => (
                  <li key={item} className={styles.hrtPanelItem}>{item}</li>
                ))}
              </ul>
              <p className={styles.hrtPanelBody}>
                <strong>Insurances accepted for HRT consultations and labs:</strong>{' '}
                {INSURANCE.join(' · ')}
              </p>
              <Link
                href="/booking"
                style={{
                  display: 'inline-block',
                  marginTop: 'var(--space-2)',
                  background: '#fff',
                  color: 'var(--color-primary)',
                  fontWeight: 'var(--weight-semibold)',
                  borderRadius: 'var(--radius-md)',
                  padding: '12px 24px',
                  textDecoration: 'none',
                  fontSize: 'var(--text-sm)',
                  textAlign: 'center',
                }}
              >
                Schedule Your HRT Consultation →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────────── */}
      <section className={styles.processSection} aria-labelledby="process-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>What to Expect</p>
            <h2 className={styles.sectionTitle} id="process-heading">
              Your Journey to Better Health
            </h2>
            <p className={styles.sectionSubtitle}>
              From first consultation to ongoing optimization - here is exactly what happens.
            </p>
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
          <p className={styles.insuranceText}>Insurance accepted for eligible medical services:</p>
          <p className={styles.insuranceNames}>{INSURANCE.join('  ·  ')}</p>
        </div>
      </div>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className={styles.faqSection} aria-labelledby="faq-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Common Questions</p>
            <h2 className={styles.sectionTitle} id="faq-heading">
              IV Hydration & HRT FAQs
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

      <RelatedServices currentSlug="iv-hydration" />
      <BookingCTA />
    </>
  );
}
