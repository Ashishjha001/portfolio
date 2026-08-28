/**
 * DataDecision Proprietary Framework Engine
 *
 * Each framework follows the same structure so it can be rendered to a
 * diagram, table or downloadable worksheet, and so the weakest component
 * (definition, purpose, inputs, calculation, interpretation, limitations)
 * can be improved first.
 *
 * These are analytical frameworks, not promises. They never fabricate
 * numbers; where a benchmark does not exist the framework returns a range
 * or an explicit "no comparable sample" so the reader is never misled.
 */

export type FrameworkOwner = 'growth' | 'performance-marketing' | 'seo' | 'ai-search';

export interface FrameworkStep {
  step: string;
  body: string;
}

export interface Framework {
  id: string;
  name: string;
  oneLiner: string;
  owner: FrameworkOwner;
  definition: string;
  purpose: string;
  inputs: string[];
  calculation: string;
  interpretation: string;
  limitations: string[];
  exampleNote: string;
  /** Tool page anchor that implements this framework interactively. */
  toolHref?: string;
  /** Protected Insight that carries the deep treatment. */
  insightHref?: string;
  /** Methodology page anchor (usually /methodology/). */
  methodologyHref?: string;
  /** Service anchor for the conversion path. */
  serviceHref?: string;
  suggestedAction: string;
}

