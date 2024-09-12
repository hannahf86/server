'use strict';

/**
 * technical-exercise service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::technical-exercise.technical-exercise');
