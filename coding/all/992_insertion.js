/*
  O(n^2)
  Наихудший случай также имеет место, когда массив отсортирован в обратном порядке.
*/

function insertionSort(arr) {
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

let array = [12, 11, 13, 5, 6];
console.log(insertionSort(array));