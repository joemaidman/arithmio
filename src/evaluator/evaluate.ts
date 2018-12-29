import { calculate } from '../calculator';
import { convertInfixToPostfix } from '../converter';

export const evaluate = (infixExpression: string): number => {
  const postFixExpression = convertInfixToPostfix(infixExpression);
  return calculate(postFixExpression);
};
