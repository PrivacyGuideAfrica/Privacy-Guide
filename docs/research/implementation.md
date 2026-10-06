# Approved research implementation — 6 October 2026

The site owner explicitly authorised the supplied research for use on the platform: “research findings have been uploaded to the working folder. consider it approved for use on the platform”. The subsequently attached file is **African_Privacy_Modules_Research_Findings_2026-10-06.md**. This conversation approval supersedes its older “UNAPPROVED”/“Pending” labels and suggested additional approval procedure. No further approval of the same findings is inferred to be necessary.

The [original research](African_Privacy_Modules_Research_Findings_2026-10-06.md) is retained byte-for-byte. SHA-256: `02002ee2b654727ae7ecf3eeabcf8effe499101fb277c90af6d18b9977e37d51`. Its research version is 0.1, dated 6 October 2026. The baseline before implementation is commit `776c5eff856885bf3e973b61056c8d992a838eae`.

Approval is attributed publicly to the role **Site owner**, not an invented named lawyer or reviewer. Public packet versions identify the particular approved guidance. Other country modules retain empty review metadata. The research's source register supplies official URLs, sections and reported retrieval dates; this implementation does not claim a fresh independent retrieval of every primary instrument.

## Implemented scope and exact content inventory

Each linked definition contains the complete question text, source/provision tooltip, Yes/No/Not Sure destinations, every terminal outcome, practical guidance and reporting links. These are the definitions used by the live assessment, not a separate summary that can drift from it. Catalog entries contain the packet's full citations and approval date. `npm run check:guidance` validates all graph paths and metadata before browser tests.

| Approved packet | Route | Complete definition | Research scenarios exercised |
| --- | --- | --- | --- |
| NG-DPIA-0.1 | `/nigeria-dpia` | [nigeriaDpia.ts](../../src/data/reviewed/nigeriaDpia.ts) | NGD-S1–S5; residual high risk; uncertain express trigger |
| NG-CAR-0.1 | `/annual-audit` | [nigeriaAudit.ts](../../src/data/reviewed/nigeriaAudit.ts) | NGC-S1–S5; exact establishment date; later annual cycle; expired OHL renewal; non-major importance |
| NG-BREACH-0.1 | `/data-breach` | [nigeriaBreach.ts](../../src/data/reviewed/nigeriaBreach.ts) | B-S1/S8; public communication; no ordinary risk trigger |
| RW-BREACH-0.1 | `/rwanda-data-breach` | [rwandaBreach.ts](../../src/data/reviewed/rwandaBreach.ts) | B-S1/S2/S8; article 45 exception |
| UG-BREACH-0.1 | `/uganda-data-breach` | [ugandaBreach.ts](../../src/data/reviewed/ugandaBreach.ts) | B-S3; immediate all-role duty; unresolved access/acquisition |
| GH-BREACH-0.1 | `/ghana-data-breach` | [ghanaBreach.ts](../../src/data/reviewed/ghanaBreach.ts) | B-S4/S6/S7; authorised subject-notice delay |
| ZA-BREACH-0.1 | `/south-africa-data-breach` | [southAfricaBreach.ts](../../src/data/reviewed/southAfricaBreach.ts) | B-S4/S5/S6/S8; authorised subject-notice delay |
| NG-SCOPE-0.1 | `/ndpa-applicability` | [nigeriaScope.ts](../../src/data/reviewed/nigeriaScope.ts) | NGS-S1–S6 |
| NG-BASIS-0.1 | `/nigeria-lawful-basis` | [nigeriaBasis.ts](../../src/data/reviewed/nigeriaBasis.ts) | NGL-S1–S7; all six conditional bases; prior LIA |
| RW-DPIA-0.1 | `/rwanda-dpia` | [rwandaDpia.ts](../../src/data/reviewed/rwandaDpia.ts) | RWD-S1–S5; documented no-trigger result |
| GH-REG-0.1 | `/ghana-registration` | [ghanaRegistration.ts](../../src/data/reviewed/ghanaRegistration.ts) | GHR-S1–S6; valid current registration |

These 11 packet versions refer to the attached research applied to the complete definitions above. Source distinctions (Act, regulatory directive, guidance, reporting form, operational page or draft consultation) appear in the catalog citations. Statutory priority and stated interpretations remain explicit. The two previously unavailable Nigeria modules now have dedicated, available routes; the historic `/dpia-assessment` URL still redirects only to Rwanda.

## Baseline findings and implemented changes

The attached research did not have the repository. The comparisons below were made against the baseline source during implementation.

