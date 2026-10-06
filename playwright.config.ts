import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  workers: process.env.CI ? 2 : undefined,
  retries: 0,
  reporter: "list",
  use: {
    baseURL: "http://127.0.0.1:4175",
    browserName: "chromium",
    launchOptions: {
      executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH || undefined,
    },
    trace: "retain-on-failure",
  },
  webServer: {
    command: "npm run preview -- --host 127.0.0.1 --port 4175 --strictPort",
    url: "http://127.0.0.1:4175",
    reuseExistingServer: false,
  },
});
