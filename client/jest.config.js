// eslint-disable-next-line no-undef
module.exports = {
  maxWorkers: "50%",
  coverageReporters: [
    "text-summary",
    "text",
    "lcov",
    "clover",
    "json",
    "cobertura",
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  setupFilesAfterEnv: ["./jest.setup.ts"],
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/src/mocks/styleMock.js",
  },
};
