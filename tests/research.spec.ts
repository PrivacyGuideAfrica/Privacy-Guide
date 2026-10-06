import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.beforeEach(async ({ page }) => {
  await page.route("**/*", route => new URL(route.request().url()).hostname === "127.0.0.1" ? route.continue() : route.abort());
});

type Scenario = { id: string; path: string; answers: string; outcome: string[]; absent?: string[] };
// Y/N/? encode Yes/No/Not Sure. Expectations come from the approved research's cases,
// independently of the question definitions: these catch legally significant routing regressions.
const scenarios: Scenario[] = [
  { id: "NGD-S1 small hotel: express trigger despite low volume", path: "/nigeria-dpia", answers: "YNYYN", outcome: ["file the DPIA with the NDPC before processing", "filing remains required"] },
  { id: "NGD-S2 facial recognition with residual high risk", path: "/nigeria-dpia", answers: "YNYYY", outcome: ["Consult the NDPC before processing because residual high risk remains", "Filing is distinct"] },
  { id: "NGD-S3 ordinary corporate fraud is not an automatic exemption", path: "/nigeria-dpia", answers: "YY", outcome: ["Ordinary corporate fraud monitoring is not automatically", "preserves other duties"] },
  { id: "NGD-S4 overseas hosting transfer", path: "/nigeria-dpia", answers: "YNYN", outcome: ["express GAID article 28(3) trigger", "file the DPIA"] },
  { id: "NGD-S5 no listed trigger and documented low risk", path: "/nigeria-dpia", answers: "YNNN", outcome: ["No DPIA trigger identified on the documented facts", "not a conclusion of general legal compliance"] },
  { id: "NGD general high risk without listed trigger", path: "/nigeria-dpia", answers: "YNNYYY", outcome: ["Consult the NDPC before processing because residual high risk remains"] },
  { id: "NGD uncertain express trigger", path: "/nigeria-dpia", answers: "YN?", outcome: ["DPIA screening is unresolved"], absent: ["No DPIA trigger identified on the documented facts"] },
  { id: "NGC-S1 UHL multinational below 200 subjects", path: "/annual-audit", answers: "YYNY", outcome: ["Annual CAR filing is required", "31 March each year"] },
  { id: "NGC-S2 OHL school with current renewal", path: "/annual-audit", answers: "YNYY", outcome: ["annual CAR is not required", "Periodic internal audits"] },
  { id: "NGC-S3 first EHL filing after establishment", path: "/annual-audit", answers: "YYNNYY", outcome: ["15 months after legal establishment", "1 April 2027"], absent: ["18 months after establishment"] },
  { id: "NGC-S4 unresolved boundary classification", path: "/annual-audit", answers: "YNNYN", outcome: ["Determine classification before relying on a filing exemption", "Exactly 1,000 and exactly 5,000"] },
  { id: "NGC-S5 recent designation gives no new establishment date", path: "/annual-audit", answers: "YYNY", outcome: ["31 March each year", "If overdue, address filing"] },
  { id: "NGC establishment exactly 12 June 2023", path: "/annual-audit", answers: "YYNNN", outcome: ["Establishment on 12 June 2023 is not expressly resolved", "do not assume an extension"] },
  { id: "NGC later subsequent filing retains annual-cycle uncertainty", path: "/annual-audit", answers: "YYNNYN", outcome: ["anniversary or 31 March", "entity-specific position"] },
  { id: "NGC OHL renewal overdue", path: "/annual-audit", answers: "YNYN", outcome: ["Complete or remedy your OHL annual registration renewal", "Do not rely on"] },
  { id: "NGC documented non-major-importance", path: "/annual-audit", answers: "YNNYY", outcome: ["No routine annual CAR requirement is identified", "specific NDPC direction"] },
  { id: "B-S1 Nigeria risk trigger", path: "/data-breach", answers: "YYYN", outcome: ["within 72 elapsed hours of awareness", "No high-risk communication duty", "10:00 Thursday"] },
  { id: "B-S1 Rwanda two deadlines", path: "/rwanda-data-breach", answers: "YYYN", outcome: ["within 48 elapsed hours", "no later than 72 hours", "operational interpretation", "Do not start a new 72-hour clock"] },
  { id: "B-S2 Rwanda low risk still notifies authority", path: "/rwanda-data-breach", answers: "YYN", outcome: ["authority notification remains required", "No automatic high-risk communication"] },
  { id: "B-S3 Uganda processor direct PDPO duty", path: "/uganda-data-breach", answers: "Y", outcome: ["PDPO immediately using Form 7", "collectors, controllers and processors", "does not displace its direct PDPO duty", "Do not wait for containment"] },
  { id: "B-S4 Ghana low-risk contact data", path: "/ghana-data-breach", answers: "YN", outcome: ["DPC) and affected data subjects as soon as reasonably practicable", "Low risk does not remove"] },
  { id: "B-S4 South Africa low-risk contact data", path: "/south-africa-data-breach", answers: "YNYYN", outcome: ["Regulator through eServices and identifiable affected data subjects", "Low risk does not remove"] },
  { id: "B-S5 South Africa subjects cannot be identified", path: "/south-africa-data-breach", answers: "YNYN", outcome: ["Regulator notification remains required", "qualifies notification to those subjects only"] },
  { id: "B-S6 Ghana availability loss without known access", path: "/ghana-data-breach", answers: "N", outcome: ["broader loss/damage reporting position", "not a blanket exemption"] },
  { id: "B-S6 South Africa uncertain exfiltration", path: "/south-africa-data-breach", answers: "?", outcome: ["Seek immediate incident and legal assessment", "all-compromises reporting guidance"] },
  { id: "B-S7 Ghana HR embarrassment does not justify delay", path: "/ghana-data-breach", answers: "YN", outcome: ["as soon as reasonably practicable", "internal HR request"] },
  { id: "B-S8 Nigeria processor on weekend", path: "/data-breach", answers: "YNY", outcome: ["controller or processor that engaged you", "Do not wait for its regulator deadline or the next working day"] },
  { id: "B-S8 Rwanda processor on weekend", path: "/rwanda-data-breach", answers: "YNY", outcome: ["processor, notify the controller within 48 elapsed hours", "Do not postpone to a working day"] },
  { id: "B-S8 South Africa operator on weekend", path: "/south-africa-data-breach", answers: "YY", outcome: ["Notify the responsible party immediately", "including on weekends"] },
  { id: "Nigeria high-risk public communication retains regulator duty", path: "/data-breach", answers: "YYYYN", outcome: ["Notify the NDPC within 72", "effective public communication"] },
  { id: "Nigeria documented no-risk outcome is qualified", path: "/data-breach", answers: "YYN", outcome: ["No ordinary section 40(2) notification trigger", "immediate-containment reporting duty"] },
  { id: "Rwanda article 45 exception never removes authority notice", path: "/rwanda-data-breach", answers: "YYYY", outcome: ["within 48 elapsed hours", "does not remove authority notification"] },
  { id: "Ghana authorised subject delay retains DPC notice", path: "/ghana-data-breach", answers: "YY", outcome: ["Continue DPC notification", "does not exempt authority reporting"] },
  { id: "South Africa authorised subject delay retains Regulator notice", path: "/south-africa-data-breach", answers: "YNYYY", outcome: ["Regulator notification remains required", "section 22(3) determination"] },
  { id: "Uganda unresolved access does not establish blanket exemption", path: "/uganda-data-breach", answers: "N", outcome: ["Escalate and investigate promptly", "not a blanket exemption"] },
  { id: "NGS-S1 law firm payroll", path: "/ndpa-applicability", answers: "YYNN", outcome: ["The NDPA applies to this processing", "A law firm’s payroll is not exempt"] },
  { id: "NGS-S2 necessary litigation bundle", path: "/ndpa-applicability", answers: "YYNY", outcome: ["Sections 24, 25, 32 and 40 remain applicable", "Part VI rights are not exempted"] },
  { id: "NGS-S3 private anti-fraud claim", path: "/ndpa-applicability", answers: "YYNY", outcome: ["purpose-specific", "Ordinary corporate anti-fraud monitoring"] },
  { id: "NGS-S4 school administration", path: "/ndpa-applicability", answers: "YYNN", outcome: ["The NDPA applies", "School administration and all media processing are not automatically exempt"] },
  { id: "NGS-S5 conditional private address book", path: "/ndpa-applicability", answers: "YYY", outcome: ["conditional personal or household exclusion may apply", "privacy proviso"] },
  { id: "NGS-S6 overseas service for a person in Nigeria", path: "/ndpa-applicability", answers: "YNYNN", outcome: ["The NDPA applies to this processing"] },
  { id: "NGL-S1 mandatory employee monitoring cannot assume consent", path: "/nigeria-lawful-basis", answers: "NNNNNN", outcome: ["No lawful basis has been established", "not an automatic fallback"] },
  { id: "NGL-S2 necessary delivery data", path: "/nigeria-lawful-basis", answers: "NYY", outcome: ["Contractual Necessity may be available", "not unrelated advertising"] },
  { id: "NGL-S3 optional newsletter", path: "/nigeria-lawful-basis", answers: "NNNNNY", outcome: ["Consent may be available only if", "separate opt-in", "GAID article 18"] },
  { id: "NGL-S4 emergency assistance", path: "/nigeria-lawful-basis", answers: "NNYY", outcome: ["Vital Interests may be available", "urgent medical assistance"] },
  { id: "NGL-S5 no established basis", path: "/nigeria-lawful-basis", answers: "NNNNN?", outcome: ["No lawful basis has been established", "Resolve whether valid consent is possible"] },
  { id: "NGL-S6 occupational health additional condition", path: "/nigeria-lawful-basis", answers: "YY", outcome: ["Legal Obligation may be available", "sections 30, 31, 37 and 41–43 independently", "occupational health records"] },
  { id: "NGL-S7 failed reasonable expectations/LIA", path: "/nigeria-lawful-basis", answers: "NNNNYNN", outcome: ["No lawful basis has been established"], absent: ["Legitimate Interests may be available"] },
  { id: "RWD-S1 17-year-old pupils", path: "/rwanda-dpia", answers: "NNNNY", outcome: ["A Rwanda DPIA trigger is identified", "does not exclude 16- or 17-year-olds"] },
  { id: "RWD-S2 small practice must still assess other high risk", path: "/rwanda-dpia", answers: "NNNNNNY", outcome: ["A Rwanda DPIA trigger is identified", "single doctor’s patient records"] },
  { id: "RWD-S3 large-scale systematic public CCTV", path: "/rwanda-dpia", answers: "NNY", outcome: ["A Rwanda DPIA trigger is identified"] },
  { id: "RWD-S4 uncertain common assessment", path: "/rwanda-dpia", answers: "?", outcome: ["whether one assessment can cover several operations", "not reproduce Nigeria’s"] },
  { id: "RWD-S5 consequential systematic automated scoring", path: "/rwanda-dpia", answers: "Y", outcome: ["A Rwanda DPIA trigger is identified", "controller is primarily responsible"] },
  { id: "Rwanda no trigger retains general screening rationale", path: "/rwanda-dpia", answers: "NNNNNNN", outcome: ["No DPIA trigger identified on the documented facts", "not an exhaustive safe list"] },
  { id: "GHR-S1 foreign controller uses Ghana processor", path: "/ghana-registration", answers: "YNYNYN", outcome: ["Registration is required before in-scope controller processing"] },
  { id: "GHR-S2 foreign-origin transit only", path: "/ghana-registration", answers: "YY", outcome: ["transit-only excluded activity under section 45(4)"] },
  { id: "GHR-S3 employee-only in-scope controller", path: "/ghana-registration", answers: "YNYNYN", outcome: ["Do not treat employee-only data or small size as an exemption"] },
  { id: "GHR-S4 expired certificate", path: "/ghana-registration", answers: "YNYNYN", outcome: ["address an expired certificate", "before in-scope controller processing"] },
  { id: "GHR-S5 household/legal disclosure exemption claim", path: "/ghana-registration", answers: "YNYY", outcome: ["Registration exemption is unresolved", "do not automatically remove all obligations"] },
  { id: "GHR-S6 processor-only registration", path: "/ghana-registration", answers: "YNYNNYN", outcome: ["current DPC organisation guidance directs registration", "section 27 is framed as a controller registration duty"] },
  { id: "Ghana current controller registration", path: "/ghana-registration", answers: "YNYNYY", outcome: ["two-year renewal date", "within fourteen days"] },
];

