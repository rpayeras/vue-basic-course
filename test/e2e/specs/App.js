var config = require('../nightwatch.conf')

module.exports = {
  'test app structure': function (browser) {
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('.app', 5000)
      .assert.elementPresent('.logo')
      .assert.containsText('h1', 'CURSO VUE JS')
      .saveScreenshot(`${config.output_folder}/app.png`)
      .end()
  },
  'test app style': function(browser){
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementPresent('.developer .developer__content .developer__content--title', 5000)

    browser.expect.element('.developer__content--title').to.have.css('font-weight').which.equal('700')
    browser.end()
  }
}
