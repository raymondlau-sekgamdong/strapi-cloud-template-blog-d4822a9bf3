'use strict';

/**
 * licensing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::licensing.licensing');
