'use strict';

const BishSlap = require('../bishopAndPawn/bishop-and-pawn');

const chessBoardOne = [[0, 1, 2, 3, 4, 5, 6, 7], [0, 1, 2, 3, 4, 5, 6, 7], [0, 1, 2, 3, 4, 5, 6, 7], [0, 1, 2, 3, 4, 5, 6, 7], [0, 1, 2, 3, 4, 'B', 6, 7], [0, 1, 2, 3, 4, 5, 'P', 7], [0, 1, 2, 3, 4, 5, 6, 7], [0, 1, 2, 3, 4, 5, 6, 7]];
const chessBoardTwo = [[0, 1, 2, 3, 4, 5, 6, 7], [0, 1, 2, 3, 4, 5, 6, 7], [0, 1, 2, 3, 4, 5, 6, 7], [0, 1, 2, 3, 4, 5, 6, 7], ['B', 1, 2, 3, 4, 5, 6, 7], [0, 1, 2, 3, 4, 5, 'P', 7], [0, 1, 2, 3, 4, 5, 6, 7], [0, 1, 2, 3, 4, 5, 6, 7]];

describe('#bishop-and-pawn.js', () => {
  test('Should return true if pawn can be hit by bishop', () => {
    expect(BishSlap(chessBoardOne)).toEqual(true);
  });

  test('should return false if no chessboard is given', () => {
    expect(BishSlap()).toEqual(false);
  });

  test('should return false if pawn is not within range of bishop', () => {
    expect(BishSlap(chessBoardTwo)).toEqual(false);
  });
});
