const nextJest = require("next/jest");

const createJestConfig = nextJest({ dir: "." });
const customJestConfig = {
  testEnvironment: "jsdom",
  moduleDirectories: ["node_modules", "."],
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  testRegex: "(/__tests__/.*|(\\.|/)test)\\.[jt]sx?$",
};
module.exports = createJestConfig(customJestConfig);