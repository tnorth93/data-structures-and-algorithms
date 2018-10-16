'use strict';

const repeatedWord = require('../hashmaps/repeated_word');

describe('#repeated_word.js', () => {
  test('repeatedWord should return the first word that is repeated in a string', () => {
    const myString = 'my cat is a real big cat';
    expect(repeatedWord(myString)).toEqual('cat');
  });

  test('repeatedWord with nothing passed in should return undefined', () => {
    expect(repeatedWord()).toEqual(undefined);
  });

  test('repeatedWord with a string passed in with no repeating words should return undefined', () => {
    const noRepeatstring = 'the dog went to dinner';
    expect(repeatedWord(noRepeatstring)).toEqual(undefined);
  });
});
