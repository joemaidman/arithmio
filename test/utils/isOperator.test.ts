import { isOperator } from '../../src/utils/isOperator';

describe('isOperator', () => {
  it('should return true if the operator passed is a valid opeartor', () => {
    expect(isOperator('+')).toBeTruthy();
  });
  it('should return false if the operator passed is NOT a valid operator', () => {
    expect(isOperator('blah')).toBeFalsy();
  });
});
