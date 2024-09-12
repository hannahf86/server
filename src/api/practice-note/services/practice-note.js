'use strict';

/**
 * practice-note service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::practice-note.practice-note');
