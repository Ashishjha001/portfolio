/**
 * DataDecision Search Intelligence Engine
 *
 * The continuous SEARCH -> INSIGHT -> ACTION -> MEASUREMENT -> LEARNING model.
 *
 * This file is the internal, documented model that turns raw search signals
 * into ranked, prioritized recommendations. It distinguishes what is
 * IMPLEMENTED (a real, dated recommendation with a metric and owner) from
 * what is still RECOMMENDED (an observed pattern awaiting a decision).
 *
 * Rules:
 *  - No fabricated numbers. Where real data is absent, samples are marked as
 *    NOT COLLECTED and the figure is left undefined, never invented.
 *  - Every opportunity documents its scoring logic so prioritization is auditable.
 *  - Protected Insights are never assigned destructive actions.
 */

import type { Cluster } from './questionOwnership';

/* ------------------------------------------------------------------ */
/* Layer 1 — Query intent classification                              */
/* ------------------------------------------------------------------ */

export const queryIntentClasses = [
  {
    id: 'informational',
    label: 'Informational',
    definition: 'The searcher wants to learn or understand something.',
    example: 'what is marketing measurement maturity',
  },
  {
    id: 'commercial',
    label: 'Commercial',
    definition: 'The searcher is investigating options before a decision.',
    example: 'best AI visibility vendor for B2B SaaS',
  },
  {
    id: 'transactional',
    label: 'Transactional',
    definition: 'The searcher intends to complete an action or purchase.',
    example: 'hire a growth measurement consultant',
  },
  {
    id: 'navigational',
    label: 'Navigational',
    definition: 'The searcher is looking for a specific site or brand.',
    example: 'datadecision consulting',
  },
  {
    id: 'diagnostic',
    label: 'Diagnostic',
    definition: 'The searcher has a symptom and wants to find the cause.',
    example: 'traffic up but demo bookings down',
  },
  {
    id: 'comparison',
    label: 'Comparison',
    definition: 'The searcher weighs two or more options explicitly.',
    example: 'GA4 vs CRM as source of truth',
  },
  {
    id: 'implementation',
    label: 'Implementation',
    definition: 'The searcher is past diagnosis and wants a how-to.',
    example: 'how to set up AI referral tracking in GA4',
  },
  {
    id: 'measurement',
    label: 'Measurement',
    definition: 'The searcher wants to quantify or benchmark something.',
    example: 'how to measure AI search visibility',
  },
] as const;

export type QueryIntentId = (typeof queryIntentClasses)[number]['id'];

/* ------------------------------------------------------------------ */
/* Layer 2 — Opportunity scoring (documented logic)                   */
/* ------------------------------------------------------------------ */

/**
 * OPPORTUNITY = Demand x Intent x Relevance x Conversion x Feasibility
 * Each factor is 0..1 and documented. A score of 1.0 is the theoretical
 * maximum only if every factor is perfect; real scores are far lower.
 */
export interface OpportunityScore {
  demand: number; // 0..1 — search volume / question frequency evidence
  intent: number; // 0..1 — commercial/diagnostic intent weight
  relevance: number; // 0..1 — does it sit inside a strategic cluster
  conversion: number; // 0..1 — how directly it can feed a lead path
  feasibility: number; // 0..1 — effort, data, and authority required
}

export const OPPORTUNITY_WEIGHTS = {
  demand: 0.3,
  intent: 0.2,
  relevance: 0.2,
  conversion: 0.2,
  feasibility: 0.1,
} as const;

export function opportunityScore(score: OpportunityScore): number {
  return (
    score.demand * OPPORTUNITY_WEIGHTS.demand +
    score.intent * OPPORTUNITY_WEIGHTS.intent +
    score.relevance * OPPORTUNITY_WEIGHTS.relevance +
    score.conversion * OPPORTUNITY_WEIGHTS.conversion +
    score.feasibility * OPPORTUNITY_WEIGHTS.feasibility
  );
}

/* ------------------------------------------------------------------ */
/* Layers 3–5 — Striking distance, content gap, authority gap         */
/* ------------------------------------------------------------------ */

