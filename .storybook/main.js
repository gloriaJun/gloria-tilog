const path = require('path');

const resolve = (...args) => path.resolve(process.cwd(), ...args);

module.exports = {
  stories: [
    // component stories
    resolve('./src', `**/*.stories.@(js|ts|tsx|mdx)`),
  ],
  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      options: {
        // backgrounds: false,
      },
    },
    '@storybook/addon-a11y',
  ],
  webpackFinal: async (config) => {
    // set the NODE_ENV to 'production' by default, to allow babel-plugin-remove-graphql-queries to remove static queries
    // process.env.NODE_ENV = 'production';

    // config.module.rules[0].test = /\.(js|mjs|jsx|ts|tsx)$/;

    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];

    // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
    config.module.rules[0].use[0].loader = require.resolve('babel-loader');

    // use @babel/preset-react for JSX and env (instead of staged presets)
    config.module.rules[0].use[0].options.presets = [
      require.resolve('@babel/preset-react'),
      require.resolve('@babel/preset-env'),
      // Emotion preset must run BEFORE reacts preset to properly convert css-prop.
      // Babel preset-ordering runs reversed (from last to first). Emotion has to be after React preset.
      require.resolve('@emotion/babel-preset-css-prop'),
    ];

    config.module.rules[0].use[0].options.plugins = [
      // use @babel/plugin-proposal-class-properties for class arrow functions
      require.resolve('@babel/plugin-proposal-class-properties'),
      // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
      require.resolve('babel-plugin-remove-graphql-queries'),
      // To generate props
      require.resolve('babel-plugin-react-docgen'),
    ];

    // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
    config.resolve.mainFields = ['browser', 'module', 'main'];

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [
              ['react-app', { flow: false, typescript: true }],
              // Emotion preset must run BEFORE reacts preset to properly convert css-prop.
              // Babel preset-ordering runs reversed (from last to first). Emotion has to be after React preset.
              require.resolve('@emotion/babel-preset-css-prop'),
            ],
            plugins: [
              require.resolve('@babel/plugin-proposal-class-properties'),
              // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
              require.resolve('babel-plugin-remove-graphql-queries'),

              // To generate props
              require.resolve('babel-plugin-react-docgen'),
            ],
          },
        },
      ],
    });

    config.resolve.extensions.push('.ts', '.tsx');

    /*
     * custom configuration
     */

    // Add SVGR Loader
    // ========================================================
    // Remove svg rules from existing webpack rule
    const assetRule = config.module.rules.find(({ test }) => test.test('.svg'));

    const assetLoader = {
      loader: assetRule.loader,
      options: assetRule.options || assetRule.query,
    };

    config.module.rules.unshift({
      test: /\.svg$/,
      use: ['@svgr/webpack', assetLoader],
    });

    // Set alias
    // ========================================================
    config.resolve.alias = {
      ...config.resolve.alias,
      '@emotion/core': resolve('node_modules/@emotion/react'),
      '@emotion/styled': resolve('node_modules/@emotion/styled'),
      'emotion-theming': resolve('node_modules/@emotion/react'),
    };

    // Set import alias
    // ========================================================
    config.resolve.modules.push(path.resolve(__dirname, '../src'));

    return config;
  },
};
