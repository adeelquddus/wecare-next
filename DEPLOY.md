# Vercel deployment guide

This Next.js app is ready to deploy. Total time for a clean first deploy: **~10 minutes** of dashboard clicks (no code changes needed). All subsequent deploys auto-trigger on `git push`.

## What's in the box

- `vercel.json` — framework + region pinning (`iad1`) + immutable cache for `/_next/static/*`
- `middleware.ts` — basic-auth gate on `/admin/*` (fails closed in production unless `ADMIN_PASS` is set)
- `next.config.js` CSP — already permits Wix CDNs, Google profile photos, Wix APIs

## 1) Push the repo to GitHub (already done)

The project lives at `https://github.com/adeelquddus/we-care-wellness-cli`.

## 2) Connect the repo to Vercel

1. Go to <https://vercel.com/new>
2. Import the `we-care-wellness-cli` GitHub repo
3. **Root Directory:** `wecare-next`
4. **Framework Preset:** Next.js (auto-detected)
5. **Build Command:** leave default (`next build`)
6. **Don't deploy yet** — set env vars first

## 3) Add environment variables

Vercel → Project → Settings → Environment Variables. Set each one for **Production, Preview, Development**:

| Variable | Value | Notes |
|---|---|---|
| `NEXT_PUBLIC_WIX_CLIENT_ID` | `86da55bc-22cd-41f0-838c-d2acfd99eea7` | Public — shipped to client |
| `NEXT_PUBLIC_SITE_URL` | `https://www.wecarewellnessclinic.com` (prod), leave blank in preview | Fallback only — auth flow auto-derives origin |
| `WIX_API_KEY` | The `IST.…` token from `.env.local` | **Server-only** — never expose |
| `WIX_ACCOUNT_ID` | `5f5ffb3f-f4cd-48da-a71c-fa663d95db2b` | Server-only |
| `WIX_SITE_ID` | `1ca93849-81bc-44d9-83af-37f10d88a55f` | Server-only |
| `ADMIN_USER` | e.g. `admin` | For `/admin/*` basic auth |
| `ADMIN_PASS` | a strong password you'll remember | For `/admin/*` basic auth — **REQUIRED** in production |

Hit **Deploy**.

## 4) Register the production callback URI in Wix

After your first deploy lands, you'll get a Vercel URL like `wecare-next-abc123.vercel.app`. Add these as **Allowed Redirect URIs** in Wix Dashboard → Settings → Headless Settings → OAuth Apps → your app:

```
https://www.wecarewellnessclinic.com/api/auth/callback
https://wecare-next-<your-unique-suffix>.vercel.app/api/auth/callback
```

The login route auto-uses the host the user came in on, so any URI you register Just Works™.

## 5) (Eventually) Connect the production domain

When you're ready to make the Vercel deploy the canonical site:

1. Vercel → Project → Settings → Domains → Add `www.wecarewellnessclinic.com`
2. Update DNS at your registrar:
   - `CNAME www → cname.vercel-dns.com`
   - `A    @   → 76.76.21.21`
3. Wait 5–60 minutes for DNS propagation

⚠️ This **takes the Wix-hosted site offline** for the public domain. Wix-stored data (loyalty, members, bookings, blog) keeps working — only the front-end changes hands.

## 6) Smoke-test after deploy

Hit each of these on the Vercel URL:

| Path | Expected |
|---|---|
| `/` | 200 — homepage with hero, services, testimonials slider |
| `/loyalty` | 200 — MarketingLanding (logged-out) |
| `/api/auth/login` | 307 to Wix OAuth with the **Vercel** callback URL |
| `/admin/media` | 401 — basic auth prompt |
| `/admin/media` (with creds) | 200 — Wix media library |
| `/blog` | 200 — Wix Blog rendered server-side |

## 7) Post-deploy: try the auth flow

1. Visit `https://your-vercel-url/loyalty`
2. Click "Sign in"
3. Wix login dialog appears
4. Sign in with your Wix Members account
5. You should bounce through the gradient "Signing you in…" page back to `/loyalty`
6. The MemberDashboard renders with your real points, animated counter, milestones, etc.

## Troubleshooting

| Symptom | Fix |
|---|---|
| `/api/auth/callback` redirects to `/loyalty?auth_error=1` | Check that the callback URI matches one registered in Wix Dashboard exactly (https + www) |
| Build fails with TypeScript errors | Run `npm run build` locally first |
| Avatar doesn't load on `/loyalty` after sign-in | Check the photo URL host is in `next.config.js` CSP `img-src` |
| `/admin/media` shows 401 even with correct creds | Verify `ADMIN_USER`/`ADMIN_PASS` env vars are set in Vercel for the right environment |
| Wix data is missing | Verify `WIX_API_KEY` was set in Vercel — server logs will show the underlying 401/403 from Wix |
