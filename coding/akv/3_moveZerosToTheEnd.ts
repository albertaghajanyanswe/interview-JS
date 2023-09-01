const pushZerosToEnd = (arr: any[]) => {
  const l = arr.length;
  let count = 0;

  for(let i = 0; i < l; ++i){
    if (arr[i] != 0) {
      arr[count] = arr[i];
      ++count;
    }
  }

  while(count < l) {
    arr[count] = 0;
    ++count;
  }
}

let arr = [1, 9, 8, 4, 0, 2, 0, 7, 0, 6, 0, 9];
pushZerosToEnd(arr);
console.log(arr)