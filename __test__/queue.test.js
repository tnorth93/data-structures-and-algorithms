'use strict';

const queue = require('../queue_with_stacks');

describe('#queue_with_stacks.js', () => {
  test('testing to see whats up', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    expect(queue.stackB).toEqual(null);
  });
});
