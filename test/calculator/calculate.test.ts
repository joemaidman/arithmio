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

  // it('Throws when passed an invalid operand', () => {
  //   expect(() => calculate('1 a +')).toThrowError();
  // });

  // it('Throws when passed an invalid operator', () => {
  //   expect(() => calculate('1 2 b')).toThrowError();
  // });

});
