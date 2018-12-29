import { power } from '../../src/operators/power';

describe('power', () => {
  it('should raise the first number to the power of the second', () => {
    expect(power(2, 3)).toEqual(8);
  });
});
