---
title: 'Break-even CAC and Contribution Margin: The Worksheet Before the Spend'
seoTitle: 'Break-even CAC Worksheet for B2B SaaS'
description: 'A worksheet approach to break-even CAC using contribution margin and payback period, so acquisition targets come from finance, not vibes.'
publishedDate: 2026-08-25
updatedDate: 2026-08-25
category: 'Measurement & Lead-Source Truth'
cluster: 'Measurement & Lead-Source Truth'
readingMinutes: 6
author: 'Data Decision Consulting'
methodologyVersion: 'Break-even worksheet v1.0'
sources:
  - label: 'Google Analytics: campaign URL guidance'
    url: 'https://support.google.com/analytics/answer/10917952'
  - label: 'HubSpot: understand attribution reporting'
    url: 'https://knowledge.hubspot.com/reports/understand-attribution-reporting'
---

<div class="answer-first">
  <p class="evidence-label">Answer first</p>
  <p><strong>Break-even CAC is a finance calculation, not a marketing benchmark.</strong> Contribution margin per customer divided by gross-margin-adjusted payback tolerance gives the ceiling; every channel target inherits from it.</p>
</div>

"We can spend up to $2,000 per demo" is a sentence without a derivation. This worksheet produces the derivation in five inputs, so the ceiling survives a finance review.

## The five inputs

Pull these with finance, not from a marketing dashboard:

1. **Average contract value (ACV)** per new customer, first-year or annual as agreed.
2. **Gross margin** on that revenue (after hosting, support, delivery costs).
3. **Expected retention** or minimum payback period the business accepts.
4. **Sales cost share** attributable to a closed deal (if sales-led).
5. **Close rate** from qualified lead to customer, from CRM records.

## The worksheet

| Step                        | Formula                              | Notes                           |
| --------------------------- | ------------------------------------ | ------------------------------- |
| Contribution per customer   | ACV × gross margin                   | What is left before acquisition |
| Max CAC at target payback   | Contribution × (payback months ÷ 12) | Ceiling for fully loaded CAC    |
| Max cost per qualified lead | Max CAC × close rate                 | What the lead is worth to sales |
| Channel viability check     | Channel CPL + sales cost ≤ max CAC   | Per channel, per quarter        |

Example shape only: ACV $12,000, gross margin 80%, payback tolerance 12 months, sales-led with 20% close rate. Contribution $9,600; max CAC $9,600; max qualified-lead cost $1,920. Every channel target in the plan must now justify itself against that line.

## Where the worksheet fails honestly

- **Early-stage ACV is a guess:** label the ceiling provisional until three to five closed deals exist.
- **Close rate from small samples:** apply the [small-sample rules](/insights/small-conversion-samples-inference/) rather than quoting decimals.
- **Attribution disputes:** the worksheet needs deal counts, not credit models; keep the [assumption register](/insights/attribution-assumption-register/) beside it.

## Decision rules

- A channel above max CAC for two consecutive quarters gets a written exception or a budget cut.
- Payback tolerance is a board decision, not a marketing preference.
- Recompute the worksheet when ACV, margin or close rate moves by more than a tenth.

For the CRM records that supply close rates, review the [reconciliation framework](/insights/ga4-vs-crm-lead-reconciliation/). For the tracking that ties spend to those records, review the [measurement foundation](/services/measurement-foundation/) service.
