'use strict';

import { By } from 'selenium-webdriver';
import BasePage from './BasePage';

const SEARCH_TITLE = By.css('.container .row h2');

export default class SearchResultsPage extends BasePage {

  async isLoaded() {
    await this.waitForDisplayed(SEARCH_TITLE)
  }

  async getTitle() {
    return this.getText(SEARCH_TITLE);
  }

}
