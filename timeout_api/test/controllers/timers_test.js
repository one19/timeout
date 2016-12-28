const timers = require('../../src/controllers/timers');
const users = require('../../src/controllers/users');
const timerFixture = require('../fixtures/timer');
const userFixture = require('../fixtures/user');
const { testStandardController } = require('../support/controllers');
const { sortById } = require('../../src/utils/helpers');

describe('timers controller', () => {
  testStandardController(timers, timerFixture);

  describe('.filter(id)', () => {
    let user;
    let timer1;
    let timer2;
    let validData;
    let validTimer1;
    let validTimer2;

    beforeEach(function *() {
      validData = userFixture.data();
      user = yield users.create(validData);
      validTimer1 = timerFixture.data({ userId: user.id });
      validTimer2 = timerFixture.data({ userId: user.id });
      timer1 = yield timers.create(validTimer1);
      timer2 = yield timers.create(validTimer2);
    });

    it('returns all timers attached to a user', function *() {
      const result = yield timers.filter(user.id);
      expect(result).to.be.a('array');
      expect(result.length).to.eql(2);
      const sortedRes = sortById(result);
      const sortedTimers = sortById([timer1, timer2]);

      expect(Object.assign({}, sortedRes[0])).to.eql(Object.assign({}, sortedTimers[0]));
      expect(Object.assign({}, sortedRes[1])).to.eql(Object.assign({}, sortedTimers[1]));
    });

    it('returns an empty array when userId isn\'t attached to any timers', function *() {
      const newUserData = userFixture.data();
      const newUser = yield users.create(newUserData);

      const result = yield timers.filter(newUser.id);
      expect(result).to.eql([]);
    });
  });
});
