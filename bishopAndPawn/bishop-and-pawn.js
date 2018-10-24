'use strict';

module.exports = function bishSlap(twoDArray) {
  if (!twoDArray) {
    return false;
  }
  let pawnLoc = [];
  let bishLoc = [];
  for (let i = 0; i < twoDArray.length; i++) {
    for (let n = 0; n < twoDArray[i].length; n++) {
      if (twoDArray[i][n] === 'P') {
        pawnLoc = [i, n];
      }
      if (twoDArray[i][n] === 'B') {
        bishLoc = [i, n];
      }
    }
  }
  if (!pawnLoc || !bishLoc) {
    return false;
  }
  const slope = Math.abs((pawnLoc[0] - bishLoc[0]) / (pawnLoc[1] - bishLoc[1]));
  if (slope === 1) {
    return true;
  }
  return false;
};
