export interface TopicPoint {
  title: string;
  body: string;
}

export interface TopicMetric {
  label: string;
  question: string;
}

export interface TopicFaq {
  question: string;
  answer: string;
}

export interface TopicLink {
  href: string;
  label: string;
  note: string;
}

export interface TopicDefinition {
  slug: 'growth' | 'performance-marketing' | 'seo' | 'ai-search';
  index: string;
  label: string;
  shortLabel: string;
  title: string;
  seoTitle: string;
  description: string;
  introduction: string;
  questions: string[];
  outcomes: TopicPoint[];
  approach: TopicPoint[];
  metrics: TopicMetric[];
  insightIds: string[];
  serviceLinks: TopicLink[];
  faqs: TopicFaq[];
  ctaHeading: string;
  ctaBody: string;
  ctaLabel: string;
}

export const topics: TopicDefinition[] = [
  {
    slug: 'growth',
    index: '01',
    label: 'Growth',
    shortLabel: 'Growth',
    title: 'Find what is actually holding growth back.',
    seoTitle: 'B2B SaaS growth strategy and measurement',
    description:
      'Growth strategy for B2B SaaS teams that need to find the constraint across acquisition, conversion, retention and measurement before funding another tactic.',
    introduction:
      'More traffic is not always the answer. The real constraint may sit in the offer, the funnel, the handoff to sales, retention, pricing or the way the team reads its data. We help you separate those problems and decide what deserves attention first.',
    questions: [
      'Traffic is rising, but qualified pipeline is not.',
      'Marketing and sales disagree about where the funnel is leaking.',
      'The team has more growth ideas than it can test well.',
    ],
    outcomes: [
      {
        title: 'A growth model the team can use',
        body: 'Connect acquisition, activation, conversion, retention and monetization to the decisions each team owns.',
      },
      {
        title: 'The first meaningful constraint',
        body: 'Trace the buyer journey and find the earliest break that can explain the commercial result.',
      },
      {
        title: 'A shorter experiment queue',
        body: 'Rank ideas by expected signal, effort, confidence and the cost of waiting, instead of by enthusiasm.',
      },
      {
        title: 'Measurement tied to revenue',
        body: 'Keep channel activity, conversion and CRM outcomes in one defensible decision frame.',
      },
    ],
    approach: [
      {
        title: 'Frame the commercial question',
        body: 'Agree on the outcome, time horizon, market and evidence available before diagnosing the cause.',
      },
      {
        title: 'Trace the customer path',
        body: 'Read demand, page behaviour, capture, sales handoff and retention as one connected journey.',
      },
      {
        title: 'Rank the constraints',
        body: 'Separate observed breaks from assumptions, then identify which one is both important and changeable.',
      },
      {
        title: 'Test one decision at a time',
        body: 'Define the owner, expected signal, stopping rule and review date before implementation begins.',
      },
    ],
    metrics: [
      {
        label: 'Demand',
        question: 'Are the right accounts and buying questions entering the journey?',
      },
      { label: 'Conversion', question: 'Where does qualified intent stop moving forward?' },
      {
        label: 'Pipeline',
        question: 'Which actions reach accepted opportunities, not just form fills?',
      },
      {
        label: 'Economics',
        question: 'Does the likely return justify the cost and time of the next move?',
      },
    ],
    insightIds: [
      'traffic-up-demo-bookings-down',
      'how-to-increase-conversion-rate',
      'pricing-page-visits-up-demos-flat',
      'small-conversion-samples-inference',
    ],
    serviceLinks: [
      {
        href: '/services/#growth-strategy-measurement',
        label: 'Growth strategy and measurement',
        note: 'Diagnose the growth system and build a decision-ready measurement spine.',
      },
      {
        href: '/services/measurement-foundation/',
        label: 'Measurement foundation',
        note: 'Repair the path from website activity to CRM, opportunity and revenue.',
      },
    ],
    faqs: [
      {
        question: 'Do we need perfect data before starting?',
        answer:
          'No. We need to know what is available, what is missing and which decisions the current evidence can support. Data gaps become part of the diagnosis rather than something we hide.',
      },
      {
        question: 'Is this a growth plan or an analytics project?',
        answer:
          'It can involve both, but the work starts with a commercial question. Analysis is useful only when it changes a priority, an experiment or an operating decision.',
      },
      {
        question: 'Will you promise a growth result?',
        answer:
          'No. We define the evidence, assumptions and expected signal before the work begins. The goal is a better decision and a measurable test, not a guaranteed outcome.',
      },
    ],
    ctaHeading: 'Bring us the growth question your dashboards cannot settle.',
    ctaBody:
      'We will review the context, available evidence and likely decision path before suggesting a scope.',
    ctaLabel: 'Discuss your growth system',
  },
  {
    slug: 'performance-marketing',
    index: '02',
    label: 'Performance Marketing',
    shortLabel: 'Performance',
    title: 'Make paid growth answer to revenue.',
    seoTitle: 'B2B performance marketing and paid acquisition',
    description:
      'Performance marketing for B2B teams that need paid acquisition, landing pages and attribution to produce qualified pipeline at workable economics.',
    introduction:
      'A campaign can look efficient in the ad platform and still be expensive for the business. We connect the audience, offer, landing path, lead quality and revenue record so budget decisions are made from more than clicks and platform attribution.',
    questions: [
      'Lead volume looks healthy, but sales does not trust the quality.',
      'Every channel appears to claim the same revenue.',
      'The team cannot explain its break-even CAC before setting budget.',
    ],
    outcomes: [
      {
        title: 'A clear acquisition thesis',
        body: 'Define who the campaign is for, what problem earns attention and why the next action is worth taking.',
      },
      {
        title: 'A joined conversion path',
        body: 'Treat the ad, landing page, form, meeting and sales follow-up as one system rather than separate tasks.',
      },
      {
        title: 'Spend limits grounded in economics',
        body: 'Use contribution margin, payback assumptions and lead quality to frame acceptable acquisition cost.',
      },
      {
        title: 'Reporting that survives scrutiny',
        body: 'Reconcile platform, analytics and CRM records, and label where attribution remains uncertain.',
      },
    ],
    approach: [
      {
        title: 'Start with the unit economics',
        body: 'Agree on contribution, sales capacity, qualification and payback assumptions before discussing scale.',
      },
      {
        title: 'Design the offer and path together',
        body: 'Match audience intent to the message, landing experience and follow-up the buyer will actually receive.',
      },
      {
        title: 'Verify measurement before launch',
        body: 'Test campaign parameters, conversion events, CRM capture and ownership while errors are still cheap.',
      },
      {
        title: 'Review quality before volume',
        body: 'Read accepted opportunities, meeting outcomes and revenue contribution beside platform efficiency.',
      },
    ],
    metrics: [
      { label: 'Efficiency', question: 'What did it cost to create a qualified opportunity?' },
      { label: 'Quality', question: 'Which audiences and offers produce accepted demand?' },
      {
        label: 'Payback',
        question: 'How long does contribution take to recover acquisition cost?',
      },
      {
        label: 'Confidence',
        question: 'Which result is observed, attributed or still an assumption?',
      },
    ],
    insightIds: [
      'how-to-run-profitable-paid-ads',
      'break-even-cac-worksheet',
      'how-to-measure-marketing-revenue',
      'utm-governance-b2b',
    ],
    serviceLinks: [
      {
        href: '/services/#paid-acquisition-performance',
        label: 'Paid acquisition and demand generation',
        note: 'Plan and run paid search or paid social around qualified demand and pipeline.',
      },
      {
        href: '/services/measurement-foundation/',
        label: 'Attribution and measurement foundation',
        note: 'Connect campaign source, conversion and CRM records before trusting the report.',
      },
    ],
    faqs: [
      {
        question: 'Do you optimize for leads or pipeline?',
        answer:
          'The exact objective depends on the buying cycle and data available, but lead volume alone is not enough. We define qualification and downstream outcomes in the measurement plan.',
      },
      {
        question: 'Can you guarantee a ROAS or CAC?',
        answer:
          'No. Market response, pricing, sales execution and measurement quality all affect the result. We can define the economics, test the acquisition system and show the evidence behind a recommendation.',
      },
      {
        question: 'Can you work with our existing agency or media team?',
        answer:
          'Yes. The scope can focus on diagnosis, landing paths, measurement or decision support without replacing the team that operates the accounts.',
      },
    ],
    ctaHeading: 'Find the acquisition bottleneck before adding budget.',
    ctaBody:
      'Share the channel, offer and reporting question. We will tell you what can be diagnosed from the current evidence.',
    ctaLabel: 'Discuss paid growth',
  },
  {
    slug: 'seo',
    index: '03',
    label: 'SEO',
    shortLabel: 'SEO',
    title: 'Build organic demand that has somewhere useful to go.',
    seoTitle: 'B2B SaaS SEO strategy and technical SEO',
    description:
      'SEO for B2B SaaS teams that need technical access, useful information architecture, topical depth and a measurable path from search demand to pipeline.',
    introduction:
      'Ranking is only one part of the job. Search has to find the right page, understand it, trust it and send a buyer into a journey that makes sense. We work across technical access, information architecture, content and measurement as one connected system.',
    questions: [
      'Important pages exist, but search engines do not index them reliably.',
      'Traffic is growing while qualified enquiries stay flat.',
      'The site publishes regularly but has no clear topic or internal-link structure.',
    ],
    outcomes: [
      {
        title: 'A technically accessible site',
        body: 'Find crawl, rendering, canonical, indexation and performance issues that block useful pages from discovery.',
      },
      {
        title: 'An intent-led page architecture',
        body: 'Give each important buyer question a clear home without creating duplicate or doorway pages.',
      },
      {
        title: 'Topical depth with editorial standards',
        body: 'Connect pillars, services, practical guides, research and evidence through natural internal links.',
      },
      {
        title: 'Organic performance tied to decisions',
        body: 'Read qualified sessions, conversion paths and pipeline contribution beside rankings and clicks.',
      },
    ],
    approach: [
      {
        title: 'Verify access and indexation',
        body: 'Test what search engines can crawl, render, canonicalize and retain before planning more content.',
      },
      {
        title: 'Map questions to pages',
        body: 'Separate commercial, diagnostic and informational intent, then remove overlap from the architecture.',
      },
      {
        title: 'Build the internal evidence path',
        body: 'Connect broad topics to services, specific answers, methods and proof using descriptive links.',
      },
      {
        title: 'Publish and learn deliberately',
        body: 'Use Search Console, analytics and CRM signals to improve the system without chasing daily noise.',
      },
    ],
    metrics: [
      { label: 'Access', question: 'Can search engines reach and index the pages that matter?' },
      {
        label: 'Demand',
        question: 'Do impressions and clicks come from commercially relevant questions?',
      },
      { label: 'Action', question: 'Does organic traffic continue into a useful next step?' },
      {
        label: 'Pipeline',
        question: 'Which organic journeys contribute to qualified opportunities?',
      },
    ],
    insightIds: [
      'how-to-rank-and-get-recommended-by-ai',
      'seo-aeo-geo-overlap',
      'technical-access-verification-checklist',
      'zero-click-content-funding',
    ],
    serviceLinks: [
      {
        href: '/services/#web-seo-ai-visibility',
        label: 'Web, SEO and AI visibility',
        note: 'Build the technical, editorial and conversion system behind organic discovery.',
      },
      {
        href: '/ai-search/',
        label: 'AI search and answer visibility',
        note: 'See what stays common with SEO and what needs a separate observation method.',
      },
    ],
    faqs: [
      {
        question: 'Is this only a technical SEO audit?',
        answer:
          'No. Technical access matters, but the work can also cover search intent, page architecture, internal linking, content usefulness, conversion paths and measurement.',
      },
      {
        question: 'How long does SEO take?',
        answer:
          'There is no honest universal timeline. Crawl frequency, competition, site history, implementation speed and demand all matter. We define the earliest signals worth watching and avoid ranking promises.',
      },
      {
        question: 'Does SEO still matter when buyers use AI answers?',
        answer:
          'Yes. Accessible pages, clear entities, useful answers and credible sources support conventional search and many AI discovery paths. The observation and reporting methods still need to distinguish the surfaces.',
      },
    ],
    ctaHeading: 'Find the organic growth problem before publishing more pages.',
    ctaBody:
      'Tell us what the site should be discovered for and where the current journey appears to break.',
    ctaLabel: 'Discuss your SEO system',
  },
  {
    slug: 'ai-search',
    index: '04',
    label: 'AI Search, AEO and GEO',
    shortLabel: 'AI Search',
    title: 'Understand where your company appears in AI answers, and why.',
    seoTitle: 'AI search visibility, AEO and GEO for B2B SaaS',
    description:
      'AI search visibility for B2B SaaS using dated samples, citation review, access checks and referral measurement, without guaranteed placement claims.',
    introduction:
      'A screenshot from one prompt is an observation, not a visibility strategy. We use a defined query set and observation window to examine where a company appears, which sources shape the answer and what the current measurement stack can actually see.',
    questions: [
      'The team has screenshots, but no repeatable baseline.',
      'Competitors appear in answers and nobody knows which sources support them.',
      'Analytics shows some AI referrals, but the path to revenue is unclear.',
    ],
    outcomes: [
      {
        title: 'A documented query frame',
        body: 'Fix the buyer questions, market, language, surfaces and collection conditions before checking a result.',
      },
      {
        title: 'Dated visibility observations',
        body: 'Record mentions, citations and source patterns with the sample boundary kept beside the finding.',
      },
      {
        title: 'A source and access review',
        body: 'Check which public sources inform the topic and whether technical policy blocks relevant retrieval paths.',
      },
      {
        title: 'A measurable next action',
        body: 'Separate changes to the website, source infrastructure and analytics, then rank them by evidence and effort.',
      },
    ],
    approach: [
      {
        title: 'Frame the sample',
        body: 'Agree on buyer questions, comparison set, surfaces and observation dates before collection begins.',
      },
      {
        title: 'Observe each surface separately',
        body: 'Record what appeared without treating one engine, session or prompt as a universal ranking.',
      },
      {
        title: 'Inspect citations and public sources',
        body: 'Review recurring source types, entity clarity, page usefulness and technical access conditions.',
      },
      {
        title: 'Connect discovery to measurement',
        body: 'Test observable referrals, conversion events and CRM capture while naming the visits that remain invisible.',
      },
    ],
    metrics: [
      { label: 'Presence', question: 'How often did the company appear inside the agreed sample?' },
      { label: 'Sources', question: 'Which public sources were cited or repeatedly used?' },
      { label: 'Coverage', question: 'Which buyer questions and surfaces showed consistent gaps?' },
      {
        label: 'Referral',
        question: 'What observable AI traffic continued into conversion and CRM records?',
      },
    ],
    insightIds: [
      'build-ai-visibility-baseline',
      'three-ai-surfaces-measurement',
      'ai-crawler-access-policy',
      'measuring-ai-referrals-ga4',
      'review-platforms-source-infrastructure',
    ],
    serviceLinks: [
      {
        href: '/services/ai-search-visibility/',
        label: 'AI-search visibility diagnostic',
        note: 'Move from spot checks to a dated baseline, source map and prioritized action plan.',
      },
      {
        href: '/services/measurement-foundation/',
        label: 'AI referral measurement',
        note: 'Trace observable AI referrals through conversion and CRM records.',
      },
    ],
    faqs: [
      {
        question: 'Can you guarantee a citation or recommendation?',
        answer:
          'No. AI answers vary by engine, query, session, location and time. We document a sample and the conditions around it, then recommend changes the evidence can support.',
      },
      {
        question: 'Are AEO and GEO separate from SEO?',
        answer:
          'They share technical access, useful content, entity clarity and source authority with SEO. The meaningful difference is the surface being observed, how the answer is assembled and what can be measured.',
      },
      {
        question: 'Can AI referral revenue be measured?',
        answer:
          'Some referrals can be observed and joined to CRM outcomes. Other visits may lose referrer data or never create a click. Reporting should keep those limits visible.',
      },
    ],
    ctaHeading: 'Replace AI visibility screenshots with a repeatable baseline.',
    ctaBody:
      'Tell us the market, buyer questions and answer surfaces you need to understand. We will confirm the evidence boundary before scoping the work.',
    ctaLabel: 'Assess your AI-search visibility',
  },
];

