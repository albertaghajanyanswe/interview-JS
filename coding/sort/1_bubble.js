/*
  O(n^2)
  Наихудший случай происходит, когда массив уже отсортирован в обратном порядке, и для каждого элемента приходится проходить весь массив.
*/

function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

let array = [64, 25, 12, 22, 11];
console.log(bubbleSort(array));