'use strict';

module.exports = function multiBracketValidation(str, bracketStack) {
  const stringArray = str.split('');
  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === '(' || stringArray[i] === '[' || stringArray[i] === '{') {
      bracketStack.push(stringArray[i]);
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
  if (!bracketStack) {
    return true;
  }
  if (bracketStack.length === 0) {
    console.log(bracketStack);
    return true;
  }
  return false;
};
