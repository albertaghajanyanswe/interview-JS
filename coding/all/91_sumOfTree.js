/**
  -1, 0, 1, 2, -1, -4
  i   j -->      <--k
 */
function sumOfThree(array, target) {
  if (array.length < 3) {
    return [];
  }

  const result = [];
  array = array.sort((a, b) => a - b);
  for (let i = 0; i < array.length - 2; i++) {
    if (array[i] > target) {
      break;
    }
    let left = i + 1;
    let right = array.length - 1;

    while(left < right) {
      const sum = array[i] + array[left] + array[right];
      if (sum === target) {
        result.push([array[i], array[left], array[right]]);
        left++;
        right--;
        continue;
      }

      if (sum < target) {
        ++left;
        continue;
      }

      if (sum > target) {
        right--;
        continue;
      }
    }
  }

  return result;
}

const res = sumOfThree([-1, 0, 1, 2, -1, -4], 0);
console.log(res);