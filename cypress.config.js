const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    baseUrl: 'https://cloud.wavemakeronline.com/pkhg2m9z213c/LeaveManagementApp',
    specPattern: '**/*.feature',
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      // implement node event listeners here
    },
  },
});