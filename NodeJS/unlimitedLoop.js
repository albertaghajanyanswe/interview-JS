async function processAsync(index) {
  // Симуляция асинхронной задачи
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`Итерация ${index} обработана`);
      resolve();
    }, 0);
  });
}

async function runAsyncLoop(iterations) {
  for (let i = 0; i < iterations; i++) {
    await processAsync(i);
  }
}

runAsyncLoop(1000000)
  .then(() => {
    console.log("Все итерации завершены.");
  })
  .catch(error => {
    console.error("Произошла ошибка:", error);
  });