import { expect } from 'chai';
import upperFirst from '../src/upperFirst.js';

describe('upperFirst', () => {
  it('should convert the first letter to uppercase', () => {
    expect(upperFirst('fred')).to.equal('Fred');
  });
});