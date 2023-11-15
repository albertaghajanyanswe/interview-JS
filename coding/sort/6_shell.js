/*
  В среднем O(n log n), зависит от выбора последовательности инкрементов
  Сложность зависит от выбранной последовательности инкрементов. В наихудшем случае может приближаться к O(n^2), но обычно оказывается эффективнее квадратичных сортировок.
*/

function shellSort(arr) {
  let len = arr.length;
  for (let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < len; i++) {
      let temp = arr[i];
      let j = i;
      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        j -= gap;
      }
      arr[j] = temp;
    }
  }
  return arr;
}

let array = [64, 25, 12, 22, 11];
console.log(shellSort(array));