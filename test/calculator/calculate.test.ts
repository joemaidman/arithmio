import { calculate } from '../../src/calculator';
import { convertInfixToPostfix } from '../../src/converter';
import { mockExpressions, MockExpression } from '../mocks';

describe('calculate', () => {
  mockExpressions.map(({ description, infixExpression, answer }: MockExpression) => {
    it(description, () => {
      const tokenisedExpression = convertInfixToPostfix(infixExpression);
      const calculatedAnswer = calculate(tokenisedExpression);
      expect(calculatedAnswer).toEqual(answer);
    });
  });
});
