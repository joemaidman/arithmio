import { removeWhiteSpace, isOperator } from '../utils';
import { TokenisedExpression } from '../models/TokenisedExpression';

export const tokenise = (expression: string): TokenisedExpression => {

  let nextPassNumberSign: string;
  const numbers: Number[] = [];
  const operators: string[] = [];

  // strip whitespace from the expression and convert to a char array
  const characters: string[] = removeWhiteSpace(expression).split('');
  // loop over all chars in the expression
  for (let i = 0; i < characters.length; i++) {
    // if the current character is a number
    if (!isNaN(+characters[i])) {
      let number = '';
      let nextNumber = i + 1;
      number = number + characters[i];
      // if we haven't reached the end, check if there is another digit in this number
      if (characters[nextNumber]) {
        // while there are more digits in this number (including decimals)
        while (isFinite(+characters[nextNumber]) || characters[nextNumber] === '.') {
          // add the digit or decimal point to the number
          number = number + characters[nextNumber];
          // move to the next number
          nextNumber++;
        }
        // set the index of the main loop to account for any digits in the current number
        i = nextNumber - 1;
      }
      // if the current number was proceeded by a sign (+/-)
      if (nextPassNumberSign) {
        // apply it
        numbers.push(+`${nextPassNumberSign}${number}`);
        // and reset the sign variable
        nextPassNumberSign = null;
      } else {
        // just push the number
        numbers.push(+number);
      }
      // if the character is an operator and isn't a
    } else if (isOperator(characters[i]) && !nextPassNumberSign) {

      if (i === 0) {
        nextPassNumberSign = characters[i];
      } else if (isOperator(characters[i + 1])) {
        // flag that the next character (a number) needs signing
        nextPassNumberSign = characters[i + 1];
      }
      if (i !== 0) {
        // push the current operator
        operators.push(characters[i]);
      }
    }
  }

  return {
    operators,
    numbers
  };

};
