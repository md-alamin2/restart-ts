// ? type alias
type User = {
  name: string;
  age: number;
};

const user1: User = {
  name: "Mr. X",
  age: 20,
};

// ? type intersection

type Role = {
  role: "admin" | "user";
};

type UserWithRole = User & Role;

const user2: UserWithRole = {
  name: "Mr. Y",
  age: 22,
  role: "user",
};

// ? interface
// ? interface only use for object type like array, object and function

interface IUser {
  name: string;
  age: number;
}

const user3: IUser = {
  name: "Mr. Y",
  age: 23,
};

// inter section of interface
// ? interface for object
interface IUserWithRole extends IUser {
  role: "admin" | "user";
}

const user4: IUserWithRole = {
  name: "Mr.z",
  age: 23,
  role: "user",
};

// ? interface for array
type Friends = string[];

interface IFriends {
  [index: number]: string;
}

const friends: IFriends = ["A", "B", "C"];

// ? interface for function
type Add = (number1: number, number2: number) => number;

interface IAdd {
  (number1: number, number2: number): number;
}

const add: IAdd = (number1, number2) => number1 + number2;


// use type alias for function and array and for object use type alias or interface 