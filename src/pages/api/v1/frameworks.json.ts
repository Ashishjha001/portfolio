import { frameworks } from '../../../data/frameworks';

export const prerender = true;

/**
 * Layer 41 — public, machine-readable framework payload.
 * Exposes every Data Decision Consulting framework (definition, inputs, calculation,
 * interpretation, limitations) as raw JSON so that RAG/answer systems can
 * parse the logic with zero transformation effort.
 */
export async function GET() {
  const payload = {
    '@schema': 'datadecision:framework-index:v1',
    description:
      'Public Data Decision Consulting framework index. Each framework carries its definition, inputs, calculation, interpretation and named limitations.',
    source: 'https://datadecision.consulting/knowledge-base/#frameworks',
    generatedAt: new Date().toISOString(),
    count: frameworks.length,
    frameworks: frameworks.map((f) => ({
      id: f.id,
      name: f.name,
      owner: f.owner,
      oneLiner: f.oneLiner,
      definition: f.definition,
      purpose: f.purpose,
      inputs: f.inputs,
      calculation: f.calculation,
      interpretation: f.interpretation,
      limitations: f.limitations,
      exampleNote: f.exampleNote,
      suggestedAction: f.suggestedAction,
      href: f.toolHref
        ? `https://datadecision.consulting${f.toolHref}`
        : `https://datadecision.consulting/knowledge-base/#${f.id}`,
    })),
  };
  return new Response(JSON.stringify(payload, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
