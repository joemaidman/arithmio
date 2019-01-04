import { sum } from '../../src/helpers/sum';

describe('sum', () => {
  it('should return the sum of an array of numbers', () => {
    expect(sum([1, 2, 3])).toEqual(6);
  });
});
