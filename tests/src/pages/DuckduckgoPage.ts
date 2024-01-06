import { Page, Locator, expect } from '@playwright/test'

export default class DuckduckgoPage {
    public static readonly title = /DuckDuckGo/
    private static readonly url = 'https://duckduckgo.com/'

    private readonly page: Page

    private readonly inputSearchLocator: Locator
    private readonly btnSearchLocator: Locator
    private readonly resultSearchLocator: Locator

    constructor(page: Page) {
        this.page = page

        this.inputSearchLocator = page.locator('#searchbox_input')
        this.btnSearchLocator = page.locator('#searchbox_homepage button[type="submit"]')
        this.resultSearchLocator = page.locator('#react-layout [data-testid="mainline"]')
    }

    /**
    * Go to the home page.
    */
    async goto() {
        await this.page.goto(DuckduckgoPage.url)
    }

    /**
    * Fills the search input with a given text.
    *
    * @param {string} text: Text to be entered.
    */
    async typeSearchInput(text: string) {
        await this.inputSearchLocator.fill(text)
    }

    /**
    * Clicks the search button.
    */
    async search() {
        await this.btnSearchLocator.click()
    }

    /**
    * Gets the results as text.
    */
    async resultContain(text: string) {
        await expect(this.resultSearchLocator).toContainText(text)
    }
}
