class Person {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  getSleep(numbersOFHour: number) {
    console.log(`${this.name} sleeps ${numbersOFHour} hour`);
  }
}

class Student extends Person {
  id: number;

  constructor(name: string, age: number, address: string, id: number) {
    super(name, age, address);
    this.id = id;
  }
}

class Teacher extends Person {
  designation: string;

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }

  takeClass(classTime: number) {
    console.log(`${this.name} is a ${this.designation} and he take classes for ${classTime} hours`);
  }
}

const student1 = new Student("Al-amin", 22, "Savar", 12341231);
student1.getSleep(15);
const teacher = new Teacher("John", 30, "Savar", "Senior Teacher");
teacher.takeClass(9);
