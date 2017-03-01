### Note: Babel transforms for async/await have been removed, and now this boilerplate is only compatible with Node >=7.6.0

# webdriver-mocha-async-await-example

This is an example of using Mocha, Selenium Webdriver and Babel together to provide async / await syntax to browser automation tests. Additionally, the page objects conventions model how Airware's test automation team structures their tests.

We've also added Flow annotations and a webdriver interface like the one we use internally.

Originally presented at the Selenium Meetup in SF on 10-19-16.

[Video of the Meetup](https://www.youtube.com/watch?v=BTpMB2-8qMM)

[Slides from the Meetup](http://www.slideshare.net/MekSrunyuStittri/endtoend-test-automation-with-nodejs-one-year-later)

Prequisites include Java, NodeJs, Chrome browser.

To start the Selenium server, run `npm run install` and `npm run start`

To run the acceptance test suite, run `npm test`

**Questions?** You can email the test automation team at cclayman@airware.com or mstittri@airware.com, or file an issue. Contributions welcome.
