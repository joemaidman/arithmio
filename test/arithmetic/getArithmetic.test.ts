import { getArithmetic } from '../../src/arithmetic';
import { sqrt } from '../../src/arithmetic/sqrt';

describe('getArithmetic', () => {
  describe(`WHEN passed 'SQRT'`, () => {
    it(`THEN it returns the correct function`, () => {
      expect(getArithmetic('SQRT')).toEqual(sqrt);
    });
  });
  describe(`WHEN passed an unknown identifier`, () => {
    it(`THEN it throws an error`, () => {
      expect(() => getArithmetic('blah')).toThrowError();
    });
  });
});
