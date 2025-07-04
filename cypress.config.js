require('dotenv').config();

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    projectId: "q3r47t",
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      config.env.api_base_url = process.env.API_BASE_URL;
      return config;
    },
  },
});
