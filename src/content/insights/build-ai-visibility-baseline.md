---
title: 'Build your own AI-search visibility baseline'
description: 'A practical protocol for turning 50 buyer questions into a dated, repeatable visibility record with a clear sample boundary.'
publishedDate: 2026-08-24
updatedDate: 2026-08-24
category: 'Method guide'
readingMinutes: 12
author: 'DataDecision Research'
featured: true
methodologyVersion: 'Ledger method v0.3'
sources:
  - label: 'DataDecision methodology v0.3'
    url: 'https://datadecision.consulting/methodology/'
  - label: 'OpenAI: publishers and developers FAQ'
    url: 'https://help.openai.com/en/articles/12627856-publishers-and-developers-faq'
  - label: 'Google: generative AI search optimization guidance'
    url: 'https://developers.google.com/search/docs/fundamentals/ai-optimization-guide?hl=en'
---

<div class="answer-first">
  <p class="evidence-label">Answer first / method v0.3</p>
  <p><strong>An AI-search visibility baseline is a dated record of what a fixed set of buyer questions produced across a documented set of search and AI surfaces.</strong> Build the query frame before observing results, preserve mentions and citations separately, repeat only under a pre-set rule, and report the sample boundary beside every metric.</p>
</div>

## Why one ChatGPT check gives you a weak baseline

A spot-check is useful for discovery. It can reveal an incorrect description, a surprising source or a competitor you did not expect. It cannot tell you whether the observation is typical, persistent or comparable with another brand.

A baseline adds discipline in five places:

1. a fixed question set;
2. a documented comparison set;
3. named surfaces and collection conditions;
4. a pre-set observation and repeat rule;
5. metrics whose denominator is visible.

The baseline is still a sample. Its value comes from repeatability and traceability, not from turning a small observation into an absolute score.

## Mentions, citations and referrals are different layers

| Layer    | Definition used here                                     | Evidence                                      | What it cannot prove                                 |
| -------- | -------------------------------------------------------- | --------------------------------------------- | ---------------------------------------------------- |
| Mention  | The measured entity appears in the visible answer        | Captured answer within the observation record | Endorsement, accuracy or a visit                     |
| Citation | A visible source link points to the measured domain      | Captured source list or linked passage        | Why the engine selected it or whether anyone clicked |
| Referral | An observable visit carries identifiable source evidence | Analytics and landing-path record             | Every AI-assisted visit or causal revenue impact     |

Keep the three fields separate. A mention without a citation is still an observation. A citation without a referral is not a failed outcome; it answers a different question. A referral without a CRM join cannot support a pipeline claim.

## Step 1: define the decision

Write the decision the baseline should inform. Examples:

- Which category questions deserve content or documentation work first?
- Are product descriptions consistently wrong in the sampled answers?
- Which public sources recur in comparison answers?
- Should the team fund a deeper technical and measurement review?

Avoid “What is our AI score?” unless you can define what the number changes. A composite score often hides the useful diagnostic fields.

## Step 2: construct the 50-question frame

The standard DataDecision frame uses one market and one language. Divide 50 questions across buyer contexts rather than collecting 50 near-duplicates.

| Intent class            | Suggested share | Question pattern                                | Review rule                                 |
| ----------------------- | --------------: | ----------------------------------------------- | ------------------------------------------- |
| Category discovery      |              15 | “Tools for [problem]”                           | Do not include your brand in the prompt     |
| Alternatives            |              10 | “Alternatives to [known product]”               | Approve the comparison product list first   |
| Direct comparison       |              10 | “[A] vs [B] for [context]”                      | Use symmetric wording                       |
| Problem solving         |              10 | “How should a team solve [problem]?”            | Keep the desired solution open              |
| Risk and implementation |               5 | “What should I check before buying [category]?” | Record sources and caveats, not just brands |

The allocation is a starting frame, not a universal optimum. Change it before collection if your sales process supports a different mix, then record the change.

For every prompt, log:

- a stable prompt ID;
- the exact text;
- intent class;
- target market and language;
- approved comparison set;
- inclusion reason;
- review owner and approval date.

Do not rewrite underperforming prompts after seeing the answer. That creates a new frame and requires a new version.

