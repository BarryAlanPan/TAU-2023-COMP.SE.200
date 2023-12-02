import { expect } from 'chai';
import isEmpty from "../src/isEmpty.js";

describe('isEmpty', function() {
  it('returns true for an empty array', function() {
    expect(isEmpty([])).to.be.true;
  });

  it('returns false for a non-empty array', function() {
    expect(isEmpty([1, 2, 3])).to.be.false;
  });

  // Add more cases for different types (objects, strings, etc.)
});