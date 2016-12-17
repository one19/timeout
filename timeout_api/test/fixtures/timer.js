const generate = require('json-schema-faker');
const { schema } = require('../../config');
const { Timer } = require('../../src/models');
const { cleanUpAndMerge } = require('../support/commons');

exports.Model = Timer;
exports.schema = schema.timer;

exports.data = exports.valid = (params = {}) =>
  cleanUpAndMerge(generate(exports.schema), params);

exports.record = params =>
  new Timer(exports.data(params)).save();
