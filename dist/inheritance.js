"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    age;
    address;
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    getSleep(numbersOFHour) {
        console.log(`${this.name} sleeps ${numbersOFHour} hour`);
    }
}
class Student extends Person {
    id;
    constructor(name, age, address, id) {
        super(name, age, address);
        this.id = id;
    }
}
class Teacher extends Person {
    designation;
    constructor(name, age, address, designation) {
        super(name, age, address);
        this.designation = designation;
    }
    takeClass(classTime) {
        console.log(`${this.name} is a ${this.designation} and he take classes for ${classTime} hours`);
    }
}
const student1 = new Student("Al-amin", 22, "Savar", 12341231);
student1.getSleep(15);
const teacher = new Teacher("John", 30, "Savar", "Senior Teacher");
teacher.takeClass(9);
//# sourceMappingURL=inheritance.js.map