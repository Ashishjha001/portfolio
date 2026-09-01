# Proposed SEO Architecture — Data Decision Consulting

Date: 1 September 2026. Status: PROPOSAL — requires founder approval before implementation.
Principle: one primary owner URL per keyword cluster; commercial pages speak search language; educational pillars keep the methodology voice; no page created without a distinct audience, intent, purpose and substantive content.

## 1. Current architecture (verified)

```
/                        → homepage (positioning conflict: diagnostic vs full-service)
/services/               → 6 service blocks, only 2 with detail URLs
   /services/ai-search-visibility/     → diagnostic framing
   /services/measurement-foundation/   → internal-name framing
/{growth,performance-marketing,seo,ai-search}/   → 4 educational pillars
/{research,knowledge-base,search-intelligence,intelligence-log,ai-search-observatory,
  concepts,proof,scorecard,paths,playbooks,methodology,work,tools,why-datadecision}/  → 14 evidence/trust pages
/insights/ (+44 articles)
/{about,contact,privacy,terms,cookies,accessibility}/
/api/v1/*               → 5 JSON endpoints (RAG surface)
```

## 2. Target architecture (changes only — everything else retained)

```
/                        → homepage: "B2B SaaS growth & SEO consultancy, measurement-first"
                           (primary category clarity; NOT a keyword list; NOT city list)
/services/
   /services/seo/                       → NEW — B2B SaaS SEO services (owns "b2b saas seo
                                           agency/services/consultant"; India-context
                                           section owns "saas seo agency in india")
   /services/ai-search-visibility/      → UPDATE + RETITLE — AI SEO / AI-search visibility
                                           services incl. AEO & GEO scope + visibility-audit
                                           section (owns "ai seo agency", "aeo agency",
                                           "geo agency for b2b saas", "chatgpt seo services")
   /services/measurement-foundation/    → UPDATE + RETITLE — GA4, attribution & marketing
                                           measurement consulting (owns "ga4 consultant",
                                           "marketing analytics consulting")
   /services/website-development-seo/   → LATER (gated) — combined build+SEO owner
/{growth,performance-marketing,seo,ai-search}/   → pillars unchanged (educational;
                                                    /seo/ and /ai-search/ add prominent
                                                    links down to their commercial owners)
/industries/
   /industries/manufacturing-seo-surat/ → LATER (gated) — Gujarat manufacturing/export
                                           industry page with real market analysis
/insights/               → 44 retained; 1–2 retitled toward searcher phrasing; triage
                            guide expansion on the technical-access checklist
/evidence & trust pages/ → unchanged
/{about,contact}/        → contact service dropdown already anticipates new services
```

No URL changes to any existing page → no redirects needed. All new URLs follow the existing `trailingSlash: always` + directory format; sitemap list in `src/pages/sitemap.xml.ts` must gain new routes; `scripts/validate-site.mjs` required-routes list should gain the new service page(s).

## 3. Cannibalisation guards (explicit)

| Risk pair                                                                                       | Guard rule                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/services/seo/` vs `/seo/`                                                                     | Pillar stays educational ("what good SaaS SEO involves"); service page sells ("SEO services for B2B SaaS teams"). Pillar links down; service page does not re-explain strategy.                |
| `/services/ai-search-visibility/` vs `/ai-search/` vs `/insights/build-ai-visibility-baseline/` | Service page = buying; pillar = deciding what the discipline is; insight = doing it yourself. Article CTAs point to the service page; never retitle articles toward "agency/services" phrases. |
| `/services/measurement-foundation/` vs `/insights/ga4-*` (14 articles)                          | Insights own every how-to/which-tool question; the service page owns only "hire someone for GA4/attribution consulting".                                                                       |
| Homepage vs `/services/`                                                                        | Homepage states the category once; `/services/` enumerates. Homepage never lists cities or all six services.                                                                                   |
| Future city/industry pages vs service pages                                                     | City/industry pages never re-sell the service; they localise the buyer context and link to the service owner.                                                                                  |

## 4. Keyword-to-URL map summary

Full machine-readable map: `keyword-to-url-map.csv`. Core ownership:

- `b2b saas seo agency / services / consultant (+ india variants)` → `/services/seo/`
- `ai seo agency / aeo agency / geo agency / generative engine optimization agency / chatgpt seo services / ai visibility audit` → `/services/ai-search-visibility/`
- `ga4 consultant / ga4 consulting / attribution / marketing analytics consulting` → `/services/measurement-foundation/`
- `how to appear in chatgpt recommendations / get recommended by chatgpt` → `/insights/how-to-rank-and-get-recommended-by-ai/` (retitled)
- `website not ranking (long-tail variants)` → expanded technical-access checklist guide
- Everything "best agency in [city]" → rejected; third-party platforms instead

## 5. What deliberately does NOT exist in this architecture

- No `/locations/` tree now — the only defensible geo play is the gated Surat industry page (which combines industry + geography honestly) and India-context sections on service pages.
- No `/industries/` tree now — one gated page only.
- No `/comparisons/` or `/tools/` tree additions now — tools already exist at `/tools/`; comparison content stays inside insights (vendor due diligence article).
- No deletion of the 14 evidence/trust pages — they serve AEO/entity consistency even though they carry no search demand; revisit only after commercial pages index.
