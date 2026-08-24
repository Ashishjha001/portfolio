import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { extname, join, relative } from 'node:path';

const root = new URL('../dist/', import.meta.url);
const rootPath = root.pathname.replace(/^\/(.:\/)/, '$1');

if (!existsSync(rootPath)) {
  throw new Error('dist/ is missing. Run npm run build before validation.');
}

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

const files = walk(rootPath);
const htmlFiles = files.filter((file) => extname(file) === '.html');
const errors = [];
const titles = new Map();
const descriptions = new Map();

const required = [
  'index.html',
  'services/ai-search-visibility/index.html',
  'services/measurement-foundation/index.html',
  'methodology/index.html',
  'work/index.html',
  'insights/index.html',
  'about/index.html',
  'contact/index.html',
  'privacy/index.html',
  'terms/index.html',
  'cookies/index.html',
  'accessibility/index.html',
  '404.html',
];

for (const expected of required) {
  if (!existsSync(join(rootPath, expected))) errors.push(`Missing required route: ${expected}`);
}

function internalTargetExists(href) {
  const clean = href.split('#')[0].split('?')[0];
  if (!clean) return true;
  const path = clean.startsWith('/') ? clean.slice(1) : clean;
  const candidates = path.endsWith('/')
    ? [join(rootPath, path, 'index.html')]
    : [join(rootPath, path), join(rootPath, path, 'index.html'), join(rootPath, `${path}.html`)];
  return candidates.some((candidate) => existsSync(candidate));
}

for (const file of htmlFiles) {
  const rel = relative(rootPath, file).replaceAll('\\', '/');
  const html = readFileSync(file, 'utf8');
  const h1Count = (html.match(/<h1(?:\s|>)/g) || []).length;
  if (h1Count !== 1) errors.push(`${rel}: expected one H1, found ${h1Count}`);
  if (!/<main\b/.test(html)) errors.push(`${rel}: missing main landmark`);
  if (!/<link rel="canonical" href="https:\/\/datadecision\.consulting\//.test(html)) {
    errors.push(`${rel}: missing canonical URL`);
  }

  const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
  const description = html.match(/<meta name="description" content="([^"]+)"/s)?.[1];
  if (!title) errors.push(`${rel}: missing title`);
  if (!description) errors.push(`${rel}: missing meta description`);
  if (title) titles.set(title, [...(titles.get(title) || []), rel]);
  if (description) descriptions.set(description, [...(descriptions.get(description) || []), rel]);

  for (const match of html.matchAll(/href="([^"]+)"/g)) {
    const href = match[1];
    if (
      href.startsWith('http://') ||
      href.startsWith('https://') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      href.startsWith('#') ||
      href.startsWith('data:')
    ) {
      continue;
    }
    if (!internalTargetExists(href)) errors.push(`${rel}: broken internal link ${href}`);
  }

  for (const match of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)) {
    try {
      JSON.parse(match[1]);
    } catch (error) {
      errors.push(`${rel}: invalid JSON-LD (${error.message})`);
    }
  }
}

for (const [title, routes] of titles) {
  if (routes.length > 1) errors.push(`Duplicate title "${title}" on ${routes.join(', ')}`);
}
for (const [description, routes] of descriptions) {
  if (routes.length > 1)
    errors.push(`Duplicate description on ${routes.join(', ')}: ${description}`);
}

for (const staticFile of ['robots.txt', 'sitemap.xml', 'llms.txt', 'CNAME']) {
  if (!existsSync(join(rootPath, staticFile))) errors.push(`Missing ${staticFile}`);
}

const corpus = files
  .filter((file) => ['.html', '.xml', '.txt', '.css', '.js'].includes(extname(file)))
  .map((file) => readFileSync(file, 'utf8'))
  .join('\n');

const prohibited = [
  'Your buyers stopped googling',
  'know exactly where',
  'your board deck is fiction',
  '2 of 5 slots remain',
  'proof should cost us',
  'get your baseline before your competitor',
  'Small team. Senior hands',
  'world-class',
  'cutting-edge',
  'glassmorphism',
];

for (const phrase of prohibited) {
  if (corpus.toLowerCase().includes(phrase.toLowerCase())) {
    errors.push(`Prohibited or superseded phrase found in build: ${phrase}`);
  }
}

for (const privateName of [
  'DataDecision_Strategy_Package',
  '01_source_ledger',
  'competitor dossier',
]) {
  if (corpus.includes(privateName)) errors.push(`Private strategy marker found: ${privateName}`);
}

if (errors.length) {
  console.error(`Validation failed with ${errors.length} issue(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(
  `Validated ${htmlFiles.length} HTML files, required routes, internal links, metadata, schema and claim guardrails.`,
);
