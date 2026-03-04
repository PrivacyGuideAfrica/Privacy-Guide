

## Plan: Scroll-to-Top + Tooltip Fix

### 1. Create a `ScrollToTop` component (`src/components/shared/ScrollToTop.tsx`)
- A small component that calls `window.scrollTo(0, 0)` on every route change using `useLocation` from react-router-dom and `useEffect`
- This is the standard pattern for React Router SPA scroll restoration

### 2. Add `ScrollToTop` to `src/App.tsx`
- Place `<ScrollToTop />` inside the `<BrowserRouter>` block, before `<Routes>`
- This ensures every page navigation scrolls to top

### 3. Fix tooltips in `AssessmentInterface` (`src/components/shared/AssessmentInterface.tsx`)
- The tooltips use `TooltipProvider` wrapping individual tooltips, but there's already a global `TooltipProvider` in `App.tsx`
- The issue is likely that on mobile/touch devices, Radix tooltips don't trigger on tap by default
- Fix: Add `delayDuration={0}` to the inner `TooltipProvider` instances and ensure the `TooltipTrigger` has `type="button"` and proper touch handling
- Alternatively, consider converting tooltips to use `Popover` (click-based) instead of `Tooltip` (hover-based) for better mobile support, since tooltips are hover-only and don't work on touch devices

### Technical detail
- Radix UI `Tooltip` is hover-only by design and does not support tap/click on mobile
- The proper fix for mobile is to either:
  - (a) Use `Popover` instead of `Tooltip` for the help icons, or
  - (b) Wrap `TooltipTrigger` in a clickable element with `onClick` that shows a toast/alert with the tooltip content
- Option (a) is cleanest — replace `Tooltip`/`TooltipTrigger`/`TooltipContent` with `Popover`/`PopoverTrigger`/`PopoverContent` for the `HelpCircle` icons in `AssessmentInterface` and `GhanaRegistration`

### Files to create
- `src/components/shared/ScrollToTop.tsx`

### Files to modify
- `src/App.tsx` — add ScrollToTop component
- `src/components/shared/AssessmentInterface.tsx` — change tooltip help icons to Popover for mobile support
- `src/pages/GhanaRegistration.tsx` — change tooltip to Popover for mobile support

