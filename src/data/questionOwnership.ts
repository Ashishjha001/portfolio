/**
 * Data Decision Consulting Question Ownership Engine
 *
 * Maps the important questions each reader brings to a canonical answer, an
 * existing protected Insight, a supporting concept/insight, the relevant
 * service and the natural conversion path.
 *
 * Rule: every important question should have ONE preferred canonical home.
 * Insights remain immutable; this graph connects to them rather than
 * competing with them.
 */

export type QuestionCategory =
  | 'Founders'
  | 'CMOs'
  | 'Marketing Leaders'
  | 'Growth Leaders'
  | 'SEO Leaders'
  | 'Performance Marketers'
  | 'Data Leaders'
  | 'B2B SaaS Leaders';

export type QuestionIntent =
  'informational' | 'diagnostic' | 'decision' | 'implementation' | 'commercial';
export type Cluster = 'growth' | 'performance-marketing' | 'seo' | 'ai-search';

export interface QuestionNode {
  /** Canonical head question. This is the "best answer" owner. */
  question: string;
  /** Short label used in nav/index lists. */
  label: string;
  /** Who most often asks this. */
  category: QuestionCategory;
  intent: QuestionIntent;
  cluster: Cluster;
  /** The canonical page that already answers this, or '' if gap exists. */
  canonicalPage: string;
  /** Slug(s) of protected Insight(s) that carry the substantive answer. */
  insightIds: string[];
  /** Supporting pages that add depth but are NOT competitors. */
  supportingPage?: string;
  /** Methodology asset if one exists (relative to /methodology/). */
  methodology?: string;
  /** Interactive tool opportunity, if any (relative to /tools/). */
  tool?: string;
  /** Service anchor for the conversion path. */
  service?: string;
  /** Whether this is an uncovered gap (linkable to /research/ or a new page). */
  isGap?: boolean;
  /** Sub-questions that a reader naturally asks next. */
  subQuestions?: string[];
}

export interface QuestionGraph {
  head: QuestionNode;
  sub: QuestionNode[];
}

/**
 * Question hierarchy tiers, per the QO rule:
 * HEAD -> SUBQUESTION -> DIAGNOSTIC -> IMPLEMENTATION -> MEASUREMENT -> COMMERCIAL
 */
export const questionHeadings: Record<QuestionIntent, string> = {
  informational: 'What is this and why does it matter?',
  diagnostic: 'What part of the system is broken?',
  decision: 'What should we change?',
  implementation: 'How do we implement the change?',
  commercial: 'Can Data Decision Consulting fix it?',
};

