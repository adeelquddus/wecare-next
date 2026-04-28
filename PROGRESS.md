# WeCare Wellness - Progress tracker

> Living document. Updated every session. Source of truth for "what's done / what's next" so any contributor (human or AI) can pick up where the last person stopped.
>
> **Last updated:** 28 April 2026

## 🚀 Live status

| Where | URL | Notes |
|---|---|---|
| **Vercel preview** (current canonical deploy) | https://wecare-next-flax.vercel.app | Auto-deploys on every push to `master`. All routes 200, OAuth working end-to-end. |
| **Production domain** | https://www.wecarewellnessclinic.com | **Still served by Wix.** DNS will flip to Vercel only once everything is signed off. |
| **GitHub** | https://github.com/adeelquddus/wecare-next | `master` is the canonical branch. Feature work → branches → PR → merge. |
| **Admin tools** | `/admin/media` | Basic-auth gated (`ADMIN_USER`/`ADMIN_PASS` env vars on Vercel). |

## 🌿 Branching workflow

```
master ─────────────────────────────────────► wecare-next-flax.vercel.app
   ▲                                                  │
   │ merge after verifying preview                    │
   │                                                  ▼
feat/<thing>  ──── push ────► wecare-next-git-feat-thing.vercel.app
                              (Vercel auto-creates per-branch preview URLs)
```

Every branch you push gets its own preview URL. Validate there, then merge to `master` to ship.

When the production DNS eventually flips to Vercel:
- `master` will then serve `wecarewellnessclinic.com` directly
- The Vercel-subdomain preview URL stays active as a staging URL

**Conventions:**
- `feat/<area>-<thing>` - new feature work (e.g. `feat/funnel-glp1`)
- `fix/<thing>` - bug fixes
- `docs/<thing>` - documentation-only changes
- `chore/<thing>` - build, deps, tooling

**Before merging to `master` - checklist:**
- [ ] Preview URL renders without console errors
- [ ] All affected routes return 200
- [ ] `npm run build` passes locally (TypeScript clean)
- [ ] Wix data loads on preview (check `/loyalty`, `/blog`, `/admin/media`)
- [ ] Add notes to **🟢 Recently shipped** below

---

## 🟢 Recently shipped (newest first)

### April 28 2026 - FAQ overhaul: design + comprehensive SEO/Lighthouse
- Spacing tightened (space-7 rhythm instead of space-12/16)
- Card-based FAQ items with hover lift + primary-blue "Q" badge
- Sticky category nav with frosted backdrop + horizontal scroll on mobile
- Section headers use soft tinted card with primary-blue left rule (replacing heavy 2px underline)
- Smooth-scroll for in-page anchors + prefers-reduced-motion respected
- Heading hierarchy fixed: h1 (hero) → h2 (sections) → h3 (questions)
- JSON-LD upgraded to a single @graph with 6 linked types: WebPage, ImageObject, BreadcrumbList, FAQPage, WebSite, 26 Questions
- Microdata `itemprop` attributes added inline as belt-and-braces alongside JSON-LD
- Open Graph: og:image (1200×630 with alt + dimensions), og:locale, og:site_name
- Twitter card: summary_large_image with site handle
- Robots: explicit max-snippet/max-image-preview/max-video-preview
- Keywords: 8 → 38 (local + insurance + GLP-1 + telehealth + PrEP + women's/men's clusters)
- metadataBase set so canonical/OG URLs resolve correctly across environments

### April 28 2026 - Production deployment + LLM discoverability
- Vercel deploy live at `wecare-next-flax.vercel.app`
- All 19 public routes verified 200 OK
- OAuth round-trip working (login → bounce → MemberDashboard with real points)
- `public/llms.txt` published at canonical URL - gives AI assistants a curated site map
- Bug fix: `/api/auth/logout` now derives origin from request (was redirecting off the Vercel URL)
- Admin gating: `middleware.ts` enforces basic auth on `/admin/*`

### April 27 2026 - Wix Loyalty end-to-end
- `lib/wix-loyalty.ts` REST client (rewards / accounts / tiers / earn rules)
- `lib/wix-auth.ts` Wix Members OAuth (PKCE + fragment-mode bounce HTML)
- 3 API auth routes: login, callback, logout
- `MemberDashboard` component: gradient hero, animated points counter, 4-stat strip, progress band (cumulative dollars + per-increment progress), 5-step reward roadmap, image-led rewards rail, earn-more grid
- `MarketingLanding` for logged-out state
- `/loyalty/terms` page rendering live earn/redeem rules from Wix
- `MemberAvatar` client component with onError fallback to initials
- CSP expanded to allow Google profile photos + Wix CDNs

### April 26-27 2026 - Site-wide animated icon system
- `components/ui/AnimatedIcons.tsx` - 30 brand-coloured animated SVG icons (pulse / heartbeat / wiggle / float / sway / spin / pop / twinkle / glow / drop / flash / roll / flipx)
- 14 keyframe animations added to `globals.css` with `prefers-reduced-motion` override
- ~108 emojis replaced across 17 pages (homepage, about, services, new-patients, insurance, contact, FAQ, footer, all 7 service detail pages, brandon-fl, loyalty)

