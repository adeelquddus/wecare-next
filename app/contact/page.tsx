import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { CLINIC, HOURS_DISPLAY, INSURANCE } from '@/lib/clinic';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Contact Us — WeCare Wellness Clinic Brandon FL',
  description:
    'Contact WeCare Wellness Clinic at 214 W Brandon Blvd, Brandon FL 33511. Call (813) 438-5220 or book online. Mon–Thu 9–5, Fri 9–6, Sat 9–1.',
  alternates: { canonical: 'https://www.wecarewellnessclinic.com/contact' },
};

export default function ContactPage() {
  return (
    <>
      <Hero
        headline="We're here for you"
        subtext="Reach out by phone, email, or use our contact form. We aim to respond within one business day."
        ctaLabel="Book Appointment"
        ctaHref="/booking"
        secondaryLabel={`Call ${CLINIC.phoneDisplay}`}
        secondaryHref={`tel:${CLINIC.phone}`}
        showPhone={false}
      />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>
            {/* Contact info */}
            <div className={styles.info}>
              <Card padding="lg" className={styles.infoCard}>
                <h2 className={`ds-h3 ${styles.cardTitle}`}>Clinic information</h2>

                <div className={styles.infoItem}>
                  <span className={styles.infoIcon} aria-hidden="true">📍</span>
                  <div>
                    <div className={styles.infoLabel}>Address</div>
                    <a
                      href={CLINIC.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.infoValue}
                    >
                      {CLINIC.addressParts.street}<br />
                      {CLINIC.addressParts.city}, {CLINIC.addressParts.state} {CLINIC.addressParts.zip}
                    </a>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <span className={styles.infoIcon} aria-hidden="true">📞</span>
                  <div>
                    <div className={styles.infoLabel}>Phone</div>
                    <a href={`tel:${CLINIC.phone}`} className={styles.infoValue}>
                      {CLINIC.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <span className={styles.infoIcon} aria-hidden="true">✉️</span>
                  <div>
                    <div className={styles.infoLabel}>Email</div>
                    <a href={`mailto:${CLINIC.email}`} className={styles.infoValue}>
                      {CLINIC.email}
                    </a>
                  </div>
                </div>

                <div className={styles.divider} />

                <h3 className={styles.hoursTitle}>Office hours</h3>
                <ul className={styles.hoursList} role="list">
                  {HOURS_DISPLAY.map((h) => (
                    <li key={h.days} className={styles.hoursItem}>
                      <span className={styles.hoursDay}>{h.days}</span>
                      <span className={styles.hoursTime}>{h.hours}</span>
                    </li>
                  ))}
                </ul>

                <div className={styles.divider} />

                <h3 className={styles.hoursTitle}>Insurance accepted</h3>
                <p className={styles.insuranceList}>{INSURANCE.join(' · ')}</p>

                <Button href="/booking" variant="primary" fullWidth className={styles.bookBtn}>
                  Book Appointment
                </Button>
              </Card>
            </div>

            {/* Inquiry form */}
            <div className={styles.formWrap}>
              <Card padding="lg">
                <h2 className={`ds-h3 ${styles.cardTitle}`}>Send us a message</h2>
                <p className={styles.formNote}>
                  For urgent medical concerns, please call us directly at{' '}
                  <a href={`tel:${CLINIC.phone}`}>{CLINIC.phoneDisplay}</a>.
                </p>

                <form className={styles.form} aria-label="Contact inquiry form" noValidate>
                  <div className={styles.fieldRow}>
                    <div className={styles.field}>
                      <label htmlFor="firstName" className={styles.label}>First name <span aria-hidden="true">*</span></label>
                      <input
                        id="firstName"
                        type="text"
                        name="firstName"
                        className={styles.input}
                        required
                        autoComplete="given-name"
                        aria-required="true"
                        placeholder="Jane"
                      />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="lastName" className={styles.label}>Last name <span aria-hidden="true">*</span></label>
                      <input
                        id="lastName"
                        type="text"
                        name="lastName"
                        className={styles.input}
                        required
                        autoComplete="family-name"
                        aria-required="true"
                        placeholder="Smith"
                      />
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="email" className={styles.label}>Email address <span aria-hidden="true">*</span></label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className={styles.input}
                      required
                      autoComplete="email"
                      aria-required="true"
                      placeholder="jane@example.com"
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="phone" className={styles.label}>Phone number</label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      className={styles.input}
                      autoComplete="tel"
                      placeholder="(813) 555-0123"
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="subject" className={styles.label}>Subject <span aria-hidden="true">*</span></label>
                    <select id="subject" name="subject" className={styles.input} required aria-required="true">
                      <option value="">Select a topic</option>
                      <option value="appointment">Book / change appointment</option>
                      <option value="insurance">Insurance question</option>
                      <option value="weight-loss">Medical weight loss inquiry</option>
                      <option value="telehealth">Telehealth inquiry</option>
                      <option value="records">Medical records</option>
                      <option value="billing">Billing question</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="message" className={styles.label}>Message <span aria-hidden="true">*</span></label>
                    <textarea
                      id="message"
                      name="message"
                      className={`${styles.input} ${styles.textarea}`}
                      required
                      aria-required="true"
                      rows={5}
                      placeholder="How can we help you?"
                    />
                  </div>

                  <Button type="submit" variant="primary" fullWidth size="lg">
                    Send message
                  </Button>

                  <p className={styles.privacyNote}>
                    We respect your privacy. Your information is never shared with third parties.
                  </p>
                </form>
              </Card>
            </div>
          </div>

          {/* Map placeholder */}
          <div className={styles.mapWrap} aria-label="Clinic location map">
            <iframe
              title="WeCare Wellness Clinic location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524.8!2d-82.2859!3d27.9378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s214+W+Brandon+Blvd+Brandon+FL!5e0!3m2!1sen!2sus!4v1"
              className={styles.mapIframe}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
