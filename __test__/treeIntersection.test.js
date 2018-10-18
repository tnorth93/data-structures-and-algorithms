'use strict';

const Node = require('../binary_tree/lib/node');
const Tree = require('../binary_tree/lib/tree');
const treeIntersection = require('../hashmaps/tree_intersection');

const binaryTreeOne = new Tree(7);
binaryTreeOne.root.left = new Node(1);
binaryTreeOne.root.left.left = new Node(3);
binaryTreeOne.root.left.right = new Node(5);
binaryTreeOne.root.right = new Node(6);
binaryTreeOne.root.right.right = new Node(4);
binaryTreeOne.root.right.right.left = new Node(8);

const binaryTreeTwo = new Tree(7);
binaryTreeTwo.root.right = new Node(1);
binaryTreeTwo.root.left = new Node(3);
binaryTreeTwo.root.left.right = new Node(5);
binaryTreeTwo.root.right.left = new Node(6);
binaryTreeTwo.root.right.right = new Node(4);
binaryTreeTwo.root.right.right.left = new Node(8);

const binaryTreeThree = new Tree(93);
binaryTreeTwo.root.right = new Node(11);
binaryTreeTwo.root.left = new Node(33);

const binaryTreeFour = new Tree(null);
const binaryTreeFive = new Tree(null);

describe('#tree_intersection.js', () => {
  test('Trees have common nodes', () => {
    expect(treeIntersection(binaryTreeOne, binaryTreeTwo)[0]).toEqual(7);
  });

  test('Trees have no nodes', () => {
    expect(treeIntersection(binaryTreeFour, binaryTreeFive)[0]).toEqual(null);
  });

  test('Trees have no common nodes', () => {
    expect(treeIntersection(binaryTreeOne, binaryTreeThree)[0]).toEqual(undefined);
  });
});