### April 26 2026 - Page redesigns
- About page: custom story-driven hero with Darlyne portrait + decorative blobs + tilted profile card
- Services page: full-bleed image cards with hover zoom + quick-jump chips
- New Patients page: 10 hand-crafted SVG illustrations + decorative-blob hero
- RelatedServices: image-led 5-card grid using `SERVICE_IMAGES`
- Navbar: full-width responsive overhaul (mobile menu now at ≤1024px, was 900px)

### April 26 2026 - Real Google reviews + 5★ rating
- 12 verbatim verified reviews integrated as homepage testimonials slider via LogoLoop
- 5★ rating propagated everywhere (was 4.9★)
- 5 verbatim `Review` schema entries on homepage JSON-LD

### April 25 2026 - Tricare insurance + LogoLoop slider
- Tricare added as 6th insurer
- Insurance grid converted to LogoLoop sliding marquee
- Tricare logo gets 1.4× height boost so it reads at the same visual weight

### April 25 2026 - Wix Media admin viewer
- `lib/wix-media.ts` typed REST client with `wixImageUrl()` sized-variant builder
- `/admin/media` server component renders the full Wix media library

---

## 🟡 In progress

> Things being actively worked on. Update status notes as work progresses.

- **12-month marketing & SEO strategy** - initial draft in `MARKETING.md`. Domain confirmed (`wecarewellnessclinic.com`). Provider licensing confirmed for medical weight loss / GLP-1 across FL+NY+AZ+OR. Awaiting:
  - User confirmation on exact license scope per state (for compliance copy)
  - Choice of editorial-calendar tool (Notion / Airtable / ClickUp)
  - Budget approval for tooling stack
  - Team roster decisions (which roles in-house vs freelance)
- **Funnel build** - likely **GLP-1 weight loss funnel** since that's the multi-state licensed service. Will live on `feat/funnel-glp1`. Pending green-light to start.

---

## 🟠 Planned next

> Concrete next-up work. In priority order. Move items up to **🟡 In progress** when you start them.

1. **Roll out FAQ-grade SEO to every other page** - the FAQ page now has the gold-standard pattern (Open Graph image, Twitter card, expanded keywords, @graph JSON-LD with WebPage→FAQPage→Breadcrumb→ImageObject→WebSite, microdata, complete robots directives). Apply the same pattern to: home, about, services, new-patients, insurance, contact, blog, booking, all 7 service detail pages, brandon-fl, loyalty. Per-page `og-image` if budget allows; share `/hero-image.png` otherwise.
2. **Per-page custom OG images** - generate 1200×630 branded social cards per page (e.g. via `app/[route]/opengraph-image.tsx` Next.js convention or by extending `scripts/build_marketing_pdf.py` pattern). Differentiate from share previews so each page has its own card.
3. **Real loyalty redemption flow** - wire `redeemCurrentMemberPoints` so the "Apply $5 to my next visit" button actually deducts points and produces a Wix coupon code. Needs OAuth member-token scope (which we already have).
4. **Wix Bookings deep integration** - auto-attach the loyalty coupon to the booking URL so the discount applies at checkout.
5. **Sitemap + robots.txt** - generate dynamic sitemap.xml from the route tree. Add `noindex` for the Vercel preview URL so it doesn't compete with the prod domain on Google.
6. **DNS flip to Vercel** - only when fully validated. Steps in `DEPLOY.md` "Later - when you're ready to flip DNS".

---

## 🔵 Backlog (someday)

> Nice-to-haves. No commitment.

- **Vercel Analytics + Speed Insights** - one-click add for Core Web Vitals tracking
- **Real clinic interior / staff photos** in CDN - currently we have AI-style stock and Darlyne's portrait; would benefit from real waiting-room and exam-room photos
- **Tier system in Wix Loyalty Dashboard** - currently flat program. The MemberDashboard already auto-renders tiers if they're configured (see "Tier ladder" section that conditionally appears).
- **Email automation** - point-credit notification, low-balance reminder, tier-up congrats (Wix Automations can wire most of this)
- **Instagram follow auto-detection** - the social-follow earn rule currently requires manual crediting. Integrate Instagram Graph API to detect actual follows.
- **Real photos in `/loyalty` MarketingLanding hero** - currently uses gradient + decorative SVG. Could use a curated CDN photo of patients smiling.
- **Branded loading skeleton** for the dashboard (currently flashes default page bg while data fetches)
- **Spanish translation** - the clinic serves a bilingual community. Add `/es/...` route variants.

---

## 📚 Reference

| Doc | Purpose |
|---|---|
| `DEPLOY.md` | Vercel deployment guide (env vars, OAuth URI registration, smoke-test checklist) |
| `PROGRESS.md` (this file) | Living tracker of work shipped + planned |
| `~/.claude/projects/.../memory/MEMORY.md` | AI memory file - full project context for future sessions |
