/**
 * Edge middleware — gates the /admin/* surface behind HTTP basic auth.
 *
 * The Wix Media library viewer at /admin/media exposes the full clinic
 * media library; we don't want it world-readable on a public Vercel URL.
 *
 * Credentials come from env vars:
 *   ADMIN_USER  (default: "admin")
 *   ADMIN_PASS  (REQUIRED — middleware fails closed if unset in production)
 *
 * This is intentionally simple basic auth, not a full session system.
 * Good enough for "keep casual snoopers out of the admin viewer".
 */

import { NextResponse, type NextRequest } from 'next/server';

export const config = {
  /* Only run middleware on /admin and its sub-routes */
  matcher: ['/admin/:path*'],
};

function unauthorizedResponse(reason: string): NextResponse {
  return new NextResponse(`Unauthorized — ${reason}`, {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="WeCare admin"',
      'Content-Type': 'text/plain',
    },
  });
}

export function middleware(req: NextRequest): NextResponse {
  const expectedUser = process.env.ADMIN_USER || 'admin';
  const expectedPass = process.env.ADMIN_PASS;

  /* Fail closed in production if no password is configured. In dev with no
     password set, allow through so local /admin/media still works. */
  if (!expectedPass) {
    if (process.env.NODE_ENV === 'production') {
      return unauthorizedResponse('admin password not configured');
    }
    return NextResponse.next();
  }

  const authHeader = req.headers.get('authorization');
  if (!authHeader?.startsWith('Basic ')) {
    return unauthorizedResponse('basic auth required');
  }

  /* Decode "Basic base64(user:pass)" — Edge runtime has atob */
  let decoded: string;
  try {
    decoded = atob(authHeader.slice(6).trim());
  } catch {
    return unauthorizedResponse('invalid auth header');
  }

  const sep = decoded.indexOf(':');
  if (sep < 0) return unauthorizedResponse('malformed credentials');
  const user = decoded.slice(0, sep);
  const pass = decoded.slice(sep + 1);

  /* Constant-time-ish comparison — we always loop the full max length so
     timing doesn't leak which character mismatched. */
  function ctEq(a: string, b: string): boolean {
    if (a.length !== b.length) return false;
    let diff = 0;
    for (let i = 0; i < a.length; i++) {
      diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
    }
    return diff === 0;
  }

  if (!ctEq(user, expectedUser) || !ctEq(pass, expectedPass)) {
    return unauthorizedResponse('bad credentials');
  }

  return NextResponse.next();
}
