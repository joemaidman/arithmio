import { multiply } from '../../src/operators/multiply';

describe('multiply', () => {
  it('should multiply two numbers together', () => {
    expect(multiply(2, 2)).toEqual(4);
  });
});
