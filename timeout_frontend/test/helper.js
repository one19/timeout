const chai = require('chai');
chai.use(require('chai-enzyme')());
chai.use(require('sinon-chai'));

const jsdom = require('jsdom');

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;
global.navigator = window.navigator;

// Handle CSS module imports
require('css-modules-require-hook')({
  generateScopedName: '[name]__[local]'
});
