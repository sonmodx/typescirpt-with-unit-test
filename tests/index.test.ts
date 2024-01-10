import { merge } from '../src/index';

describe('testing index file', () => {
  test('empty string should result in zero', () => {
    expect(merge([1,3,5,7,9], [2,4,6,8,10])).toStrictEqual([1,2,3,4,5,6,7,8,9,10]);
  });
});