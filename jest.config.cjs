module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/tests/setup.ts"],
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { tsconfig: "<rootDir>/tsconfig.test.json" }],
  },
  moduleFileExtensions: ["ts", "tsx", "js"],
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/main.tsx",
    "!src/data/**",
    "!src/types/**",
  ],
  coverageThreshold: {
    global: {
      lines: 95,
      functions: 95,
      statements: 95,
      branches: 80,
    },
  },
};
