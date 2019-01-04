import { isAlphaChar } from '../../src/utils/isAlphaChar';

describe('isAlphaChar', () => {
  it('should return true if the operator passed is in the english alphabet', () => {
    expect(isAlphaChar('a')).toBeTruthy();
  });
  it('should return false if the operator passed is NOT in the english alphabet', () => {
    expect(isAlphaChar('.')).toBeFalsy();
  });
});
