# WeCare Wellness - 12-month marketing & SEO strategy

> Living document. The plan. Updated every week.
>
> **Mission:** make WeCare Wellness one of the top-ranked healthcare websites for primary care, GLP-1 weight loss, telehealth, women's health, men's health, IV therapy, HRT, and HIV PrEP across **Florida, New York, Arizona, and Oregon** - measured by organic search traffic, patient bookings, and brand recognition.
>
> **Last updated:** 28 April 2026

## ⚠️ Strategic constraints to acknowledge upfront

1. **Multi-state telehealth - confirmed scope.** Provider is licensed in **FL + NY + AZ + OR specifically for medical weight loss / GLP-1 telehealth services**. Implication for SEO:
   - Patient-acquisition content for **weight loss** can run aggressively in all 4 states
   - Patient-acquisition content for primary care, women's health, men's health, HRT, IV, PrEP is **FL-only** (in-person + statewide telehealth)
   - Other-state content for non-weight-loss services should be informational-only (educational articles, no booking CTA) - drives top-of-funnel awareness without crossing license lines
   - User to confirm exact license scope per state for final content rules before Phase 3 launches

2. **Healthcare advertising is regulated.** Each state has rules - NY especially restrictive on patient-testimonial usage, drug-name claims, and "best/top" superlatives. Content review pipeline must include compliance check.

3. **YMYL ("Your Money Your Life") content** has a higher SEO bar from Google. Author bios, medical-reviewer credentials, citations, and E-E-A-T signals are non-negotiable. Every clinical article needs a credentialed reviewer's byline.

4. **HIPAA-regulated PII** never appears in marketing tooling. Patient testimonials require written consent. No real patient photos without HIPAA-compliant releases.

---

## 🎯 12-month KPIs (the scoreboard)

| Metric | Today (April 2026) | Month 6 target | Month 12 target |
|---|---|---|---|
| Organic monthly sessions | < 1,000 (estimated, Wix-served) | 8,000 | 30,000+ |
| Indexed pages | ~25 | 200+ | 500+ |
| Keywords ranking in top 10 | < 20 | 150 | 600 |
| Domain Rating (Ahrefs) | ~10 | 25 | 40 |
| Google reviews | 18 | 75 | 150+ |
| Monthly new patient bookings (organic) | unknown - need baseline | 60 | 200 |
| Email subscribers | ~0 | 500 | 2,500 |
| Instagram followers | unknown - audit | +500/mo | 10,000 |
| TikTok followers | starting from 0 | 2,000 | 15,000 |
| Backlinks (referring domains) | unknown | 50 | 200 |

These are **directional**. Real numbers depend on competition in each metro, content velocity, and how aggressively we invest in paid amplification.

---

## 🗓️ The 4 phases (12 months)

### Phase 1 - Foundation (months 1–2, weeks 1–8)

**Goal:** Domain migration done cleanly. Technical SEO bedrock laid. Tooling installed. Editorial calendar live.

| Week | Deliverables |
|---|---|
| 1 | Audit current backlinks (Ahrefs / GSC). Set up GSC + Bing Webmaster + GA4 + Microsoft Clarity. Set up Ahrefs/SEMrush. Baseline current rankings + traffic. |
| 2 | DNS flip from Wix → Vercel for `wecarewellnessclinic.com`. Update Wix OAuth allowed redirect URIs. Smoke-test every route on prod. Submit new sitemap to GSC. |
| 3 | Technical SEO audit: Core Web Vitals, schema validation, crawl errors, mobile-friendliness, broken links. Fix everything blocking. |
| 4 | Local SEO baseline: Google Business Profile optimisation, BirdEye/Tebra/Healthgrades/ZocDoc/WebMD/Yelp/BBB/local-citations setup for Brandon FL location. |
| 5 | Brand voice doc + content style guide (use `brand-voice:guideline-generation` skill). Editorial calendar in Notion or Airtable with 6 months of topics planned. Author/reviewer bios with E-E-A-T credentials. |
| 6 | Programmatic SEO infrastructure: location-page template (`/[state]/[city]/[service]/page.tsx`), data file with 50+ city/state combos. Generate ~100 location-specific landing pages. |
| 7 | Schema markup expansion: `MedicalCondition`, `MedicalProcedure`, `FAQPage`, `Article`, `Physician`, `MedicalWebPage` for every relevant page. Per-state `LocalBusiness` if applicable. |
| 8 | Content production pipeline live. First 8 articles published. Internal linking automation. Social-share metadata audited. |