export const questionGraphs: QuestionGraph[] = [
  {
    head: {
      question: 'Why is organic traffic increasing but revenue is not?',
      label: 'Traffic up, revenue flat',
      category: 'Founders',
      intent: 'diagnostic',
      cluster: 'growth',
      canonicalPage: '/insights/traffic-up-demo-bookings-down/',
      insightIds: ['traffic-up-demo-bookings-down', 'b2b-saas-demo-funnel-dashboard'],
      supportingPage: '/growth/',
      methodology: '/methodology/',
      service: '/services/#growth-strategy-measurement',
      subQuestions: [
        'What part of the funnel is leaking?',
        'Is the problem traffic quality or conversion?',
        'How should we measure the leak?',
        'Can Data Decision Consulting diagnose it?',
      ],
    },
    sub: [
      {
        question: 'What part of the funnel is leaking?',
        label: 'Funnel leakage point',
        category: 'Growth Leaders',
        intent: 'diagnostic',
        cluster: 'growth',
        canonicalPage: '/insights/b2b-saas-demo-funnel-dashboard/',
        insightIds: ['b2b-saas-demo-funnel-dashboard', 'demo-no-shows-diagnosis'],
        tool: '/tools/#funnel-leakage-calculator',
        service: '/services/#growth-strategy-measurement',
      },
      {
        question: 'Pricing-page visits doubled but demo requests stayed flat: what does it mean?',
        label: 'Pricing intent mismatch',
        category: 'Growth Leaders',
        intent: 'diagnostic',
        cluster: 'growth',
        canonicalPage: '/insights/pricing-page-visits-up-demos-flat/',
        insightIds: ['pricing-page-visits-up-demos-flat'],
      },
      {
        question: 'Demo requests dropped 25% but rankings stayed flat: what should we check?',
        label: 'Stable rankings, falling demos',
        category: 'SEO Leaders',
        intent: 'diagnostic',
        cluster: 'growth',
        canonicalPage: '/insights/demo-requests-dropped-rankings-flat/',
        insightIds: ['demo-requests-dropped-rankings-flat'],
      },
    ],
  },
  {
    head: {
      question: 'Which marketing channels actually drive revenue?',
      label: 'Channel to revenue attribution',
      category: 'CMOs',
      intent: 'decision',
      cluster: 'performance-marketing',
      canonicalPage: '/insights/how-to-measure-marketing-revenue/',
      insightIds: ['how-to-measure-marketing-revenue', 'ga4-vs-crm-lead-reconciliation'],
      supportingPage: '/performance-marketing/',
      service: '/services/measurement-foundation/',
      subQuestions: [
        'Which system is my source of truth: GA4 or CRM?',
        'Why does my CRM say Direct when my campaign had UTMs?',
        'How do I reconcile GA4 lead counts with CRM lead counts?',
        'Can Data Decision Consulting build the measurement foundation?',
      ],
    },
    sub: [
      {
        question: 'Which system should be my source of truth: GA4 or CRM?',
        label: 'Source of truth selection',
        category: 'Data Leaders',
        intent: 'decision',
        cluster: 'performance-marketing',
        canonicalPage: '/insights/ga4-or-crm-source-of-truth/',
        insightIds: ['ga4-or-crm-source-of-truth', 'hubspot-original-source-vs-ga4'],
      },
      {
        question: 'Why does my CRM say Direct even when my campaign has UTM tags?',
        label: 'Direct traffic mystery',
        category: 'Performance Marketers',
        intent: 'diagnostic',
        cluster: 'performance-marketing',
        canonicalPage: '/insights/crm-direct-traffic-despite-utm-tags/',
        insightIds: ['crm-direct-traffic-despite-utm-tags', 'utm-governance-b2b'],
        tool: '/tools/#utm-builder',
      },
      {
        question: 'GA4 says 400 leads but my CRM says 260. How do I reconcile them?',
        label: 'Lead reconciliation',
        category: 'Marketing Leaders',
        intent: 'diagnostic',
        cluster: 'performance-marketing',
        canonicalPage: '/insights/ga4-vs-crm-lead-reconciliation/',
        insightIds: ['ga4-vs-crm-lead-reconciliation', 'attribution-assumption-register'],
      },
      {
        question: 'What is my break-even CAC before I set a budget?',
        label: 'Break-even CAC ceiling',
        category: 'CMOs',
        intent: 'decision',
        cluster: 'performance-marketing',
        canonicalPage: '/insights/break-even-cac-worksheet/',
        insightIds: ['break-even-cac-worksheet'],
        tool: '/tools/#cac-calculator',
        service: '/services/#paid-acquisition-performance',
      },
    ],
  },
  {
    head: {
      question: 'Should we invest in SEO or AI search next?',
      label: 'SEO vs AI search allocation',
      category: 'CMOs',
      intent: 'decision',
      cluster: 'ai-search',
      canonicalPage: '/insights/seo-vs-ai-search-budget-allocation/',
      insightIds: ['seo-vs-ai-search-budget-allocation', 'seo-aeo-geo-overlap'],
      supportingPage: '/ai-search/',
      methodology: '/methodology/',
      service: '/services/ai-search-visibility/',
      subQuestions: [
        'What stays common between SEO and AI search?',
        'How do I measure AI visibility?',
        'How much revenue came from ChatGPT referrals?',
        'Can Data Decision Consulting assess my AI-search visibility?',
      ],
    },
    sub: [
      {
        question: 'What do SEO, AEO and GEO actually share: and how do they differ?',
        label: 'SEO vs AEO vs GEO overlap',
        category: 'Marketing Leaders',
        intent: 'informational',
        cluster: 'seo',
        canonicalPage: '/insights/seo-aeo-geo-overlap/',
        insightIds: ['seo-aeo-geo-overlap'],
      },
      {
        question: 'How do I build a repeatable AI-search visibility baseline?',
        label: 'AI visibility baseline',
        category: 'SEO Leaders',
        intent: 'implementation',
        cluster: 'ai-search',
        canonicalPage: '/insights/build-ai-visibility-baseline/',
        insightIds: ['build-ai-visibility-baseline'],
        methodology: '/methodology/',
        tool: '/tools/#ai-visibility-score',
        service: '/services/ai-search-visibility/',
      },
      {
        question: 'How much revenue came from ChatGPT referrals?',
        label: 'AI referral revenue',
        category: 'Data Leaders',
        intent: 'implementation',
        cluster: 'ai-search',
        canonicalPage: '/insights/track-chatgpt-referral-revenue/',
        insightIds: ['track-chatgpt-referral-revenue', 'measuring-ai-referrals-ga4'],
      },
      {
        question: 'Which AI crawlers can actually reach my site?',
        label: 'AI crawler access',
        category: 'SEO Leaders',
        intent: 'diagnostic',
        cluster: 'ai-search',
        canonicalPage: '/insights/ai-crawler-access-policy/',
        insightIds: ['ai-crawler-access-policy', 'technical-access-verification-checklist'],
        tool: '/tools/#ai-crawler-access',
      },
    ],
  },
  {
    head: {
      question: 'Which pages should own which searches, without cannibalizing each other?',
      label: 'Query to page ownership',
      category: 'SEO Leaders',
      intent: 'implementation',
      cluster: 'seo',
      canonicalPage: '/insights/b2b-saas-seo-query-to-page-map/',
      insightIds: ['b2b-saas-seo-query-to-page-map'],
      supportingPage: '/seo/',
      service: '/services/seo/',
      subQuestions: [
        'When does a query need a new page?',
        'When should pages merge or redirect?',
        'Can Data Decision Consulting repair the SEO architecture?',
      ],
    },
    sub: [
      {
        question: 'How do I verify a page is accessible, fetchable and cleartext-crawlable?',
        label: 'Technical access verification',
        category: 'SEO Leaders',
        intent: 'implementation',
        cluster: 'seo',
        canonicalPage: '/insights/technical-access-verification-checklist/',
        insightIds: ['technical-access-verification-checklist'],
      },
      {
        question: 'Should I fund content when clicks are no longer guaranteed?',
        label: 'Zero-click content funding',
        category: 'Marketing Leaders',
        intent: 'decision',
        cluster: 'seo',
        canonicalPage: '/insights/zero-click-content-funding/',
        insightIds: ['zero-click-content-funding'],
      },
    ],
  },
];