export const topicBySlug = Object.fromEntries(topics.map((topic) => [topic.slug, topic])) as Record<
  TopicDefinition['slug'],
  TopicDefinition
>;

const insightGroups: Record<TopicDefinition['slug'], string[]> = {
  growth: [
    'b2b-saas-demo-funnel-dashboard',
    'b2b-saas-demo-show-up-rate',
    'demo-no-shows-diagnosis',
    'demo-request-routing-sales-vs-sdr',
    'demo-requests-dropped-rankings-flat',
    'how-to-increase-conversion-rate',
    'launch-quarter-self-case-protocol',
    'pricing-page-visits-up-demos-flat',
    'small-conversion-samples-inference',
    'traffic-up-demo-bookings-down',
  ],
  'performance-marketing': [
    'attribution-assumption-register',
    'break-even-cac-worksheet',
    'consent-mode-declined-tracking',
    'crm-direct-traffic-despite-utm-tags',
    'ga4-attribution-windows',
    'ga4-data-thresholds',
    'ga4-or-crm-source-of-truth',
    'ga4-vs-crm-lead-reconciliation',
    'how-to-measure-marketing-revenue',
    'how-to-run-profitable-paid-ads',
    'hubspot-original-source-vs-ga4',
    'marketing-measurement-stack-build-order',
    'utm-governance-b2b',
  ],
  seo: [
    'how-to-rank-and-get-recommended-by-ai',
    'seo-aeo-geo-overlap',
    'technical-access-verification-checklist',
    'zero-click-content-funding',
  ],
  'ai-search': [
    'aeo-geo-vendor-due-diligence',
    'ai-crawler-access-policy',
    'build-ai-visibility-baseline',
    'measuring-ai-referrals-ga4',
    'review-platforms-source-infrastructure',
    'three-ai-surfaces-measurement',
    'track-chatgpt-referral-revenue',
  ],
};

// Architecture only. The two AI implementation playbooks intentionally stay
// outside the four search and growth pillars instead of being forced into an
// unrelated topic. Their published files still remain part of Playbooks.
export const insightPrimaryTopic = Object.fromEntries(
  Object.entries(insightGroups).flatMap(([slug, ids]) => ids.map((id) => [id, slug])),
) as Record<string, TopicDefinition['slug']>;

export function getTopicForInsight(insightId: string): TopicDefinition | undefined {
  const primary = insightPrimaryTopic[insightId];
  return primary ? topicBySlug[primary] : undefined;
}
