---
title: 'Data Decision Consulting website QA record'
description: 'A dated audit of the public website: route coverage, claim controls, content completeness and technical evidence files.'
label: 'DEMONSTRATION RUN'
observationDate: 2026-08-24
measurementWindow: 'Production build generated and audited on 24 Aug 2026'
sample: 'All 17 generated HTML routes, 3 launch articles, 3 public CSV templates and root discovery-policy files'
baseline: 'First Ledger rebuild record; no comparable earlier baseline'
methodologyVersion: 'Launch evidence audit v1.0'
limitations:
  - 'This record covers website evidence and build quality. It contains no AI-answer visibility result.'
  - 'Local build checks do not prove live crawler access, production form delivery or field performance.'
  - 'Browser and automated accessibility checks do not replace review with assistive-technology users.'
status: 'complete'
---

<div class="answer-first">
  <p class="evidence-label">Result / 24 Aug 2026</p>
  <p><strong>The rebuilt launch corpus generated 17 HTML routes with one H1, a main landmark, a unique title and description, a canonical URL and resolving internal links on every page.</strong> The same build contains three complete launch articles, three reusable public CSV assets, a sitemap, a purpose-separated crawler policy and an experimental <code>llms.txt</code> whose limitation is stated inside the file.</p>
</div>

## Research question

Can Data Decision Consulting launch a complete multi-page evidence system without importing the rejected website’s design, publishing private strategy material or manufacturing credibility?

This audit answers only the parts visible in the static build. It does not claim live search inclusion, crawler access, form delivery, conversion performance or AI-answer visibility.

## Sample and procedure

The corpus is the complete production build generated from the rebuild branch on **24 August 2026**:

- 17 HTML routes, including the home page, two service pages, methodology, work, three article details, about, contact, four trust/legal pages, the work detail and the custom 404;
- three complete launch articles;
- three public CSV templates;
- `robots.txt`, `sitemap.xml`, `llms.txt` and `CNAME`;
- compiled CSS, self-hosted font assets and the minimal browser scripts emitted by Astro.

The automated audit checks required routes, one H1 per HTML file, main landmarks, canonical URLs, titles, meta descriptions, JSON-LD syntax, internal link resolution, required discovery files, private-package markers and a prohibited-claim phrase set. The build was also searched for legacy implementation routes and dependencies.

## Results

| Check                                     |   Result | Baseline                             | Method                       |
| ----------------------------------------- | -------: | ------------------------------------ | ---------------------------- |
| HTML routes passing structural validation | 17 of 17 | First Ledger build                   | `scripts/validate-site.mjs`  |
| Complete launch articles                  |        3 | First Ledger build                   | Content collection inventory |
| Reusable public research templates        |        3 | First Ledger build                   | Public download inventory    |
| Client result entries                     |        0 | No verified client evidence supplied | Work collection inventory    |
| Review/rating schema objects              |        0 | No verified review evidence supplied | Built JSON-LD inspection     |
| Client-side UI frameworks                 |        0 | Fresh static architecture            | Production dependency review |

The zeroes in the last three rows are intentional claim controls, not performance defects.

## What the corpus contains

The homepage directs visitors into deeper capability, methodology, work and insight pages rather than carrying every argument itself. The diagnostic scope is stated as 50 buying-intent queries, up to four approved surfaces where access permits, two documented runs where methodologically appropriate, one market, one language and 15 business days after required inputs are complete.

Engagement fees are stated in the written scope. The website does not publish a fee range because there is no approved scope-to-price map.

The three articles each contain a dated answer-first section, primary platform sources or a published internal method, a practical procedure, a reusable asset and explicit limitations:

1. [A practical GA4 check for AI referrals](/insights/measuring-ai-referrals-ga4/)
2. [AI crawler access: robots.txt, bot policies and the role of llms.txt](/insights/ai-crawler-access-policy/)
3. [Build your own AI-search visibility baseline](/insights/build-ai-visibility-baseline/)

## Claim-control findings

- No client case is published.
- No testimonial, client logo, partner strip, rating or award component is rendered.
- No ranking, citation, traffic or revenue guarantee is offered.
- Demonstration language appears only on this completed self-audit.
- The form reports success only after the delivery service accepts the submission.
- Model-training crawler choices are separated from search and user-requested retrieval choices.

## Limitations

This audit is self-measurement by the organization that built the site. The checks are reproducible in the repository, but the interpretation is not independent assurance.

The static build cannot verify:

- live DNS, certificate or CDN behavior;
- whether named crawlers reach the origin;
- email delivery after the form service accepts a submission;
- conversion rate, qualified enquiries or commercial outcomes;
- AI-answer appearance on any engine;
- every assistive-technology interaction.

Those limits remain separate launch gates.

## Next observations

Day-30, day-60 and day-90 records will reuse only comparable fields. New metrics will be added as a separate version, and future results will not be backfilled into this launch record.
