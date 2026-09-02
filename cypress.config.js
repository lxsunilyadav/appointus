const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
<<<<<<< HEAD
    baseUrl: "https://appuidev.appointusonline.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false,
=======
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
>>>>>>> 8dd236cb72e136ad48a85e7ddf004dc086170d4b
  },
});
