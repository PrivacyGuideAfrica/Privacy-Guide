# Welcome to your Lovable project

## Development checks

Use npm and `package-lock.json` for reproducible installs. Local development, CI, and deployment use Node 24.19.0, pinned in `.nvmrc`.
Use `nvm use` when working outside the prepared cloud environment.

```sh
npm ci
npm run dev
npm run lint
npm run typecheck
npx playwright install chromium
npm test
```

`npm test` builds the production site and runs Chromium regression tests against
a local preview on port 4175. Tests cover country routing, approved country-specific guidance,
assessment branching, reviewing and changing results, resets, custom outcomes,
and responsive layouts. External analytics and editing scripts are blocked in
tests so the checks exercise the app independently of those services.

On Linux, use `npx playwright install --with-deps chromium` if browser system
dependencies are missing. To use an existing Chromium installation, set
`PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH=/usr/bin/chromium` when running `npm test`.
GitHub Actions runs lint, TypeScript, the production build, and browser tests on
pull requests and pushes to main. Failed browser traces are saved as artifacts.

Nigeria’s DPIA and annual CAR assessments are available with the owner-approved
research dated 6 October 2026. See [research implementation](docs/research/implementation.md)
for the approved scope, source provenance, remaining uncertainties and scenario coverage.
Rwanda's DPIA is at `/rwanda-dpia`; the old `/dpia-assessment` URL redirects there.
New or revised legal guidance should be reviewed before enabling these modules.

## Project info

**URL**: https://lovable.dev/projects/202e958d-8a10-4014-9aa7-15f8137dd546

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/202e958d-8a10-4014-9aa7-15f8137dd546) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/202e958d-8a10-4014-9aa7-15f8137dd546) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain then we recommend using Netlify. Visit our docs for more details: [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/)

## Site structure and content review

`src/data/catalog.ts` owns the country/module directory, availability, regulator
resource links and legal-review metadata. The shared layout provides one main
landmark, breadcrumbs, navigation and a footer across routes. Assessment pages
load on demand; build-time scripts generate route-specific HTML metadata and a
sitemap, and enforce an initial JavaScript budget. This generates metadata for
link previews; it is not server rendering of the complete application content.

Shared guided assessments include answer review and editing, print/save-as-PDF,
next steps and reference/review information. Custom assessment pages retain their
own result interactions and also have shared printing/reference controls. Review
status is explicitly unknown for modules outside the approved research; regulator links are
not represented as verified module-level citations.

See [content-review.md](docs/content-review.md) for the initial research queue and
owner approval process, and [privacy-review.md](docs/privacy-review.md) for the
privacy-notice approval and outstanding provider verification. New legal conclusions
must be approved by the site owner before publishing.

The browser suite includes axe checks for WCAG A/AA rules on the core journey,
keyboard focus, reduced motion, enlarged text, printing, metadata and assessment
regressions. These checks do not replace a complete accessibility audit or tests
with assistive-technology users.

`npm run check:guidance` checks approved question graphs, terminal outcomes and source
metadata. It also runs before the browser suite. These checks validate implementation,
not the underlying law.
