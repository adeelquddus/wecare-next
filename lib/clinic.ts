/**
 * Clinic utilities — WeCare Wellness
 * Live open/closed status, contact info, services list
 * Ported from clinicUtils.js (Wix Velo version)
 */

export const CLINIC = {
  name: 'WeCare Wellness Clinic',
  phone: '+18134385220',
  phoneDisplay: '(813) 438-5220',
  email: 'info@wecarewellnessclinic.com',
  address: '214 W Brandon Blvd, Brandon, FL 33511',
  addressParts: {
    street: '214 W Brandon Blvd',
    city: 'Brandon',
    state: 'FL',
    zip: '33511',
    country: 'US',
  },
  mapUrl: 'https://maps.google.com/?q=214+W+Brandon+Blvd+Brandon+FL+33511',
  bookingUrl: '/booking',
  website: 'https://www.wecarewellnessclinic.com',
  social: {
    facebook: 'https://www.facebook.com/wecarewellnessclinic',
    instagram: 'https://www.instagram.com/wecarewellnessclinic',
  },
} as const;

/** Mon=1 … Sun=0 (JS Date getDay()) */
export const HOURS: Record<number, { open: number; close: number } | null> = {
  1: { open: 9, close: 17 },   // Monday    9 AM – 5 PM
  2: { open: 9, close: 17 },   // Tuesday
  3: { open: 9, close: 17 },   // Wednesday
  4: { open: 9, close: 17 },   // Thursday
  5: { open: 9, close: 18 },   // Friday    9 AM – 6 PM
  6: { open: 9, close: 13 },   // Saturday  9 AM – 1 PM
  0: null,                      // Sunday — closed
};

export const HOURS_DISPLAY = [
  { days: 'Monday – Thursday', hours: '9:00 AM – 5:00 PM' },
  { days: 'Friday',            hours: '9:00 AM – 6:00 PM' },
  { days: 'Saturday',          hours: '9:00 AM – 1:00 PM' },
  { days: 'Sunday',            hours: 'Closed' },
];

export interface ClinicStatus {
  isOpen: boolean;
  label: string;      // "Open Now" | "Closed"
  subLabel: string;   // "Closes at 5 PM" | "Opens Monday at 9 AM"
}

/**
 * Returns current open/closed status based on US Eastern Time.
 * Safe for both server and client rendering (accepts optional Date for testing).
 */
export function getClinicStatus(now?: Date): ClinicStatus {
  const d = now ?? new Date();

  // Convert to US/Eastern
  const eastern = new Date(
    d.toLocaleString('en-US', { timeZone: 'America/New_York' })
  );

  const day  = eastern.getDay();
  const hour = eastern.getHours() + eastern.getMinutes() / 60;
  const todayHours = HOURS[day];

  if (todayHours && hour >= todayHours.open && hour < todayHours.close) {
    const closeLabel = todayHours.close === 13 ? '1 PM' : `${todayHours.close > 12 ? todayHours.close - 12 : todayHours.close} PM`;
    return {
      isOpen: true,
      label: 'Open Now',
      subLabel: `Closes at ${closeLabel}`,
    };
  }

  // Find next open day
  let nextDay = (day + 1) % 7;
  let daysAhead = 1;
  while (daysAhead <= 7 && !HOURS[nextDay]) {
    nextDay = (nextDay + 1) % 7;
    daysAhead++;
  }

  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const nextHours = HOURS[nextDay];
  const openTime = nextHours ? (nextHours.open === 9 ? '9 AM' : `${nextHours.open} AM`) : '';
  const nextDayName = daysAhead === 1 ? 'Tomorrow' : dayNames[nextDay];

  return {
    isOpen: false,
    label: 'Closed',
    subLabel: `Opens ${nextDayName} at ${openTime}`,
  };
}

/* ─── Services ─────────────────────────────────────────────────────── */

export interface Service {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;      // emoji for now, swap for SVG path later
  features: string[];
  url: string;
}

