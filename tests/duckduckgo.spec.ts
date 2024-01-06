import { test, expect } from '@playwright/test'
import DuckduckgoPage from './src/pages/DuckduckgoPage'

test.describe('Search engine on the Duckduckgo website @search', () => {
    const testCases = [
        {
            searchTest: 'smoke test',
            expectedResult: 'What is Smoke Testing?',
        },
        {
            searchTest: 'cypress',
            expectedResult: 'cypress.io',
        },
        {
            searchTest: 'javascript',
            expectedResult: 'JavaScript',
        },
    ]

    for (const { searchTest, expectedResult } of testCases) {
        test(`Using the search input with the text "${searchTest}" @smoke`, async ({ page }) => {
            const duckduckGoPage = new DuckduckgoPage(page)

            await duckduckGoPage.goto()

            await expect(page).toHaveTitle(DuckduckgoPage.title)

            await duckduckGoPage.typeSearchInput(searchTest)
            await duckduckGoPage.search()

            const results = await duckduckGoPage.resultContain(expectedResult)
        })
    }
})
