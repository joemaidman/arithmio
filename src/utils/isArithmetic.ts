import { arithmetics } from '../arithmetic/arithmetics';
import { getEnumValues } from './getEnumValues';

export const isArithmetic = (string: string): boolean => getEnumValues(arithmetics).indexOf(string) !== -1;
