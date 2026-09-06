//? array

let bazarList = ['milk', 'eggs', 'sugar'];

// bazarlist.push(123); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

let mixedArray: (string | number)[]=['milk', 2, 'eggs', 3]
mixedArray.push(23); // valid
mixedArray.push('sugar'); // valid
// mixedArray.push(true); // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.



//? ts special type -> tuple

let coordinates: [number, number] = [10, 20];
let user: [string, number] = ['Al-amin', 25];
let couple: [string, string] = ['husband', 'wife'];
let userInfo: [string, number, boolean] = ['Al-amin', 25, true];

// user[0] = 1; // Error: Type 'number' is not assignable to type 'string'.



//? object type

const userObj:{
    organization: "Programming Hero", //? value => type : literal type
    firstName: string,
    middleName?: string, //? optional type
    lastName: string,
    age: number,
    readonly isMarried?: boolean, //? access modifier => readonly type
}={
    organization: "Programming Hero",
    firstName: "Al-amin",
    lastName: "Hossain",
    age: 22
}

userObj.middleName = "Hossain";
userObj.lastName = "Akash";

console.log(userObj)