| Baseline text/behavior | Approved implementation |
| --- | --- |
| Nigeria DPIA route only rendered “This assessment is temporarily unavailable”. | Separate NDPA/GAID tree: all 15 article 28(3) categories, general high risk, filing and residual-risk consultation. No borrowed Rwanda criteria. |
| Unavailable annual audit's dormant code used “more than 1000” in six months, “more than 2000” in twelve months, and “March 15th each year”. | Confirm UHL/EHL/OHL before filing advice; OHL renewal qualification; 31 March for pre-12-June-2023 establishment; 15 months after later establishment for first CAR. Removed dormant obsolete audit components. |
| Nigeria breach flow made sensitive data/count and ability to fix the incident determine high risk; some results said “No notification is necessary unless the situation changes.” | Processor duty on awareness; controller ordinary-risk NDPC reporting; separate high-risk subject communication; qualified no-trigger result and immediate-containment caveat. |
| Rwanda asked whether a detailed 72-hour report could be submitted and added notification guidance separately after all results. | Initial 48-hour authority notice preserved in every controller result; separate 72-hour report; explicit report-clock interpretation; high risk only controls subject communication. |
| Uganda said “contain the breach and understand its impact before you report.” | Immediate PDPO duty for collectors, controllers and processors; containment and investigation run alongside reporting. Official Form 7/service links replace nonfunctional buttons. |
| Ghana said “This does not appear to be a reportable data breach” on No and did not preserve reporting in every system-restoration outcome. | Reasonable-grounds threshold; both recipients as soon as reasonably practicable; broader loss/damage guidance; narrowly authorised subject delay. |
| South Africa's No-to-identifiability result said “formal notification obligations under POPIA do not apply.” | Role-specific operator/reporting flow. Inability to establish subjects' identity qualifies subject notice only, preserving Regulator reporting. Distinguishes broader regulator guidance. |
| Nigeria's exemption branch concluded “The NDPA does not apply to your processing activities”. Domestic Yes branches bypassed exemptions. | Territorial scope followed by household and purpose-specific exemption assessment for all in-scope activity. Section 3(2) retained duties and Part VI rights remain explicit. |
| Nigeria lawful-basis No at question 9 or Yes at question 10 automatically selected “Consent”. | Prior LIA confirmation; a separate valid-consent question; No/Not Sure cannot produce an automatic consent basis. Special-processing conditions remain independent. |
| Rwanda DPIA answered “You might not need a DPIA” before screening listed activities and overgeneralised automated processing/public monitoring. | Screen complete article 38 conditions and NCSA guidance first, then general high risk. Under-16 consent is not a DPIA threshold; children aged 16/17 are included in vulnerability analysis. Routine joins and standalone transfers are not invented automatic Rwanda triggers. |
| Ghana's one controller question produced “Registration Not Required” for No. | Personal data, scope, transit, exemption, controller/processor role and registration validity assessed; processor instruction attributed to DPC guidance. Two-year renewal and fourteen-day changes retained. |

All changed assessments use the existing answer-history, edit, reset and browser-print behavior. A small shared reviewed-assessment presentation renders the approved conditional guidance with the result. Generic DPIA instructions are suppressed for these reviewed modules so they cannot reintroduce another jurisdiction's consultation formula. Old unreferenced guidance components/data were removed; unrelated modules remain unchanged.

## Uncertainties preserved for visitors

- **Nigeria DPIA:** four-/six-month historic periods from issuance, including the tension with the reported general commencement date. No new grace period is generated. Claimed exemptions require their exact statutory conditions.
- **Nigeria CAR:** sector/non-volume factors, volume-only boundaries at exactly 1,000 and 5,000, establishment exactly on 12 June 2023, later annual filing cycles, and entity-specific directions. The assessment does not manufacture numeric classification or a universal extension.
- **Rwanda breach:** the 72-hour report clock uses awareness of the same breach as an explicitly identified operational interpretation, not 72 hours after the initial notice.
- **Ghana/South Africa breach:** statutory access/acquisition wording is distinguished from broader regulator loss/damage/all-compromises guidance. Uncertain exfiltration never produces a blanket exemption.
- **Uganda:** regulation wording on occurrence and the Act's belief trigger are both explained; authenticated submission usability is not claimed to have been tested.
- **Rwanda DPIA:** consultation under NCSA guidance is not presented as Nigeria's residual-high-risk statutory formula. Draft 2026 regulations are not presented as enacted law.
- **Ghana registration:** controller statute and processor guidance remain distinct. The official organisation landing page is used; the report did not supply the exact Microsoft Forms URL, so none is invented.

## Notices

NOTICE-0.1 is a factual-verification checklist and conditional template, not a replacement for the owner-confirmed notices. The existing approved Netlify/Umami/support-email facts and explicit provider uncertainties remain. The research follow-up adds an accurate description of browser printing and preservation of third-party rights. It does not insert bracketed placeholders, invent operator identity or assert verified retention/transfer settings. See [privacy review](../privacy-review.md).

## Verification

The graph check validates 11 packets, 68 questions and 141 terminal branches: IDs, target existence, reachability, absence of cycles, nonempty outcomes, an uncertainty path on every question, sources and matching approval metadata. Browser scenarios are defined independently of the module data in [research.spec.ts](../../tests/research.spec.ts); earlier routing and navigation cases were updated for the deliberately changed legal behavior. Accessibility, print content, answer editing, country navigation, module availability, metadata and sitemap inclusion are also checked.

Validation on 6 October 2026: production build and type checks passed; lint has only the six existing Fast Refresh warnings. The full 104-case browser run passed 103 cases and identified a missing Ghana delay clarification; after adding it, all 12 affected Ghana cases passed. The guidance graph check passed and initial JavaScript remains within its bundle budget.

Tests verify software behavior against the approved research; they do not independently establish current law or vendor-account configuration. No notification forms are submitted and no regulator is contacted during testing.
