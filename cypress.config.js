const { defineConfig } = require("cypress");
const cucumber=require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
    },
    chromeWebSecurity: false,
    defaultCommandTimeout:8000,
    specPattern: "cypress/e2e/specs/*.feature",
    baseUrl: "https://banking.sbx-multichannel-1.dbsdev.sbcp.io/"
  },
    
});
