import { getOperation } from '../Operators';
import { isOperator, isOperand } from '../utils';

export const calculate = (postfixExpression: string): number => {

  const operandStack: number[] = [];

  postfixExpression.split(' ').map((item) => {
    if (isOperand(item.toString())) {
      operandStack.push(+item);
    } else if (isOperator(item.toString())) {
      const operandTwo = operandStack.pop();
      const operandOne = operandStack.pop();
      operandStack.push(getOperation(item.toString())(operandOne, operandTwo));
    }
  });

  // The answer is the only element left in the array
  return operandStack.pop();
};
