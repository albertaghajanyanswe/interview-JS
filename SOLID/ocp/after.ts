/*
  run command
  npm install -g typescript
  npm install -g ts-node
  ts-node before.ts
*/

interface Attacker {
  attack: () => void;
}

class Weapon implements Attacker{
  damage: number;

  constructor(damage: number) {
    this.damage = damage;
  }

  attack() {}
}

class Sword extends Weapon {
  attack() {
    console.log('Attack with sword, damage is - ', this.damage);
  }
}
class Gun extends Weapon {
  attack() {
    console.log('Attack with gun, damage is - ', this.damage);
  }
}

class Warrior {
  name: string;
  weapon: Weapon;

  constructor(name: string, weapon: Weapon) {
    this.name = name;
    this.weapon = weapon;
  }

  attack() {
    this.weapon.attack();
  }
}

const sword = new Sword(15);
const gun = new Gun(55);
const warrior1 = new Warrior('John 1 ', sword);
const warrior2 = new Warrior('John 2 ', gun);
warrior1.attack();
warrior2.attack();
