function findSumOfPair(arr: number[], target: number) {
  const seen = {};

  for(let num of arr) {
    const findingValue = target - num;
    if(seen.hasOwnProperty(findingValue)) {
      return [findingValue, seen[findingValue]];
    } else {
      seen[num] = findingValue;
    }
  }

  console.log('seen = ', seen)
  return null;

}

const arr = [10, 5, 2, 3, 7, 5];
const res = findSumOfPair(arr, 10);
console.log('res = ', res)