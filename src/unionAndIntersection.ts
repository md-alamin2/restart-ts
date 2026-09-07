//? union type

type UserRole = "admin" | "user";

const getDashboard = (userRole: UserRole) => {
  if (userRole === "admin") {
    return "admin dashboard";
  } else if (userRole === "user") {
    return "user dashboard";
  } else {
    return "Please login first";
  }
};

console.log(getDashboard("user"));

//? type intersection

type Employee = {
  id: number;
  name: string;
  phoneNo: string;
};

type Manager = {
  teamSize: number;
  designation: string;
};

type EmployeeAndManager = Employee & Manager;


const manager : EmployeeAndManager = {
    id: 1234,
    name: "Alamin",
    phoneNo: "017",
    teamSize: 20,
    designation: "Manager"
}