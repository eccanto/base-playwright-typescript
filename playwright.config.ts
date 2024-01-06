import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
    testDir: './tests',
    reporter: [['html', { open: 'never' }]],
    projects: [
        {
            name: 'Google Chrome',
            use: { ...devices['Desktop Chrome'], channel: 'chrome' },
        },
        {
            name: 'Microsoft Edge',
            use: { ...devices['Desktop Edge'], channel: 'msedge' },
        },
    ],
    workers: 4,
})
