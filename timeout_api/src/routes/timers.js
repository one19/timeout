const { createRouter } = require('../utils/router');
const timers = require('../controllers/timers');

module.exports = createRouter(timers);
