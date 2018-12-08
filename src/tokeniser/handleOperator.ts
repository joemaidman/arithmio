import { isOperator } from '../utils';
import { HandleOperatorResponse } from '../models/HandleOperatorResponse';

export const handleOperator = (characters: string[], index: number): HandleOperatorResponse => {

  let newNextPassNumberSign: string | null = null;
  let operator: string | null = null;

  // if this is the first character
  if (index === 0) {
    // it must be a sign for a number
    newNextPassNumberSign = characters[index];
  } else if (isOperator(characters[index + 1])) {
    // flag that the next character (a number) needs signing
    newNextPassNumberSign = characters[index + 1];
  }
  if (index !== 0) {
    // assign the current operator
    operator = characters[index];
  }

  return {
    operator,
    newNextPassNumberSign
  };

};
