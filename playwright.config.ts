import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  timeout: 30000,
  testDir: "./tests",
  retries: 2,
  projects: [
    {
      name: "firefox",
      use: {
        ...devices["Desktop Firefox"],
      },
    },
    {
      name: "webkit",
      use: {
        ...devices["Desktop Safari"],
      },
    },
    {
      name: "Google Chrome",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
  ],

  use: {
    baseURL: "http://localhost:3000/",
    headless: false,
    viewport: { width: 1280, height: 720 },
    screenshot: "on",
    video: "retain-on-failure",
  },
});
