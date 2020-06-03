const path = require('path');

module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
    '^.+\\.mdx$': '@storybook/addon-docs/jest-transform-mdx',
    '^.+\\.(jsx?|tsx?)$': `<rootDir>/jest-preprocess.js`,
  },
  testRegex: ['(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$'],
  // moduleDirectories: ['node_modules', __dirname],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svgr-mock.ts',
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.ts',
    '^tests/(.*)$': '<rootDir>/test-helpers/$1',
    '^src/(.*)$': '<rootDir>/src/$1',
    '^styles/(.*)$': '<rootDir>/src/styles/$1',
    '^icons/(.*)$': '<rootDir>/src/icons/$1',
  },
  testPathIgnorePatterns: [`node_modules`, `.cache`, `public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`, `\\.svg`],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: ['<rootDir>/test-helpers/loadershim.js'],
  setupFilesAfterEnv: ['<rootDir>/test-helpers/setup-tests.ts'],
  // 테스트 전에 실행되는 global setup 모듈을 지정할 수 있다.
  // globalSetup: "./src/test/setup.ts",
  // 테스트가 끝난 후에 실행되는 global teardown 모듈을 지정할 수 있다.
  // globalTeardown: "./src/test/teardown.ts",
  globals: {
    __PATH_PREFIX__: '',
  },
  testURL: `http://localhost`,
};