export type StrikingDistanceClass =
  | 'RANKING_IMPROVEMENT'
  | 'AUTHORITY_CONTENT_LINK'
  | 'SERP_PRESENTATION'
  | 'DEMAND_EXPANSION'
  | 'CRO_OPPORTUNITY';

export const strikingDistanceClasses: Record<
  StrikingDistanceClass,
  { label: string; description: string }
> = {
  RANKING_IMPROVEMENT: {
    label: 'Position 4–10',
    description: 'Ranking improvement opportunity — visible but not near the top.',
  },
  AUTHORITY_CONTENT_LINK: {
    label: 'Position 11–20',
    description: 'Authority, content or internal-link opportunity — needs support to rise.',
  },
  SERP_PRESENTATION: {
    label: 'High impressions + low CTR',
    description: 'SERP presentation opportunity — titles and descriptions are not earning clicks.',
  },
  DEMAND_EXPANSION: {
    label: 'High CTR + low impressions',
    description: 'Demand expansion opportunity — the result clicks well but is rarely shown.',
  },
  CRO_OPPORTUNITY: {
    label: 'High traffic + low conversion',
    description: 'Conversion opportunity — traffic arrives but does not continue to a next step.',
  },
};

export type GapType = 'CONTENT' | 'AUTHORITY' | 'AI_SEARCH';

export interface GapEngine {
  type: GapType;
  name: string;
  condition: string;
  recommendedActions: string[];
  guardrail: string;
}

export const gapEngines: GapEngine[] = [
  {
    type: 'CONTENT',
    name: 'Content gap engine',
    condition: 'Search demand exists AND DataDecision has no best-answer owner.',
    recommendedActions: ['Create', 'Expand', 'Link'],
    guardrail:
      'Before creating anything, check existing Insights, services, pillars, research, tools and playbooks. If intent is already owned, do not duplicate.',
  },
  {
    type: 'AUTHORITY',
    name: 'Authority gap engine',
    condition:
      'Content quality is high BUT internal support, external references or research support are low.',
    recommendedActions: [
      'Supporting content',
      'Internal links',
      'Research',
      'Proprietary data',
      'External distribution',
      'Evidence',
    ],
    guardrail: 'Do not solve every authority problem by creating another article.',
  },
  {
    type: 'AI_SEARCH',
    name: 'AI-search gap engine',
    condition: 'A concept is strategically important BUT lacks sufficient AI-search coverage.',
    recommendedActions: [
      'Answer-first structure',
      'Entity consistency',
      'Source infrastructure',
      'Citation-visible evidence',
    ],
    guardrail: 'Build genuine usefulness and source authority — never manipulate AI systems.',
  },
];

/* ------------------------------------------------------------------ */
/* Layer 6 — AI Search Query Lab                                        */
/* ------------------------------------------------------------------ */

export interface AiQuery {
  query: string;
  intent: QueryIntentId;
  status: 'observed' | 'scheduled' | 'need-data';
}

export const aiSearchQueryLab: Record<Cluster, AiQuery[]> = {
  growth: [
    { query: 'best growth analytics framework', intent: 'commercial', status: 'scheduled' },
    { query: 'how to diagnose growth bottlenecks', intent: 'diagnostic', status: 'scheduled' },
    { query: 'why is traffic growing but revenue flat', intent: 'diagnostic', status: 'scheduled' },
    { query: 'how to measure a B2B growth funnel', intent: 'measurement', status: 'scheduled' },
  ],
  'performance-marketing': [
    { query: 'how to calculate break-even CAC', intent: 'implementation', status: 'scheduled' },
    {
      query: 'how to measure paid acquisition profitability',
      intent: 'measurement',
      status: 'scheduled',
    },
    { query: 'GA4 vs CRM which is source of truth', intent: 'comparison', status: 'scheduled' },
    {
      query: 'how to reconcile GA4 and CRM lead counts',
      intent: 'implementation',
      status: 'scheduled',
    },
  ],
  seo: [
    { query: 'how to build topical authority', intent: 'implementation', status: 'scheduled' },
    { query: 'technical SEO for B2B SaaS', intent: 'informational', status: 'scheduled' },
    {
      query: 'how to map search queries to pages without cannibalization',
      intent: 'implementation',
      status: 'scheduled',
    },
  ],
  'ai-search': [
    { query: 'what is AEO', intent: 'informational', status: 'scheduled' },
    { query: 'how does GEO work', intent: 'informational', status: 'scheduled' },
    { query: 'how to measure AI search visibility', intent: 'measurement', status: 'scheduled' },
    {
      query: 'how much revenue is from ChatGPT referrals',
      intent: 'measurement',
      status: 'scheduled',
    },
  ],
};

