const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 8000,
  env: {
    url : 'https://rahulshettyacademy.com/'
  },
  // ...rest of the Cypress project config
    projectId: "xny2n8",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js'
  },
});
