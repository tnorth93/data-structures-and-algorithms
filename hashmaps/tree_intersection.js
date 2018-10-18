'use strict';

module.exports = function treeIntersection(treeOne, treeTwo) {
  const mapOne = new Map();
  const intersection = new Map();
  const returnArray = [];
  (function traverseTreeOne(root) {
    if (root === null) {
      return undefined;
    }
    mapOne.set(root.value, true);
    traverseTreeOne(root.left);
    traverseTreeOne(root.right);
    return undefined;
  }
  (treeOne.root));
  (function traverseTreeTwo(root) {
    if (root === null) {
      return undefined;
    }
    if (mapOne.get(root.value) && !intersection.get(root.value)) {
      intersection.set(root.value, true);
    }
    traverseTreeTwo(root.left);
    traverseTreeTwo(root.right);
  }
  (treeTwo.root));
  intersection.forEach(function(value, key) {
    returnArray.push(key);
  })
  return returnArray;
};
