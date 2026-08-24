---
title: 'A practical GA4 check for AI referrals'
description: 'Start with GA4’s AI Assistant channel, then test source capture, scope, CRM joins and visits with missing referrer data.'
publishedDate: 2026-08-24
updatedDate: 2026-08-24
category: 'Measurement'
readingMinutes: 11
author: 'DataDecision Research'
featured: true
methodologyVersion: 'Measurement note v1.0'
sources:
  - label: 'Google Analytics: default channel group'
    url: 'https://support.google.com/analytics/answer/9756891?hl=en'
  - label: 'Google Analytics: traffic-source scopes'
    url: 'https://support.google.com/analytics/answer/11080067?hl=en'
  - label: 'Google Analytics: custom channel groups'
    url: 'https://support.google.com/analytics/answer/13051316?hl=en'
  - label: 'OpenAI: publishers and developers FAQ'
    url: 'https://help.openai.com/en/articles/12627856-publishers-and-developers-faq'
---

<div class="answer-first">
  <p class="evidence-label">Answer first / checked 24 Aug 2026</p>
  <p><strong>GA4 can now classify visits from named assistants in its AI Assistant channel, but that report is not a complete measure of AI-assisted discovery.</strong> Treat it as the observable referral layer. Validate the source data, separate session and user scope, test the path into your CRM, and report the traffic that lacks a useful referrer as unknown—not zero.</p>
</div>

## Start with the distinction GA4 leaves unresolved

An AI referral is a visit whose available source data identifies an assistant or AI-search product. AI-assisted discovery is broader: it can include a person who reads an answer, remembers a brand, opens a new tab and arrives directly later. The first can sometimes be observed in analytics. The second often cannot be joined to the visit without additional evidence.

That distinction prevents the two most common reporting errors:

1. **“GA4 shows 18 AI sessions, so AI influenced exactly 18 visits.”** The report only covers what its collection and classification could observe.
2. **“GA4 shows no AI sessions, so AI generated no discovery.”** Zero classified sessions may reflect no traffic, missing referrer data, a rule mismatch or a broken implementation.

The honest metric is “AI-assistant referrals observed by this configuration during this window,” not “all demand created by AI.”

## What does GA4 classify today?

