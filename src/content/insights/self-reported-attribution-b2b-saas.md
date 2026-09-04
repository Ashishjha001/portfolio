---
title: 'Self-Reported Attribution for B2B SaaS: Ask, Score, Reconcile'
seoTitle: 'Self-Reported Attribution for B2B SaaS'
description: 'How to collect self-reported attribution without priming answers, code free text honestly, and reconcile what buyers say with what GA4 and your CRM count.'
publishedDate: 2026-09-03
updatedDate: 2026-09-03
category: 'Measurement & Lead-Source Truth'
cluster: 'Measurement & Lead-Source Truth'
readingMinutes: 9
author: 'Data Decision Consulting'
methodologyVersion: 'Self-reported attribution method v1.0'
sources:
  - label: 'HubSpot: HubSpot analytics and Google Analytics do not match (updated November 4, 2025)'
    url: 'https://knowledge.hubspot.com/reports/why-do-hubspot-and-google-analytics-not-match'
  - label: 'Data Decision Consulting: GA4 vs CRM lead reconciliation (the waterfall this method plugs into)'
    url: 'https://datadecision.consulting/insights/ga4-vs-crm-lead-reconciliation/'
---

<div class="answer-first">
  <p class="evidence-label">Answer first</p>
  <p><strong>Self-reported attribution is the practice of asking buyers how they found you, at high-intent moments, and treating the answer as data with known biases rather than as truth or noise.</strong> It works when three conditions hold: the question is open text and unprimed, the answers are coded by a written rule set, and the result is reconciled against your tracking systems instead of replacing them. When a buyer's answer and your analytics disagree, both are usually right — the analytics record the mechanism of arrival; the buyer reports the cause. Budget decisions need the cause.</p>
</div>

Software attribution observes what it can see: sessions, clicks, form fills. It cannot see the recommendation in a private Slack community, the podcast that triggered a branded search, or the colleague who forwarded a guide. Those events are real pipeline causes that no dashboard records at the moment they happen.

HubSpot's own documentation makes the adjacent point at the system level: HubSpot and Google Analytics count differently defined things — sessions, sources, timeframes — and are "not expected to match exactly." The recommended practice is comparing trends, not forcing totals to agree. The same discipline applies to human answers. A buyer's memory is a different instrument from a cookie, counting a different thing — influence — at a different moment, recall.

This is not an argument that tracking is wrong. It is an argument that tracking answers "how did they arrive?" while self-report answers "what caused them to look?" Budget decisions made only on arrival data systematically over-fund capture channels — paid, branded search — and under-fund creation channels such as community, word-of-mouth, content and events.

## The three collection levels

**Level 1: an open-text field on high-intent forms.** Demo, trial, pricing. One question: "How did you first hear about us?" Optional but visible. This is the foundation; most teams should stop here until volume exists.

**Level 2: micro-questions at conversion milestones.** Two additions where commitment is high: "Who else on your team was involved in evaluating this?" and "Where did the internal conversation about this start?" These map the buying committee — data no tracking system produces.

**Level 3: post-onboarding influence mapping.** Two to three weeks after a customer starts: "Have you recommended us to anyone? If so, where?" This measures the outbound half — whether customers are generating the dark-funnel demand that later shows up in someone else's answer.

## Question design: the details that decide data quality

Most implementations fail on wording, not plumbing.

Always open text. A drop-down anchors answers to channels you already know — the opposite of the purpose, which is discovering channels you do not. If the field must be structured for CRM reasons, keep a parallel free-text field and code it manually.

Ask "How did you first hear about us?" — not "how did you find us." "Find" invites the last step: I Googled you. "First hear" invites the origin: a colleague mentioned you.

One question, not three. Multi-field interrogation at a demo form taxes the conversion you are trying to attribute.

Never pre-fill or suggest. Placeholder text like "e.g., Google, LinkedIn" primes the exact answers you already have.

Place it on the form, not the confirmation page. Post-submit surveys lose most respondents.

Write the bias register down. Self-reported data carries known, manageable biases: recall bias — people remember recent and vivid triggers; attribution bias — people name a channel they trust rather than one that happened; social desirability — naming the person standing in the room; and primacy effects from whatever the previous form field was. Recording these in an [assumption register](/insights/attribution-assumption-register/) is the difference between honest qualitative data and anecdotes.

## Coding free-text answers

Open answers arrive messy: "LinkedIn," "LI post," "our VP sent your article," "a guy in RevOps Slack." A written coding rule keeps the coding consistent across months and coders.

1. **Code monthly, one named owner.** Categorization without an owner becomes a graveyard field nobody reads.
2. **Let categories emerge from the data.** Start from a blank sheet. Standard starter tags: peer referral, community, LinkedIn organic, podcast, event, named content asset, branded search, other.
3. **Preserve verbatims beside tags.** The specific quote — "Jake at Acme mentioned you" — is often more actionable than the category.
4. **Split first-heard from what-convinced.** When answers volunteer both — "heard on a podcast, but your comparison page convinced me" — tag both events separately.

## Reconciling with GA4 and the CRM

This step separates a form field from a measurement practice, and it is the part most coverage skips. Reconciliation, not replacement.

Use the [Lead Reconciliation Waterfall](/insights/ga4-vs-crm-lead-reconciliation/) with one extra column. Every submission already carries its stage transitions — form, CRM record, accepted lead, opportunity, revenue. Add the buyer's own answer to the record. You now have, per lead: what analytics saw, what the CRM stored, and what the buyer said caused it.

Read the disagreements as the finding, not the failure. The canonical pattern: analytics says Direct or Organic Search; the buyer says colleague recommendation. Both are true. The recommendation created demand; search captured it. That disagreement is precisely the dark-funnel measurement you were looking for — see the [dark funnel guide](/insights/dark-funnel-b2b-attribution/) for the honest limits of pushing further.

Three reporting rules. Report self-reported and tracked data side by side, never merged into one blended number. Show counts before rates — "11 of 47 demo requests cited a community mention," not "23 percent community influence" from three data points, per the [small-sample rules](/insights/small-conversion-samples-inference/). And where the two disagree, the self-reported answer usually deserves the budget-decision weight because it reports the cause — but say so as a written rule, not an ad-hoc judgment each quarter.

## Decision rules: when to trust which source

| Decision                         | Trust first        | Why                                                           |
| -------------------------------- | ------------------ | ------------------------------------------------------------- |
| Is the website capturing demand? | Analytics          | Capture is what analytics observes                            |
| Is a channel creating demand?    | Self-report        | Creation is invisible to pixels                               |
| Which channel to cut?            | Both, reconciled   | A cut based on capture data alone can kill a creation channel |
| What is this lead worth?         | CRM plus worksheet | Value is economics, not memory                                |

## The maturity sequence

Months one and two: open-text field live, owner assigned, verbatims stored. Months three to six: coding rules stable, first side-by-side report, disagreements logged. Month six onward: buying-committee questions if volume supports, influence mapping once customers exist. The order matters — questions asked before the foundation produce answers nobody analyzes.

## What self-reported attribution cannot do

It cannot produce percentages precise enough for board-level channel ROI math; it measures influence, not incrementality. It cannot retroactively explain historical pipeline. And it is only as honest as its bias register. If a stakeholder wants one number to settle a budget fight, the correct answer is a framed experiment, not this method.

Most teams can stand up the field themselves in an hour — the [free tools](/tools/) cover the surrounding checks. When the harder question is reconciling what buyers say with what your systems count, that is a [measurement foundation](/services/measurement-foundation/) brief.
