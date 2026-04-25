import Link from 'next/link';
import { SERVICES, type Service } from '@/lib/clinic';
import styles from './RelatedServices.module.css';

interface Props {
  /** Slug of the current page — this service is excluded from the list */
  currentSlug: string;
  /** Optional override heading */
  heading?: string;
}

/**
 * Renders a row of "related services" cards — all services except the current one.
 * Drop this above <BookingCTA> on every service page.
 */
export default function RelatedServices({ currentSlug, heading = 'Explore our other services' }: Props) {
  const related: Service[] = SERVICES.filter((s) => s.slug !== currentSlug);

  return (
    <section className={styles.section} aria-labelledby="related-heading">
      <div className="container">
        <div className={styles.header}>
          <p className="ds-eyebrow">WeCare Wellness</p>
          <h2 id="related-heading" className="ds-h2">{heading}</h2>
          <p className={styles.sub}>
            Everything you need under one roof — in Brandon, FL or via Telehealth.
          </p>
        </div>

        <div className={styles.grid}>
          {related.map((s) => (
            <Link key={s.slug} href={s.url} className={styles.card}>
              <span className={styles.icon} aria-hidden="true">{s.icon}</span>
              <h3 className={styles.name}>{s.name}</h3>
              <p className={styles.tagline}>{s.tagline}</p>
              <span className={styles.cta}>Learn more →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
