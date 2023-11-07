const deepEqual = (obj1, obj2) => {
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
    return obj1 === obj2;
  }
  if (obj1 === null && obj2 === null) {
    return true;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for(const key of keys1) {
    if(!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }
  return true;
}

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };
const obj3 = { a: 1, b: { d: 2 } };

console.log('', obj1, '\n     is equal\n', obj2, `\n\n***     ${deepEqual(obj1, obj2)}     ***`); // true
console.log('\n\n', obj1, '\n     is equal\n', obj3, `\n\n***     ${deepEqual(obj1, obj3)}   ***`); // false
// console.log(obj1, ' === ', obj2, ' = ', deepEqual(obj1, obj2)); // true
// console.log(obj1, ' === ', obj3, ' = ', deepEqual(obj1, obj3)); // false