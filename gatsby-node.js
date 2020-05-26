'use strict';

require('ts-node').register();

const { createPages } = require('./src/config/createPages');
exports.createPages = createPages;
