import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.beforeEach(async ({ page }) => {
  await page.route("**/*", route => new URL(route.request().url()).hostname === "127.0.0.1" ? route.continue() : route.abort());
});

test("homepage keeps original copy and loads its fonts and artwork locally", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Your Compliance Companion for Africa's Privacy Laws");
  await expect(page.getByText("A free tool to help organisations across Africa assess their data protection obligations and understand local compliance requirements.")).toBeVisible();
  const loaded = await page.evaluate(async () => {
    await document.fonts.ready;
    const hero = document.querySelector<HTMLImageElement>(".hero-visual img")!;
    await hero.decode();
    const fonts: string[] = [];
    document.fonts.forEach(font => { if (font.status === "loaded") fonts.push(font.family); });
    return { fonts, width: hero.naturalWidth };
  });
  expect(loaded.fonts).toEqual(expect.arrayContaining(["Manrope", "Source Sans 3"]));
  expect(loaded.width).toBeGreaterThan(0);
  await page.goto("/countries");
  await page.getByRole("navigation", { name: "Main navigation" }).getByRole("link", { name: "How it works" }).click();
  await expect(page).toHaveURL(/\/#how-it-works$/);
  await expect(page.getByRole("heading", { name: "From questions to next steps" })).toBeInViewport();
});

test("mobile legal contents navigate to visible sections and keep keyboard focus", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/privacy");
  await page.getByText("On this page", { exact: true }).filter({ visible: true }).click();
  await page.getByRole("navigation", { name: "Page contents" }).filter({ visible: true }).getByRole("link", { name: "How Long We Keep Information" }).click();
  await expect(page.locator("#how-long-we-keep-information")).toBeFocused();
  await expect(page.getByRole("heading", { name: "How Long We Keep Information" })).toBeInViewport();
  await expect(page.locator(".document-mobile-toc")).not.toHaveAttribute("open");
  await expect(page.locator("#how-long-we-keep-information")).toContainText("We cannot yet confirm that Netlify and Umami delete all provider-held information within three months.");
  const result = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
  expect(result.violations).toEqual([]);
});

test("in-progress answer review discards the old branch and preserves source access", async ({ page }) => {
  await page.goto("/nigeria-lawful-basis");
  await page.getByRole("button", { name: "Yes", exact: true }).click();
  await page.locator(".answer-history summary").click();
  await page.getByRole("button", { name: "Edit previous answer 1" }).click();
  await expect(page.getByRole("heading", { name: "Step 1", exact: true })).toBeFocused();
  await page.getByRole("button", { name: "No", exact: true }).click();
  await expect(page.getByText("Is the processing for a contract with the data subject or pre-contract steps requested by that person?", { exact: true })).toBeVisible();
  await page.locator(".answer-history summary").click();
  await expect(page.locator(".answer-history li")).toHaveCount(1);
  await expect(page.locator(".answer-history strong")).toHaveText("No");
  await page.locator(".question-sources summary").click();
  await expect(page.getByRole("heading", { name: "Sources and review status" })).toBeVisible();
});

for (const path of ["/uganda-data-subject-rights", "/south-africa-data-subject-rights"]) {
  test(`custom rights assessment has named controls: ${path}`, async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(path);
    await expect(page.getByRole("progressbar", { name: "Assessment progress" })).toHaveAttribute("aria-valuenow", /\d/);
    if (path.includes("south-africa")) {
      await page.getByRole("button", { name: "Yes", exact: true }).click();
      const request = page.getByRole("button", { name: /Access/ }).first();
      await request.focus();
      await page.keyboard.press("Enter");
      await expect(page.getByRole("button", { name: "Yes", exact: true })).toBeVisible();
    }
    const result = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
    expect(result.violations).toEqual([]);
  });
}
