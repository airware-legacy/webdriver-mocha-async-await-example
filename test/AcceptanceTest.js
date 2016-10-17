'use strict';

import { assert } from 'chai';

import HomePage from './../src/pageobjects/HomePage';
import SearchResultsPage from './../src/pageobjects/SearchResultsPage';

import DriverBuilder from './../src/lib/DriverBuilder';

describe('Acceptance Tests', function() {
  let driverBuilder;
  let driver;

  beforeEach(async function() {
    driverBuilder = new DriverBuilder();
    driver = driverBuilder.driver;
    await driver.get('https://www.saucelabs.com')
  });

  it('Loads the home page', async function() {
    const homePage = new HomePage(driver);
    await homePage.isLoaded();
    const title = await homePage.getTitle();
    assert.strictEqual(title, 'TESTING AT THE\nSPEED OF AWESOME.', 'Title should match expected tagline');
  });

  it('Searches for a term', async function() {
    const homePage = new HomePage(driver);
    await homePage.isLoaded();
    await homePage.search('Airware');

    const searchResultsPage = new SearchResultsPage(driver);
    await searchResultsPage.isLoaded();
    const title = await searchResultsPage.getTitle();
    assert.strictEqual(title, 'Search Results for Airware', 'Title should reference search term')
  });

  afterEach(async function() {
    await driverBuilder.quit();
  })

});
