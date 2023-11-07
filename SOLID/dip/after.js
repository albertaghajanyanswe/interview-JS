// Пример с применением принципа DIP

// Абстракция (интерфейс)
class Switchable {
  turnOn() {}
  turnOff() {}
}

class LightBulb extends Switchable {
  turnOn() {
    console.log("Light bulb is on");
  }

  turnOff() {
    console.log("Light bulb is off");
  }
}

class Fan extends Switchable {
  turnOn() {
    console.log("Fan is on");
  }

  turnOff() {
    console.log("Fan is off");
  }
}

class Switch {
  constructor(device) {
    this.device = device; // Зависимость в виде абстракции
  }

  operate() {
    this.device.turnOn();
  }
}

const lightBulb = new LightBulb();
const fan = new Fan();

const switchButton1 = new Switch(lightBulb);
switchButton1.operate(); // Включает лампочку

const switchButton2 = new Switch(fan);
switchButton2.operate(); // Включает вентилятор

// В этом примере высокоуровневый модуль Switch не зависит от конкретных низкоуровневых модулей (LightBulb или Fan),
// а зависит от абстракции Switchable, что соответствует принципу DIP.
