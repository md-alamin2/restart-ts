"use strict";
// type guard
Object.defineProperty(exports, "__esModule", { value: true });
const add = (num1, num2) => {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    else {
        num1.toString() + num2.toString();
    }
};
add(2, 2); // 4
add(2, "2"); // 22
const getUserInfo = (userInfo) => {
    if ('role' in userInfo) {
        console.log(`${userInfo.name} user has found and his role is ${userInfo.role}`);
    }
    else {
        console.log(`${userInfo.name} user has found`);
    }
};
getUserInfo({ name: 'Al-amin', role: 'admin' });
//# sourceMappingURL=typeGuard.js.map