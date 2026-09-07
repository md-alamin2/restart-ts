"use strict";
// spread operator 
Object.defineProperty(exports, "__esModule", { value: true });
//? spread operator for array
const friends = ['Ahad', 'Adnan'];
const schoolFriends = ['sanower', 'samiul', 'hasibul'];
const collageFriends = ['sabbir', 'tawhid', 'shawon'];
friends.push(...schoolFriends);
//? spread operator for object
const user = {
    name: "Al-amin",
    number: "01900000000000"
};
const otherInfo = {
    address: "Dhaka",
    hobby: "Coding",
    favoriteColor: "Black"
};
const userInfo = { ...user, ...otherInfo };
// ? rest operator
const sendInvitation = (...friends) => {
    friends.forEach((friend) => console.log(`invitation send to ${friend}`));
};
sendInvitation('Ahad', 'Adnan', 'sanower', 'samiul', 'hasibul', 'sabbir', 'tawhid', 'shawon');
//# sourceMappingURL=sprade&rest.js.map