### Phase 2 - Content engine (months 3–6, weeks 9–24)

**Goal:** Publish at velocity. Build topical authority. Secure first long-tail rankings.

- **Content velocity target:** 4 articles/week minimum (16/month, ~96 in 4 months)
- **Content mix:**
  - 40% **service-pillar** articles (deep dives on each service)
  - 30% **condition** articles (e.g., "Managing Type 2 diabetes in Brandon, FL")
  - 15% **comparison** articles ("Semaglutide vs Tirzepatide - which is right for you?")
  - 10% **local** articles ("Best primary care in Riverview FL", "Telehealth tips for FL snowbirds")
  - 5% **news/seasonal** ("New 2026 guidelines for HRT")
- **Programmatic launches:** Roll out location pages city-by-city (Tampa, Riverview, Valrico, Lakeland, Lithia, etc.) with localized testimonials and provider info
- **Email capture:** lead magnet on every page (e.g., "Free GLP-1 readiness checklist"), grow to 500 subs by month 4
- **Reviews push:** automated post-visit review request emails. Target +5 Google reviews/week
- **Backlink outreach:** start link building in month 3 - guest posts on regional health blogs, local journalist HARO responses, broken-link building
- **Mid-phase audit:** Month 4 - what's ranking? what's not? double down on winners.

### Phase 3 - Authority & geographic expansion (months 7–9, weeks 25–36)

**Goal:** Add NY/AZ/OR markets. Domain Rating 25+. Top-3 rankings on tier-2 keywords in FL.

- **State expansion focus = medical weight loss / GLP-1 (the licensed service in all 4 states):**
  - Launch `/[state]/glp1-weight-loss/` content clusters in **FL, NY, AZ, OR**
  - Each cluster: state landing page + city pages (5-10 cities/state) + condition pages (obesity, type 2 diabetes, PCOS-related weight gain) + comparison pages (Semaglutide vs Tirzepatide) + cost/insurance state-specific guides
  - State-specific schema (`MedicalClinic` + `availableService` scoped to each state)
  - Local citations + GBP-equivalent listings in each state's main metros
- **Other-state content for non-weight-loss services** runs as informational-only (no booking CTA) - drives top-of-funnel + email captures + builds topical authority for if/when service licensing expands
- **YouTube channel launch** - 1 long-form video/week. Repurpose into blog posts + transcribed Q&As + Shorts.
- **Influencer outreach** - partner with 5 healthcare-adjacent micro-influencers per target state (RDs, fitness coaches, fertility journey accounts). Provider quotes, joint Lives, affiliate program.
- **Press push** - pitch to 30+ regional outlets (Tampa Bay Times, AZ Central, Oregonian, regional health magazines). Source: HARO + Qwoted + ProfNet.
- **Healthcare directory expansion** - get listed on Castle Connolly, Best Doctors, US News, Vitals, Doctor.com (each state).
- **Schema expansion** - add `Person` schema for every contributor + `Course`/`HowTo` schema for educational content where applicable.

### Phase 4 - Scale & optimise (months 10–12, weeks 37–52)

**Goal:** 30k+ monthly organic sessions. 200+ new-patient bookings/month. Domain Rating 40+.

- **Conversion-rate optimisation** - A/B test landing pages, hero variants, CTA copy, booking flow
- **Paid amplification** - Google Ads on top-converting keywords (defensive for branded + offensive for high-intent like "GLP-1 doctor near me"); Meta Ads for retargeting
- **AI search optimisation** - explicit content blocks designed for AI Overview / ChatGPT / Perplexity citations (we have llms.txt, now expand to llms-full.txt and FAQ-formatted content blocks)
- **Patient-generated content engine** - solicit testimonials, before/afters (with HIPAA releases), success stories. Run "Patient Spotlight" series.
- **Membership/loyalty marketing** - leverage the loyalty program we built. Use point notifications as a retention/re-engagement channel.
- **Community building** - private Facebook group for patients, monthly "Ask Darlyne" Lives, in-person Brandon community events

---