/**
 * Opportunities that exist in one layer but not another -- used by search
 * demand intelligence to route effort toward the weakest support layer.
 * Kept as data so it can be audited and updated without touching Insights.
 */
export interface OpportunityRecord {
  id: string;
  cluster: Cluster;
  category:
    'QUICK_WIN' | 'CTR' | 'CONTENT_GAP' | 'AUTHORITY_GAP' | 'COMMERCIAL_GAP' | 'AI_SEARCH_GAP';
  title: string;
  note: string;
  relatedInsight?: string;
  gapPage?: string;
}

export const searchOpportunities: OpportunityRecord[] = [
  {
    id: 'op-ai-allocation',
    cluster: 'ai-search',
    category: 'QUICK_WIN',
    title: 'SEO vs AI-search allocation',
    note: 'Owned by a strong 28 Aug insight with a no-default-split framework; reinforce with internal links and keep the scorecard downloadable.',
    relatedInsight: 'seo-vs-ai-search-budget-allocation',
  },
  {
    id: 'op-query-map',
    cluster: 'seo',
    category: 'QUICK_WIN',
    title: 'Query-to-page mapping',
    note: 'Owned by a strong 28 Aug insight; the READER,DECISION,EVIDENCE,ACTION test is the canonical answer.',
    relatedInsight: 'b2b-saas-seo-query-to-page-map',
  },
  {
    id: 'op-ai-citation-concentration',
    cluster: 'ai-search',
    category: 'CONTENT_GAP',
    title: 'AI citation dependency / source concentration risk',
    note: 'Planned P1 (#15). No current owner; a measurement approach, not a generic explainer.',
  },
  {
    id: 'op-server-log-verification',
    cluster: 'ai-search',
    category: 'CONTENT_GAP',
    title: 'Prove AI crawler access with server logs',
    note: 'Planned P1 (#7). Extends the crawler policy and access checklist with observed request evidence.',
    relatedInsight: 'ai-crawler-access-policy',
  },
  {
    id: 'op-landing-page-isolation',
    cluster: 'growth',
    category: 'CONTENT_GAP',
    title: 'Message mismatch or form friction: landing page isolation test',
    note: 'Planned P2 (#17). No current owner; would extend form-friction work without duplicating it.',
    relatedInsight: 'b2b-saas-demo-form-friction-lead-quality',
  },
  {
    id: 'op-agency-due-diligence',
    cluster: 'growth',
    category: 'CONTENT_GAP',
    title: 'How to evaluate a B2B SaaS marketing agency: the evidence request pack',
    note: 'Planned P1 (#8). Cross-cluster; AEO/GEO vendor diligence stays AI-specific.',
  },
  {
    id: 'op-metric-authority',
    cluster: 'performance-marketing',
    category: 'AUTHORITY_GAP',
    title: 'Which metric can authorize spend: MER, ROAS or contribution margin?',
    note: 'Planned P1 (#13). Tie to CAC worksheet and source-of-truth safeguards.',
    relatedInsight: 'break-even-cac-worksheet',
  },
];
