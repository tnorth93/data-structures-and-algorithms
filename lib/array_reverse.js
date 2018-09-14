'use strict';

function reverseArray(iArr) {
  const empArr = [];
  let indexCounter = 0;
  for (let i = iArr.length - 1; i > -1; i--) {
    empArr[indexCounter] = iArr[i];
    indexCounter += 1;
  }
  for (let x = 0; x < empArr.length; x++) {
    iArr[x] = empArr[x];
  }
  return iArr;
}

reverseArray([1, 2, 3]);
