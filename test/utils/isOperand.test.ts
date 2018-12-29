import { isOperand } from '../../src/utils/isOperand';

describe('isOperand', () => {
  it('should return true if the character passed can be cast to a number', () => {
    expect(isOperand('1')).toBeTruthy();
  });
  it('should return false if the character passed CANNOT be cast to a number', () => {
    expect(isOperand('blah')).toBeFalsy();
  });
});
