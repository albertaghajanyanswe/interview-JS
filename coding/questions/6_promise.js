async function customPromiseAll(promises) {
  const stack = [...promises];
  const result = [];
  const error = [];
  const executePromise = () => {
    const curr = stack.shift();
    curr.then((res) => {
      result.push(res)
    }).catch(err => {
      error.push(err)
    })
    if (stack.length) {
      executePromise()
    }
  }
  executePromise();
  return result;
}

const p1 = new Promise((res, rej) => {
  res(1);
})
const p2 = new Promise((res, rej) => {
  res(2);
})
const p3 = new Promise((res, rej) => {
  res(3);
})

const main = async () => {
  const res = await customPromiseAll([p1, p2, p3]);
  console.log('res = ', res)
}
main()
