"use strict";
// keyOf: type operator
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    id: 123,
    name: "Mr. X",
    address: {
        state: "Dhaka",
        city: "Dhaka",
        country: "Bangladesh",
    },
};
const myName = user["name"]; // using bracket notation
const myId = user["id"];
const myAddress = user["address"];
const getPropertyFromObject = (obj, key) => {
    return obj[key];
};
const result = getPropertyFromObject(user, "name");
// console.log(result)
const product = {
    brand: "Apple",
    model: "iPhone 14 Pro Max",
    price: 120000,
    releasedYear: 2022,
};
const result2 = getPropertyFromObject(product, "brand");
console.log(result);
console.log(result2);
//# sourceMappingURL=keyOfConstrain.js.map