/**
 * DataDecision — Internal Authority Scorecard (Layer 33) + Research Calendar (Layer 38)
 *
 * This is an INTERNAL management framework, not an objective Google or AI score.
 * Dimensions track progress relative to DataDecision's own goals. Where a
 * dimension cannot be honestly scored, its status is need-data rather than a
 * fabricated number.
 */

export interface ScorecardDimension {
  id: string;
  name: string;
  status: 'implemented' | 'partial' | 'need-data';
  note: string;
}

export const scorecardDimensions: ScorecardDimension[] = [
  {
    id: 'topical-authority',
    name: 'Topical authority',
    status: 'implemented',
    note: 'Four strategic clusters with linked insights.',
  },
  {
    id: 'entity-consistency',
    name: 'Entity consistency',
    status: 'implemented',
    note: 'Single canonical entity source of truth.',
  },
  {
    id: 'original-research',
    name: 'Original research',
    status: 'partial',
    note: 'Framed programs; no benchmark published without real data.',
  },
  {
    id: 'proprietary-frameworks',
    name: 'Proprietary frameworks',
    status: 'implemented',
    note: 'Seven reusable frameworks with named limits.',
  },
  { id: 'tools', name: 'Tools', status: 'implemented', note: 'Six browser-based diagnostics.' },
  {
    id: 'case-studies',
    name: 'Case studies',
    status: 'need-data',
    note: 'Template exists; real cases added only with client permission.',
  },
  {
    id: 'external-references',
    name: 'External references',
    status: 'need-data',
    note: 'Earned only; not yet present.',
  },
  {
    id: 'search-visibility',
    name: 'Search visibility',
    status: 'need-data',
    note: 'Sampled observation required; not claimed.',
  },
  {
    id: 'ai-visibility',
    name: 'AI visibility',
    status: 'need-data',
    note: 'Observatory frame built; no fabricated mentions.',
  },
  {
    id: 'reputation',
    name: 'Reputation',
    status: 'need-data',
    note: 'Authentic only; never manufactured.',
  },
  { id: 'conversion', name: 'Conversion', status: 'need-data', note: 'Requires stated baselines.' },
];

export interface ResearchCalendarItem {
  id: string;
  study: string;
  window: string;
  owner: 'founder-input' | 'researcher';
  priority: string;
  value: string;
  status: 'needs-founder-input' | 'scheduled' | 'draft';
}

/**
 * 12-month research roadmap. Prioritised studies are only run when a credible
 * data source exists — never for the sake of filling a calendar.
 */
export const researchCalendar: ResearchCalendarItem[] = [
  {
    id: 'rc-01',
    study: 'AI Citation Dependency: source concentration risk',
    window: 'Months 1–3',
    owner: 'founder-input',
    priority: 'High',
    value: 'Turns the AI Citation Index into a measurement-backed authority asset.',
    status: 'scheduled',
  },
  {
    id: 'rc-02',
    study: 'AI Search Visibility baseline (first cycle)',
    window: 'Months 1–3',
    owner: 'researcher',
    priority: 'High',
    value: 'First dated, sampled observation over the fixed query set.',
    status: 'scheduled',
  },
  {
    id: 'rc-03',
    study: 'Search-to-Revenue traceability illustration',
    window: 'Months 3–6',
    owner: 'founder-input',
    priority: 'Medium',
    value: 'Demonstrates how visibility can be traced into pipeline, with limits shown.',
    status: 'needs-founder-input',
  },
  {
    id: 'rc-04',
    study: 'Attribution Health benchmark (self)',
    window: 'Months 3–6',
    owner: 'founder-input',
    priority: 'Medium',
    value: 'Benchmarks the defensibility of DataDecision’s own measurement claims.',
    status: 'needs-founder-input',
  },
  {
    id: 'rc-05',
    study: 'Growth funnel stage-variance observation',
    window: 'Months 6–9',
    owner: 'researcher',
    priority: 'Low',
    value: 'Extends the Funnel Leakage Index with real stage evidence.',
    status: 'draft',
  },
];
