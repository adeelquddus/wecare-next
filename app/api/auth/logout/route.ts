/**
 * GET /api/auth/logout
 *
 * Clears the Wix Members token cookie and redirects to the home page.
 * Implemented as GET so it can be triggered by a regular `<a href>` link.
 */
import { NextResponse } from 'next/server';
import { clearMemberTokens } from '@/lib/wix-auth';

export async function GET(): Promise<NextResponse> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3001';
  await clearMemberTokens();
  return NextResponse.redirect(`${siteUrl}/`, 307);
}
