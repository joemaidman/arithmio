# Arithmio [![Build Status](https://travis-ci.org/joemaidman/arithmio.svg?branch=master)](https://travis-ci.org/joemaidman/arithmio)

```
 ||  |   ___         ___        ||  |
 || _|__/  _\_______/  _\_______|| _|
 ||(___(  (________(  (_________||((_)
 ||  |  \___/       \___/       ||  |
 || _|________/  _\_____________|| _|
 ||(_________(  (_______________||((_)
 ||  |        \___/             ||  |
 
```
A maths expression parser and calculator. 

Converts [infix](https://en.wikipedia.org/wiki/Infix_notation) to [postfix](https://en.wikipedia.org/wiki/Reverse_Polish_notation) expressions and calculates the result.

## Installation

'arithmio' is available as an [npm package](https://www.npmjs.com/package/arithmio):

    $ npm install arithmio

or as a RESTful API at [https://arithmio.herokuapp.com/](https://arithmio.herokuapp.com/).

## Usage
<b>```evaluate(infixExpression: string): number```</b>

calculates the result of infixExpression. 

<b>```convertInfixToPostfix(expression: string): string```</b>

returns a postfix string of expression

<b>```calculate(postfixExpression: string): number```</b>

calculates the result of postfixExpression

## Basic example test file

```js
var evaluate = require('arithmio').evaluate;  

/* es6 import
import { evaluate } from 'arithmio';
*/

const infixExpression = '1 + 1';

const result = evaluate(infixExpression); // 2
```

### Operators
<b>```+```</b>

Adds the first operand to the second operand

<b>```-```</b>

Subtracts the first operand from the second operand.

<b>```*```</b>

Multiplies the first operand by the second operand.

<b>```/```</b>

Divides the first operand by the second operand.

<b>```^```</b>

Raises the first operand to the power of the second operand e.g. '10^6'.

### Arithmetics
Shorthand to perform common arithmetic operations.

<b>```SQRT(n)```</b>

returns the square-root of n.

### Constants
Shorthand to access mathmatical constants.

<b>```PI```</b>

returns the value of PI.

### Helpers
<b>```SUM(x, y, z...)```</b>

Returns the sum of all operands passed.


## Future development
- Logical operators
- Additional helper functions