import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '@/components/layout/LegalPage.module.css';

export const metadata: Metadata = {
  title: 'HIPAA Notice of Privacy Practices — WeCare Wellness Clinic',
  description:
    'WeCare Wellness Clinic\'s HIPAA Notice of Privacy Practices. Learn how we use and protect your protected health information (PHI) and your patient rights.',
  alternates: { canonical: 'https://www.wecarewellnessclinic.com/hipaa' },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = 'April 25, 2026';
const EFFECTIVE_DATE = 'January 1, 2025';

const TOC = [
  { id: 'our-duties', label: 'Our Duties Regarding Your PHI' },
  { id: 'uses-disclosures', label: 'How We Use & Disclose Your PHI' },
  { id: 'your-rights', label: 'Your Rights Regarding Your PHI' },
  { id: 'changes', label: 'Changes to This Notice' },
  { id: 'complaints', label: 'How to File a Complaint' },
  { id: 'contact', label: 'Contact Our Privacy Officer' },
];

export default function HipaaPage() {
  return (
    <>
      <div className={styles.hero}>
        <div className="container">
          <p className={styles.heroEyebrow}>Legal — Healthcare</p>
          <h1 className={styles.heroTitle}>HIPAA Notice of Privacy Practices</h1>
          <p className={styles.heroMeta}>
            Effective: {EFFECTIVE_DATE} &nbsp;·&nbsp; Last updated: {LAST_UPDATED}
          </p>
        </div>
      </div>

      <div className="container">
        <div className={styles.body}>

          <div className={styles.callout}>
            <p className={styles.calloutTitle}>THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION. PLEASE REVIEW IT CAREFULLY.</p>
            <p className={styles.p}>
              This Notice of Privacy Practices ("Notice") describes the privacy practices of WeCare
              Wellness Clinic and all members of its workforce, including physicians, nurse practitioners,
              physician assistants, and administrative staff.
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

          {/* Intro */}
          <div className={styles.section}>
            <p className={styles.p}>
              We are required by law — specifically, the Health Insurance Portability and Accountability
              Act (HIPAA) — to maintain the privacy of your Protected Health Information (PHI), to
              provide you with notice of our legal duties and privacy practices with respect to PHI, and
              to notify you following a breach of unsecured PHI.
            </p>
            <p className={styles.p}>
              <strong>Protected Health Information (PHI)</strong> is individually identifiable health
              information, including demographic information, that relates to: your past, present, or
              future physical or mental health condition; the provision of health care to you; or the
              past, present, or future payment for the provision of health care to you.
            </p>
          </div>

          {/* 1 */}
          <div className={styles.section} id="our-duties">
            <h2 className={styles.sectionTitle}>1. Our Duties Regarding Your PHI</h2>
            <p className={styles.p}>We are required to:</p>
            <ul className={styles.list}>
              <li>Maintain the privacy and security of your PHI</li>
              <li>Provide you with this Notice of our privacy practices</li>
              <li>Follow the terms of the Notice currently in effect</li>
              <li>Notify you if there is a breach of your unsecured PHI</li>
              <li>Provide you with a paper copy of this Notice upon request</li>
            </ul>
            <p className={styles.p}>
              We reserve the right to change the terms of this Notice and to make the new provisions
              effective for all PHI that we maintain. Revised Notices will be posted in our clinic and
              on our website.
            </p>
          </div>

          {/* 2 */}
          <div className={styles.section} id="uses-disclosures">
            <h2 className={styles.sectionTitle}>2. How We Use &amp; Disclose Your PHI</h2>

            <h3 className={styles.sectionSubtitle}>Uses and Disclosures for Treatment, Payment, and Health Care Operations (No Authorization Required)</h3>
            <p className={styles.p}>
              We may use or disclose your PHI for the following purposes without your written
              authorization:
            </p>

            <h3 className={styles.sectionSubtitle}>Treatment</h3>
            <p className={styles.p}>
              We may use and disclose your PHI to provide, coordinate, or manage your healthcare and
              related services. For example, we may share your information with specialists, labs,
              pharmacies, or hospitals involved in your care. We may also contact you to provide
              appointment reminders or information about your treatment.
            </p>

            <h3 className={styles.sectionSubtitle}>Payment</h3>
            <p className={styles.p}>
              We may use and disclose your PHI to obtain reimbursement for the services we provide to
              you. This includes submitting claims to your insurance company, verifying coverage,
              collecting copayments, and coordinating benefits.
            </p>

            <h3 className={styles.sectionSubtitle}>Health Care Operations</h3>
            <p className={styles.p}>
              We may use and disclose your PHI for our internal operations, including quality
              assessment, staff training, accreditation, licensing, business planning, and conducting
              audits or reviews of our services.
            </p>

            <h3 className={styles.sectionSubtitle}>Other Permitted Uses and Disclosures Without Authorization</h3>
            <ul className={styles.list}>
              <li><strong>As required by law</strong> — We will disclose your PHI when required by federal, state, or local law.</li>
              <li><strong>Public health activities</strong> — We may report PHI to public health authorities to prevent or control disease, report child abuse or neglect, or report reactions to medications.</li>
              <li><strong>Health oversight activities</strong> — We may disclose PHI to government agencies for oversight activities such as audits, inspections, and investigations.</li>
              <li><strong>Law enforcement</strong> — We may disclose PHI to law enforcement officials in response to a court order, warrant, subpoena, or similar process.</li>
              <li><strong>Serious threats to health or safety</strong> — We may use or disclose PHI if we believe it is necessary to prevent or lessen a serious and imminent threat to a person or the public.</li>
              <li><strong>Workers' compensation</strong> — We may disclose PHI to the extent required by workers' compensation laws.</li>
              <li><strong>Coroners, medical examiners, and funeral directors</strong> — We may disclose PHI to identify a deceased person, determine a cause of death, or as authorized by law.</li>
              <li><strong>Research</strong> — Under certain conditions, we may use or disclose PHI for approved research purposes with appropriate safeguards.</li>
              <li><strong>Facility directory</strong> — Unless you object, we may use your name, location in the facility, and general condition to tell family members or others who ask for you by name.</li>
              <li><strong>Individuals involved in your care</strong> — We may disclose relevant PHI to a family member, friend, or other person involved in your care, unless you instruct us otherwise.</li>
            </ul>

            <h3 className={styles.sectionSubtitle}>Uses and Disclosures Requiring Your Written Authorization</h3>
            <p className={styles.p}>
              For uses and disclosures other than those listed above, we will obtain your written
              authorization before using or disclosing your PHI. This includes:
            </p>
            <ul className={styles.list}>
              <li>Most uses and disclosures of psychotherapy notes</li>
              <li>Uses and disclosures of PHI for marketing purposes</li>
              <li>Disclosures that constitute the sale of PHI</li>
              <li>Other uses and disclosures not covered by this Notice or permitted by law</li>
            </ul>
            <p className={styles.p}>
              You may revoke any authorization you provide to us at any time, in writing, except to the
              extent that we have already taken action in reliance on the authorization.
            </p>
          </div>

          {/* 3 */}
          <div className={styles.section} id="your-rights">
            <h2 className={styles.sectionTitle}>3. Your Rights Regarding Your PHI</h2>
            <p className={styles.p}>
              You have the following rights regarding your PHI. To exercise any of these rights, please
              submit a written request to our Privacy Officer (see contact information below).
            </p>

            <h3 className={styles.sectionSubtitle}>Right to Inspect and Copy</h3>
            <p className={styles.p}>
              You have the right to inspect and obtain a copy of your PHI in our designated record set,
              including medical and billing records, for as long as we maintain the PHI. We may charge a
              reasonable, cost-based fee for copies. We will respond to your request within 30 days.
            </p>

            <h3 className={styles.sectionSubtitle}>Right to Amend</h3>
            <p className={styles.p}>
              If you believe that PHI we have about you is incorrect or incomplete, you may request that
              we amend the information. We may deny your request if we determine that the PHI was not
              created by us, is not part of our records, or is accurate and complete.
            </p>

            <h3 className={styles.sectionSubtitle}>Right to an Accounting of Disclosures</h3>
            <p className={styles.p}>
              You have the right to request an accounting of disclosures of your PHI made by us for
              purposes other than treatment, payment, or health care operations during the previous
              six years.
            </p>

            <h3 className={styles.sectionSubtitle}>Right to Request Restrictions</h3>
            <p className={styles.p}>
              You have the right to request restrictions on how we use or disclose your PHI for
              treatment, payment, or health care operations. We are not required to agree to your
              request, except that we must agree to restrict disclosures to a health plan if you pay
              out-of-pocket in full for a service and ask us not to submit to insurance.
            </p>

            <h3 className={styles.sectionSubtitle}>Right to Request Confidential Communications</h3>
            <p className={styles.p}>
              You have the right to request that we communicate with you about your PHI in a certain
              way or at a certain location (e.g., only at home, only in writing). We will accommodate
              reasonable requests.
            </p>

            <h3 className={styles.sectionSubtitle}>Right to a Paper Copy of This Notice</h3>
            <p className={styles.p}>
              You have the right to a paper copy of this Notice even if you have agreed to receive it
              electronically. You may request a copy at any time by contacting our office.
            </p>

            <h3 className={styles.sectionSubtitle}>Right to Be Notified of a Breach</h3>
            <p className={styles.p}>
              You have the right to be notified if your unsecured PHI is accessed, used, or disclosed
              in an unauthorized manner. We will notify you without unreasonable delay and within 60
              days of discovering such a breach.
            </p>
          </div>

          {/* 4 */}
          <div className={styles.section} id="changes">
            <h2 className={styles.sectionTitle}>4. Changes to This Notice</h2>
            <p className={styles.p}>
              We reserve the right to change this Notice at any time. We reserve the right to make the
              revised or changed Notice effective for PHI we already have about you as well as any
              information we receive in the future. We will post a copy of the current Notice in our
              office and on our website. The Notice will contain an effective date on the first page.
            </p>
          </div>

          {/* 5 */}
          <div className={styles.section} id="complaints">
            <h2 className={styles.sectionTitle}>5. How to File a Complaint</h2>
            <p className={styles.p}>
              If you believe we have violated your privacy rights, you have the right to file a
              complaint with us or with the Secretary of the U.S. Department of Health and Human
              Services. You will <strong>not</strong> be retaliated against for filing a complaint.
            </p>

            <h3 className={styles.sectionSubtitle}>Complaint to WeCare Wellness Clinic</h3>
            <div className={styles.contactBlock}>
              <p><strong>Privacy Officer — WeCare Wellness Clinic</strong></p>
              <p>214 W Brandon Blvd, Brandon, FL 33511</p>
              <p>Phone: <a href="tel:+18134385220">(813) 438-5220</a></p>
              <p>Email: <a href="mailto:privacy@wecarewellnessclinic.com">privacy@wecarewellnessclinic.com</a></p>
            </div>

            <h3 className={styles.sectionSubtitle}>Complaint to the U.S. Department of Health and Human Services</h3>
            <div className={styles.contactBlock}>
              <p><strong>Office for Civil Rights — U.S. HHS</strong></p>
              <p>200 Independence Avenue SW, Washington, D.C. 20201</p>
              <p>Toll-free: <a href="tel:18006277953">1-800-627-7953</a> (TTY: 1-800-537-7697)</p>
              <p>Online: <a href="https://www.hhs.gov/hipaa/filing-a-complaint" target="_blank" rel="noopener noreferrer">hhs.gov/hipaa/filing-a-complaint</a></p>
            </div>
          </div>

          {/* 6 */}
          <div className={styles.section} id="contact">
            <h2 className={styles.sectionTitle}>6. Contact Our Privacy Officer</h2>
            <p className={styles.p}>
              If you have any questions about this Notice or wish to exercise any of your rights,
              please contact:
            </p>
            <div className={styles.contactBlock}>
              <p><strong>WeCare Wellness Clinic — Privacy Officer</strong></p>
              <p>214 W Brandon Blvd, Brandon, FL 33511</p>
              <p>Phone: <a href="tel:+18134385220">(813) 438-5220</a></p>
              <p>Email: <a href="mailto:privacy@wecarewellnessclinic.com">privacy@wecarewellnessclinic.com</a></p>
              <p>Hours: Monday–Thursday 9AM–5PM | Friday 9AM–6PM | Saturday 9AM–1PM</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
