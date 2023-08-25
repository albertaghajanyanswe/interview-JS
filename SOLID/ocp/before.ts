/*
  run command
  npm install -g typescript
  npm install -g ts-node
  ts-node before.ts
*/

class Weapon {
  type: string;
  damage: number;

  constructor(type: string, damage: number) {
    this.type = type;
    this.damage = damage;
  }

  attack() {
    switch (this.type) {
      case 'sword':
        console.log('Attack with sword, damage is - ', this.damage);
        return;
      case 'gun':
        console.log('Attack with gun, damage is - ', this.damage);
        return;
    }
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
const sword = new Weapon('sword', 15);
const warrior = new Warrior('John', sword);
warrior.attack();
