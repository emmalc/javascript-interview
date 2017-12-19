// Goal: Write a function that accepts 2 arguments, an array nested any number of times and a item. Return true if the item exists in any of the arrays.
// Requirements: Make all of these tests pass without using underscore / lodash.
// To run: mocha -w 3_array_contains.js

var assert = require('chai').assert,
    arrayContains = require('../app/array_contains.js');

describe('arrayContains', function() {
  describe('with 1 level of data', function() {
    var arr = [5,3,2,5,71,2,1,2,3,0,34,2,3,4,44,5];

    it('returns true if the item is in the array', function() {
      assert.equal(arrayContains(arr, 4), true);
    });
    it('returns false if the item is not in the array', function() {
      assert.equal(arrayContains(arr, 40), false);
    });
  });

  describe('with multiple levels of data', function() {
    var arr = [[1,2,43,5,3,2,3,3,4], [5,76,432,523,2,12,34,1], [4,31,2], [[312,3,5555,7,5,1],[5,6,7,3,2,3],[8,5,3,2,3,4]]]
    it('returns true if the item is in the array', function() {
      assert.equal(arrayContains(arr, 7), true);
    });
    it('returns false if the item is not in the array', function() {
      assert.equal(arrayContains(arr, 400), false);
    });
  });

  describe('with an empty array', function() {
    it('returns false', function() {
      assert.equal(arrayContains([], 1), false);
    });
  });
});
