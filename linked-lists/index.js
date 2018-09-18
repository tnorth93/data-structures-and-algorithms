'use strict';

const Node = require('./lib/node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  // Tom - O(1)
  insertAtHead(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    return this;
  }

  // Tom - O(n)
  find(value) {
    if (!this.head) {
      throw new Error('__ERROR__ The list is empty');
    }
    if (this.head.value === value) {
      return this.head;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        return currentNode.next;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  // Tom - O(n)
  remove(value) {
    if (!this.head) {
      throw new Error('__ERROR__ The list is empty!');
    }
    if (this.head.value === value) {
      this.head.next = this.head;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
        return currentNode.next;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  // Tom - O(n)
  append(value) {
    if (!this.head) {
      throw new Error('__ERROR__ The list is empty!');
    }
    const node = new Node(value);
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return node;
  }

  // Tom - O(n)
  kthFromEnd(k) {
    if (!this.head) {
      throw new Error('__ERROR__The list is empty!');
    }
    let slowCounter = 0;
    let fastCounter = 0;
    let currentNode = this.head;
    let correctNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
      slowCounter += 1;
    }
    if (k > slowCounter) {
      throw new Error('__ERROR__ k is greater than the length of the list!');
    }
    fastCounter = slowCounter - k;
    for (let i = 0; i < fastCounter; i++) {
      correctNode = correctNode.next;
    }
    return correctNode.value;
  }
};
