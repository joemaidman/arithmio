import { calculate } from '../../src/calculator';
import { tokenise } from '../../src/tokeniser';
import { mockExpressions, MockExpression } from '../mocks';
import { printFailingExpression } from '../helpers';

describe('calculate', () => {
  it('should calculate the correct answers', () => {
    mockExpressions.map(({ expression, answer }: MockExpression) => {
      const tokenisedExpression = tokenise(expression);
      const calculatedAnswer = calculate(tokenisedExpression);
      if (calculatedAnswer !== answer) printFailingExpression(expression);
      expect(calculatedAnswer).toEqual(answer);
    });
  });
});
