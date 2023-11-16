// Алгоритм кеширования данных во избижании повторных вычеслений

function cashFunction(fn) {
  let cash = {};
  return (n) => {
    if (cash[n]) {
      console.log('+++ Returned from cash: ', n);
      return cash[n];
    }

    let result = fn(n);
    cash[n] = result;
    console.log("--- Returned not from cash: ", n)
    return result;
  }
}

function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n-1);
}

function factorial2(n) {
  let result = 1;

  for (let i = 1; i < n+1; i++) {
    result *= i;
  }
  return result;
}

const cashFactorial = cashFunction(factorial);

cashFactorial(5);
cashFactorial(4);
cashFactorial(3);
cashFactorial(4);
cashFactorial(5);
cashFactorial(1);

console.log(factorial2(5));
