import { getEnumValues } from '../../src/utils/getEnumValues';
import { MockEnum } from '../mocks/mockEnum';

describe('getEnumValues', () => {
  it('should return the values of an enum if the operator passed is a valid opeartor', () => {
    expect(getEnumValues(MockEnum)).toEqual(['ONE', 'TWO']);
  });
});
