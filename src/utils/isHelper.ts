import { helpers } from '../helpers/helpers';
import { getEnumValues } from './getEnumValues';

export const isHelper = (string: string): boolean => getEnumValues(helpers).indexOf(string) !== -1;
