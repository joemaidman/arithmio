import { removeWhiteSpace } from '../../src/utils/removeWhiteSpace';

describe('removeWhiteSpace', () => {
  it('should return the string passed with all white space removed', () => {
    expect(removeWhiteSpace('1 + 1 /  5')).toEqual('1+1/5');
  });
});
