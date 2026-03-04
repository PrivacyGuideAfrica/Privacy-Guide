

## Plan: Add Ghana as a New Country with 5 Assessment Modules

This adds Ghana with the Data Protection Act, 2012 (Act 843) and five assessment modules.

### Files to Create (5 new page files):

**1. `src/pages/GhanaApplicability.tsx`**
- Uses `AssessmentInterface` pattern (like SouthAfricaApplicability)
- 3 questions: established in Ghana → equipment in Ghana → data originates from Ghana
- Result 1: Law applies. Result 2: Law does not directly apply

**2. `src/pages/GhanaRegistration.tsx`**
- Custom component pattern (like UgandaRegistration) with step-based flow
- Q1: Do you intend to process personal data as a Data Controller?
- Yes → Result with detailed registration info (identity, data description, purpose, recipients, international transfers, security measures, fee, certificate validity/renewal, penalties)
- No → Registration not required

**3. `src/pages/GhanaDataSubjectRights.tsx`**
- Uses `AssessmentInterface` pattern with 5 sequential yes/no questions:
  - Q1: Access/information rights → Q2: Correction/erasure → Q3: Stop processing causing damage → Q4: Direct marketing opt-out → Q5: Automated decision review
  - Any "No" → Result 1 (needs improvement). All "Yes" → Result 2 (good practices)

**4. `src/pages/GhanaDataBreach.tsx`**
- Uses `AssessmentInterface` pattern (like UgandaDataBreach)
- Q1: Has data been accessed by unauthorized person? No → Not reportable
- Q2: Steps to restore system integrity? Yes → Must report (with detailed notification guidance). No → Must restore immediately

**5. `src/pages/GhanaDPO.tsx`**
- Uses `AssessmentInterface` pattern (like UgandaDPO)
- Q1: Processing likely to cause significant problems/distress? Yes → Result 1 (recommended)
- Q2: Do you intend to appoint a DPO voluntarily? Yes → Result 1. No → Result 2 (not mandatory but beneficial)
- Includes DPO role/responsibilities guidance cards

### Files to Modify (4 existing files):

**6. `src/components/CountrySelector.tsx`**
- Move Ghana from `comingSoonCountries` to live countries
- Set `isLive: true`, `isNew: true`
- Update description to "Data Protection Act, 2012 (Act 843)"
- Add modules list

**7. `src/pages/CountryPage.tsx`**
- Add `ghana` entry to `countryData` with name, description, flag emoji 🇬🇭, law name "Data Protection Act, 2012 (Act 843)", law year "2012"

**8. `src/components/AssessmentModules.tsx`**
- Add `ghanaModules` array with 5 modules (Applicability, Registration, Data Subject Rights, Data Breach, DPO)
- Update the country selection logic to include `ghana`

**9. `src/App.tsx`**
- Import all 5 Ghana page components
- Add 5 routes: `/ghana-applicability`, `/ghana-registration`, `/ghana-data-subject-rights`, `/ghana-data-breach`, `/ghana-dpo`

### Technical Notes
- All pages use the existing `Layout` component wrapper
- Assessment pages follow established patterns using `AssessmentInterface` or custom step-based flows
- Back links point to `/country/ghana`
- Each module includes tooltips, result messages, and next-action guidance consistent with existing modules

