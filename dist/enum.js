"use strict";
// enum => set of string literals or number literals. It is a way to define a set of named constants that can be used in your code. Enums can be used to represent a collection of related values, such as days of the week, colors, or status codes. Enums can be defined using the enum keyword in TypeScript.
Object.defineProperty(exports, "__esModule", { value: true });
// type userRoles = "admin" | "editor" | "viewer";
var userRoles;
(function (userRoles) {
    userRoles["Admin"] = "Admin";
    userRoles["Editor"] = "Editor";
    userRoles["Viewer"] = "Viewer";
})(userRoles || (userRoles = {}));
const canEdit = (role) => {
    if (role === userRoles.Admin || role === userRoles.Editor) {
        return true;
    }
    else
        return false;
};
const result = canEdit(userRoles.Admin);
console.log(result);
//# sourceMappingURL=enum.js.map