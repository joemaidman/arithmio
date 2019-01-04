import { isConstant } from '../../src/utils/isConstant';

describe('isConstant', () => {
  it('should return true if the operator passed is a valid constant identifier', () => {
    expect(isConstant('E')).toBeTruthy();
  });
  it('should return false if the operator passed is NOT a valid constant identifier', () => {
    expect(isConstant('blah')).toBeFalsy();
  });
});
