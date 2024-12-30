import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents() {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.ts',
    baseUrl: 'http://localhost:3000',
    env: {
      apiBaseUrl: 'http://localhost:5000',
    },
  },
});
