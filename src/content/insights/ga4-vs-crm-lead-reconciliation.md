---
title: 'GA4 Says 400 Leads. Your CRM Says 260. Here’s How to Reconcile Them'
seoTitle: 'GA4 vs CRM Lead Reconciliation'
description: 'GA4 and your CRM will rarely report identical lead numbers. Use this practical framework to find missing, duplicated and misattributed leads.'
publishedDate: 2026-08-24
updatedDate: 2026-08-24
category: 'Measurement & Lead-Source Truth'
cluster: 'Measurement & Lead-Source Truth'
pillar: true
readingMinutes: 7
author: 'Data Decision Consulting'
featured: true
methodologyVersion: 'Lead reconciliation framework v1.0'
sources:
  - label: 'Google Analytics: traffic-source dimensions'
    url: 'https://support.google.com/analytics/answer/15612152'
  - label: 'HubSpot: why HubSpot and Google Analytics do not match'
    url: 'https://knowledge.hubspot.com/reports/why-do-hubspot-and-google-analytics-not-match'
  - label: 'Google Analytics: avoid sending personally identifiable information'
    url: 'https://support.google.com/analytics/answer/6366371'
---

<div class="answer-first">
  <p class="evidence-label">Answer first</p>
  <p><strong>Do not force GA4 and your CRM to show the same total.</strong> Define a lead once, compare the journey stage by stage, and classify every explainable difference.</p>
</div>

GA4 says you generated 400 leads last month. Your CRM shows 260.

The immediate reaction is usually: _Which tool is wrong?_

That is the wrong first question. GA4 and your CRM are not counting the same thing.

GA4 mainly observes website activity: sessions, events and key events. Your CRM stores identifiable business records: contacts, companies, opportunities and deals. A person can submit twice, block analytics, use two devices or already exist in the CRM. One human journey can therefore produce several analytics events but only one contact, or no tracked event and one contact.

The goal is not to force both systems to display the same number. The goal is to explain the difference.

## Start with one definition of a lead

Before opening another dashboard, write one sentence:

> A lead is a successful demo-form submission that creates or updates a valid CRM contact and is not an employee, test or spam submission.

Your definition may differ. That is fine. What matters is using the same definition in both systems.

For example, GA4 may count a `generate_lead` event when a thank-you page loads. If someone refreshes that page, the event may fire again. Meanwhile, the CRM may merge the submission into an existing contact. GA4 records two lead events; the CRM still has one person.

## Build a Lead Reconciliation Waterfall

Instead of comparing two totals, compare the journey in stages:

<figure class="lead-waterfall" aria-labelledby="lead-waterfall-title">
  <figcaption id="lead-waterfall-title">
    <span class="evidence-label">Lead Reconciliation Waterfall</span>
    <strong>Trace the record through six observable stages.</strong>
  </figcaption>
  <ol>
    <li><span>01</span><strong>Form started</strong><small>Intent was observed</small></li>
    <li><span>02</span><strong>Form submitted</strong><small>Submission succeeded</small></li>
    <li><span>03</span><strong>CRM record</strong><small>Contact created or updated</small></li>
    <li><span>04</span><strong>Accepted lead</strong><small>Spam and quality checked</small></li>
    <li><span>05</span><strong>Opportunity</strong><small>Qualified deal created</small></li>
    <li><span>06</span><strong>Revenue</strong><small>Closed-won value recorded</small></li>
  </ol>
  <p class="visual-note">At every join, record the count that continued, the count that stopped and the reason for the change.</p>
</figure>

This is the Data Decision Consulting **Lead Reconciliation Waterfall**. It shows where the number changed and why.

If 400 submissions become 260 contacts, classify the missing 140:

- Existing contacts updated instead of newly created
- Duplicate or repeated submissions
- Spam, test and employee leads
- Form/API failures
- Consent or ad-blocking prevented analytics collection
- CRM imports or manual records with no website session
- Different time zones or reporting windows
- Different rules for what counts as a conversion

Now the disagreement becomes a list of explainable buckets, not a fight between teams. If the unexplained records are being labelled Direct, use the [Direct-traffic diagnosis](/insights/crm-direct-traffic-despite-utm-tags/) to test the capture path.

## Give each submission a shared ID

The cleanest setup is to generate a non-personal `submission_id` when the form succeeds. Send that value with the analytics event and store the same value in the CRM submission record.

Do not send email addresses, phone numbers or names into Google Analytics. Google prohibits sending personally identifiable information. A random internal submission ID is enough for reconciliation.

Your weekly check can then be simple:

| Reconciliation status | Meaning                                             |
| --------------------- | --------------------------------------------------- |
| Matched               | Submission exists in GA4 and the CRM                |
| Analytics only        | Event fired, but no CRM record arrived              |
| CRM only              | Contact exists, but no analytics event was observed |
| Duplicate             | Several submissions map to one contact              |
| Rejected              | Test, spam or invalid lead                          |

## Measure the gap, not just the totals

Track three numbers every week:

- **Match rate:** matched submissions divided by valid CRM submissions
- **Unexplained gap:** records that still have no confirmed reason
- **Time to reconcile:** how long it takes to identify the cause

A small, stable and explained difference is healthier than two identical totals produced by fragile tracking.

The mature answer to “Why does GA4 show 400 while the CRM shows 260?” is not “trust GA4” or “trust the CRM.” It is:

> We matched 238 leads, found 72 repeat submissions, rejected 31 spam leads, identified 45 consent-related CRM-only records and have 14 records still under investigation.

That is not just reporting. That is measurement you can make decisions with.

## Continue through the cluster

The next question determines the next check:

- Compare first touch with the conversion session using [HubSpot Original Source versus GA4 Traffic Acquisition](/insights/hubspot-original-source-vs-ga4/).
- Diagnose lost campaign context when the [CRM reports Direct despite UTM tags](/insights/crm-direct-traffic-despite-utm-tags/).
- Assign an authoritative owner to behaviour, pipeline and money with the [GA4-or-CRM source-of-truth model](/insights/ga4-or-crm-source-of-truth/).
- Extend the same join into [ChatGPT referral revenue measurement](/insights/track-chatgpt-referral-revenue/).
- Prevent avoidable source fragmentation with [B2B UTM governance](/insights/utm-governance-b2b/).

If the joins themselves need repair, the [measurement foundation service](/services/measurement-foundation/) explains the scoped implementation.
