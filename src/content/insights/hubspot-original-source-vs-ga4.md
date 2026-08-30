---
title: 'HubSpot Original Source vs GA4 Traffic Acquisition: Which One Should You Trust?'
seoTitle: 'HubSpot Original Source vs GA4'
description: 'HubSpot Original Source and GA4 Traffic Acquisition answer different questions. Learn which one to use for acquisition, conversion and revenue.'
publishedDate: 2026-08-24
updatedDate: 2026-08-24
category: 'Measurement & Lead-Source Truth'
cluster: 'Measurement & Lead-Source Truth'
readingMinutes: 5
author: 'Data Decision Consulting'
methodologyVersion: 'Lead-source question model v1.0'
sources:
  - label: 'HubSpot: Original and Latest Traffic Source properties'
    url: 'https://knowledge.hubspot.com/properties/understand-traffic-source-properties'
  - label: 'Google Analytics: traffic-source scopes'
    url: 'https://support.google.com/analytics/answer/11080067'
  - label: 'Google Analytics: Traffic Acquisition report'
    url: 'https://support.google.com/analytics/answer/12923437'
---

<div class="answer-first">
  <p class="evidence-label">Answer first</p>
  <p><strong>Trust the field that matches the question.</strong> HubSpot Original Source describes the first known source; GA4 session fields describe a particular visit. Neither field explains the full revenue journey alone.</p>
</div>

HubSpot says a lead came from organic search. GA4 says the converting session came from paid social.

Both can be correct. The [foundational GA4-to-CRM reconciliation guide](/insights/ga4-vs-crm-lead-reconciliation/) explains why the totals and records should be matched before either source field is treated as final.

HubSpot’s **Original Traffic Source** records the first known web source through which a contact interacted with the business. Its **Latest Traffic Source** records the most recent known source. GA4 offers several scopes too: **First user source** describes initial acquisition, while **Session source** describes what started a particular session.

The disagreement usually appears because the team is comparing _first touch_ in one tool with _conversion-session touch_ in another.

Imagine this journey:

1. Priya finds your website through Google.
2. Two weeks later, she clicks a LinkedIn ad.
3. She returns directly and books a demo.

HubSpot Original Source may correctly say organic search. GA4 Session Source for the earlier paid visit may correctly say LinkedIn. The final direct visit may be handled differently depending on scope and attribution rules.

## Use the Three-Question Source Model

Stop asking one source field to explain the whole journey. Store three answers:

<figure class="source-question-model" aria-labelledby="source-question-model-title">
  <figcaption id="source-question-model-title">
    <span class="evidence-label">Three-question source model</span>
    <strong>Separate discovery, conversion and revenue credit.</strong>
  </figcaption>
  <ol>
    <li><span>01</span><strong>Discovered by</strong><small>First known acquisition source</small></li>
    <li><span>02</span><strong>Converted by</strong><small>Return or session that produced the lead</small></li>
    <li><span>03</span><strong>Revenue credited by</strong><small>CRM deal data under an agreed model</small></li>
  </ol>
</figure>

| Business question                              | Best field to examine                            |
| ---------------------------------------------- | ------------------------------------------------ |
| How did this person first discover us?         | HubSpot Original Source or GA4 First user source |
| What brought them back or helped them convert? | HubSpot Latest Source and GA4 Session source     |
| Which journey produced pipeline and revenue?   | CRM deal data plus an agreed attribution model   |

We call this **Discovered by → Converted by → Revenue credited by**.

It is more honest than squeezing every journey into one “lead source” column.

## So which tool should you trust?

- Use **GA4** to understand anonymous website behaviour, landing pages and sessions.
- Use **HubSpot** to understand known contacts, lifecycle movement and associated deals.
- Use your **CRM/finance record** for the final amount of pipeline and closed revenue.

Then reconcile them instead of asking one platform to replace the others. The [metric-ownership model for GA4, CRM and finance](/insights/ga4-or-crm-source-of-truth/) makes that boundary explicit.

One more practical step: keep HubSpot’s source drill-down fields. The broad label “Paid social” is not enough; the drill-down can preserve the platform or campaign detail that explains the journey.

There is no universal winning dashboard here. The right answer depends on the question being asked. Once the question is clear, the correct field usually becomes obvious.

If source fields are being lost between the visit and the contact, review the [measurement foundation](/services/measurement-foundation/) before changing attribution rules.
