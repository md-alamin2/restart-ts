// as const is a TypeScript utility function that allows you to create a readonly version of an object or array. It is often used to ensure that the values of an object or array cannot be modified after they are created.

// type userRoles = "admin" | "editor" | "viewer";

// enum userRoles {
//     Admin = 'Admin',
//     Editor = 'Editor',
//     Viewer = 'Viewer'
// }
const userRoles = {
  Admin: "ADMIN",
  Editor: "EDITOR",
  Viewer: "VIEWER",
} as const;

/*
{
  readonly Admin: "Admin",
  readonly Editor: "Editor",
  readonly Viewer: "Viewer",
}

1/ typeof operator
2/ keyof operator 
*/

const canEdit = (role: (typeof userRoles)[keyof typeof userRoles]) => {
  if (role === userRoles.Admin || role === userRoles.Editor) {
    return true;
  } else return false;
};

const result = canEdit(userRoles.Admin);
console.log(result);
