function foo(callback) {
  setTimeout(function () {
    callback("A");
  }, Math.random() * 100);
}

function bar(callback) {
  setTimeout(function () {
    callback("B");
  }, Math.random() * 100);
}

function baz(callback) {
  setTimeout(function () {
    callback("C");
  }, Math.random() * 100);
}

function promisify(fn) {
  return new Promise((resolve) => {
    fn(resolve);
  });
}

const p1 = promisify(foo);
const p2 = promisify(bar);
const p3 = promisify(baz);

const main = async () => {
  const r1 = await p1;
  const r2 = await p2;
  const r3 = await p3;

  console.log("1 - ", r1);
  console.log("2 - ", r2);
  console.log("3 - ", r3);
};
main();

// solution 1

// promisify(foo).then((resultA) => {
//   console.log('1 - ', resultA);
//   return promisify(bar)
// }).then((resultB) => {
//   console.log('2 - ', resultB)
//   return promisify(baz)
// }).then((resultC) => {
//   console.log('3 - ', resultC)
// })

// solution 2

// new Promise((res) => {
//   foo(res)
// }).then((res) => {
//   console.log('1 - ', res)
//   return new Promise((res) => bar(res))
// }).then((res) => {
//   console.log('2 - ', res)
//   return new Promise((res) => baz(res))
// }).then((res) => {
//   console.log('3 - ', res)
// })

// solution 3


// SOLUTION 3

// const runInOrder = async () => {
//   const r1 = await new Promise((res) => foo(res));
//   console.log(r1);

//   const r2 = await new Promise((res) => bar(res));
//   console.log(r2);

//   const r3 = await new Promise((res) => baz(res));
//   console.log(r3);
// };

// runInOrder();
