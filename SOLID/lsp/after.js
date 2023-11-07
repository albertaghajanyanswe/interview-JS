// Пример с соблюдением принципа LSP

class Bird {
  fly() {
    console.log("Bird is flying");
  }
}

class Ostrich extends Bird {
  // Мы не переопределяем метод fly
}

function makeBirdFly(bird) {
  bird.fly();
}

const bird = new Bird();
const ostrich = new Ostrich();

makeBirdFly(bird); // Вывод: "Bird is flying"
makeBirdFly(ostrich); // Вывод: "Bird is flying"

// В этом примере, метод makeBirdFly все равно принимает объекты типа Bird, но при передаче объекта ostrich,
// который является производным от Bird и не переопределяет метод fly, программа все равно ведет себя корректно,
// что соответствует принципу LSP.
