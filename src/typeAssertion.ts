// ? type assertion

let anything: any;

anything = "Hello";

console.log((anything as string).at(2));

const kgToGMConverter = (input: number | string) => {
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

console.log(kgToGMConverter("2 kg"))
console.log(kgToGMConverter(true))
