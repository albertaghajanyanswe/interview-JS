function fibonacciDynamicProgramming(n, memo = {}) {
  if (n <= 1) {
    return n;
  }

  if (memo[n]) {
    return memo[n];
  }

  memo[n] = fibonacciDynamicProgramming(n - 1, memo) + fibonacciDynamicProgramming(n - 2, memo);
  return memo[n];
}

console.log(fibonacciDynamicProgramming(5)); // Output: 5