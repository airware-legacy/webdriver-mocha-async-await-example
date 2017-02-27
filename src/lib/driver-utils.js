// @flow
const baseUrl = 'https://forwardjs.com/'

export default {
  async goToHome (driver: WebDriverClass): Promise<void> {
    return driver.get(baseUrl)
  }
}
