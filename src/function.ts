// function
//? arrow function, normal function

function addNormal(num1: number, num2: number): number {
  //? return type
  return num1 + num2;
}
console.log(addNormal(2, 3)); // 5

const addArrow = (num1: number, num2: number): number => {
  return num1 + num2;
};
console.log(addArrow(2, 3)); // 5


// object => function => method

const poorUser = {
  name: 'Al-amin',
  balance: 10000,
  addBalance(addedBalance: number): number{
    return this.balance + addedBalance;
  }
}

poorUser.addBalance(5000); // 15000





// callback function

const arr: number[] = [1, 2, 3, 4, 5];
const sqrtArr = arr.map((element: number): number =>{ return element * element})

console.log(sqrtArr)
