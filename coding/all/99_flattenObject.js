function flattenObject(obj, prefix = '') {
  const result = {};

  for(let key in obj) {
    const value = obj[key];
    const nestedKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'object' && value !== null  && !Array.isArray(value)) {
      const nestedObj = flattenObject(value, nestedKey);
      Object.assign(result, nestedObj);
    } else {
      result[nestedKey] = value;
    }
  }
  return result;
}

const nestedObject = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: {
        g: 4
      }
    }
  },
  h: 5
};

const flatResult = flattenObject(nestedObject);
console.log(flatResult);