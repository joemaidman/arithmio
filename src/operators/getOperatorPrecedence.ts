export const getOperatorPrecedence = (operator: string): number => {
  const operatorPrecedence = operatorPrecedenceMap[operator];
  if (!operatorPrecedence) throw Error(`Operator ${operator} is not a valid operator`);
  return operatorPrecedence;
};

const operatorPrecedenceMap: { [key:string]:number; } = {
  '^': 4,
  '*': 3,
  '/': 3,
  '+': 2,
  '-': 2,
  '(': 1
};
