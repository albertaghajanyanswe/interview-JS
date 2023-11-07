// Пример без применения принципа DIP

class LightBulb {
  turnOn() {
    console.log("Light bulb is on");
  }

  turnOff() {
    console.log("Light bulb is off");
  }
}

class Switch {
  constructor() {
    this.bulb = new LightBulb(); // Низкоуровневая зависимость
  }

  operate() {
    this.bulb.turnOn();
  }
}

const switchButton = new Switch();
switchButton.operate();

// В этом примере Switch жестко связан с конкретной реализацией LightBulb.
// Это нарушает принцип DIP, так как высокоуровневый модуль Switch зависит от низкоуровневого модуля LightBulb.
