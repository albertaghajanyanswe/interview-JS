/*
  O(n^2) в наихудшем случае, O(n log n) в среднем случае
  В наихудшем случае происходит, когда выбираются плохие пивоты. В среднем случае эффективнее многих других алгоритмов.
*/

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[0];
  const left = [];
  const right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

let array = [38, 27, 43, 3, 9, 82, 10];
console.log(quickSort(array));