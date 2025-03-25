import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom", // Required for React components
    setupFiles: ["./vitest.setup.ts"], // File to set up custom matchers
    globals: true, // Enable global test functions (describe, it, expect)
    css: false, // Ignore CSS imports
    testTimeout: 10000, // Increase timeout for slower tests
  },
});
