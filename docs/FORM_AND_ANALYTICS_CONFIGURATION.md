# Form and analytics configuration

## Form

Set `PUBLIC_FORM_ENDPOINT` to the approved HTTPS endpoint in the build environment. The adapter sends `multipart/form-data` with `Accept: application/json` and records success only after a successful HTTP response.

Provider acceptance checks:

1. Confirm the endpoint accepts the seven visible fields and hidden UTM/referrer fields.
2. Confirm honeypot handling, provider-side validation and rate limiting.
3. Test success, validation failure, network failure and provider rejection.
4. Confirm recipient access, retention and deletion.
5. Add the provider and purposes to the reviewed privacy notice.

Client-side honeypot and minimum-time checks reduce low-effort spam; they are not server-side security controls.

## Analytics event layer

The browser exposes `window.ddTrack(name, detail)` and dispatches `datadecision:event`. Implemented event names:

- `cta_primary_click`
- `methodology_cta_click`
- `form_start`
- `form_submit_success` — only after endpoint confirmation
- `template_download`
- `faq_expand`
- `benchmark_view`
- `outbound_contact_click`

No provider is installed. Before connecting one, approve consent behavior, data minimization, retention and policy disclosures. Do not map form click to form success.
