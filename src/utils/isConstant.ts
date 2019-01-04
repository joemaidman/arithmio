import { constants } from '../constants/constants';
import { getEnumValues } from './getEnumValues';

export const isConstant = (string: string): boolean => getEnumValues(constants).indexOf(string) !== -1;
