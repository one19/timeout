const { app } = require('../helper');
const timerFixture = require('../fixtures/timer');
const timers = require('../../src/controllers/timers');
const users = require('../../src/controllers/users');
const userFixture = require('../fixtures/user');
const { testStandardRoute } = require('../support/routes');

describe('/timers route', () => {
  testStandardRoute(app, '/timers', timerFixture);

  describe('POST /filter', () => {
    let user;
    let validData;
    let validTimer1;
    let validTimer2;

    beforeEach(function *() {
      validData = userFixture.data();
      user = yield users.create(validData);
      validTimer1 = timerFixture.data({ userId: user.id });
      validTimer2 = timerFixture.data({ userId: user.id });
      yield timers.create(validTimer1);
      yield timers.create(validTimer2);
    });

    it('returns all timers attached to a user', function *() {
      const response = yield app.post('/timers/filter', { userId: user.id });

      expect(response.status).to.eql(200);
      expect(response.body.length).to.eql(2);
      expect(response.body).to.be.a('array');
    });

    it('returns an empty array given an invalid user id', function *() {
      const response = yield app.post('/timers/filter', { userId: '' });

      expect(response.status).to.eql(200);
      expect(response.body.length).to.eql(0);
      expect(response.body).to.be.a('array');
    });
  });
});
