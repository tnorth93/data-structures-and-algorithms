'use strict';

const stringCounter = require('../hashmaps/string-counter');

describe('#string-counter.js', () => {
  test('should return separate counts for C and c', () => {
    const cat = stringCounter('Cat cat');
    expect(cat.get('C')).toEqual(1);
    expect(cat.get('c')).toEqual(1);
  });

  test('should return a valid count of 1 for each letter in the string', () => {
    const tester = (stringCounter('youch'));
    expect(tester.get('y')).toEqual(1);
    expect(tester.get('o')).toEqual(1);
    expect(tester.get('u')).toEqual(1);
    expect(tester.get('c')).toEqual(1);
    expect(tester.get('h')).toEqual(1);
  });

  test('should return undefined if there is not a string for the argument', () => {
    expect(stringCounter()).toEqual(undefined);
  });
});
