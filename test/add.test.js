import { expect } from 'chai';
import add from '../src/add.js';

describe('add', function() {
  it('correctly adds two numbers', function() {
    expect(add(5, 3)).to.equal(8);
  });

  it('returns a single number if only one number is provided', function() {
    expect(add(5)).to.equal(5);
  });
});