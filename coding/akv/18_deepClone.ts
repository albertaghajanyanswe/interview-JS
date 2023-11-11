type DeepCloneable = Record<string, any> | any[] | Function;

function deepClone(obj: DeepCloneable): DeepCloneable {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item));
  }

  if (typeof obj === 'function') {
    return obj;
  }

  if (obj instanceof Map) {
    // return new Map(Array.from(obj.entries(), deepClone));
  }

  if (obj instanceof Set) {
    return new Set([...obj].map(deepClone));
  }

  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  const clonedObj: Record<string, any> = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key]);
    }
  }

  return clonedObj;
}

const originalObject = {
  number: 42,
  string: 'Hello, world!',
  array: [1, 2, [3, 4]],
  nestedObject: {
    key: 'value',
    nestedArray: [5, 6, { prop: 'nested' }],
  },
  func: function () {
    console.log('Original function');
  },
  map: new Map([
    [1, 'a'],
    [2, 'b']
  ]),
  set: new Set([1, 2, 3])
};

const clonedObject = deepClone(originalObject);

console.log(clonedObject);