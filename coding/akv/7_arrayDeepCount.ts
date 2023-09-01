function arrayDeepCount<T>(arr: T[], count: number = 0) {

  for(let i of arr) {
    if (!Array.isArray(i)) {
      ++count;
    } else {
      ++count;
      return arrayDeepCount(i, count);
    }
  }

  return count;
}

const res = arrayDeepCount([1, 2, [3, 4, [5]]]);
console.log('res = ', res);