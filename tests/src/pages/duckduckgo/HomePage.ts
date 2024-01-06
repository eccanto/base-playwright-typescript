import { Page } from '@playwright/test'

export default class HomePage {
    private readonly BASE_URL = 'https://duckduckgo.com/'

    private readonly CSS_INPUT_SEARCH = '#searchbox_input'
    private readonly CSS_BUTTON_SEARCH = '#searchbox_homepage button[type="submit"]'

    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    /**
    * Go to the home page.
    */
    async open() {
        await this.page.goto(this.BASE_URL)
    }

    /**
    * Fills the search input with a given text.
    *
    * @param {string} text: Text to be entered.
    */
    async typeSearchInput(text: string) {
        await this.page.locator(this.CSS_INPUT_SEARCH).fill(text)
    }

    /**
    * Clicks the search button.
    */
    async search() {
        await this.page.locator(this.CSS_BUTTON_SEARCH).click()
    }
}