## 🛠️ Tooling stack (recommended, in priority order)

### SEO / search

| Tool | Purpose | Why |
|---|---|---|
| **Google Search Console** | Index status, query data, impressions, sitemaps | Free + canonical |
| **Bing Webmaster Tools** | Same for Bing | Free; Bing fuels Edge + ChatGPT search |
| **Ahrefs** ($99/mo+) | Keyword research, backlink monitoring, content gap analysis | Best-in-class for healthcare niches |
| **SEMrush** (alt) | Same as Ahrefs | Slightly better for local SEO |
| **Screaming Frog** ($259/year) | Technical crawl audits | Run monthly |
| **Schema.org validator** + `validator.schema.org` | Structured data validation | Free |

### Content

| Tool | Purpose |
|---|---|
| **Claude API** (`claude-api` skill) | First-draft article generation with brand-voice enforcement |
| **brand-voice:enforce-voice** skill | Apply WeCare voice to every piece |
| **brand-voice:guideline-generation** | Build the voice doc once |
| **Notion / Airtable / ClickUp** | Editorial calendar |
| **Surfer SEO** ($89/mo+) | On-page optimisation scoring |
| **Frase / Clearscope** (alt) | Same - competitive content briefs |
| **Grammarly Business** | Final pass copy edit |
| **Yoast / Rank Math (if WP) - N/A here** | We're on Next.js so skip - we control the SEO directly via metadata / schema in the code |

### Local SEO

| Tool | Purpose |
|---|---|
| **Google Business Profile** | The most important local-SEO surface. Update weekly. |
| **BrightLocal** ($35/mo+) | Citation building + monitoring across 100+ directories |
| **BirdEye / Podium** | Review-collection automation (already on BirdEye) |
| **Whitespark** (alt) | Citation building |

### Analytics + behaviour

| Tool | Purpose |
|---|---|
| **Google Analytics 4** | Traffic, conversions |
| **Vercel Analytics + Speed Insights** | Core Web Vitals, page performance |
| **Microsoft Clarity** (free) | Heatmaps, session recordings |
| **Plausible / Fathom** (alt for privacy) | Privacy-first GA replacement |
| **Hotjar** ($39/mo+) | Session recordings + funnel analysis |

### Social + community

| Platform | Why |
|---|---|
| **Instagram + IG Reels** | Visual before/afters, reels for educational shorts |
| **TikTok** | Highest organic reach; educational shorts (~15-60s) |
| **YouTube** | Long-form education; ranks in Google + autocomplete |
| **Facebook Page + Group** | Older patient demographic + community |
| **LinkedIn** | Provider thought leadership, B2B referrals from other clinics |
| **Pinterest** | Wellness recipes, infographics - sleeper for healthcare |
| **X / Twitter** | Lower priority - quick news + journalist outreach |
| **Reddit** | Authentic answers in r/loseit, r/Semaglutide, etc. |

### Email

| Tool | Why |
|---|---|
| **ConvertKit / Mailchimp / Beehiiv** | Newsletter + drip sequences |
| **Wix Automations** (already have) | Behavioural triggers from booking/loyalty events |
| **Resend** (alt - devs love it) | Transactional emails from Next.js |

### MCPs / Claude Code tooling for marketing collaboration

| MCP / skill | Use case |
|---|---|
| **Atlassian MCP** | Confluence pages for SOPs, Jira tickets for content production |
| **Slack MCP** (already loaded) | Team coordination, content briefs in canvases |
| **Notion (via custom integration)** | Editorial calendar + content briefs |
| **Wix MCP (already have)** | Push content into Wix Blog, fetch loyalty + member data |
| **Vercel MCP (already have)** | Monitor deploys, preview PRs |
| **WebFetch / WebSearch** | Competitor research, citation hunting |
| **brand-voice plugin** (already loaded) | Voice/tone consistency enforcement on every article |
| **claude-api skill** | Build content-generation pipelines with prompt caching |
| **canvas-design skill** | Quick branded social graphics |
| **wiggle skill** | Animated logo intros/outros for Reels and YouTube |
| **theme-factory** | Apply consistent themes across decks/docs |
| **pptx skill** | Quarterly business reviews, investor decks |

### Code / engineering for SEO

