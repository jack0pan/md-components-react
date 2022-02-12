/* eslint-disable tsdoc/syntax */
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/index.ts",
    "!src/**/interfaces.ts",
    "!src/**/demos/*",
    "!src/**/__test__/*",
  ],
  coverageReporters: ["text", "html"],
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js",
  },
  // preset: 'ts-jest',
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest",
  },
  testEnvironment: "jest-environment-jsdom",
};
