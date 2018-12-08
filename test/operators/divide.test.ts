import { divide } from '../../src/operators/divide';

describe('divide', () => {
  it('should divide the first number by the second number', () => {
    expect(divide(4, 2)).toEqual(2);
  });
});
