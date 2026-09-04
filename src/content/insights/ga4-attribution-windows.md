---
title: 'GA4 Attribution Windows: What Changes When You Switch'
seoTitle: 'GA4 Attribution Windows Explained for B2B'
description: 'What GA4 attribution windows and models actually change in B2B reporting, with a decision table for choosing settings you can defend.'
publishedDate: 2026-08-25
updatedDate: 2026-08-25
category: 'Measurement & Lead-Source Truth'
cluster: 'Measurement & Lead-Source Truth'
readingMinutes: 5
author: 'Data Decision Consulting'
methodologyVersion: 'Window decision table v1.0'
sources:
  - label: 'Google Analytics: about attribution and attribution modeling'
    url: 'https://support.google.com/analytics/answer/10596866'
  - label: 'Google Analytics: [GA4] attribution settings'
    url: 'https://support.google.com/analytics/answer/12923437'
---

<div class="answer-first">
  <p class="evidence-label">Answer first</p>
  <p><strong>Changing the attribution window does not change what happened; it changes which touchpoints are eligible for credit.</strong> Choose the window that matches your sales cycle, write the choice down, and never compare across windows.</p>
</div>

A team switches GA4 from a 30-day click window to 90 days and paid conversions jump 40%. Nothing about buyer behaviour changed. The eligibility rules did.

## The two settings that matter

- **Eligibility:** paid channels can only receive credit for events inside the window. Longer windows reach further back, so paid credit grows.
- **Model:** last click, paid-last or data-driven decide who wins when several touches are eligible. The [assumption register](/insights/attribution-assumption-register/) is where this choice belongs.

For B2B SaaS with multi-week cycles, a short window systematically undercounts channels that start the journey. That undercount is not "accuracy"; it is a definition.

## Decision table

| Situation                      | Defensible setting         | Reason                              |
| ------------------------------ | -------------------------- | ----------------------------------- |
| Sales-led, 1 to 3 month cycles | 90-day click               | Covers the real consideration span  |
| Self-serve, days-long cycles   | 30-day click               | Matches the fast loop               |
| Board asks "what did paid do?" | Keep one setting, label it | Comparisons across settings mislead |
| CRM reports disagree with GA4  | Do not reconcile by force  | Different systems, different rules  |

The [reconciliation framework](/insights/ga4-vs-crm-lead-reconciliation/) explains why GA4 and CRM numbers are different records rather than rival copies of the same fact.

## Rules that keep reporting honest

1. Pick once, with the sales cycle in view, and record the date of the choice.
2. After any change, annotate reports; before/after comparisons across a settings change are invalid.
3. Never mix windows in one chart, even in different tabs of the same deck.
4. When in doubt, report both a short-window and a long-window number with labels; the range is the honest answer.

## The one-line defence

When someone challenges the number, the answer is not the tool default. It is: "The window is 90 days because our cycle is roughly that long, the setting changed on this date, and here is the labelled report."

For the capture layer beneath every window, review the [measurement foundation](/services/measurement-foundation/) service.
