const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "24stuw",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
