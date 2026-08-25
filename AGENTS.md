# DataDecision repository guide (EXPERIMENTAL VISUAL BUILD)

This folder is an independent experiment. It must never be deployed, pushed, merged or
connected to production DNS. The production site lives in `../datadecision-site` and must
remain untouched.

## Structure

- `src/pages/`: static routes and collection-driven detail routes.
- `src/content/`: publishable insight and work entries. Copy is approved and must be preserved verbatim.
- `src/components/`: Signal Atlas primitives (hero field, method story, explorers, tabs, diagrams).
- `src/styles/global.css`: the complete experimental design system (single file, no framework).
- `public/downloads/`: public research templates, never private strategy material.
- `scripts/`: build validation (`validate-site.mjs`) and external link checks.
- `.21st/design.json`: durable record of the experimental design direction.

## Commands

- `npm run dev` — local dev server (http://localhost:4321).
- `npm run build` — production static build into `dist/`.
- `npm run preview` — serve the production build locally.
- `npm run format` / `npm run format:check` — Prettier gate.
- `npm run check` — Astro and TypeScript checks.
- `npm run validate` — route, link, metadata, schema and claim checks against `dist/`.
- `npm run qa` — complete non-browser gate.

## Design direction: Ledger (deployed theme) + editorial motion layer

The experimental build keeps the deployed Ledger visual direction: warm paper/cream
surfaces (#F4F0E7/#FBFAF6/#EBE5D9), ink serif display (Newsreader Variable), IBM Plex Sans
body, measurement-green accents (#175F49), monospaced evidence labels, thin print-like
borders (#C9C3B7), square corners (2-4px). Dark ink chapters and the green final CTA band
are part of the system. Do not reintroduce dark navy themes, pink/black palettes, network
graphics, grain overlays or glass effects.

Motion layer (vanilla JS + CSS only; no animation libraries):

- Easing cubic-bezier(0.22, 1, 0.36, 1); entrances 550-750ms; hovers 180-250ms.
- One-shot scroll reveals at ~18% visibility; directional left/right on desktop only.
- Hero sequence: header, eyebrow, headline lines (90ms stagger), lede, CTAs, panel from right.
- Diagnostic numerals count up once on view; final values live in the markup.
- Sliding nav underline; compact header after 24px scroll; solid paper header always.
- Decision Board tabs: animated swap under 250ms, full keyboard support, never clip.
- prefers-reduced-motion: final states render immediately; count-up and transforms disabled.

## Source and claim rules

Public numbers require a date, sample/window, baseline, method link and limitation. Never
fabricate clients, testimonials, logos, credentials, results, scarcity, rankings or attribution
certainty. `DEMONSTRATION RUN` labels only genuine public-data or DataDecision self-measurement.

## Git restrictions

Ship changes on the codex/rebuild-v2 branch and merge to master by pull request only.
Never force-push, never push directly to master, never change DNS or GitHub Pages
settings. Preserve public/CNAME and the master-only Pages workflow. Analytics loads only
on the production host; never commit node_modules, dist, screenshots or temporary files.

## Definition of done

All routes build; internal links resolve; desktop and mobile visual QA passes at 320px through
large desktop; metadata, schema, robots and sitemap are valid; formatting, astro check and
`npm run validate` all pass.
