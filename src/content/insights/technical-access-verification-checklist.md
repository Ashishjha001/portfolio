---
title: 'The Technical Access Verification Checklist'
seoTitle: 'Technical Access Verification Checklist for AI Search'
description: 'A repeatable checklist for verifying crawler access, fetch behaviour and content clarity, with a labelled example from this production domain.'
publishedDate: 2026-08-25
updatedDate: 2026-08-25
category: 'Technical access'
cluster: 'Measurement & Lead-Source Truth'
readingMinutes: 6
author: 'Data Decision Consulting'
methodologyVersion: 'Access verification checklist v1.0'
sources:
  - label: 'Google Search Central: Google crawlers and fetchers'
    url: 'https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers'
  - label: 'Perplexity: crawler documentation'
    url: 'https://docs.perplexity.ai/docs/resources/perplexity-crawlers'
  - label: 'OpenAI: publishers and developers FAQ'
    url: 'https://help.openai.com/en/articles/12627856-publishers-and-developers-faq'
---

<div class="answer-first">
  <p class="evidence-label">Answer first</p>
  <p><strong>Access problems are silent.</strong> A blocked fetch looks exactly like low visibility from the outside. The checklist makes access a verified state with a date, not an assumption.</p>
</div>

This checklist is the operational companion to the [crawler-policy decision article](/insights/ai-crawler-access-policy/). Run it after deployment, after any platform change, and before blaming content for weak answer visibility.

## The checklist

| #   | Check                               | Method                              | Pass condition                  |
| --- | ----------------------------------- | ----------------------------------- | ------------------------------- |
| 1   | robots.txt parses and is current    | Fetch /robots.txt, check status 200 | No accidental disallow blocks   |
| 2   | AI crawler tokens present by choice | Compare tokens per provider doc     | Deliberate allow/deny per brand |
| 3   | Key pages return 200 to fetchers    | Test with a fetch tool per provider | 200, correct canonical          |
| 4   | No geo/WAF challenge on bots        | Fetch from two regions              | Same content, no challenge page |
| 5   | Sitemap referenced and valid        | Check robots sitemap line + fetch   | Valid XML, includes key pages   |
| 6   | Content states facts in text        | Review key pages as rendered HTML   | Facts present without scripts   |
| 7   | Canonical and hreflang correct      | Inspect head of key pages           | Self-referencing, consistent    |
| 8   | Changes are dated and owned         | Log entry per change                | Next person can audit           |

## A labelled example

The checks above were run against this production domain (datadecision.consulting) on 2026-08-25 after deployment: robots.txt returned 200 with a sitemap reference, key pages returned 200 with self-referencing canonicals, and content renders as static HTML without script dependence. This example is a process demonstration on our own domain; it is not a benchmark and implies no result for other sites.

## Failure modes this catches

- A security plugin updated its blocklist and silently started challenging AI fetchers.
- Staging rules copied to production disallowed everything.
- A migration moved pages but left the sitemap pointing at old URLs.
- Client-rendered content that never reaches a non-JS fetcher.

Every one of these looks like "AI visibility dropped" from the outside. None of them is a content problem.

## Cadence and ownership

- Run the full checklist quarterly, and after any hosting, WAF, plugin or platform change.
- Name an owner; access states drift when unowned.
- Store dated results next to the [visibility baseline](/insights/build-ai-visibility-baseline/) so access and visibility are read together.

For help interpreting failures, review the [methodology](/methodology/) or the [AI-search visibility](/services/ai-search-visibility/) service.
