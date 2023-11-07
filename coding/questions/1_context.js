function foo() {
  const x = 10;
  return {
    x: 20,
    bar: () => {
      // console.log(this);
      console.log(this.x);
    },
    baz: function() {
      // console.log(this)
      console.log(this.x)
    }
  }
}

const o1 = foo();
// console.log(o1);
o1.bar(); // undefined
o1.baz(); // 20

const o2 = foo.call({ x: 30 });
// // console.log(o2);

// let y = o2.bar;
// let z = o2.baz;
// console.log('\n')
// y(); // 30
// z(); // undefined

console.log('\n')
o2.bar(); // 30
o2.baz(); // 20
