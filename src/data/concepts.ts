/**
 * DataDecision — Canonical Concept Index (Layer 36: Source of Truth)
 *
 * Every concept DataDecision treats as strategically important has ONE
 * canonical home. This index points each concept to that home (a framework,
 * an insight, a tool or a service) instead of creating competing pages.
 *
 * Rule: supporting content should reference these canonical sources. If a
 * concept has no committed home yet, its canonicalHome is marked RECOMMENDED
 * and it is never claimed as implemented.
 */

export interface CanonicalConcept {
  slug: string;
  name: string;
  cluster: 'growth' | 'performance-marketing' | 'seo' | 'ai-search';
  inOneLine: string;
  whyItMatters: string;
  howMeasured: string;
  limitation: string;
  /** Canonical home. If null, no committed home exists yet (recommended only). */
  canonicalHome:
    | { kind: 'framework'; id: string; label: string }
    | { kind: 'insight'; id: string; label: string }
    | { kind: 'tool'; anchor: string; label: string }
    | { kind: 'service'; slug: string; label: string }
    | { kind: 'recommended'; label: string };
  related: string[];
}

export const concepts: CanonicalConcept[] = [
  {
    slug: 'ai-search-visibility',
    name: 'AI Search Visibility',
    cluster: 'ai-search',
    inOneLine: 'How often and how favourably a brand appears across AI answer surfaces.',
    whyItMatters:
      'Discovery is spreading beyond classic search pages into generated answers; visibility there is becoming part of the buyer journey.',
    howMeasured:
      'Sampled, dated observations across AI surfaces using a fixed query set — recorded as a DataDecision measurement with a stated sample and limitation.',
    limitation:
      'AI responses vary by model, date, location, personalisation and retrieval — any single observation is not universal truth.',
    canonicalHome: {
      kind: 'framework',
      id: 'ai-search-visibility-score',
      label: 'AI Search Visibility Score',
    },
    related: ['ai-citation', 'ai-recommendation-share'],
  },
  {
    slug: 'ai-citation',
    name: 'AI Citation',
    cluster: 'ai-search',
    inOneLine: 'A visible source link pointing to a domain inside an AI answer.',
    whyItMatters:
      'A citation is stronger evidence of being a source than a mere mention, and can be measured distinctly from a recommendation.',
    howMeasured:
      'Recorded per observation as present/absent with the cited URL, kept separate from mentions, recommendations and referrals.',
    limitation:
      'A citation does not imply endorsement or that the answer favourably positioned the source.',
    canonicalHome: { kind: 'framework', id: 'ai-citation-index', label: 'AI Citation Index' },
    related: ['ai-search-visibility'],
  },
  {
    slug: 'attribution-health',
    name: 'Attribution Health',
    cluster: 'performance-marketing',
    inOneLine: 'How defensible a measurement stack is at producing a revenue claim.',
    whyItMatters:
      'Before trusting any revenue attribution, taxonomy, capture, join, reconciliation and assumption governance must hold.',
    howMeasured:
      'The DataDecision Attribution Health Score: a weighted 0–100 self-review across five domains.',
    limitation:
      'Self-assessment depends on honest answers; a higher score is not a licence to claim causality.',
    canonicalHome: {
      kind: 'framework',
      id: 'attribution-health-score',
      label: 'Attribution Health Score',
    },
    related: ['measurement-maturity', 'search-to-revenue'],
  },
  {
    slug: 'measurement-maturity',
    name: 'Measurement Maturity',
    cluster: 'performance-marketing',
    inOneLine: 'How advanced and reliable a team’s marketing measurement capability is.',
    whyItMatters:
      'Maturity determines what decisions the measurement layer can actually support today.',
    howMeasured:
      'The DataDecision Marketing Measurement Maturity Model stages the capability from baseline through decision-grade.',
    limitation:
      'A maturity level is a self-assessment against defined stages, not a certification.',
    canonicalHome: {
      kind: 'framework',
      id: 'measurement-maturity',
      label: 'Marketing Measurement Maturity Model',
    },
    related: ['attribution-health'],
  },
  {
    slug: 'funnel-leakage',
    name: 'Funnel Leakage',
    cluster: 'growth',
    inOneLine: 'The measurable loss of eligible visitors between funnel stages.',
    whyItMatters:
      'Finding the single largest measurable leak points spend at the step with the most leverage.',
    howMeasured:
      'The DataDecision Funnel Leakage Index compares conversion between consecutive stages; the largest leak is highlighted.',
    limitation: 'The index names the step with the largest loss; it does not prove the cause.',
    canonicalHome: { kind: 'framework', id: 'funnel-leakage-index', label: 'Funnel Leakage Index' },
    related: ['growth-bottleneck'],
  },
  {
    slug: 'growth-bottleneck',
    name: 'Growth Bottleneck',
    cluster: 'growth',
    inOneLine: 'The first meaningful constraint across acquisition, conversion and retention.',
    whyItMatters:
      'Isolating the real constraint prevents spend on a loud symptom when the true lever is elsewhere.',
    howMeasured:
      'The DataDecision Growth Bottleneck Framework scores candidates on importance and changeability to select the first to test.',
    limitation:
      'Selection is a prioritisation aid; the selected constraint still needs a stage dashboard to confirm.',
    canonicalHome: {
      kind: 'framework',
      id: 'growth-bottleneck',
      label: 'Growth Bottleneck Framework',
    },
    related: ['funnel-leakage'],
  },
  {
    slug: 'search-to-revenue',
    name: 'Search-to-Revenue',
    cluster: 'seo',
    inOneLine: 'Traced visibility from a search or AI query through to qualified revenue.',
    whyItMatters:
      'Linking visibility to pipeline makes search defensible to finance rather than a vanity number.',
    howMeasured:
      'The DataDecision Search-to-Revenue Framework connects query, landing page, engagement and conversion evidence.',
    limitation:
      'Causal revenue claims require stated baselines and follow the evidence; correlation is not assumed to be causation.',
    canonicalHome: {
      kind: 'framework',
      id: 'search-to-revenue',
      label: 'Search-to-Revenue Framework',
    },
    related: ['measurement-maturity', 'ai-search-visibility'],
  },
  {
    slug: 'aeo-geo',
    name: 'AEO and GEO',
    cluster: 'ai-search',
    inOneLine: 'Answer Engine Optimisation and Generative Engine Optimisation.',
    whyItMatters:
      'These overlap with SEO but optimise for how answer and generative systems retrieve and present information.',
    howMeasured:
      'DataDecision treats AEO and GEO as part of AI-search visibility and measures them with the same sampled observation method.',
    limitation:
      'AEO/GEO are evolving fields with no settled universal metric; claims stay tied to recorded observations.',
    canonicalHome: {
      kind: 'insight',
      id: 'seo-aeo-geo-overlap',
      label: 'How SEO, AEO and GEO overlap',
    },
    related: ['ai-search-visibility', 'ai-citation'],
  },
];
