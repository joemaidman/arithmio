import { handleNumber } from '../../src/tokeniser';

describe('handleNumber', () => {
  describe('GIVEN a whole number as the current index character', () => {
    it('THEN it returns the correct number and new index', () => {
      expect(handleNumber('1'.split(''), 0, null)).toEqual({
        number: 1,
        newIndex: 0
      });
    });
  });
  describe('GIVEN a decimal number as the current index character', () => {
    it('THEN it returns the correct number and new index', () => {
      expect(handleNumber('1.2345'.split(''), 0, null)).toEqual({
        number: 1.2345,
        newIndex: 5
      });
    });
  });
  describe('GIVEN a decimal number as the current index character', () => {
    describe('WHEN there is a pending sign for the current number (-)', () => {
      it('THEN it returns the correct signed number and new index', () => {
        expect(handleNumber('1.2345'.split(''), 0, '-')).toEqual({
          number: -1.2345,
          newIndex: 5
        });
      });
    });
  });
  describe('GIVEN a number as the current index character', () => {
    describe('WHEN there is a pending sign for the current number (+)', () => {
      it('THEN it returns the correct signed number and new index', () => {
        expect(handleNumber('3'.split(''), 0, '+')).toEqual({
          number: 3,
          newIndex: 0
        });
      });
    });
  });
});
