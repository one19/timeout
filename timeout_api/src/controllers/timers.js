const { Timer } = require('../models');
const { createController } = require('../utils/controller');

module.exports = createController(Timer, {
  // TODO business logic
  *filter(id) {
    const timers = yield Timer.filter({ userId: id }).run();
    return timers;
  }
});
