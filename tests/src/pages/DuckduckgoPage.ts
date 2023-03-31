import { Page, Locator } from '@playwright/test'

export default class DuckduckgoPage {
  public static readonly title = /DuckDuckGo/
  private static readonly url = 'https://duckduckgo.com/'

  private readonly page: Page

  private readonly inputSearchLocator: Locator
  private readonly btnSearchLocator: Locator
  private readonly resultSearchLocator: Locator

  constructor(page: Page) {
    this.page = page

    this.inputSearchLocator = page.locator('#search_form_input_homepage, #searchbox_input')
    this.btnSearchLocator = page.locator('button[type="submit"], input[type="submit"]')
    this.resultSearchLocator = page.locator('.results--main')
  }

  /**
  * Go to the home page.
  */
  async goto() {
    await this.page.goto(DuckduckgoPage.url)
    await this.page.waitForLoadState('networkidle')
  }

  /**
  * Fills the search input with a given text.
  *
  * @param {string} text: Text to be entered.
  */
  async typeSearchInput(text: string) {
    await this.inputSearchLocator.type(text)
    await this.page.waitForLoadState('networkidle')
  }

  /**
  * Clicks the search button.
  */
  async search() {
    await this.btnSearchLocator.click()
    await this.page.waitForLoadState('networkidle')
  }

  /**
  * Gets the results as text.
  */
  getResultsText() {
    return this.resultSearchLocator.textContent()
  }
}
