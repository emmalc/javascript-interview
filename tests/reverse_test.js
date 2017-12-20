// Goal: Write a function that will reverse an array.
// Requirements: Make all of these tests pass without using the JavaScript reverse method.
// To run: node_modules/.bin/mocha -w tests/reverse_test.js

var assert = require('chai').assert,
    sinon = require('sinon'),
    _ = require('lodash'),
    reverse;

describe('reverse', function() {
  before(function() {
    try {
      reverse = require('../app/reverse.js');
    } catch(e) {}
  });

  it('Make sure to export a function using `module.exports`. @reverse', function() {
    assert.equal(typeof(reverse), "function", 'Make sure to export a function using `module.exports`.');
  });

  it('Your function should accept 1 argument - the array we want to reverse. @reverse', function() {
    assert.equal(reverse.length, 1, 'Your function should accept 1 argument - the array we want to reverse.');
  });

  it("It looks like you used the native JavaScript `reverse` method. Try to solve this problem without using this one. @reverse", function() {
    var input = [1,2,3],
        spy = sinon.spy();
    input.reverse = spy;

    reverse(input);

    assert.equal(spy.callCount, 0, "It looks like you used the native JavaScript `reverse` method. Try to solve this problem without using this one.")

  });

  describe('with an empty array', function() {
    it('When passed an empty array, your function should return an empty array. @reverse', function() {
      var result = reverse([]);
      assert.deepEqual(result, [], 'When passed an empty array, your function should return an empty array.');
    });
  });


  describe('with an array of length 1', function() {
    it('When passed an array with one item, your function should return the same array. @reverse', function() {
      var key = Math.random();
      var result = reverse([key]);
      assert.deepEqual(result, [key], 'When passed an array with one item, your function should return the same array.');
    });
  });


  describe('with an array longer than 1', function() {
    var longArray = [1,2,3,4,5];

    it('Your function is modifying the passed in argument. This means that the caller may see unforseen issues using your function. Make sure not to modify the passed in array. @reverse', function() {
      var clonedArray = _.clone(longArray);
      reverse(longArray)
      assert.deepEqual(longArray, clonedArray, 'Your function is modifying the passed in argument. This means that the caller may see unforseen issues using your function. Make sure not to modify the passed in array.');
    });

    it('When called, the array should have the same length as passed in array. @reverse', function() {
      var reverseResultLength = reverse(longArray).length
      assert.equal(reverseResultLength, longArray.length, "We tried calling your function with an array with `"+longArray.length+"` elements but your reverse function returned an array with `"+reverseResultLength+"` item(s).");
    });

    it('The `reverse` function should return the reversed array. @reverse', function() {
      var reverseResult = reverse(longArray),
          correct = [5,4,3,2,1];
      assert.deepEqual(reverseResult, correct, "We called your reverse function passing in `"+JSON.stringify(longArray)+"` and expected to get back `" + JSON.stringify(correct) + "`, but it returned `"+JSON.stringify(reverseResult)+"`.");
    });
  });
});
