# Content review and approval

The site owner approves substantive legal guidance. No approval is inferred from a code review or a passing test. No legal review dates or named reviewers have been invented in the catalog.

## Initial research brief — awaiting primary-source access

This is a review of the existing repository, not a completed current-law verification. On 6 October 2026, the environment proxy denied requests to all five regulator websites with HTTP 403. Required network additions have been saved in the environment draft. The following questions define the first research and approval batch once access is enabled.

| Priority | Existing guidance to examine | Questions for primary-source research | Intended deliverable for owner approval |
| --- | --- | --- | --- |
| 1 | Nigeria DPIA (`/nigeria-dpia`, unavailable) | What provisions and current NDPC instruments set the DPIA triggers, exceptions, consultation duties, and required documentation? | A Nigeria-specific decision tree with exact clauses, dated sources, and worked scenarios. The Rwanda tree must not be reused as Nigeria guidance. |
| 1 | Nigeria annual audit (`/annual-audit`, unavailable) | Which entities currently file compliance audit returns, under what classification, deadlines, and instruments? | Revised questions and outcomes with current filing requirements and transition rules. |
| 1 | Breach modules for all five countries | What triggers notification, who must notify whom, how is the clock defined, what exemptions apply, and what is the current notification channel? | Country-by-country source matrix; proposed wording for each terminal outcome and its timing conditions. |
| 2 | Nigeria applicability (`src/pages/NDPAApplicability.tsx`) | Are the current categorical exemption outcomes supported in full, or do exceptions qualify individual obligations rather than the whole law? | Clause-level review of each exemption branch, with proposed narrower wording where supported. |
| 2 | Nigeria lawful basis (`src/pages/NigeriaLawfulBasis.tsx`) | Does each outcome accurately communicate the conditions for the basis, and does the default consent outcome overstate suitability? | Source-backed alternatives and examples for owner approval; code behavior remains unchanged meanwhile. |
| 2 | Rwanda DPIA (`src/data/dpiaQuestions.ts`) | Are each listed activity and age threshold grounded in the current law and regulator guidance? When is consultation required? | Annotated source references and candidate corrections for each activity/outcome. |
| 2 | Ghana registration (`src/pages/GhanaRegistration.tsx`) | Does the current two-outcome flow capture all applicable conditions and exceptions? | Reviewed registration scope, exceptions, and official filing links. |
| 3 | Privacy and legal notices | Do claims about collection, tracking, retention, transfers and copying match actual service configuration and the new print feature? | Owner approved the current notices for publication on 6 October 2026; operational verification remains open in `docs/privacy-review.md`. |

Research destinations (retrieval has not yet succeeded):

- Nigeria Data Protection Commission: https://ndpc.gov.ng/
- Rwanda Data Protection and Privacy Office: https://www.dpo.gov.rw/
- Uganda Personal Data Protection Office: https://www.pdpo.go.ug/
- Ghana Data Protection Commission: https://dataprotection.org.gh/
- South Africa Information Regulator: https://inforegulator.org.za/

These are regulator resource links, not evidence that every existing outcome has been validated. Published modules currently display that module-specific citations and legal review dates have not been recorded.

## Approval packet for each module

1. Record the primary instrument, official URL, provision/section, effective date, and retrieval date. Distinguish binding law from regulator guidance.
2. List every question and terminal outcome, with the source that supports it. Include exceptions, ambiguous cases, and examples; do not turn an uncertain conclusion into a definitive instruction.
3. Show the existing wording beside the proposed wording, explain the change, and identify any remaining uncertainty.
4. Ask the site owner to approve that specific packet. Record the approved version and their chosen public reviewer name, if any.
5. Add approved citations, `reviewedAt`, and `reviewer` to `src/data/catalog.ts`; change module availability only when its approved content and regression cases are implemented. Review fields must not imply approval of a newer, changed version.
6. Keep answer scenarios in tests linked to the reviewed outcomes. Tests validate software behavior, not the underlying law.

## Maintenance

Owner: site owner (approval role confirmed in this conversation; public reviewer name pending).

Proposed schedule for owner adoption: review each live module at least quarterly, and immediately after relevant legislative changes, regulator notices, or a credible correction report. Record the next review date in the approved packet; do not silently refresh a date without rechecking the content.

Visitors can report outdated guidance through the existing support email link. Feedback links include only the module and country, never assessment answers. The UI asks visitors to exclude personal or confidential incident information.
