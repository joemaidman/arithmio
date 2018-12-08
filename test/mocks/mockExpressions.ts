import { TokenisedExpression } from '../../src/models/TokenisedExpression';

export interface MockExpression {
  expression: string;
  answer: number;
  tokenisedExpression: TokenisedExpression;
}

// mock expressions used to test the tokeniser and the calculator
export const mockExpressions: MockExpression[] = [
  {
    expression: '1+1',
    answer: 2,
    tokenisedExpression: {
      operators: ['+'],
      numbers: [1, 1]
    }
  },
  // {
  //   expression: '0.1+0.2',
  //   answer: 0.3
  // },
  {
    expression: '1 + 2 - 4',
    answer: -1,
    tokenisedExpression: {
      operators: ['+', '-'],
      numbers: [1, 2, 4]
    }
  },
  // {
  //   expression: '  1 + 2 / 4',
  //   answer: 1.5
  // }
];
