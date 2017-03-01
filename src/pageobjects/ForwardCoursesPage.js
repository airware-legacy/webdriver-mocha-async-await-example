// @flow
import { By } from 'selenium-webdriver'
import BasePage from './BasePage'

const LOGIN_BTN = By.css('.btn-nav.btn-nav-login')
const LOGIN_WITH_EMAIL_BTN = By.css('a[href="/users/sign_in"]')
const EMAIL_INPUT = By.css('#user_email')
const PASSWORD_INPUT = By.css('#user_password')
const LOGIN_LOGIN_BTN = By.css('.actions [value="Log in"]')
const HEADER_TITLE = By.css('header.section-header h3')

export default class ForwardCoursesPage extends BasePage {

  async isLoaded (): Promise<void> {
    await Promise.all([
      this.waitForDisplayed(LOGIN_BTN)
    ])
  }

  async clickLogin (): Promise<void> {
    return this.click(LOGIN_BTN)
  }

  async clickLoginWithEmail (): Promise<void> {
    await this.waitForDisplayed(LOGIN_WITH_EMAIL_BTN)
    return this.click(LOGIN_WITH_EMAIL_BTN)
  }

  async enterEmailAndPassword (email: string, password: string): Promise<void> {
    await this.waitForDisplayed(EMAIL_INPUT)
    await this.sendKeys(EMAIL_INPUT, email)
    await this.sendKeys(PASSWORD_INPUT, password)
    return this.click(LOGIN_LOGIN_BTN)
  }

  async isLoggedIn (): Promise<boolean> {
    await this.waitForDisplayed(HEADER_TITLE)
    const title = await this.getText(HEADER_TITLE)
    return title === 'Upcoming Webinars'
  }

}
