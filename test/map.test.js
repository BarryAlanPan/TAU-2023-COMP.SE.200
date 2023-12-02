import { expect } from 'chai';
import map from "../src/map.js";

describe('map', function() {
  it('correctly applies a function to every element in an array', function() {
    const result = map([1, 2, 3], x => x * 2);
    expect(result).to.deep.equal([2, 4, 6]);
  });
});