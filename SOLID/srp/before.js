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

  saveDB() {
    console.log('Connecting DB.');
    console.log('Save user in DB.');
  }
}

const person = new Person('John', 33, 500);
person.saveDB();