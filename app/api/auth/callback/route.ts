/**
 * GET /api/auth/callback
 *
 * Handles the redirect back from Wix's hosted login.
 *   1. Pulls `code` + `state` from the query string.
 *   2. Reads the OAuthData stashed by /api/auth/login from the
 *      `wix_oauth_state` cookie.
 *   3. Exchanges the code for member tokens via the Wix SDK.
 *   4. Persists tokens via setMemberTokens() and redirects to the
 *      original URI (or /loyalty fallback).
 *
 * On any failure, falls back to /loyalty?auth_error=1.
 */
import { NextResponse, type NextRequest } from 'next/server';
import { wixClient } from '@/lib/wix';
import { setMemberTokens } from '@/lib/wix-auth';
import type { OauthData } from '@wix/sdk';

const OAUTH_STATE_COOKIE = 'wix_oauth_state';

function isOauthData(value: unknown): value is OauthData {
  if (!value || typeof value !== 'object') return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.state === 'string' &&
    typeof v.codeVerifier === 'string' &&
    typeof v.codeChallenge === 'string' &&
    typeof v.redirectUri === 'string' &&
    typeof v.originalUri === 'string'
  );
}

/* The same origin we were called from (handles localhost vs prod automatically) */
function originFrom(req: NextRequest): string {
  const proto = req.headers.get('x-forwarded-proto') ?? req.nextUrl.protocol.replace(':', '');
  const host  = req.headers.get('x-forwarded-host')  ?? req.nextUrl.host;
  return `${proto}://${host}`;
}

/* Wix's headless OAuth uses `response_mode=fragment`, so on the first
   arrival at /api/auth/callback the browser holds `code` & `state` in
   the URL hash - which the server NEVER sees. We respond with a tiny
   HTML page whose inline script copies `location.hash` to a query
   string and reloads the same URL. The reload then takes the normal
   query-string path through this handler. */
function fragmentBounceHTML(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Signing you in…</title>
<meta name="robots" content="noindex,nofollow">
<style>
  html,body{margin:0;height:100%;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif}
  body{display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#0086C5,#10B981);color:#fff}
  .box{text-align:center;padding:32px}
  .spin{width:36px;height:36px;border:3px solid rgba(255,255,255,.35);border-top-color:#fff;border-radius:50%;animation:s 1s linear infinite;margin:0 auto 16px}
  @keyframes s{to{transform:rotate(360deg)}}
  p{margin:0;font-size:14px;opacity:.92}
</style>
</head>
<body>
<div class="box">
  <div class="spin" aria-hidden="true"></div>
  <p>Signing you in…</p>
</div>
<script>
(function(){
  var h = window.location.hash || '';
  if (h.length > 1) {
    var qs = h.slice(1); // strip leading '#'
    window.location.replace(window.location.pathname + '?' + qs);
  } else {
    // No code & no fragment - nothing to do, send them to /loyalty.
    window.location.replace('/loyalty?auth_error=1');
  }
})();
</script>
</body>
</html>`;
}

export async function GET(req: NextRequest): Promise<NextResponse> {
  const origin = originFrom(req);
  const errorRedirect = NextResponse.redirect(`${origin}/loyalty?auth_error=1`, 307);
  errorRedirect.cookies.delete(OAUTH_STATE_COOKIE);

  try {
    const code = req.nextUrl.searchParams.get('code');
    const state = req.nextUrl.searchParams.get('state');

    /* Fragment-mode arrival: code & state aren't in the query string
       because Wix put them in the URL fragment. Serve the inline-JS
       bounce page that turns the fragment into a query string and
       reloads. The reload comes back here with proper search params. */
    if (!code || !state) {
      // We do still need the state cookie at this point - if it's
      // missing, this isn't a real OAuth bounce, it's a stale visit.
      const hasState = !!req.cookies.get(OAUTH_STATE_COOKIE)?.value;
      if (!hasState) return errorRedirect;
      return new NextResponse(fragmentBounceHTML(), {
        status: 200,
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
      });
    }

    const stateCookie = req.cookies.get(OAUTH_STATE_COOKIE)?.value;
    if (!stateCookie) return errorRedirect;

    const parsedUnknown: unknown = JSON.parse(stateCookie);
    if (!isOauthData(parsedUnknown)) return errorRedirect;
    const oauthData: OauthData = parsedUnknown;

    const tokens = await wixClient.auth.getMemberTokens(code, state, oauthData);
    await setMemberTokens(tokens);

    const dest = oauthData.originalUri && oauthData.originalUri.startsWith('/')
      ? oauthData.originalUri
      : '/loyalty';

    const res = NextResponse.redirect(`${origin}${dest}`, 307);
    res.cookies.delete(OAUTH_STATE_COOKIE);
    return res;
  } catch {
    return errorRedirect;
  }
}
