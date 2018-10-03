'use strict';

const Node = require('../binary_tree/lib/node');
const Tree = require('../binary_tree/lib/tree');
const fizzbuzztree = require('../binary_tree/fizzbuzztree');

const treeOne = new Tree(1);
treeOne.root.left = new Node(2);
treeOne.root.right = new Node(3);
treeOne.root.right.left = new Node(15);
treeOne.root.left.right = new Node(12);
treeOne.root.left.right.left = new Node(10);

describe('fizzbuzztree tests', () => {
  test('return a tree node that began with a value of 3, but has had its value changed to fizz', () => {
    fizzbuzztree(treeOne);
    expect(treeOne.root.right.value).toEqual('fizz');
  });

  test('return a tree node that began with a value of 10 but had had its value changed to buzz', () => {
    fizzbuzztree(treeOne);
    expect(treeOne.root.left.right.left.value).toEqual('buzz');
  });

  test('return a tree node that began with a value of 15 but had had its value changed to fizzbuzz', () => {
    fizzbuzztree(treeOne);
    expect(treeOne.root.right.left.value).toEqual('fizzbuzz');
  });
});
