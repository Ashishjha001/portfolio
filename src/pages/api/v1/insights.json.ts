import { getCollection } from 'astro:content';

export const prerender = true;

/**
 * Layer 41 — public, machine-readable insight index.
 * A clean summary of every protected Insight (metadata only; full substance
 * lives on each article page). Lets RAG/answer systems discover the canon.
 */
export async function GET() {
  const insights = await getCollection('insights');
  const items = insights
    .map((entry) => ({
      id: entry.id,
      title: entry.data.title,
      description: entry.data.description,
      category: entry.data.category,
      cluster: entry.data.cluster ?? null,
      pillar: entry.data.pillar,
      readingMinutes: entry.data.readingMinutes,
      published: entry.data.publishedDate.toISOString(),
      updated: entry.data.updatedDate.toISOString(),
      url: `https://datadecision.consulting/insights/${entry.id}/`,
    }))
    .sort((a, b) => a.published.localeCompare(b.published));
  const payload = {
    '@schema': 'datadecision:insight-index:v1',
    description:
      'Public Data Decision Consulting insight index. Full article text and schema are served at each url.',
    source: 'https://datadecision.consulting/insights/',
    generatedAt: new Date().toISOString(),
    count: items.length,
    insights: items,
  };
  return new Response(JSON.stringify(payload, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
