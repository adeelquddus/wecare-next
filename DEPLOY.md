# Vercel deployment guide

This Next.js app is ready to deploy. Total time for a clean first deploy: **~5 minutes** of dashboard clicks. All subsequent deploys auto-trigger on `git push`.

You'll deploy to a **Vercel-provided URL** (e.g. `wecare-next.vercel.app`) for now and connect the production `wecarewellnessclinic.com` domain later, once everything is fully validated.

## What's in the box

- `vercel.json` — framework + region pinning (`iad1`) + immutable cache for `/_next/static/*`
- `middleware.ts` — basic-auth gate on `/admin/*` (fails closed in production unless `ADMIN_PASS` is set)
- `next.config.js` CSP — already permits Wix CDNs, Google profile photos, Wix APIs

## 1) Connect the repo to Vercel

1. Go to <https://vercel.com/new>
2. Import the `wecare-next` GitHub repo
3. **Framework Preset:** Next.js (auto-detected)
4. **Root Directory:** leave default
5. **Build Command:** leave default (`next build`)
6. **Don't deploy yet** — set env vars first

## 2) Add environment variables

Vercel → Project → Settings → Environment Variables. Set each one for **Production, Preview, Development**:

| Variable | Value | Notes |
|---|---|---|
| `NEXT_PUBLIC_WIX_CLIENT_ID` | `86da55bc-22cd-41f0-838c-d2acfd99eea7` | Public — shipped to client |
| `NEXT_PUBLIC_SITE_URL` | `https://www.wecarewellnessclinic.com` | This is the **canonical** URL for SEO, schema, OG tags. Leave it pointing at the prod domain even while you deploy to a Vercel URL — it just describes what the site *will* be. The auth flow doesn't use this value; it auto-derives from the request host. |
| `WIX_API_KEY` | The `IST.…` token from your local `.env.local` | **Server-only** — never `NEXT_PUBLIC_*` |
| `WIX_ACCOUNT_ID` | `5f5ffb3f-f4cd-48da-a71c-fa663d95db2b` | Server-only |
| `WIX_SITE_ID` | `1ca93849-81bc-44d9-83af-37f10d88a55f` | Server-only |
| `ADMIN_USER` | e.g. `admin` | For `/admin/*` basic auth |
| `ADMIN_PASS` | a strong password you'll remember | For `/admin/*` basic auth — **REQUIRED** in production |

Hit **Deploy**.

## 3) Note your Vercel URL, then register it in Wix

After your first deploy lands, you'll get a Vercel URL like `wecare-next.vercel.app` (the exact subdomain depends on the project name Vercel chose). Add it as an **Allowed Redirect URI** in **Wix Dashboard → Settings → Headless Settings → OAuth Apps → your app**:

```
https://wecare-next.vercel.app/api/auth/callback
```

⚠️ The login route auto-uses the host the user came in on, but Wix only redirects back to URIs you've pre-registered. Without this step, sign-in will fail with `auth_error=1`.

You already added `http://localhost:3001/api/auth/callback` so local dev keeps working. You don't need to add the production wecarewellnessclinic.com URI yet — do that later when you flip DNS.

## 4) Smoke-test after deploy

Hit each of these on the Vercel URL:

| Path | Expected |
|---|---|
| `/` | 200 — homepage with hero, services, testimonials slider |
| `/loyalty` | 200 — MarketingLanding (logged-out) |
| `/api/auth/login` | 307 to Wix OAuth with the **Vercel** callback URL |
| `/admin/media` | 401 — basic auth prompt |
| `/admin/media` (with creds) | 200 — Wix media library |
| `/blog` | 200 — Wix Blog rendered server-side |

## 5) Try the auth flow

1. Visit `https://your-vercel-url/loyalty`
2. Click "Sign in"
3. Wix login dialog appears
4. Sign in with your Wix Members account
5. You should bounce through the gradient "Signing you in…" page back to `/loyalty`
6. The MemberDashboard renders with your real points, animated counter, milestones, etc.

## Later — when you're ready to flip DNS to Vercel

Only do this after you've validated everything on the Vercel URL:

1. Vercel → Project → Settings → Domains → Add `www.wecarewellnessclinic.com`
2. Update DNS at your registrar:
   - `CNAME www → cname.vercel-dns.com`
   - `A    @   → 76.76.21.21`
3. Add the production callback URI in Wix:
   ```
   https://www.wecarewellnessclinic.com/api/auth/callback
   ```
4. Wait 5–60 minutes for DNS propagation

⚠️ Switching DNS **takes the Wix-hosted site offline** for the public domain. Wix-stored data (loyalty, members, bookings, blog) keeps working — only the front-end changes hands.

## Troubleshooting

| Symptom | Fix |
|---|---|
| `/api/auth/callback` redirects to `/loyalty?auth_error=1` | Check that the callback URI is registered in Wix Dashboard exactly (including https + the right subdomain) |
| Build fails with TypeScript errors | Run `npm run build` locally first |
| Avatar doesn't load on `/loyalty` after sign-in | Check the photo URL host is in `next.config.js` CSP `img-src` |
| `/admin/media` shows 401 even with correct creds | Verify `ADMIN_USER`/`ADMIN_PASS` env vars are set in Vercel for the right environment |
| Wix data is missing | Verify `WIX_API_KEY` was set in Vercel — server logs will show the underlying 401/403 from Wix |
