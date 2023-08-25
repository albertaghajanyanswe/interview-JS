const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

function calculateFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * calculateFactorial(n - 1);
}

function unlimitedLoop(n) {
  let res = 0;
  for(let i = 0; i < n; ++i) {
    res += i;
    console.log('i: ', i)
  }
  return res;
}

if (isMainThread) {
  const num = 20; // Number for which you want to calculate the factorial
  console.log(`Calculating factorial of ${num} using a separate thread...`);

  const worker = new Worker(__filename, {
    workerData: num,
  });

  worker.on('message', result => {
    console.log(`Factorial of ${num} is ${result}`);
  });

  worker.on('error', error => {
    console.error(`Error in the worker thread: ${error}`);
  });

  worker.on('exit', code => {
    if (code !== 0) {
      console.error(`Worker thread exited with code ${code}`);
    }
  });
} else {
  const num = workerData;
  const result = calculateFactorial(num);
  parentPort.postMessage(result);
  // const num = workerData;
  // const result = unlimitedLoop(num);
  // parentPort.postMessage(result);
}