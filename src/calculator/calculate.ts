import { getOperation } from '../Operators';
import { TokenisedExpression } from '../models/TokenisedExpression';

export const calculate = ({ operators, numbers }: TokenisedExpression): number => {
  let answer;
  let currentNumber = 0;
  for (let i = 0; i < operators.length; i++) {
    const operation = getOperation(operators[i]);
    answer = operation(answer ? answer : numbers[0], numbers[currentNumber + 1]);
    currentNumber++;
  }
  return answer;
};
