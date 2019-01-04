import { convertInfixToPostfix } from '../../src/converter';
import { mockExpressions, MockExpression } from '../mocks';

describe('convertInfixToPostfix', () => {
  mockExpressions.map(({ infixExpression, postfixExpression, description }: MockExpression) => {
    it(description, () => {
      const calculatedPostfixExpression = convertInfixToPostfix(infixExpression);
      expect(calculatedPostfixExpression).toEqual(postfixExpression);
    });
  });

  it('Throws when passed an invalid character', () => {
    expect(() => convertInfixToPostfix('1+a')).toThrowError();
  });

  it('Throws when passed a misplaced operators', () => {
    expect(() => convertInfixToPostfix('1+++++')).toThrowError();
  });

});
