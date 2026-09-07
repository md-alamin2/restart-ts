"use strict";
//? destructuring objects
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    id: 1,
    name: {
        firstName: "Md",
        middleName: "Al-amin",
        lastName: 'Hossain'
    },
    gender: "Male",
    favColor: "Black",
};
const { id, name: { firstName, middleName, lastName }, gender, favColor } = user;
//? destructuring arrays
const friends = ['Ahad', 'Adnan', 'sanower', 'samiul', 'hasibul', 'sabbir', 'tawhid', 'shawon'];
const [, secondFriend, ...otherFriends] = friends;
console.log(secondFriend);
//# sourceMappingURL=destructuring.js.map