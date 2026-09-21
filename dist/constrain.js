"use strict";
// constrain in typescript is a way to limit the types that can be used in a generic function or class. It allows you to specify that a type parameter must extend a certain type or implement a certain interface. This can help ensure that the types used in your code are compatible and prevent runtime errors.
Object.defineProperty(exports, "__esModule", { value: true });
const addStudentToCourse = (studentInfo) => {
    return {
        course: "Next level development",
        ...studentInfo,
    };
};
const student1 = {
    id: 124,
    name: "John Doe",
    hasPen: true,
};
const student2 = {
    id: 324,
    name: "Robert Doe",
    hasCar: true,
    isMarried: true,
};
const student3 = {
    id: 23432,
    name: "Mr. X",
    hasPen: true,
};
const result = addStudentToCourse(student3);
console.log(result);
//# sourceMappingURL=constrain.js.map