export const SERVICES: Service[] = [
  {
    slug: 'primary-care',
    name: 'Primary Care',
    tagline: 'Comprehensive care for the whole family',
    description:
      'From routine checkups to managing chronic conditions, our primary care team provides personalized, continuous care that keeps you and your family healthy.',
    icon: '🩺',
    features: [
      'Annual wellness exams',
      'Chronic disease management',
      'Preventive screenings',
      'Acute illness treatment',
      'Lab work & diagnostics',
      'Referrals to specialists',
    ],
    url: '/primary-care',
  },
  {
    slug: 'medical-weight-loss',
    name: 'Medical Weight Loss',
    tagline: 'GLP-1, Semaglutide & Tirzepatide programs',
    description:
      'Science-backed weight loss supervised by our physicians. We offer Semaglutide (Ozempic/Wegovy) and Tirzepatide (Mounjaro/Zepbound) programs with ongoing clinical support.',
    icon: '⚕️',
    features: [
      'Semaglutide / GLP-1 therapy',
      'Tirzepatide programs',
      'Body composition analysis',
      'Nutrition guidance',
      'Monthly provider check-ins',
      'Lab monitoring included',
    ],
    url: '/medical-weight-loss',
  },
  {
    slug: 'telehealth',
    name: 'Telehealth',
    tagline: 'See a provider from anywhere in Florida',
    description:
      'Board-certified providers available by video for non-emergency consultations, prescription refills, follow-ups, and more — no travel required.',
    icon: '💻',
    features: [
      'Video visits — same day available',
      'Prescription management',
      'Chronic condition follow-ups',
      'Mental health check-ins',
      'Lab result reviews',
      'Available statewide in FL',
    ],
    url: '/telehealth',
  },
  {
    slug: 'womens-health',
    name: "Women's Health",
    tagline: "Gynecology & complete women's wellness",
    description:
      "Compassionate, evidence-based women's healthcare including gynecology, hormone balancing, contraception, menopause management, and annual well-woman exams.",
    icon: '🌸',
    features: [
      'Annual well-woman exams',
      'Pap smears & cervical screening',
      'Hormone replacement therapy',
      'Contraception counseling',
      'Menopause management',
      'STI testing & treatment',
    ],
    url: '/womens-health',
  },
  {
    slug: 'mens-health',
    name: "Men's Health",
    tagline: 'Proactive health for men at every age',
    description:
      "Targeted men's health services including testosterone therapy, cardiovascular risk reduction, sexual health, and preventive screenings tailored for men.",
    icon: '💪',
    features: [
      'Testosterone replacement therapy',
      'Cardiovascular screening',
      'Prostate health',
      'Sexual health & ED',
      'HIV PrEP',
      'Annual physicals',
    ],
    url: '/mens-health',
  },
  {
    slug: 'iv-hydration',
    name: 'IV Hydration & HRT',
    tagline: 'IV therapy & hormone optimization',
    description:
      'Restore energy and balance with IV hydration infusions and physician-supervised hormone replacement therapy for both men and women.',
    icon: '💧',
    features: [
      'IV vitamin & hydration infusions',
      'NAD+ therapy',
      'Hormone replacement (HRT)',
      'Thyroid optimization',
      'Adrenal support',
      'Customized protocols',
    ],
    url: '/iv-hydration',
  },
  {
    slug: 'hiv-prep',
    name: 'HIV PrEP',
    tagline: 'HIV prevention — discreet & covered by insurance',
    description:
      'HIV Pre-Exposure Prophylaxis (PrEP) prescriptions, STI testing, and sexual health care in Brandon, FL. Confidential, judgment-free care with board-certified providers.',
    icon: '🛡️',
    features: [
      'PrEP prescriptions (Truvada / Descovy)',
      'Injectable Apretude consultations',
      'Comprehensive STI screening',
      'HIV & hepatitis testing',
      'Emergency PEP consultations',
      'Telehealth PrEP management statewide',
    ],
    url: '/hiv-prep',
  },
];

/* ─── Insurance ─────────────────────────────────────────────────────── */

export const INSURANCE = [
  'Aetna',
  'United Healthcare',
  'Medicare',
  'Blue Cross Blue Shield',
  'MultiPlan',
];

/* ─── Trust signals ─────────────────────────────────────────────────── */

export const TRUST_STATS = [
  { value: '500+', label: 'Patients served' },
  { value: '4.9★', label: 'Average rating' },
  { value: '5+', label: 'Years serving Brandon' },
  { value: '8', label: 'Services offered' },
];
