const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.(js|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-viewport/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-docs/preset',
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
      // require.resolve('babel-preset-react-app'),
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
            presets: [['react-app', { flow: false, typescript: true }]],
            plugins: [
              require.resolve('@babel/plugin-proposal-class-properties'),
              // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
              require.resolve('babel-plugin-remove-graphql-queries'),
              // To generate props
              require.resolve('babel-plugin-react-docgen'),
            ],
          },
        },
        // {
        //   loader: require.resolve('react-docgen-typescript-loader'),
        //   // options: {
        //   //   // Provide the path to your tsconfig.json so that your stories can
        //   //   // display types from outside each individual story.
        //   //   tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
        //   // },
        // },
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

    // Set import alias
    // ========================================================
    config.resolve.modules.push(path.resolve(__dirname, '../src'));

    return config;
  },
};
