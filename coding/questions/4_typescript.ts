const obj = {
  abc: {
      a: 1,
      b: 2
  },
  xyz: {
      x: 3,
      y: 4
  }
};


function printObj<T, K1 extends keyof T, K2 extends keyof T[K1]>(obj: T, firstKey: K1, secondKey: K2) {
  console.log(obj[firstKey][secondKey]);
}

printObj(obj, 'abc', 'a');