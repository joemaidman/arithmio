import { add } from '../operators/add';

export const sum = (numbers: number[]): number => numbers.reduce(add, 0);
