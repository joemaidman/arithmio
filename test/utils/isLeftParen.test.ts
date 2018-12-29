import { isLeftParen } from '../../src/utils/isLeftParen';

describe('isLeftParen', () => {
  it('should return true if the operator passed is a (', () => {
    expect(isLeftParen('(')).toBeTruthy();
  });
  it('should return false if the operator passed is NOT a (', () => {
    expect(isLeftParen('a')).toBeFalsy();
  });
});
