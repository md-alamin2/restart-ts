// ? type assertion

let anything: any;

anything = "Hello";

console.log((anything as string).at(2));

const kgToGMConverter = (input: number | string): number | string | unknown => {
  if (typeof input === "number") {
    return input * 1000;
  } else if (typeof input === "string") {
    const [value] = input.split(" ");
    const convertedValue = Number(value);
    return `the converted value is: ${convertedValue * 1000} GM`;
  } else {
    throw console.error("Input type not match the result");
  }
};


const result1 = (kgToGMConverter("2 kg") as string).length // type assertion
const result2 = kgToGMConverter(2)
console.log(result1)
console.log(result2)
