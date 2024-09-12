'use strict';

/**
 * lesson-note service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::lesson-note.lesson-note');