export const frameworks: Framework[] = [
  {
    id: 'funnel-leakage-index',
    name: 'DataDecision Funnel Leakage Index',
    oneLiner: 'A single, honest number for the largest measurable conversion drop in a funnel.',
    owner: 'growth',
    definition:
      'The largest percentage-point drop between two adjacent stages of a defined funnel, expressed as a leakage rate and ranked against the other steps so the biggest gap is easy to name.',
    purpose:
      'Turns a dashboard of conversion rates into one decision: which stage deserves the next diagnostic and the next change. It stops teams funding the noisiest stage instead of the largest leak.',
    inputs: ['Sequenced funnel stage counts', 'A defined eligible base per stage'],
    calculation:
      'For each adjacent pair (stage A to B), leakage = (A - B) / A. The index = the max leakage pair, reported with its stage names and the eligible counts so it can be re-computed.',
    interpretation:
      'A high index between lead generation and qualification identifies where the biggest measurable loss sits — but it only points you to that step; it does not prove the cause, which still needs stage-specific diagnosis.',
    limitations: [
      'Only as good as the stage definitions and event capture',
      'Requires a shared eligible base; mixing counts across sources corrupts the index',
      'Leakage between stages can be intentional (filters), not a defect',
      'No universal "good" index exists — compare over time, not to a benchmark',
    ],
    exampleNote:
      'Traffic 100,000 → leads 1,000 → demos 200 → qualified 100 → customers 20. Stage leakages: leads/demo 80%, demo/qualified 50%, qualified/customer 80%. The index flags both the top-of-funnel and the qualification-to-close drop as joint largest, directing diagnosis to whether traffic is the source or the bottleneck is below.',
    toolHref: '/tools/#funnel-leakage-calculator',
    insightHref: '/insights/traffic-up-demo-bookings-down/',
    serviceHref: '/services/#growth-strategy-measurement',
    suggestedAction:
      'Run the index over the last six months. If the same stage is the max leak repeatedly, schedule a stage-level diagnostic before funding more traffic.',
  },
  {
    id: 'ai-search-visibility-score',
    name: 'DataDecision AI Search Visibility Score',
    oneLiner: 'Converts dated AI-answer observations into a comparable 0–100 sample score.',
    owner: 'ai-search',
    definition:
      'A descriptive score built from mention presence, citation presence, description accuracy and comparison share across a fixed query frame — always reported with the sample, window and method kept visible.',
    purpose:
      'Replaces scattered screenshots with one repeatable number that can be re-measured over time to detect change, without ever pretending the sample is a universal ranking.',
    inputs: [
      'Fixed query frame',
      'Observed mentions',
      'Observed citations',
      'Rubric-coded description accuracy',
      'Comparison share',
    ],
    calculation:
      'Score = weighted combination of M1 mention presence, M2 citation presence, M3 description accuracy and M4 comparison share, evaluated over the same approved query set. The exact weights and version are documented per run.',
    interpretation:
      'A high score means the entity was present, described accurately and comparatively strong inside that sample. It does not mean the entity ranks "first" in AI generally.',
    limitations: [
      'Nondeterministic AI outputs mean the score is sampled, not absolute',
      'Confounded by engine, session, locale and time',
      'Weights and query frame are version-controlled; cross-version comparisons are limited',
      'A citation does not reveal the internal ranking signal',
    ],
    exampleNote:
      'Out of 50 approved buyer queries, a brand is mentioned in 20, cited in 8, described accurately in 18 and beats the median comparison share in 14 → a mid-sample visibility profile, not a universal one.',
    toolHref: '/tools/#ai-visibility-score',
    insightHref: '/insights/build-ai-visibility-baseline/',
    methodologyHref: '/methodology/',
    serviceHref: '/services/ai-search-visibility/',
    suggestedAction:
      'Run a baseline now, then re-measure on a fixed cadence only when a decision depends on it. Report the score with the sample boundary shown.',
  },
  {
    id: 'attribution-health-score',
    name: 'DataDecision Attribution Health Score',
    oneLiner: 'Scores how defensible your measurement stack is at producing a revenue claim.',
    owner: 'performance-marketing',
    definition:
      'A structured self-review of whether the source taxonomy, capture, join, reconciliation and assumption governance can support the revenue decisions the team actually makes.',
    purpose:
      'Flags the weakest link in the measurement chain — taxonomy, capture, join, reconciliation or assumptions — so the team improves the component that matters first, instead of buying a fancier tool.',
    inputs: [
      'Source taxonomy coverage',
      'Capture reliability score',
      'CRM join rate',
      'Reconciliation variance',
      'Assumption register presence',
    ],
    calculation:
      'A weighted checklist across five domains (taxonomy, capture, join, reconciliation, governance). Each domain scores 0–20, weighted to reflect the team’s decision importance, for a 0–100 health score.',
    interpretation:
      'A low score in a decision-critical domain means that domain is the constraint; funding volume or a new platform cannot fix an attribution problem at the source.',
    limitations: [
      'Self-assessment depends on honest answers',
      'Higher score is not a license to claim causality',
      'Does not measure incremental lift by itself',
    ],
    exampleNote:
      'Strong taxonomy (18/20) but weak CRM join (6/20) and a missing assumption register (4/20) → the health score is mid, and the diagnosis is clear: fix capture and governance before attribution modelling.',
    toolHref: '/tools/#attribution-health-check',
    insightHref: '/insights/attribution-assumption-register/',
    serviceHref: '/services/measurement-foundation/',
    suggestedAction:
      'Run the health check with the data and RevOps owner. Replace the single lowest-scoring, decision-critical domain first.',
  },
  {
    id: 'growth-bottleneck',
    name: 'DataDecision Growth Bottleneck Framework',
    oneLiner:
      'Isolates the first meaningful constraint across acquisition, conversion and retention.',
    owner: 'growth',
    definition:
      'A method to trace the buyer journey, rank candidate constraints by importance and changeability, and select the first one to test rather than the one that is loudest.',
    purpose:
      'Prevents misdirected spend on the symptom (e.g. more traffic) when the real constraint is conversion or retention. Gives a decision-ready experiment queue.',
    inputs: ['Journey stage evidence', 'Available data per stage', 'Candidate constraint list'],
    calculation:
      'Score each candidate constraint on importance (how much it explains the commercial result) and changeability (evidence + effort + expected signal). The first constraint to act on is the one high on both, verified with a stage dashboard.',
    interpretation:
      'A high impact, low changeability constraint is a boundary to manage, not a test to launch. A high changeability, low importance constraint is a trap that wastes effort.',
    limitations: [
      'Importance is partly inferential without experiments',
      'Requires enough stage data to score honestly',
      'A first constraint can be wrong; the method expects a measured test, not a guarantee',
    ],
    exampleNote:
      'If traffic is strong but activation is weak and unchanging, more demand cannot fix the funnel. The framework ranks activation first and routes the budget there.',
    insightHref: '/insights/traffic-up-demo-bookings-down/',
    serviceHref: '/services/#growth-strategy-measurement',
    suggestedAction:
      'List every growth idea you are considering, score each for importance and changeability, and commit to testing the top-scoring one with a pre-defined stopping rule.',
  },
  {
    id: 'measurement-maturity',
    name: 'DataDecision Marketing Measurement Maturity Model',
    oneLiner: 'A five-level model of how defensibly a team can attribute revenue to marketing.',
    owner: 'performance-marketing',
    definition:
      'A staged model from ungoverned (no taxonomy, no reconciliation) through documented, reconciled, decision-linked to experimentally validated, describing the evidence each level can support.',
    purpose:
      'Gives a shared language for where the measurement stack is and what the next level requires — so improvements are sequenced rather than random tool purchases.',
    inputs: [
      'Current-state assessment of taxonomy, capture, join, reconciliation, governance, experiment capability',
    ],
    calculation:
      'A scoring rubric across the six dimensions maps the team to one of five maturity levels, each with a defined set of decisions that level can honestly support.',
    interpretation:
      'The maturity level sets what revenue claims are defensible. Trying to make Level-2 evidence support a Level-4 claim is where attribution fights begin.',
    limitations: [
      'Maturity is not a guarantee of result',
      'Levelling is a judgment call unless the rubric is applied consistently',
      'Experiments remain the only way to move from association to cause',
    ],
    exampleNote:
      'A Level-2 team (tagged but not reconciled) should not present a Level-4 "incrementality proven" claim in a board deck — the model flags that the evidence does not exist yet.',
    insightHref: '/insights/marketing-measurement-stack-build-order/',
    serviceHref: '/services/measurement-foundation/',
    suggestedAction:
      'Map your current stack to a maturity level with the data owner, then choose the single upgrade that lifts you to the next level and makes your next revenue claim defensible.',
  },
  {
    id: 'search-to-revenue',
    name: 'DataDecision Search-to-Revenue Framework',
    oneLiner:
      'Connects a query to a page, a visitor, a lead and, where the data supports it, to revenue.',
    owner: 'seo',
    definition:
      'The pipeline QUERY → PAGE → VISITOR → ENGAGEMENT → LEAD → QUALIFIED LEAD → OPPORTUNITY → REVENUE, used to decide which queries deserve investment based on their demonstrated commercial path.',
    purpose:
      'Moves beyond traffic and clicks to ask whether a query feeds qualified pipeline, so SEO effort is directed at commercially relevant demand rather than vanity volume.',
    inputs: [
      'Query/page match',
      'Engagement signal',
      'Opportunity and revenue records where available',
    ],
    calculation:
      'For each cluster, count queries → engaged sessions → leads → qualified leads → opportunities → revenue. Report observationally and label where the chain must stop because the data is missing.',
    interpretation:
      'A query cluster that converts to qualified pipeline is a keeper; one that stops at clicks is either an awareness asset (funded differently) or a measurement gap to close before more investment.',
    limitations: [
      'Attribution to revenue is rarely complete — some visits lose source data',
      'Never claim revenue attribution the data cannot support',
      'Long sales cycles delay the observed conversion',
    ],
    exampleNote:
      'A diagnostics cluster sends 3,000 sessions/month that become 8 qualified opportunities and 2 won deals; an evergreen cluster sends 10,000 sessions but zero qualified leads. The framework funds the first and investigates the second.',
    insightHref: '/insights/b2b-saas-seo-query-to-page-map/',
    serviceHref: '/services/#web-seo-ai-visibility',
    suggestedAction:
      'Pick your three highest-traffic query clusters and trace each to qualified pipeline. Invest where the chain survives; investigate where it breaks.',
  },
  {
    id: 'ai-citation-index',
    name: 'DataDecision AI Citation Index',
    oneLiner:
      'Measures how concentrated your AI citations are across sources — dependency risk, not just count.',
    owner: 'ai-search',
    definition:
      'A measure of how your AI-answer citations are distributed across owned pages vs third-party sources, warning when one source type underpins an outsized share of mentions.',
    purpose:
      'Flags single-source fragility before a platform policy or source removal collapses AI visibility; guides diversification of the public sources that inform answers.',
    inputs: ['Observed citation source per query', 'Source type classification'],
    calculation:
      'Share of citations attributable to each source type across the query frame. A concentration ratio flags any one type (e.g. a single review platform) exceeding a set share. Reported with the sample visible.',
    interpretation:
      'High concentration = high risk; a change in one platform can remove a large share of citations. Lower concentration = more resilient, but requires corroborated sources rather than quantity.',
    limitations: [
      'Only visible citations can be counted',
      'AI may use sources without displaying them',
      'Concentration ratios need the query frame and date to be comparable',
    ],
    exampleNote:
      'If 70% of citations come from one review platform, a policy or content change there could remove most of your AI mentions — the index flags this as the dependency to reduce first.',
    insightHref: '/insights/review-platforms-source-infrastructure/',
    methodologyHref: '/methodology/',
    serviceHref: '/services/ai-search-visibility/',
    suggestedAction:
      'Classify your last baseline’s citations by source type. If one type dominates, build corroboration in a second, independently authored source type.',
  },
];

/** Convenience lookup + owner grouping for rendering. */
export const frameworkById = Object.fromEntries(
  frameworks.map((framework) => [framework.id, framework]),
) as Record<string, Framework>;

export const frameworksByOwner: Record<FrameworkOwner, Framework[]> = {
  growth: frameworks.filter((framework) => framework.owner === 'growth'),
  'performance-marketing': frameworks.filter(
    (framework) => framework.owner === 'performance-marketing',
  ),
  seo: frameworks.filter((framework) => framework.owner === 'seo'),
  'ai-search': frameworks.filter((framework) => framework.owner === 'ai-search'),
};
