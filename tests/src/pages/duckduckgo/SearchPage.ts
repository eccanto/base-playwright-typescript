import { Page, expect } from '@playwright/test'

export default class SearchPage {
    private readonly CSS_RESULT_SEARCH = '#react-layout [data-testid="mainline"]'

    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    /**
    * Checks that the text is contained in the search result.
    */
    async resultContain(text: string) {
        await expect(this.page.locator(this.CSS_RESULT_SEARCH)).toContainText(text)
    }
}
