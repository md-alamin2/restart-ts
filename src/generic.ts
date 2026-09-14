// generics type => dynamically generalize



type GenericArray<T> = Array<T>

// const friend: string[] = ["a", "b", "c", "d", "e"];
const friend: GenericArray<string> = ["a", "b", "c", "d", "e"];

// const roll: number[] = [1, 2, 3, 4];
const roll: GenericArray<number> = [1, 2, 3, 4];

// const isEligible: boolean[] = [true, false, true];
const isEligible: GenericArray<boolean> = [true, false, true];


// type Coordinates = [number, number] //type alias
type Coordinates<X, Y> = [X, Y] // generalize 

const coordinates1: Coordinates<number, number> = [1, 2]
const coordinates2: Coordinates<string, string> = ['1', '2']
