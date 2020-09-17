/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// https://prismjs.com/plugins/inline-color/
// https://prismjs.com/plugins/diff-highlight/

// global style
require('./src/styles/main.css');

require('prismjs/themes/prism-tomorrow.css');
// customize style
require('./src/styles/prism.css');

// plugin
require('prismjs/plugins/line-numbers/prism-line-numbers.css');
// require('prismjs/plugins/line-highlight/prism-line-highlight.js');
