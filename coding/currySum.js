function curry(func, length = func.length) {
  return (...args) => {
    console.log('\n\n START ')
    console.log('args = ', args)
    console.log('length = ', length)
    if (args.length < length) {
      return curry((...otherArgs) => func(...args, ...otherArgs), length - args.length)
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