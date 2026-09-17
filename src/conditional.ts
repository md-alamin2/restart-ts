// conditional types

type A = null;
type B = undefined;

type C = A extends number ? true : B extends string ? true : false;


type RichPeopleVehicle = {
    bike: string;
    car: string;
    yacht: string;
}

type CheckVehicle <T> = T extends keyof RichPeopleVehicle ? true : false;

type HasBike = CheckVehicle<"bike">; // true
type HasCng = CheckVehicle<"cng">; // false