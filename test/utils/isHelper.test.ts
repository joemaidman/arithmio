import { isHelper } from '../../src/utils/isHelper';

describe('isConstant', () => {
  it('should return true if the operator passed is a valid helper identifier', () => {
    expect(isHelper('ABS')).toBeTruthy();
  });
  it('should return false if the operator passed is NOT a valid helper identifier', () => {
    expect(isHelper('blah')).toBeFalsy();
  });
});
