"use strict";(self.webpackChunkgloria_tilog_root=self.webpackChunkgloria_tilog_root||[]).push([[8610],{942:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294);const l=Object.assign({React:n},n)},9703:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),l=a(5999),r=a(2244);function s(e){var t=e.metadata,a=t.previousPage,s=t.nextPage;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,l.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(r.Z,{permalink:a,title:n.createElement(l.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),s&&n.createElement(r.Z,{permalink:s,title:n.createElement(l.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},9985:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),l=a(9460),r=a(390);function s(e){var t=e.items,a=e.component,s=void 0===a?r.Z:a;return n.createElement(n.Fragment,null,t.map((function(e){var t=e.content;return n.createElement(l.n,{key:t.metadata.permalink,content:t},n.createElement(s,null,n.createElement(t,null)))})))}},1714:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var n=a(7294),l=a(6010),r=a(5999),s=a(8824),o=a(1944),i=a(5281),g=a(9960),c=a(9058),m=a(9703),p=a(197),u=a(9985);function d(e){var t,a=(t=(0,s.c)().selectMessage,function(e){return t(e,(0,r.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))});return(0,r.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:a(e.count),tagName:e.label})}function h(e){var t=d(e.tag);return n.createElement(n.Fragment,null,n.createElement(o.d,{title:t}),n.createElement(p.Z,{tag:"blog_tags_posts"}))}function b(e){var t=e.tag,a=e.items,l=e.sidebar,s=e.listMetadata,o=d(t);return n.createElement(c.Z,{sidebar:l},n.createElement("header",{className:"margin-bottom--xl"},n.createElement("h1",null,o),n.createElement(g.Z,{href:t.allTagsPath},n.createElement(r.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),n.createElement(u.Z,{items:a}),n.createElement(m.Z,{metadata:s}))}function E(e){return n.createElement(o.FG,{className:(0,l.Z)(i.k.wrapper.blogPages,i.k.page.blogTagPostListPage)},n.createElement(h,e),n.createElement(b,e))}}}]);