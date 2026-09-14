"use strict";
// ? type assertion
Object.defineProperty(exports, "__esModule", { value: true });
let anything;
anything = "Hello";
console.log(anything.at(2));
const kgToGMConverter = (input) => {
    if (typeof input === "number") {
        return input * 1000;
    }
    else if (typeof input === "string") {
        const [value] = input.split(" ");
        const convertedValue = Number(value);
        return `the converted value is: ${convertedValue * 1000} GM`;
    }
    else {
        throw console.error("Input type not match the result");
    }
};
const result1 = kgToGMConverter("2 kg").length; // type assertion
const result2 = kgToGMConverter(2);
console.log(result1);
console.log(result2);
//# sourceMappingURL=typeAssertion.js.map