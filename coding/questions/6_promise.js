function customPromiseAll(promises) {
  const stack = [promises];
  const result = [];
  const executePromise = () => {
    const curr = stack.pop();
    curr.then((res) => {
      result.push(res)
    })
    if (stack.length) {
      executePromise()
    }
  }
  return result;
}

const p1 = new Promise((res, rej) => {
  console.log(1)
})
const p2 = new Promise((res, rej) => {
  console.log(2)
})
const p3 = new Promise((res, rej) => {
  console.log(3)
})

const res = customPromiseAll([p1, p2, p3]);