Google’s current [default channel group documentation](https://support.google.com/analytics/answer/9756891?hl=en) includes an **AI Assistant** channel for sources such as ChatGPT, Gemini, DeepSeek, Copilot and Grok. The same documentation explicitly excludes Google AI Overviews and AI Mode from that channel. That boundary matters: a single dashboard row does not represent every generated-answer surface.

GA4 also lets eligible users create [custom channel groups](https://support.google.com/analytics/answer/13051316?hl=en). A custom group is useful when you need a separately versioned definition, but it is not automatically more correct. Ordering matters because traffic is assigned to the first matching channel, and edits can affect how reports reinterpret underlying data.

Before changing a rule, capture:

- the current default and custom channel definitions;
- the date and property in which the rule applies;
- the source and medium values you expect;
- the test visits used to verify the rule;
- whether the change applies historically or only going forward in that use case.

**Version the channel definition like code.** A trend line is difficult to interpret when the classifier changes without an annotation.

## Session, first-user and event scope answer different questions

Google documents separate [traffic-source scopes](https://support.google.com/analytics/answer/11080067?hl=en). In practical terms:

| Scope      | Question it can help answer                                                       | Common misuse                                                       |
| ---------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| First user | Which source first acquired this user in the observable record?                   | Treating it as the source of every later conversion                 |
| Session    | Which source is associated with this session?                                     | Treating it as a causal account of the buying journey               |
| Event      | Which source received credit for an event under the configured attribution rules? | Comparing it directly with a session total without naming the scope |

Choose the scope from the decision. A content team asking “which visits arrived from an assistant this month?” probably needs session-scoped reporting. A revenue team asking “which observed acquisition source is attached to these opportunities?” needs a documented join from analytics into CRM fields—and a warning about identity loss between the two.

## Test the source path before building a dashboard

The fastest way to improve an AI-referral report is not another visualization. It is a small, repeatable test matrix.

| Test case            | Entry path                                       | Expected record                                          | What to inspect                                           |
| -------------------- | ------------------------------------------------ | -------------------------------------------------------- | --------------------------------------------------------- |
| Tagged search result | Assistant link with supplied campaign parameters | Named source/medium and AI channel where the rules match | Landing URL, session source, campaign values              |
| Plain referral       | Clickable link with a usable referrer            | Referral or AI channel depending on current classifier   | Raw source/medium and channel assignment                  |
| Referrer-less path   | Copied URL, new tab or stripped referrer         | Often direct or unassigned                               | Confirm that “unknown” is not relabelled as AI            |
| Redirected landing   | Link passes through redirect or consent layer    | Source parameters survive to the tagged page             | Final URL, redirect behavior and first collected page     |
| Existing user        | Returning visitor follows an AI link             | Session source may differ from first-user source         | Compare the scopes rather than choosing the larger number |

Run the matrix on the devices and app modes relevant to your buyers. Record expected versus actual values in both GA4 and the CRM. A passing GA4 row with a missing CRM source is not a passing funnel.

OpenAI’s current [publisher FAQ](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq) says ChatGPT referral URLs include `utm_source=chatgpt.com`. That is useful evidence for tagged clicks from supported experiences. It still does not make every AI-assisted journey observable, and platform behavior should be rechecked against the source before each audit.

## Join the observable visit to pipeline without overwriting the evidence

A practical join does not require a grand attribution model. It requires stable identifiers and field ownership.

1. **Preserve the landing evidence.** Store the observed source, medium, campaign and landing page before later navigation or CRM workflows overwrite them.
2. **Separate original and latest values.** Both can be useful; neither should silently replace the other.
3. **Define the identity bridge.** Document how an anonymous visit becomes a lead or account, and where consent or technical limits break that bridge.
4. **Map CRM stages.** Decide which stages count as enquiry, qualified opportunity and revenue before calculating conversion rates.
5. **Retain a null state.** Unknown is a valid value. Reassigning unknown visits to the channel a stakeholder prefers destroys the baseline.

For small numbers, show the count before the rate. “Two qualified opportunities from 11 observed AI-assistant sessions” is easier to evaluate than a percentage without a denominator. Do not publish a conversion multiple until the sample and comparison window can support it.

## What belongs in the board report?

Use one compact ledger:

| Field                          | Report                               | Caveat beside it                             |
| ------------------------------ | ------------------------------------ | -------------------------------------------- |
| Observed AI-assistant sessions | Count and share of measured sessions | Limited to identifiable referral/source data |
| Engaged or converting sessions | Count before rate                    | GA4 definition and scope stated              |
| CRM-linked enquiries           | Count with join pass rate            | Unmatched records remain visible             |
| Qualified pipeline or revenue  | Count/value with attribution rule    | Association is not causal incrementality     |
| QA status                      | Passed cases ÷ planned cases         | Failing paths listed, not averaged away      |

The dashboard deserves a confidence label based on implementation QA, join coverage and sample size. Confidence describes the evidence quality; it does not decorate a preferred conclusion.

## Decision rules

> **The report becomes useful when its source path and CRM join have been tested.**

- Use GA4’s AI Assistant channel as the starting definition and document its boundary.
- Compare like scopes with like scopes.
- Version custom rules and annotate changes.
- Keep unknown traffic unknown.
- Reconcile to CRM before attaching pipeline language.
- Report small counts with their denominator and limitation.

Download the [AI-referral QA template](/downloads/ai-referral-qa-template.csv) to record expected and observed values. If the source path and CRM join need to be repaired together, the [measurement foundation](/services/measurement-foundation/) describes the scoped implementation.

## Sources and update note

Platform behavior in this article was checked on **24 August 2026** against the primary sources listed in the article metadata. Recheck the GA4 channel definitions and provider referral behavior before implementation; both can change without preserving your local reporting history.
