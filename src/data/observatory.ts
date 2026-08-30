/**
 * Data Decision Consulting — AI Search Observatory (Layers 9, 10, 30)
 *
 * Tracks how AI systems represent strategically important market questions.
 * The core rule: citation rate and recommendation rate are DIFFERENT things
 * and must never be folded into one number. A company can have high citations
 * and low recommendations, or high mentions and low citations.
 *
 * Data ethics: no observation is treated as universal truth. AI responses vary
 * by model, date, location, personalisation and retrieval system. Where no
 * observation has been recorded for a query, its status is need-data — never
 * a guessed number.
 */

export interface AiShareMetric {
  id: 'mention' | 'citation' | 'recommendation' | 'source' | 'referral' | 'conversion';
  label: string;
  definition: string;
  example: string;
}

export const aiShareMetrics: AiShareMetric[] = [
  {
    id: 'mention',
    label: 'Mention share',
    definition: 'Share of observations where the entity appears in an answer text.',
    example: 'Named in the answer, with no source link and no endorsement.',
  },
  {
    id: 'citation',
    label: 'Citation share',
    definition: 'Share of observations where a visible source link points to the entity.',
    example: 'Cited as a source URL. Does not imply the answer favourably positioned it.',
  },
  {
    id: 'recommendation',
    label: 'Recommendation share',
    definition:
      'Share of observations where the entity is explicitly recommended for a described need.',
    example: 'Named as a place to go for this specific problem.',
  },
  {
    id: 'source',
    label: 'Source share',
    definition: 'Share of observations where the entity is a retrievable source behind the answer.',
    example: 'Eligible source even if not surfaced as a visible list citation.',
  },
  {
    id: 'referral',
    label: 'Referral share',
    definition: 'Share of visits actually arriving from an AI surface.',
    example: 'Observable in analytics as AI-sourced traffic.',
  },
  {
    id: 'conversion',
    label: 'Conversion share',
    definition: 'Share of AI referrals that continue into a defined next step.',
    example: 'A referral that progresses to a qualified action.',
  },
];

export interface ObservatoryQuery {
  query: string;
  cluster: 'growth' | 'performance-marketing' | 'seo' | 'ai-search';
  intent: string;
  /** Honest observation state. */
  status: 'need-data' | 'scheduled' | 'observed-pending-review';
}

export const observatoryQuerySet: ObservatoryQuery[] = [
  // Growth
  {
    query: 'Best growth consulting firm for B2B SaaS',
    cluster: 'growth',
    intent: 'commercial',
    status: 'need-data',
  },
  {
    query: 'How to diagnose a growth bottleneck',
    cluster: 'growth',
    intent: 'diagnostic',
    status: 'need-data',
  },
  {
    query: 'How to measure a growth funnel',
    cluster: 'growth',
    intent: 'measurement',
    status: 'need-data',
  },
  // Performance marketing
  {
    query: 'How to calculate break-even CAC',
    cluster: 'performance-marketing',
    intent: 'implementation',
    status: 'need-data',
  },
  {
    query: 'Which metric should authorise marketing spend',
    cluster: 'performance-marketing',
    intent: 'decision',
    status: 'need-data',
  },
  {
    query: 'GA4 vs CRM as source of truth',
    cluster: 'performance-marketing',
    intent: 'comparison',
    status: 'need-data',
  },
  // SEO
  {
    query: 'How to build topical authority for B2B SaaS',
    cluster: 'seo',
    intent: 'implementation',
    status: 'need-data',
  },
  {
    query: 'How to measure SEO to revenue',
    cluster: 'seo',
    intent: 'measurement',
    status: 'need-data',
  },
  // AI search
  {
    query: 'Best AI search visibility consultancy',
    cluster: 'ai-search',
    intent: 'commercial',
    status: 'need-data',
  },
  { query: 'What is AEO', cluster: 'ai-search', intent: 'informational', status: 'need-data' },
  { query: 'What is GEO', cluster: 'ai-search', intent: 'informational', status: 'need-data' },
  {
    query: 'How to measure AI search visibility',
    cluster: 'ai-search',
    intent: 'measurement',
    status: 'need-data',
  },
];

export const observatorySystems = [
  'Google AI Overviews',
  'ChatGPT',
  'Claude',
  'Gemini',
  'Perplexity',
  'Microsoft Copilot',
] as const;

export interface ObservationRecord {
  entryId: string;
  date?: string;
  query: string;
  system?: string;
  /** What each share looked like, if measured. Kept separate, never summed. */
  shares?: Partial<Record<AiShareMetric['id'], 'present' | 'absent' | 'unmeasured'>>;
  note: string;
  status: 'need-data' | 'pending-review';
}

/**
 * The observation log is intentionally EMPTY of fabricated observations.
 * It documents the frame: what a complete record must capture. Real records
 * are added only after a genuine, dated measurement run.
 */
export const observationLogFrame: ObservationRecord[] = [
  {
    entryId: 'obs-00',
    query: 'Add a dated record after a genuine measurement run',
    note: 'Each record captures date, system, query, the six separate shares and the limitation that this is one observation, not universal truth. No observations are recorded until a real run is completed.',
    status: 'need-data',
  },
];
