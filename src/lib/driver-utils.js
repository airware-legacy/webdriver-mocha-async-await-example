// @flow
const baseUrl = 'https://saucelabs.com/'

export default {
  async goToHome (driver: WebDriverClass): Promise<void> {
    return driver.get(baseUrl)
  }
}
