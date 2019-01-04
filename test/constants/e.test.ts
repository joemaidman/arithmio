import { e } from '../../src/constants/e';

describe('E', () => {
  it('should return e', () => {
    expect(e()).toEqual(Math.E);
  });
});
