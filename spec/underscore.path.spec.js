var chai = require("chai");
var _ = require("underscore");
_.path = require('../src/underscore.path');

describe("underscore.path", function() {
  'use strict';

  beforeEach(function() {
    this.object = {foo: {bar: 123}};
  });

  it("should work", function() {
    chai.expect(_.path(this.object, "foo.bar")).to.equal(123);
  });
});