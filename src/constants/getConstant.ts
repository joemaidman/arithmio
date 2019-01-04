import { pi } from './pi';
import { e } from './e';

export const getConstant = (constant: string): number => {
  const constantOperation = constantMap[constant];
  if (!constantOperation) throw Error(`Constant ${constant} not found`);
  return constantOperation;
};

const constantMap: { [key:string]:number; } = {
  'PI': pi(),
  'E' : e()
};
