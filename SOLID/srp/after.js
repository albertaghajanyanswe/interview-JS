class PersonDBProvider {

  constructor(person) {
    this.person = person;
  }

  validate() {
    console.log('Validating...')
  }
  saveDB() {
    console.log('Connecting DB.');
    console.log('Save user in DB.');
  }
}

class Person {
  static tax = 0.1;

  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  calcSalary() {
    return this.salary - this.salary * Person.tax;
  }
}

const person = new Person('John', 33, 500);
const person_provider = new PersonDBProvider(person);
person_provider.saveDB();