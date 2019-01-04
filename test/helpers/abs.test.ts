import { abs } from '../../src/helpers/abs';

describe('abs', () => {
  it('should return the absolute value of a number', () => {
    expect(abs(-1)).toEqual(1);
  });
});
