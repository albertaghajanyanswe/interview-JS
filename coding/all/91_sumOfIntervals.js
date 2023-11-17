function sumIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let totalLength = 0;
  let currentInterval = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const [currentStart, currentEnd] = currentInterval;
    const [nextStart, nextEnd] = intervals[i];

    if (nextStart <= currentEnd) {
      currentInterval[1] = Math.max(currentEnd, nextEnd);
    } else {
      totalLength += currentEnd - currentStart;
      currentInterval = intervals[i];
    }
  }

  // Add the length of the last interval
  totalLength += currentInterval[1] - currentInterval[0];

  return totalLength;
}

// Example usage
const intervals = [ [1, 2], [6, 10], [11, 15] ];
const result = sumIntervals(intervals);
console.log(result); // Output: 6
