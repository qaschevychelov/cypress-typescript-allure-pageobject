import { defineConfig } from "cypress";
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

export default defineConfig({
  projectId: "ipnri7",
  e2e: {
    baseUrl: 'https://smmtouch.tech',
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      on('before:browser:launch', (browser = Cypress.browser, launchOptions) => {
        if (browser.name === 'chrome') {
          launchOptions.args.push('--lang=ru');
          launchOptions.args.push('--win.navigator.language=ru-RU');
          launchOptions.args.push('--win.navigator.languages=[ru]');
          launchOptions.args.push('--win.navigator.accept_languages=[ru]');
          return launchOptions;
        }
      });
        return config;
    }
  },
});