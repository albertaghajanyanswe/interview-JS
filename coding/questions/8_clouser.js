function counter() {
  let count = 0;

  function increment() {
    this.count++;
    return this.count;
  }
  function decrement() {
    this.count--;
    return this.count;
  }
  return {increment, decrement, count}
}

let c1 = counter();
let c2 = counter();
console.log('c1 = ', c1.increment())
console.log('c1 = ', c1.increment())
console.log('c2 = ', c2.increment())
