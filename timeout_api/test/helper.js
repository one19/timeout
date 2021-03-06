const chai = require('chai');
const mocha = require('mocha');
const coMocha = require('co-mocha');

coMocha(mocha);

const app = require('../src/index');
const doubleagent = require('doubleagent');

exports.app = doubleagent(app);
global.expect = chai.expect;

const models = require('../src/models');

process.nextTick(() => {
  before(function *() {
    this.timeout(30000);

    // waiting on all tables to pop up
    yield Object.keys(models).map(
      name => models[name].ready()
    );
  });
});

const timekeeper = require('timekeeper');

process.nextTick(() => {
  before(() => timekeeper.freeze(new Date()));
  after(() => timekeeper.reset());
});
