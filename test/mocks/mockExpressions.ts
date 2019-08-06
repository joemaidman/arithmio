export interface MockExpression {
  description: string;
  infixExpression: string;
  postfixExpression: string;
  answer: number;

}

// mock expressions used to test the tokeniser and the calculator
export const mockExpressions: MockExpression[] = [
  // {
  //   description: 'Handles basic addition',
  //   infixExpression: '1 + 1',
  //   postfixExpression: '1 1 +',
  //   answer: 2,
  // },
  // {
  //   description: 'Handles addition and subtraction',
  //   infixExpression: '1 + 2 - 4',
  //   postfixExpression: '1 2 + 4 -',
  //   answer: -1,
  // },
  {
    description: 'Handles addition and multiplication',
    infixExpression: '1 + 2 * 4',
    postfixExpression: '1 2 4 * +',
    answer: 9,
  },
  // {
  //   description: 'Handles addition and division',
  //   infixExpression: '1 / 2 + 4',
  //   postfixExpression: '1 2 / 4 +',
  //   answer: 4.5
  // },
  // {
  //   description: 'Handles powers',
  //   infixExpression: '10 ^ 6',
  //   postfixExpression: '10 6 ^',
  //   answer: 1000000
  // },
  // {
  //   description: 'Handles brackets',
  //   infixExpression: '(2 / 4)',
  //   postfixExpression: '2 4 /',
  //   answer: 0.5
  // },
  // {
  //   description: 'Handles precedence without brackets',
  //   infixExpression: '1 + 2 / 4',
  //   postfixExpression: '1 2 4 / +',
  //   answer: 1.5
  // },
  // {
  //   description: 'Handles brackets and precedence',
  //   infixExpression: '1 + (2 / 4)',
  //   postfixExpression: '1 2 4 / +',
  //   answer: 1.5
  // },
  // {
  //   description: 'Handles decimal numbers',
  //   infixExpression: '1.5 + 2',
  //   postfixExpression: '1.5 2 +',
  //   answer: 3.5
  // },
  // {
  //   description: 'Handles negative numbers',
  //   infixExpression: '1 + -2',
  //   postfixExpression: '1 -2 +',
  //   answer: -1
  // },
  // {
  //   description: 'Handles negative numbers at first index',
  //   infixExpression: '-1 + 2',
  //   postfixExpression: '-1 2 +',
  //   answer: 1
  // },
  // {
  //   description: 'Handles multiple negative numbers',
  //   infixExpression: '-1 - -2',
  //   postfixExpression: '-1 -2 -',
  //   answer: 1
  // },
  // {
  //   description: 'Handles constants',
  //   infixExpression: '1 + PI',
  //   postfixExpression: '1 3.141592653589793 +',
  //   answer: 4.141592653589793
  // },
  // {
  //   description: 'Handles helper function (ABS) with a single argument',
  //   infixExpression: '1 + ABS(1)',
  //   postfixExpression: '1 1 +',
  //   answer: 2
  // },
  // {
  //   description: 'Handles helper function (ABS) with a nested helper function',
  //   infixExpression: '1 + ABS(PI)',
  //   postfixExpression: '1 3.141592653589793 +',
  //   answer: 4.141592653589793
  // },
  // {
  //   description: 'Handles binary representation issue with base 10',
  //   infixExpression: '0.1 + 0.2',
  //   postfixExpression: '0.1 0.2 +',
  //   answer: 0.3
  // }
];
