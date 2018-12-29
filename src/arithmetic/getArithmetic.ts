import { sqrt } from './sqrt';

export const getArithmetic = (arithetic: string): Function => {
  const aritheticOperation = aritheticMap[arithetic];
  if (!aritheticOperation) throw Error(`Arithmetic ${arithetic} not found`);
  return aritheticOperation;
};

const aritheticMap: { [key:string]:Function; } = {
  'SQRT': sqrt
};
