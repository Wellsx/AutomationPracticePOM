const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://automationpractice.com',
    video: false,
    watchForFileChanges: false,
    defaultCommandTimeout: 20000,
    chromewebsecurity: false,
  },
});
