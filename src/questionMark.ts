// ?: ternary operator => use for decision making
// ??: nullish coalescing operator => only works when the value is null/undefine
// ?. => optional chaining

const isEligible = (age: number) => {
  // normal if else
  if (age >= 20) {
    console.log("You are Eligible");
  } else {
    console.log("you are not eligible");
  }

  // ternary operator
  age >= 20
    ? console.log("you are Eligible")
    : age < 18
      ? console.log("you are not 18+")
      : console.log("you are not eligible");
};

isEligible(10);

// ?? nullish coalescing operator

const userTheme = "Dark";

const selectedTheme = userTheme ?? "Light theme";
console.log(selectedTheme);

// ?. optional chaining

const user: {
  name: {
    firstName: string;
    lastName?: string;
  };
} = {
  name: {
    firstName: "Al-amin",
  },
};

const userName = user?.name?.lastName
console.log(userName)