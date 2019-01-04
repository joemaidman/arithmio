import { sqrt } from '../../src/helpers/sqrt';

describe('sqrt', () => {
  it('should return the square root of a number', () => {
    expect(sqrt(10)).toEqual(3.1622776601683795);
  });
});
