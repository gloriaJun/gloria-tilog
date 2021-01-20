const path = require('path');

const resolve = (dir) => path.resolve(__dirname, dir);
const siteUrl = `https://gtilog.netlify.app`;

module.exports = {
  siteMetadata: {
    title: `L.E.T`,
    description: `Learn! Experience! Think!`,
    siteUrl,
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
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `sample1`,
    //     path: `${__dirname}/posts/sample1`,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `devLogs`,
        path: `${__dirname}/posts/devLogs`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-svgr',
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        printRejected: true,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
  ],
};
