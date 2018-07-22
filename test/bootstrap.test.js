// This will create stubs functions for our overrides
import sinon from 'sinon';
// Natural language-like assertions
import chai from 'chai';
const should = chai.should(); // jshint ignore:line
const expect = chai.expect;

import util from 'util';

import { mock, unmock } from 'mocku';

global.expect = expect;
global.util = util;

// We'll use this to override require calls in routes
global.mock = mock;
global.unmock = unmock;

// This will create stubbed functions for our overrides
global.sinon = sinon;
global.match = sinon.match;
global.expectation = sinon.expectation;

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at:', p, 'reason:', reason);
  // application specific logging, throwing an error, or other logic here
});