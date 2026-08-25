---
title: 'How to Build a B2B SaaS Demo-Funnel Dashboard That Finds Leaks Early'
seoTitle: 'Build a B2B SaaS Demo-Funnel Dashboard'
description: 'Build a practical B2B SaaS demo dashboard that tracks visits, forms, bookings, held meetings, opportunities and revenue without hiding leaks.'
publishedDate: 2026-08-24
updatedDate: 2026-08-24
category: 'B2B SaaS Demo-Funnel Diagnosis'
cluster: 'B2B SaaS Demo-Funnel Diagnosis'
readingMinutes: 5
author: 'DataDecision'
methodologyVersion: 'Demo-funnel dashboard framework v1.0'
sources:
  - label: 'Google Analytics: Funnel Exploration'
    url: 'https://support.google.com/analytics/answer/9327974'
  - label: 'HubSpot: create custom funnel reports'
    url: 'https://knowledge.hubspot.com/reports/create-new-custom-funnel-reports'
  - label: 'HubSpot: create a journey report'
    url: 'https://knowledge.hubspot.com/reports/create-a-journey-report'
  - label: 'HubSpot: sales-funnel reporting'
    url: 'https://knowledge.hubspot.com/reports/create-sales-reports-in-the-sales-analytics-suite'
---

<div class="answer-first">
  <p class="evidence-label">Answer first</p>
  <p><strong>Build the dashboard around transitions, not the easiest totals.</strong> The useful question is where qualified buying intent was lost between the website, CRM, meeting and opportunity stages.</p>
</div>

Most demo dashboards are built backwards.

They start with the metrics that are easy to display, such as traffic, leads and pipeline, and ignore the transitions where revenue actually disappears.

A useful dashboard should answer one question:

> At which stage did we lose qualified buying intent?

The [Demand-to-Demo diagnostic framework](/insights/traffic-up-demo-bookings-down/) supplies the first six stages; the dashboard extends them through opportunity and revenue.

## Track the complete funnel

Use these stages:

| Stage                    | Core metric                              | Primary owner |
| ------------------------ | ---------------------------------------- | ------------- |
| Qualified website demand | Relevant visits to commercial pages      | Marketing     |
| Demo intent              | Demo-page visits and form starts         | Marketing/CRO |
| Request captured         | Valid form submissions                   | Marketing Ops |
| Lead accepted            | Qualified requests                       | RevOps/SDR    |
| Meeting booked           | Qualified leads with a scheduled meeting | RevOps        |
| Meeting held             | Completed qualified meetings             | Sales         |
| Opportunity created      | Accepted sales opportunities             | Sales         |
| Revenue closed           | Closed-won revenue                       | Sales/Finance |

For every transition, show:

- Volume
- Conversion rate
- Change versus the previous period
- Change versus the trailing 90-day baseline
- Median time to the next stage

## Segment before blaming

Every main metric should be filterable by:

- Source and campaign
- Landing page
- ICP or account tier
- Geography
- Device
- Assigned representative
- New versus existing contact

If the sitewide form conversion rate falls, but only mobile paid-social traffic changed, rebuilding the entire demo page would be the wrong response. Use the [rankings-flat diagnosis](/insights/demo-requests-dropped-rankings-flat/) when the discovery layer looks stable but commercial outcomes fall.

## Add four operational alerts

Create alerts for:

1. Valid submissions that create no CRM record
2. Qualified leads with no owner after the agreed response window
3. Booked meetings with no final held/cancelled/no-show status
4. Held meetings that never receive an opportunity outcome

These are not marketing-performance problems. They are unfinished data and operational work.

GA4 Funnel Exploration can show website-stage abandonment. CRM funnel or journey reports can show lifecycle and deal-stage movement. Do not force either tool to represent the entire journey alone; reconcile them using a shared submission or contact key where possible. The [GA4-to-CRM reconciliation guide](/insights/ga4-vs-crm-lead-reconciliation/) explains that join, while the [metric-ownership model](/insights/ga4-or-crm-source-of-truth/) assigns each business question to the appropriate system.

## Keep the executive view small

The first screen should show only:

- Qualified visits
- Demo requests
- Qualified meetings held
- Opportunities created
- Pipeline generated
- Closed-won revenue
- Biggest leaking transition

Everything else belongs in the diagnostic layer.

A dashboard is successful when it shortens the conversation from “demos are down” to:

> Qualified demand is stable, but 19% of accepted leads are failing between form submission and meeting booking. The loss is concentrated in enterprise leads outside business hours.

That gives someone a clear next action.

Use the [routing model](/insights/demo-request-routing-sales-vs-sdr/) and [show-up-rate definition](/insights/b2b-saas-demo-show-up-rate/) to make those downstream transitions comparable. If the shared keys or lifecycle fields need implementation, the [measurement foundation service](/services/measurement-foundation/) defines the relevant scope.
