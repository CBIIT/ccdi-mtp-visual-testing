const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "pshcwr",
  fixturesFolder: false,
  video: false,

  e2e: {
  	 excludeSpecPattern: process.env.CI ? ['cypress/e2e/ccdi-mtp/run-all.cy.js'] : [],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

require("@applitools/eyes-cypress")(module);
