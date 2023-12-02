import { expect } from 'chai';
import get from '../src/get.js';

describe('get', () => {
  const object = { 'a': [{ 'b': { 'c': 3 } }] };

  it('should get the nested property', () => {
    expect(get(object, 'a[0].b.c')).to.equal(3);
  });

  it('should return undefined for non-existent property', () => {
    expect(get(object, 'a.b.c')).to.be.undefined;
  });

  // Add more test cases as needed
});