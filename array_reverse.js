var iArr = [1,2,3,4];

function reverseArray(iArr) {
  var empArr = [];
  var indexCounter = 0;
  for (var i = iArr.length -1; i > -1; i --) {
    empArr[indexCounter] = iArr[i];
    indexCounter += 1;
  }
  for (var x = 0; x < empArr.length; x ++) {
    iArr[x] = empArr[x];
  }
  return iArr;
}

reverseArray(iArr);