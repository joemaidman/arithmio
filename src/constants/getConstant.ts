import { pi } from './pi';

export const getConstant = (constant: string): Function => {
  const constantOperation = constantMap[constant];
  if (!constantOperation) throw Error(`Constant ${constant} not found`);
  return constantOperation;
};

const constantMap: { [key:string]:Function; } = {
  'PI': pi
};
