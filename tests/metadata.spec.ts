import { expect, test } from "@playwright/test";
import { countries } from "../src/data/catalog";

const socialImage = "https://privacyguide.africa/images/social/privacy-guide-africa-v1.png";
const paths = ["/", "/countries", "/about", "/privacy", "/legal-notice", ...countries.filter(country => country.status === "available").flatMap(country => [`/country/${country.id}`, ...country.modules.map(module => module.link)])];

test("every public route has crawlable, unique metadata and branded sharing tags", async ({ request }) => {
  const titles = new Set<string>();
  const descriptions = new Set<string>();
  for (const path of paths) {
    const canonical = `https://privacyguide.africa${path === "/" ? "/" : `${path}/`}`;
    const response = await request.get(path === "/" ? path : `${path}/`);
    expect(response.ok()).toBe(true);
    const html = await response.text();
    const title = html.match(/<title>(.*?)<\/title>/)![1];
    const description = html.match(/<meta name="description" content="([^"]+)"/)![1];
    expect(titles.has(title)).toBe(false);
    expect(descriptions.has(description)).toBe(false);
    titles.add(title); descriptions.add(description);
    expect(html).toContain(`<meta property="og:title" content="${title}"`);
    expect(html).toContain(`<meta name="twitter:title" content="${title}"`);
    expect(html).toContain(`<meta property="og:description" content="${description}"`);
    expect(html).toContain(`<meta name="twitter:description" content="${description}"`);
    expect(html).toContain(`<link rel="canonical" href="${canonical}"`);
    expect(html).toContain(`<meta property="og:url" content="${canonical}"`);
    expect(html).toContain(`<meta property="og:image" content="${socialImage}"`);
    expect(html).toContain(`<meta name="twitter:image" content="${socialImage}"`);
    expect(html).toContain('name="twitter:card" content="summary_large_image"');
    expect(html).toContain('rel="apple-touch-icon" href="/icons/privacy-guide-africa.png"');
    expect(html).not.toContain('/og-image.png');
    expect(html).not.toContain('lovable');
    for (const key of ["description", "og:image", "og:title", "og:url", "twitter:card", "robots"]) {
      expect([...html.matchAll(/<meta (?:name|property)="([^"]+)"/g)].filter(tag => tag[1] === key)).toHaveLength(1);
    }
  }
  const image = await request.get("/images/social/privacy-guide-africa-v1.png");
  expect(image.headers()["content-type"]).toContain("image/png");
  const bytes = await image.body();
  expect(bytes.subarray(1, 4).toString()).toBe("PNG");
  expect(bytes.readUInt32BE(16)).toBe(1730);
  expect(bytes.readUInt32BE(20)).toBe(909);
  const sitemap = await (await request.get("/sitemap.xml")).text();
  expect(sitemap).not.toContain("/dpia-assessment");
  expect(sitemap.match(/<loc>/g)).toHaveLength(paths.length);
  expect(sitemap).toContain("https://privacyguide.africa/country/ghana/</loc>");
});

test("404 metadata is noindex and client navigation restores valid canonical and social tags", async ({ page, request }) => {
  await page.route("**/*", route => new URL(route.request().url()).hostname === "127.0.0.1" ? route.continue() : route.abort());
  const errorHtml = await (await request.get("/404.html")).text();
  expect(errorHtml).toContain('<title>Page not found | PrivacyGuide.Africa</title>');
  expect(errorHtml).toContain('name="robots" content="noindex, follow"');
  expect(errorHtml).not.toContain('rel="canonical"');
  expect(errorHtml).not.toContain('property="og:url"');
  await page.goto("/404.html");
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", "noindex, follow");
  await page.getByRole("main").getByRole("link", { name: "Explore available countries" }).click();
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", "https://privacyguide.africa/countries/");
  await expect(page.locator('meta[property="og:url"]')).toHaveAttribute("content", "https://privacyguide.africa/countries/");
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", "index, follow");
  await expect(page.locator('meta[name="twitter:title"]')).toHaveAttribute("content", "Choose your country | PrivacyGuide.Africa");
  await page.getByRole("link", { name: /Ghana Data Protection Act/ }).click();
  await expect(page.locator('meta[name="twitter:title"]')).toHaveAttribute("content", "Ghana privacy assessments | PrivacyGuide.Africa");
  await expect(page.locator('link[rel="canonical"]')).toHaveCount(1);
});
