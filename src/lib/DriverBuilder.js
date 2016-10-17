'use strict';

import webdriver from 'selenium-webdriver';

export default class DriverBuilder {
  constructor() {
    const builder = new webdriver.Builder().usingServer('http://localhost:4444/wd/hub');
    const capabilities = webdriver.Capabilities['chrome']();
    builder.withCapabilities(capabilities);
    this._driver = builder.build();
  }

  get driver() {
    return this._driver;
  }

  async quit() {
    return this._driver.quit();
  }

}
