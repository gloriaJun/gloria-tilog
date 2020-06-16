export const isNull = (obj: any): boolean => {
  return obj === null;
};

export const isUndefined = (obj: any): boolean => {
  return obj === undefined;
};

export const isNullOrUndefined = (obj: any): boolean => {
  return isNull(obj) || isUndefined(obj);
};

// export const isObject = (obj: any): boolean => {
//   return !isNullOrUndefined(obj) && typeof obj === 'object';
// };

// export const isArray = (obj: any): boolean => {
//   return !isNullOrUndefined(obj) && Array.isArray(obj);
// };

// export const isString = (obj: any): boolean => {
//   return !isNullOrUndefined(obj) && typeof obj === 'string';
// };

export const isEmpty = (obj: any): boolean => {
  return (
    isNullOrUndefined(obj) ||
    (!isUndefined(obj.length) && obj.length === 0) ||
    Object.keys(obj).length === 0
  );
};
