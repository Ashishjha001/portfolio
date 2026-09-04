---
title: 'How to Know Which Marketing Channels Actually Drive Revenue'
seoTitle: 'How to Measure Which Channels Drive Revenue'
description: 'The Data Decision Consulting implementation for channel-revenue measurement: decision questions, source taxonomy, GA4 and CRM capture, attribution rules and the reports that survive scrutiny.'
publishedDate: 2026-08-25
updatedDate: 2026-08-25
category: 'Service playbook'
cluster: 'Service Playbooks'
readingMinutes: 8
author: 'Data Decision Consulting'
methodologyVersion: 'Channel-revenue playbook v1.0'
sources:
  - label: 'Google Analytics: campaign URL guidance'
    url: 'https://support.google.com/analytics/answer/10917952'
  - label: 'Google Analytics: about attribution modeling'
    url: 'https://support.google.com/analytics/answer/10596866'
  - label: 'HubSpot: understand attribution reporting'
    url: 'https://knowledge.hubspot.com/reports/understand-attribution-reporting'
---

<div class="answer-first">
  <p class="evidence-label">Answer first</p>
  <p><strong>You know which channels drive revenue when a named decision, a source taxonomy, a capture path and an attribution rule all agree: and the agreement is documented.</strong> The Data Decision Consulting team builds that agreement in five layers; this guide is the implementation.</p>
</div>

The question the Data Decision Consulting team hears most from founders: "We spend on five channels and nobody can tell us which one works." The stack usually grew backwards: dashboard first, questions never.

Here is the build order the Data Decision Consulting team implements inside the [Growth Strategy & Measurement](/contact/?service=growth-strategy-measurement#request-a-brief) engagement.

## Step 1: Name the five decisions

Before any tool, the Data Decision Consulting team writes the decisions the measurement must support:

- Which channels produce qualified pipeline?
- Which content moves buyers to a demo?
- Where does the funnel leak?
- What does a channel's customer cost versus its revenue?
- What should get more budget next quarter?

Every later artifact traces to one of these. Metrics that do not map to a decision get cut.

## Step 2: Fix the vocabulary

The Data Decision Consulting team implements the [UTM governance system](/insights/utm-governance-b2b/): one dictionary, one link generator, one accountable owner. Lowercase, one separator, no personal data, controlled values for source and medium.

**Test:** a campaign launched today will still be explainable in six months.

## Step 3: Implement capture on the website

GA4 configured against the decisions: key events named for actions that matter, campaign tagging per the taxonomy, internal traffic filtered, and the form capture path verified end-to-end. The Data Decision Consulting team tests this with real submissions: the [capture-path diagnosis](/insights/crm-direct-traffic-despite-utm-tags/) is the checklist.

## Step 4: Preserve the source into the CRM

The join between anonymous visit and named record is where most stacks break. The Data Decision Consulting team implements:

- Hidden capture fields for campaign parameters on every form.
- CRM properties that receive and keep those values through stage changes.
- A reconciliation worksheet comparing GA4 sessions to CRM contacts monthly: the [reconciliation framework](/insights/ga4-vs-crm-lead-reconciliation/) defines the buckets.

**Test:** a test lead reaches the CRM carrying its source, medium and campaign.

## Step 5: Choose and document the attribution rule

First-touch, last-touch or multi-touch: each answers a different question, and none is "correct". The Data Decision Consulting team picks the rule that matches the sales cycle, records the choice and the date in an [assumption register](/insights/attribution-assumption-register/), and never mixes windows in one report.

## The reports that survive scrutiny

| Report                      | Answers                          | Source      |
| --------------------------- | -------------------------------- | ----------- |
| Pipeline by first source    | Which channels start the journey | CRM         |
| Conversions by channel      | Which channels produce actions   | GA4         |
| Funnel stage drop-off       | Where the journey leaks          | CRM + GA4   |
| Cost per outcome by channel | What each channel costs          | Spend + CRM |

Every tile maps to a Step 1 decision and carries its assumption beside it.

## Failure modes the Data Decision Consulting team repairs most

- Dashboards built before decisions existed.
- Four spellings of the same channel.
- CRM fields overwritten by later activity.
- Attribution changed mid-quarter without annotation.

For the honest-reading rules when samples are small, see the [small-sample guide](/insights/small-conversion-samples-inference/). For the budget math on top of these numbers, read the [break-even CAC worksheet](/insights/break-even-cac-worksheet/).

To have the Data Decision Consulting team implement this stack on your systems, brief us through [Growth Strategy & Measurement](/contact/?service=growth-strategy-measurement#request-a-brief).
