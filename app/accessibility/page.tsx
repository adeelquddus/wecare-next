import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '@/components/layout/LegalPage.module.css';

export const metadata: Metadata = {
  title: 'Accessibility Statement — WeCare Wellness Clinic',
  description:
    'WeCare Wellness Clinic is committed to digital accessibility for people with disabilities. Read our WCAG 2.1 AA accessibility statement and how to report issues.',
  alternates: { canonical: 'https://www.wecarewellnessclinic.com/accessibility' },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = 'April 25, 2026';

const TOC = [
  { id: 'commitment', label: 'Our Commitment' },
  { id: 'standards', label: 'Conformance Standards' },
  { id: 'measures', label: 'Measures We Take' },
  { id: 'known-issues', label: 'Known Issues' },
  { id: 'feedback', label: 'Feedback & Contact' },
  { id: 'formal-complaints', label: 'Formal Complaints' },
  { id: 'physical', label: 'Physical Accessibility' },
];

export default function AccessibilityPage() {
  return (
    <>
      <div className={styles.hero}>
        <div className="container">
          <p className={styles.heroEyebrow}>Legal</p>
          <h1 className={styles.heroTitle}>Accessibility Statement</h1>
          <p className={styles.heroMeta}>Last updated: {LAST_UPDATED}</p>
        </div>
      </div>

      <div className="container">
        <div className={styles.body}>

          <div className={styles.callout}>
            <p className={styles.calloutTitle}>We are committed to accessibility</p>
            <p className={styles.p}>
              WeCare Wellness Clinic believes that healthcare information should be accessible to
              everyone — including people with disabilities. If you experience any barriers on our
              website, please contact us at <a href="tel:+18134385220">(813) 438-5220</a> and we
              will assist you promptly.
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

          {/* 1 */}
          <div className={styles.section} id="commitment">
            <h2 className={styles.sectionTitle}>1. Our Commitment</h2>
            <p className={styles.p}>
              WeCare Wellness Clinic is committed to ensuring digital accessibility for people with
              disabilities, including those with visual, auditory, physical, speech, cognitive, and
              neurological disabilities. We continually improve the user experience for everyone and
              apply relevant accessibility standards.
            </p>
            <p className={styles.p}>
              This statement applies to the WeCare Wellness Clinic website at
              wecarewellnessclinic.com, including all service pages, blog, booking, and patient
              resource pages.
            </p>
          </div>

          {/* 2 */}
          <div className={styles.section} id="standards">
            <h2 className={styles.sectionTitle}>2. Conformance Standards</h2>
            <p className={styles.p}>
              We aim to conform to the{' '}
              <a href="https://www.w3.org/TR/WCAG21/" target="_blank" rel="noopener noreferrer">
                Web Content Accessibility Guidelines (WCAG) 2.1
              </a>{' '}
              at <strong>Level AA</strong>. WCAG 2.1 Level AA is the international standard adopted
              by the U.S. Department of Justice as the benchmark for web accessibility under the
              Americans with Disabilities Act (ADA) and Section 508 of the Rehabilitation Act.
            </p>
            <p className={styles.p}>
              WCAG 2.1 is organized around four principles — that web content must be:
            </p>
            <ul className={styles.list}>
              <li><strong>Perceivable</strong> — Information and UI components must be presentable in ways users can perceive (e.g., text alternatives for images).</li>
              <li><strong>Operable</strong> — UI and navigation must be operable by keyboard, not just mouse.</li>
              <li><strong>Understandable</strong> — Content and UI operation must be understandable.</li>
              <li><strong>Robust</strong> — Content must be robust enough to be interpreted by assistive technologies.</li>
            </ul>
            <p className={styles.p}>
              Our current conformance status: <strong>Partially conformant</strong>. Some areas of the
              website may not yet fully meet WCAG 2.1 AA. We are actively working to resolve known
              issues.
            </p>
          </div>

          {/* 3 */}
          <div className={styles.section} id="measures">
            <h2 className={styles.sectionTitle}>3. Measures We Take</h2>
            <p className={styles.p}>
              WeCare Wellness Clinic takes the following measures to ensure accessibility:
            </p>

            <h3 className={styles.sectionSubtitle}>Design &amp; Development</h3>
            <ul className={styles.list}>
              <li>All images include descriptive <code>alt</code> text; decorative images are marked with empty alt attributes</li>
              <li>All form inputs have associated <code>&lt;label&gt;</code> elements</li>
              <li>Color contrast ratios meet or exceed 4.5:1 for normal text and 3:1 for large text (WCAG AA)</li>
              <li>Focus indicators are visible on all interactive elements (<code>:focus-visible</code> styles)</li>
              <li>A skip-navigation link is provided to bypass repetitive header content</li>
              <li>Heading hierarchy (H1 → H2 → H3) is maintained throughout all pages</li>
              <li>ARIA landmarks and roles are used to define page structure (<code>main</code>, <code>nav</code>, <code>footer</code>)</li>
              <li>Interactive components (menus, modals) use appropriate ARIA attributes</li>
              <li>All pages specify a language attribute (<code>lang="en"</code>)</li>
            </ul>

            <h3 className={styles.sectionSubtitle}>Technology</h3>
            <ul className={styles.list}>
              <li>Website built with semantic HTML5 elements</li>
              <li>Self-hosted fonts reduce reliance on third-party rendering</li>
              <li>Responsive design ensures usability across screen sizes and zoom levels up to 400%</li>
              <li>No content flashes or motion that could trigger seizures</li>
              <li>Videos (if present) include captions and transcripts</li>
            </ul>

            <h3 className={styles.sectionSubtitle}>Testing</h3>
            <ul className={styles.list}>
              <li>Regular automated testing using accessibility linting tools</li>
              <li>Manual keyboard navigation testing on all interactive components</li>
              <li>Screen reader testing (NVDA on Windows, VoiceOver on macOS/iOS)</li>
              <li>Contrast ratio verification using WCAG contrast checkers</li>
            </ul>
          </div>

          {/* 4 */}
          <div className={styles.section} id="known-issues">
            <h2 className={styles.sectionTitle}>4. Known Issues</h2>
            <p className={styles.p}>
              Despite our best efforts, some areas of the website may have accessibility limitations.
              We are aware of the following known issues and are actively working to resolve them:
            </p>
            <ul className={styles.list}>
              <li>Some third-party embedded content (e.g., appointment booking widgets) may not fully conform to WCAG 2.1 AA. We are working with our vendors to address these limitations.</li>
              <li>Blog post content imported from our CMS may occasionally have images without optimal alt text. We review and correct these on an ongoing basis.</li>
              <li>PDF documents linked from the site may not be fully tagged for screen reader accessibility. We are working to remediate all PDFs.</li>
            </ul>
            <p className={styles.p}>
              If you find an accessibility issue not listed here, please report it to us (see Section 5).
            </p>
          </div>

          {/* 5 */}
          <div className={styles.section} id="feedback">
            <h2 className={styles.sectionTitle}>5. Feedback &amp; Contact</h2>
            <p className={styles.p}>
              We welcome your feedback on the accessibility of our website. If you experience barriers
              or encounter content you cannot access, please let us know. We take all accessibility
              concerns seriously and aim to respond within 2 business days.
            </p>
            <div className={styles.contactBlock}>
              <p><strong>WeCare Wellness Clinic — Accessibility</strong></p>
              <p>214 W Brandon Blvd, Brandon, FL 33511</p>
              <p>Phone: <a href="tel:+18134385220">(813) 438-5220</a></p>
              <p>Email: <a href="mailto:accessibility@wecarewellnessclinic.com">accessibility@wecarewellnessclinic.com</a></p>
              <p>Hours: Monday–Thursday 9AM–5PM | Friday 9AM–6PM | Saturday 9AM–1PM</p>
            </div>
            <p className={styles.p} style={{ marginTop: 'var(--space-3)' }}>
              When contacting us, please include: the URL of the page, a description of the problem,
              and what assistive technology you are using (if applicable). This helps us identify and
              resolve issues faster.
            </p>
          </div>

          {/* 6 */}
          <div className={styles.section} id="formal-complaints">
            <h2 className={styles.sectionTitle}>6. Formal Complaints</h2>
            <p className={styles.p}>
              If you are not satisfied with our response to your accessibility concern, you may contact
              the following agencies:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>U.S. Department of Justice — ADA Information Line:</strong>{' '}
                <a href="tel:18004144232">1-800-514-0301</a> (voice) | 1-800-514-0383 (TTY) |{' '}
                <a href="https://www.ada.gov" target="_blank" rel="noopener noreferrer">ada.gov</a>
              </li>
              <li>
                <strong>U.S. Department of Health and Human Services — Office for Civil Rights:</strong>{' '}
                <a href="https://www.hhs.gov/ocr" target="_blank" rel="noopener noreferrer">hhs.gov/ocr</a>
              </li>
              <li>
                <strong>Florida Commission on Human Relations:</strong>{' '}
                <a href="https://fchr.myflorida.com" target="_blank" rel="noopener noreferrer">fchr.myflorida.com</a>
              </li>
            </ul>
          </div>

          {/* 7 */}
          <div className={styles.section} id="physical">
            <h2 className={styles.sectionTitle}>7. Physical Accessibility</h2>
            <p className={styles.p}>
              Our Brandon, FL clinic is committed to physical accessibility for patients with
              disabilities:
            </p>
            <ul className={styles.list}>
              <li>ADA-compliant parking spaces available near the entrance</li>
              <li>Wheelchair-accessible entrance, exam rooms, and restrooms</li>
              <li>Hearing loop system available upon request</li>
              <li>Sign language interpretation available with advance notice — call <a href="tel:+18134385220">(813) 438-5220</a></li>
              <li>Language interpretation services available for non-English-speaking patients</li>
              <li>Telehealth appointments available for patients who cannot travel to our clinic</li>
            </ul>
            <p className={styles.p}>
              If you need a specific accommodation for your visit, please call us ahead of your
              appointment so we can make appropriate arrangements.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}
