import { subtract } from '../../src/operators/subtract';

describe('subtract', () => {
  it('should subtract the second number from the first number', () => {
    expect(subtract(1, 1)).toEqual(0);
  });
});
