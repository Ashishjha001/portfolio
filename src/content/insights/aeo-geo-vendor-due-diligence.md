---
title: 'AEO/GEO Vendor Due Diligence: Questions Before You Buy'
seoTitle: 'AEO/GEO Vendor Due-Diligence Questions'
description: 'A scorecard of due-diligence questions for AI-visibility vendors: method transparency, sampling, guarantees, reporting and data handling.'
publishedDate: 2026-08-25
updatedDate: 2026-08-25
category: 'Method guide'
cluster: 'Measurement & Lead-Source Truth'
readingMinutes: 6
author: 'Data Decision Consulting'
methodologyVersion: 'Vendor due-diligence scorecard v1.0'
sources:
  - label: 'Google Search Central: AI features and your website'
    url: 'https://developers.google.com/search/docs/appearance/ai-features'
  - label: 'Data Decision Consulting methodology v0.3'
    url: 'https://datadecision.consulting/methodology/'
---

<div class="answer-first">
  <p class="evidence-label">Answer first</p>
  <p><strong>Buy AI-visibility tooling the way finance buys software: ask for the method before the demo.</strong> If a vendor cannot explain their query set, sampling and scoring, the dashboard is decoration.</p>
</div>

The AI-visibility market is growing faster than its standards. Scores differ wildly between tools for the same brand, and most explanations stop at "proprietary model". This scorecard turns the sales call into a method review.

## The scorecard

Score each question 0 (no answer), 1 (partial) or 2 (clear, written answer):

| #   | Question                                        | Why it matters                      |
| --- | ----------------------------------------------- | ----------------------------------- |
| 1   | Which prompts do you run, and who chooses them? | Fixed frames make scores comparable |
| 2   | Which surfaces and models are observed?         | "AI" is not one surface             |
| 3   | How often do you run them, and how many runs?   | Single runs cannot show stability   |
| 4   | How is a "mention" defined and validated?       | Human-verified beats model-guessed  |
| 5   | How are citations captured and deduplicated?    | Source maps need rules              |
| 6   | Do you state confidence or sample limits?       | Honesty is a feature                |
| 7   | Can we export raw observations?                 | Lock-in hides weak methods          |
| 8   | What do you guarantee?                          | The correct answer is: nothing      |

## Reading the results

- **12–16:** the vendor can be evaluated on fit and price.
- **7–11:** ask for written method documentation before proceeding.
- **Below 7:** the score is a vibe; treat outputs as marketing, not measurement.

Compare vendor answers against the [published Data Decision Consulting method](/methodology/), which states its own query frame, surfaces, runs and limits in public.

## Questions that reveal quality fast

- "Show me the same brand score across three consecutive days and explain any movement."
- "What happens to my score when a model updates?"
- "How do you separate brand mentions from category mentions?"

Vendors with real methods answer with documents. Vendors without them answer with adjectives.

## Decision rules

- No written method, no purchase.
- Guarantees of placement are disqualifying; [AI outputs are nondeterministic](/insights/ai-crawler-access-policy/).
- Prefer exporters over dashboards: raw observations outlive any vendor.

For a self-built baseline that does not depend on any vendor, use the [visibility baseline method](/insights/build-ai-visibility-baseline/).
