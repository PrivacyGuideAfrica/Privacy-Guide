# Page and social-sharing metadata

`src/lib/page-metadata.ts` defines route titles, descriptions, canonical URLs, robots directives and Open Graph/X sharing tags. `scripts/build-metadata.mjs` writes those tags into the static HTML for every supported route so crawlers do not need JavaScript. `Layout.tsx` uses the same definitions during client navigation, including restoring tags when a visitor leaves a not-found page.

Public canonicals and sitemap entries use trailing slashes to match Netlify's directory URLs. The old `/dpia-assessment` route redirects permanently to `/rwanda-dpia/`. Unknown URLs serve the built `404.html` with HTTP 404 and `noindex, follow`, without a homepage canonical. Static routes remain directly accessible; add new public routes to the metadata path catalogue when adding a page.

The sharing image is `/images/social/privacy-guide-africa-v1.png`, a 1730 × 909 PNG generated from the original logo and existing blue Africa artwork. Its aspect ratio is approximately 1.9:1, and its actual dimensions are declared in Open Graph tags. It uses the approved slogan, “Data protection made human, for humans.” Increment the filename when replacing it to avoid reusing a cached image URL. Open Graph and X tags use the same absolute HTTPS image URL and descriptive alt text.

Browser and Apple icons use `/icons/privacy-guide-africa.png`, an unchanged copy of the original 500 × 500 logo. The legacy `/favicon.ico` and `/apple-touch-icon.png` endpoints serve this PNG through Netlify rewrites; browsers identify the PNG content type. The former Lovable favicon and social image are removed. `/og-image.png` redirects to the new sharing card for older clients that retained that URL.

Validation includes crawlable HTML for all 45 public routes, unique titles/descriptions, social tags, PNG dimensions, sitemap entries, and metadata recovery after navigation from a 404 page. Netlify preview checks verify the real HTTP redirects and error statuses, which Vite's local preview does not emulate. Social platforms may keep previously fetched page previews; Facebook Sharing Debugger and LinkedIn Post Inspector can request a fresh scrape after deployment.