export const aiSignalLayers = [
  {
    layer: 'Mention',
    definition: 'The entity appears in the answer text — does not imply endorsement or a source.',
  },
  {
    layer: 'Citation',
    definition: 'A visible source link points to the measured domain.',
  },
  {
    layer: 'Recommendation',
    definition: 'The answer explicitly recommends the entity for a described need.',
  },
  {
    layer: 'Referral',
    definition: 'A visitor arrives from an AI surface and is observable in analytics.',
  },
  {
    layer: 'Conversion',
    definition: 'A referral continues into a qualified next step or revenue.',
  },
];

/* ------------------------------------------------------------------ */
/* Layer 8 — Competitor intelligence                                   */
/* ------------------------------------------------------------------ */

export interface CompetitorProfile {
  name: string;
  cluster: Cluster;
  ownerOf: string[];
  misses: string[];
  dataDecisionCanOwn: string[];
  dataStatus: 'topical-review' | 'not-collected';
}

export const competitorIntelligence: CompetitorProfile[] = [
  {
    name: 'Generic growth / marketing agencies',
    cluster: 'growth',
    ownerOf: ['Broad growth services', 'Landing-page pattern libraries', 'Agency directories'],
    misses: [
      'Decision-first measurement tied to revenue',
      'Honest small-sample inference methods',
      'Constraint isolation before funding tactics',
    ],
    dataDecisionCanOwn: [
      'Growth bottleneck diagnosis that names the constraint, not a tactic',
      'Revenue-linked growth measurement',
    ],
    dataStatus: 'topical-review',
  },
  {
    name: 'Damage-control / paid agencies',
    cluster: 'performance-marketing',
    ownerOf: ['Paid acquisition execution', 'Benchmark-led CAC ranges'],
    misses: [
      'Transparent contribution-margin ceilings',
      'Reconciliation between GA4 and CRM as an operating layer',
      'Assumption governance visible to finance',
    ],
    dataDecisionCanOwn: [
      'Break-even CAC as a finance derivation',
      'Attribution health as a defensibility score',
    ],
    dataStatus: 'topical-review',
  },
  {
    name: 'Technical SEO / SaaS SEO agencies',
    cluster: 'seo',
    ownerOf: ['Technical audits', 'Keyword clusters', 'Content calendars'],
    misses: [
      'Query-to-page ownership without cannibalization',
      'Search-to-revenue measurement linked to qualified pipeline',
      'Zero-click content funding frameworks',
    ],
    dataDecisionCanOwn: [
      'Reader–Decision–Evidence–Action assignment',
      'Search-to-revenue traceability',
    ],
    dataStatus: 'topical-review',
  },
  {
    name: 'AEO/GEO tooling and monitoring vendors',
    cluster: 'ai-search',
    ownerOf: ['Continuous AI dashboards', 'Citation counts'],
    misses: [
      'Admitting sample variance and limitation',
      'Separating mention from citation from referral from conversion',
      'Openly documented methodology',
    ],
    dataDecisionCanOwn: [
      'Sampled, limitation-visible AI visibility baseline',
      'Source-infrastructure and dependency risk',
    ],
    dataStatus: 'topical-review',
  },
];

