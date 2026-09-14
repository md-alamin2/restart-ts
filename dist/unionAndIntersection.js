"use strict";
//? union type
Object.defineProperty(exports, "__esModule", { value: true });
const getDashboard = (userRole) => {
    if (userRole === "admin") {
        return "admin dashboard";
    }
    else if (userRole === "user") {
        return "user dashboard";
    }
    else {
        return "Please login first";
    }
};
console.log(getDashboard("user"));
const manager = {
    id: 1234,
    name: "Alamin",
    phoneNo: "017",
    teamSize: 20,
    designation: "Manager"
};
//# sourceMappingURL=unionAndIntersection.js.map