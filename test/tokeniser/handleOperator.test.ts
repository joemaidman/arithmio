import { handleOperator } from '../../src/tokeniser';

describe('handleOperator', () => {
  describe('GIVEN this is the first character in the expression', () => {
    it('THEN it returns null operator but indicates the next number needs signing', () => {
      expect(handleOperator('-'.split(''), 0)).toEqual({
        operator: null,
        newNextPassNumberSign: '-'
      });
    });
  });
  describe('GIVEN this is NOT the first character in the expression', () => {
    describe('WHEN the next character is an operator', () => {
      it('THEN it returns the correct operator and the sign for the next number', () => {
        expect(handleOperator('1++1'.split(''), 1)).toEqual({
          operator: '+',
          newNextPassNumberSign: '+'
        });
      });
    });
  });
  describe('GIVEN this is NOT the first character in the expression', () => {
    describe('WHEN the next character is NOT an operator', () => {
      it('THEN it returns the correct operator but no sign for the next number', () => {
        expect(handleOperator('1+1'.split(''), 1)).toEqual({
          operator: '+',
          newNextPassNumberSign: null
        });
      });
    });
  });
});
