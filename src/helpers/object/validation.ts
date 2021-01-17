export function isNull<T>(obj: T): boolean {
  return obj === null;
}

export function isUndefined<T>(obj: T): boolean {
  return obj === undefined;
}

export function isNullOrUndefined<T>(obj: T): boolean {
  return isNull(obj) || isUndefined(obj);
}

// export const isObject = (obj: any): boolean => {
//   return !isNullOrUndefined(obj) && typeof obj === 'object';
// };

// export const isArray = (obj: any): boolean => {
//   return !isNullOrUndefined(obj) && Array.isArray(obj);
// };

// export const isString = (obj: any): boolean => {
//   return !isNullOrUndefined(obj) && typeof obj === 'string';
// };

export function isEmpty<T>(obj: T): boolean {
  return (
    isNullOrUndefined(obj) ||
    (Array.isArray(obj) && !isUndefined(obj.length) && obj.length === 0) ||
    Object.keys(obj).length === 0
  );
}
