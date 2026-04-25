import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '@/components/layout/LegalPage.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy — WeCare Wellness Clinic',
  description:
    'Learn how WeCare Wellness Clinic collects, uses, and protects your personal information. Our privacy practices comply with HIPAA and applicable Florida law.',
  alternates: { canonical: 'https://www.wecarewellnessclinic.com/privacy' },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = 'April 25, 2026';

const TOC = [
  { id: 'information-collected', label: 'Information We Collect' },
  { id: 'how-we-use', label: 'How We Use Your Information' },
  { id: 'how-we-share', label: 'How We Share Your Information' },
  { id: 'cookies', label: 'Cookies & Tracking Technologies' },
  { id: 'data-security', label: 'Data Security' },
  { id: 'your-rights', label: 'Your Rights & Choices' },
  { id: 'children', label: "Children's Privacy" },
  { id: 'changes', label: 'Changes to This Policy' },
  { id: 'contact', label: 'Contact Us' },
];

export default function PrivacyPage() {
  return (
    <>
      <div className={styles.hero}>
        <div className="container">
          <p className={styles.heroEyebrow}>Legal</p>
          <h1 className={styles.heroTitle}>Privacy Policy</h1>
          <p className={styles.heroMeta}>Last updated: {LAST_UPDATED}</p>
        </div>
      </div>

      <div className="container">
        <div className={styles.body}>

          <div className={styles.callout}>
            <p className={styles.calloutTitle}>Note about medical records</p>
            <p className={styles.p}>
              This Privacy Policy governs our <em>website</em> and general marketing communications.
              The privacy of your <strong>medical records and protected health information (PHI)</strong> is
              governed separately by our{' '}
              <Link href="/hipaa">HIPAA Notice of Privacy Practices</Link>.
            </p>
          </div>

          <nav aria-label="Page contents">
            <div className={styles.toc}>
              <p className={styles.tocTitle}>Contents</p>
              <ol className={styles.tocList}>
                {TOC.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`}>{item.label}</a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          <div className={styles.section}>
            <p className={styles.p}>
              WeCare Wellness Clinic ("WeCare," "we," "our," or "us"), located at 214 W Brandon Blvd,
              Brandon, FL 33511, operates the website at wecarewellnessclinic.com (the "Site"). This
              Privacy Policy explains how we collect, use, disclose, and safeguard your information when
              you visit our Site, contact us, or use our online scheduling tools.
            </p>
            <p className={styles.p}>
              By using our Site, you agree to the practices described in this Privacy Policy. If you do
              not agree, please do not use our Site.
            </p>
          </div>

          {/* 1 */}
          <div className={styles.section} id="information-collected">
            <h2 className={styles.sectionTitle}>1. Information We Collect</h2>

            <h3 className={styles.sectionSubtitle}>Information You Provide Directly</h3>
            <ul className={styles.list}>
              <li><strong>Contact information</strong> — name, email address, phone number, mailing address when you fill out a contact form, book an appointment, or subscribe to our newsletter.</li>
              <li><strong>Appointment requests</strong> — preferred date/time, reason for visit, and insurance carrier when booking online.</li>
              <li><strong>Communications</strong> — any messages you send us through contact forms, email, or phone.</li>
              <li><strong>Feedback</strong> — reviews, survey responses, or testimonials you choose to submit.</li>
            </ul>

            <h3 className={styles.sectionSubtitle}>Information Collected Automatically</h3>
            <ul className={styles.list}>
              <li><strong>Log data</strong> — IP address, browser type, operating system, referring URL, pages visited, and time/date of visit.</li>
              <li><strong>Cookies &amp; similar technologies</strong> — session cookies, analytics cookies, and preference cookies. See Section 4 for details.</li>
              <li><strong>Device information</strong> — device type, screen resolution, and general geographic location (city/state level only).</li>
            </ul>

            <h3 className={styles.sectionSubtitle}>Information from Third Parties</h3>
            <ul className={styles.list}>
              <li>Online scheduling platforms (e.g., Wix Bookings) may share appointment data with us.</li>
              <li>Analytics providers (e.g., Google Analytics) share aggregated usage reports.</li>
              <li>Payment processors handle billing; we do not store full credit card numbers.</li>
            </ul>
          </div>

          {/* 2 */}
          <div className={styles.section} id="how-we-use">
            <h2 className={styles.sectionTitle}>2. How We Use Your Information</h2>
            <p className={styles.p}>We use the information we collect to:</p>
            <ul className={styles.list}>
              <li>Schedule and confirm appointments</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send appointment reminders, health tips, and clinic updates (you may opt out at any time)</li>
              <li>Process payments and verify insurance eligibility</li>
              <li>Improve our website, services, and patient experience</li>
              <li>Conduct analytics to understand how visitors use our Site</li>
              <li>Comply with legal obligations, including HIPAA, Florida law, and applicable federal regulations</li>
              <li>Prevent fraud and maintain the security of our systems</li>
              <li>Respond to legal process or government requests as required by law</li>
            </ul>
            <p className={styles.p}>
              We do <strong>not</strong> sell your personal information to third parties. We do not use
              your personal information for automated decision-making that produces legal or similarly
              significant effects without human review.
            </p>
          </div>

          {/* 3 */}
          <div className={styles.section} id="how-we-share">
            <h2 className={styles.sectionTitle}>3. How We Share Your Information</h2>
            <p className={styles.p}>We may share your information with:</p>
            <ul className={styles.list}>
              <li><strong>Service providers</strong> — vendors who assist with website hosting, email marketing, appointment scheduling, and analytics, under confidentiality agreements.</li>
              <li><strong>Healthcare operations</strong> — other providers involved in your care, subject to HIPAA requirements (see our <Link href="/hipaa">HIPAA Notice</Link>).</li>
              <li><strong>Insurance companies</strong> — to verify coverage or process claims, with your authorization.</li>
              <li><strong>Legal authorities</strong> — when required by law, court order, or to protect the safety of our patients and staff.</li>
              <li><strong>Business transfers</strong> — in the event of a merger, acquisition, or sale of assets, your information may transfer to the successor entity.</li>
            </ul>
            <p className={styles.p}>
              We require all third parties to respect the security of your personal data and to treat it
              in accordance with the law.
            </p>
          </div>

          {/* 4 */}
          <div className={styles.section} id="cookies">
            <h2 className={styles.sectionTitle}>4. Cookies &amp; Tracking Technologies</h2>
            <p className={styles.p}>
              Our Site uses cookies — small text files stored on your device — to improve functionality
              and understand usage patterns.
            </p>
            <ul className={styles.list}>
              <li><strong>Strictly necessary cookies</strong> — required for the Site to function (e.g., session management). Cannot be disabled.</li>
              <li><strong>Analytics cookies</strong> — Google Analytics (anonymized IP) to understand visitor behavior. You may opt out via Google's <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">opt-out browser add-on</a>.</li>
              <li><strong>Preference cookies</strong> — remember your settings (e.g., accessibility preferences).</li>
              <li><strong>Marketing cookies</strong> — we do not currently use advertising/tracking cookies for behavioral advertising.</li>
            </ul>
            <p className={styles.p}>
              You can control cookies through your browser settings. Disabling certain cookies may affect
              Site functionality.
            </p>
          </div>

          {/* 5 */}
          <div className={styles.section} id="data-security">
            <h2 className={styles.sectionTitle}>5. Data Security</h2>
            <p className={styles.p}>
              We implement administrative, technical, and physical security measures to protect your
              personal information from unauthorized access, disclosure, alteration, or destruction.
              These measures include:
            </p>
            <ul className={styles.list}>
              <li>SSL/TLS encryption for all data transmitted through our website</li>
              <li>Access controls limiting who can view personal information</li>
              <li>Regular security assessments and staff training</li>
              <li>Secure, HIPAA-compliant hosting for any health-related data</li>
            </ul>
            <p className={styles.p}>
              Despite our efforts, no method of transmission over the internet is 100% secure. If you
              believe your information has been compromised, please contact us immediately at{' '}
              <a href="mailto:privacy@wecarewellnessclinic.com">privacy@wecarewellnessclinic.com</a>.
            </p>
          </div>

          {/* 6 */}
          <div className={styles.section} id="your-rights">
            <h2 className={styles.sectionTitle}>6. Your Rights &amp; Choices</h2>
            <p className={styles.p}>
              Depending on your location, you may have the following rights regarding your personal
              information:
            </p>
            <ul className={styles.list}>
              <li><strong>Access</strong> — Request a copy of the personal information we hold about you.</li>
              <li><strong>Correction</strong> — Request that we correct inaccurate or incomplete information.</li>
              <li><strong>Deletion</strong> — Request deletion of your personal information, subject to legal retention requirements.</li>
              <li><strong>Opt out of marketing</strong> — Unsubscribe from marketing emails at any time by clicking "unsubscribe" or contacting us directly.</li>
              <li><strong>Data portability</strong> — Receive your data in a structured, commonly used format.</li>
              <li><strong>Restriction</strong> — Request that we limit processing of your information in certain circumstances.</li>
            </ul>
            <p className={styles.p}>
              For medical record requests and rights related to your PHI, please refer to our{' '}
              <Link href="/hipaa">HIPAA Notice of Privacy Practices</Link>.
            </p>
            <p className={styles.p}>
              To exercise any of these rights, contact us at{' '}
              <a href="mailto:privacy@wecarewellnessclinic.com">privacy@wecarewellnessclinic.com</a> or
              call <a href="tel:+18134385220">(813) 438-5220</a>.
            </p>
          </div>

          {/* 7 */}
          <div className={styles.section} id="children">
            <h2 className={styles.sectionTitle}>7. Children's Privacy</h2>
            <p className={styles.p}>
              Our website is not directed to children under 13. We do not knowingly collect personal
              information from children under 13 through our website. If you believe a child has
              provided us with personal information, please contact us and we will delete it promptly.
            </p>
            <p className={styles.p}>
              Our clinic does provide medical care to minors, which is governed by HIPAA and with
              parental or guardian consent as required by Florida law.
            </p>
          </div>

          {/* 8 */}
          <div className={styles.section} id="changes">
            <h2 className={styles.sectionTitle}>8. Changes to This Policy</h2>
            <p className={styles.p}>
              We may update this Privacy Policy from time to time. We will notify you of significant
              changes by posting the new policy on this page and updating the "Last updated" date at
              the top. We encourage you to review this policy periodically.
            </p>
            <p className={styles.p}>
              Your continued use of our Site after changes are posted constitutes your acceptance of
              the revised policy.
            </p>
          </div>

          {/* 9 */}
          <div className={styles.section} id="contact">
            <h2 className={styles.sectionTitle}>9. Contact Us</h2>
            <p className={styles.p}>
              If you have questions, concerns, or requests related to this Privacy Policy, please contact us:
            </p>
            <div className={styles.contactBlock}>
              <p><strong>WeCare Wellness Clinic</strong></p>
              <p>Privacy Officer</p>
              <p>214 W Brandon Blvd, Brandon, FL 33511</p>
              <p>Phone: <a href="tel:+18134385220">(813) 438-5220</a></p>
              <p>Email: <a href="mailto:privacy@wecarewellnessclinic.com">privacy@wecarewellnessclinic.com</a></p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
