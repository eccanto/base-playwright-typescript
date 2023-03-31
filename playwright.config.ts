import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests',
  reporter: [['html', { open: 'never' }]],
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
  workers: 4,
})
