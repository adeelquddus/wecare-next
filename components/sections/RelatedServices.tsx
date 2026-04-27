import Link from 'next/link';
import Image from 'next/image';
import { SERVICES, SERVICE_IMAGES, type Service } from '@/lib/clinic';
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
 *
 * Cards mirror the homepage service grid: full-bleed photo at the top
 * (sourced from SERVICE_IMAGES — same images shown on the homepage), then
 * service name, tagline, and a "Learn more →" link below.
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
          {related.map((s) => {
            const imgSrc = SERVICE_IMAGES[s.slug];
            return (
              <Link key={s.slug} href={s.url} className={styles.card}>
                <div className={styles.imageWrap} aria-hidden="true">
                  {imgSrc ? (
                    <Image
                      src={imgSrc}
                      alt=""
                      fill
                      sizes="(max-width: 700px) 50vw, (max-width: 1100px) 33vw, 20vw"
                      className={styles.image}
                    />
                  ) : (
                    <span className={styles.iconFallback}>{s.icon}</span>
                  )}
                </div>
                <div className={styles.body}>
                  <h3 className={styles.name}>{s.name}</h3>
                  <p className={styles.tagline}>{s.tagline}</p>
                  <span className={styles.cta}>Learn more →</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
