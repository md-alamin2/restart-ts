//? type alias


// ? type alias in object
type User = {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "male" | "female";
  contactNo: string;
  address: {
    division: string;
    district: string;
    upazila: string;
    postalCode: number;
  };
};

const user: User = {
  id: 1234,
  name: {
    firstName: "Md",
    lastName: "Al-amin",
  },
  gender: 'male',
  contactNo: "017777777777",
  address: {
    division: "Dhamsona",
    district: "Dhaka",
    upazila: "Savar",
    postalCode: 12345,
  },
};



//? type alias in function

type addFunc= (num1: number, num2: number)=> number

const add: addFunc = (num1, num2)=> num1+num2
