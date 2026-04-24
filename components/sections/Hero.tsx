import React from 'react';
import Button from '@/components/ui/Button';
import { CLINIC } from '@/lib/clinic';
import styles from './Hero.module.css';

interface HeroProps {
  headline: string;
  subtext: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  badgeText?: string;
  showPhone?: boolean;
  /** Use gradient background instead of white */
  variant?: 'light' | 'gradient';
}

export default function Hero({
  headline,
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
          {/* Text side */}
          <div className={styles.content}>
            {badgeText && (
              <p className={`ds-eyebrow ${styles.badge}`} aria-label="Featured highlight">
                {badgeText}
              </p>
            )}

            <h1 id="hero-heading" className={`ds-h1 ${styles.headline}`}>
              {headline}
            </h1>

            <p className={`ds-lede ${styles.subtext}`}>
              {subtext}
            </p>

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

            {/* Trust row */}
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

          {/* Image side */}
          <div className={styles.imageWrap} aria-hidden="true">
            <div className={styles.imagePlaceholder}>
              <div className={styles.placeholderContent}>
                <span className={styles.placeholderEmoji}>🏥</span>
                <span className={styles.placeholderText}>WeCare Wellness Clinic</span>
                <span className={styles.placeholderSub}>214 W Brandon Blvd · Brandon, FL</span>
              </div>
            </div>
            {/* Floating card */}
            <div className={styles.floatCard} aria-hidden="true">
              <span className={styles.floatIcon}>⭐</span>
              <div>
                <div className={styles.floatValue}>4.9/5.0</div>
                <div className={styles.floatLabel}>Patient rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
