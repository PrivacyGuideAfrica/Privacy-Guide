# Privacy notice: owner approval and follow-up

Status: approved by the site owner on 6 October 2026. The owner stated, “privacy review is approved, w will proceed as is”. Approval covers the current privacy notice and assessment-copying permission, including the wording about unverified provider settings. It authorises publication as written; it does not establish a completed provider review, configure provider accounts, or verify retention enforcement.

## Owner-confirmed facts and instructions

| Topic | Owner's answer | Approved treatment |
| --- | --- | --- |
| Hosting | Netlify is the active host. | Names Netlify. |
| Technical and analytics retention | Set retention to three months because processing is minimal. | States a maximum three-month policy for data under the operator's control, with an explicit qualification that provider deletion settings are still being checked. |
| Umami reports | Administrators receive only country and device/browser information, such as Chrome or Safari on macOS. | Describes administrator-visible reports; does not infer the provider's collection fields or identification behavior from the dashboard. |
| Support email | Access only by site administrators; retention one year. | States both separately from the three-month technical-data policy. |
| Contact | support@privacyguide.africa confirmed. | Retains this address for privacy requests. |
| Legal basis | Legitimate interest. | Proposes purposes for that basis, a necessity/balancing explanation, and a right to object, qualified by applicable law. |
| Assessment copies | Visitors may print and retain results. | Expressly permits printing, saving as PDF and retention for personal or internal organisational compliance records. |

The owner describes personal-data processing as minimal apart from contact emails. That does not by itself establish that hosting or analytics processes no personal data: network requests can convey IP addresses and other technical information.

## Approved wording and substantive changes

The approved notice is in `src/pages/PrivacyNotice.tsx`; the approved results-copying permission is in `src/pages/LegalNotice.tsx`. Publication status must be verified separately from this approval record. Approval of these notices does not approve the separate country-assessment guidance under review in `docs/content-review.md`.

| Previous wording | Approved treatment |
| --- | --- |
| “we don't collect personal data unless you choose to share it” | Explains assessment state, support messages and technical requests to Netlify; acknowledges that technical information can be personal data. |
| “automatically deleted after a short time” | “Our retention policy for technical and analytics data under our control is a maximum of three months.” Support emails have a separate one-year period. The notice expressly says provider deletion has not yet been confirmed. |
| Umami “doesn't collect personal data” and respects privacy “100%” | Reports show country and device/browser/OS information, without names or email addresses; provider-side processing remains to be verified. |
| Blanket rights including withdrawing consent | Rights are qualified by applicable law and processing circumstances; includes objection to legitimate-interest processing and complaints to the relevant authority. Removes consent withdrawal because consent is not the proposed basis. |
| “No Cookies” and all third parties collect no personally identifiable information | Removes unverified blanket assurances; no replacement claim about deployed cookies or visitor identification. |
| Guaranteed strong international-transfer protections | Explicitly identifies processing locations and safeguards as awaiting confirmation. |
| Permission required even to save or copy a result | “You may print, save as PDF, and retain your assessment results for your personal records or your organisation’s internal compliance records without requesting permission.” Other reuse remains subject to the notice and applicable law. |

## Outstanding operational verification

The owner authorised proceeding with the current wording despite these open items. Retain them as follow-up work rather than treating approval as evidence that they are resolved.

1. **Operator identity and applicable law:** The follow-up response confirmed the support address but did not identify the responsible person or legal entity. The notice uses the existing Privacy Guide Africa brand without inventing a registered entity or address. Confirm the operator's legal name, relevant location/contact details and applicable law for a future notice update.
2. **Netlify:** Confirm actual log fields, enabled logging/analytics features, processing locations, access, retention and deletion controls for the active account. A three-month policy does not change Netlify's settings or contracts.
3. **Umami:** Confirm account configuration and actual request payloads, stored fields, visitor identifiers, cookies/storage, opt-out behavior, retention and deletion controls. Confirm processing locations and any international-transfer arrangements. Dashboard visibility alone cannot establish these facts.
4. **Support mailbox:** Confirm the email provider, storage/processing locations, deletion mechanism (including trash/backups where applicable), and when the one-year period starts. The notice does not invent a last-contact or receipt-date rule.
5. **Legitimate interests:** Review the purposes, necessity and balancing assessment for hosting, analytics and enquiries against the applicable law. The owner's preferred basis is not independent legal verification of its suitability for every processing activity.

Once account evidence is available, configure retention where supported, record the actual behavior and any provider limits, and replace the notice's pending-verification wording with verified details. Retain the agreed three-month technical-data policy and one-year support-email policy as separate requirements. No provider setting has been changed in this work.

## Repository observations and verification limits

- `index.html` loads Umami's remote script from `cloud.umami.is` with the existing website identifier. Its deployed configuration, payloads and retention are not available in the repository.
- The GPT Engineer editing script was previously included in public HTML. The current implementation removes it from production HTML; the local development tagging plugin remains development-only.
- Shared assessment answers are held in React state. Review and print features add no answer persistence, query-string parameters, telemetry or answer-bearing email links. Printing uses the browser print dialog.
- Custom assessment pages have their own React state and result views.
- An unused sidebar UI component contains cookie persistence. It does not establish that the deployed site sets this cookie, but blanket site-wide assurances require checking actual runtime behavior.
- The owner confirms Netlify hosting. `netlify.toml` does not establish account settings, processing regions, subprocessors or contracts.
- Browser regression tests intentionally block external services. They do not establish third-party behavior or legal compliance. Inspect the deployed site with integrations enabled and relevant opt-out states when access is available.
- Official regulator source retrieval was blocked by the environment's network policy during the initial research (see `docs/content-review.md`). No jurisdiction-specific legal conclusions have been marked as independently verified.

## Approved research follow-up — 6 October 2026

The owner subsequently approved the supplied African privacy modules research for platform use. Its notice checklist supplements, rather than replaces, the earlier operator facts and approval. The notice now explains that browser printing/PDF copies can include answers and results, and the legal notice preserves third-party rights without claiming exclusive rights over statutes. The research supplies no new provider-account evidence; the open operational items above remain unresolved.
