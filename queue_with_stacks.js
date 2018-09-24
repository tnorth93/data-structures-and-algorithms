class Queue {
  constructor() {
    this.stackA = new Stack();
    this.stackB = new Stack();
  }

  enqueue(value) {
    stackA.push(value);
  }

  dequeue() {
    while (stackA !== null) {
      stackB.push(stackA.pop());
    }
    return stackB.pop();
  }
}
