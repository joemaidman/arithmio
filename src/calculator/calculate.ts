import { getOperation } from '../operators';
import { isOperator, isOperand } from '../utils';

const PRECISION = 11;

export const calculate = (postfixExpression: string): number => {

  const operandStack: number[] = [];

  const split = postfixExpression.split(' ');
  if (split.length === 1 && isOperand(split[0])) return +split[0];
  if (split.length === 1 && isOperator(split[0])) throw Error(`Invalid character '${split[0]} found at position ${0}`);

  split.map((item, index) => {
    if (isOperand(item.toString())) {
      operandStack.push(+item);
    } else if (isOperator(item.toString())) {
      const multiplicator = Math.pow(10, 10);
      console.log('Operator: ', item.toString());
      const operandTwo = parseFloat((operandStack.pop() * multiplicator).toFixed(PRECISION));
      const operandOne =  parseFloat((operandStack.pop() * multiplicator).toFixed(PRECISION));
      console.log('Operand one: ', operandOne);
      console.log('Operand two: ', operandTwo);
      operandStack.push(getOperation(item.toString())(operandOne, operandTwo)  / multiplicator);
    } else {
      throw Error(`Invalid character '${item} found at position ${index}`);
    }
  });

  // The answer is the only element left in the array
  return operandStack.pop();
};
