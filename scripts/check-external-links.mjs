import { readFile, readdir } from 'node:fs/promises';
import { extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const distDirectory = fileURLToPath(new URL('../dist/', import.meta.url));
const siteHost = 'datadecision.consulting';
const browserHeaders = {
  'user-agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/140.0 Safari/537.36',
};

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const path = join(directory, entry.name);
      return entry.isDirectory() ? walk(path) : path;
    }),
  );
  return files.flat();
}

const htmlFiles = (await walk(distDirectory)).filter((path) => extname(path) === '.html');
const urls = new Set();

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  for (const match of html.matchAll(/href=["'](https?:\/\/[^"']+)["']/g)) {
    const url = new URL(match[1].replaceAll('&amp;', '&'));
    if (url.hostname !== siteHost && url.hostname !== 'schema.org') urls.add(url.href);
  }
}

const results = [];

for (const url of [...urls].sort()) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15_000);
  try {
    let response = await fetch(url, {
      method: 'HEAD',
      redirect: 'follow',
      signal: controller.signal,
      headers: browserHeaders,
    });
    if (!response.ok) {
      response = await fetch(url, {
        method: 'GET',
        redirect: 'follow',
        signal: controller.signal,
        headers: browserHeaders,
      });
    }
    results.push({ url, status: response.status, ok: response.ok });
  } catch (error) {
    results.push({
      url,
      status: error instanceof Error ? error.name : 'request-error',
      ok: false,
    });
  } finally {
    clearTimeout(timeout);
  }
}

const failures = results.filter((result) => !result.ok);
for (const result of results)
  console.log(`${result.ok ? 'OK' : 'FAIL'} ${result.status} ${result.url}`);

if (failures.length) {
  console.error(`\n${failures.length} external link${failures.length === 1 ? '' : 's'} failed.`);
  process.exitCode = 1;
} else {
  console.log(`\nChecked ${results.length} external links.`);
}
