import { expect } from 'chai';
import castArray from '../src/castArray.js';

describe('castArray', () => {
  it('should cast a non-array value as an array', () => {
    expect(castArray(1)).to.deep.equal([1]);
  });

  it('should not cast an array', () => {
    const array = [1, 2, 3];
    expect(castArray(array)).to.equal(array);
  });

  // Add more test cases as needed
});