for (const scenario of scenarios) {
  test(scenario.id, async ({ page }) => {
    await page.goto(scenario.path);
    for (const answer of scenario.answers) {
      await page.getByRole("button", { name: answer === "Y" ? "Yes" : answer === "N" ? "No" : "Not Sure", exact: true }).click();
    }
    const result = page.locator(".assessment-result");
    await expect(result).toBeVisible();
    for (const phrase of scenario.outcome) await expect(result).toContainText(phrase);
    for (const phrase of scenario.absent || []) await expect(result).not.toContainText(phrase);
    await expect(result).toContainText("Approved for use 2026-10-06 by Site owner");
    await expect(result.getByRole("link", { name: "Print or save as PDF" })).toHaveCount(0);
    await expect(result.getByRole("button", { name: "Print or save as PDF" })).toBeVisible();
  });
}

for (const path of ["/nigeria-dpia", "/annual-audit", "/ghana-registration", "/rwanda-data-breach"]) {
  test(`reviewed guidance is accessible, printable and reversible: ${path}`, async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(path);
    await page.getByRole("button", { name: "Not Sure", exact: true }).click();
    const result = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
    expect(result.violations).toEqual([]);
    expect(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth)).toBe(false);
    await page.emulateMedia({ media: "print" });
    await expect(page.getByRole("heading", { name: "Conditions and practical guidance" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Sources and review status" })).toHaveCount(1);
    await expect(page.locator(".assessment-result")).toContainText("Version:");
    await page.emulateMedia({ media: "screen" });
    await page.getByRole("button", { name: "Change answer 1", exact: true }).click();
    await expect(page.getByRole("heading", { name: "Conditions and practical guidance" })).toHaveCount(0);
    await expect(page.getByText("Step 1 · 0 answered")).toBeVisible();
  });
}

test("Nigeria's express DPIA list retains every category and no universal scale threshold", async ({ page }) => {
  await page.goto("/nigeria-dpia");
  await page.getByRole("button", { name: "Yes", exact: true }).click();
  await page.getByRole("button", { name: "No", exact: true }).click();
  for (const trigger of ["Evaluation or scoring", "Automated decisions", "Systematic monitoring", "Sensitive or highly personal", "Vulnerable data subjects", "Innovative technological", "Software development", "Financial services", "Healthcare services", "E-commerce services", "Cameras", "legal instrument or policy", "Student or pupil", "Hospitality services", "Cross-border transfers"]) {
    await expect(page.locator(".assessment-card")).toContainText(trigger);
  }
});

test("approval is limited to researched modules and newly available modules enter the sitemap", async ({ page, request }) => {
  await page.goto("/ghana-applicability");
  await page.getByRole("button", { name: "Yes", exact: true }).click();
  await expect(page.getByText("Legal review date: not yet recorded.")).toBeVisible();
  const sitemap = await (await request.get("/sitemap.xml")).text();
  expect(sitemap).toContain("https://privacyguide.africa/nigeria-dpia");
  expect(sitemap).toContain("https://privacyguide.africa/annual-audit");
});
