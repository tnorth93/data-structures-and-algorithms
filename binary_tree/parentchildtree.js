'use strict';

module.exports = function parentChildTree(valA, valB, tree) {
  let childTrue = false;
  let parent = null;
  if (!tree) {
    return undefined;
  }
  (function traverseA(root) {
    if (root === null) {
      return undefined;
    }
    if (root.value === valA) {
      parent = root;
    }
    traverseA(root.left);
    traverseA(root.right);
    return undefined;
  }(tree.root));
  (function traverseB(root) {
    if (!root || (!root.left && !root.right)) {
      return undefined;
    }
    if (root.left.value === valB || root.right.value === valB) {
      childTrue = true;
      return undefined;
    }
    traverseB(root.left);
    traverseB(root.right);
    return undefined;
  }(parent));
  return childTrue;
};
