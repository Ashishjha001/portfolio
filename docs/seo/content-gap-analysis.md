# Content Gap Analysis — Data Decision Consulting

Research date: 1 September 2026. Evidence base: live-site crawl, codebase audit, Google autocomplete captures (25+ seeds), DuckDuckGo SERP captures (8 priority queries), prior internal research (`docs/content-opportunity-map.md`, 28 Aug 2026).

## 1. The one-sentence finding

The site has world-class _educational_ depth (44 insights, methodology, tools, honest-evidence governance) but **zero pages built to be found by the buyer who is ready to hire** — every commercial query cluster is unowned, while every owned page answers questions only a _convinced_ reader would type.

## 2. Gap matrix: buyer demand vs current ownership

| Buyer search cluster                              | Demand evidence (captured)                                                                            | Current owner on site                                                                                                                                           | Gap severity                            |
| ------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| "b2b saas seo agency / services / consultant"     | Autocomplete: full suggestion chains for agency, services, best, top, consultants variants            | **None.** `/seo/` pillar is educational ("Build organic demand that has somewhere useful to go"); never says the company _sells_ SEO                            | Critical                                |
| "ai seo agency / aeo agency / geo agency"         | Autocomplete: chains incl. India/UK/USA/Singapore/Dubai/Melbourne variants; "geo agency for b2b saas" | **None commercially.** `/services/ai-search-visibility/` exists but is titled as a diagnostic, not as an AI-SEO service; "AI SEO agency" phrase appears nowhere | Critical                                |
| "ga4 consultant / marketing analytics consulting" | Autocomplete + winnable SERP (solo consultants rank)                                                  | **None.** `/services/measurement-foundation/` sells the service but under an internal name nobody searches                                                      | Critical                                |
| "how to appear in ChatGPT recommendations"        | Autocomplete + SERP of generic tip-lists                                                              | Content EXISTS (`how-to-rank-and-get-recommended-by-ai`) but under a non-searcher title                                                                         | High (title gap only)                   |
| "why is my website not ranking"                   | Autocomplete chains; SERP = broad listicles                                                           | Content EXISTS in pieces (technical-access checklist; demo-requests-dropped; traffic-up-demo-bookings-down) but no triage-framed owner                          | High                                    |
| "seo agency in surat/ahmedabad/mumbai" (India)    | Full autocomplete chains; SERP = local shops + directories                                            | None; gated correctly behind commercial-page traction                                                                                                           | Deferred (not a gap to fill today)      |
| "seo agency in dubai" etc.                        | Chains + SERP                                                                                         | None; correctly rejected for 90 days                                                                                                                            | Rejected                                |
| "seo agency for manufacturing (surat/india)"      | Autocomplete (surat manufacturing variant) + thin competitor SERP                                     | None                                                                                                                                                            | Medium — best future industry candidate |
| Dental / immigration / study-abroad               | Little-to-no demand evidence captured; dental = listicle+local-pack wall                              | None                                                                                                                                                            | Rejected                                |

## 3. Why the gap exists (root cause)

The information architecture was built **pillar-out from the company's own methodology**, not **intent-in from the buyer's vocabulary**. The four pillars (Growth, Performance, SEO, AI Search) describe disciplines; buyers search for _services_ ("agency", "consultant", "services", "company") and _symptoms_ ("not ranking", "GA4 and CRM disagree", "not in ChatGPT"). The services page sells six service blocks but only two have detail URLs — and those two are named in internal language ("Measurement Foundation") rather than search language ("GA4 & Attribution Consulting").

## 4. Content that already fills the gap but is invisible to search

These are retitling/repositioning wins, not new-content requirements:

1. `/insights/how-to-rank-and-get-recommended-by-ai/` — answers "how to appear in ChatGPT recommendations" better than any captured competitor (method-grade, dated, honest) but titles it in house vocabulary.
2. `/insights/technical-access-verification-checklist/` — the practical core of "why is my website not ranking" answers, framed as a checklist rather than the question.
3. `/services/measurement-foundation/` — sells GA4/attribution consulting without once using the words buyers search.
4. `/insights/ga4-vs-crm-lead-reconciliation/` + 13 measurement insights — the deepest GA4 content cluster on any small-consultancy site audited; feeds the retitled service page.

## 5. Information-gain opportunities vs captured competitors (what only this site can add)

- **Methodology transparency as a differentiator:** no captured competitor in the b2b-saas-seo / ai-visibility / ga4 SERPs publishes observation rules, dated samples or claim rules. The site already does (methodology v0.3, work ledger, proof architecture). Commercial pages should surface this — the cautious-buyer positioning _is_ the information gain.
- **AI-visibility audit honesty:** SERP is tool-led (free-audit funnels). A "what a real AI visibility audit must include + what ours measures and cannot prove" section beats free-audit theatrics.
- **GA4-vs-CRM decision content** (source of truth, reconciliation waterfall) is unique; competitors stop at setup/certification.
- **Surat/Gujarat manufacturing-export digitalisation angle** (for the gated industry page): captured competitors are keyword-template pages with zero local market analysis; a dated, sourced market-context page would be the only one of its kind in the captured SERP.

## 6. What must NOT be created

Per operating rules and evidence:

- Self-serving "best agency" listicles (SERP is third-party listicles; earn presence there instead).
- City pages for Dubai/Singapore/London/US (no authority, no evidence, GBP-dependent markets).
- Industry pages for dental (local-pack + listicle wall, no credibility), immigration, study-abroad (no demand evidence captured).
- Any new meta/evidence pages before commercial pages exist — the site already carries 14 trust/evidence URLs for a brand-new domain.

## 7. Prioritised gap-closing sequence

| #   | Move                                                                                                                                    | Type     | Priority |
| --- | --------------------------------------------------------------------------------------------------------------------------------------- | -------- | -------- |
| 1   | `/services/seo/` — B2B SaaS SEO services owner                                                                                          | New page | Now      |
| 2   | Retitle/extend `/services/ai-search-visibility/` → "AI SEO / AI Search Visibility Services" incl. AEO/GEO service scope + audit section | Update   | Now      |
| 3   | Retitle `/services/measurement-foundation/` → GA4 & attribution consulting phrasing                                                     | Update   | Now      |
| 4   | Retitle `/insights/how-to-rank-and-get-recommended-by-ai/` toward the ChatGPT-recommendations question                                  | Update   | Now      |
| 5   | Homepage repositioning to "B2B SaaS growth & SEO consultancy" clarity (title/H1/lede)                                                   | Update   | Now      |
| 6   | Expand technical-access checklist (or new guide) into ranking-failure triage owner                                                      | Expand   | Next     |
| 7   | Internal-link pass: insights → commercial owners with descriptive anchors                                                               | Update   | Next     |
| 8   | `/industries/manufacturing-seo-surat/` (gated)                                                                                          | New page | Later    |
| 9   | Website-development-and-SEO service page                                                                                                | New page | Later    |
