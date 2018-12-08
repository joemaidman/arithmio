import { removeWhiteSpace, isOperator } from '../utils';
import { TokenisedExpression } from '../models/TokenisedExpression';
import { handleNumber } from './handleNumber';
import { handleOperator } from './handleOperator';

export const tokenise = (expression: string): TokenisedExpression => {

  let nextPassNumberSign: string;
  const numbers: number[] = [];
  const operators: string[] = [];

  // strip whitespace from the expression and convert to a char array
  const characters: string[] = removeWhiteSpace(expression).split('');

  // loop over all chars in the expression
  for (let index = 0; index < characters.length; index++) {
    // if the current character is a number
    if (!isNaN(+characters[index])) {
      // if the current character is a number
      const handleNumberResponse = handleNumber(characters, index, nextPassNumberSign);
      numbers.push(handleNumberResponse.number);
      index = handleNumberResponse.newIndex;
      nextPassNumberSign = null;
    } else if (isOperator(characters[index]) && !nextPassNumberSign) {
      // if the current character is an operator and there is no pending signing for a number
      const handlOperatorResponse = handleOperator(characters, index);
      operators.push(handlOperatorResponse.operator);
      nextPassNumberSign = handlOperatorResponse.newNextPassNumberSign;
    }
  }

  return {
    operators,
    numbers
  };

};
