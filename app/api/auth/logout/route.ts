/**
 * GET /api/auth/logout
 *
 * Clears the Wix Members token cookie and redirects to the home page
 * of whichever host the user came in on. We derive the origin from the
 * incoming request (respecting x-forwarded-* proxy headers) so logout
 * works correctly on localhost, the Vercel preview URL, AND production
 * without needing per-environment env vars.
 *
 * Implemented as GET so it can be triggered by a regular <a href> link.
 */
import { NextResponse, type NextRequest } from 'next/server';
import { clearMemberTokens } from '@/lib/wix-auth';

export async function GET(req: NextRequest): Promise<NextResponse> {
  const proto = req.headers.get('x-forwarded-proto') ?? req.nextUrl.protocol.replace(':', '');
  const host  = req.headers.get('x-forwarded-host')  ?? req.nextUrl.host;
  const origin = `${proto}://${host}`;

  await clearMemberTokens();
  return NextResponse.redirect(`${origin}/`, 307);
}
