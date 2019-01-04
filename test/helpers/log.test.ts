import { log } from '../../src/helpers/log';

describe('log', () => {
  it('should return the log of a number', () => {
    expect(log(10)).toEqual(2.302585092994046);
  });
});
