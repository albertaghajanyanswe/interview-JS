const getObjectValue = (obj, path) => {
  const keys = path.split('.');
  let value = obj;

  for (const key of keys) {
    if (value && value.hasOwnProperty(key)) {
      value = value[key];
    } else {
      return undefined;
    }
  }

  return value;
};

const obj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 4
    }
  }
};

const result = getObjectValue(obj, 'b.d.e');
console.log(result);