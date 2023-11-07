Promise
  .reject('a')
  // .catch(p => p + 'b')
  // .catch(p => p + 'c')
  .then(p => p + 'd')
  .then(p => p + 'd2')
  .catch(p => p + 'c2')
  .then(p => p + 'd3')
  .then(p => p + 'd4')
  .catch(p => p + 'c3')
  .finally(p => p + 'e') // finally stanum e undefined ev return arac value-n voch mi tex chi @nknum
  .then(p => console.log(p))

// a2d1d3
  // Promise
  // .reject('a')
  // .then(p => p + '1', p => p + '2')
  // .catch(p => p + 'b')
  // .catch(p => p + 'c')
  // .then(p => p + 'd1')
  // .then('d2')
  // .then(p => p + 'd3')
  // .finally(p => p + 'e')
  // .then(p => console.log(p))

  // Promise
  // .reject('a')
  // .then(p => p + '1', p => p + '2')
  // .then('d2')
  // .then(p => p + 'd3')
  // // .finally(p => p + 'e')
  // .then(p => console.log(p))

// Error: a1d3d4c1
  Promise
  // .resolve('a')
  // .then(p => p + '1', p => p + '2') // kashxate 1 callback@ qani vor resolve e exel
  // .then(p => p + 'd3')
  // .then(p => {
  //   throw new Error(p + 'd4')
  // })
  // .catch(p => p + 'c1')
  // .finally(p => p + 'e')
  // .then(p => console.log(p))

  // Error: a2d3d4c1
  // Promise
  // .reject('a')
  // .then(p => p + '1', p => p + '2') // kashxate 2 callback@ qani vor reject e exel
  // .then(p => p + 'd3')
  // .then(p => {
  //   throw new Error(p + 'd4')
  // })
  // .catch(p => p + 'c1')
  // .finally(p => p + 'e')
  // .then(p => console.log(p))