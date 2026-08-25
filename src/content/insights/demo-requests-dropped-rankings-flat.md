---
title: 'Demo Requests Dropped 25% but Rankings Stayed Flat: What Should You Check?'
seoTitle: 'Demo Requests Down, Rankings Flat: What to Check'
description: 'Search rankings stayed stable but demo requests declined. Diagnose changes in clicks, query intent, landing pages, forms, tracking and lead handling.'
publishedDate: 2026-08-24
updatedDate: 2026-08-24
category: 'B2B SaaS Demo-Funnel Diagnosis'
cluster: 'B2B SaaS Demo-Funnel Diagnosis'
readingMinutes: 4
author: 'DataDecision'
methodologyVersion: 'Demand-to-Demo discovery check v1.0'
sources:
  - label: 'Google Search Console: Performance report'
    url: 'https://support.google.com/webmasters/answer/7576553'
  - label: 'Google Search Console: query analysis'
    url: 'https://support.google.com/webmasters/answer/17010961'
  - label: 'Google Analytics: Path Exploration'
    url: 'https://support.google.com/analytics/answer/9317498'
  - label: 'HubSpot: analyze form-submission data'
    url: 'https://knowledge.hubspot.com/forms/analyze-form-submissions-data'
---

<div class="answer-first">
  <p class="evidence-label">Answer first</p>
  <p><strong>Stable rankings do not clear the rest of the funnel.</strong> Check discovery, persuasion and capture in order to find whether clicks, visitor intent, page behaviour or lead handling changed.</p>
</div>

Rankings are stable. Demo requests are down 25%.

It is tempting to conclude that SEO is innocent. Not so fast.

Rank position is only one part of the journey. A page can hold the same average position while receiving fewer clicks, attracting different queries or sending visitors into a weaker conversion path. Start with the complete [Demand-to-Demo diagnostic framework](/insights/traffic-up-demo-bookings-down/) when more than one stage may be involved.

## Check three layers in order

### 1. Discovery: did the same people still click?

In Google Search Console, compare the two periods using:

- Impressions
- Clicks
- Click-through rate
- Queries
- Landing pages
- Device and country

Search Console reports these metrics separately. Average position can remain stable while click-through rate falls or the query mix shifts toward lower-intent searches.

For example, “CRM attribution software” and “what is attribution?” may both reach the same article. The second query can increase impressions without producing demo demand.

### 2. Persuasion: did the landing-page journey change?

Check whether visitors still:

- Reach product and pricing pages
- Click the demo CTA
- Start the form
- View proof such as case studies or integrations
- Return before converting

Use GA4 path analysis backwards from the demo event. If fewer converting visitors now pass through the same commercial pages, the problem may be content intent or internal linking, not ranking. If the pricing audience itself changed, inspect why [pricing-page visits rose while demos stayed flat](/insights/pricing-page-visits-up-demos-flat/).

Also inspect recent website changes. A new sticky header, animation, cookie banner or mobile layout can hide a CTA without affecting search rankings at all.

### 3. Capture: did the request actually reach sales?

Test the live form yourself on desktop and mobile.

Confirm that:

- The success event fires only after a real submission
- The CRM receives the record
- UTM and source fields survive
- Qualified prospects see a working calendar
- Notifications and assignments reach the correct owner
- Spam rules are not rejecting valid leads

If the analytics event and CRM total disagree, use the [GA4-to-CRM lead reconciliation framework](/insights/ga4-vs-crm-lead-reconciliation/) before changing channel credit.

## Use a simple diagnosis sentence

Finish the investigation with one sentence containing a stage, segment and cause:

> Rankings stayed stable, but mobile organic CTR fell and the remaining traffic shifted toward informational queries; form completion among commercial visitors did not change.

That is much more useful than “SEO leads are down.”

Rankings tell you where a page appeared. They do not tell you who clicked, what they wanted or whether the rest of your funnel worked.

Next, return to the [complete Demand-to-Demo diagnostic framework](/insights/traffic-up-demo-bookings-down/) or add the transitions to the [B2B SaaS demo-funnel dashboard](/insights/b2b-saas-demo-funnel-dashboard/).
