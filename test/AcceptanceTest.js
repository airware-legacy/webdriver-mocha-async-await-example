// @flow
import { assert } from 'chai'

import HomePage from './../src/pageobjects/HomePage'
// import ForwardCoursesPage from './../src/pageobjects/ForwardCoursesPage'

import DriverBuilder from './../src/lib/DriverBuilder'
import driverutils from './../src/lib/driver-utils'

describe('Acceptance Tests', function () {
  let driverBuilder
  let driver

  beforeEach(async function () {
    driverBuilder = new DriverBuilder()
    driver = driverBuilder.driver
    await driverutils.goToHome(driver)
  })

  it('Loads the home page', async function () {
    const homePage = new HomePage(driver)
    await homePage.isLoaded()
    const title = await homePage.getTitle()
    assert.strictEqual(title, 'Forward Thinkers of the Web Unite!', 'Title should match expected tagline')
  })

  it('Buys a ticket', async function () {
    const homePage = new HomePage(driver)
    await homePage.clickHeroButton()
    const text = await homePage.getTicketButtonText()
    assert.strictEqual(text, 'GET TICKETS NOW!', 'Get ticket button text should be correct.')
  })

  afterEach(async function () {
    await driverBuilder.quit()
  })
})
