

## Plan: Fix Ghana Module Issues

Four issues to address:

### 1. Add Ghana card to homepage (`src/pages/Index.tsx`)
- Add a Ghana card to the homepage grid (lines 105-183), positioned first to give it visibility
- Include the "NEW!" badge on the Ghana card
- Remove "NEW!" badges from South Africa and Uganda cards on the homepage

### 2. Remove "NEW!" from other countries on the countries page (`src/components/CountrySelector.tsx`)
- Set `isNew: false` for Uganda (line 45) and South Africa (line 54)
- Keep `isNew: true` only for Ghana (line 71)

### 3. Fix mobile text overflow on Registration module (`src/pages/GhanaRegistration.tsx`)
- The button text "Yes, I intend to process personal data as a Data Controller" and "No, I do not intend to process personal data as a Data Controller" overflows on mobile
- Add `whitespace-normal text-wrap break-words` classes to the Button elements (lines 153-166) so text wraps properly on small screens

### 4. Fix button alignment on Registration result page (`src/pages/GhanaRegistration.tsx`)
- The "Start New Assessment" and "Back to Ghana Modules" buttons (lines 101-108) use inline layout with `mr-4` which breaks on mobile
- Change the container div to use `flex flex-col sm:flex-row gap-4 items-center justify-center` instead of `text-center` with `mr-4`

### 5. Add Ghana module cross-links in AssessmentInterface (`src/components/shared/AssessmentInterface.tsx`)
- South Africa already has cross-module links via `renderSouthAfricanAssessmentLinks()`
- Add equivalent `ghanaModules` array and `renderGhanaAssessmentLinks()` function
- Detect Ghana assessments via `window.location.pathname.includes("ghana")`
- Render these links in the completion message alongside the existing South Africa ones

### Files to modify
- `src/pages/Index.tsx` -- add Ghana card, remove NEW from SA/Uganda
- `src/components/CountrySelector.tsx` -- only Ghana gets NEW badge
- `src/pages/GhanaRegistration.tsx` -- fix text overflow and button alignment
- `src/components/shared/AssessmentInterface.tsx` -- add Ghana cross-module links

