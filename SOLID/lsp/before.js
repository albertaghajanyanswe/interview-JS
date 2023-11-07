// Пример нарушения принципа LSP

class Bird {
  fly() {
    console.log("Bird is flying");
  }
}

class Ostrich extends Bird {
  // Переопределяем метод fly
  fly() {
    console.log("Ostrich can't fly");
  }
}

function makeBirdFly(bird) {
  bird.fly();
}

const bird = new Bird();
const ostrich = new Ostrich();

makeBirdFly(bird); // Вывод: "Bird is flying"
makeBirdFly(ostrich); // Вывод: "Ostrich can't fly"

// В этом примере, метод makeBirdFly принимает объекты типа Bird и вызывает их метод fly.
// Однако при передаче объекта ostrich, который является производным от Bird, метод fly ведет себя по-разному,
// что нарушает принцип LSP.
