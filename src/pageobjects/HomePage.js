// @flow
import { By } from 'selenium-webdriver'
import BasePage from './BasePage'

const TITLE = By.css('.speaker-section h3.down-50')
const HERO_BTN = By.css('a.what-is-forward')
const TICKET_BTN = By.css('a.tito-submit')

export default class HomePage extends BasePage {

  async isLoaded (): Promise<void> {
    await this.waitForDisplayed(TITLE)
    await this.waitForDisplayed(HERO_BTN)
  }

  async getTitle (): Promise<string> {
    return this.getText(TITLE)
  }

  async clickHeroButton (): Promise<void> {
    return this.click(HERO_BTN)
  }

  async clickTicketButton (): Promise<void> {
    return this.click(TICKET_BTN)
  }

  async getTicketButtonText (): Promise<string> {
    return this.getText(TICKET_BTN)
  }

}
