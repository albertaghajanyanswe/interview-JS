class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    print() {
        console.log('print called -> ', this);
    }
}

class HumanBuilder {
    constructor(name) {
        this.name = name;
    }

    setAge(age) {
        this.age = age;
        return this;
    }

    setGender(gender) {
        this.gender = gender;
        return this;
    }

    build() {
        if (!('name' in this)) {
            throw new Error('Name is missing');
        }
        if (!('age' in this)) {
            throw new Error('Age is missing');
        }
        if (!('gender' in this)) {
            throw new Error('Gender is missing');
        }
        return new Human(this.name, this.age, this.gender);
    }
}

const h1 = new HumanBuilder('Human 1')
    .setAge(55)
    .setGender('male')
    .build();

console.log('h1 = ', h1);
h1.print();
