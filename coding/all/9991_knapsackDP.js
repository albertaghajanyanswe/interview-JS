function knapsackDynamicProgramming(weights, values, capacity) {
  const n = weights.length;
  const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= capacity; j++) {
      if (weights[i - 1] > j) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], values[i - 1] + dp[i - 1][j - weights[i - 1]]);
      }
    }
  }

  return dp[n][capacity];
}

const weights = [2, 3, 4, 5];
const values = [3, 4, 5, 6];
const capacity = 5;

console.log(knapsackDynamicProgramming(weights, values, capacity)); // Output: 11





