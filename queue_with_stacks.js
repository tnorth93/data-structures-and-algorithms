'use strict';

class Stack {
  constructor() {
    this.stackStorage = [];
  }

  push(value) {
    this.stackStorage.push(value);
  }

  pop() {
    console.log(this.stackStorage);
    return this.stackStorage.pop();
  }
}

class TwoStackQueue {
  constructor() {
    this.stackA = new Stack();
    this.stackB = new Stack();
  }

  enqueue(value) {
    this.stackA.push(value);
  }

  dequeue() {
    let popValue = this.stackB.pop();
    if (popValue) {
      return popValue;
    }
    while (true) { // eslint-ignore-line
      popValue = this.stackA.pop();
      if (popValue) {
        this.stackB.push(popValue);
      } else {
        break;
      }
    }
    return this.stackB.pop();
  }
}

const testStack = new TwoStackQueue();
testStack.enqueue(5);
testStack.enqueue(6);
testStack.enqueue(7);
testStack.enqueue(8);
testStack.enqueue(9);

testStack.dequeue();
testStack.dequeue();
testStack.dequeue();
testStack.dequeue();
testStack.dequeue();

module.exports = TwoStackQueue;
