import { getConstant } from '../../src/constants';
import { pi } from '../../src/constants/pi';
import { e } from '../../src/constants/e';

describe('getConstant', () => {
  describe(`WHEN passed 'PI'`, () => {
    it(`THEN it returns the value of PI`, () => {
      expect(getConstant('PI')).toEqual(Math.PI);
    });
  });
  describe(`WHEN passed 'E'`, () => {
    it(`THEN it returns the value of E`, () => {
      expect(getConstant('E')).toEqual(Math.E);
    });
  });
  describe(`WHEN passed an unknown identifier`, () => {
    it(`THEN it throws an error`, () => {
      expect(() => getConstant('blah')).toThrowError();
    });
  });
});
