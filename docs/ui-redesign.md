# Luminous Editorial — local redesign

The selected direction combines the site's original blue identity and hero copy with more white space, Manrope headings, Source Sans 3 body text, consistent Lucide icons and restrained glass surfaces. Fonts and artwork are served locally. Font licenses are in `public/fonts`.

## Scope

- Shared responsive navigation with the existing Privacy Guide Africa logo, the original dark Resources/Connect footer and slogan, breadcrumbs and blue button styling.
- Homepage with the original headline, description and primary action; optimized Africa illustration and “Assess your context” checklist; country discovery; how-it-works section. Added promotional eyebrow slogans and the closing star icon have been removed following design review.
- Country directory and homepage cards with locally served country illustrations; module libraries with roomy cards, clear starting points and distinct topic icons.
- Assessment navigation, larger answer controls, collapsible in-progress answer review and source details.
- Results with a prominent print/PDF action, approved outcome text, guidance, editable answers and references.
- Privacy, legal notice and about pages with a document layout, section navigation and keyboard focus management.
- Custom assessments inherit the typography and layout. Progress controls have accessible names and values; custom rights request selection supports keyboard input.

Answers still advance when selected. The proposed select-then-continue mockup interaction is not implemented. The interface explains this with “Select an answer to continue.” No accounts, persistence, compliance scores or new legal claims are introduced.

## Content preservation

The country catalogue and reviewed legal decision data are unchanged. Existing privacy/legal-notice paragraphs and lists are retained verbatim; the redesign changes their layout. The original homepage hero copy is restored.

## Local review

Use Node 24, run `npm ci`, then `npm run dev -- --host 0.0.0.0 --port 5173`.

Review `/`, `/countries`, `/country/nigeria`, `/nigeria-lawful-basis`, `/privacy`, `/legal-notice` and `/about` at desktop and phone widths. In the Nigeria lawful-basis assessment, choose Yes twice to see a conditional legal-obligation result. Check previous/edit/reset, source links, mobile navigation and browser print/PDF. Custom assessment examples: `/uganda-registration`, `/uganda-data-subject-rights` and `/south-africa-data-subject-rights`.

Validation commands: `npm run typecheck`, `npm run lint`, `npm test`. In this cloud environment set `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH=/usr/bin/chromium` for tests.

This work is prepared on `design/luminous-blue` for review and local testing. Merging and production deployment follow design approval.

Validation completed: 109 browser tests passed, including five redesign checks; the final print regression passed after print-spacing adjustments. Type checks and the production build passed. Lint has no errors and six existing Fast Refresh warnings. Additional accessibility scans passed on nine representative routes at desktop and phone widths; all available assessments fit a 320px viewport without horizontal overflow.

Country-card scenes are generated editorial illustrations inspired by Lagos, Kigali, Kampala, Cape Town and Accra. They are decorative artwork, not documentary photographs. The original logo asset is reused without changing its artwork.
