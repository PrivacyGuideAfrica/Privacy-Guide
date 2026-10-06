import { readFile } from 'node:fs/promises';
import { gzipSync } from 'node:zlib';
const manifest = JSON.parse(await readFile('dist/.vite/manifest.json', 'utf8'));
const seen = new Set();
async function size(key) {
  if (seen.has(key)) return 0;
  seen.add(key);
  const entry = manifest[key];
  const own = gzipSync(await readFile(`dist/${entry.file}`)).length;
  return own + (await Promise.all((entry.imports || []).map(size))).reduce((sum, bytes) => sum + bytes, 0);
}
const entry = Object.keys(manifest).find(key => manifest[key].isEntry);
const bytes = await size(entry);
const budget = 145000;
console.log(`Initial JavaScript: ${bytes} bytes gzip; budget: ${budget} bytes (baseline: 200923).`);
if (bytes > budget) throw new Error('Initial JavaScript exceeds the loading budget');
