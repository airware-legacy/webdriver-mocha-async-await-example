'use strict';

import { By } from 'selenium-webdriver';
import BasePage from './BasePage';

const SEARCH_BUTTON = By.css('#site-header button.hidden-sm-down');
const TITLE = By.css('.site-content h1');
const SEARCH_BOX = By.css('#site-header form input[type="text"]');
const SEARCH_SUBMIT_BUTTON = By.css('#site-header form button[type="submit"]');

export default class HomePage extends BasePage {

  async isLoaded() {
    await this.waitForDisplayed(TITLE);
    await this.waitForDisplayed(SEARCH_BUTTON);
  }

  async getTitle() {
    return this.getText(TITLE);
  }

  async search(searchTerm) {
    await this.click(SEARCH_BUTTON);
    await this.waitForDisplayed(SEARCH_BOX);
    await this.waitForDisplayed(SEARCH_SUBMIT_BUTTON);
    await this.sendKeys(SEARCH_BOX, searchTerm);
    await this.click(SEARCH_SUBMIT_BUTTON);
  }

}
