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

## Discovery-page refinements

Country cards use a pale blue frosted surface to separate them from the white page. The how-it-works section has a blue-to-indigo background with a quiet contour pattern. UlinziQuest is restored after that section with a direct link to the existing game; no navbar action is added.

All five country module landing pages pair their illustration with a geographic outline and introductory description. Country outlines are derived from the public-domain Natural Earth 1:110m Admin 0 countries dataset (https://www.naturalearthdata.com/about/terms-of-use/), retrieved from https://github.com/nvkelso/natural-earth-vector/blob/master/geojson/ne_110m_admin_0_countries.geojson. They are decorative locator silhouettes, not legal boundary guidance.

Module cards provide a faint glass sheen, border and shadow on hover and keyboard focus. Reduced-motion preferences disable the lift. Actual question screens and legal decision data are unchanged.

## Assessment and country-hero refinements

Country introductions now sit on a continuous pale blue gradient. City scenes fade at their edges, and the existing country silhouettes mask a crop of the homepage Africa artwork to share its layered blue treatment. The how-it-works background uses a smooth blue/lavender gradient without the former contour rings or horizontal borders.

Assessment navigation uses a tinted panel, shared topic icons, a clear active item and decorative Africa artwork. A mobile disclosure exposes the same country modules, closes on navigation, and uses the application's existing main-content focus behaviour. At wide desktop sizes, answer review and source disclosures sit beside the question card. The interface keeps click-to-advance answers, one step heading, and a separate labelled restart action.

All 68 questions across the 11 research-backed modules now have explanatory help with examples or factual context; the prior reference text is retained in a separate `helpReference` field. Selected older modules also clarify basic concepts, including personal data and processing. A shared click/touch/keyboard popover exposes this help, including the previously hidden Rwanda representative explanations and the custom Uganda controls. Reviewed decision trees, question wording, result messages and guidance paragraphs are unchanged.

Public reports and source panels omit internal approval dates, reviewer names, packet versions and research-approval paragraphs. The catalogue retains that metadata for internal checks. Public citations, regulator resources and the guidance-feedback link remain under “Sources and legal references.” Next steps precede answer review in shared reports, and the default completion icon is neutral.

Validation: 112 browser scenarios verified across the full run and targeted rerun after updating the step-label expectation and aligning mobile navigation with existing focus behaviour. The country-route smoke check now waits for lazy-loaded module links before collecting them. Type checking, guidance validation and production build pass; lint retains six existing Fast Refresh warnings with no errors. Additional WCAG A/AA scans on 11 routes at 1440px, 390px and 320px report no violations or horizontal overflow. A two-page sample report PDF retains outcomes, answers and sources and contains none of the removed approval wording.
