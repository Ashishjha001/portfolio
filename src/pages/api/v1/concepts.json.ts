import { concepts } from '../../../data/concepts';

export const prerender = true;

/**
 * Layer 41: public, machine-readable canonical concept payload.
 * Exposes every canonical concept (definition, why it matters, how measured,
 * limitation, canonical home) as raw JSON for RAG/answer systems.
 */
export async function GET() {
  const payload = {
    '@schema': 'datadecision:concept-index:v1',
    description:
      'Public Data Decision Consulting canonical concept index. Each concept points to a single committed canonical home.',
    source: 'https://datadecision.consulting/concepts/',
    generatedAt: new Date().toISOString(),
    count: concepts.length,
    concepts: concepts.map((c) => ({
      slug: c.slug,
      name: c.name,
      cluster: c.cluster,
      inOneLine: c.inOneLine,
      whyItMatters: c.whyItMatters,
      howMeasured: c.howMeasured,
      limitation: c.limitation,
      canonicalHome: c.canonicalHome.label,
      canonicalHref:
        c.canonicalHome.kind === 'framework'
          ? `https://datadecision.consulting/knowledge-base/#${c.canonicalHome.id}`
          : c.canonicalHome.kind === 'insight'
            ? `https://datadecision.consulting/insights/${c.canonicalHome.id}/`
            : c.canonicalHome.kind === 'tool'
              ? `https://datadecision.consulting/tools/#${c.canonicalHome.anchor}`
              : c.canonicalHome.kind === 'service'
                ? `https://datadecision.consulting/services/${c.canonicalHome.slug}/`
                : null,
      related: c.related,
    })),
  };
  return new Response(JSON.stringify(payload, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
