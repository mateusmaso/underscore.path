var chai = require("chai");
var _ = require("underscore");
_.path = require('../src/underscore.path');

describe("underscore.path", function() {
  beforeEach(function() {
    this.object = {foo: {bar: 123}};
  });

  it("should access normal property", function() {
    chai.expect(_.path(this.object, "foo")).to.be.an('object');
  });

  it("should access nested property by keypath", function() {
    chai.expect(_.path(this.object, "foo.bar")).to.equal(123);
  });
});