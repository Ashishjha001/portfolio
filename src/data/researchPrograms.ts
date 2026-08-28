/**
 * DataDecision Original Research Engine
 *
 * The research section's long-term authority asset. Each program below is a
 * repeatable study with a fixed methodology, a documented sample and visible
 * limitations. IMPORTANT: none of these programs pretend to have published
 * findings. Each is either "scheduled" (method + sample defined, data not yet
 * collected) or "open for the next collection window".
 *
 * The research infrastructure is built first; findings are published only
 * when genuine, dated, sampled data exists.
 */

export interface ResearchProgram {
  id: string;
  title: string;
  shortTitle: string;
  status: 'scheduled' | 'in-collection' | 'published' | 'needs-founder-input';
  researchQuestion: string;
  methodology: string;
  dataSource: string;
  sample: string;
  collectionPeriod: string;
  definitions: string;
  calculations: string;
  limitations: string;
  /** Expected primary output (chart/report/download). */
  output: string;
  /** Planned link back into the knowledge graph. */
  relatedInsights: string[];
  /** Whether any real data has been collected yet. */
  hasPublishedFindings: boolean;
}

export const researchPrograms: ResearchProgram[] = [
  {
    id: 'ai-search-visibility-index',
    title: 'AI Search Visibility Index',
    shortTitle: 'AI Visibility Index',
    status: 'needs-founder-input',
    researchQuestion:
      'Across a fixed buyer-query frame, how often does each compared B2B SaaS provider appear, get cited, and get described accurately inside AI answers?',
    methodology:
      'Reuses the published AI-search visibility methodology v0.3: a fixed query frame, dated observation runs, and the M1–M4 descriptive metrics. Any published index would report the sample, window and version beside the number.',
    dataSource: 'Scheduled observational runs by DataDecision (no client data used).',
    sample: 'Proposed: 50 approved buyer queries, one market/language, a defined comparison set.',
    collectionPeriod:
      'No data collected yet. First window depends on founder approval of the comparison set.',
    definitions:
      'Mention, citation, description accuracy and comparison share as defined in the AI-search methodology.',
    calculations:
      'Descriptive mention/citation rates and the weighted visibility score, version-controlled.',
    limitations:
      'AI outputs are nondeterministic; figures are sample coverage, never a universal rank. No comparable public baseline is guaranteed without a published run.',
    output: 'Index page + downloadable raw observation frame + a dated report per run.',
    relatedInsights: ['build-ai-visibility-baseline', 'three-ai-surfaces-measurement'],
    hasPublishedFindings: false,
  },
  {
    id: 'ai-citation-benchmark',
    title: 'AI Citation Benchmark',
    shortTitle: 'Citation Benchmark',
    status: 'needs-founder-input',
    researchQuestion:
      'Which public source types (review platforms, listings, owned pages, publications) most often underpin AI citations for B2B SaaS, and how concentrated is that reliance?',
    methodology:
      'Citation source classification across the same query frame, aggregated to show source-type share and concentration, with the sample and date attached.',
    dataSource: 'Observational citation classification by DataDecision.',
    sample: 'Depends on the approved visibility frame and comparison set.',
    collectionPeriod: 'Not collected. Will follow the visibility index.',
    definitions: 'Source type taxonomy; concentration share per type.',
    calculations: 'Source-share distribution and a concentration ratio.',
    limitations: 'Only visible citations are counted; AI may use undisclosed sources.',
    output: 'Benchmark table + concentration note + methodology page.',
    relatedInsights: ['review-platforms-source-infrastructure', 'seo-aeo-geo-overlap'],
    hasPublishedFindings: false,
  },
  {
    id: 'marketing-attribution-benchmark',
    title: 'Marketing Attribution Health Benchmark',
    shortTitle: 'Attribution Benchmark',
    status: 'needs-founder-input',
    researchQuestion:
      'How defensible are typical B2B SaaS stacks at producing a revenue claim, measured with the DataDecision Attribution Health Score?',
    methodology:
      'Voluntary, anonymized self-assessments scored with the attribution health rubric, reported as an aggregate range with clear sample limits — never as individual client insights.',
    dataSource: 'Anonymized DataDecision diagnostic inputs with explicit consent.',
    sample:
      'Depends on opt-in participation; small n will be published as a range, not a statistic.',
    collectionPeriod: 'No data collected yet.',
    definitions: 'Health-score domains as defined by the DataDecision Attribution Health Score.',
    calculations: 'Weighted health score 0–100 plus per-domain breakdown.',
    limitations: 'Self-selected sample; self-assessment bias; small n likely.',
    output: 'Benchmark page with aggregate ranges and development note.',
    relatedInsights: ['attribution-assumption-register', 'marketing-measurement-stack-build-order'],
    hasPublishedFindings: false,
  },
  {
    id: 'growth-funnel-benchmark',
    title: 'Growth Funnel Benchmark',
    shortTitle: 'Funnel Benchmark',
    status: 'needs-founder-input',
    researchQuestion:
      'Where do B2B SaaS funnels most often leak between demand, capture, qualification and close?',
    methodology:
      'Structured funnel-leakage observations using the DataDecision Funnel Leakage Index against clearly defined, consent-based inputs, reported without client identification.',
    dataSource:
      'Anonymized, consented funnel data or synthetic demonstration runs (labelled as such).',
    sample: 'To be scoped; will report ranges and limits, not fabricated central figures.',
    collectionPeriod: 'Not started.',
    definitions: 'Funnel stage definitions and leakage rate per the index.',
    calculations: 'Stage-leakage index per funnel and an aggregate distribution.',
    limitations: 'Stage definitions differ across companies; no universal good leak exists.',
    output: 'Funnel benchmark + leakage worksheet.',
    relatedInsights: ['traffic-up-demo-bookings-down', 'b2b-saas-demo-funnel-dashboard'],
    hasPublishedFindings: false,
  },
  {
    id: 'demo-funnel-benchmark',
    title: 'B2B SaaS Demo Funnel Benchmark',
    shortTitle: 'Demo Funnel Benchmark',
    status: 'needs-founder-input',
    researchQuestion:
      'What is a defensible range for demo-request-to-show-up rates and stage transitions in B2B SaaS, without leaning on weak benchmarks?',
    methodology:
      'Consented, anonymized demo-funnel observations reported as ranges with the sample kept visible. The existing show-up-rate insight already warns against borrowing benchmarks.',
    dataSource: 'Opt-in, anonymized funnel inputs or a labelled demonstration run.',
    sample: 'To be scoped; small n reported as range.',
    collectionPeriod: 'Not started.',
    definitions: 'Show-up rate and stage transition definitions from the demo-funnel insight.',
    calculations: 'Transition rates and show-up distribution.',
    limitations: 'Context differs; small n; never treated as a guarantee.',
    output: 'Demo-funnel range page.',
    relatedInsights: ['b2b-saas-demo-show-up-rate', 'demo-no-shows-diagnosis'],
    hasPublishedFindings: false,
  },
  {
    id: 'search-to-revenue-study',
    title: 'Search-to-Revenue Study',
    shortTitle: 'Search to Revenue',
    status: 'needs-founder-input',
    researchQuestion:
      'How far can the query-to-page-to-lead-to-revenue chain be traced observationally in B2B SaaS, and where does it most often break?',
    methodology:
      'Uses the DataDecision Search-to-Revenue Framework to trace clusters to qualified pipeline, labelling where the chain stops because data is missing.',
    dataSource:
      'DataDecision self-measurement or consented client observations, reported anonymously.',
    sample: 'To be scoped; will not claim revenue attribution the data cannot support.',
    collectionPeriod: 'Not started.',
    definitions: 'Search-to-revenue chain stages as per the framework.',
    calculations: 'Observational conversion counts per cluster and documented break-points.',
    limitations: 'Incomplete attribution; invisible referrers; long sales cycles.',
    output: 'Study page describing the chain and common break-points.',
    relatedInsights: ['b2b-saas-seo-query-to-page-map', 'track-chatgpt-referral-revenue'],
    hasPublishedFindings: false,
  },
  {
    id: 'ai-referral-benchmark',
    title: 'AI Referral Benchmark',
    shortTitle: 'AI Referral Benchmark',
    status: 'needs-founder-input',
    researchQuestion:
      'What share of AI-assistant traffic to B2B SaaS sites is observable in analytics at all, and how does that compare to claimed AI referral revolutions?',
    methodology:
      'Consented, anonymized analytics observations of AI-referral capture and visibility using the existing AI-referral QA method.',
    dataSource: 'Opt-in analytics observations; reported as ranges with limits.',
    sample: 'To be scoped.',
    collectionPeriod: 'Not started.',
    definitions: 'Observable AI referral; invisible traffic; GA4 AI Assistant channel.',
    calculations: 'Observable referral share and capture gaps.',
    limitations: 'Many AI visits lose referrer data; small n.',
    output: 'Benchmark page on what is actually observable.',
    relatedInsights: ['measuring-ai-referrals-ga4', 'track-chatgpt-referral-revenue'],
    hasPublishedFindings: false,
  },
];

export const researchProgramById = Object.fromEntries(
  researchPrograms.map((program) => [program.id, program]),
) as Record<string, ResearchProgram>;