/* ------------------------------------------------------------------ */
/* Layer 35 — Priority scoring                                          */
/* ------------------------------------------------------------------ */

export interface PriorityOpportunity {
  id: string;
  title: string;
  cluster: Cluster;
  category: GapType | 'CRO' | 'EXPERIMENT' | 'RESEARCH';
  action: 'CREATE' | 'UPDATE' | 'EXPAND' | 'LINK' | 'MERGE' | 'LEAVE_ALONE';
  businessValue: number; // 0..5
  searchValue: number; // 0..5
  authorityValue: number; // 0..5
  aiSearchValue: number; // 0..5
  conversionValue: number; // 0..5
  effort: number; // 0..5 (higher = more effort)
  note: string;
  /** Whether this priority has already been actioned by the site. */
  status: 'implemented' | 'recommended' | 'partial';
}

/** Priority = business + search + authority + AI + conversion, minus effort. */
export function priorityRank(
  p: Pick<
    PriorityOpportunity,
    | 'businessValue'
    | 'searchValue'
    | 'authorityValue'
    | 'aiSearchValue'
    | 'conversionValue'
    | 'effort'
  >,
): number {
  return (
    p.businessValue +
    p.searchValue +
    p.authorityValue +
    p.aiSearchValue +
    p.conversionValue -
    p.effort
  );
}

export const priorityOpportunities: PriorityOpportunity[] = [
  {
    id: 'si-ai-citation-dependency',
    title: 'AI Citation Dependency: measure source concentration risk',
    cluster: 'ai-search',
    category: 'RESEARCH',
    action: 'CREATE',
    businessValue: 3,
    searchValue: 4,
    authorityValue: 5,
    aiSearchValue: 5,
    conversionValue: 4,
    effort: 3,
    note: 'Framework v1 exists (AI Citation Index). A research-backed treatment would convert the concept into a linkable authority asset.',
    status: 'partial',
  },
  {
    id: 'si-server-log-verification',
    title: 'Prove AI crawler access with server logs',
    cluster: 'ai-search',
    category: 'CONTENT',
    action: 'CREATE',
    businessValue: 3,
    searchValue: 4,
    authorityValue: 4,
    aiSearchValue: 5,
    conversionValue: 3,
    effort: 3,
    note: 'Extends crawler policy + access checklist with observed request evidence. No duplicate owner today.',
    status: 'recommended',
  },
  {
    id: 'si-landing-page-isolation',
    title: 'Message mismatch or form friction — landing page isolation test',
    cluster: 'growth',
    category: 'CRO',
    action: 'CREATE',
    businessValue: 4,
    searchValue: 3,
    authorityValue: 3,
    aiSearchValue: 3,
    conversionValue: 5,
    effort: 3,
    note: 'Would extend form-friction work without duplicating it. Directly CRO-relevant.',
    status: 'recommended',
  },
  {
    id: 'si-metric-authority',
    title: 'Which metric can authorize spend — MER, ROAS or contribution margin?',
    cluster: 'performance-marketing',
    category: 'CONTENT',
    action: 'CREATE',
    businessValue: 4,
    searchValue: 4,
    authorityValue: 4,
    aiSearchValue: 3,
    conversionValue: 4,
    effort: 3,
    note: 'Ties CAC worksheet to source-of-truth safeguards. Balances breadth with decision authority.',
    status: 'recommended',
  },
  {
    id: 'si-ai-visibility-baseline',
    title: 'AI Search Visibility Score tool',
    cluster: 'ai-search',
    category: 'EXPERIMENT',
    action: 'EXPAND',
    businessValue: 4,
    searchValue: 4,
    authorityValue: 5,
    aiSearchValue: 5,
    conversionValue: 4,
    effort: 4,
    note: 'Framework + methodology exist. A self-service scoring tool would turn the concept into a reusable asset.',
    status: 'partial',
  },
];

export const searchIntelligenceSchemaNote =
  'All opportunity, competitor and AI-query records are topical and observational. Search-volume figures are not fabricated; where a number is needed it is marked NOT COLLECTED rather than guessed.';
