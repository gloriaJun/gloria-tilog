"use strict";(self.webpackChunkgloria_tilog_root=self.webpackChunkgloria_tilog_root||[]).push([[3751],{727:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var r=a(7294),n=a(6010),l=a(5155),c=a(1944),s=a(5281),o=a(215),u=a(6090),i=a(197);function g(e){var t=e.tags,a=(0,l.M)();return r.createElement(c.FG,{className:(0,n.Z)(s.k.wrapper.docsPages,s.k.page.docsTagsListPage)},r.createElement(c.d,{title:a}),r.createElement(i.Z,{tag:"doc_tags_list"}),r.createElement(o.Z,null,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement("main",{className:"col col--8 col--offset-2"},r.createElement("h1",null,a),r.createElement(u.Z,{tags:t}))))))}},3008:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(7294),n=a(6010),l=a(9960);const c={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function s(e){var t=e.permalink,a=e.label,s=e.count;return r.createElement(l.Z,{href:t,className:(0,n.Z)(c.tag,s?c.tagWithCount:c.tagRegular)},a,s&&r.createElement("span",null,s))}},6090:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(7294),n=a(5155),l=a(3008);const c={tag:"tag_Nnez"};function s(e){var t=e.letterEntry;return r.createElement("article",null,r.createElement("h2",null,t.letter),r.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return r.createElement("li",{key:e.permalink,className:c.tag},r.createElement(l.Z,e))}))),r.createElement("hr",null))}function o(e){var t=e.tags,a=(0,n.P)(t);return r.createElement("section",{className:"margin-vert--lg"},a.map((function(e){return r.createElement(s,{key:e.letter,letterEntry:e})})))}},5155:(e,t,a)=>{a.d(t,{M:()=>n,P:()=>l});var r=a(5999),n=function(){return(0,r.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"})};function l(e){var t={};return Object.values(e).forEach((function(e){var a=function(e){return e[0].toUpperCase()}(e.label);null!=t[a]||(t[a]=[]),t[a].push(e)})),Object.entries(t).sort((function(e,t){var a=e[0],r=t[0];return a.localeCompare(r)})).map((function(e){return{letter:e[0],tags:e[1].sort((function(e,t){return e.label.localeCompare(t.label)}))}}))}}}]);