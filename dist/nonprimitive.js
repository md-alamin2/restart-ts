"use strict";
//? array
Object.defineProperty(exports, "__esModule", { value: true });
let bazarList = ['milk', 'eggs', 'sugar'];
// bazarlist.push(123); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
let mixedArray = ['milk', 2, 'eggs', 3];
mixedArray.push(23); // valid
mixedArray.push('sugar'); // valid
// mixedArray.push(true); // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
//? ts special type -> tuple
let coordinates = [10, 20];
let user = ['Al-amin', 25];
let couple = ['husband', 'wife'];
let userInfo = ['Al-amin', 25, true];
// user[0] = 1; // Error: Type 'number' is not assignable to type 'string'.
//? object type
const userObj = {
    organization: "Programming Hero",
    firstName: "Al-amin",
    lastName: "Hossain",
    age: 22
};
userObj.middleName = "Hossain";
userObj.lastName = "Akash";
console.log(userObj);
//# sourceMappingURL=nonprimitive.js.map