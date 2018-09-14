'use strict';

const shiftArray = require('../lib/array_shift.js');

describe('#shift.test.js', () => {
  describe('testing the array shift module', () => {
    test('should return an array with the given value inserted into the middle index position of the original array', () => {
      const insertedValue = shiftArray.insertShiftArray([1, 2, 3, 4, 5, 6], 0);
      expect(insertedValue).toEqual([1, 2, 3, 0, 4, 5, 6]);
    });
    test('should return an array with just the value to be added if the array given was empty', () => {
      const onlyArrayValue = shiftArray.insertShiftArray([], 11);
      expect(onlyArrayValue).toEqual([11]);
    });
  });
});
