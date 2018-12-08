import { operators } from '../operators/operators';
import { getEnumValues } from './getEnumValues';

export const isOperator = (string: string): boolean => getEnumValues(operators).indexOf(string) !== -1;
