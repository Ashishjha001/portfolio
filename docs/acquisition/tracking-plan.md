# Acquisition tracking plan

The site emits privacy-safe events through `window.ddTrack`. Events are also pushed to `dataLayer` so the existing Google Tag Manager container can route them to GA4 or advertising platforms.

No email address, company name, free-text message or other form content is sent with these events.

## Events

| Event                        | Fires when                                      | Safe parameters                         |
| ---------------------------- | ----------------------------------------------- | --------------------------------------- |
| `cta_primary_click`          | A primary site CTA is clicked                   | page path, link label, destination path |
| `lead_form_started`          | A visitor first interacts with the contact form | page path, form ID, selected service    |
| `lead_form_validation_error` | Native validation prevents submission           | page path, form ID, error type          |
| `lead_form_submitted`        | Web3Forms confirms a successful submission      | page path, form ID, selected service    |
| `lead_form_submit_error`     | Delivery fails after submission                 | page path, form ID, error type          |

## GTM configuration

1. Create one GA4 Event tag for each event above, triggered by a Custom Event with the exact event name.
2. Map only the documented safe parameters.
3. Mark `lead_form_submitted` as a key event in GA4 after a production test.
4. Do not mark form starts or CTA clicks as primary ad conversions.
5. Test in GTM Preview and GA4 DebugView on production.
6. Confirm one successful form creates one submission event—not zero and not two.

## Campaign parameters

The form already records `utm_source`, `utm_medium`, `utm_campaign` and referrer in the delivered brief. Keep campaign names free of personal information.

## Qualified-lead loop

Add a simple CRM or spreadsheet field for:

- Unqualified.
- Qualified.
- Fit call held.
- Scope sent.
- Client.

Until this status can be joined reliably to the original campaign, paid platforms should not be allowed to optimize toward raw form volume at scale.
