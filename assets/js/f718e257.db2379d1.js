"use strict";(self.webpackChunkgloria_tilog_root=self.webpackChunkgloria_tilog_root||[]).push([[8767],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),i=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=i(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=i(t),m=r,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return t?a.createElement(g,l(l({ref:n},c),{},{components:t})):a.createElement(g,l({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u[p]="string"==typeof e?e:r,l[1]=u;for(var i=2;i<o;i++)l[i]=t[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(7294),r=t(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){var n=e.children,t=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>N});var a=t(7462),r=t(7294),o=t(6010),l=t(968),u=t(6550),s=t(1980),i=t(7392),c=t(12);function p(e){return function(e){var n,t;return null!=(n=null==(t=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(n=e.props)&&"object"==typeof n&&"value"in n)return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function d(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:p(t);return function(e){var n=(0,i.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function m(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function g(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,o=(0,u.k6)(),l=function(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((function(e){if(l){var n=new URLSearchParams(o.location.search);n.set(l,e),o.replace(Object.assign({},o.location,{search:n.toString()}))}}),[l,o])]}function f(e){var n,t,a,o,l=e.defaultValue,u=e.queryString,s=void 0!==u&&u,i=e.groupId,p=d(e),f=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:l,tabValues:p})})),h=f[0],k=f[1],b=g({queryString:s,groupId:i}),v=b[0],y=b[1],N=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:i}.groupId),t=(0,c.Nk)(n),a=t[0],o=t[1],[a,(0,r.useCallback)((function(e){n&&o.set(e)}),[n,o])]),w=N[0],I=N[1],T=function(){var e=null!=v?v:w;return m({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){T&&k(T)}),[T]),{selectedValue:h,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);k(e),y(e),I(e)}),[y,I,p]),tabValues:p}}var h=t(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){var n=e.className,t=e.block,u=e.selectedValue,s=e.selectValue,i=e.tabValues,c=[],p=(0,l.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=c.indexOf(n),a=i[t].value;a!==u&&(p(n),s(a))},m=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;t=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var o,l=c.indexOf(e.currentTarget)-1;t=null!=(o=c[l])?o:c[c.length-1]}null==(n=t)||n.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n)},i.map((function(e){var n=e.value,t=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:u===n?0:-1,"aria-selected":u===n,key:n,ref:function(e){return c.push(e)},onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",k.tabItem,null==l?void 0:l.className,{"tabs__item--active":u===n})}),null!=t?t:n)})))}function v(e){var n=e.lazy,t=e.children,a=e.selectedValue,o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var l=o.find((function(e){return e.props.value===a}));return l?(0,r.cloneElement)(l,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})})))}function y(e){var n=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},r.createElement(b,(0,a.Z)({},e,n)),r.createElement(v,(0,a.Z)({},e,n)))}function N(e){var n=(0,h.Z)();return r.createElement(y,(0,a.Z)({key:String(n)},e))}},5981:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),l=t(4866),u=t(5162),s=["components"],i={title:"[docusaurus] Configure Code Block",tags:["devlog","docusaurus"],date:"2023-05-19T11:18"},c=void 0,p={permalink:"/gloria-tilog/2023/05/19/side-project/docusaurus/docusaurus-code-block",source:"@site/blog/side-project/docusaurus/2023-05-19-docusaurus-code-block.mdx",title:"[docusaurus] Configure Code Block",description:"docusaurus\uc758 \uae30\ub2a5\uc744 \uc774\uc6a9\ud558\uc5ec \uc880 \ub354 \uc608\uc058\uac8c \ub610\ub294 \uac00\ub3c5\uc131 \uc788\uac8c \uc791\uc131\ud55c \uc608\uc2dc \ucf54\ub4dc\uac00 \ubcf4\uc5ec\uc9c8 \uc218 \uc788\ub3c4\ub85d \uc124\uc815\ud574\ubcf4\uc558\ub2e4.",date:"2023-05-19T11:18:00.000Z",formattedDate:"May 19, 2023",tags:[{label:"devlog",permalink:"/gloria-tilog/tags/devlog"},{label:"docusaurus",permalink:"/gloria-tilog/tags/docusaurus"}],readingTime:6.45,hasTruncateMarker:!0,authors:[],frontMatter:{title:"[docusaurus] Configure Code Block",tags:["devlog","docusaurus"],date:"2023-05-19T11:18"},prevItem:{title:"[NX] Tips",permalink:"/gloria-tilog/2023/05/19/frontend/2023/nx-tips"},nextItem:{title:"Can not display inspector via iOS Simulator",permalink:"/gloria-tilog/2023/05/16/trouble-shootings/2023/ios-web-inspector"}},d={authorsImageUrls:[]},m=[{value:"theme",id:"theme",level:2},{value:"Custom magic comments",id:"custom-magic-comments",level:2},{value:"Additional Plugins",id:"additional-plugins",level:2},{value:"Interactive code editor",id:"interactive-code-editor",level:3},{value:"Docusaurus npm2yarn remark plugin",id:"docusaurus-npm2yarn-remark-plugin",level:3}],g={toc:m},f="wrapper";function h(e){var n=e.components,i=(0,r.Z)(e,s);return(0,o.kt)(f,(0,a.Z)({},g,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"docusaurus\uc758 \uae30\ub2a5\uc744 \uc774\uc6a9\ud558\uc5ec \uc880 \ub354 \uc608\uc058\uac8c \ub610\ub294 \uac00\ub3c5\uc131 \uc788\uac8c \uc791\uc131\ud55c \uc608\uc2dc \ucf54\ub4dc\uac00 \ubcf4\uc5ec\uc9c8 \uc218 \uc788\ub3c4\ub85d \uc124\uc815\ud574\ubcf4\uc558\ub2e4."),(0,o.kt)("p",null,"\uc791\uc131\ud55c \ucf54\ub4dc\uc5d0 \ub300\ud574 \uae30\uc874\uc5d0 \ub2e4\uc74c\uacfc \uac19\uc774 \uae30\ubcf8 \uc124\uc815\uc73c\ub85c \uc0ac\uc6a9\ud558\uace0 \uc788\ub358 \ubd80\ubd84\uc5d0 \uc791\uc131\ub41c \ucf54\ub4dc\uc5d0 \ub300\ud558\uc5ec \uc870\uae08 \ub354 \uac00\ub3c5\uc131\uc774 \uc88b\uace0 \uc774\ubed0\ubcf4\uc774\ub3c4\ub85d \ud558\uae30 \uc704\ud574\uc11c \uc124\uc815\uc744 \ubcc0\uacbd\ud558\uc600\ub2e4."),(0,o.kt)("h2",{id:"theme"},"theme"),(0,o.kt)("p",null,"\uae30\ubcf8\uc801\uc73c\ub85c docusaurus\uc5d0\uc11c \uae30\ubcf8\uc801\uc73c\ub85c \uc124\uc815\ub41c \ud14c\ub9c8\ub294 ",(0,o.kt)("strong",{parentName:"p"},"Palenight"),"\uc778\ub370, \uc774 \ubd80\ubd84\uc744 \ub0b4\uac00 \uc990\uaca8 \uc560\uc6a9\ud558\ub294(?) ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features/code-blocks#theming"},"dracula")," \ud14c\ub9c8\ub97c dark \ubaa8\ub4dc \uc720\ubb34\uc5d0 \uc0c1\uad00\uc5c6\uc774 \uc0ac\uc6a9\ud558\ub3c4\ub85d \ubcc0\uacbd\ud558\uc600\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"themeConfig:\n  prism: {\n-    theme: lightCodeTheme,\n-    darkTheme: darkCodeTheme,\n+   theme: require('prism-react-renderer/themes/dracula'),\n  },\n}),\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\ubcc0\uacbd \uc804\n",(0,o.kt)("img",{alt:"theme-basic-before",src:t(4908).Z,width:"1266",height:"346"})),(0,o.kt)("li",{parentName:"ul"},"\ubcc0\uacbd \ud6c4\n",(0,o.kt)("img",{alt:"theme-basic-after",src:t(1741).Z,width:"1300",height:"374"}))),(0,o.kt)("h2",{id:"custom-magic-comments"},"Custom magic comments"),(0,o.kt)("p",null,"\uae30\ubcf8\uc801\uc73c\ub85c ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features/code-blocks#line-highlighting"},(0,o.kt)("inlineCode",{parentName:"a"},"line highlight"))," \uae30\ub2a5\uc774 \uc9c0\uc6d0\uc774 \ub418\uace0 \uc788\uc9c0\ub9cc,\n\uc544\ub798\uc640 \uac19\uc774 \uc791\uc131\ub41c \ucf54\ub4dc\uc5d0 \ub300\ud55c \uc5d0\ub7ec \ud45c\uc2dc\ub97c \ud558\uc774\ub77c\uc774\ud2b8 \ud558\uace0 \uc2f6\uc744 \ub54c \uc0ac\uc6a9\ud558\uae30 \uc704\ud55c \uc124\uc815\uc744 \ucd94\uac00\ud574\uc8fc\uc5c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"themeConfig: {\n  prism: {\n    //...(SKIP)...\n      magicComments: [\n        // Remember to extend the default highlight class name as well!\n        {\n          className: 'theme-code-block-highlighted-line',\n          line: 'highlight-next-line',\n          block: {start: 'highlight-start', end: 'highlight-end'},\n        },\n        // highlight-start\n        {\n          className: 'code-block-error-line',\n          line: 'error-next-line',\n        },\n        // highlight-end\n      ],\n },\n},\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="src/css/custom.css"',title:'"src/css/custom.css"'},".code-block-error-line {\n  background-color: #ff000020;\n  display: block;\n  margin: 0 calc(-1 * var(--ifm-pre-padding));\n  padding: 0 var(--ifm-pre-padding);\n  border-left: 3px solid #ff000080;\n}\n")),(0,o.kt)("p",null,"\uc704\uc640 \uac19\uc774 \uc124\uc815\uc744 \ud574\uc900 \ub4a4\uc5d0 \ub2e4\uc74c \uc608\uc2dc\uc640 \uac19\uc774 \uc791\uc131\uc744 \ud558\uba74...."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="example"',title:'"example"'},"In JavaScript, trying to access properties on `null` will error.\n\n```js\nconst name = null;\n// error-next-line\nconsole.log(name.toUpperCase());\n// Uncaught TypeError: Cannot read properties of null (reading 'toUpperCase')\n```\n")),(0,o.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc774 ",(0,o.kt)("em",{parentName:"p"},"console.log")," \ub77c\uc778\uc5d0 \ud558\uc774\ub77c\uc774\ud2b8 \ub418\uc5b4 \ud45c\uc2dc\ub418\ub294 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const name = null;\n// error-next-line\nconsole.log(name.toUpperCase());\n// Uncaught TypeError: Cannot read properties of null (reading 'toUpperCase')\n")),(0,o.kt)("h2",{id:"additional-plugins"},"Additional Plugins"),(0,o.kt)("h3",{id:"interactive-code-editor"},"Interactive code editor"),(0,o.kt)("p",null,"\uc608\uc81c \ucf54\ub4dc\ub97c \uc791\uc131\ud558\uace0, \uc774\uc5d0 \ub300\ud55c \uc2e4\ud589 \uacb0\uacfc\ub97c \ucca8\ubd80\ud574\uc57c\ud558\ub294 \uacbd\uc6b0, \uae30\uc874\uc5d0\ub294 ",(0,o.kt)("a",{parentName:"p",href:"https://codepen.io/"},"CodePen"),"\uc5d0\uc11c \ucd94\uac00\ub85c \uc791\uc131\ud55c \ubd80\ubd84\uc744 \uc0bd\uc785\ud558\uace0\ub294 \ud588\uc5c8\ub2e4.\n\ud558\uc9c0\ub9cc, docusaurus\uc5d0\uc11c\ub294 ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/api/themes/@docusaurus/theme-live-codeblock"},(0,o.kt)("inlineCode",{parentName:"a"},"@docusaurus/theme-live-codeblock")),"\uc744 \uc81c\uacf5\ud558\uc5ec \ud574\ub2f9 \ud50c\ub7ec\uadf8\uc778\uc744 \ucd94\uac00\ub85c \uc124\uc815\ud574\uc8fc\uc5c8\ub2e4."),(0,o.kt)("p",null,"nx\ub97c \uc774\uc6a9\ud55c \ubaa8\ub178\ub808\ud3ec \uad6c\uc870\uac00 \uc544\ub2c8\ub77c\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 \ucee4\ub9e8\ub4dc\ub97c \uc2e4\ud589\ud558\uba74 \ub41c\ub2e4..."),(0,o.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run swizzle @docusaurus/theme-live-codeblock ReactLiveScope --eject\n"))),(0,o.kt)(u.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn swizzle @docusaurus/theme-live-codeblock ReactLiveScope --eject\n"))),(0,o.kt)(u.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm run swizzle @docusaurus/theme-live-codeblock ReactLiveScope --eject\n")))),(0,o.kt)("p",null,"\uadfc\ub370 ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/swizzling"},"swizzle")," \uae30\ub2a5\uc740 docusaurus\uc5d0\uc11c custom\uc744 \uc704\ud574 \uc81c\uacf5\ud558\ub294 \uae30\ub2a5\uc774\ub77c \ub0b4\uac00 \uc9c0\uae08 \uad6c\uc131\ud55c \uac83\uacfc \uac19\uc774\nNX\ub85c \ubaa8\ub178\ub808\ud3ec \uad6c\uc870\ub85c \ub418\uc5b4\uc788\uc5b4\uc11c \ud574\ub2f9 \ucee4\ub9e8\ub4dc\ub85c \uc2e4\ud589 \uc2dc \uc624\ub958\uac00 \ubc1c\uc0dd\ud558\uc5ec docusaurus\uac00 \uc124\uce58\ub41c \ud3f4\ub354 \ud558\uc704\uc5d0\uc11c npx\ub97c \uc774\uc6a9\ud558\uc5ec \ub2e4\uc74c\uacfc \uac19\uc774 \uc2e4\ud589\ud558\uc600\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'npx docusaurus swizzle "@docusaurus/theme-live-codeblock" "ReactLiveScope" --eject\n')),(0,o.kt)("p",null,'\uc704\uc640 \uac19\uc774 \uc2e4\ud589\ud558\uba74 \uc660\uc9c0 \ud558\uc9c0 \uc54a\uc73c\uba74 \uc548\ub420 \uc9d3\uc744 \ud558\ub294 \uac83 \uac19\uc740 \uba54\uc2dc\uc9c0\uac00 \ub098\uc624\uace0....\ucfe8\ud558\uac8c "YES"\ub97c \uc751\ub2f5\ud574\uc8fc\uba74 `ReactLiveScope" \ucef4\ud3ec\ub10c\ud2b8\uac00 \ucd94\uac00\ub418\uc5c8\ub2e4\uace0 \uc54c\ub824\uc900\ub2e4.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'[WARNING] "package.json" file not found at CWD: "/Users/gloria/Documents/mio/gloria-tilog/apps/doc".\n[INFO] This is non-critical, but could lead to undesired behavior downstream. Docusaurus assumes that "package.json" exists at CWD, because it\'s where the package manager looks up the script at. A common reason is because you have changed directory in the script. Instead of writing `"start": "cd website && docusaurus start"`, consider using the `[siteDir]` argument: `"start": "docusaurus start website"`.\n\n[WARNING]\nSwizzle action eject is unsafe to perform on ReactLiveScope.\nIt is more likely to be affected by breaking changes in the future\nIf you want to swizzle it, use the `--danger` flag, or confirm that you understand the risks.\n\n\u2714 Do you really want to swizzle this unsafe internal component? \u203a YES: I know what I am doing!\n[SUCCESS]\nEjected ReactLiveScope from @docusaurus/theme-live-codeblock to\n- "/Users/gloria/Documents/mio/gloria-tilog/apps/doc/src/theme/ReactLiveScope/index.js"\n')),(0,o.kt)("p",null,"\ud50c\ub7ec\uadf8\uc778\uc744 \uc124\uce58\ud55c \ud6c4\uc5d0 \ub2e4\uc74c\uacfc \uac19\uc774 \uc124\uc815\uc744 \ucd94\uac00\ud574\uc900\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  // ...(SKIP)...\n  themes: ['@docusaurus/theme-live-codeblock'],\n  // ...(SKIP)...\n  themeConfig: {\n    // ...(SKIP)...\n    liveCodeBlock: {\n      /**\n       * The position of the live playground, above or under the editor\n       * Possible values: \"top\" | \"bottom\"\n       */\n      playgroundPosition: 'bottom',\n    },\n  },\n};\n")),(0,o.kt)("p",null,"\uc124\uc815 \ud6c4, \ub2e4\uc74c\uacfc \uac19\uc740 \ucf54\ub4dc\ub97c \uc608\uc2dc\ub85c \uc791\uc131\ud558\uba74 web ide\ub97c \ud1b5\ud558\uc5ec \uac04\ub2e8\ud55c \ub3d9\uc791\uc5d0 \ub300\ud574\uc11c\ub294 \ucf54\ub4dc\ub97c \uc218\uc815 \ubc0f \uc2e4\ud589 \uacb0\uacfc\ub97c \ud655\uc778\ud560 \uc218 \uc788\ub2e4.\n(\ucc38\uace0\ub85c, ReactLiveScope\uc5d0 \uc608\uc81c\uc5d0\uc11c \uc0ac\uc6a9\ud558\uace0\uc790 \ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ucd94\uac00\ud558\uace0\uc790 \ud55c\ub2e4\uba74 ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features/code-blocks#imports"},"https://docusaurus.io/docs/markdown-features/code-blocks#imports")," \ub97c \ucc38\uace0\ud558\uba74 \ub41c\ub2e4.)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"```jsx live\nfunction Clock(props) {\n  const [date, setDate] = useState(new Date());\n  useEffect(() => {\n    const timerID = setInterval(() => tick(), 1000);\n\n    return function cleanup() {\n      clearInterval(timerID);\n    };\n  });\n\n  function tick() {\n    setDate(new Date());\n  }\n\n  return (\n    <div>\n      <h2>It is {date.toLocaleTimeString()}.</h2>\n      <button onClick={() => alert('hello')}>Click Me</button>\n    </div>\n  );\n}\n```\n")),(0,o.kt)("p",null,"\uc704\uc758 \ucf54\ub4dc\uc5d0 \ub300\ud558\uc5ec \uc791\uc131\ub41c \ube14\ub85c\uadf8\uc5d0\uc11c\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 live \uae30\ub2a5\uc774 \ud3ec\ud568\ub418\uc5b4 \ubcf4\uc5ec\uc9c4\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Clock(props) {\n  const [date, setDate] = useState(new Date());\n  useEffect(() => {\n    const timerID = setInterval(() => tick(), 1000);\n\n    return function cleanup() {\n      clearInterval(timerID);\n    };\n  });\n\n  function tick() {\n    setDate(new Date());\n  }\n\n  return (\n    <div>\n      <h2>It is {date.toLocaleTimeString()}.</h2>\n      <button onClick={() => alert('hello')}>Click Me</button>\n    </div>\n  );\n}\n")),(0,o.kt)("h3",{id:"docusaurus-npm2yarn-remark-plugin"},"Docusaurus npm2yarn remark plugin"),(0,o.kt)("p",null,"\ud328\ud0a4\uc9c0 \uc124\uce58\uc5d0 \ub300\ud55c \ub0b4\uc6a9\uc744 \uc791\uc131\ud560 \ub54c\uc5d0 yarn\uc640 npm \ub4f1...\uac01\uac01 \ub2e4 \uc791\uc131\ud574\uc8fc\uc9c0 \uc54a\uc544\ub3c4 \ub418\ub3c4\ub85d ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@docusaurus/remark-plugin-npm2yarn"},"@docusaurus/remark-plugin-npm2yarn")," \ud50c\ub7ec\uadf8\uc778\uc744 \ucd94\uac00\ud574\uc8fc\uc5c8\ub2e4."),(0,o.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @docusaurus/remark-plugin-npm2yarn\n"))),(0,o.kt)(u.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @docusaurus/remark-plugin-npm2yarn\n"))),(0,o.kt)(u.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @docusaurus/remark-plugin-npm2yarn\n")))),(0,o.kt)("p",null,"\ud50c\ub7ec\uadf8\uc778\uc744 \uc124\uce58\ud55c \ud6c4\uc5d0 \ub2e4\uc74c\uacfc \uac19\uc774 \uc124\uc815\uc744 \ucd94\uac00\ud574\uc900\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  // ...(SKIP)...\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          remarkPlugins: [\n            [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],\n          ],\n        },\n        blog: {\n          remarkPlugins: [\n            [\n              require('@docusaurus/remark-plugin-npm2yarn'),\n              { converters: ['pnpm'] },\n            ],\n          ],\n          // ...(SKIP)...\n        },\n      },\n    ],\n  ],\n};\n")),(0,o.kt)("p",null,"\uadf8\ub9ac\uace0 \ub2e4\uc74c\uacfc \uac19\uc774 ",(0,o.kt)("inlineCode",{parentName:"p"},"npm2yarn")," \ud0a4\uc6cc\ub4dc\ub97c \ucd94\uac00\ud558\uc5ec \uc791\uc131\ud574\uc8fc\uba74 \ub41c\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"```bash npm2yarn\nnpm install @docusaurus/remark-plugin-npm2yarn\n```\n")))}h.isMDXComponent=!0},1741:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/theme-basic-after-74da61e1cf1c4d3cb3d10ebdbbb6ede5.jpeg"},4908:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/theme-basic-before-d27534276d77e266b0e22fad64ceeb21.jpeg"}}]);