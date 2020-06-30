const path = require('path');

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  siteMetadata: {
    title: `L.E.T`,
    description: `Learn! Experience! Think!`,
    siteUrl: `https://gtilog.netlify.app/`,
    author: `@gloriaJun`,
    social: {
      github: 'https://github.com/gloriaJun',
    },
    comment: {
      utterances: 'gloriaJun/gloria-tilog-comment',
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          components: resolve('src/components'),
          styles: resolve('src/styles'),
        },
        extensions: ['js', 'tsx'],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/styles/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 450,
            },
          },
          `gatsby-remark-prismjs`,
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sample1`,
        path: `${__dirname}/posts/sample1`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/posts/blog`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    'gatsby-plugin-typescript',
    'gatsby-plugin-emotion',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/styles/typography`,
      },
    },
    {
      resolve: 'gatsby-plugin-codegen',
      options: {},
    },
    'gatsby-plugin-svgr',
  ],
};
