'use strict';

const TwoStackQueue = require('../queue_with_stacks.js');

const myQueue = new TwoStackQueue();

describe('#queue_with_stacks.js', () => {
  test('2 should be returned as the value that is popped out of stackB', () => {
    myQueue.enqueue(1);
    myQueue.enqueue(2);
    myQueue.enqueue(3);
    myQueue.dequeue();
    expect(myQueue.dequeue()).toEqual(2);
  });

  test('should queue stackA with the latest enqueue value being pushed into the end of the array (3 in this case)', () => {
    myQueue.enqueue(1);
    myQueue.enqueue(2);
    myQueue.enqueue(3);
    expect(myQueue.stackA.stackStorage).toEqual([1, 2, 3]);
  });

  test('should return undefined if no value is given as an argument for enqueue', () => {
    myQueue.dequeue();
    myQueue.dequeue();
    myQueue.dequeue();
    myQueue.enqueue();
    expect(myQueue.stackA.stackStorage).toEqual([undefined]);
  });
});
