import { getHelper } from '../../src/helpers';
import { abs } from '../../src/helpers/abs';

describe('getHelper', () => {
  describe(`WHEN passed 'ABS'`, () => {
    it(`THEN it returns the correct function`, () => {
      expect(getHelper('ABS')).toEqual(abs);
    });
  });
  describe(`WHEN passed an unknown identifier`, () => {
    it(`THEN it throws an error`, () => {
      expect(() => getHelper('blah')).toThrowError();
    });
  });
});
