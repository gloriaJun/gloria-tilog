"use strict";(self.webpackChunkgloria_tilog_root=self.webpackChunkgloria_tilog_root||[]).push([[3124],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(t),d=o,m=p["".concat(i,".").concat(d)]||p[d]||g[d]||a;return t?r.createElement(m,s(s({ref:n},c),{},{components:t})):r.createElement(m,s({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=d;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u[p]="string"==typeof e?e:o,s[1]=u;for(var l=2;l<a;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8834:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>u,metadata:()=>l,toc:()=>p});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),s=["components"],u={title:"[docusaurus] Configure docusaurus",tags:["devlog","nx","docusaurus"],date:"2023-05-14T18:38"},i=void 0,l={permalink:"/gloria-tilog/2023/05/14/side-project/docusaurus/docusaurus",source:"@site/blog/side-project/docusaurus/2023-05-14-docusaurus.mdx",title:"[docusaurus] Configure docusaurus",description:"\uc774\ubc88\uc5d0\ub294 \ub0b4 \ube14\ub85c\uadf8\ub97c \uc704\ud574 docusaurus\uc758 \uc124\uc815\uc744 \ucee4\uc2a4\ud140\ud558\uae30 \uc704\ud55c \uacfc\uc815\uc774\ub2e4.",date:"2023-05-14T18:38:00.000Z",formattedDate:"May 14, 2023",tags:[{label:"devlog",permalink:"/gloria-tilog/tags/devlog"},{label:"nx",permalink:"/gloria-tilog/tags/nx"},{label:"docusaurus",permalink:"/gloria-tilog/tags/docusaurus"}],readingTime:4.11,hasTruncateMarker:!1,authors:[],frontMatter:{title:"[docusaurus] Configure docusaurus",tags:["devlog","nx","docusaurus"],date:"2023-05-14T18:38"},prevItem:{title:"Can not display inspector via iOS Simulator",permalink:"/gloria-tilog/2023/05/16/trouble-shootings/2023/ios-web-inspector"},nextItem:{title:"[docusaurus] Configure lint",permalink:"/gloria-tilog/2023/05/01/side-project/docusaurus/lint"}},c={authorsImageUrls:[]},p=[{value:"docusaurus \uae30\ubcf8\uc801\uc778 \ud3f4\ub354 \uad6c\uc870",id:"docusaurus-\uae30\ubcf8\uc801\uc778-\ud3f4\ub354-\uad6c\uc870",level:2},{value:"Basic Configuration",id:"basic-configuration",level:2},{value:"CI/CD",id:"cicd",level:2}],g={toc:p},d="wrapper";function m(e){var n=e.components,t=(0,o.Z)(e,s);return(0,a.kt)(d,(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\uc774\ubc88\uc5d0\ub294 \ub0b4 \ube14\ub85c\uadf8\ub97c \uc704\ud574 ",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/ko/"},"docusaurus"),"\uc758 \uc124\uc815\uc744 \ucee4\uc2a4\ud140\ud558\uae30 \uc704\ud55c \uacfc\uc815\uc774\ub2e4."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"docusaurus"),"\ub294 \ud398\uc774\uc2a4\ubd81 \uc624\ud508\uc18c\uc2a4 \ucee4\ubba4\ub2c8\ud2f0\uc5d0\uc11c \uad00\ub9ac\ud558\ub294 \ubb38\uc11c \uc6f9\uc0ac\uc774\ud2b8 \uc0dd\uc131 \ub3c4\uad6c\uc774\ub2e4.")),(0,a.kt)("h2",{id:"docusaurus-\uae30\ubcf8\uc801\uc778-\ud3f4\ub354-\uad6c\uc870"},"docusaurus \uae30\ubcf8\uc801\uc778 \ud3f4\ub354 \uad6c\uc870"),(0,a.kt)("p",null,"\uba3c\uc800 \uae30\ubcf8\uc801\uc778 \ud3f4\ub354 \uad6c\uc870 \ubc0f \uac01 \ud3f4\ub354\uc758 \uc131\uaca9\uc740 \ub2e4\uc74c\uacfc \uac19\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apps/doc/\n\u251c\u2500\u2500 babel.config.js\n\u251c\u2500\u2500 blog\n\u251c\u2500\u2500 docs\n\u251c\u2500\u2500 docusaurus.config.js\n\u251c\u2500\u2500 project.json\n\u251c\u2500\u2500 sidebars.js\n\u251c\u2500\u2500 src\n\u251c\u2500\u2500 static\n\u2514\u2500\u2500 tsconfig.json\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"blog",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\ub9c8\ud06c\ub2e4\uc6b4\uc73c\ub85c \uc791\uc131\ub41c \ube14\ub85c\uadf8 \ud615\ud0dc\uc758 \uae00\uc774 \uc704\uce58\ud558\ub294 \uacf3\uc774\ub2e4"))),(0,a.kt)("li",{parentName:"ul"},"docs",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\ub9c8\ud06c\ub2e4\uc6b4\uc73c\ub85c \uc791\uc131\ub41c \uac00\uc774\ub4dc \ubb38\uc11c \ud615\ud0dc\uc758 \uae00\uc774 \uc704\uce58\ud558\ub294 \uacf3\uc774\ub2e4."))),(0,a.kt)("li",{parentName:"ul"},"src",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\ud398\uc774\uc9c0 \ub610\ub294 \ub9ac\uc561\ud2b8 \ucef4\ud3ec\ub10c\ud2b8\ub85c \uc791\uc131\ub41c \ubd80\ubd84\uc744 \ucee4\uc2a4\ud130\ub9c8\uc774\uc9d5\ud560 \uc218 \uc788\ub294 \uc18c\uc2a4 \ud30c\uc77c\uc774 \uc704\uce58\ud55c\ub2e4."))),(0,a.kt)("li",{parentName:"ul"},"static",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\uc815\uc801\uc778 \ud30c\uc77c\uc774 \uc704\uce58\ud55c \uacf3\uc774\ub2e4.")))),(0,a.kt)("h2",{id:"basic-configuration"},"Basic Configuration"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/configuration"},"https://docusaurus.io/docs/configuration")," \uc744 \ucc38\uace0\ud558\uc5ec \ub2e4\uc74c\uacfc \uac19\uc774 ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," \ud30c\uc77c\uc744 \ub2e4\uc74c\uacfc \uac19\uc774 \uc218\uc815\ud558\uc600\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// @ts-check\n// Note: type annotations allow type checking and IDEs autocompletion\n\nconst lightCodeTheme = require('prism-react-renderer/themes/github');\nconst darkCodeTheme = require('prism-react-renderer/themes/dracula');\n\nconst blogTitle = 'L.E.T';\nconst myGitHubUrl = 'https://github.com/gloriajun';\n\n/** @type {import('@docusaurus/types').Config} */\nconst config = {\n  title: blogTitle,\n  tagline: 'Learn! Experience! Think!',\n  url: 'https://gloriajun.github.io',\n  baseUrl: '/gloria-tilog/',\n  onBrokenLinks: 'throw',\n  onBrokenMarkdownLinks: 'warn',\n  favicon: 'img/favicon.ico',\n  organizationName: 'gloriajun', // Usually your GitHub org/user name.\n  projectName: 'gloria-tilog', // Usually your repo name.\n\n  presets: [\n    [\n      'classic',\n      /** @type {import('@docusaurus/preset-classic').Options} */\n      ({\n        docs: false,\n        blog: {\n          routeBasePath: '/',\n          showReadingTime: true,\n        },\n        theme: {\n          customCss: require.resolve('./src/css/custom.css'),\n        },\n      }),\n    ],\n  ],\n\n  themeConfig:\n    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */\n    ({\n      navbar: {\n        title: blogTitle,\n        logo: {\n          alt: 'My Site Logo',\n          src: 'img/docusaurus.png',\n        },\n        items: [\n          {\n            href: myGitHubUrl,\n            label: 'GitHub',\n            position: 'right',\n          },\n        ],\n      },\n      footer: {\n        style: 'dark',\n        copyright: `Copyright \xa9 ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,\n      },\n      prism: {\n        theme: lightCodeTheme,\n        darkTheme: darkCodeTheme,\n      },\n    }),\n};\n\nmodule.exports = config;\n")),(0,a.kt)("p",null,"\uadf8\ub9ac\uace0 \uc791\uc131\ud55c \ube14\ub85c\uadf8\ub97c \ubc14\ub85c \ub178\ucd9c\ud558\uae30 \uc704\ud574 ",(0,a.kt)("inlineCode",{parentName:"p"},"src/pages/index.tsx"),"\uac00 \uc704\uce58\ud55c ",(0,a.kt)("strong",{parentName:"p"},"src/pages")," \ud3f4\ub354\ub97c \uc77c\ub2e8 \uc81c\uac70\ud558\uc600\ub2e4.\n\uc774 \ubd80\ubd84\uc740 \ucc28\ud6c4\uc5d0 \uc5b4\ub5a0\ud55c \ud615\ud0dc\ub85c \uad6c\uc131\ud560 \uc9c0 \uace0\ubbfc\uc744 \ud558\uc5ec \uc801\uc6a9\ud574\ubcf4\uc544\uc57c\ud560 \uac83 \uac19\ub2e4.\n(\uc660\uc9c0 \uc9c0\uae08\ucc98\ub7fc \ucd5c\uadfc blog \ud3ec\uc2a4\ud2b8\ub4e4\uc774 \ubcf4\uc5ec\uc9c0\ub294 \ud615\ud0dc\ub97c \uac1c\uc778\uc801\uc73c\ub85c \uc120\ud638\ud558\uace0 \uc788\uc9c0 \uc54a\uae30\ub3c4 \ud574\uc11c....)"),(0,a.kt)("h2",{id:"cicd"},"CI/CD"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/deployment#deploying-to-github-pages"},"https://docusaurus.io/docs/deployment#deploying-to-github-pages"))),(0,a.kt)("p",null,"\ud574\ub2f9 Repo\uc758 GitHub Page\ub85c \ubc30\ud3ec\ud558\uae30 \uc704\ud574\uc11c \ub2e4\uc74c\uacfc \uac19\uc740 \uc124\uc815\uc774 ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),"\uc5d0 \uc815\uc758\ub418\uc5b4\uc788\uc5b4\uc57c\ud55c\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const config = {\n  // ...(SKIP)....\n  organizationName: 'gloriajun', // Usually your GitHub org/user name.\n  projectName: 'gloria-tilog', // Usually your repo name\n  // ...(SKIP)....\n")),(0,a.kt)("p",null,"\uadf8\ub9ac\uace0 Git Repository\uc758 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gloriaJun/gloria-tilog/settings/pages"},"Settings > Pages"),"\uc5d0\uc11c ",(0,a.kt)("inlineCode",{parentName:"p"},"Build and deployment")," \ubd80\ubd84\uc744 \ub2e4\uc74c\uacfc \uac19\uc774 \uc124\uc815\ud574\uc900\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Source : Deploy from a branch"),(0,a.kt)("li",{parentName:"ul"},"Branch : gh-pages")),(0,a.kt)("p",null,"\ub2e4\uc74c\uc73c\ub85c\ub294 Github Action\uc744 \uc774\uc6a9\ud558\uc5ec \ubc30\ud3ec \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc791\uc131\ud55c\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"name: deploy-github-actions\non:\n  push:\n    branches: [main]\n    paths-ignore:\n      - '.husky/**'\n      - '.vscode/**'\n\n# Allow one concurrent deployment\nconcurrency:\n  group: ${{ github.workflow }}-${{ github.ref }}\n  cancel-in-progress: true\n\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout source code\n        uses: actions/checkout@v3\n\n      - name: Setup node\n        uses: actions/setup-node@v3\n        with:\n          node-version-file: '.nvmrc'\n\n      - name: Cache yarn dependencies\n        uses: actions/cache@v1\n        id: yarn-cache\n        with:\n          path: node_modules\n          key: ${{ runner.os }}-yarn-${{ hashFiles('**/yarn.lock') }}\n          restore-keys: |\n            ${{ runner.os }}-yarn-\n\n      - name: Install Dependencies\n        run: yarn install\n\n      - name: Lint\n        run: yarn run lint:all\n\n      # - name: Unit Test\n      #   run: |\n      #     yarn run test\n      #     yarn run coverage\n\n      - name: Build Website\n        run: yarn run build doc\n\n      # Popular action to deploy to GitHub Pages:\n      # Docs: https://github.com/peaceiris/actions-gh-pages#%EF%B8%8F-docusaurus\n      - name: Deploy to GitHub Pages\n        uses: peaceiris/actions-gh-pages@v3\n        with:\n          github_token: ${{ secrets.GITHUB_TOKEN }}\n          # Build output to publish to the `gh-pages` branch:\n          publish_dir: ./build\n          # The following lines assign commit authorship to the official\n          # GH-Actions bot for deploys to `gh-pages` branch:\n          # https://github.com/actions/checkout/issues/13#issuecomment-724415212\n          # The GH actions bot is used by default if you didn't specify the two fields.\n          # You can swap them out with your own user credentials.\n          user_name: github-actions[bot]\n          user_email: 41898282+github-actions[bot]@users.noreply.github.com\n")))}m.isMDXComponent=!0}}]);