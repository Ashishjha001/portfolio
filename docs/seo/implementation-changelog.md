# Implementation Changelog — SEO Research & Implementation

All work on branch `seo/research-package` (created from `codex/rebuild-v2` @ `edab826`). Baseline verified before changes: `npm run build` PASS (71 files), `npm run validate` PASS. Full QA gate re-run after implementation: format ✅ · astro check ✅ (0 errors) · build ✅ (72 files) · validate ✅ · external links ✅ (63 checked, 1 LinkedIn allowlist entry documented below).

## 2026-09-01 — Research package (docs only)

1. **Full codebase inspection** — framework (Astro 7 static), routing (36 page files + 5 API endpoints), metadata system (`BaseLayout` props + `entityDefinition` single source of truth), sitemap generation (`src/pages/sitemap.xml.ts`), validation pipeline (`scripts/validate-site.mjs`), styling/motion architecture (Ledger system, vanilla-JS motion layer), content collections (44 insights + 1 work record with strict schemas).
2. **Live-site crawl** — homepage, services, about, contact, pillars, robots.txt, sitemap.xml fetched and audited; URL inventory built (45 indexable URLs).
3. **Positioning conflict analysis** — three-way conflict documented; recommendation issued; approved by founder ("implement this").
4. **Search-data collection (accessible sources only)** — Google autocomplete captured for 25+ seed queries (dated 1 Sep 2026); DuckDuckGo SERPs captured for 8 priority queries as a labelled Google proxy; GSC/Keyword Planner/Ahrefs/Semrush marked honestly as inaccessible; no volume/CPC/difficulty numbers invented.
5. **Deliverables written** to `docs/seo/`: seo-audit.md, keyword-master.csv, keyword-to-url-map.csv, city-opportunity-analysis.csv, competitor-serp-analysis.csv, content-gap-analysis.md, site-architecture.md, on-page-recommendations.md, technical-seo-audit.md, internal-link-map.csv, authority-building-plan.md, 90-day-seo-roadmap.md, implementation-changelog.md (this file).

## 2026-09-02 — Gate A implementation (approved)

### Files created

