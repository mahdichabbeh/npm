import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  // Base configuration for JavaScript files
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "module", // Use ES Module syntax
      globals: {
        ...globals.browser, // Add browser-specific globals
        ...globals.mocha,   // Add Mocha globals like 'describe' and 'it'
      },
    },
  },

  // Apply the recommended configuration from @eslint/js
  pluginJs.configs.recommended,
];
