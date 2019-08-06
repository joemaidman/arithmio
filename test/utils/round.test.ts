import { round } from '../../src/utils/round';

describe('round', () => {
  it('should correctly round 0.1 + 0.2', () => {
    expect(round(0.1 + 0.2, 10)).toEqual(0.3);
  });
});
