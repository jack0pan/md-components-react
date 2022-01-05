/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/index.ts',
    // '!src/**/interface?(s).ts',
    '!src/**/demos/*',
    '!src/**/__test__/*'
  ],
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js'
  },
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom'
}
