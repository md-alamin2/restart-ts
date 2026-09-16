// enum => set of string literals or number literals. It is a way to define a set of named constants that can be used in your code. Enums can be used to represent a collection of related values, such as days of the week, colors, or status codes. Enums can be defined using the enum keyword in TypeScript.

// type userRoles = "admin" | "editor" | "viewer";

enum userRoles {
    Admin = 'Admin',
    Editor = 'Editor',
    Viewer = 'Viewer'
}

const canEdit = (role: userRoles) => {
  if (role === userRoles.Admin || role === userRoles.Editor) {
    return true;
  } else return false;
};

const result = canEdit(userRoles.Admin);
console.log(result);
