---
title: 'GA4 Data Thresholds: When a Number Is a Model, Not a Count'
seoTitle: 'GA4 Data Thresholds and Modelled Numbers'
description: 'Why GA4 sometimes shows a threshold notice instead of raw rows, what that means for B2B reporting, and how to label it honestly.'
publishedDate: 2026-08-25
updatedDate: 2026-08-25
category: 'Measurement & Lead-Source Truth'
cluster: 'Measurement & Lead-Source Truth'
readingMinutes: 4
author: 'DataDecision'
methodologyVersion: 'Threshold labelling guide v1.0'
sources:
  - label: 'Google Analytics: data thresholds'
    url: 'https://support.google.com/analytics'
  - label: 'Google Analytics: [GA4] attribution settings'
    url: 'https://support.google.com/analytics/answer/12923437'
---

<div class="answer-first">
  <p class="evidence-label">Answer first</p>
  <p><strong>When GA4 applies thresholding, rows are suppressed or modelled to protect individual identity.</strong> The report still renders, but it is no longer a raw count. Label it as such or do not present it.</p>
</div>

An analyst opens an exploration, and a banner appears: "This report has applied thresholds to protect user identity." The numbers look normal. They are not the same numbers.

Thresholding exists to prevent re-identification when identity signals are present. It is a privacy feature, not a malfunction, and B2B teams hit it because their traffic is small and identity-rich.

## How to notice it

- A banner or notice appears in explorations or reports.
- Row counts change when identity columns are added or removed.
- The same question returns different totals in a report versus an exploration.

None of these mean the property is broken. They mean the answer is partly modelled.

## Labelling rules

| Situation                | Label                                              |
| ------------------------ | -------------------------------------------------- |
| Threshold banner visible | "Modelled/thresholded report"                      |
| Identity columns in use  | "Identity-filtered view"                           |
| Board or client deck     | Add the label beside the number, not in a footnote |
| CRM-side metric          | "CRM-observed" (unaffected by GA4 thresholds)      |

The [three-bucket approach](/insights/consent-mode-declined-tracking/) for consent gaps applies here too: observed, modelled, CRM-side.

## What thresholds cannot be used for

- Precise funnel step comparisons where rows vanish.
- Small-segment rankings: a suppressed row can flip a ranking.
- Trend analysis across periods where thresholding applied inconsistently.

## The practical workflow

1. Ask the decision question first; check whether the thresholded report is actually required to answer it.
2. Where identity is not needed, remove identity columns; thresholds often relax.
3. Where identity is needed, prefer the CRM-side number, which is observed and consent-independent.
4. Keep one screenshot of the threshold banner with the report file, so the label has evidence.

For the capture path that makes CRM-side numbers trustworthy, review the [measurement foundation](/services/measurement-foundation/) service.
