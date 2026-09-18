// mapped types

// map

const arrayOfNumber: number[] = [1, 2, 3, 4];

const arrayOfStringUsingMap: string[] = arrayOfNumber.map((num) =>
  num.toString(),
);

console.log(arrayOfStringUsingMap);

type AreaOfNum = {
  hight: number;
  width: number;
};

// type AreaOfStr = {
//   hight: string;
//   width: string;
// };

type AreaOfStr = {
  [key in "hight" | "width"]: string;
};

// dynamic type
type AreaOfBoolean = {
  [key in keyof AreaOfNum]: boolean;
};

// mapped with generic
type AreaOf<T> = {
  [key in keyof T]: T[key];
};

const area1: AreaOf<{ hight: number; width: number }> = {
  hight: 40,
  width: 50,
};
