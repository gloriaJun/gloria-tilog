import { isNull, isUndefined } from './validation';

describe('helpers - object', () => {
  describe('isNull', () => {
    test('should be return true when given null', () => {
      const obj = null;
      expect(isNull(obj)).toBeTruthy();
    });

    test('should be return false when given undifined', () => {
      let obj;
      expect(isNull(obj)).toBeFalsy();
    });

    test('should be return false when given value', () => {
      const obj = 3;
      expect(isNull(obj)).toBeFalsy();
    });
  });

  describe('isUndefined', () => {
    test('should be return false when given null', () => {
      const obj = null;
      expect(isUndefined(obj)).toBeFalsy();
    });

    test('should be return true when given undifined', () => {
      let obj;
      expect(isUndefined(obj)).toBeTruthy();
    });

    test('should be return false when given value', () => {
      const obj = 3;
      expect(isUndefined(obj)).toBeFalsy();
    });
  });

  // describe('isObject', () => {
  //   test('should be true when given object', () => {
  //     expect(isObject({})).toBeTruthy();
  //     expect(isObject({ a: 'a' })).toBeTruthy();
  //   });

  //   test('should be true when given array', () => {
  //     expect(isObject([])).toBeTruthy();
  //     expect(isObject([1, 2])).toBeTruthy();
  //   });

  //   test('should be false when given function', () => {
  //     expect(isObject(() => 'function')).toBeFalsy();
  //   });

  //   test('should be false when given string', () => {
  //     expect(isObject('string')).toBeFalsy();
  //   });

  //   test('should be false when given number', () => {
  //     expect(isObject(123)).toBeFalsy();
  //   });

  //   test('should be false when given null or undefined', () => {
  //     expect(isObject(null)).toBeFalsy();
  //     expect(isObject(undefined)).toBeFalsy();
  //   });
  // });

  // describe('isString', () => {
  //   test('should be true when given string', () => {
  //     expect(isString('string')).toBeTruthy();
  //   });

  //   test('should be false when given non-string', () => {
  //     expect(isString(123)).toBeFalsy();
  //     expect(isString(null)).toBeFalsy();
  //     expect(isString(undefined)).toBeFalsy();
  //   });
  // });

  // describe('isEmpty', () => {
  //   test('should be true when given empty', () => {
  //     expect(isEmpty(null)).toBeTruthy();
  //     expect(isEmpty(undefined)).toBeTruthy();
  //     expect(isEmpty('')).toBeTruthy();
  //     expect(isEmpty({})).toBeTruthy();
  //     expect(isEmpty([])).toBeTruthy();
  //     expect(isEmpty(123)).toBeTruthy();
  //   });

  //   test('should be false when given non-empty', () => {
  //     expect(isEmpty('string')).toBeFalsy();
  //   });

  //   test('should be true when given number', () => {
  //     expect(isEmpty(123)).toBeTruthy();
  //   });

  //   test('should be true when given function', () => {
  //     expect(isEmpty(() => undefined)).toBeFalsy();
  //   });
  // });
});
