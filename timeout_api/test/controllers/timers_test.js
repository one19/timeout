const timers = require('../../src/controllers/timers');
const timerFixture = require('../fixtures/timer');
const { testStandardController } = require('../support/controllers');

describe('timers controller', () => {
  testStandardController(timers, timerFixture);
});
