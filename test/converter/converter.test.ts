import { convertInfixToPostfix } from '../../src/converter';
import { mockExpressions, MockExpression } from '../mocks';

describe('tokenise', () => {
  mockExpressions.map(({ infixExpression, postfixExpression, description }: MockExpression) => {
    it(description, () => {
      const calculatedPostfixExpression = convertInfixToPostfix(infixExpression);
      expect(calculatedPostfixExpression).toEqual(postfixExpression);
    });
  });
});
