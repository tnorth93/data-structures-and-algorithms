'use strict';

const Node = require('../binary_tree/lib/node');
const Tree = require('../binary_tree/lib/tree');
const parentchildtree = require('../binary_tree/parentchildtree');

const valA = 4;
const valB = 8;

const binaryTreeOne = new Tree(7);
binaryTreeOne.root.left = new Node(1);
binaryTreeOne.root.left.left = new Node(3);
binaryTreeOne.root.left.right = new Node(5);
binaryTreeOne.root.right = new Node(6);
binaryTreeOne.root.right.right = new Node(4);
binaryTreeOne.root.right.right.left = new Node(8);

const binaryTreeTwo = new Tree(null);

describe('#parentchildtree.js', () => {
  test('Values have a parent-child relationship', () => {
    expect(parentchildtree(valA, valB, binaryTreeOne)).toEqual(true);
  });

  test('Values do not have a parent-child relationship', () => {
    expect(parentchildtree(valB, valA, binaryTreeOne)).toEqual(false);
  });

  test('Tree is null', () => {
    expect(parentchildtree(valA, valB, binaryTreeTwo)[0]).toEqual(undefined);
  });
});
