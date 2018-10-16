'use strict';

module.exports = function repeatedWord(str) {
  const repeatMap = new Map();
  if (!str) {
    return undefined;
  }
  const strArray = str.split(' ');
  for (let i = 0; i < strArray.length; i++) {
    if (repeatMap.get(strArray[i])) {
      return strArray[i];
    }
    repeatMap.set(strArray[i], true);
  }
  return undefined;
};
