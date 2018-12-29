import { evaluate } from '../../src/evaluator';

describe('evaluate', () => {
  it('Converts infix to postfix and calculates the answer', () => {
    expect(evaluate('1 + 10 - 2')).toEqual(9);
  });
});
