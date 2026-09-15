"use strict";
// generics type => dynamically generalize
Object.defineProperty(exports, "__esModule", { value: true });
// const friend: string[] = ["a", "b", "c", "d", "e"];
const friend = ["a", "b", "c", "d", "e"];
// const roll: number[] = [1, 2, 3, 4];
const roll = [1, 2, 3, 4];
// const isEligible: boolean[] = [true, false, true];
const isEligible = [true, false, true];
const coordinates1 = [1, 2];
const coordinates2 = ["1", "2"];
// ? generic for array of object
const userList = [
    {
        name: "Al-amin",
        age: 22,
    },
    {
        name: "Al-amin",
        age: 22,
    },
];
const poorDeveloper = {
    name: "Mr. Developer",
    salary: 20000,
    device: {
        brand: "lenovo",
        model: "A21",
        releasedYear: "2016",
    },
    smartWatch: {
        heartRate: "Yes",
        stopWatch: true,
    },
};
const richDeveloper = {
    name: "Mr. Developer",
    salary: 20000,
    device: {
        brand: "lenovo",
        model: "A21",
        releasedYear: "2016",
    },
    smartWatch: {
        heartRate: "Yes",
        stopWatch: true,
        callingFeature: true,
        calculator: true,
    },
    bike: {
        model: "Yamaha",
        cc: 150,
    },
};
// ? generic with function
const createArrayWithString = (value) => [value];
const createArrayWithNumber = (value) => [value];
const createArrayWithUserObj = (value) => [value];
// generic arrow function
const createArrayWithGeneric = (value) => {
    return [value];
};
const arrStr = createArrayWithGeneric("Hello");
const arrNum = createArrayWithGeneric(1234);
const arrUser = createArrayWithGeneric({ id: 1234, name: "Al-amin" });
//# sourceMappingURL=generic.js.map