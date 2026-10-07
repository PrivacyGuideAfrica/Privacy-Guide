import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { metadataPaths, metadataTags, pageMetadata, siteMetadata } from '../src/lib/page-metadata.ts';

const template = await readFile('dist/index.html', 'utf8');
const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const render = path => {
  const info = pageMetadata(path);
  let html = template.replace(/<title>.*?<\/title>/, `<title>${escape(info.title)}</title>`);
  for (const [attribute, key, value] of metadataTags(info)) {
    const tag = new RegExp(`<meta ${attribute}="${key}" content="[^"]*"\\s*/?>`);
    if (!tag.test(html)) throw new Error(`Missing metadata template tag: ${key}`);
    html = html.replace(tag, value ? `<meta ${attribute}="${key}" content="${escape(value)}" />` : '');
  }
  return html.replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, info.canonical ? `<link rel="canonical" href="${escape(info.canonical)}" />` : '');
};
for (const path of metadataPaths) {
  const directory = path === '/' ? 'dist' : `dist${path}`;
  await mkdir(directory, { recursive: true });
  await writeFile(`${directory}/index.html`, render(path));
}
// Netlify serves this file with HTTP 404; the React router renders the recovery UI.
await writeFile('dist/404.html', render('/404'));
const publicPages = metadataPaths.map(pageMetadata).filter(info => info.robots === 'index, follow');
await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${publicPages.map(info => `<url><loc>${escape(info.canonical)}</loc></url>`).join('')}</urlset>`);
await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\nSitemap: ${siteMetadata.origin}/sitemap.xml\n`);
console.log(`Generated static metadata for ${metadataPaths.length} routes and the 404 page.`);
