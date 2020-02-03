import { getOperatorPrecedence } from '../../src/operators';

describe('getOperatorPrecedence', () => {
  describe(`WHEN passed '+'`, () => {
    it(`THEN it returns the correct value`, () => {
      expect(getOperatorPrecedence('+')).toEqual(2);
    });
  });

  describe(`WHEN passed '-'`, () => {
    it(`THEN it returns the correct value`, () => {
      expect(getOperatorPrecedence('-')).toEqual(2);
    });
  });

  describe(`WHEN passed '/'`, () => {
    it(`THEN it returns the correct value`, () => {
      expect(getOperatorPrecedence('/')).toEqual(3);
    });
  });

  describe(`WHEN passed '*'`, () => {
    it(`THEN it returns the correct value`, () => {
      expect(getOperatorPrecedence('*')).toEqual(3);
    });
  });

  describe(`WHEN passed '('`, () => {
    it(`THEN it returns the correct value`, () => {
      expect(getOperatorPrecedence('(')).toEqual(1);
    });
  });

  describe(`WHEN passed '^'`, () => {
    it(`THEN it returns the correct value`, () => {
      expect(getOperatorPrecedence('^')).toEqual(4);
    });
  });

  describe(`WHEN passed an unknown operator`, () => {
    it(`THEN it throws an error`, () => {
      expect(() => getOperatorPrecedence('blah')).toThrowError();
    });
  });
});
