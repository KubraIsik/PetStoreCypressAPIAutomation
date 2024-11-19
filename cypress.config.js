const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "vig57q", // BUNU cypress cloud dan ekledik
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
