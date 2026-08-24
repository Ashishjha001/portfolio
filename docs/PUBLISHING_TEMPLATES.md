# Publishing templates

## Article entry

Create `src/content/insights/<slug>.md` with the required frontmatter from `src/content.config.ts`. The body should use this order where appropriate:

1. Answer-first box with verification date.
2. Direct definition.
3. Decision context.
4. Method or procedure.
5. Evidence table.
6. Failure modes and limitations.
7. Reusable template/checklist.
8. Decision rules.
9. Contextual service and methodology links.
10. Source/update note.

Do not copy a launch article as filler. Reuse the structure, not the sentences.

## Benchmark or demonstration entry

Create `src/content/work/<slug>.md` with:

- label: exactly `DEMONSTRATION RUN`;
- observation date and measurement window;
- completed sample description;
- baseline and method version;
- one or more explicit limitations;
- status `complete` only after the observation exists.

Body order:

1. Research question.
2. Pre-committed sample and inclusion rules.
3. Collection procedure.
4. Results with numerator and denominator.
5. Interpretation labelled separately from observation.
6. Null or negative findings.
7. Limitations.
8. Raw/public artifact links where permitted.
9. Next comparable observation date.

Scheduled work stays in the operational plan, not as an empty public work card.

## Decision Board

Every completed board contains:

- visibility or measurement baseline;
- top controllable gap;
- prioritized action;
- owner, effort, expected signal, confidence and stopping rule;
- limitation beside the recommendation;
- date, window, sample, baseline and method link.
