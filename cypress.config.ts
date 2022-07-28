import { defineConfig } from "cypress";
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

export default defineConfig({
  e2e: {
    baseUrl: 'https://vk.com'
  },
});

module.exports = defineConfig({
  projectId: "ipnri7",
  e2e: {
      setupNodeEvents(on, config) {
        allureWriter(on, config);
          return config;
      }
  }
});