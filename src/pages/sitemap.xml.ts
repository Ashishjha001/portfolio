import { getCollection } from 'astro:content';

export const prerender = true;

const staticRoutes = [
  '/',
  '/services/',
  '/services/seo/',
  '/services/ai-search-visibility/',
  '/services/measurement-foundation/',
  '/growth/',
  '/performance-marketing/',
  '/seo/',
  '/ai-search/',
  '/research/',
  '/knowledge-base/',
  '/search-intelligence/',
  '/intelligence-log/',
  '/ai-search-observatory/',
  '/concepts/',
  '/proof/',
  '/why-datadecision/',
  '/paths/',
  '/scorecard/',
  '/playbooks/',
  '/tools/',
  '/methodology/',
  '/work/',
  '/insights/',
  '/about/',
  '/contact/',
  '/privacy/',
  '/terms/',
  '/cookies/',
  '/accessibility/',
];

export async function GET() {
  const [insights, work] = await Promise.all([getCollection('insights'), getCollection('work')]);
  const contentRoutes = [
    ...insights.map((entry) => ({
      path: `/insights/${entry.id}/`,
      lastmod: entry.data.updatedDate.toISOString().slice(0, 10),
    })),
    ...work
      .filter((entry) => entry.data.status === 'complete')
      .map((entry) => ({
        path: `/work/${entry.id}/`,
        lastmod: entry.data.observationDate.toISOString().slice(0, 10),
      })),
  ];
  const fallbackLastmod = '2026-09-01';
  const urls = [
    ...staticRoutes.map((path) => ({ path, lastmod: fallbackLastmod })),
    ...contentRoutes,
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ path, lastmod }) => `  <url>
    <loc>https://datadecision.consulting${path}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`,
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
