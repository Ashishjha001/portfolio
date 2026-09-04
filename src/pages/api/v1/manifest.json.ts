export const prerender = true;

/**
 * Layer 41: machine-readable API manifest.
 * Lists every public JSON payload Data Decision Consulting exposes, so RAG/answer systems
 * and crawlers can discover the structured data surface in one request.
 */
export async function GET() {
  const base = 'https://datadecision.consulting';
  const payload = {
    '@schema': 'datadecision:api-manifest:v1',
    description:
      'Data Decision Consulting public machine-readable payloads. These expose the canonical entity, frameworks, concepts and insight index as raw JSON with zero parsing effort.',
    generatedAt: new Date().toISOString(),
    endpoints: [
      { slug: 'entity', label: 'Canonical entity', url: `${base}/api/v1/entity.json` },
      {
        slug: 'frameworks',
        label: 'Proprietary frameworks',
        url: `${base}/api/v1/frameworks.json`,
      },
      { slug: 'concepts', label: 'Canonical concepts', url: `${base}/api/v1/concepts.json` },
      { slug: 'insights', label: 'Insight index', url: `${base}/api/v1/insights.json` },
    ],
  };
  return new Response(JSON.stringify(payload, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
