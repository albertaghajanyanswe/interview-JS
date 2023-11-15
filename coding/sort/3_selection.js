/*
  O(n^2)
  Подобно предыдущим, наихудший случай происходит, когда массив отсортирован в обратном порядке.
*/

function selectionSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // Swap
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}

let array = [64, 25, 12, 22, 11];
console.log(selectionSort(array));