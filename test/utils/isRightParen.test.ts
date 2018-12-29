import { isRightParen } from '../../src/utils/isRightParen';

describe('isRightParen', () => {
  it('should return true if the operator passed is a )', () => {
    expect(isRightParen(')')).toBeTruthy();
  });
  it('should return false if the operator passed is NOT a )', () => {
    expect(isRightParen('a')).toBeFalsy();
  });
});
