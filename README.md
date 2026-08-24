# DataDecision

Production static website for [datadecision.consulting](https://datadecision.consulting). Built with Astro and the Ledger design system: editorial, evidence-led, accessible and intentionally light on client-side JavaScript.

## Local development

```sh
npm install
npm run dev
```

Run the complete non-browser quality gate with `npm run qa`.

## Forms and analytics

The contact form requires a real provider endpoint in `PUBLIC_FORM_ENDPOINT`. Without it, the interface reports that submission is not configured and never fakes success. Analytics events are emitted through `window.ddTrack` and the `datadecision:event` browser event; connect an approved provider only after consent and privacy decisions are complete.

See `docs/FOUNDER_INPUT_REQUIRED.md` and `docs/DEPLOYMENT_CHECKLIST.md` before production approval.
