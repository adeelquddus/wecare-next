import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import BookingCTA from '@/components/sections/BookingCTA';
import Card from '@/components/ui/Card';
import { TRUST_STATS, INSURANCE } from '@/lib/clinic';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About Us — WeCare Wellness Clinic Brandon FL',
  description:
    'Learn about WeCare Wellness Clinic — our mission, our providers, and our commitment to patient-centered care in Brandon, FL. Serving Brandon, Riverview, Valrico, Tampa and surrounding areas.',
  alternates: { canonical: 'https://www.wecarewellnessclinic.com/about' },
};

const VALUES = [
  {
    icon: '❤️',
    title: 'Patient-first',
    desc: 'Every decision we make starts with what\'s best for you. Full stop.',
  },
  {
    icon: '🔬',
    title: 'Evidence-based',
    desc: 'We follow the latest clinical guidelines and ongoing medical research.',
  },
  {
    icon: '🤝',
    title: 'Accessible',
    desc: 'Same-week appointments, telehealth, and major insurance accepted.',
  },
  {
    icon: '🌿',
    title: 'Whole-person',
    desc: 'We treat the person, not just the chart — mind, body, and lifestyle.',
  },
];

const TEAM = [
  {
    name: 'Dr. [Provider Name]',
    title: 'Medical Director, Primary Care',
    bio: 'Board-certified in Family Medicine with over 10 years of experience serving the Brandon community. Special interest in preventive health and chronic disease management.',
    img: null,
  },
  {
    name: 'APRN [Provider Name]',
    title: 'Nurse Practitioner, Women\'s Health',
    bio: 'Specializing in gynecology, hormone therapy, and women\'s wellness. Committed to compassionate, evidence-based care for women at every stage of life.',
    img: null,
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        headline="Modern care. Real relationships."
        subtext="WeCare Wellness Clinic was founded on one belief: you deserve a healthcare team that actually knows you, listens to you, and grows with you."
        ctaLabel="Meet our team"
        ctaHref="#team"
        secondaryLabel="Book Appointment"
        secondaryHref="/booking"
      />

      {/* Mission */}
      <section className={`section ${styles.missionSection}`} aria-labelledby="mission-heading">
        <div className="container">
          <div className={styles.missionGrid}>
            <div>
              <p className="ds-eyebrow">Our mission</p>
              <h2 id="mission-heading" className="ds-h2">
                Healthcare that feels human
              </h2>
              <p className="ds-lede">
                At WeCare Wellness Clinic, we believe that modern medicine and genuine human connection aren't mutually exclusive. We combine the latest clinical practices with the kind of personal attention that has become rare in healthcare today.
              </p>
              <p className="ds-body" style={{ marginTop: 'var(--space-3)', color: 'var(--text-secondary)' }}>
                Our clinic in Brandon, FL serves patients across the greater Tampa Bay area — from routine checkups to medical weight loss programs to specialized telehealth consultations. We're here when you need us, with same-week appointments and telehealth coverage statewide.
              </p>
            </div>

            {/* Stats */}
            <ul className={styles.statsGrid} role="list" aria-label="Clinic statistics">
              {TRUST_STATS.map((s) => (
                <li key={s.label} className={styles.statItem}>
                  <span className={styles.statValue}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={`section ${styles.valuesSection}`} aria-labelledby="values-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">What we stand for</p>
            <h2 id="values-heading" className="ds-h2">Our values</h2>
          </div>
          <ul className={styles.valuesGrid} role="list">
            {VALUES.map((v) => (
              <li key={v.title}>
                <Card padding="lg" className={styles.valueCard}>
                  <span className={styles.valueIcon} aria-hidden="true">{v.icon}</span>
                  <h3 className="ds-h3">{v.title}</h3>
                  <p className="ds-body" style={{ color: 'var(--text-secondary)', margin: 0 }}>
                    {v.desc}
                  </p>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Team */}
      <section id="team" className={`section ${styles.teamSection}`} aria-labelledby="team-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="ds-eyebrow">Our providers</p>
            <h2 id="team-heading" className="ds-h2">Meet the team</h2>
            <p className="ds-lede" style={{ marginTop: 'var(--space-2)' }}>
              Board-certified providers who genuinely care about your health outcomes.
            </p>
          </div>
          <ul className={styles.teamGrid} role="list">
            {TEAM.map((member) => (
              <li key={member.name}>
                <Card as="article" padding="lg" className={styles.teamCard}>
                  <div className={styles.teamAvatar} aria-hidden="true">
                    {member.img ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={member.img} alt="" className={styles.teamImg} />
                    ) : (
                      <span className={styles.teamPlaceholder}>👩‍⚕️</span>
                    )}
                  </div>
                  <h3 className={`ds-h3 ${styles.teamName}`}>{member.name}</h3>
                  <p className={styles.teamTitle}>{member.title}</p>
                  <p className="ds-body" style={{ color: 'var(--text-secondary)', margin: 0 }}>
                    {member.bio}
                  </p>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Insurance */}
      <section className={`section ${styles.insuranceSection}`} aria-labelledby="insurance-heading">
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="ds-eyebrow">Coverage</p>
          <h2 id="insurance-heading" className="ds-h2" style={{ marginBottom: 'var(--space-5)' }}>
            We accept your insurance
          </h2>
          <ul className={styles.insuranceList} role="list">
            {INSURANCE.map((ins) => (
              <li key={ins} className={styles.insurancePill}>{ins}</li>
            ))}
          </ul>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
