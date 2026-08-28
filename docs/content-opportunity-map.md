# DataDecision content opportunity map

**Research date:** 28 August 2026  
**Repository audited:** `C:\Users\dell\OneDrive\Documents\Default Project\datadecision-site`  
**Live site checked:** `https://datadecision.consulting/`  
**Decision standard:** publish only when DataDecision can add a method, worksheet, diagnostic, evidence record or reproducible analysis that current results do not provide.

## Executive findings

- The repository and live Insights index contain **36 published Insights**. The strongest existing coverage is GA4-to-CRM reconciliation, source governance, demo-funnel diagnosis and baseline AI-search measurement.
- The site has **three service routes** (including the service overview) and **four strategic pillar routes**: Growth, Performance Marketing, SEO and AI Search/AEO/GEO.
- The live homepage, Insights index and repository use the same Ledger-style visual system and crawlable static architecture. The content programme should use the current Markdown collection, `ArticleLayout`, pillar data and Insights index. No redesign is required.
- The highest risk of unnecessary duplication is in lead-source truth, traffic-versus-demo diagnosis and basic SEO/AEO/GEO explanation. New work in those areas needs a narrower operational question or should improve an existing owner.
- The strongest uncovered commercial territories are: form friction versus accepted lead quality; Indian ₹ budget planning without unsupported benchmarks; SEO-versus-AI-search allocation; query-to-page ownership; geo-holdout readiness for low-density B2B outcomes; creative stopping rules; general agency due diligence; and server-log verification of AI access.
- `content_gap_matrix.pdf` was not present in the repository or its `Default Project` parent during the audit.
- No existing page needs an immediate merge or redirect. Four pages merit later improvement, but their current roles are distinct enough to retain.

## Audit and research method

The audit combined:

1. repository route, content-schema, layout, sitemap, download and internal-link inspection;
2. live homepage and Insights-index inspection, including canonical, H1, navigation and all 36 article links;
3. current Google result inspection from India on 28 August 2026;
4. Google autocomplete and People Also Ask collection for representative commercial queries;
5. current organic-result review for the priority territories;
6. Reddit and specialist-community review for questions and objections, treated as qualitative demand signals rather than verified facts;
7. primary-source review from Google, LinkedIn, W3C, HubSpot, Meta’s open-source GeoLift project, OpenAI and public B2B SaaS benchmark publishers.

### Google question signals captured

For `how to evaluate b2b saas marketing agency`, the result page surfaced these People Also Ask questions:

- What are the best B2B SaaS performance marketing agencies?
- What is a good marketing strategy for B2B SaaS?
- What are the 7 Ps of B2B marketing?
- What is the Rule of 7 in B2B marketing?

Autocomplete for `b2b saas marketing agency` included India, Google Ads, creative agency, best agency and digital marketing agency variants. This suggests high commercial demand, but the result set is agency-authored and saturated with shallow selection criteria. A DataDecision article therefore needs an evidence-request pack, incentive check and scoring protocol rather than another list of questions.

For `SEO vs GEO budget allocation` queries, current results frequently prescribe fixed percentages such as 70/30, 60/40 or a 20–40% reallocation. The pages rarely expose a comparable sample or explain what changes when technical readiness, buyer behaviour or measurement quality differs. That weakness directly supports a no-default-split decision framework.

### Community signals

