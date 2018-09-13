function insertShiftArray(arr, val) {
  if (arr.length < 1) {
    arr.push(val);
    return arr;
  } else {
    let arrInsPt = Math.floor(arr.length / 2);
    arr.splice(arrInsPt, 0, val);
    return arr;
  }
}

insertShiftArray([1,2,3,4,5,6,], 0);