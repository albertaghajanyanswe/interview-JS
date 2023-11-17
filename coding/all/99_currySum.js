function curry(func, length = func.length) {
  return (...args) => {
    if (args.length < length) {
      return curry((...otherArgs) => func(...args, ...otherArgs), length - args.length)
    }
    return func(...args)
  }
}



function curry1(func, length = func.length) {
  return (...args) => {
    if (args.length < length) {
      return curry1((...otherArgs) => func(...args, ...otherArgs), length - args.length)
    }
    return func(...args)
  }
}


function sum(a, b, c) {
  return a + b + c;
}

const currySum = curry(sum);

console.log(currySum(1, 2, 3));
console.log(currySum(1, 2)(3));
console.log(currySum(1)(2, 3));
console.log(currySum(1)(2)(3));