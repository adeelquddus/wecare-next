import React from 'react';
import Button from '@/components/ui/Button';
import { CLINIC } from '@/lib/clinic';
import styles from './BookingCTA.module.css';

interface BookingCTAProps {
  heading?: string;
  subtext?: string;
  showInsurance?: boolean;
}

export default function BookingCTA({
  heading = 'Ready to feel your best?',
  subtext = 'Book your appointment today - same-week availability in Brandon or via Telehealth across Florida.',
  showInsurance = true,
}: BookingCTAProps) {
  return (
    <section className={styles.section} aria-labelledby="cta-heading">
      <div className="container">
        <div className={styles.card}>
          <div className={styles.content}>
            <p className="ds-eyebrow">Get started</p>
            <h2 id="cta-heading" className={`ds-h2 ${styles.heading}`}>
              {heading}
            </h2>
            <p className={`ds-lede ${styles.subtext}`}>{subtext}</p>

            {showInsurance && (
              <p className={styles.insurance}>
                We accept Aetna, United Healthcare, Medicare, BCBS & MultiPlan
              </p>
            )}

            <div className={styles.actions}>
              <Button href="/booking" size="lg" variant="primary">
                Book Appointment
              </Button>
              <Button href={`tel:${CLINIC.phone}`} size="lg" variant="outline">
                Call {CLINIC.phoneDisplay}
              </Button>
            </div>
          </div>

          {/* Decorative blob */}
          <div className={styles.blob} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
