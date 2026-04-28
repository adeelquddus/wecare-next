import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CLINIC, HOURS_DISPLAY, SERVICES, INSURANCE } from '@/lib/clinic';
import { PinIcon, PhoneIcon, MailIcon, CalendarIcon } from '@/components/ui/AnimatedIcons';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      {/* NAP band */}
      <div className={styles.napBand}>
        <div className="container">
          <div className={styles.napGrid}>
            <div className={styles.napItem}>
              <span className={styles.napIcon} aria-hidden="true"><PinIcon size={28} /></span>
              <div>
                <div className={styles.napLabel}>Our location</div>
                <a
                  href={CLINIC.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.napValue}
                  aria-label="Open location in Google Maps"
                >
                  {CLINIC.address}
                </a>
              </div>
            </div>
            <div className={styles.napItem}>
              <span className={styles.napIcon} aria-hidden="true"><PhoneIcon size={28} /></span>
              <div>
                <div className={styles.napLabel}>Call us</div>
                <a href={`tel:${CLINIC.phone}`} className={styles.napValue}>
                  {CLINIC.phoneDisplay}
                </a>
              </div>
            </div>
            <div className={styles.napItem}>
              <span className={styles.napIcon} aria-hidden="true"><MailIcon size={28} /></span>
              <div>
                <div className={styles.napLabel}>Email us</div>
                <a href={`mailto:${CLINIC.email}`} className={styles.napValue}>
                  {CLINIC.email}
                </a>
              </div>
            </div>
            <div className={styles.napItem}>
              <span className={styles.napIcon} aria-hidden="true"><CalendarIcon size={28} /></span>
              <div>
                <div className={styles.napLabel}>Hours</div>
                <div className={styles.napValue}>Mon–Thu 9–5 | Fri 9–6 | Sat 9–1</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className={styles.main}>
        <div className="container">
          <div className={styles.grid}>
            {/* Brand */}
            <div className={styles.brand}>
              <Link href="/" className={styles.logo} aria-label="WeCare Wellness Clinic - home">
                <Image
                  src="/logo-dark.png"
                  alt="WeCare Wellness Clinic"
                  width={360}
                  height={104}
                  className={styles.logoImg}
                />
              </Link>
              <p className={styles.tagline}>
                Modern, trustworthy, patient-centered wellness care in Brandon, FL.
              </p>
              <div className={styles.social}>
                <a
                  href={CLINIC.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WeCare Wellness on Facebook"
                  className={styles.socialLink}
                >
                  Facebook
                </a>
                <a
                  href={CLINIC.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WeCare Wellness on Instagram"
                  className={styles.socialLink}
                >
                  Instagram
                </a>
              </div>
            </div>

            {/* Services */}
            <div className={styles.col}>
              <h3 className={styles.colHeading}>Services</h3>
              <ul className={styles.linkList} role="list">
                {SERVICES.map((s) => (
                  <li key={s.slug}>
                    <Link href={s.url} className={styles.footerLink}>{s.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick links */}
            <div className={styles.col}>
              <h3 className={styles.colHeading}>Quick links</h3>
              <ul className={styles.linkList} role="list">
                {[
                  { label: 'About us',          href: '/about' },
                  { label: 'New patients',       href: '/new-patients' },
                  { label: 'Blog',               href: '/blog' },
                  { label: 'FAQ',                href: '/faq' },
                  { label: 'Insurance',          href: '/insurance' },
                  { label: 'Loyalty rewards',    href: '/loyalty' },
                  { label: 'HIV PrEP',           href: '/hiv-prep' },
                  { label: 'Contact',            href: '/contact' },
                  { label: 'Book appointment',   href: '/booking' },
                ].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={styles.footerLink}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hours */}
            <div className={styles.col}>
              <h3 className={styles.colHeading}>Office hours</h3>
              <ul className={styles.hoursList} role="list">
                {HOURS_DISPLAY.map((h) => (
                  <li key={h.days} className={styles.hoursItem}>
                    <span className={styles.hoursDay}>{h.days}</span>
                    <span className={styles.hoursTime}>{h.hours}</span>
                  </li>
                ))}
              </ul>
              <div className={styles.insuranceNote}>
                <strong>Insurance accepted:</strong><br />
                {INSURANCE.join(' · ')}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p className={styles.copyright}>
              © {year} WeCare Wellness Clinic. All rights reserved.
            </p>
            <div className={styles.legal}>
              <Link href="/privacy" className={styles.legalLink}>Privacy policy</Link>
              <Link href="/terms" className={styles.legalLink}>Terms of use</Link>
              <Link href="/hipaa" className={styles.legalLink}>HIPAA notice</Link>
              <Link href="/accessibility" className={styles.legalLink}>Accessibility</Link>
            </div>
          </div>
          <p className={styles.disclaimer}>
            This website is for informational purposes only and does not constitute medical advice.
            Always consult a qualified healthcare provider for medical guidance.
          </p>
        </div>
      </div>
    </footer>
  );
}
