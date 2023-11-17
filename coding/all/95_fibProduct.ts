function productFib(prod: number) {
  let [fib1, fib2] = [0, 1];

  while (fib1 * fib2 < prod) {
    [fib1, fib2] = [fib2, fib1 + fib2];
  }

  return [fib1, fib2, fib1 * fib2 === prod];
}

// Example usage:
const product = 714;
const result = productFib(product);
console.log('res = ', result)
