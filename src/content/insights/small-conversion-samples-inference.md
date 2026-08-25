---
title: 'Honest Inference Under Small Conversion Samples'
seoTitle: 'Reading Small Conversion Samples Honestly'
description: 'How to read conversion data when the sample is small: ranges instead of point estimates, explicit limits, and decisions the data can still support.'
publishedDate: 2026-08-25
updatedDate: 2026-08-25
category: 'Measurement & Lead-Source Truth'
cluster: 'Measurement & Lead-Source Truth'
readingMinutes: 6
author: 'DataDecision'
methodologyVersion: 'Small-sample reading guide v1.0'
sources:
  - label: 'Google Analytics Help'
    url: 'https://support.google.com/analytics'
  - label: 'Google Analytics: campaign URL guidance'
    url: 'https://support.google.com/analytics/answer/10917952'
---

<div class="answer-first">
  <p class="evidence-label">Answer first</p>
  <p><strong>With small samples, report ranges and context, not precise percentages.</strong> "Two of eleven" supports a different sentence than "18.2%". The number is the same; the honesty is not.</p>
</div>

B2B conversion data is small by nature. A landing page may see forty visits and four demo requests in a month. Presenting 10.0% from four conversions invites precision the data cannot support.

This guide defines what small data can and cannot support, and the sentences that keep reports honest.

## What small samples can support

- **Direction over time:** the same page converting 2 of 40, then 6 of 41, is a real signal worth investigating.
- **Existence claims:** the channel does produce demo requests; the form does fail on mobile.
- **Structured comparison:** when the sample design is deliberate, such as the [visibility baseline method](/methodology/), counts and windows carry meaning.

## What small samples cannot support

- **Precise rates:** 3 of 29 is not "10.3%"; it is "3 of 29".
- **Channel rankings:** a channel with 5 conversions is not provably worse than one with 7.
- **Causal claims:** the change and the improvement arriving together do not prove cause.
- **Forecast confidence:** projecting annual pipeline from one quarter multiplies the uncertainty.

## Reporting sentences that stay honest

| Instead of                       | Report                                                                |
| -------------------------------- | --------------------------------------------------------------------- |
| "Conversion is 10.3%"            | "4 demo requests from 39 visits"                                      |
| "Channel X performs worse"       | "Channel X produced 5 vs 7 with half the spend"                       |
| "The change improved conversion" | "Conversions rose after the change; sample is too small to attribute" |
| "We expect 120 demos this year"  | "At the current range, 90 to 150 is plausible"                        |

## Practical guardrails

- Set a minimum sample before comparing: under roughly 25 conversions per variant, treat differences as noise.
- Prefer counts over percentages in slides; put percentages in the appendix with denominators.
- Widen the window before widening the claim: a quarter beats a week.
- When analytics applies [thresholding or modelling](https://support.google.com/analytics), label the metric as modelled, not counted.

## The decision the data can still support

Small data supports **stopping rules** better than rankings. "We will run this test until 30 conversions or eight weeks, then decide" is a complete, honest plan.

For the capture quality that makes even small counts trustworthy, start with the [reconciliation framework](/insights/ga4-vs-crm-lead-reconciliation/). For systematic repair of the measurement path, review the [measurement foundation](/services/measurement-foundation/) service.
