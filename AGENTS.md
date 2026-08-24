# DataDecision repository guide

## Structure

- `src/pages/`: static routes and collection-driven detail routes.
- `src/content/`: publishable insight and demonstration entries only.
- `src/components/`: shared editorial, evidence, navigation and form primitives.
- `src/styles/`: Ledger design tokens and global composition rules.
- `public/downloads/`: public research templates, never private strategy material.
- `docs/`: launch operations, founder inputs and deployment notes.
- `.21st/`: durable Ledger design decisions.

## Commands

- `npm run dev` — local server.
- `npm run format:check` — formatting gate.
- `npm run check` — Astro and TypeScript checks.
- `npm run build` — production static build.
- `npm run validate` — route, link, metadata and claim checks against `dist/`.
- `npm run qa` — complete non-browser gate.

## Source and claim rules

The user request is authoritative. The private strategy ZIP is build context and must never be committed. Public numbers require a date, sample/window, baseline, method link and limitation. Never fabricate clients, testimonials, logos, credentials, results, scarcity, rankings or attribution certainty. `DEMONSTRATION RUN` labels only genuine public-data or DataDecision self-measurement.

## Design constraints

Use the Ledger direction recorded in `.21st/design.json`: editorial typography, asymmetric grids, hairline rules, tables, folio labels and purposeful whitespace. Avoid generic SaaS card grids, gradients, glass, glow, stock imagery, dashboards, heavy shadows and animated evidence numbers. Preserve keyboard access, visible focus, reduced motion and AA-conscious contrast.

## Git restrictions

Rebuild work stays on `codex/rebuild-v2`. Do not merge or push directly to `master`, alter DNS, or intentionally deploy production. Preserve `public/CNAME` and the master-only Pages workflow unless deployment facts change.

## Definition of done

All routes build; internal links resolve; desktop and mobile visual QA passes; metadata, schema, robots and sitemap are valid; no private strategy or secrets are committed; unresolved founder facts remain in `docs/FOUNDER_INPUT_REQUIRED.md`.