| Pattern | What it does |
|---|---|
| **Programmatic SEO via `[state]/[city]/[service]/page.tsx`** | Generate hundreds of location-specific landing pages from a data file |
| **Server-side rendering (Next.js default)** | All content crawlable on first paint |
| **next/image with proper sizes/alt** | Image SEO |
| **Sitemap.xml + Sitemap.tsx generation** | Auto-update on new pages |
| **RSS feed for blog** | Discoverable + syndication channels |
| **Edge caching via Vercel** | Sub-200ms TTFB across the world |
| **JSON-LD schema everywhere** | Rich results, AI Overview eligibility |
| **llms.txt + llms-full.txt** (we have llms.txt; expand) | AI assistant authoritative source |

---

## 📅 Daily / weekly cadence (after domain migration)

### Daily standup (15 min, async via Slack)

- What was published yesterday?
- What's publishing today?
- Any blockers (compliance review, missing assets, CMS issues)?
- Top-3 metrics from yesterday (sessions, bookings, GMB calls)

### Weekly content sprint (Mondays)

- Review last week's published content + early ranking signals
- Confirm next week's editorial calendar (4–8 articles)
- Assign briefs (topic, target keyword, intent, internal links to include, word count, sources to cite)
- Compliance review of any clinical claims

### Weekly SEO + analytics review (Fridays)

- GSC top movers (gainers + losers)
- New keywords ranking in top 100
- Backlink delta (new gains, lost links)
- GBP performance (calls, direction requests, profile views)
- Conversion funnel: sessions → booking-page → confirmed bookings
- Update **PROGRESS.md** with what shipped

### Monthly strategic review (last Friday of month)

- Full traffic + ranking report
- Pipeline review: what's next quarter's focus?
- Content performance: which topics → most bookings?
- Platform expansion / contraction calls (e.g., "we're not hitting goals on Pinterest, kill it")
- Update **MARKETING.md** with revised targets

---

## 🚦 Pre-flight checklist (before kicking off month 1)

- [x] **Canonical domain confirmed** - `wecarewellnessclinic.com`
- [ ] **DNS flip Wix → Vercel** - kicks off Phase 1 day 1 (week 1)
- [x] **Provider licensing scope** - FL (full) + NY/AZ/OR (medical weight loss / GLP-1 telehealth). User to confirm exact wording per state when reviewing content.
- [ ] Legal/compliance reviewer identified for clinical content
- [ ] Brand voice doc finalised (use `brand-voice:guideline-generation` skill)
- [ ] Editorial calendar populated with first 6 months of topics
- [ ] Content review SLA defined (provider-reviewed within 48h?)
- [ ] HIPAA-compliant patient consent process for testimonials/photos
- [ ] Budget approved: tooling subscriptions (~$300–500/mo), content production (in-house vs freelance)
- [ ] Hire/assign roles: SEO lead, content writer(s), social media manager, video producer, paid-ads manager (or vendor)

---

## 📊 Reporting templates

I'll generate weekly + monthly Google-Doc-style reports auto-pulling from GSC + GA4 + Vercel Analytics + Wix Loyalty + booking data. Format TBD - Notion, Confluence, or Slack canvas depending on where the team lives.

---

## 🤝 Roles (recommended team - adjust to budget)

| Role | Hours/week | Why |
|---|---|---|
| **SEO strategist** (you + me) | 10 | Roadmap, audits, link building |
| **Medical content writer** (RN/NP-credentialed ideally) | 30 | 4 articles/week with proper E-E-A-T |
| **Provider reviewer** (Darlyne) | 4 | Sign-off on clinical accuracy |
| **Social media + community manager** | 20 | Daily IG/TikTok/YT, weekly Reels, comments |
| **Video producer** (freelance) | 10 | 1 long YT/wk + Shorts repurpose |
| **Paid ads manager** (freelance, starts month 6) | 5 | Google + Meta |
| **Compliance reviewer** (legal + state-specific marketing) | 2 | Pre-publish review for sensitive topics |

---

## 🔗 Related docs

- `DEPLOY.md` - Vercel deployment
- `PROGRESS.md` - what's done / next
- `~/.claude/projects/.../memory/MEMORY.md` - full project context

---

## Updates log

- **2026-04-28** - Initial plan drafted. Awaiting confirmation on domain + licensing approach.
