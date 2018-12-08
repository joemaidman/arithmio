import { tokenise } from './tokeniser';
import { calculate } from './calculator';

const expression: string = '100 + 10 + 2';
const tokenisedExpression = tokenise(expression);
const result = calculate(tokenisedExpression);
console.log('Answer: ', result);
