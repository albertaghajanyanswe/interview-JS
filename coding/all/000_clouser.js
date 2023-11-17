function sum(num) {

  let result = 0;

  function calculate(number) {
    if (number === undefined) {
      return result;
    }
    result += number;
    return calculate;
  }

  return calculate(num);
}

console.log(sum(1)())
console.log(sum(1)(2)())
console.log(sum(1)(2)(3)())
console.log(sum(1)(2)(3)(4)())