## Step 3: define the observation protocol

Choose the surface set based on buyer relevance and available, permitted access. The standard diagnostic covers up to four approved search or AI surfaces where access permits. For each one, write:

- product and mode;
- account or session condition you can observe;
- date, time and intended locale;
- whether the answer and sources can be preserved under the platform terms;
- the repeat rule;
- the failure rule when access is unavailable.

Two documented runs may be appropriate when you need to see whether an observation repeats. Decide that before the first run. Do not add repetitions only for prompts whose first answer you dislike.

## Step 4: record raw fields before calculating anything

Use one row per prompt, surface and run. At minimum:

- mentioned: yes/no;
- visible citation to measured domain: yes/no;
- answer describes the product: yes/no;
- description accuracy rubric result;
- other approved comparison entities present;
- visible source URLs;
- observation notes;
- access failure or ambiguity flag.

The downloadable [baseline template](/downloads/ai-visibility-baseline-template.csv) contains these fields without a pre-filled result. It is intentionally boring: a clean record is more useful than a decorative score.

## Step 5: calculate only descriptive metrics the sample supports

Start with transparent ratios:

**Mention presence** = eligible observations containing the entity ÷ eligible observations.

**Citation presence** = eligible observations linking to the measured domain ÷ eligible observations.

**Description accuracy** = rubric-coded accurate descriptions ÷ observations that describe the entity.

**Comparison presence** = the same presence calculation for each approved comparison entity inside the identical frame.

Always publish the numerator and denominator. “Observed in 8 of 50 eligible query-surface records” is stronger than a percentage whose sample is hidden.

Do not average together ineligible surfaces, failed access and true non-appearance. Give them separate states:

- observed / present;
- observed / absent;
- access unavailable;
- ambiguous / requires review.

## Step 6: move from observation to action

A baseline becomes useful when it changes a decision. Group findings by the evidence they support:

| Finding                                        | Possible action                                         | Evidence needed before action                                   | Stopping rule                                                           |
| ---------------------------------------------- | ------------------------------------------------------- | --------------------------------------------------------------- | ----------------------------------------------------------------------- |
| Product description is repeatedly inaccurate   | Repair the factual source page and entity consistency   | Specific inaccurate statements and the public sources visible   | Stop if source facts are already clear and no controllable gap is found |
| Competitor appears in comparison prompts       | Review comparison content and cited third-party sources | Same-frame comparison, not one anecdotal answer                 | Stop if the sample is too small or access conditions differ             |
| Domain is cited but no referrals are visible   | Run referral QA and CRM reconciliation                  | Analytics source tests and landing-path evidence                | Stop before assigning hidden visits to AI                               |
| Key pages are inaccessible to a search crawler | Fix the documented access path                          | Current provider policy, live response and logs where available | Stop short of promising a citation outcome                              |

Each recommendation should carry an owner, effort, expected signal, confidence label and stopping rule. Confidence belongs to the evidence, not to the enthusiasm of the team.

## Pitfalls that invalidate comparison

- Leading prompts with your own brand and calling the result “discovery.”
- Mixing markets or languages without recording them.
- Comparing your repeated run with a competitor’s single run.
- Treating a visible source as proof of the ranking mechanism.
- Changing the query mix between dates while keeping one trend line.
- Collapsing access failures into absence.
- Publishing a percentage without the numerator, denominator and window.
- Calling a public-data demonstration a client result.

## The reporting page

Keep the final page compact:

1. **Frame:** decision, market, language, surfaces, query count and dates.
2. **Baseline:** raw counts and transparent descriptive ratios.
3. **Source map:** visible sources, with no causal claim.
4. **Comparison:** same-frame observations for the approved set.
5. **Measurement gap:** what analytics and CRM can or cannot observe.
6. **Actions:** owner, effort, expected signal, confidence and stopping rule.
7. **Limitations:** variance, access, personalization, engine change and sample boundary.

> **Start with the frame. Tooling comes later.**

The [published methodology](/methodology/) contains the version record and limitation table. Use it freely, or [request a diagnostic](/contact/) when you need the observation, technical review and measurement path handled as one scoped engagement.
