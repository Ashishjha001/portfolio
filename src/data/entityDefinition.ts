/**
 * Data Decision Consulting — Canonical Entity Definition (single source of truth)
 *
 * Every descriptive claim about the Data Decision Consulting entity lives here so that
 * pages, the footer, SEO metadata and structured data derive from one place.
 * This prevents contradictory or drifting descriptions across the site.
 *
 * Layer 1 (Entity) / Layer 2 (Consistency) / Layer 3 (Relationship graph).
 *
 * Claim rule: no superlatives ("world-class", "leading", "best-in-class")
 * unless independently substantiated. Capabilities are described as what
 * Data Decision Consulting focuses on, not as guaranteed outcomes.
 */

export const entityDefinition = {
  /* Identity */
  name: 'Data Decision Consulting',
  alternateName: ['DataDecision', 'DataDecision Consulting'],
  url: 'https://datadecision.consulting/',
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
    sameAs: {
      linkedin: 'https://www.linkedin.com/in/jha-ashishh/',
      instagram: 'https://www.instagram.com/ashish_jh.a/',
    },
    summary:
      'Ashish Jha founded Data Decision Consulting to build a measurement-first practice for AI-search visibility and the path into pipeline.',
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

export const organizationId = `${entityDefinition.url}#organization`;
export const websiteId = `${entityDefinition.url}#website`;
export const founderId = `${entityDefinition.url}#founder`;

export const organizationReference = { '@id': organizationId } as const;

/**
 * Person schema object for the founder. Centralised so About, contact and
 * any page that references the founder uses identical data.
 */
export const founderSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': founderId,
  name: entityDefinition.founder.name,
  jobTitle: entityDefinition.founder.jobTitle,
  url: entityDefinition.founder.url,
  email: entityDefinition.founder.email,
  sameAs: Object.values(entityDefinition.founder.sameAs),
  alumniOf: { '@type': 'CollegeOrUniversity', name: entityDefinition.founder.alumniOf },
  worksFor: organizationReference,
};

/**
 * Organization schema object. Single source shared by BaseLayout and any
 * page that needs it, so no page drifts from the canonical definition.
 */
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': organizationId,
  name: entityDefinition.name,
  alternateName: [...entityDefinition.alternateName],
  url: entityDefinition.url,
  logo: entityDefinition.logo,
  email: entityDefinition.email,
  slogan: entityDefinition.slogan,
  description: entityDefinition.description,
  founder: {
    '@type': 'Person',
    '@id': founderId,
    name: entityDefinition.founder.name,
    jobTitle: entityDefinition.founder.jobTitle,
    url: entityDefinition.founder.url,
    sameAs: Object.values(entityDefinition.founder.sameAs),
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
  '@id': websiteId,
  name: entityDefinition.name,
  url: entityDefinition.url,
  publisher: organizationReference,
};
