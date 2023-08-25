function flattenObject(obj, prefix = '') {
  const flatObject = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];

      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        const nestedPrefix = prefix ? `${prefix}.${key}` : key;
        const nestedFlatObject = flattenObject(value, nestedPrefix);
        console.log('nestedFlatObject = ', nestedFlatObject)
        Object.assign(flatObject, nestedFlatObject);
      } else {
        const flatKey = prefix ? `${prefix}.${key}` : key;
        flatObject[flatKey] = value;
      }
    }
  }

  return flatObject;
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