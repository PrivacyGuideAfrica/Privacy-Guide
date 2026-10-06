import { expect, test, type Page } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  // Assessments must work independently of analytics and the editing integration.
  await page.route("**/*", route =>
    new URL(route.request().url()).hostname === "127.0.0.1"
      ? route.continue()
      : route.abort()
  );
});

const answer = (page: Page, name: "Yes" | "No" | "Not Sure") =>
  page.getByRole("button", { name, exact: true }).click();

test("Nigeria and Rwanda offer separate DPIAs and Rwanda's old URL still works", async ({ page }) => {
  await page.goto("/country/nigeria");
  await page.getByRole("link", { name: /DPIA Assessment/ }).click();
  await expect(page).toHaveURL(/\/nigeria-dpia$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Nigeria");
  await page.goto("/country/rwanda");
  await page.getByRole("link", { name: /Do You Need to Do a DPIA/ }).click();
  await expect(page).toHaveURL(/\/rwanda-dpia$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Rwanda");
  await page.goto("/dpia-assessment");
  await expect(page).toHaveURL(/\/rwanda-dpia$/);
});

for (const path of ["/nigeria-dpia", "/annual-audit"]) {
  test(`${path} is available after research approval`, async ({ page }) => {
    await page.goto(path);
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Nigeria");
    await expect(page.getByRole("button", { name: "Yes", exact: true })).toBeVisible();
    await expect(page.getByText("This assessment is temporarily unavailable", { exact: false })).toHaveCount(0);
  });
}

test("unknown pages and countries offer a recovery route", async ({ page }) => {
  for (const path of ["/missing-page", "/country/missing", "/country/toString"]) {
    await page.goto(path);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(/not found/i);
    await page.getByRole("link", { name: "Explore available countries" }).click();
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("Assessment Modules by Country");
  }
});

test("changing from a valid country to an invalid one does not retain stale content", async ({ page }) => {
  await page.goto("/country/nigeria");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Nigeria");
  await page.evaluate(() => {
    history.pushState({}, "", "/country/missing");
    window.dispatchEvent(new PopStateEvent("popstate"));
  });
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Country not found");
});

test("Previous follows the answered branch and changed answers choose a new path", async ({ page }) => {
  await page.goto("/ndpa-applicability");
  await expect(page.getByRole("button", { name: "Previous" })).toBeDisabled();
  await answer(page, "Yes");
  await answer(page, "No");
  await expect(page.getByText("Does an organisation outside Nigeria", { exact: false })).toBeVisible();
  await expect(page.getByText("Step 3 · 2 answered")).toBeVisible();
  await page.getByRole("button", { name: "Previous" }).click();
  await expect(page.getByText("Is the controller or processor established", { exact: false })).toBeVisible();
  await answer(page, "Yes");
  await expect(page.getByText("Is this processing solely for personal or household", { exact: false })).toBeVisible();
  await page.getByRole("button", { name: "Previous" }).click();
  await expect(page.getByText("Is the controller or processor established", { exact: false })).toBeVisible();
  await page.getByRole("button", { name: "Previous" }).click();
  await expect(page.getByRole("button", { name: "Previous" })).toBeDisabled();
  await answer(page, "No");
  await expect(page.locator(".assessment-result")).toContainText("No NDPA personal-data processing is established");
});

test("completed assessments allow review, a different result, and a full reset", async ({ page }) => {
  await page.goto("/ghana-applicability");
  await answer(page, "No");
  await answer(page, "No");
  await answer(page, "No");
  await expect(page.getByText("does not directly apply to your current activities", { exact: false })).toBeVisible();
  await page.getByRole("button", { name: "Review last answer" }).click();
  await expect(page.getByText("Does the personal data you process originate partly or wholly from Ghana?", { exact: true })).toBeVisible();
  await expect(page.getByText("does not directly apply to your current activities", { exact: false })).toHaveCount(0);
  await answer(page, "Yes");
  await expect(page.getByText("The Ghana Data Protection Act, 2012 (Act 843) applies to your activities.", { exact: false })).toBeVisible();
  await page.getByTitle("Reset Assessment").click();
  await expect(page.getByText("Step 1 · 0 answered")).toBeVisible();
  await expect(page.getByRole("button", { name: "Previous" })).toBeDisabled();
});

test("review clears parent-owned completion guidance", async ({ page }) => {
  await page.goto("/uganda-dpo");
  await answer(page, "Yes");
  await expect(page.getByRole("heading", { name: "DPO Guidance", exact: true })).toBeVisible();
  await page.getByRole("button", { name: "Review last answer" }).click();
  await expect(page.getByRole("heading", { name: "DPO Guidance", exact: true })).toHaveCount(0);
  await answer(page, "No");
  await answer(page, "No");
  await expect(page.getByText("You are not legally required to appoint a DPO.", { exact: false })).toBeVisible();
});

test("reviewed results can be revised without retaining the previous result", async ({ page }) => {
  await page.goto("/nigeria-lawful-basis");
  await answer(page, "Yes");
  await answer(page, "Yes");
  await expect(page.getByText("Legal Obligation may be available,", { exact: false })).toBeVisible();
  await page.getByRole("button", { name: "Review last answer" }).click();
  await expect(page.getByText("Legal Obligation may be available,", { exact: false })).toHaveCount(0);
  await answer(page, "No");
  await answer(page, "Yes");
  await answer(page, "Yes");
  await expect(page.getByText("Contractual Necessity may be available", { exact: false })).toBeVisible();
  await page.getByTitle("Reset Assessment").click();
  await expect(page.getByText("Step 1 · 0 answered")).toBeVisible();
  await expect(page.getByText("Legal Obligation may be available", { exact: false })).toHaveCount(0);
});

const lawfulBasisCases: { result: string; answers: ("Yes" | "No")[] }[] = [
  { result: "Legal Obligation may be available", answers: ["Yes", "Yes"] },
  { result: "Contractual Necessity may be available", answers: ["No", "Yes", "Yes"] },
  { result: "Vital Interests may be available", answers: ["No", "No", "Yes", "Yes"] },
  { result: "Public Interest or Official Authority may be available", answers: ["No", "No", "No", "Yes", "Yes"] },
  { result: "Legitimate Interests may be available", answers: ["No", "No", "No", "No", "Yes", "Yes"] },
  { result: "Consent may be available only if", answers: ["No", "No", "No", "No", "No", "Yes"] },
  { result: "No lawful basis has been established", answers: ["No", "No", "No", "No", "Yes", "No", "No"] },
];
for (const [index, scenario] of lawfulBasisCases.entries()) {
  test(`lawful basis path ${index + 1}: ${scenario.result}`, async ({ page }) => {
    await page.goto("/nigeria-lawful-basis");
    for (const response of scenario.answers) await answer(page, response);
    await expect(page.locator(".assessment-result")).toContainText(scenario.result);
  });
}

test("Rwanda custom controller/processor results can be changed", async ({ page }) => {
  await page.goto("/rwanda-controller-processor");
  await answer(page, "Yes");
  await expect(page.getByText("You are likely to be a Data Controller.", { exact: false })).toBeVisible();
  await page.getByRole("button", { name: "Review last answer" }).click();
  await answer(page, "No");
  await answer(page, "No");
  await answer(page, "Yes");
  await expect(page.getByText("You are likely to be a Data Processor.", { exact: false })).toBeVisible();
});

test("Not Sure preserves uncertainty and reset clears progress", async ({ page }) => {
  await page.goto("/rwanda-dpia");
  await answer(page, "Not Sure");
  await expect(page.locator(".assessment-result")).toContainText("Consult NCSA where unsure");
  await page.getByRole("button", { name: "Review last answer" }).click();
  await expect(page.getByRole("button", { name: "Not Sure", exact: true })).toBeVisible();
  await answer(page, "No");
  await page.getByTitle("Reset Assessment").click();
  await expect(page.getByText("Step 1 · 0 answered")).toBeVisible();
  await expect(page.getByRole("button", { name: "Previous" })).toBeDisabled();
  await answer(page, "Yes");
  await expect(page.locator(".assessment-result")).toContainText("A Rwanda DPIA trigger is identified");
});

test("tablet navigation exposes its state and supports keyboard activation", async ({ page }) => {
  await page.setViewportSize({ width: 768, height: 900 });
  await page.goto("/countries");
  const toggle = page.getByRole("button", { name: "Toggle menu" });
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await toggle.focus();
  await page.keyboard.press("Enter");
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  await expect(page.getByRole("navigation").getByRole("link", { name: "Start Free Assessment" })).toBeVisible();
  await page.getByRole("navigation").getByRole("link", { name: "Explore Modules" }).click();
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
});

for (const width of [320, 390, 768, 1280]) {
  test(`country directory and Nigeria modules fit a ${width}px viewport`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    for (const path of ["/countries", "/country/nigeria"]) {
      await page.goto(path);
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
      const overflows = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
      expect(overflows, `${path} must not scroll horizontally`).toBe(false);
    }
  });
}

for (const country of ["nigeria", "rwanda", "uganda", "south-africa", "ghana"]) {
  test(`all available ${country} modules render without runtime exceptions`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", error => errors.push(error.message));
    await page.goto(`/country/${country}`);
    const links = await page.locator('section[aria-labelledby="assessment-modules"] a[href]').evaluateAll(elements =>
      elements.map(element => element.getAttribute("href")!).filter(href => href !== "/countries")
    );
    expect(links.length).toBeGreaterThan(0);
    for (const link of links) {
      await page.goto(link);
      // Older modules use different layouts and heading levels; check their content, not the footer.
      await expect(page.locator("h1, h2, h3").filter({ hasNotText: "PrivacyGuide.Africa" }).first()).toBeVisible();
      await expect(page.getByRole("heading", { name: /not found/i })).toHaveCount(0);
    }
    expect(errors).toEqual([]);
  });
}
