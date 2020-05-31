module.exports = {
  stories: ['../src/**/*.stories.(js|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-viewport/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-docs',
  ],
  // webpackFinal: async (config) => {
  //   const { webpack } = customWebpackConfig();

  //   return {
  //     ...config,
  //     resolve: {
  //       ...config.resolve,
  //       alias: {
  //         ...config.resolve.alias,
  //         ...webpack.alias,
  //       },
  //     },
  //   };
  // },
};
