import { expect } from 'chai';
import isEmpty from "../src/isEmpty.js";

describe('isEmpty', function() {
  it('returns true for an empty array', function() {
    expect(isEmpty([])).to.be.true;
  });

  it('returns false for a non-empty array', function() {
    expect(isEmpty([1, 2, 3])).to.be.false;
  });

  // Test with different data types
  it('should return true for an empty object', () => {
    expect(isEmpty({})).to.be.true;
  });

  it('should return false for a non-empty object', () => {
    expect(isEmpty({ key: 'value' })).to.be.false;
  });

  it('should return true for null', () => {
    expect(isEmpty(null)).to.be.true;
  });

  it('should return true for undefined', () => {
    expect(isEmpty(undefined)).to.be.true;
  });

  it('should return true for an empty string', () => {
    expect(isEmpty('')).to.be.true;
  });

  it('should return false for a non-empty string', () => {
    expect(isEmpty('text')).to.be.false;
  });

  it('should return true for a number (treated as non-array-like)', () => {
    expect(isEmpty(123)).to.be.true;
  });

  // Test with complex data structures
  it('should return false for an array with empty objects', () => {
    expect(isEmpty([{}])).to.be.false;
  });

  it('should return false for an array with null values', () => {
    expect(isEmpty([null, null])).to.be.false;
  });

  // Test with Boolean values
  it('should return true for false (treated as non-array-like)', () => {
    expect(isEmpty(false)).to.be.true;
  });

  it('should return true for true (treated as non-array-like)', () => {
    expect(isEmpty(true)).to.be.true;
  });

});

describe('isEmpty - Additional Tests', () => {
  // Test for Map
  it('should return true for an empty Map', () => {
    expect(isEmpty(new Map())).to.be.true;
  });

  it('should return false for a non-empty Map', () => {
    const map = new Map();
    map.set('key', 'value');
    expect(isEmpty(map)).to.be.false;
  });

  // Test for Set
  it('should return true for an empty Set', () => {
    expect(isEmpty(new Set())).to.be.true;
  });

  it('should return false for a non-empty Set', () => {
    const set = new Set();
    set.add('value');
    expect(isEmpty(set)).to.be.false;
  });
});

describe('isEmpty - Prototype Check', () => {
  it('should return true for an object with no own enumerable properties', () => {
    function PrototypeObj() {}
    PrototypeObj.prototype.inheritedProp = 'value';

    const obj = new PrototypeObj();
    expect(isEmpty(obj)).to.be.true;
  });

  it('should return false for an object with own properties', () => {
    const obj = { ownProp: 'value' };
    expect(isEmpty(obj)).to.be.false;
  });
});