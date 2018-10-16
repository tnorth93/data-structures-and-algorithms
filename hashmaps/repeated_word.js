'use strict';

module.exports = function repeatedWord(str) {
  let repeatMap = new Map();
  if (!str) {
    return undefined;
  }
  let strArray = str.split(' ');
  for (let i = 0; i < strArray.length; i++) {
    if (repeatMap.get(strArray[i])) {
      return strArray[i];
    } else if (!repeatMap.get(strArray[i])) {
      repeatMap.set(strArray[i], true);
    } else {
      return undefined;
    };
  };
};