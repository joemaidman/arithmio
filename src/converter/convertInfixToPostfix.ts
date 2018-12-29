import { removeWhiteSpace, isOperator, isOperand, isLeftParen, isRightParen } from '../utils';
import { getOperatorPrecedence } from '../Operators';

const DECIMAL_SYMBOL = '.';

export const convertInfixToPostfix = (expression: string): string => {
  const operatorStack: string[] = [];
  const postfixExpression: (number | string)[] = [];
  let nextPassNumberSign: string = null;

  let skip = 0;

  const characters: string[] = removeWhiteSpace(expression).split('');

  characters.map((char, index) => {
    if (skip > 0) {
      skip--;
      return;
    }
    if (isOperand(char)) {
      let currentNumber: string | number = char;
      let j = index + 1;
      let nextChar = characters[j];
      while (isOperand(nextChar) || nextChar === DECIMAL_SYMBOL) {
        currentNumber = currentNumber + nextChar;
        j++;
        nextChar = characters[j];
        skip++;
      }
      if (nextPassNumberSign) {
        postfixExpression.push(+`${nextPassNumberSign}${currentNumber}`);
        nextPassNumberSign = null;
      } else {
        postfixExpression.push(+currentNumber);
      }
    } else if (isLeftParen(char)) {
      operatorStack.push(char);
      if (isOperator(characters[index + 1])) {
        nextPassNumberSign = characters[index + 1];
        skip++;
      }
    } else if (isRightParen(char)) {
      let lastOperator = operatorStack.pop();
      while (!isLeftParen(lastOperator)) {
        postfixExpression.push(lastOperator);
        lastOperator = operatorStack.pop();
      }
    } else if (isOperator(char)) {
      if (index === 0) {
        nextPassNumberSign = char;
        return;
      }
      while (
        operatorStack.length > 0 &&
        getOperatorPrecedence(operatorStack[operatorStack.length - 1]) >= getOperatorPrecedence(char)
      ) {
        postfixExpression.push(operatorStack.pop());
      }
      operatorStack.push(char);
      if (isOperator(characters[index + 1])) {
        nextPassNumberSign = characters[index + 1];
        skip++;
      }
    }
  });
  return Array.prototype
    .concat(postfixExpression, operatorStack.reverse())
    .join(' ');
};
