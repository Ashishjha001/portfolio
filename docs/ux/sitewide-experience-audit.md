# Sitewide experience audit

Checked: 2026-09-05

## Decision standard

Keep content that proves a claim, answers a buyer question, supports SEO or AI retrieval, explains a method, reduces risk, or leads to a meaningful next step. Remove or compress duplicated framing, decorative panels, generic calls to action, and detail that blocks scanning before it helps a decision.

The 40 protected Insight manuscripts are excluded from copy editing. Their titles, descriptions, URLs, metadata, schema, citations, and body content remain unchanged.

## Route audit

| Route                     | Visitor job                                         | Main friction found                                                                                   | Treatment                                                                                                                           |
| ------------------------- | --------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `/`                       | Understand the offer and choose a next step         | Service introduction repeated the evidence premise; cards and method occupied too much vertical space | Removed the repeated paragraph, shortened the service cards, kept the method scannable, and made CTA labels specific                |
| `/services/`              | Find the service that matches a business constraint | Full capability lists made every card tall; the hero diagram was decorative                           | Moved all capability depth into semantic disclosure, shortened visuals, and made the growth engine selectable with contextual links |
| `/methodology/`           | Judge whether the method is credible                | Above-fold content began faded; repeated rows had excessive padding                                   | Removed hero reveal delay, tightened shared row spacing, preserved the full method                                                  |
| `/research/`              | Inspect research status and limits                  | Programme detail competed with programme choice                                                       | Kept concise summaries visible and full methodology in accessible expanders; reduced card padding                                   |
| `/knowledge-base/`        | Start from a question or framework                  | Generic service labels and repeated framed blocks slowed scanning                                     | Retained question-first accordions and compacted shared layout; contextual CTA cleanup remains local to linked data                 |
| `/tools/`                 | Run a specific free check                           | Hero could appear blank while reveal initialized                                                      | Made the hero immediately readable; retained all six tools and their functional controls                                            |
| `/search-intelligence/`   | Understand the operating system                     | Long alternating chapters used the same spacing rhythm                                                | Tightened global chapter spacing while preserving interactive lab rows and evidence content                                         |
| `/intelligence-log/`      | Review dated decisions                              | Decorative hero panel and spacious rows diluted the ledger                                            | Converted shared hero asides to editorial rails and tightened shared rows                                                           |
| `/ai-search-observatory/` | Understand observed metrics and limits              | Similar cards and large chapter spacing obscured the distinction between metrics                      | Tightened spacing while preserving definitions, observation status, and limitations                                                 |
| `/why-datadecision/`      | Decide whether the practice is credible             | Repeated two-column chapter pattern felt longer than the information required                         | Reduced global section height and converted hero support from a card to a rail                                                      |
| `/proof/`                 | Understand what counts as proof                     | Card-like hero treatment competed with the evidence hierarchy                                         | Kept proof levels intact and simplified the shared hero support treatment                                                           |
| `/paths/`                 | Choose where to start                               | Decision paths were useful but entered after a visually heavy hero                                    | Made hero content immediate and reduced shared vertical padding                                                                     |
| `/scorecard/`             | Evaluate authority dimensions                       | The supporting hero box looked like another card                                                      | Converted it to a lighter editorial rail and kept score definitions intact                                                          |
| `/work/`                  | Inspect completed records                           | Low-information hero side panel had already been removed                                              | Preserved the focused single-column hero and compacted shared sections                                                              |
| `/about/`                 | Verify founder and operating principles             | Founder and principle sections repeated the same large section cadence                                | Kept trust evidence, reduced cadence, and simplified the hero aside                                                                 |
| `/concepts/`              | Find canonical definitions                          | Long definition sets need depth but not a heavy opening                                               | Made the hero immediate and reduced shared spacing without changing definitions                                                     |
| `/playbooks/`             | Find an actionable playbook                         | Hero side panel and chapter spacing added weight before the list                                      | Simplified shared hero and section rhythm; retained playbook ownership and links                                                    |
| `/insights/`              | Browse editorial guidance                           | A 40-item library created long image and section height                                               | Changed regular cards to a wider crop, shortened cluster spacing, and deferred below-fold paint with `content-visibility`           |
| Topic pages               | Understand Growth, Performance, SEO, or AI Search   | The same four large strategic cards repeated at the top of every topic                                | Converted the repeated component to a compact four-link route switcher on topic pages only                                          |
| Service detail pages      | Evaluate a specific offer                           | Useful proof and scope content was presented in a repetitive chapter cadence                          | Tightened shared sections and hero support without changing service claims, schema, or URLs                                         |

## Interaction and measurement

- `services_engine_select`: records which Search, Demand, Data, or AI node a visitor selects.
- `service_scope_expand`: records which service capability panel a visitor opens.
- Existing `faq_expand`, `research_program_toggle`, primary CTA, tool, and contact events remain active.
- Motion uses transform and opacity, stops or collapses for reduced motion, and avoids loading smooth scrolling on touch or narrow screens.

## Intentionally preserved

- All Insight manuscripts and source material.
- All routes, canonical URLs, metadata, schema, breadcrumbs, heading semantics, and internal links.
- Method, research, limitation, legal, accessibility, and conversion content.
- The existing cream, green, serif, and mono brand system.

## Deferred evidence-led work

- Do not remove additional long-form body copy until search and engagement data identifies pages with low value.
- Do not add autoplay carousels, chatbots, quizzes, calculators, or decorative motion.
- Use Search Console, CTA events, disclosure events, and contact completions to decide the next reduction pass.
