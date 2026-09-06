"use strict";
// function
//? arrow function, normal function
Object.defineProperty(exports, "__esModule", { value: true });
function addNormal(num1, num2) {
    //? return type
    return num1 + num2;
}
console.log(addNormal(2, 3)); // 5
const addArrow = (num1, num2) => {
    return num1 + num2;
};
console.log(addArrow(2, 3)); // 5
// object => function => method
const poorUser = {
    name: 'Al-amin',
    balance: 10000,
    addBalance(addedBalance) {
        return this.balance + addedBalance;
    }
};
poorUser.addBalance(5000); // 15000
// callback function
const arr = [1, 2, 3, 4, 5];
const sqrtArr = arr.map((element) => { return element * element; });
console.log(sqrtArr);
//# sourceMappingURL=function.js.map