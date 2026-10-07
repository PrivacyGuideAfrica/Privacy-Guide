import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.beforeEach(async ({ page }) => {
  await page.route("**/*", route => new URL(route.request().url()).hostname === "127.0.0.1" ? route.continue() : route.abort());
});

for (const path of ["/", "/countries", "/country/ghana", "/ghana-applicability"]) {
  test(`core accessibility: ${path}`, async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(path);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    const result = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
    expect(result.violations).toEqual([]);
    await expect(page.getByRole("main")).toHaveCount(1);
    await expect(page.getByRole("navigation", { name: "Main navigation" })).toHaveCount(1);
  });
}

test("keyboard users can skip navigation, dismiss the menu, and reach a focused question", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("link", { name: "Skip to main content" }).focus();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("main")).toBeFocused();
  await page.getByRole("button", { name: "Toggle menu" }).click();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("button", { name: "Toggle menu" })).toBeFocused();
  await expect(page.getByRole("button", { name: "Toggle menu" })).toHaveAttribute("aria-expanded", "false");
  await page.goto("/ghana-applicability");
  await page.getByRole("button", { name: "No", exact: true }).focus();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("heading", { name: "Step 2", exact: true })).toBeFocused();
  await page.getByRole("button", { name: "Yes", exact: true }).click();
  await expect(page.getByRole("heading", { name: "Assessment Complete", exact: true }).last()).toBeFocused();
});

test("answer review edits an earlier branch and removes stale results and answers", async ({ page }) => {
  await page.goto("/ghana-applicability");
  for (let i = 0; i < 3; i++) await page.getByRole("button", { name: "No", exact: true }).click();
  await expect(page.getByRole("button", { name: /Change answer/ })).toHaveCount(3);
  await page.getByRole("button", { name: "Change answer 1", exact: true }).click();
  await expect(page.getByRole("heading", { name: "Step 1", exact: true })).toBeFocused();
  await expect(page.getByText("does not directly apply to your current activities", { exact: false })).toHaveCount(0);
  await page.getByRole("button", { name: "Yes", exact: true }).click();
  await expect(page.getByRole("button", { name: /Change answer/ })).toHaveCount(1);
  await expect(page.getByText("Your answer: Yes", { exact: true })).toBeVisible();
  for (const heading of ["Outcome", "Why this applies", "Next steps", "Sources and legal references"]) await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
  await expect(page.getByText("Legal review date: not yet recorded.")).toHaveCount(0);
  const result = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
  expect(result.violations).toEqual([]);
});

test("print output includes result, country, answers and sources without navigation", async ({ page }) => {
  await page.goto("/ghana-applicability");
  await page.getByRole("button", { name: "Yes", exact: true }).click();
  await page.evaluate(() => { window.print = () => { document.body.dataset.printCalled = "true"; }; });
  await page.getByRole("button", { name: "Print or save as PDF" }).click();
  await expect(page.locator("body")).toHaveAttribute("data-print-called", "true");
  await page.emulateMedia({ media: "print" });
  await expect(page.getByRole("navigation", { name: "Main navigation" })).toBeHidden();
  await expect(page.getByRole("contentinfo")).toBeHidden();
  await expect(page.getByText("Your answer: Yes", { exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Sources and legal references" })).toBeVisible();
  await expect(page.locator(".assessment-result")).toContainText("Ghana");
});

test("metadata is available without JavaScript and stays correct on client navigation", async ({ page, request }) => {
  const html = await (await request.get("/country/ghana/")).text();
  expect(html).toContain("Ghana privacy assessments | PrivacyGuide.Africa");
  expect(html).toContain('property="og:title" content="Ghana privacy assessments');
  expect(html).not.toContain("gptengineer.js");
  await page.goto("/countries");
  await page.getByRole("link", { name: /Ghana Data Protection Act/ }).click();
  await expect(page).toHaveTitle("Ghana privacy assessments | PrivacyGuide.Africa");
  await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /Ghana/);
  await expect(page.getByRole("navigation", { name: "Breadcrumb" }).getByText("Ghana", { exact: true })).toHaveAttribute("aria-current", "page");
});

test("reduced motion and enlarged text keep the core journey usable", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 640, height: 900 });
  for (const path of ["/", "/countries", "/country/ghana", "/ghana-applicability"]) {
    await page.goto(path);
    await page.addStyleTag({ content: "html { font-size: 200%; }" });
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    const animated = await page.evaluate(() => document.getAnimations().filter(animation => animation.playState === "running").length);
    expect(animated).toBe(0);
  }
});
