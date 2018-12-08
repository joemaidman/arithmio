import { getConstant } from '../../src/constants';
import { pi } from '../../src/constants/pi';

describe('getConstant', () => {
  describe(`WHEN passed 'PI'`, () => {
    it(`THEN it returns the value of PI`, () => {
      expect(getConstant('PI')).toEqual(pi);
    });
  });
  describe(`WHEN passed an unknown identifier`, () => {
    it(`THEN it throws an error`, () => {
      expect(() => getConstant('blah')).toThrowError();
    });
  });
});
