// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const blogTitle = 'L.E.T';
const myGitHubUrl = 'https://github.com/gloriajun';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: blogTitle,
  tagline: 'Learn! Experience! Think!',
  url: 'https://gloriajun.github.io',
  baseUrl: '/gloria-tilog/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'gloriajun', // Usually your GitHub org/user name.
  projectName: 'gloria-tilog', // Usually your repo name.
  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/gloriaJun/gloria-tilog/edit/main/apps/doc/',
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
        },
        blog: {
          routeBasePath: '/',
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: blogTitle,
        logo: {
          alt: 'My Site Logo',
          src: 'img/docusaurus.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Bookmark',
          },
          // { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: myGitHubUrl,
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
