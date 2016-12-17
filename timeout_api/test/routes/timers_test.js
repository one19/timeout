const { app } = require('../helper');
const timerFixture = require('../fixtures/timer');
const { testStandardRoute } = require('../support/routes');

describe('/timers route', () => {
  testStandardRoute(app, '/timers', timerFixture);
});
