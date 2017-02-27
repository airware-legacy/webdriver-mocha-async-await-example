// @flow
import webdriver from 'selenium-webdriver'

export default class DriverBuilder {
  driver: WebDriverClass

  constructor () {
    const builder = new webdriver.Builder().usingServer('http://localhost:4444/wd/hub')
    // $FlowIssue getting chrome capabilities as method is a-ok
    const capabilities = webdriver.Capabilities['chrome']()
    builder.withCapabilities(capabilities)
    this.driver = builder.build()
  }

  async quit (): Promise<void> {
    return this.driver.quit()
  }

}