- Incrementality discussions repeatedly ask how B2B teams can run holdouts without Fortune 500 conversion density and how to respond to “no lift detected.” See the [mid-market B2B incrementality discussion](https://www.reddit.com/r/programmatic/comments/1tabd9v/incrementality_testing_for_a_midmarket_b2b/) and [small-brand feasibility discussion](https://www.reddit.com/r/PPC/comments/1ndkqib/small_brands_rarely_run_ad_spend_incremental_tests_why/).
- LinkedIn Ads discussions focus on high CPC/CPL, small audiences, insufficient learning volume and weak lead-to-opportunity quality. The useful question is the cost per accepted opportunity under the company’s own funnel, not a universal India benchmark.
- AI-search budget discussions show teams considering reallocations without a stable answer-surface baseline. A recurring objection is that shared SEO foundations are being relabelled and charged twice.
- Demo-form discussions concentrate on field count. Very few results put seller time, accepted meetings and opportunity creation beside the submit rate.

### Primary-source implications

- Google’s [generative AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide?hl=en) says established SEO practices remain foundational and advises against purported shortcuts such as unnecessary AI text files for Google’s generative features.
- Google’s [Generative AI performance report documentation](https://support.google.com/webmasters/answer/16984139) creates a distinct measurement surface for Google AI Overviews and AI Mode, but rollout and eligibility limits mean it cannot be treated as a universal AI-search report.
- Google’s [geo-experiment paper](https://research.google/pubs/measuring-ad-effectiveness-using-geo-experiments/), current [Conversion Lift documentation](https://support.google.com/google-ads/answer/12003020?hl=en) and Meta’s open-source [GeoLift project](https://github.com/facebookincubator/GeoLift) support a rigorous readiness article. They also expose why power, contamination and outcome maturity need to be decided before launch.
- Google’s [link guidance](https://developers.google.com/search/docs/crawling-indexing/links-crawlable), [canonicalization guidance](https://developers.google.com/search/docs/crawling-indexing/canonicalization?hl=en) and [doorway policy](https://developers.google.com/search/docs/essentials/spam-policies) support a query-to-page ownership method that goes beyond keyword clustering.
- W3C’s [forms tutorial](https://www.w3.org/WAI/tutorials/forms/) supports short, necessary, labelled and well-validated forms. It does not provide the B2B pipeline-quality decision, which is the opening for original analysis.
- Google Ads documents [average daily budget behaviour](https://support.google.com/google-ads/answer/6385083/about-average-daily-budgets?hl=en-GB), while public SaaS reports such as the [Baker Tilly and Benchmarkit survey](https://www.bakertilly.com/insights/b2b-saas-benchmark-report) show how widely economics vary by company context. The India article should use transparent ₹ assumptions and refuse false precision.

## Content inventory

### Status key

- **Retain:** distinct owner; preserve and maintain.
- **Improve:** retain the URL but strengthen scope, evidence or internal placement in a later batch.
- **Merge / redirect:** no immediate candidate identified.

### Service and pillar pages

| Existing URL                        | Primary topic                               | Search intent                    | Target reader              | Funnel stage  | Pillar       | Important internal links                                       | Action  | Cannibalization note                                                                    |
| ----------------------------------- | ------------------------------------------- | -------------------------------- | -------------------------- | ------------- | ------------ | -------------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------- |
| `/services/`                        | Complete growth service system              | Commercial investigation         | B2B SaaS founder / CMO     | Decision      | Cross-pillar | Contact; service anchors                                       | Improve | Keep as overview; make subservice ownership more explicit later, not a new overview URL |
| `/services/ai-search-visibility/`   | Dated AI-search baseline and action plan    | Commercial investigation         | CMO / SEO lead             | Decision      | AI Search    | Contact                                                        | Retain  | Distinct from educational AI pillar and baseline guide                                  |
| `/services/measurement-foundation/` | GA4, CRM and revenue reconciliation service | Commercial investigation         | CMO / marketing operations | Decision      | Performance  | AI-referral measurement; contact                               | Retain  | Service owner; do not target informational “GA4 vs CRM” queries here                    |
| `/growth/`                          | Constraint-led B2B SaaS growth              | Broad commercial / informational | Founder / growth lead      | Consideration | Growth       | Demo diagnosis; CRO; pricing diagnosis; measurement service    | Retain  | Pillar must remain broader than demo-funnel content                                     |
| `/performance-marketing/`           | Paid acquisition economics and measurement  | Broad commercial / informational | Demand gen / CMO           | Consideration | Performance  | Paid ads; CAC; revenue measurement; UTM governance             | Retain  | Owns strategic territory; service playbook owns implementation detail                   |
| `/seo/`                             | Technical and commercial B2B SaaS SEO       | Broad commercial / informational | SEO lead / founder         | Consideration | SEO          | Rank-and-recommend playbook; overlap guide; access checklist   | Retain  | Do not create another generic B2B SaaS SEO pillar                                       |
| `/ai-search/`                       | AI-search visibility, AEO and GEO           | Broad commercial / informational | CMO / SEO lead             | Consideration | AI Search    | Baseline; three surfaces; crawler access; referral measurement | Retain  | Distinct from service route; keep measurement limitations visible                       |

### Published Insights (36)

| Existing URL                                         | Primary topic                         | Search intent               | Target reader              | Funnel stage   | Pillar                         | Important internal links                          | Action  | Cannibalization note                                                                            |
| ---------------------------------------------------- | ------------------------------------- | --------------------------- | -------------------------- | -------------- | ------------------------------ | ------------------------------------------------- | ------- | ----------------------------------------------------------------------------------------------- |
| `/insights/aeo-geo-vendor-due-diligence/`            | AI vendor evaluation scorecard        | Commercial investigation    | CMO / procurement          | Decision       | AI Search                      | AI baseline; crawler policy; methodology          | Retain  | General agency due diligence must exclude AI-vendor sampling detail                             |
| `/insights/ai-crawler-access-policy/`                | Robots, crawler purposes and llms.txt | Technical diagnostic        | SEO / developer            | Implementation | AI Search                      | Crawler decision matrix                           | Retain  | Server-log verification can be a distinct advanced follow-up                                    |
| `/insights/attribution-assumption-register/`         | Measurement assumption governance     | Implementation              | Marketing operations       | Consideration  | Performance                    | Reconciliation; measurement service               | Retain  | Cookie-restricted attribution article should use this as the governance layer                   |
| `/insights/b2b-saas-demo-funnel-dashboard/`          | Full demo-funnel dashboard            | Implementation              | Growth / RevOps            | Consideration  | Growth                         | Demo cluster; reconciliation                      | Retain  | Owns dashboard; new form article owns the form-field decision                                   |
| `/insights/b2b-saas-demo-show-up-rate/`              | Trustworthy show-up rate              | Diagnostic                  | Demand gen / sales ops     | Consideration  | Growth                         | Demo dashboard; routing                           | Retain  | Do not publish generic demo benchmarks                                                          |
| `/insights/break-even-cac-worksheet/`                | CAC ceiling from contribution margin  | Financial diagnostic        | CMO / finance              | Decision       | Performance                    | Assumption register; reconciliation               | Retain  | ₹ budget article uses it rather than restating the worksheet                                    |
| `/insights/build-ai-visibility-baseline/`            | Fixed buyer-question AI baseline      | Implementation              | SEO / CMO                  | Consideration  | AI Search                      | Templates; methodology; contact                   | Retain  | Answer-volatility article should begin after this baseline exists                               |
| `/insights/consent-mode-declined-tracking/`          | Consent-mode evidence limits          | Diagnostic                  | Marketing operations       | Consideration  | Performance                    | Direct diagnosis; UTM governance                  | Retain  | Cookie-restricted ledger must cover cross-system confidence, not repeat consent-mode basics     |
| `/insights/crm-direct-traffic-despite-utm-tags/`     | Lost campaign source into CRM         | Diagnostic                  | Marketing operations       | Consideration  | Performance                    | Reconciliation; HubSpot vs GA4; UTM governance    | Retain  | Keep focused on Direct-source failure                                                           |
| `/insights/demo-no-shows-diagnosis/`                 | Meeting-stage no-shows                | Diagnostic                  | Demand gen / sales ops     | Consideration  | Growth                         | Demo dashboard; routing                           | Retain  | Distinct stage owner                                                                            |
| `/insights/demo-request-routing-sales-vs-sdr/`       | Demo routing by readiness and fit     | Decision support            | Sales / RevOps             | Decision       | Growth                         | Dashboard; show-up rate                           | Retain  | Form article may link here but must not answer routing again                                    |
| `/insights/demo-requests-dropped-rankings-flat/`     | Stable rankings, falling demos        | Diagnostic                  | SEO / demand gen           | Consideration  | Growth                         | Demo dashboard; pricing diagnosis; reconciliation | Retain  | Distinct SEO-to-conversion symptom                                                              |
| `/insights/ga4-attribution-windows/`                 | GA4 attribution settings              | Implementation              | Analytics / CMO            | Consideration  | Performance                    | Assumption register; reconciliation               | Retain  | Keep configuration focus distinct from incrementality                                           |
| `/insights/ga4-data-thresholds/`                     | GA4 thresholds and modelled values    | Diagnostic                  | Analyst / CMO              | Consideration  | Performance                    | Consent article; measurement service              | Retain  | Narrow technical owner                                                                          |
| `/insights/ga4-or-crm-source-of-truth/`              | System ownership by question          | Decision support            | CMO / RevOps               | Consideration  | Performance                    | Reconciliation; HubSpot vs GA4                    | Retain  | Cannibalizes if a new “which tool to trust” article is created                                  |
| `/insights/ga4-vs-crm-lead-reconciliation/`          | Lead reconciliation waterfall         | Diagnostic / implementation | CMO / marketing operations | Consideration  | Performance                    | Direct; source of truth; ChatGPT revenue; UTM     | Retain  | Existing pillar owner; no second general reconciliation guide                                   |
| `/insights/how-to-build-ai-agents/`                  | Business AI-agent implementation      | Service playbook            | Operations / founder       | Decision       | Outside four editorial pillars | GPT integrations; contact                         | Retain  | Do not force into AI-search cluster                                                             |
| `/insights/how-to-increase-conversion-rate/`         | CRO and lifecycle implementation      | Service playbook            | Growth lead                | Decision       | Growth                         | Routing; revenue; small samples; contact          | Improve | Broad title; preserve as service playbook and clarify its role when deeper CRO guides grow      |
| `/insights/how-to-integrate-gpt-business-systems/`   | GPT systems integration               | Service playbook            | Operations / IT            | Decision       | Outside four editorial pillars | AI agents; contact                                | Retain  | Separate from search visibility                                                                 |
| `/insights/how-to-measure-marketing-revenue/`        | Source-to-revenue implementation      | Service playbook            | CMO / marketing ops        | Decision       | Performance                    | Reconciliation cluster; contact                   | Retain  | Distinct implementation playbook; avoid another generic channel-revenue guide                   |
| `/insights/how-to-rank-and-get-recommended-by-ai/`   | Combined SEO and AI implementation    | Service playbook            | Founder / SEO lead         | Decision       | SEO                            | Access; baseline; measurement; methodology        | Retain  | Broad implementation owner; new budget article answers allocation only                          |
| `/insights/how-to-run-profitable-paid-ads/`          | Paid acquisition implementation       | Service playbook            | Demand gen / founder       | Decision       | Performance                    | CAC; CRO; UTM; contact                            | Retain  | New ₹ budget article owns planning, not campaign implementation                                 |
| `/insights/hubspot-original-source-vs-ga4/`          | HubSpot versus GA4 source fields      | Comparative diagnostic      | HubSpot / analytics owner  | Consideration  | Performance                    | Source of truth; reconciliation                   | Retain  | Do not publish another generic HubSpot/GA4 comparison                                           |
| `/insights/launch-quarter-self-case-protocol/`       | Pre-committed self-case evidence      | Method                      | Founder / analyst          | Consideration  | Growth                         | Baseline; small samples; methodology              | Retain  | Distinct evidence-governance note                                                               |
| `/insights/marketing-measurement-stack-build-order/` | Measurement stack sequence            | Implementation planning     | Marketing operations       | Consideration  | Performance                    | Assumptions; reconciliation; UTM                  | Retain  | Tool-list articles would dilute this decision-first owner                                       |
| `/insights/measuring-ai-referrals-ga4/`              | Observable AI referrals in GA4        | Technical measurement       | Analyst / marketing ops    | Implementation | AI Search                      | AI-referral QA template; measurement service      | Retain  | Do not create a second “track AI referrals in GA4” route                                        |
| `/insights/pricing-page-visits-up-demos-flat/`       | Pricing-page intent versus demos      | Diagnostic                  | Growth / product marketing | Consideration  | Growth                         | Demo dashboard; traffic diagnosis                 | Retain  | Pricing-packaging pre-mortem must focus on change design, not page traffic                      |
| `/insights/review-platforms-source-infrastructure/`  | Review sites as answer sources        | Strategic diagnostic        | CMO / customer marketing   | Consideration  | AI Search                      | Baseline; technical checklist; service            | Retain  | Source-concentration article should measure dependency, not restate value of reviews            |
| `/insights/seo-aeo-geo-overlap/`                     | Discipline overlap                    | Comparative informational   | CMO / SEO lead             | Awareness      | SEO                            | Crawler access; baseline; measurement             | Improve | Protect from new budget article by clarifying that this page defines work, not spend allocation |
| `/insights/small-conversion-samples-inference/`      | Honest small-sample decisions         | Method                      | Analyst / growth lead      | Consideration  | Growth                         | Reconciliation; methodology                       | Retain  | Supporting method for forms, creative and holdout work                                          |
| `/insights/technical-access-verification-checklist/` | Crawl and fetch checklist             | Technical implementation    | SEO / developer            | Implementation | SEO                            | Crawler policy; baseline; service                 | Retain  | Server-log article must add observed bot-request evidence                                       |
| `/insights/three-ai-surfaces-measurement/`           | Surface-specific AI measurement       | Comparative method          | CMO / analyst              | Consideration  | AI Search                      | Baseline; referrals; technical checklist          | Retain  | Do not create a generic mentions-versus-citations explainer                                     |
| `/insights/track-chatgpt-referral-revenue/`          | ChatGPT visit to revenue join         | Implementation              | Marketing ops / CMO        | Consideration  | AI Search                      | Source of truth; reconciliation; services         | Retain  | GA4 article owns classification; this owns CRM revenue chain                                    |
| `/insights/traffic-up-demo-bookings-down/`           | Demand-to-demo diagnostic             | Diagnostic                  | Founder / growth lead      | Consideration  | Growth                         | Complete demo cluster; reconciliation             | Retain  | Existing demo-funnel pillar owner                                                               |
| `/insights/utm-governance-b2b/`                      | UTM ownership and taxonomy            | Implementation              | Marketing operations       | Implementation | Performance                    | Direct diagnosis; reconciliation                  | Retain  | Paid-search waste article should assume this layer exists                                       |
| `/insights/zero-click-content-funding/`              | Funding content without clicks        | Decision framework          | CMO / content lead         | Decision       | SEO                            | Baseline; access; methodology                     | Improve | Keep funding role distinct from SEO-versus-AI allocation; deepen its evidence worksheet later   |

### Inventory disposition summary

- Retain: **39** routes
- Improve in place later: **4** routes
- Merge now: **0**
- Redirect now: **0**

## Opportunity scoring model

Each score is the sum of:

- Commercial relevance: 25
- Ability to provide original analysis: 25
- Weakness of existing results: 20
- Audience demand: 15
- Link and citation potential: 10
- Production feasibility: 5

`P0` means current batch, `P1` next two batches, and `P2` later in the initial six-batch programme.

## Top 24 programme

| Rank | Working title                                                                               | Pillar      | Batch | Score | Priority |
| ---: | ------------------------------------------------------------------------------------------- | ----------- | ----: | ----: | -------- |
|    1 | SEO or AI Search: Where Should a B2B SaaS Team Invest Next?                                 | AI Search   |     1 |    95 | P0       |
|    2 | B2B SaaS Demo Forms: Reduce Friction Without Lowering Lead Quality                          | Growth      |     1 |    94 | P0       |
|    3 | How to Build a B2B SaaS Demand-Generation Budget in Indian ₹                                | Performance |     1 |    93 | P0       |
|    4 | B2B SaaS SEO Query-to-Page Mapping Without Cannibalization                                  | SEO         |     1 |    92 | P0       |
|    5 | Is a Geo-Holdout Test Feasible for Your B2B SaaS Funnel?                                    | Performance |     2 |    91 | P1       |
|    6 | Creative Testing for Small B2B Samples: Stopping Rules Before Launch                        | Performance |     2 |    90 | P1       |
|    7 | Prove AI Crawler Access With Server Logs, Not robots.txt Alone                              | AI Search   |     2 |    90 | P1       |
|    8 | How to Evaluate a B2B SaaS Marketing Agency: The Evidence Request Pack                      | Growth      |     2 |    89 | P1       |
|    9 | The Commercial B2B SaaS SEO Architecture: Services, Use Cases, Integrations and Comparisons | SEO         |     3 |    89 | P1       |
|   10 | Cookie-Restricted Attribution: Build a Confidence Ledger Across GA4 and CRM                 | Performance |     3 |    88 | P1       |
|   11 | MER, ROAS and Contribution Margin: Which Metric Can Authorize B2B SaaS Spend?               | Performance |     4 |    88 | P1       |
|   12 | How Often Should You Remeasure AI-Search Visibility?                                        | AI Search   |     3 |    87 | P1       |
|   13 | LinkedIn Ads in India: Model the Economics Without Borrowing a Benchmark                    | Performance |     4 |    87 | P1       |
|   14 | Acquisition, Activation or Retention: Find the First SaaS Growth Constraint                 | Growth      |     3 |    86 | P1       |
|   15 | AI Citation Dependency: Measure Source Concentration Risk                                   | AI Search   |     4 |    86 | P1       |
|   16 | Before a Pricing or Packaging Change: Run This B2B SaaS Pre-Mortem                          | Growth      |     4 |    85 | P1       |
|   17 | Message Mismatch or Form Friction? A Landing-Page Isolation Test                            | Growth      |     5 |    85 | P2       |
|   18 | Discovery, Crawl, Index or Rank? A Technical SEO Incident Triage                            | SEO         |     5 |    85 | P2       |
|   19 | India Enterprise Demand Generation: Map the Buying Committee Before the Channel             | Growth      |     5 |    84 | P2       |
|   20 | India-to-Global B2B SaaS SEO: When Localized Pages Are Justified                            | SEO         |     5 |    84 | P2       |
|   21 | Which Internal Links Should You Add First? A Commercial Priority Model                      | SEO         |     6 |    83 | P2       |
|   22 | Paid-Search Waste: Join Search Terms to Accepted Pipeline Before Negating                   | Performance |     6 |    83 | P2       |
|   23 | Can an AI Agent Complete the Task? A Functional Accessibility Test                          | AI Search   |     6 |    82 | P2       |
|   24 | Repair the Owned Page or the Third-Party Source? An AI Visibility Decision Tree             | AI Search   |     6 |    82 | P2       |

## Batch 1 — implemented now

### 1. SEO or AI Search: Where Should a B2B SaaS Team Invest Next? — 95

- **Score:** 25 commercial + 25 original analysis + 19 result weakness + 13 demand + 9 citation + 4 feasibility = **95 / P0**.
- **Primary query:** SEO vs AI search budget allocation. **Secondary questions:** Should GEO replace SEO? How much should move? Which work is shared? What evidence justifies an AI-search line?
- **Reader / stage / intent:** Founder, CMO or SEO lead; decision stage; commercial decision support.
- **Overlap:** `seo-aeo-geo-overlap` defines work boundaries; `zero-click-content-funding` covers content roles. The new page owns marginal investment allocation only.
- **Current competitors:** OrganiKPI, Stackmatix, GeoDocs and agency budget guides. **Gap:** fixed percentages without comparable samples, readiness gates or a measurement repair option.
- **Original contribution:** SHARED–SEARCH–ANSWER–REVENUE framework and no-default-split scorecard.
- **Evidence / asset:** Google AI guidance, Google AI performance report, existing DataDecision baseline and referral methods; downloadable allocation CSV; labelled ₹10 lakh demonstration.
- **Internal links / conversion:** AI Search pillar, SEO pillar, baseline, three-surface measurement, query map and AI-search service; visibility-diagnostic brief.

### 2. B2B SaaS Demo Forms: Reduce Friction Without Lowering Lead Quality — 94

- **Score:** 25 + 24 + 18 + 14 + 9 + 4 = **94 / P0**.
- **Primary query:** B2B SaaS demo form fields. **Secondary questions:** How many fields? Which fields improve quality? Should qualification move after booking? What should guardrail a form test?
- **Reader / stage / intent:** Growth, demand gen, RevOps and sales; consideration; diagnostic implementation.
- **Overlap:** Demo dashboard owns the whole funnel; routing guide owns post-submit ownership. New page owns visible-field decisions.
- **Current competitors:** GrowthSpree, Understory, LanderKit and CRO pattern libraries. **Gap:** field-count advice rarely includes accepted meetings, seller time and opportunity quality together.
- **Original contribution:** KEEP–MOVE–REMOVE field test and complete buyer-cost/company-cost ledger.
- **Evidence / asset:** W3C forms and validation guidance, HubSpot conditional forms, GOV.UK form patterns; decision-log CSV; labelled synthetic comparison.
- **Internal links / conversion:** Growth pillar, dashboard, routing, small samples and measurement service; growth-system brief.

### 3. How to Build a B2B SaaS Demand-Generation Budget in Indian ₹ — 93

- **Score:** 25 + 25 + 19 + 13 + 7 + 4 = **93 / P0**.
- **Primary query:** B2B SaaS marketing budget India. **Secondary questions:** Is ₹2 lakh enough for LinkedIn? How should ₹10 lakh be allocated? How does ACV set the budget? How much must remain for learning?
- **Reader / stage / intent:** India-based founder, CMO, demand gen and finance; decision; commercial planning.
- **Overlap:** Break-even CAC owns the finance boundary; paid-ads playbook owns execution. New page owns a quarterly operating plan.
- **Current competitors:** upGrowth, Frameleads, Infijet and generic India benchmark pages. **Gap:** unsupported ₹ ranges, mixed samples and no sales-capacity gate.
- **Original contribution:** bottom-up customer-to-qualified-response model, channel readiness gate and explicit learning reserve.
- **Evidence / asset:** Google and LinkedIn budget documentation, public SaaS survey context, DataDecision CAC method; INR worksheet; labelled ₹10 lakh demonstration.
- **Internal links / conversion:** Performance pillar, CAC worksheet, paid-ads playbook, reconciliation and measurement service; paid-growth brief.

### 4. B2B SaaS SEO Query-to-Page Mapping Without Cannibalization — 92

- **Score:** 24 + 24 + 18 + 13 + 9 + 4 = **92 / P0**.
- **Primary query:** B2B SaaS keyword mapping. **Secondary questions:** When does a query need a new page? Should a blog and service page coexist? When should pages merge or redirect?
- **Reader / stage / intent:** SEO lead, content lead or product marketer; consideration; implementation.
- **Overlap:** SEO pillar remains broad; rank-and-recommend playbook remains end-to-end. New page owns URL assignment decisions.
- **Current competitors:** Technotize, KeyClusters and generic keyword-clustering tools. **Gap:** clusters are not tied to reader, evidence, conversion path or merge/redirect governance.
- **Original contribution:** READER–DECISION–EVIDENCE–ACTION test and five-action ownership map.
- **Evidence / asset:** Google links, canonicalization, doorway policy and Search Console limits; query-map CSV; synthetic URL demonstration.
- **Internal links / conversion:** SEO pillar, technical checklist, SEO/AI playbook and AI-budget guide; SEO architecture brief.

## Batch 2 — recommended next

### 5. Is a Geo-Holdout Test Feasible for Your B2B SaaS Funnel? — 91

- **Primary query / questions:** B2B SaaS geo holdout test; minimum geographies, outcome choice, long sales cycle, contamination and “no lift detected.”
- **Reader / stage / intent:** Performance lead and analyst; decision / implementation.
- **Overlap:** Attribution-window and small-sample articles provide supporting methods; no direct owner exists.
- **Competitors / gap:** Prooflytics and incrementality vendors explain the method; Google and GeoLift provide technical detail. Results rarely give a B2B readiness rejection rule before launch.
- **Original contribution / evidence / asset:** GO–REDESIGN–DO NOT RUN feasibility gate; Google geo papers, Conversion Lift and GeoLift; power-input worksheet and annotated test plan.
- **Internal links / conversion:** Performance pillar, small samples, attribution register and measurement service; incrementality diagnostic.
- **Score:** 25 + 24 + 18 + 12 + 9 + 3 = **91 / P1**.

### 6. Creative Testing for Small B2B Samples: Stopping Rules Before Launch — 90

- **Primary query / questions:** B2B creative testing framework; minimum evidence, kill rule, fatigue versus weak message, what to do before conversions mature.
- **Reader / stage / intent:** Paid social / demand gen; implementation.
- **Overlap:** Small-sample article supplies inference limits; paid-ads playbook supplies campaign context.
- **Competitors / gap:** LinkedIn’s A/B guidance and generic test blogs discuss equal exposure or impressions. They rarely pre-commit business guardrails and inconclusive outcomes.
- **Original contribution / evidence / asset:** creative evidence ladder, stop/continue/rotate/inconclusive rules and test registry.
- **Internal links / conversion:** Performance pillar, small samples, paid-ads playbook and form guide; paid-growth brief.
- **Score:** 24 + 24 + 18 + 12 + 8 + 4 = **90 / P1**.

### 7. Prove AI Crawler Access With Server Logs, Not robots.txt Alone — 90

- **Primary query / questions:** verify AI crawler access; which logs, bot verification, allowed-but-never-fetched, blocked resources and fake user agents.
- **Reader / stage / intent:** Technical SEO / developer; implementation.
- **Overlap:** Crawler policy explains intended access; technical checklist verifies page behaviour. New page owns observed request evidence.
- **Competitors / gap:** bot-policy pages stop at robots.txt; platform dashboards obscure raw evidence.
- **Original contribution / evidence / asset:** request-to-render evidence chain, log-field schema and false-positive rules.
- **Internal links / conversion:** AI pillar, crawler policy, access checklist and AI-search service; technical visibility diagnostic.
- **Score:** 23 + 24 + 18 + 12 + 9 + 4 = **90 / P1**.

### 8. How to Evaluate a B2B SaaS Marketing Agency: The Evidence Request Pack — 89

- **Primary query / questions:** how to evaluate a B2B SaaS marketing agency; what evidence to request, pilot scope, incentives, CRM access and claim verification.
- **Reader / stage / intent:** Founder, CMO and procurement; decision; commercial investigation.
- **Overlap:** AEO/GEO vendor scorecard remains AI-specific. New page covers the complete growth partner decision.
- **Competitors / gap:** GrowthSpree, Lean Labs, ScaleGrowth and agency directories list questions. Most do not supply a claim ledger, adverse-incentive check or paid-diagnostic acceptance criteria.
- **Original contribution / evidence / asset:** evidence request pack, claim classification, access boundary and pilot acceptance matrix.
- **Internal links / conversion:** Growth pillar, methodology, measurement stack and AI-vendor due diligence; diagnostic brief.
- **Score:** 25 + 23 + 15 + 13 + 9 + 4 = **89 / P1**.

## Batch 3

### 9. The Commercial B2B SaaS SEO Architecture — 89

- **Primary query / questions:** B2B SaaS SEO site architecture; when services, use cases, industries, integrations and comparisons deserve routes.
- **Reader / stage / intent:** SEO / product marketing; implementation.
- **Overlap:** Query map owns individual assignment; this page owns the route system.
- **Competitors / gap:** SaaS SEO agencies provide page lists without evidence requirements or maintenance cost.
- **Original contribution / asset:** commercial route charter and evidence minimum by page type; architecture worksheet.
- **Links / conversion:** SEO pillar, query map, technical checklist; SEO architecture brief.
- **Score:** 24 + 23 + 17 + 13 + 8 + 4 = **89 / P1**.

### 10. Cookie-Restricted Attribution: Build a Confidence Ledger Across GA4 and CRM — 88

- **Primary query / questions:** B2B attribution without cookies; what remains observable, modelled or unknown; how to preserve first-party source evidence.
- **Reader / stage / intent:** Marketing operations / privacy / CMO; implementation.
- **Overlap:** Consent Mode page owns Google-specific modelling; new page owns the cross-system evidence ledger.
- **Competitors / gap:** consent and analytics vendors emphasize recovery. Few separate observed, joined, modelled, self-reported and unknown pipeline.
- **Original contribution / asset:** five-state confidence ledger and field-by-field capture map.
- **Links / conversion:** Performance pillar, consent mode, Direct diagnosis, reconciliation; measurement brief.
- **Score:** 25 + 23 + 16 + 12 + 8 + 4 = **88 / P1**.

### 11. Acquisition, Activation or Retention: Find the First SaaS Growth Constraint — 86

- **Primary query / questions:** SaaS growth bottleneck; is traffic, activation or retention the problem; which cohort to inspect first.
- **Reader / stage / intent:** Founder / product growth / CMO; diagnostic.
- **Overlap:** Growth pillar is broad; conversion playbook is implementation. New page owns first-constraint isolation.
- **Competitors / gap:** PLG guides default to activation and marketing guides default to acquisition; few reconcile acquisition source with activation and retained cohorts.
- **Original contribution / asset:** constraint ladder and cohort evidence table.
- **Links / conversion:** Growth pillar, traffic-to-demo, CRO playbook and small samples; growth-system brief.
- **Score:** 24 + 22 + 16 + 12 + 8 + 4 = **86 / P1**.

### 12. How Often Should You Remeasure AI-Search Visibility? — 87

- **Primary query / questions:** AI visibility tracking frequency; prompt volatility, sample drift, tool variance and meaningful change.
- **Reader / stage / intent:** CMO / SEO / analyst; implementation planning.
- **Overlap:** Baseline guide owns first collection; three-surfaces guide owns separation. New page owns cadence.
- **Competitors / gap:** monitoring vendors encourage continuous dashboards without a decision-based review rule.
- **Original contribution / asset:** change-trigger cadence, stable panel rule and “no decision, no rerun” schedule.
- **Links / conversion:** AI pillar, baseline, three surfaces and methodology; AI-search diagnostic.
- **Score:** 22 + 24 + 18 + 11 + 8 + 4 = **87 / P1**.

## Batch 4

### 13. MER, ROAS and Contribution Margin: Which Metric Can Authorize B2B SaaS Spend? — 88

- **Primary query / questions:** MER vs ROAS for SaaS; pipeline value, contribution margin, long sales cycles and budget authorization.
- **Reader / stage / intent:** CMO / finance / performance; decision.
- **Overlap:** CAC worksheet owns ceiling; revenue playbook owns source joins. New page owns metric authority.
- **Competitors / gap:** results are dominated by ecommerce definitions and do not handle sales-accepted pipeline or delayed contribution.
- **Original contribution / asset:** metric-authority matrix and board decision ledger.
- **Links / conversion:** Performance pillar, CAC, revenue measurement and assumptions; paid-growth brief.
- **Score:** 25 + 23 + 16 + 12 + 8 + 4 = **88 / P1**.

### 14. LinkedIn Ads in India: Model the Economics Without Borrowing a Benchmark — 87

- **Primary query / questions:** LinkedIn Ads cost India B2B SaaS; minimum viable learning budget, accepted-opportunity cost and small audiences.
- **Reader / stage / intent:** India demand gen / founder; commercial planning.
- **Overlap:** INR budget owns portfolio planning; this page owns one-channel economics.
- **Competitors / gap:** Infijet, ScaleGrowth, upGrowth and others publish ₹ ranges with small or opaque samples. Teams need a method that works without accepting those numbers.
- **Original contribution / asset:** reverse funnel calculator, learning-density gate and source-quality caveat table.
- **Links / conversion:** Performance pillar, INR budget, paid-ads playbook and CAC; paid-growth brief.
- **Score:** 25 + 22 + 18 + 13 + 5 + 4 = **87 / P1**.

### 15. Before a Pricing or Packaging Change: Run This B2B SaaS Pre-Mortem — 85

- **Primary query / questions:** SaaS pricing change checklist; value metric, migration, sales exceptions, measurement and churn risk.
- **Reader / stage / intent:** Founder / product / finance; decision.
- **Overlap:** Pricing-page diagnosis owns page behaviour; new page owns commercial change governance.
- **Competitors / gap:** Stripe, SBI and pricing consultancies explain models but rarely provide a cross-functional failure pre-mortem.
- **Original contribution / asset:** failure-mode register, cohort plan and rollback evidence pack.
- **Links / conversion:** Growth pillar, pricing-page diagnosis, small samples and measurement; growth-system brief.
- **Score:** 24 + 22 + 16 + 12 + 7 + 4 = **85 / P1**.

### 16. AI Citation Dependency: Measure Source Concentration Risk — 86

- **Primary query / questions:** AI citation share by source; what happens when one review site or publisher dominates; how to diversify evidence.
- **Reader / stage / intent:** CMO / communications / SEO; diagnostic.
- **Overlap:** Review-platform article establishes source infrastructure; new page measures dependency risk.
- **Competitors / gap:** AI tools show citation counts but rarely distinguish healthy authority from single-source fragility.
- **Original contribution / asset:** source-concentration table, removal scenario and corroboration backlog.
- **Links / conversion:** AI pillar, review platforms, baseline and methodology; AI-search diagnostic.
- **Score:** 23 + 23 + 17 + 11 + 8 + 4 = **86 / P1**.

## Batch 5

### 17. Message Mismatch or Form Friction? A Landing-Page Isolation Test — 85

- **Primary query / questions:** B2B landing page not converting; message match versus form problem; which test first.
- **Reader / stage / intent:** Demand gen / CRO; diagnostic.
- **Overlap:** Form guide owns fields; traffic-to-demo owns full funnel. New page isolates page-message and form effects.
- **Competitors / gap:** landing-page checklists mix audience, offer, page and form changes, making results uninterpretable.
- **Original contribution / asset:** four-cell isolation plan and annotated funnel.
- **Links / conversion:** Growth pillar, form guide, traffic diagnosis and small samples; growth brief.
- **Score:** 24 + 22 + 16 + 12 + 7 + 4 = **85 / P2**.

### 18. Discovery, Crawl, Index or Rank? A Technical SEO Incident Triage — 85

- **Primary query / questions:** why page disappeared from Google; sitemap, crawl, render, canonical, index and ranking diagnosis.
- **Reader / stage / intent:** SEO / developer; urgent diagnostic.
- **Overlap:** Access checklist is preventive; new page owns incident sequence and escalation.
- **Competitors / gap:** tool guides enumerate errors without tying them to the first failed stage and business priority.
- **Original contribution / asset:** stage-gated incident tree and evidence handoff template.
- **Links / conversion:** SEO pillar, access checklist, query map and methodology; SEO diagnostic.
- **Score:** 23 + 22 + 16 + 12 + 8 + 4 = **85 / P2**.

### 19. India Enterprise Demand Generation: Map the Buying Committee Before the Channel — 84

- **Primary query / questions:** B2B SaaS demand generation India; champion, user, IT, security, finance and procurement evidence needs.
- **Reader / stage / intent:** India founder / enterprise demand gen; planning.
- **Overlap:** Growth pillar remains cross-market; INR budget owns spend. New page owns committee evidence.
- **Competitors / gap:** India playbooks lead with channel and benchmark rather than the buying decision and proof burden.
- **Original contribution / asset:** buying-committee evidence matrix with India-specific procurement assumptions labelled for verification.
- **Links / conversion:** Growth pillar, INR budget, agency due diligence and services; growth brief.
- **Score:** 24 + 22 + 17 + 12 + 5 + 4 = **84 / P2**.

### 20. India-to-Global B2B SaaS SEO: When Localized Pages Are Justified — 84

- **Primary query / questions:** international SEO for Indian SaaS; US/UK pages, hreflang, currency, proof and duplicate regional pages.
- **Reader / stage / intent:** India SaaS SEO / GTM; implementation planning.
- **Overlap:** Query map supplies the create/retain rule; new page owns regional evidence.
- **Competitors / gap:** international SEO guides explain hreflang but not when a global SaaS needs distinct commercial evidence.
- **Original contribution / asset:** locale-page justification test and proof matrix.
- **Links / conversion:** SEO pillar, query map, technical checklist; SEO architecture brief.
- **Score:** 23 + 22 + 17 + 12 + 6 + 4 = **84 / P2**.

## Batch 6

### 21. Which Internal Links Should You Add First? A Commercial Priority Model — 83

- **Primary query / questions:** internal linking strategy B2B SaaS; which pages, anchors and sources deserve priority.
- **Reader / stage / intent:** SEO / content operations; implementation.
- **Overlap:** Query map defines owners; new page ranks link opportunities.
- **Competitors / gap:** generic authority-flow advice does not include reader usefulness, commercial importance and maintenance risk.
- **Original contribution / asset:** four-factor internal-link queue and acceptance checklist.
- **Links / conversion:** SEO pillar, query map, commercial architecture; SEO brief.
- **Score:** 23 + 21 + 16 + 11 + 8 + 4 = **83 / P2**.

### 22. Paid-Search Waste: Join Search Terms to Accepted Pipeline Before Negating — 83

- **Primary query / questions:** B2B SaaS negative keywords; research traffic, competitor queries, low-volume terms and lead-quality delay.
- **Reader / stage / intent:** Paid search / marketing operations; diagnostic implementation.
- **Overlap:** Paid-ads playbook owns the campaign; UTM governance owns taxonomy. New page owns query-to-pipeline decisions.
- **Competitors / gap:** PPC guides optimize cost and conversion without waiting for accepted-pipeline evidence or protecting exploratory high-value terms.
- **Original contribution / asset:** search-term evidence ladder and negate/watch/route table.
- **Links / conversion:** Performance pillar, paid-ads playbook, UTM governance and reconciliation; paid-growth brief.
- **Score:** 24 + 21 + 16 + 11 + 7 + 4 = **83 / P2**.

### 23. Can an AI Agent Complete the Task? A Functional Accessibility Test — 82

- **Primary query / questions:** make website accessible to AI agents; DOM, accessibility tree, forms, authentication, confirmation and failure recovery.
- **Reader / stage / intent:** Product / web / technical SEO; implementation.
- **Overlap:** Crawler policy owns discovery; new page owns interactive task completion.
- **Competitors / gap:** crawler guides conflate fetch access with an agent’s ability to interpret and complete a safe workflow.
- **Original contribution / evidence / asset:** task script, reversible-action boundary and agent accessibility test record; Google agentic guidance and W3C form evidence.
- **Links / conversion:** AI pillar, crawler policy, form guide and access checklist; technical diagnostic.
- **Score:** 22 + 22 + 17 + 10 + 7 + 4 = **82 / P2**.

### 24. Repair the Owned Page or the Third-Party Source? — 82

- **Primary query / questions:** improve AI citations; when to change the website, product directory, review profile, documentation or public research.
- **Reader / stage / intent:** SEO / communications / product marketing; decision.
- **Overlap:** Review-platform article identifies source infrastructure; baseline records observations. New page owns repair selection.
- **Competitors / gap:** GEO advice lists tactics without showing which evidence identifies the failing layer.
- **Original contribution / asset:** owned/source/retrieval/measurement decision tree and action register.
- **Links / conversion:** AI pillar, baseline, review platforms and technical checklist; AI-search diagnostic.
- **Score:** 23 + 22 + 16 + 10 + 7 + 4 = **82 / P2**.

## Editorial and internal-link rules for all six batches

1. Every new article receives one primary pillar assignment in `topicArchitecture.ts` and a natural link to that pillar in the article body.
2. Each pillar exposes only its strongest resources. Do not add every new article to every route.
3. Use cross-cluster links only when the next question genuinely changes domains, such as form friction requiring measurement or AI allocation requiring query ownership.
4. Service links appear when a reader reaches a scoped commercial decision. Informational sections should not force a sales CTA after every answer.
5. Demonstrations must display `DEMONSTRATION RUN`, collection date, sample, method, assumptions, limitations and proof boundary.
6. Existing article URLs remain unchanged. Improvements should preserve the published role and avoid date-only refreshes.
7. Recheck platform documentation and current result sets before each batch. The research capture is dated 28 August 2026 and will age.

## Batch 1 acceptance criteria

- Four statically generated article routes with one H1 supplied by the existing article layout.
- Unique title, description, canonical, Article metadata and accurate BreadcrumbList JSON-LD.
- Visible `DataDecision Research` publisher note naming founder Ashish Jha accurately.
- One downloadable CSV worksheet per article.
- Each demonstration visibly labelled and separated from client or DataDecision evidence.
- Each article linked from its primary pillar and the Insights library.
- Sitemap last modification date generated from `updatedDate: 2026-08-28`.
- Format, Astro/TypeScript check, production build, validation and desktop/mobile browser inspection pass before handoff.
