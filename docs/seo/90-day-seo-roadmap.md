# 90-Day SEO Roadmap — Data Decision Consulting

Date: 1 September 2026. Principle: smallest set of high-intent searches most likely to produce first qualified clients. Nothing ships without the positioning decision (§0) being approved by the founder.

## Phase gates (approval checkpoints)

- **Gate A (before any edit):** Founder approves primary positioning + the four Now-priority page changes. Items marked ⏸ block on Gate A.
- **Gate B (day ~30):** Founder approves measurement baseline + directory profiles.
- **Gate C (day ~60):** Data review decides whether gated pages (Surat industry, web-dev+SEO) unlock or slip.

---

## Days 1–14 — Research finalisation & technical corrections

- [x] Full site audit (this package) — done 1 Sep 2026
- [x] Positioning conflict analysis — done; recommendation issued
- [ ] ⏸ **Gate A: founder decision on positioning** (B2B SaaS growth & SEO consultancy; two flagship services) + approval of 4 page changes
- [ ] Founder actions: GSC access export (queries/landing pages/countries 16 months), Google Trends captures for top 10 seeds, Keyword Planner volumes if an ads account exists → updates keyword-master.csv confidence from `unavailable` to real numbers
- [ ] Technical corrections: sitemap lastmod automation; AGENTS.md header fix (owner-confirmed)
- [ ] Baseline capture (pre-change): GSC impressions/clicks by query class (branded vs non-branded), indexed-page count, and a stored copy of current titles for the 4 pages to be changed
- [ ] 5-prompt AI visibility baseline across ChatGPT/Gemini/Perplexity (brand + category + comparison prompts) — dated record on the observatory page; this is also the founder's own product

## Days 15–35 — Homepage refinement + core service pages + conversion

- [ ] ⏸ Homepage repositioning (title/meta/H1-lede only; no layout change)
- [ ] ⏸ `/services/seo/` new page (spec in on-page-recommendations.md §1)
- [ ] ⏸ `/services/ai-search-visibility/` retitle + AEO/GEO scope + audit-honesty section
- [ ] ⏸ `/services/measurement-foundation/` retitle to GA4/attribution consulting phrasing
- [ ] ⏸ `/insights/how-to-rank-and-get-recommended-by-ai/` retitle to ChatGPT-recommendations question + answer-first box
- [ ] Internal-link pass per internal-link-map.csv (Now rows)
- [ ] Schema: extend Service serviceType wording; verify all new/changed pages in Rich Results Test + Schema.org validator
- [ ] Sitemap + validator required-routes updated; full QA gate (`npm run qa`) green
- [ ] Contact dropdown service keys verified against new/retitled services
- [ ] Conversion check: each commercial page has exactly one primary CTA ("Request a diagnostic"); mobile CTA path verified
- [ ] Deploy (PR to master per repo rules); GSC URL inspection + request indexing on 4 URLs
- [ ] Founder visibility: LinkedIn company page + profile alignment (authority plan §2–3)

## Days 36–60 — Education cluster + platforms + original research

- [ ] Technical-access checklist → ranking-triage expansion (owner of "website not ranking" long-tail)
- [ ] 2–3 insight retitles/deepenings ONLY if GSC shows impressions arriving on adjacent informational queries (data-led, not schedule-led)
- [ ] Next-row internal links (measurement cluster → service page)
- [ ] Clutch + GoodFirms accurate profiles; Crunchbase; consistent entity wording everywhere
- [ ] Original research asset ships (observatory mini-run preferred) with dated limitations
- [ ] 2 founder LinkedIn posts/week cadence running; 2–3 expert-quote pitches out
- [ ] GSC review: new pages' impressions/clicks; queries 4–20 recorded; cannibalisation check (one URL per query class)
- [ ] **Gate C:** decide gated pages — Surat/Gujarat manufacturing industry page (needs: 60+ days service-page traction, dated market analysis, founder confirms focus) and web-dev+SEO page

## Days 61–90 — Evaluate, strengthen, earn

- [ ] Improve pages with impressions but weak CTR (title/description tests only on real data)
- [ ] Strengthen internal links to any page in positions 4–20
- [ ] Continue authority work; evaluate one new directory candidacy (reputation/spam review documented)
- [ ] If Gate C passed: gated page ships with honest remote framing
- [ ] Merge/rewrite check: any cannibalisation or thin evidence → fix immediately
- [ ] Final 90-day report vs KPIs (below); decide Next-90 priorities from evidence

---

## Measurement plan (configure in GA4/GTM at Gate B)

Events (via existing `ddTrack`/`dataLayer`): `cta_primary_click` (exists), `form_submit_success`, `form_service_selected`, `insight_read_75`, `tool_run`. Conversions: form submission + service-prefilled submission. Segments: non-branded organic landing-page sessions; branded (DataDecision/Data Decision/datadecision.consulting variants).

**KPIs (business outcomes, not vanity):**

1. Qualified non-branded impressions (GSC, 4 target clusters)
2. Non-branded clicks + CTR by landing page
3. Enquiries (form + email) with service attribution
4. Booked conversations
5. Proposals sent
6. Clients + attributable revenue

**30/60/90-day expectations (honest, no guarantees):** 30 days — new pages indexed, first non-branded impressions appearing on long-tails (ChatGPT-recommendations, GA4-consultant variants); 60 days — impressions growth in the two flagship clusters, first enquiry attributable to non-branded search; 90 days — 1–3 queries in positions 4–20, first directory profiles live, research asset earning first mentions. Anything beyond this is speculation for a months-old domain — stated plainly.

## Explicit non-goals this quarter

No city pages (all gated or rejected), no industry pages except the gated Surat candidate, no "best agency" listicles, no link purchases, no review fabrication, no bulk directories, no GBP, no guaranteed-ranking language anywhere.
