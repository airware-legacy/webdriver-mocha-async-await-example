'use strict';

import { until } from 'selenium-webdriver';

async function waitForLocated(driver, locator, maxRetries = 3) {
  let retry = 0;
  let error;
  do {
    try {
      await driver.wait(until.elementLocated(locator), 7000);
      return;
    } catch (err) {
      retry++;
      error = err;
      await driver.sleep(250);
    }
  } while (retry < maxRetries);
  throw new Error(`Still not able to locate element ${locator.toString()} after maximum retries (${retry}), Error message: ${err.message.toString()}`);
}

async function waitForVisible(driver, locator, maxRetries = 3) {
  let retry = 0;
  do {
    try {
      const element = await driver.findElement(locator);
      await driver.wait(until.elementIsVisible(element), 7000);
      return;
    } catch (error) {
      retry++;
      err = error;
      await driver.sleep(250);
    }
  } while (retry < maxRetries);
  // If we are here it means we fail to locate and throw error regardless
  throw new Error(`Element ${locator.toString()} still not visible after maximum retries (${retry}), Error message: ${err.message.toString()}`);
}

export default class BasePage {
  constructor(webdriver) {
    this.driver = webdriver;
  }



  async waitForDisplayed(locator, maxRetries = 3) {
    await waitForLocated(this.driver, locator);
    await waitForVisible(this.driver, locator);
    return this.driver.findElement(locator);
  }

  async sendKeys(locator, keys, retries = 1) {
    try {
      const element = await this.driver.findElement(locator);
      await element.click();
      await element.clear();
      await element.sendKeys(keys);
      return;
    } catch(error) {
      if (retries === 0) {
        throw new Error(`Unable to send keys to ${locator.toString()} after maximum retries, error : ${error.message}`);
      }
      await this.driver.sleep(250);
      return this.sendKeys(locator, keys, retries - 1);
    }
  }

  async getText(locator, retries = 1) {
    try {
      const element = await this.driver.findElement(locator);
      const text = await element.getText();
      return text;
    } catch(error) {
      if (retries === 0) {
        throw new Error(`Unable to get ${locator.toString()} text after maximum retries, error : ${error.message}`);
      }
      await this.driver.sleep(250);
      return this.getText(locator, retries - 1);
    }
  }

  async click(locator, retries = 10) {
    try {
      const element = await this.driver.findElement(locator);
      await element.click();
      return;
    } catch(error) {
      if (retries === 0) {
        throw new Error(`Still not able to click ${locator.toString()} after maximum retries (${retry}), Error message: ${err.message.toString()}`);
      }
      await this.driver.sleep(250);
      return this.click(locator, retries - 1);
    }
  }

}
