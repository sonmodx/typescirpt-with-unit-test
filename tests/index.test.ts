import { merge } from '../src/index';

describe('testing index file', () => {
  test('If collection_2.length > collection_1.length should be fine', () => {
    expect(merge([1,3,5,7,9,20], [2,4,6,8,20,21,22])).toStrictEqual([1,2,3,4,5,6,7,8,9,20,20,21,22]);
    
  });
  test('If collection_2.length < collection_1.length should be fine', () => {
    expect(merge([1,3,5,7,9,20,21,22], [2,4,6,8,20])).toStrictEqual([1,2,3,4,5,6,7,8,9,20,20,21,22]);
    
  });
  test('If collection_2.length == collection_1.length should be fine', () => {
    expect(merge([1,3,5,7,9], [2,4,6,8,10])).toStrictEqual([1,2,3,4,5,6,7,8,9,10]);
    
  });
  test("If collection is empty should return empty", () => {
    expect(merge([], [])).toStrictEqual([]);
  });
});