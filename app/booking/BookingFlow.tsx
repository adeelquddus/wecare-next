'use client';

/**
 * Multi-step booking experience.
 *
 * 4 steps:
 *   1. Service       - which kind of care
 *   2. Visit type    - in-person Brandon or telehealth statewide FL
 *   3. Your details  - name, contact, preferred window, insurance, notes
 *   4. Review        - confirm + submit -> /api/booking
 *
 * Designed as a single client component so state stays tight and the
 * progress bar can animate smoothly across steps. Field-level validation
 * happens inline; submission validation happens server-side.
 */

import { useEffect, useId, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import {
  CLINIC,
  INSURANCE,
  SERVICES,
  SERVICE_IMAGES,
  type Service,
} from '@/lib/clinic';
import styles from './BookingFlow.module.css';

type VisitType = 'in-person' | 'telehealth';

interface FormState {
  service: string;
  visitType: VisitType | '';
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  isNewPatient: boolean | null;
  insurance: string;
  notes: string;
  consent: boolean;
}

const INITIAL: FormState = {
  service: '',
  visitType: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  preferredDate: '',
  preferredTime: '',
  isNewPatient: null,
  insurance: '',
  notes: '',
  consent: false,
};

const STEPS = [
  { id: 1, key: 'service', label: 'Service',  desc: 'What you need' },
  { id: 2, key: 'visit',   label: 'Visit',    desc: 'In-person or video' },
  { id: 3, key: 'details', label: 'Details',  desc: 'About you' },
  { id: 4, key: 'review',  label: 'Confirm',  desc: 'Submit request' },
] as const;

const TIME_WINDOWS = [
  { id: 'morning',   label: 'Morning',   note: '9 AM - 12 PM' },
  { id: 'midday',    label: 'Midday',    note: '12 PM - 2 PM' },
  { id: 'afternoon', label: 'Afternoon', note: '2 PM - 5 PM' },
  { id: 'flexible',  label: 'Flexible',  note: 'Any time during open hours' },
];

const VISIT_OPTIONS: Array<{
  id: VisitType;
  title: string;
  blurb: string;
  bullets: string[];
  icon: string;
  badge?: string;
}> = [
  {
    id: 'in-person',
    title: 'In-person visit',
    blurb: 'Visit us at 214 W Brandon Blvd, Brandon FL.',
    bullets: ['Comprehensive in-clinic exam', 'In-house labs available', 'Same-week availability'],
    icon: '🏥',
  },
  {
    id: 'telehealth',
    title: 'Telehealth visit',
    blurb: 'Secure video visit from anywhere in Florida.',
    bullets: ['Same-day slots often available', 'Refills, follow-ups, mental-health check-ins', 'Statewide FL coverage'],
    icon: '💻',
    badge: 'Faster',
  },
];

function todayISO(): string {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d.toISOString().slice(0, 10);
}

function maxDateISO(): string {
  // 90 days out feels like a reasonable booking horizon
  const d = new Date();
  d.setDate(d.getDate() + 90);
  return d.toISOString().slice(0, 10);
}

export default function BookingFlow() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [form, setForm] = useState<FormState>(INITIAL);
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [confirmation, setConfirmation] = useState<{ id: string; message: string } | null>(null);

  const headingId = useId();
  const stepRef = useRef<HTMLDivElement>(null);

  // Move keyboard focus to the new step heading when the step changes.
  useEffect(() => {
    if (stepRef.current) {
      stepRef.current.focus();
    }
  }, [step, confirmation]);

  const selectedService: Service | undefined = useMemo(
    () => SERVICES.find((s) => s.slug === form.service),
    [form.service]
  );

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const markTouched = (key: keyof FormState) => {
    setTouched((prev) => ({ ...prev, [key]: true }));
  };

  // ── Validation ───────────────────────────────────────────────────
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  const validPhone = /^[+()\-\s\d]{7,20}$/.test(form.phone);

  const canAdvance = (s: number): boolean => {
    if (s === 1) return !!form.service;
    if (s === 2) return !!form.visitType;
    if (s === 3) {
      return (
        form.firstName.trim().length >= 1 &&
        form.lastName.trim().length >= 1 &&
        validEmail &&
        validPhone &&
        form.consent
      );
    }
    return true;
  };

  // ── Navigation ───────────────────────────────────────────────────
  const goNext = () => {
    if (!canAdvance(step)) return;
    setStep((s) => (s < 4 ? ((s + 1) as 1 | 2 | 3 | 4) : s));
  };
  const goBack = () => setStep((s) => (s > 1 ? ((s - 1) as 1 | 2 | 3 | 4) : s));

  // ── Submission ───────────────────────────────────────────────────
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canAdvance(3)) return;
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service: form.service,
          visitType: form.visitType,
          firstName: form.firstName.trim(),
          lastName: form.lastName.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          preferredDate: form.preferredDate || undefined,
          preferredTime: form.preferredTime || undefined,
          isNewPatient: form.isNewPatient ?? undefined,
          insurance: form.insurance || undefined,
          notes: form.notes.trim() || undefined,
        }),
      });
      const data = (await res.json().catch(() => null)) as
        | { ok: true; id: string; message: string }
        | { ok: false; error: string }
        | null;
      if (!res.ok || !data || !('ok' in data) || !data.ok) {
        const msg =
          (data && 'error' in data && data.error) ||
          'Something went wrong on our end. Please call us at ' +
            CLINIC.phoneDisplay +
            '.';
        setSubmitError(msg);
        return;
      }
      setConfirmation({ id: data.id, message: data.message });
    } catch {
      setSubmitError(
        'Network hiccup. Please check your connection or call us directly at ' +
          CLINIC.phoneDisplay +
          '.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  const reset = () => {
    setForm(INITIAL);
    setTouched({});
    setStep(1);
    setSubmitError(null);
    setConfirmation(null);
  };

  // ── Confirmation screen ──────────────────────────────────────────
  if (confirmation) {
    return (
      <div className={styles.successCard}>
        <div className={styles.successIcon} aria-hidden="true">
          <svg viewBox="0 0 64 64" width="64" height="64">
            <circle cx="32" cy="32" r="30" fill="var(--color-teal-50)" />
            <circle cx="32" cy="32" r="22" fill="var(--color-secondary)" />
            <path
              d="M22 33 l8 8 l14 -16"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>
        <h2
          ref={stepRef}
          tabIndex={-1}
          className={styles.successTitle}
        >
          Request received
        </h2>
        <p className={styles.successBody}>{confirmation.message}</p>

        <ul className={styles.successList}>
          <li>
            <strong>Reference:</strong>{' '}
            <code className={styles.refCode}>{confirmation.id}</code>
          </li>
          <li>
            <strong>Service:</strong> {selectedService?.name ?? form.service}
          </li>
          <li>
            <strong>Visit type:</strong>{' '}
            {form.visitType === 'in-person' ? 'In-person - Brandon, FL' : 'Telehealth - Video visit'}
          </li>
          <li>
            <strong>Confirmation to:</strong> {form.email} / {form.phone}
          </li>
        </ul>

        <div className={styles.successActions}>
          <a href={`tel:${CLINIC.phone}`} className={styles.btnPrimary}>
            Call us at {CLINIC.phoneDisplay}
          </a>
          <button type="button" className={styles.btnGhost} onClick={reset}>
            Submit another request
          </button>
        </div>
      </div>
    );
  }

  // ── Step UI ──────────────────────────────────────────────────────
  return (
    <form className={styles.flow} onSubmit={submit} aria-labelledby={headingId} noValidate>
      {/* Progress bar */}
      <div className={styles.progressTrack} aria-hidden="true">
        <div
          className={styles.progressFill}
          style={{ width: `${((step - 1) / (STEPS.length - 1)) * 100}%` }}
        />
      </div>

      <ol className={styles.stepper} aria-label="Booking progress">
        {STEPS.map((s) => {
          const state =
            step === s.id ? 'current' : step > s.id ? 'done' : 'todo';
          return (
            <li key={s.id} className={`${styles.stepDot} ${styles['state_' + state]}`}>
              <span className={styles.stepBubble} aria-hidden="true">
                {state === 'done' ? '✓' : s.id}
              </span>
              <span className={styles.stepText}>
                <span className={styles.stepLabel}>{s.label}</span>
                <span className={styles.stepDesc}>{s.desc}</span>
              </span>
            </li>
          );
        })}
      </ol>

      {/* Step body */}
      <div className={styles.panel} role="group" aria-labelledby={headingId}>
        {step === 1 && (
          <section>
            <h2 id={headingId} ref={stepRef} tabIndex={-1} className={styles.panelTitle}>
              What kind of care do you need?
            </h2>
            <p className={styles.panelSub}>
              Pick the closest match. You can add details in the next steps.
            </p>

            <div className={styles.serviceGrid} role="radiogroup" aria-label="Service">
              {SERVICES.map((s) => {
                const checked = form.service === s.slug;
                const img = SERVICE_IMAGES[s.slug];
                return (
                  <button
                    type="button"
                    key={s.slug}
                    role="radio"
                    aria-checked={checked}
                    onClick={() => update('service', s.slug)}
                    className={`${styles.serviceCard} ${checked ? styles.serviceCardActive : ''}`}
                  >
                    {img ? (
                      <span className={styles.serviceImageWrap} aria-hidden="true">
                        <Image
                          src={img}
                          alt=""
                          fill
                          sizes="(max-width: 640px) 50vw, 220px"
                          className={styles.serviceImage}
                        />
                        <span className={styles.serviceImageOverlay} />
                      </span>
                    ) : (
                      <span className={styles.serviceImageFallback} aria-hidden="true">
                        {s.icon}
                      </span>
                    )}
                    <span className={styles.serviceContent}>
                      <span className={styles.serviceName}>{s.name}</span>
                      <span className={styles.serviceTagline}>{s.tagline}</span>
                    </span>
                    <span className={styles.serviceCheck} aria-hidden="true">
                      {checked ? '✓' : ''}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>
        )}

        {step === 2 && (
          <section>
            <h2 id={headingId} ref={stepRef} tabIndex={-1} className={styles.panelTitle}>
              How would you like to be seen?
            </h2>
            <p className={styles.panelSub}>
              Both options are with the same board-certified provider. Telehealth covers all 67 Florida counties.
            </p>

            <div className={styles.visitGrid} role="radiogroup" aria-label="Visit type">
              {VISIT_OPTIONS.map((v) => {
                const checked = form.visitType === v.id;
                return (
                  <button
                    type="button"
                    key={v.id}
                    role="radio"
                    aria-checked={checked}
                    onClick={() => update('visitType', v.id)}
                    className={`${styles.visitCard} ${checked ? styles.visitCardActive : ''}`}
                  >
                    {v.badge && <span className={styles.visitBadge}>{v.badge}</span>}
                    <span className={styles.visitIcon} aria-hidden="true">{v.icon}</span>
                    <span className={styles.visitTitle}>{v.title}</span>
                    <span className={styles.visitBlurb}>{v.blurb}</span>
                    <ul className={styles.visitBullets}>
                      {v.bullets.map((b) => (
                        <li key={b}>
                          <span className={styles.bulletDot} aria-hidden="true">✓</span> {b}
                        </li>
                      ))}
                    </ul>
                  </button>
                );
              })}
            </div>
          </section>
        )}

        {step === 3 && (
          <section>
            <h2 id={headingId} ref={stepRef} tabIndex={-1} className={styles.panelTitle}>
              Tell us a bit about you
            </h2>
            <p className={styles.panelSub}>
              We use this to call you back and confirm a real time slot - it stays in our HIPAA-aligned system.
            </p>

            <div className={styles.fieldGrid}>
              <label className={styles.field}>
                <span className={styles.fieldLabel}>First name<span className={styles.req}>*</span></span>
                <input
                  type="text"
                  autoComplete="given-name"
                  value={form.firstName}
                  onChange={(e) => update('firstName', e.target.value)}
                  onBlur={() => markTouched('firstName')}
                  required
                  className={styles.input}
                />
              </label>
              <label className={styles.field}>
                <span className={styles.fieldLabel}>Last name<span className={styles.req}>*</span></span>
                <input
                  type="text"
                  autoComplete="family-name"
                  value={form.lastName}
                  onChange={(e) => update('lastName', e.target.value)}
                  onBlur={() => markTouched('lastName')}
                  required
                  className={styles.input}
                />
              </label>
              <label className={styles.field}>
                <span className={styles.fieldLabel}>Email<span className={styles.req}>*</span></span>
                <input
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  onBlur={() => markTouched('email')}
                  aria-invalid={touched.email && !validEmail ? true : undefined}
                  required
                  className={styles.input}
                />
                {touched.email && !validEmail && (
                  <span className={styles.fieldError}>Please enter a valid email.</span>
                )}
              </label>
              <label className={styles.field}>
                <span className={styles.fieldLabel}>Phone<span className={styles.req}>*</span></span>
                <input
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  onBlur={() => markTouched('phone')}
                  aria-invalid={touched.phone && !validPhone ? true : undefined}
                  required
                  placeholder="(813) 555-0123"
                  className={styles.input}
                />
                {touched.phone && !validPhone && (
                  <span className={styles.fieldError}>Please enter a valid phone number.</span>
                )}
              </label>

              <label className={styles.field}>
                <span className={styles.fieldLabel}>Preferred date</span>
                <input
                  type="date"
                  min={todayISO()}
                  max={maxDateISO()}
                  value={form.preferredDate}
                  onChange={(e) => update('preferredDate', e.target.value)}
                  className={styles.input}
                />
              </label>

              <div className={styles.field}>
                <span className={styles.fieldLabel}>Preferred time</span>
                <div className={styles.chipGroup} role="radiogroup" aria-label="Preferred time">
                  {TIME_WINDOWS.map((t) => {
                    const checked = form.preferredTime === t.id;
                    return (
                      <button
                        type="button"
                        key={t.id}
                        role="radio"
                        aria-checked={checked}
                        onClick={() => update('preferredTime', t.id)}
                        className={`${styles.chip} ${checked ? styles.chipActive : ''}`}
                      >
                        <span className={styles.chipLabel}>{t.label}</span>
                        <span className={styles.chipNote}>{t.note}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className={`${styles.field} ${styles.fieldFull}`}>
                <span className={styles.fieldLabel}>Are you a new patient?</span>
                <div className={styles.chipGroup}>
                  {[
                    { id: 'yes', label: "I'm new", val: true },
                    { id: 'no',  label: 'Returning patient', val: false },
                  ].map((o) => {
                    const checked = form.isNewPatient === o.val;
                    return (
                      <button
                        type="button"
                        key={o.id}
                        onClick={() => update('isNewPatient', o.val)}
                        aria-pressed={checked}
                        className={`${styles.chip} ${checked ? styles.chipActive : ''}`}
                      >
                        <span className={styles.chipLabel}>{o.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <label className={`${styles.field} ${styles.fieldFull}`}>
                <span className={styles.fieldLabel}>Insurance (optional)</span>
                <select
                  value={form.insurance}
                  onChange={(e) => update('insurance', e.target.value)}
                  className={styles.input}
                >
                  <option value="">Select your plan or skip</option>
                  {INSURANCE.map((ins) => (
                    <option key={ins} value={ins}>{ins}</option>
                  ))}
                  <option value="self-pay">Self-pay</option>
                  <option value="other">Other / not listed</option>
                </select>
              </label>

              <label className={`${styles.field} ${styles.fieldFull}`}>
                <span className={styles.fieldLabel}>Anything we should know? (optional)</span>
                <textarea
                  rows={3}
                  value={form.notes}
                  onChange={(e) => update('notes', e.target.value)}
                  maxLength={1000}
                  placeholder="Symptoms, prior conditions, or anything that helps us prepare for your visit."
                  className={styles.textarea}
                />
              </label>

              <label className={`${styles.checkboxField} ${styles.fieldFull}`}>
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) => update('consent', e.target.checked)}
                  required
                />
                <span>
                  I agree to be contacted by WeCare Wellness about this request. We never sell your info.{' '}
                  <a href="/privacy" target="_blank" rel="noreferrer" className={styles.inlineLink}>
                    Privacy
                  </a>
                </span>
              </label>
            </div>
          </section>
        )}

        {step === 4 && (
          <section>
            <h2 id={headingId} ref={stepRef} tabIndex={-1} className={styles.panelTitle}>
              Review and submit
            </h2>
            <p className={styles.panelSub}>
              Double-check below. We&apos;ll call you within one business day to lock in a real time.
            </p>

            <dl className={styles.summary}>
              <div className={styles.summaryRow}>
                <dt>Service</dt>
                <dd>{selectedService?.name ?? '-'}</dd>
              </div>
              <div className={styles.summaryRow}>
                <dt>Visit type</dt>
                <dd>{form.visitType === 'in-person' ? 'In-person - Brandon, FL' : form.visitType === 'telehealth' ? 'Telehealth - Florida-wide' : '-'}</dd>
              </div>
              <div className={styles.summaryRow}>
                <dt>Name</dt>
                <dd>{form.firstName} {form.lastName}</dd>
              </div>
              <div className={styles.summaryRow}>
                <dt>Contact</dt>
                <dd>{form.email}<br />{form.phone}</dd>
              </div>
              <div className={styles.summaryRow}>
                <dt>Preferred</dt>
                <dd>
                  {form.preferredDate || 'Any date'}
                  {' · '}
                  {form.preferredTime
                    ? TIME_WINDOWS.find((t) => t.id === form.preferredTime)?.label
                    : 'Any time'}
                </dd>
              </div>
              {form.insurance && (
                <div className={styles.summaryRow}>
                  <dt>Insurance</dt>
                  <dd>{form.insurance === 'self-pay' ? 'Self-pay' : form.insurance}</dd>
                </div>
              )}
              {form.isNewPatient !== null && (
                <div className={styles.summaryRow}>
                  <dt>Patient status</dt>
                  <dd>{form.isNewPatient ? 'New patient' : 'Returning patient'}</dd>
                </div>
              )}
              {form.notes && (
                <div className={styles.summaryRow}>
                  <dt>Notes</dt>
                  <dd className={styles.notesCell}>{form.notes}</dd>
                </div>
              )}
            </dl>

            {submitError && (
              <div role="alert" className={styles.errorBanner}>
                {submitError}
              </div>
            )}
          </section>
        )}
      </div>

      {/* Navigation */}
      <div className={styles.nav}>
        <button
          type="button"
          onClick={goBack}
          disabled={step === 1 || submitting}
          className={styles.btnGhost}
        >
          ← Back
        </button>

        <span className={styles.navStatus} aria-live="polite">
          Step {step} of {STEPS.length}
        </span>

        {step < 4 ? (
          <button
            type="button"
            onClick={goNext}
            disabled={!canAdvance(step)}
            className={styles.btnPrimary}
          >
            Continue →
          </button>
        ) : (
          <button
            type="submit"
            disabled={submitting}
            className={styles.btnPrimary}
          >
            {submitting ? 'Sending...' : 'Submit request'}
          </button>
        )}
      </div>
    </form>
  );
}
