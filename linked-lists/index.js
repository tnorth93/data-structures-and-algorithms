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
};
