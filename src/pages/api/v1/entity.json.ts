import { entityDefinition, organizationSchema } from '../../../data/entityDefinition';

export const prerender = true;

/**
 * Layer 41 / Layer 1 — public, machine-readable canonical entity payload.
 * The single source of truth for the DataDecision entity, exposed as JSON for
 * RAG systems and entity-resolution tools to read without parsing HTML/UI.
 */
export async function GET() {
  const payload = {
    '@schema': 'datadecision:entity:v1',
    organization: {
      '@type': organizationSchema['@type'],
      name: organizationSchema.name,
      url: organizationSchema.url,
      logo: organizationSchema.logo,
      email: organizationSchema.email,
      slogan: organizationSchema.slogan,
      description: organizationSchema.description,
      founder: organizationSchema.founder.name,
      knowsAbout: organizationSchema.knowsAbout,
    },
    positioning: entityDefinition.positioning,
    oneLineFocus: entityDefinition.oneLineFocus,
    domains: entityDefinition.domains,
    services: entityDefinition.services,
    relationships: entityDefinition.relationships,
  };
  return new Response(JSON.stringify(payload, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
