// keyOf: type operator

type RichPeopleVehicle = {
  car: string;
  bike: string;
  yacht: string;
};

type MyVehicle = "bike" | "car" | "yacht";
type MyVehicle2 = keyof RichPeopleVehicle;

// const myVehicle: MyVehicle2 = 'cng';

type User = {
    id: number;
    name: string;
    address:{
        state: string;
        city: string;
        country: string;
    }
}

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

const getPropertyFromObject  = <T> (obj: T, key: keyof T) => {
  return obj[key];
};

const result= getPropertyFromObject(user, "name");
// console.log(result)


const product = {
    brand: "Apple",
    model: "iPhone 14 Pro Max",
    price: 120000,
    releasedYear: 2022,
}

const result2 = getPropertyFromObject(product, "brand");

console.log(result)
console.log(result2)
