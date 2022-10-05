// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const title = 'L.E.T';
const description = 'Learn! Experience! Think!';
const gitHubUrl = 'https://github.com/gloriaJun';
const repoName = 'gloria-tilog';
const baseUrls = {
  logs: 'devlogs',
  trouble: 'trouble-shootings',
  diary: 'blog',
};

const devLogItems = [
  {
    label: 'Frontend',
    to: `${baseUrls.logs}/frontend`,
  },
  {
    label: 'CI/CD',
    to: `${baseUrls.logs}/ci-cd`,
  },
  {
    label: 'Etc',
    to: `${baseUrls.logs}/etc`,
  },
];

const editUrlForBlog = ({
  // locale,
  blogDirPath,
  blogPath,
  // permalink,
}) => {
  return `${gitHubUrl}/${repoName}/edit/master/${blogDirPath}/${blogPath}`;
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title,
  tagline: description,
  url: 'https://gtilog.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'gloriaJun', // Usually your GitHub org/user name.
  // projectName: 'gloria-tilog', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ko',
    locales: [
      'ko',
      //  'en',
    ],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: function ({
            // locale,
            // version,
            versionDocsDirPath,
            docPath,
            // permalink,
          }) {
            return `${gitHubUrl}/${repoName}/edit/master/${versionDocsDirPath}/${docPath}`;
          },
          // showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        // blog: {
        //   showReadingTime: false,
        //   editUrl: editUrlForBlog,
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    ...[...devLogItems, { to: baseUrls.trouble }].reduce((result, item) => {
      result.push([
        '@docusaurus/plugin-content-blog',
        {
          id: item.to.replace(/^\//, '').replace('/', '-'),
          path: `./${item.to}`,
          routeBasePath: item.to,
          editUrl: editUrlForBlog,
          showReadingTime: false,
        },
      ]);
      return result;
    }, []),
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title,
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'algorithm/2017-05-26-fibonacci',
            label: 'Docs',
            position: 'left',
          },
          {
            label: 'DevLogs',
            items: devLogItems,
            position: 'left',
          },
          // {
          //   label: 'Trouble Shootings',
          //   to: baseUrls.trouble,
          //   position: 'left',
          // },
          // {
          //   label: 'Diary',
          //   to: baseUrls.diary,
          //   position: 'left',
          // },
          {
            href: gitHubUrl,
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Tutorial',
        //         to: '/docs/intro',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Stack Overflow',
        //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/facebook/docusaurus',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} @gloriaJun. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
