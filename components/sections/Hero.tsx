import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { CLINIC } from '@/lib/clinic';
import styles from './Hero.module.css';

interface HeadlineLine {
  text: string;
  color?: 'dark' | 'primary' | 'teal';
}

interface HeroProps {
  headline?: string;
  headlineLines?: HeadlineLine[];
  subtext: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  badgeText?: string;
  showPhone?: boolean;
  variant?: 'light' | 'gradient';
}

const colorClass: Record<string, string> = {
  dark:    'headlineDark',
  primary: 'headlineBlue',
  teal:    'headlineTeal',
};

export default function Hero({
  headline,
  headlineLines,
  subtext,
  ctaLabel = 'Book Appointment',
  ctaHref = '/booking',
  secondaryLabel,
  secondaryHref,
  badgeText,
  showPhone = true,
  variant = 'light',
}: HeroProps) {
  return (
    <section className={`${styles.hero} ${styles[variant]}`} aria-labelledby="hero-heading">
      <div className="container">
        <div className={styles.inner}>
          {/* Text content */}
          <div className={styles.content}>
            {badgeText && (
              <p className={`ds-eyebrow ${styles.badge}`} aria-label="Featured highlight">
                {badgeText}
              </p>
            )}

            <h1 id="hero-heading" className={`ds-h1 ${styles.headline}`}>
              {headlineLines ? (
                headlineLines.map((line, i) => (
                  <span key={i} className={styles[colorClass[line.color ?? 'dark']]}>
                    {line.text}
                  </span>
                ))
              ) : (
                headline
              )}
            </h1>

            <p className={`ds-lede ${styles.subtext}`}>{subtext}</p>

            <div className={styles.ctas}>
              <Button href={ctaHref} size="lg" variant="primary">
                {ctaLabel}
              </Button>
              {secondaryLabel && secondaryHref && (
                <Button href={secondaryHref} size="lg" variant="outline">
                  {secondaryLabel}
                </Button>
              )}
            </div>

            {showPhone && (
              <p className={styles.phone}>
                Or call us:{' '}
                <a href={`tel:${CLINIC.phone}`} className={styles.phoneLink}>
                  {CLINIC.phoneDisplay}
                </a>
              </p>
            )}

            <div className={styles.trust} role="list" aria-label="Trust indicators">
              {[
                '✓ Same-week appointments',
                '✓ Insurance accepted',
                '✓ Brandon & Telehealth FL',
              ].map((item) => (
                <span key={item} className={styles.trustItem} role="listitem">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Doctor image - visible on mobile/small screens only */}
          <div className={styles.doctorWrap} aria-hidden="true">
            <Image
              src="/darlyne.png"
              alt=""
              width={320}
              height={380}
              priority
              className={styles.doctorImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
