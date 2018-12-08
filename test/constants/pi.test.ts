import { pi } from '../../src/constants/pi';

describe('PI', () => {
  it('should return pi', () => {
    expect(pi()).toEqual(Math.PI);
  });
});
