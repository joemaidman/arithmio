import { add } from '../../src/operators/add';

describe('add', () => {
  it('should add two numbers together', () => {
    expect(add(1, 1)).toEqual(2);
  });
});
