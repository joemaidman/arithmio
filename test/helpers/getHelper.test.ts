import { getHelper } from '../../src/helpers';
import { sum } from '../../src/helpers/sum';

describe('getHelper', () => {
  describe(`WHEN passed 'SUM'`, () => {
    it(`THEN it returns the correct function`, () => {
      expect(getHelper('SUM')).toEqual(sum);
    });
  });
  describe(`WHEN passed an unknown identifier`, () => {
    it(`THEN it throws an error`, () => {
      expect(() => getHelper('blah')).toThrowError();
    });
  });
});
