/**
 * Pravi public/sitemap.xml na osnovu stranica iz src/routes.ts.
 * Pokrece se automatski pri `npm run build`.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SITE_URL = 'https://www.vrticmazza.rs';

function readObjectLiteral(source, marker) {
  const start = source.indexOf(marker);
  if (start === -1) throw new Error(`Nije pronadjeno: ${marker}`);
  const open = source.indexOf('{', source.indexOf('=', start));
  let depth = 0;
  for (let i = open; i < source.length; i += 1) {
    if (source[i] === '{') depth += 1;
    if (source[i] === '}') {
      depth -= 1;
      if (depth === 0) {
        // eslint-disable-next-line no-eval
        return eval(`(${source.slice(open, i + 1)})`);
      }
    }
  }
  throw new Error(`Nije zatvoren objekat: ${marker}`);
}

const routesSource = fs.readFileSync(path.join(ROOT, 'src', 'routes.ts'), 'utf8');
const pages = readObjectLiteral(routesSource, 'export const PAGES');

function pathFor(key) {
  const segments = [];
  let current = key;
  while (current) {
    const page = pages[current];
    if (!page) break;
    if (page.slug) segments.unshift(page.slug);
    current = page.parent;
  }
  return `/${segments.join('/')}`;
}

const today = new Date().toISOString().slice(0, 10);

const entries = Object.keys(pages).map((key) => {
  const url = pathFor(key);
  const loc = url === '/' ? SITE_URL : `${SITE_URL}${url}`;
  return [
    '  <url>',
    `    <loc>${loc}</loc>`,
    `    <lastmod>${today}</lastmod>`,
    `    <changefreq>${key === 'home' ? 'weekly' : 'monthly'}</changefreq>`,
    `    <priority>${pages[key].priority.toFixed(1)}</priority>`,
    '  </url>',
  ].join('\n');
});

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  entries.join('\n'),
  '</urlset>',
  '',
].join('\n');

fs.writeFileSync(path.join(ROOT, 'public', 'sitemap.xml'), xml, 'utf8');
process.stdout.write(`sitemap.xml: ${entries.length} adresa\n`);
