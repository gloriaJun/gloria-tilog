'use strict';

require('ts-node').register();

const { createPages } = require('./src/gatsby-config/createPages');
exports.createPages = createPages;
