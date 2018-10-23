'use strict';

const multiBracketValidation = require('../multi-bracket-validation');

class Stack {
  constructor() {
    this.stackStorage = [];
  }

  push(value) {
    this.stackStorage.push(value);
  }

  pop() {
    this.stackStorage.pop();
  }

  peek() {
    let topSlot;
    for (let z = 0; z < this.stackStorage.length; z++) {
      topSlot = z;
    }
    return this.stackStorage[topSlot];
  }
}

const bracketStack = new Stack();

describe('multiBracketValidation tests', () => {
  test('return true if string has balanced brackets', () => {
    expect(multiBracketValidation('(){}[]', bracketStack)).toEqual(true);
  });

  test('return true if string has no brackets', () => {
    expect(multiBracketValidation('yowhatup', bracketStack)).toEqual(true);
  });

  test('return false if string does not have balanced brackets', () => {
    expect(multiBracketValidation('()()(((()))(', bracketStack)).toEqual(false);
  });
});
