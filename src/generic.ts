// generics type => dynamically generalize

type GenericArray<T> = Array<T>;

// const friend: string[] = ["a", "b", "c", "d", "e"];
const friend: GenericArray<string> = ["a", "b", "c", "d", "e"];

// const roll: number[] = [1, 2, 3, 4];
const roll: GenericArray<number> = [1, 2, 3, 4];

// const isEligible: boolean[] = [true, false, true];
const isEligible: GenericArray<boolean> = [true, false, true];

// type Coordinates = [number, number] //type alias
type Coordinates<X, Y> = [X, Y]; // generalize

const coordinates1: Coordinates<number, number> = [1, 2];
const coordinates2: Coordinates<string, string> = ["1", "2"];

// ? generic for array of object

const userList: GenericArray<{ name: string; age: number }> = [
  {
    name: "Al-amin",
    age: 22,
  },
  {
    name: "Al-amin",
    age: 22,
  },
];

// ? generic with interface

interface Developer<T, B = null> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releasedYear: string;
  };
  smartWatch: T;
  bike?: B;
}

interface nonBrandedWatch {
  heartRate: string;
  stopWatch: boolean;
}

interface brandedWatch {
  heartRate: string;
  stopWatch: boolean;
  callingFeature: boolean;
  calculator: boolean;
}

interface Bike {
  model: string;
  cc: number;
}

const poorDeveloper: Developer<nonBrandedWatch, Bike> = {
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

const richDeveloper: Developer<brandedWatch, Bike> = {
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
