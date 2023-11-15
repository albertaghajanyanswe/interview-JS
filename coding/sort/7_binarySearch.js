/*   O(log n)   */

function binarySearch(sortedArray, target) {
  let left = 0;
  let right = sortedArray.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (sortedArray[middle] === target) {
      return middle;
    } else if (sortedArray[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
}

let sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let index = binarySearch(sortedArray, 9);

if (index !== -1) {
  console.log('Element found at index', index);
} else {
  console.log('Element not found in the array');
}