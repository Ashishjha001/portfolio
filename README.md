# DataDecision

Production static website for [datadecision.consulting](https://datadecision.consulting). Built with Astro on the Ledger design system: warm paper surfaces, ink serif display type, measurement-green accents, monospaced evidence labels and thin print-like borders.

## Local development

```sh
npm install
npm run dev       # http://localhost:4321
```

Production build and quality gates:

```sh
npm run build     # static build into dist/
npm run preview   # serve the build locally
npm run qa        # format + astro check + build + validate + external link check
```

## Deployment

GitHub Pages deploys automatically from `master` via `.github/workflows/deploy.yml`
(Astro action, Node 22). Ship changes as a branch + pull request; merging to `master`
triggers the build and publish.

## Analytics

Google Tag Manager loads only on `datadecision.consulting` (runtime hostname guard plus
build-time gate). Localhost development and preview never fire analytics. Conversion
events are exposed through `window.ddTrack` / the `datadecision:event` browser event.

## Contact form

The enquiry form posts to Web3Forms. It reads the `?service=` query parameter, prefills a
visible service dropdown plus a hidden `selected_service` field, and submits both with the
payload. Spam protection: honeypot field and minimum completion time.

## Content rules

Public numbers require a date, sample/window, baseline, method link and limitation. Never
fabricate clients, testimonials, logos, credentials, results, rankings or attribution
certainty. `DEMONSTRATION RUN` labels only genuine public-data or DataDecision
self-measurement. See `AGENTS.md` and `.21st/design.json` for the design system and
`docs/` for launch operations.
