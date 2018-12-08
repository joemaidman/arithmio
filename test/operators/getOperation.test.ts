import { getOperation } from '../../src/Operators';
import { add } from '../../src/Operators/add';
import { subtract } from '../../src/Operators/subtract';
import { divide } from '../../src/Operators/divide';
import { multiply } from '../../src/Operators/multiply';

describe('getOperation', () => {
  describe(`WHEN passed '+'`, () => {
    it(`THEN it returns the add operation`, () => {
      expect(getOperation('+')).toEqual(add);
    });
  });

  describe(`WHEN passed '-'`, () => {
    it(`THEN it returns the subtract operation`, () => {
      expect(getOperation('-')).toEqual(subtract);
    });
  });

  describe(`WHEN passed '/'`, () => {
    it(`THEN it returns the divide operation`, () => {
      expect(getOperation('/')).toEqual(divide);
    });
  });

  describe(`WHEN passed '*'`, () => {
    it(`THEN it returns the multiply operation`, () => {
      expect(getOperation('*')).toEqual(multiply);
    });
  });

  describe(`WHEN passed an unknown operator`, () => {
    it(`THEN it throws an error`, () => {
      expect(() => getOperation('blah')).toThrowError();
    });
  });
});
