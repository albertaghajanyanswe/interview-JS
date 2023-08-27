// Run command for ts files
// npx ts-node customMapAndFilter.ts

function customMap<T, U>(array: T[], callback: (value: T, index: number, passedArray: T[]) => U): U[] {
  return array.reduce((acc: U[], currentValue: T, index: number, passedArray: T[]) => {
    acc.push(callback(currentValue, index, passedArray))
    return acc;
  }, [])
}

function customFilter<T>(array: T[], callback: (value: T, index: number, passedArray: T[]) => boolean): T[] {
  return array.reduce((acc: T[], currentValue: T, index: number, passedArray: T[]) => {
    if(callback(currentValue, index, passedArray)) {
      acc.push(currentValue);
    }
    return acc;
  }, [])
}

const numberArr: number[] = [1, 2, 3];

const numberRes = customMap(numberArr, (item, index) => item + index);
console.log('Map result = ', numberRes)

const numberRes1 = customFilter(numberArr, (item) => item > 2);
console.log('Filter result = ', numberRes1)
