'use strict';

const fizzerbuzzer = (node) => {
  if (node.value % 3 === 0 && node.value % 5 === 0) {
    node.value = 'fizzbuzz';
  } else if (node.value % 3 === 0) {
    node.value = 'fizz';
  } else if (node.value % 5 === 0) {
    node.value = 'buzz';
  }
};

const postTraversal = (root) => {
  if (!root) {
    return undefined;
  }
  postTraversal(root.left);
  postTraversal(root.right);
  fizzerbuzzer(root);
  return undefined;
};

module.exports = function fizzbuzztree(tree) {
  postTraversal(tree.root);
  return tree;
};
