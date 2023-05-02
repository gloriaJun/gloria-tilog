module.exports = {
  root: true,
  ignorePatterns: ['**/*'],
  plugins: ['@nx', 'import', 'regexp'],
  extends: ['plugin:regexp/recommended', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': ['error'],

    // import
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
          'type',
          'unknown',
        ],
        pathGroups: [
          {
            pattern: '{react*,react*/**}',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '{@storybook/**}',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '{@**/**}',
            group: 'internal',
          },
          {
            pattern: '{@markup/**}',
            group: 'unknown',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/newline-after-import': 'error',
    'import/group-exports': 'off',
    'import/no-self-import': 'error',
    'import/no-cycle': 'error',
    'import/no-absolute-path': 'error',
    'import/no-named-as-default-member': 'error',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {
        '@nx/enforce-module-boundaries': [
          'error',
          {
            enforceBuildableLibDependency: true,
            allow: [],
            depConstraints: [
              {
                sourceTag: '*',
                onlyDependOnLibsWithTags: ['*'],
              },
            ],
          },
        ],
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:@nx/typescript',
      ],
      parserOptions: {
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        project: [
          './tsconfig.base.json',
          './lib/*/tsconfig.json',
          './apps/doc/tsconfig.json',
        ],
      },
      rules: {},
    },
    {
      files: ['*.js', '*.jsx'],
      extends: ['plugin:@nx/javascript'],
      rules: {},
    },
    {
      files: ['*.spec.ts', '*.spec.tsx', '*.spec.js', '*.spec.jsx'],
      env: {
        jest: true,
      },
      rules: {},
    },
    {
      files: ['*.stories.ts', '*.stories.tsx', '*.stories.js', '*.stories.jsx'],
      extends: ['plugin:storybook/recommended'],
      rules: {},
    },
  ],
};
