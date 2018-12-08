export interface MockExpression {
  expression: string;
  answer: number;
}

// mock expressions used to test the tokeniser and the calculator
export const mockExpressions: MockExpression[] = [
  {
    expression: '1+1',
    answer: 2
  },
  {
    expression: '1 + 2 - 4',
    answer: -1
  },
  // {
  //   expression: '  1 + 2 / 4',
  //   answer: 1.5
  // }
];
