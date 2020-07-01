module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
    '^.+\\.mdx$': '@storybook/addon-docs/jest-transform-mdx',
    '^.+\\.[jt]sx?$': `<rootDir>/jest-preprocess.js`,
  },
  // testRegex: ['(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$'],
  testRegex: ['((\\.|/)(test|spec))\\.([tj]sx?)$'],
  // moduleDirectories: ['node_modules', __dirname],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svgr-mock.ts',
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.ts',
    '^src/(.*)$': '<rootDir>/src/$1',
    '^tests/(.*)$': '<rootDir>/src/__tests__/$1',
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^styles/(.*)$': '<rootDir>/src/styles/$1',
    '^icons/(.*)$': '<rootDir>/src/icons/$1',
    '^mocks$': '<rootDir>/__mocks__/$1',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: [`node_modules`, `.cache`, `public`],
  // Gatsby includes un-transpiled ES6 code. Exclude the gatsby module.
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`, `\\.svg`],
  globals: {
    __PATH_PREFIX__: '',
    __BASE_PATH__: '',
  },
  testURL: `http://localhost`,
  setupFiles: ['<rootDir>/src/__tests__/loadershim.ts'],
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/setup-tests.ts'],
  // 테스트 전에 실행되는 global setup 모듈을 지정할 수 있다.
  // globalSetup: "./src/test/setup.ts",
  // 테스트가 끝난 후에 실행되는 global teardown 모듈을 지정할 수 있다.
  // globalTeardown: "./src/test/teardown.ts",
};
