'use strict';

module.exports = function stringCounter(str) {
  const strMap = new Map();
  if (typeof str !== 'string') {
    return undefined;
  }
  const strArr = str.split('');
  for (let i = 0; i < strArr.length; i++) {
    if (!strMap.get(strArr[i])) {
      strMap.set(strArr[i], 1);
    } else {
      strMap.set(strArr[i], strMap.get(strArr[i]) + 1);
    }
  }
  return strMap;
};
