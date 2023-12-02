import { expect } from 'chai';
import capitalize from '../src/capitalize.js';

describe('capitalize', () => {
  it('should capitalize the first letter of a string', () => {
    expect(capitalize('fred')).to.equal('Fred');
  });
});