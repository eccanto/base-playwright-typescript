import { test, expect } from '@playwright/test'
import HomePage from './src/pages/duckduckgo/HomePage'
import SearchPage from './src/pages/duckduckgo/SearchPage'

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
            const homePage = new HomePage(page)
            await homePage.open()

            await expect(page).toHaveTitle(/DuckDuckGo/)

            await homePage.typeSearchInput(searchTest)
            await homePage.search()

            const searchPage = new SearchPage(page)
            await searchPage.resultContain(expectedResult)
        })
    }
})
