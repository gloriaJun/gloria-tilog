module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: [
    '@docusaurus',
    '@typescript-eslint',
    'react',
    'react-hooks',
    'simple-import-sort',
  ],
  extends: [
    'plugin:@docusaurus/recommended',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {},
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // 'react/prop-types': 'off', // Disable prop-types as we use TypeScript for type checking
    '@typescript-eslint/explicit-function-return-type': 'off',
    // temp
    '@typescript-eslint/no-var-requires': 'off',
  },
  overrides: [
    {
      files: ['src/**/*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2021, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
      },
      rules: {},
    },
    // Override some TypeScript rules just for .js files
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    /** story files */
    // {
    //   files: ['./packages/react/**/*.stories.tsx'],
    //   rules: {},
    // },
    // {
    //   files: ['**/*.spec.js', '**/*.spec.ts', '**/.test.js', '**/.test.ts'],
    //   env: {
    //     jest: true,
    //     'cypress/globals': true,
    //   },
    //   extends: ['plugin:jest/recommended', 'plugin:cypress/recommended'],
    //   plugins: ['jest', 'cypress'],
    //   rules: {
    //     '@typescript-eslint/no-unsafe-member-access': 'off',
    //     '@typescript-eslint/no-unsafe-assignment': 'off',
    //   },
    // },
  ],
};
