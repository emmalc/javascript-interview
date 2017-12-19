// Goal: Write a function which will sort an array
// Requirements: Make all of these tests pass without using the `sort` method.
// To run: mocha -w 2_sorter_test.js

var assert = require('chai').assert,
    sorter = require('../app/sorter.js');

describe('sorter', function() {
  describe('with an array longer than 1', function() {
    describe('with a sorted array', function() {
      it('returns the sorted array', function() {
        var sortedArray1 = [0, 1, 2, 2, 2, 2, 3, 3, 3, 4, 5, 5, 5, 34, 44, 71],
            sortedArray2 = [0, 1, 2, 2, 2, 2, 3, 3, 3, 4, 5, 5, 5, 34, 44, 71];
        assert.deepEqual(sortedArray2, sorter(sortedArray1));
      });
    });

    describe('with an unsorted array', function() {
      it('returns the sorted array', function() {
        var unsortedArray = [5,3,2,5,71,2,1,2,3,0,34,2,3,4,44,5],
            sortedArray = [0, 1, 2, 2, 2, 2, 3, 3, 3, 4, 5, 5, 5, 34, 44, 71];
        assert.deepEqual(sortedArray, sorter(unsortedArray));
      });
    });
  });

  describe('with an empty array', function() {
    it('returns the same array', function() {
      assert.deepEqual(sorter([]), [])
    });
  });

  describe('with an array of length 1', function() {
    it('returns the same array', function() {
      assert.deepEqual(['adam'], sorter(['adam']));
    });
  });
});