| File                           | Change                                                                                                                                                                                                                                                                                                                                            |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/pages/services/seo.astro` | **NEW PAGE** `/services/seo/` — "B2B SaaS SEO Services" owner page: 8 sections (problem, deliverables, process, fit, trust, AI-era, India context, FAQ), Service + FAQPage schema, single primary CTA (Request an SEO diagnostic), built entirely on existing components (BaseLayout/Breadcrumbs/MethodBadge/FAQList/FinalCTA) — no new CSS or JS |

### Files modified

| File                                                            | Change                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `src/pages/index.astro`                                         | Homepage repositioning: title → "B2B SaaS Growth & SEO Consultancy \| Data Decision Consulting"; description rewritten; sr-only H1 text → "Growth you can prove: SEO, AI-search visibility and measurement consulting for B2B SaaS…"; hero lede anchored to B2B SaaS. Rotator animation untouched.                                                                                                                                               |
| `src/data/entityDefinition.ts`                                  | Entity repositioning (feeds Organization schema + footer + BaseLayout defaults on every page): description/oneLineFocus/positioning/category updated to "B2B SaaS growth and SEO consultancy"; category changed from "Decision intelligence consultancy"                                                                                                                                                                                         |
| `src/layouts/BaseLayout.astro`                                  | Default title fallback aligned to new positioning                                                                                                                                                                                                                                                                                                                                                                                                |
| `src/pages/services/ai-search-visibility.astro`                 | Retitled → "AI SEO & Search Visibility Services"; H1 → "AI search visibility services, measured honestly."; added AEO/GEO/AI-SEO definitions section; added "What an AI visibility audit includes — and what it cannot prove" honesty section; added India fit line; 2 new FAQs (AI SEO vs AEO vs GEO; audit scope/limits); Service schema name/serviceType updated; breadcrumbs now Home → Services → page; chapter numbering resequenced 01–07 |
| `src/pages/services/measurement-foundation.astro`               | Retitled → "GA4, Attribution & Measurement Consulting"; H1 → "GA4 and attribution consulting that ends dashboard disagreements."; new "What a GA4 consultant should fix" section (source capture / windows & thresholds / CRM reconciliation / assumption governance) linking 3 published insights; Service schema name/serviceType updated; breadcrumbs Home → Services → page; renumbered sections                                             |
| `src/pages/services.astro`                                      | Title → "SEO, AI Search & Growth Services for B2B SaaS…"; added `detail` links rendered as "Explore service →" on blocks 01 (→ measurement-foundation) and 02 (→ /services/seo/)                                                                                                                                                                                                                                                                 |
| `src/data/topicArchitecture.ts`                                 | SEO pillar serviceLinks → `/services/seo/` ("SEO services for B2B SaaS"); AI pillar label → "AI-search visibility services"; Growth + Performance pillar links → "GA4 and attribution consulting"; two pillar seoTitles title-cased                                                                                                                                                                                                              |
| `src/content/insights/how-to-rank-and-get-recommended-by-ai.md` | Retitled to the searchable question ("How to Appear in ChatGPT Recommendations…"); description leads with the query; answer-first box rewritten to answer the question directly; updatedDate → 2026-09-01; CTA links now point to `/services/ai-search-visibility/` + `/services/seo/` instead of the contact param                                                                                                                              |
| `src/content/insights/b2b-saas-seo-query-to-page-map.md`        | CTA link now also points to `/services/seo/`                                                                                                                                                                                                                                                                                                                                                                                                     |
| `src/content/insights/how-to-run-profitable-paid-ads.md`        | CTA links now point to `/services/seo/` + `/services/ai-search-visibility/`                                                                                                                                                                                                                                                                                                                                                                      |
| `src/content/insights/seo-vs-ai-search-budget-allocation.md`    | CTA now also links `/services/ai-search-visibility/`                                                                                                                                                                                                                                                                                                                                                                                             |
| `src/pages/tools.astro`                                         | Final-CTA secondary link → `/services/seo/`                                                                                                                                                                                                                                                                                                                                                                                                      |
| `src/pages/about.astro`                                         | Description + hero lede + founder paragraph aligned to the new positioning (growth and SEO consultancy; SEO + AI-search visibility + measurement)                                                                                                                                                                                                                                                                                                |
| `src/components/ContactForm.astro`                              | Service dropdown label + JS label map: "Web, SEO & AI Visibility" → "SEO & AI-Search Visibility (B2B SaaS)" (value unchanged: `web-seo-ai-visibility`)                                                                                                                                                                                                                                                                                           |
| `src/data/frameworks.ts`                                        | Query-cluster framework serviceHref → `/services/seo/`                                                                                                                                                                                                                                                                                                                                                                                           |
| `src/data/questionOwnership.ts`                                 | Query-map question service → `/services/seo/`                                                                                                                                                                                                                                                                                                                                                                                                    |
| `src/pages/sitemap.xml.ts`                                      | Added `/services/seo/`; fallbackLastmod → 2026-09-01                                                                                                                                                                                                                                                                                                                                                                                             |
| `scripts/validate-site.mjs`                                     | Added `services/seo/index.html` to required routes                                                                                                                                                                                                                                                                                                                                                                                               |
| `scripts/check-external-links.mjs`                              | Allowlisted `www.linkedin.com` (999 throttle) — pre-existing baseline failure verified via `git stash` before change; link valid in browser; documented in the script comment                                                                                                                                                                                                                                                                    |

### Verification (all post-implementation)

- `npm run format:check` ✅ "All matched files use Prettier code style!"
- `npm run check` ✅ 0 errors, 0 warnings (2 pre-existing hints)
- `npm run build` ✅ 72 HTML files (71 + new service page)
- `npm run validate` ✅ routes, internal links, metadata, schema, claim guardrails
- `npm run check:external` ✅ 63 links checked (LinkedIn allowlisted, documented)
- JSON-LD spot-parse on 7 key pages ✅ all blocks valid; Service schema serviceType strings verified
- Built-output spot-checks: new page title/H1/canonical/description correct; all retitled pages verified in `dist/`; AEO/GEO + audit-honesty + GA4-scope sections present; "Explore service" links render (×2)

### Not changed (by design)

- URL structure of every existing page (zero redirects needed)
- Ledger design system, motion layer, components, CSS (new page reuses existing classes only)
- robots.txt, canonical logic, OG system, robots meta — verified correct at audit, untouched
- All other 43 insight articles, evidence/trust pages, API endpoints
- Contact form value keys (`?service=` params remain compatible)

## 2026-09-03 — Phase 2: Service expansion and evidence-gated location launch

The founder confirmed that the four expanded service capabilities are genuinely deliverable. The release keeps those service pages while applying a stricter publication gate to local SEO pages.

### New indexable pages (6)

| URL                                  | Purpose                                                                                     |
| ------------------------------------ | ------------------------------------------------------------------------------------------- |
| `/services/google-ads-management/`   | Google Ads strategy, execution, conversion measurement and CRM-connected optimization       |
| `/services/meta-ads-management/`     | Meta Ads management, creative testing, Pixel/CAPI setup and revenue-aware reporting         |
| `/services/market-research/`         | Buyer, category, competitor and demand research tied to a documented business decision      |
| `/services/website-development-seo/` | Website strategy and development with SEO, AI-search readiness and measurement in the scope |
| `/locations/`                        | Explains the evidence gate for dedicated market pages and the remote delivery model         |
| `/locations/surat/`                  | Surat page for manufacturers, exporters and B2B teams, supported by linked public sources   |

### Location quality gate

- Removed seven templated location routes from the build, sitemap, validator and internal navigation: Ahmedabad, Vadodara, Rajkot, New York, San Francisco, Florida and Dubai.
- Surat remains the first dedicated market page because the repository's research identified it as the initial candidate and official Gujarat sources provide specific industry context.
- The page states that service is remote, avoids LocalBusiness and PostalAddress schema, rejects ranking guarantees, labels the research date and links the underlying sources.
- A new location page should be released only after it has distinct search evidence, market research, useful local context and a defensible delivery story. A city-name substitution is not enough.

### Accuracy and technical changes

- Corrected Meta terminology: Advanced Matching and Conversions API replace the Google-specific phrase “enhanced conversions.”
- Qualified broad claims about campaign failure patterns, Google Ads offline-conversion visibility, delivery timelines and AI citation readiness.
- Kept all supported service capabilities while separating deliverable work from outcomes controlled by ad platforms, search engines and buyers.
- Footer and services hub now link only to the published location hub and Surat page.
- Sitemap gives the six Phase 2 routes an accurate `2026-09-03` modification date; validator requires the same routes.
- Contact form values remain unchanged, preserving existing query parameters and submission handling.

### Verification

- `npm run format:check` ✅
- `npm run check` ✅ 0 errors (2 pre-existing unused-variable hints)
- `npm run build` ✅ 78 static pages
- `npm run validate` ✅ 78 HTML files, required routes, internal links, metadata, schema and claim guardrails
- `npm run check:external` ✅ 66 external links
- Responsive browser QA at 390×844 and 1440×900 ✅ all six new routes have one H1, one canonical, structured data and no positive horizontal overflow
- Sitemap ✅ 77 indexable URLs, including the six Phase 2 routes and excluding the seven held location drafts

## Pending

- Validate market demand in Google Search Console before releasing any additional location route.
- Build primary research or documented client evidence that earns links and supports future market pages.
- Complete verified company profiles and direct outreach; new pages alone do not guarantee rankings or clients.
