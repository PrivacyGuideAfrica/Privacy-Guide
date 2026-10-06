# Welcome to your Lovable project

## Development checks

Use npm and `package-lock.json` for reproducible installs. The current deployment
uses Node 18; the cloud environment and CI use Node 18.20.8 / npm 10.8.2.

```sh
npm ci
npm run dev
npm run lint
npm run typecheck
npx playwright install chromium
npm test
```

`npm test` builds the production site and runs Chromium regression tests against
a local preview on port 4175. Tests cover country routing, unavailable modules,
assessment branching, reviewing and changing results, resets, custom outcomes,
and responsive layouts. External analytics and editing scripts are blocked in
tests so the checks exercise the app independently of those services.

On Linux, use `npx playwright install --with-deps chromium` if browser system
dependencies are missing. To use an existing Chromium installation, set
`PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH=/usr/bin/chromium` when running `npm test`.
GitHub Actions runs lint, TypeScript, the production build, and browser tests on
pull requests and pushes to main. Failed browser traces are saved as artifacts.

Nigeria's DPIA and annual audit assessments are unavailable pending content review.
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
