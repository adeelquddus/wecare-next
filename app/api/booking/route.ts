/**
 * Booking request endpoint.
 *
 * Receives a multi-step booking submission from the public booking flow,
 * validates it, and (for now) logs it server-side and responds 200.
 *
 * Future-ready integration points:
 *   • Email the front desk via Resend / Postmark
 *   • Push to Wix Bookings via @wix/bookings (createBooking)
 *   • Send SMS confirmation via Twilio
 *
 * Public POST. No auth required - this is a contact form, not an
 * authenticated patient action. We rate-limit lightly via a per-IP
 * cookie ("wc_b_ts") to make casual abuse painful.
 */

import { NextResponse, type NextRequest } from 'next/server';

interface BookingRequest {
  service?: string;
  visitType?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  preferredDate?: string;
  preferredTime?: string;
  isNewPatient?: boolean;
  insurance?: string;
  notes?: string;
}

const ALLOWED_SERVICES = new Set([
  'primary-care',
  'medical-weight-loss',
  'telehealth',
  'womens-health',
  'mens-health',
  'iv-hydration',
  'hiv-prep',
]);

const ALLOWED_VISIT_TYPES = new Set(['in-person', 'telehealth']);

function isEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

function isPhone(s: string) {
  // Permissive: digits, spaces, dashes, parens, plus. 7-20 chars.
  return /^[+()\-\s\d]{7,20}$/.test(s);
}

export async function POST(req: NextRequest) {
  let body: BookingRequest;
  try {
    body = (await req.json()) as BookingRequest;
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }

  const errors: string[] = [];

  if (!body.service || !ALLOWED_SERVICES.has(body.service)) errors.push('service');
  if (!body.visitType || !ALLOWED_VISIT_TYPES.has(body.visitType)) errors.push('visitType');
  if (!body.firstName || body.firstName.trim().length < 1) errors.push('firstName');
  if (!body.lastName || body.lastName.trim().length < 1) errors.push('lastName');
  if (!body.email || !isEmail(body.email)) errors.push('email');
  if (!body.phone || !isPhone(body.phone)) errors.push('phone');

  if (errors.length) {
    return NextResponse.json(
      { ok: false, error: 'Missing or invalid fields', fields: errors },
      { status: 422 }
    );
  }

  // Light rate limit: refuse a second submit within 30 seconds from the same client.
  const lastTs = req.cookies.get('wc_b_ts')?.value;
  if (lastTs && Date.now() - Number(lastTs) < 30_000) {
    return NextResponse.json(
      { ok: false, error: 'Please wait a moment before submitting again.' },
      { status: 429 }
    );
  }

  // Truncate notes to keep logs sane.
  const notes = (body.notes ?? '').slice(0, 1000);

  // Server-side log. In production this would also email the front desk.
  // Keeping the log shape compact + greppable.
  const requestId = `wc-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
  // eslint-disable-next-line no-console
  console.log('[booking-request]', JSON.stringify({
    id: requestId,
    service: body.service,
    visitType: body.visitType,
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    phone: body.phone,
    preferredDate: body.preferredDate ?? null,
    preferredTime: body.preferredTime ?? null,
    isNewPatient: body.isNewPatient ?? null,
    insurance: body.insurance ?? null,
    notes,
    receivedAt: new Date().toISOString(),
  }));

  const res = NextResponse.json({
    ok: true,
    id: requestId,
    message:
      'Got it. Our team will call you within one business day to lock in a time.',
  });
  res.cookies.set('wc_b_ts', String(Date.now()), {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60,
    path: '/',
  });
  return res;
}
