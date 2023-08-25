const a = [1, 3, 5, 7];
const b = [2, 4, 6, 8];

const merge = (a, b) => {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < a.length || j < b.length) {
    const aItem = a[i];
    const bItem = b[j];

    if (aItem === undefined) {
      result.push(bItem);
      ++j;
    }

    if (bItem === undefined) {
      result.push(aItem);
      ++i;
    }

    if (aItem <= bItem) {
      result.push(aItem);
      ++i;
    }
    if( aItem > bItem) {
      result.push(bItem);
      ++j;
    }
  }

  return result;
}

const result = merge(a, b);

console.log(result);

test(() => {
  let a = [1,3,5,7];
  let b = [2,4,6,8];
  expect(merge(a, b).toEqual([1,2,3,4,5,6,7,8]));
})