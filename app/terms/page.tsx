import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '@/components/layout/LegalPage.module.css';

export const metadata: Metadata = {
  title: 'Terms of Use — WeCare Wellness Clinic',
  description:
    'Terms of Use for the WeCare Wellness Clinic website. Read about permitted use, disclaimers, and your agreement with our online services.',
  alternates: { canonical: 'https://www.wecarewellnessclinic.com/terms' },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = 'April 25, 2026';

const TOC = [
  { id: 'acceptance', label: 'Acceptance of Terms' },
  { id: 'use-of-site', label: 'Use of This Website' },
  { id: 'medical-disclaimer', label: 'Medical Disclaimer' },
  { id: 'intellectual-property', label: 'Intellectual Property' },
  { id: 'links', label: 'Third-Party Links' },
  { id: 'disclaimer-of-warranties', label: 'Disclaimer of Warranties' },
  { id: 'limitation-of-liability', label: 'Limitation of Liability' },
  { id: 'indemnification', label: 'Indemnification' },
  { id: 'governing-law', label: 'Governing Law' },
  { id: 'changes', label: 'Changes to These Terms' },
  { id: 'contact', label: 'Contact Us' },
];

export default function TermsPage() {
  return (
    <>
      <div className={styles.hero}>
        <div className="container">
          <p className={styles.heroEyebrow}>Legal</p>
          <h1 className={styles.heroTitle}>Terms of Use</h1>
          <p className={styles.heroMeta}>Last updated: {LAST_UPDATED}</p>
        </div>
      </div>

      <div className="container">
        <div className={styles.body}>

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

          {/* 1 */}
          <div className={styles.section} id="acceptance">
            <h2 className={styles.sectionTitle}>1. Acceptance of Terms</h2>
            <p className={styles.p}>
              By accessing or using the website at wecarewellnessclinic.com (the "Site") operated by
              WeCare Wellness Clinic ("WeCare," "we," "our," or "us"), you agree to be bound by these
              Terms of Use ("Terms"). If you do not agree to these Terms, please do not use the Site.
            </p>
            <p className={styles.p}>
              These Terms apply to all visitors, users, and others who access or use the Site. Use of
              our clinical services is also governed by separate patient agreements and our{' '}
              <Link href="/hipaa">HIPAA Notice of Privacy Practices</Link>.
            </p>
          </div>

          {/* 2 */}
          <div className={styles.section} id="use-of-site">
            <h2 className={styles.sectionTitle}>2. Use of This Website</h2>
            <p className={styles.p}>
              You agree to use this Site only for lawful purposes and in a manner that does not infringe
              the rights of others. You agree NOT to:
            </p>
            <ul className={styles.list}>
              <li>Use the Site in any way that violates applicable federal, state, or local laws or regulations</li>
              <li>Transmit any unsolicited or unauthorized advertising or promotional material</li>
              <li>Impersonate WeCare Wellness Clinic, its employees, or any other person or entity</li>
              <li>Attempt to gain unauthorized access to any portion of the Site or its related systems</li>
              <li>Collect or harvest personal information of other users without their consent</li>
              <li>Interfere with or disrupt the integrity or performance of the Site</li>
              <li>Use automated tools (bots, scrapers) to access the Site without our prior written consent</li>
              <li>Post, transmit, or distribute any content that is harmful, offensive, or objectionable</li>
            </ul>
            <p className={styles.p}>
              We reserve the right to terminate or restrict your access to the Site at any time, without
              notice, for any reason.
            </p>
          </div>

          {/* 3 */}
          <div className={styles.section} id="medical-disclaimer">
            <h2 className={styles.sectionTitle}>3. Medical Disclaimer</h2>
            <div className={`${styles.callout} ${styles.calloutWarn}`}>
              <p className={styles.calloutTitle}>Important — Not Medical Advice</p>
              <p className={styles.p}>
                The content on this website, including text, graphics, images, and information obtained
                from third parties, is provided for <strong>informational and educational purposes
                only</strong>. It does not constitute professional medical advice, diagnosis, or treatment.
              </p>
            </div>
            <p className={styles.p}>
              Always seek the advice of your physician or another qualified healthcare provider with any
              questions you may have regarding a medical condition or treatment. Never disregard
              professional medical advice or delay seeking it because of something you have read on this
              website.
            </p>
            <p className={styles.p}>
              If you think you may have a medical emergency, call <strong>911</strong> or go to the
              nearest emergency room immediately. WeCare Wellness Clinic does not provide emergency
              medical services.
            </p>
            <p className={styles.p}>
              Scheduling an appointment through our website does not establish a physician-patient
              relationship until you have been seen by a provider at our clinic.
            </p>
          </div>

          {/* 4 */}
          <div className={styles.section} id="intellectual-property">
            <h2 className={styles.sectionTitle}>4. Intellectual Property</h2>
            <p className={styles.p}>
              The Site and all of its original content, features, and functionality — including but not
              limited to text, graphics, logos, icons, images, and software — are owned by WeCare
              Wellness Clinic and are protected by United States and international copyright, trademark,
              patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
            <p className={styles.p}>
              You may view, download, and print pages from the Site for your personal, non-commercial
              use, provided that you do not modify the content and you retain all copyright and
              proprietary notices. Any other use requires our prior written consent.
            </p>
          </div>

          {/* 5 */}
          <div className={styles.section} id="links">
            <h2 className={styles.sectionTitle}>5. Third-Party Links</h2>
            <p className={styles.p}>
              Our Site may contain links to third-party websites or services that are not owned or
              controlled by WeCare Wellness Clinic. We have no control over, and assume no responsibility
              for, the content, privacy policies, or practices of any third-party websites. We encourage
              you to review the privacy policies of any third-party sites you visit.
            </p>
            <p className={styles.p}>
              Inclusion of any link does not imply endorsement of the linked website by WeCare Wellness
              Clinic.
            </p>
          </div>

          {/* 6 */}
          <div className={styles.section} id="disclaimer-of-warranties">
            <h2 className={styles.sectionTitle}>6. Disclaimer of Warranties</h2>
            <p className={styles.p}>
              THE SITE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY
              KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
            </p>
            <p className={styles.p}>
              WeCare Wellness Clinic does not warrant that: (a) the Site will be uninterrupted or
              error-free; (b) defects will be corrected; (c) the Site or server that makes it available
              are free of viruses or other harmful components; or (d) the results of using the Site will
              meet your requirements.
            </p>
          </div>

          {/* 7 */}
          <div className={styles.section} id="limitation-of-liability">
            <h2 className={styles.sectionTitle}>7. Limitation of Liability</h2>
            <p className={styles.p}>
              TO THE FULLEST EXTENT PERMITTED BY LAW, WECARE WELLNESS CLINIC, ITS OFFICERS, DIRECTORS,
              EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
              CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF, OR INABILITY TO USE, THE
              SITE OR ITS CONTENT. THIS LIMITATION APPLIES REGARDLESS OF THE LEGAL THEORY UNDER WHICH
              SUCH DAMAGES ARE SOUGHT.
            </p>
            <p className={styles.p}>
              In no event shall our total liability to you for all claims arising from or related to
              your use of the Site exceed one hundred dollars ($100).
            </p>
            <p className={styles.p}>
              Some jurisdictions do not allow the exclusion or limitation of certain damages, so some
              or all of the above limitations may not apply to you.
            </p>
          </div>

          {/* 8 */}
          <div className={styles.section} id="indemnification">
            <h2 className={styles.sectionTitle}>8. Indemnification</h2>
            <p className={styles.p}>
              You agree to defend, indemnify, and hold harmless WeCare Wellness Clinic and its
              affiliates, officers, directors, employees, and agents from and against any claims,
              damages, obligations, losses, liabilities, costs, or debt, and expenses (including
              attorney's fees) arising from: (a) your use of the Site; (b) your violation of these
              Terms; or (c) your violation of any third-party right, including without limitation any
              intellectual property or privacy right.
            </p>
          </div>

          {/* 9 */}
          <div className={styles.section} id="governing-law">
            <h2 className={styles.sectionTitle}>9. Governing Law</h2>
            <p className={styles.p}>
              These Terms shall be governed by and construed in accordance with the laws of the State of
              Florida, without regard to its conflict of law provisions. Any dispute arising under these
              Terms shall be subject to the exclusive jurisdiction of the state and federal courts
              located in Hillsborough County, Florida.
            </p>
          </div>

          {/* 10 */}
          <div className={styles.section} id="changes">
            <h2 className={styles.sectionTitle}>10. Changes to These Terms</h2>
            <p className={styles.p}>
              We reserve the right to modify these Terms at any time. Changes will be effective
              immediately upon posting on the Site. Your continued use of the Site after changes are
              posted constitutes your acceptance of the revised Terms. We encourage you to review these
              Terms periodically.
            </p>
          </div>

          {/* 11 */}
          <div className={styles.section} id="contact">
            <h2 className={styles.sectionTitle}>11. Contact Us</h2>
            <p className={styles.p}>
              If you have questions about these Terms, please contact us:
            </p>
            <div className={styles.contactBlock}>
              <p><strong>WeCare Wellness Clinic</strong></p>
              <p>214 W Brandon Blvd, Brandon, FL 33511</p>
              <p>Phone: <a href="tel:+18134385220">(813) 438-5220</a></p>
              <p>Email: <a href="mailto:info@wecarewellnessclinic.com">info@wecarewellnessclinic.com</a></p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
