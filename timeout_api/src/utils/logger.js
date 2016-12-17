const bunyan = require('bunyan');
const { LOG_LEVEL } = require('../../config');

const log = bunyan.createLogger({
  name: 'timeout_api',
  level: LOG_LEVEL
});

module.exports = log;
