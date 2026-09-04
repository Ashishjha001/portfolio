---
title: 'The DIY AEO Audit: What to Fix Yourself Before Hiring Anyone'
seoTitle: 'DIY AEO Audit for B2B SaaS'
description: 'A 25-step answer engine optimization audit you can run yourself: access, architecture, content and authority — with the stop conditions that tell you when to get help.'
publishedDate: 2026-09-03
updatedDate: 2026-09-03
category: 'Service Playbooks'
cluster: 'Service Playbooks'
readingMinutes: 10
author: 'Data Decision Consulting'
methodologyVersion: 'DIY AEO audit v1.0'
sources:
  - label: 'Google Search Central: AI features and your website'
    url: 'https://developers.google.com/search/docs/appearance/ai-features'
  - label: 'Google Search Central: AI optimization guide'
    url: 'https://developers.google.com/search/docs/fundamentals/ai-optimization-guide?hl=en'
  - label: 'Data Decision Consulting: AI crawler access policy (the robots.txt decision matrix)'
    url: 'https://datadecision.consulting/insights/ai-crawler-access-policy/'
  - label: 'llms.txt specification'
    url: 'https://llmstxt.org/'
---

<div class="answer-first">
  <p class="evidence-label">Answer first</p>
  <p><strong>Most of the work that makes a site citable by answer engines is the same work that makes it comprehensible to any first-time visitor — and you can do the majority yourself in a few focused hours.</strong> This audit has 25 steps in five layers: verify access, make architecture machine-readable, answer real questions, corroborate authority, and measure with dates. It ends with stop conditions — the points where DIY stops being the honest option. No step promises a citation; answer engines are nondeterministic. Every step makes you easier to retrieve, quote and trust.</p>
</div>

AEO — answer engine optimization, or GEO, generative engine optimization — has attracted a dense field of agencies selling certainty. The honest position: nobody can guarantee placement in an AI answer, and anyone who promises it is selling something else. What you can do is remove the mechanical reasons an engine would skip, misread or distrust your site. That work is mostly unglamorous, and most of it is yours to run before anyone invoices you.

This audit consolidates the checks we run at engagement start — the [access verification checklist](/insights/technical-access-verification-checklist/), the [crawler policy](/insights/ai-crawler-access-policy/) and the [rank-and-get-recommended playbook](/insights/how-to-rank-and-get-recommended-by-ai/) — into one client-side sequence you can execute with free tools and a browser.

## Layer 1: Verify access (steps 1–6)

A blocked crawler looks identical to bad content from the outside. Start here, because nothing downstream matters if engines cannot read you.

1. Fetch `yoursite.com/robots.txt`. Confirm it returns 200 and contains no accidental blanket disallows. Allow-list or block-list AI crawlers deliberately — retrieval bots (search-linked) and training bots are separate decisions; the [crawler policy guide](/insights/ai-crawler-access-policy/) has the matrix.
2. Check each AI provider's documented crawler tokens against your policy. Providers publish their crawler names; verify against current documentation, not blog posts.
3. Fetch your five most important pages the way a bot would — no JavaScript. If the content is absent without JS, engines and answers see nothing. Static HTML must carry the meaning.
4. Confirm the sitemap is referenced in robots.txt, valid, and contains every page you care about.
5. Check canonical tags: each page should canonically point to itself, not to the homepage or a staging domain.
6. Verify status codes — the pages you want cited must return 200, not redirects to a different URL shape.

Stop condition for DIY: if access is broken at the platform level (rendering, CDN rules, CMS configuration), fixing it may need your engineering team — but you have already done the diagnostic work they would otherwise bill for.

## Layer 2: Machine-readable architecture (steps 7–12)

7. One H1 per page, stating the page's core fact in plain language — not a clever fragment.
8. H2 and H3 sections that answer specific questions a buyer would actually ask.
9. The answer first: for each section, the direct answer in the opening sentence; evidence and detail after.
10. Schema markup where truthful — Organization, BreadcrumbList, Service, FAQPage only if the FAQ is genuinely visible and useful. Schema describes what exists; it does not substitute for it.
11. Internal links with descriptive anchors between every related page — engines and buyers both follow the same paths.
12. Run the free [website snapshot audit](/tools/) on your five key pages: title, description, canonical, headings, structured data — the same check an agency will run in week one.

## Layer 3: Content that answers real questions (steps 13–18)

13. List every question a buyer asks before they would pay you — from sales calls, support tickets, demo recordings. Not keyword lists: questions.
14. Map each question to the one page that answers it completely. Where two pages half-answer the same question, fix that — competing half-answers teach engines to trust neither.
15. State your position, method and limits explicitly on the pages that matter. Engines quote specifics; they skip hedging.
16. Check each key page against the stranger test: reading only the headings and first sentences, could someone accurately describe your business?
17. Remove thin pages targeting keywords. Ten complete answers beat fifty fragments — in ranking terms and in citation terms.
18. Date your claims. "Checked on" dates and stated update cadences are trust signals engines can read.

## Layer 4: Authority that corroborates (steps 19–22)

19. Fix your listings on the platforms buyers and engines actually consult — review sites, directories, your LinkedIn company page. Same name, same description, same facts everywhere. Entity consistency is the game.
20. Check whether independent sources describe you in the terms you use for yourself. Engines cross-verify; a brand that only describes itself in its own words is a brand with one witness.
21. Publish at least one thing others can cite — a method, a dataset, a framework with your name on it. Original artifacts earn corroboration; generic advice does not.
22. Do not buy links. Bought links are the one authority tactic engines and buyers can both smell.

## Layer 5: Dated measurement (steps 23–25)

23. Record a baseline before changing anything: sampled, dated observations of what answer engines currently say for your ten most important category queries. The [AI visibility baseline guide](/insights/build-ai-visibility-baseline/) is the method — the same sampling discipline our own observatory uses.
24. Log search-console-observable data — clicks, impressions, query trends — in monthly windows. Track branded-query trends as your honest word-of-mouth gauge.
25. Re-run the answer-engine sample monthly. Compare like windows against like windows, and record what changed, when.

## The stop conditions — when DIY is no longer the honest option

Do the full audit yourself, then check these three conditions:

- **Scale of sampling.** If you need structured visibility measurement across markets, languages, or dozens of query sets every month — with versioned protocols and someone accountable between runs — that is infrastructure, not a checklist.
- **Measurement joins.** If the question is no longer "are we visible?" but "did visibility produce pipeline?" — that is the [reconciliation problem](/insights/ga4-vs-crm-lead-reconciliation/), and it needs measurement work, not more sampling.
- **The evidence boundary.** If a stakeholder needs a documented, defensible claim about visibility for a budget decision — a dated methodology with sample sizes and limits — that is what a scoped diagnostic produces, and it is the point where we would enter.

Until one of those trips, this page plus the [free tools](/tools/) covers the work. That is deliberate: an agency that hides the DIY path is telling you something about its value.

No step in this audit guarantees an AI engine will mention you. The honest claim is narrower and stronger: after these 25 steps, nothing mechanical stands between your best content and the engines that quote it. [If the stop conditions have tripped, request a diagnostic](/contact/) — and bring this checklist to the first call; we grade ourselves against it.
