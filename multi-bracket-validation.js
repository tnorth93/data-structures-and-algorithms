'use strict';

module.exports = function multiBracketValidation(str, bracketStack) {
  const stringArray = str.split('');
  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === '(' || '[' || '{') {
      bracketStack.push(stringArray[i]);
      console.log(bracketStack);
    }
    if (stringArray[i] === ')') {
      if (bracketStack.peek() === '(') {
        bracketStack.pop();
      }
    }
    if (stringArray[i] === ']') {
      if (bracketStack.peek() === '[') {
        bracketStack.pop();
      }
    }
    if (stringArray[i] === '}') {
      if (bracketStack.peek() === '{') {
        bracketStack.pop();
      }
    }
  }
  if (bracketStack.length === 0) {
    return false;
  }
  return true;
};
