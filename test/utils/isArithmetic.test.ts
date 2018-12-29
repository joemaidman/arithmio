import { isArithmetic } from '../../src/utils/isArithmetic';

describe('isArithmetic', () => {
  it('should return true if the operator passed is a valid arithmetic identifier', () => {
    expect(isArithmetic('SQRT')).toBeTruthy();
  });
  it('should return false if the operator passed is NOT a valid arithmetic identifier', () => {
    expect(isArithmetic('blah')).toBeFalsy();
  });
});
