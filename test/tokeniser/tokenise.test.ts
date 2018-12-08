import { tokenise } from '../../src/tokeniser';
import { mockExpressions, MockExpression } from '../mocks';
import { printFailingExpression } from '../helpers';

describe('tokenise', () => {
  it('should tokenise the expression correctly', () => {
    mockExpressions.map(({ expression, tokenisedExpression }: MockExpression) => {
      const calculatedTokenisedExpression = tokenise(expression);
      if (JSON.stringify(calculatedTokenisedExpression) !== JSON.stringify(tokenisedExpression)) printFailingExpression(expression);
      expect(calculatedTokenisedExpression).toMatchObject(tokenisedExpression);
    });
  });
});
