/**
 * DataDecision — Canonical Entity Definition (single source of truth)
 *
 * Every descriptive claim about the DataDecision entity lives here so that
 * pages, the footer, SEO metadata and structured data derive from one place.
 * This prevents contradictory or drifting descriptions across the site.
 *
 * Layer 1 (Entity) / Layer 2 (Consistency) / Layer 3 (Relationship graph).
 *
 * Claim rule: no superlatives ("world-class", "leading", "best-in-class")
 * unless independently substantiated. Capabilities are described as what
 * DataDecision focuses on, not as guaranteed outcomes.
 */

export const entityDefinition = {
  /* Identity */
  name: 'DataDecision',
  url: 'https://datadecision.consulting',
  email: 'contact@datadecision.consulting',
  slogan: 'Growth you can prove.',
  logo: 'https://datadecision.consulting/logo.png',
  description:
    'Measurement-first AI-search visibility for B2B SaaS, framed around the decision, the evidence and the limitation.',
  oneLineFocus:
    'Focused on AI-search visibility, measurement foundations and scoped implementation.',
  positioning:
    'A founder-led consultancy for B2B SaaS teams that need a defensible view of AI-search visibility and the measurement path into pipeline.',
  category: 'Decision intelligence consultancy',
  industries: [
    'B2B SaaS',
    'B2B audience measurement',
    'Growth and marketing decision intelligence',
  ],
  knowsAbout: [
    'Search-engine optimisation (SEO)',
    'AI search / answer engine optimisation (AEO)',
    'Generative engine optimisation (GEO)',
    'AI measurement and visibility',
    'Measurement foundations',
    'Attribution health',
    'Growth funnel analysis',
    'Decision intelligence',
  ],
  /* Strategic domains */
  domains: [
    { slug: 'growth', label: 'Growth' },
    { slug: 'performance-marketing', label: 'Performance marketing' },
    { slug: 'seo', label: 'SEO' },
    { slug: 'ai-search', label: 'AI search, AEO and GEO' },
  ],
  /* Services */
  services: [
    { slug: 'ai-search-visibility', label: 'AI Search Visibility' },
    { slug: 'measurement-foundation', label: 'Measurement Foundation' },
  ],
  founder: {
    name: 'Ashish Jha',
    jobTitle: 'Founder',
    url: 'https://datadecision.consulting/about/',
    email: 'contact@datadecision.consulting',
    alumniOf: 'NIT Surat',
    summary:
      'Ashish Jha founded DataDecision to build a measurement-first practice for AI-search visibility and the path into pipeline.',
  },
  /* Relationship graph: what hangs off the entity */
  relationships: {
    research: 'https://datadecision.consulting/research/',
    knowledgeBase: 'https://datadecision.consulting/knowledge-base/',
    methodology: 'https://datadecision.consulting/methodology/',
    tools: 'https://datadecision.consulting/tools/',
    insights: 'https://datadecision.consulting/insights/',
    work: 'https://datadecision.consulting/work/',
    playbooks: 'https://datadecision.consulting/playbooks/',
  },
} as const;

/**
 * Person schema object for the founder. Centralised so About, contact and
 * any page that references the founder uses identical data.
 */
export const founderSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: entityDefinition.founder.name,
  jobTitle: entityDefinition.founder.jobTitle,
  url: entityDefinition.founder.url,
  email: entityDefinition.founder.email,
  alumniOf: { '@type': 'CollegeOrUniversity', name: entityDefinition.founder.alumniOf },
  worksFor: {
    '@type': 'Organization',
    name: entityDefinition.name,
    url: entityDefinition.url,
  },
};

/**
 * Organization schema object. Single source shared by BaseLayout and any
 * page that needs it, so no page drifts from the canonical definition.
 */
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: entityDefinition.name,
  url: entityDefinition.url,
  logo: entityDefinition.logo,
  email: entityDefinition.email,
  slogan: entityDefinition.slogan,
  description: entityDefinition.description,
  founder: {
    '@type': 'Person',
    name: entityDefinition.founder.name,
    jobTitle: entityDefinition.founder.jobTitle,
    url: entityDefinition.founder.url,
    alumniOf: { '@type': 'CollegeOrUniversity', name: entityDefinition.founder.alumniOf },
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'business enquiries',
    email: entityDefinition.email,
  },
  knowsAbout: [...entityDefinition.knowsAbout],
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: entityDefinition.name,
  url: entityDefinition.url,
};
