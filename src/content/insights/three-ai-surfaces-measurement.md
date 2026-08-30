---
title: 'ChatGPT, Perplexity and AI Overviews: Three Surfaces, Three Measurement Rules'
seoTitle: 'Measuring ChatGPT, Perplexity and AI Overviews'
description: 'Why ChatGPT, Perplexity and Google AI Overviews need different measurement rules, and how to observe each without mixing samples.'
publishedDate: 2026-08-25
updatedDate: 2026-08-25
category: 'Measurement'
cluster: 'Measurement & Lead-Source Truth'
readingMinutes: 6
author: 'Data Decision Consulting'
methodologyVersion: 'Multi-surface observation guide v1.0'
sources:
  - label: 'OpenAI: publishers and developers FAQ'
    url: 'https://help.openai.com/en/articles/12627856-publishers-and-developers-faq'
  - label: 'Perplexity: crawler documentation'
    url: 'https://docs.perplexity.ai/docs/resources/perplexity-crawlers'
  - label: 'Google Search Central: AI features and your website'
    url: 'https://developers.google.com/search/docs/appearance/ai-features'
  - label: 'Google Analytics: AI referrals and channel grouping'
    url: 'https://support.google.com/analytics/answer/13051316'
---

<div class="answer-first">
  <p class="evidence-label">Answer first</p>
  <p><strong>ChatGPT, Perplexity and AI Overviews are different products with different access rules, citation behaviour and referral paths.</strong> One blended "AI visibility score" hides the differences that matter. Observe each surface separately, then compare.</p>
</div>

Teams ask for "our AI ranking". The useful answer is per-surface, because the products differ in how they retrieve content, whether they cite, and what reaches analytics.

## The three surfaces

| Surface             | Retrieval                             | Citations                   | Referral signal in analytics                                                                                        |
| ------------------- | ------------------------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| ChatGPT (search)    | Mix of trained knowledge + live fetch | Link list, varies by answer | Referral where a click occurs; [GA4 channel guidance](https://support.google.com/analytics/answer/13051316) applies |
| Perplexity          | Live retrieval-led                    | Numbered citations, visible | Referral with product-specific source                                                                               |
| Google AI Overviews | Google index + retrieval              | Links in the overview       | Clicks land in Google organic; hard to separate from classic search                                                 |

## The measurement rules

1. **Separate the samples.** Run the [baseline method](/insights/build-ai-visibility-baseline/) per surface with the same query frame; never average a ChatGPT run into a Perplexity sample.
2. **Record the mode.** Account state, model version and settings change answers; the [methodology](/methodology/) requires recording conditions per run.
3. **Expect different citation behaviour.** Perplexity shows visible citations more consistently than ChatGPT; AI Overviews sit inside Google results. Citation counts are not comparable across surfaces.
4. **Read referrals per surface.** The [AI-referral guide](/insights/measuring-ai-referrals-ga4/) covers what GA4 can classify today and what remains unknown.
5. **Watch access separately.** Each product documents its own crawler and policy; the [access checklist](/insights/technical-access-verification-checklist/) verifies them independently.

## What blending hides

- A drop on one surface masked by growth on another.
- Citation presence without referral traffic (visibility with no visit) on one surface only.
- Model-update effects that look like content effects.

## The comparison table that belongs in your report

| Surface      | Runs this window | Mentions | Citations | Referrals (observed) | Notes         |
| ------------ | ---------------- | -------- | --------- | -------------------- | ------------- |
| ChatGPT      | n                | n        | n         | n                    | mode recorded |
| Perplexity   | n                | n        | n         | n                    |               |
| AI Overviews | n                | n        | n         | not separable        |               |

Counts with windows and denominators; no blended score.

For the service layer around this observation work, review the [AI-search visibility](/services/ai-search-visibility/) service.
