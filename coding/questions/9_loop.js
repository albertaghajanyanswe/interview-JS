// Будет ли выведено "1" в консоль? Почему?
// NO

function loop() {
  Promise.resolve().then(loop);
}
setTimeout(() => {
  console.log(1);
}, 0);

loop();
