"use strict";(self.webpackChunkgloria_tilog_root=self.webpackChunkgloria_tilog_root||[]).push([[8610],{3126:(e,t,a)=>{a.d(t,{s:()=>s});var r=a(7294),n=a(2949),l="https://utteranc.es";function s(){var e=(0,n.I)().colorMode,t=(0,r.useRef)(null);return(0,r.useLayoutEffect)((function(){if(t.current){var a=t.current.querySelector(".utterances-frame"),r="github-"+e;if(a)a.contentWindow.postMessage({type:"set-theme",theme:r},l);else{var n=document.createElement("script");n.src=l+"/client.js",n.setAttribute("repo","gloriaJun/gloria-tilog-comment"),n.setAttribute("issue-term","title"),n.setAttribute("theme",r),n.crossOrigin="anonymous",n.async=!0,t.current.appendChild(n)}}}),[e]),r.createElement("div",{ref:t})}},9434:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(7294),n=a(9460),l=a(3126),s=a(390);function o(e){var t=(0,n.C)().isBlogPostPage;return r.createElement(r.Fragment,null,r.createElement(s.Z,e),t&&r.createElement(l.s,null))}},942:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(7294);const n=Object.assign({React:r},r)},9703:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(7294),n=a(5999),l=a(2244);function s(e){var t=e.metadata,a=t.previousPage,s=t.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,n.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&r.createElement(l.Z,{permalink:a,title:r.createElement(n.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),s&&r.createElement(l.Z,{permalink:s,title:r.createElement(n.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},9985:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(7294),n=a(9460),l=a(9434);function s(e){var t=e.items,a=e.component,s=void 0===a?l.Z:a;return r.createElement(r.Fragment,null,t.map((function(e){var t=e.content;return r.createElement(n.n,{key:t.metadata.permalink,content:t},r.createElement(s,null,r.createElement(t,null)))})))}},1714:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var r=a(7294),n=a(6010),l=a(5999),s=a(8824),o=a(1944),i=a(5281),c=a(9960),g=a(9058),u=a(9703),m=a(197),p=a(9985);function d(e){var t,a=(t=(0,s.c)().selectMessage,function(e){return t(e,(0,l.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))});return(0,l.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:a(e.count),tagName:e.label})}function h(e){var t=d(e.tag);return r.createElement(r.Fragment,null,r.createElement(o.d,{title:t}),r.createElement(m.Z,{tag:"blog_tags_posts"}))}function E(e){var t=e.tag,a=e.items,n=e.sidebar,s=e.listMetadata,o=d(t);return r.createElement(g.Z,{sidebar:n},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,o),r.createElement(c.Z,{href:t.allTagsPath},r.createElement(l.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),r.createElement(p.Z,{items:a}),r.createElement(u.Z,{metadata:s}))}function b(e){return r.createElement(o.FG,{className:(0,n.Z)(i.k.wrapper.blogPages,i.k.page.blogTagPostListPage)},r.createElement(h,e),r.createElement(E,e))}}}]);