const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: '1ekocz',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-grep/src/plugin')(config);
      return config;
    },
    baseUrl: 'http://automationpractice.com',
    video: false,
    watchForFileChanges: false,
    defaultCommandTimeout: 20000,
    chromewebsecurity: false,
  },
});
