import { getOperation } from '../../src/operators';
import { add } from '../../src/operators/add';
import { subtract } from '../../src/operators/subtract';
import { divide } from '../../src/operators/divide';
import { multiply } from '../../src/operators/multiply';
import { power } from '../../src/operators/power';

describe('getOperation', () => {
  describe(`WHEN passed '+'`, () => {
    it(`THEN it returns the correct operation`, () => {
      expect(getOperation('+')).toEqual(add);
    });
  });

  describe(`WHEN passed '-'`, () => {
    it(`THEN it returns the correct operation`, () => {
      expect(getOperation('-')).toEqual(subtract);
    });
  });

  describe(`WHEN passed '/'`, () => {
    it(`THEN it returns the correct operation`, () => {
      expect(getOperation('/')).toEqual(divide);
    });
  });

  describe(`WHEN passed '*'`, () => {
    it(`THEN it returns the correct operation`, () => {
      expect(getOperation('*')).toEqual(multiply);
    });
  });

  describe(`WHEN passed '^'`, () => {
    it(`THEN it returns the correct operation`, () => {
      expect(getOperation('^')).toEqual(power);
    });
  });

  describe(`WHEN passed an unknown operator`, () => {
    it(`THEN it throws an error`, () => {
      expect(() => getOperation('blah')).toThrowError();
    });
  });
});
