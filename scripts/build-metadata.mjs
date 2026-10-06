import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { countries } from '../src/data/catalog.ts';
import { pageMetadata } from '../src/lib/page-metadata.ts';
const template = await readFile('dist/index.html', 'utf8');
const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const paths = ['/', '/countries', '/about', '/privacy', '/legal-notice', '/dpia-assessment', ...countries.filter(country => country.status === 'available').flatMap(country => [`/country/${country.id}`, ...country.modules.map(module => module.link)])];
for (const path of paths) {
  const info = pageMetadata(path);
  let html = template.replace(/<title>.*?<\/title>/, `<title>${escape(info.title)}</title>`);
  for (const [attribute, key, value] of [
    ['name', 'description', info.description], ['property', 'og:title', info.title],
    ['property', 'og:description', info.description], ['property', 'og:url', info.canonical],
  ]) html = html.replace(new RegExp(`<meta ${attribute}="${key}" content="[^"]*"\\s*/?>`), `<meta ${attribute}="${key}" content="${escape(value)}" />`);
  html = html.replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${escape(info.canonical)}" />`);
  const directory = path === '/' ? 'dist' : `dist${path}`;
  await mkdir(directory, { recursive: true });
  await writeFile(`${directory}/index.html`, html);
}
const publicPaths = paths.filter(path => path !== '/dpia-assessment' && !countries.some(country => country.modules.some(module => module.link === path && module.status === 'review')));
await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${publicPaths.map(path => `<url><loc>${pageMetadata(path).canonical}</loc></url>`).join('')}</urlset>`);
await writeFile('dist/robots.txt', 'User-agent: *\nAllow: /\nSitemap: https://privacyguide.africa/sitemap.xml\n');
console.log(`Generated static metadata for ${paths.length} routes.`);
