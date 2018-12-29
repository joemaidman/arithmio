import { add } from './add';
import { subtract } from './subtract';
import { divide } from './divide';
import { multiply } from './multiply';
import { power } from './power';

export const getOperation = (operator: string): Function => {
  const operation = operatorMap[operator];
  if (!operation) throw Error(`Operator ${operator} not found`);
  return operation;
};

const operatorMap: { [key:string]:Function; } = {
  '+': add,
  '-': subtract,
  '/': divide,
  '*': multiply,
  '^': power
};
