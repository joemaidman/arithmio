import { abs } from './abs';
import { sqrt } from './sqrt';
import { log } from './log';

export const getHelper = (helper: string): Function => {
  const helperOperation = helperMap[helper];
  if (!helperOperation) throw Error(`Helper ${helper} not found`);
  return helperOperation;
};

const helperMap: { [key:string]:Function; } = {
  'ABS': abs,
  'SQRT': sqrt,
  'LOG': log
};
