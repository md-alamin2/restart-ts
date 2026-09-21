"use strict";
// oop -> class >>> object
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    name;
    species;
    sound;
    constructor(name, species, sound) {
        ((this.name = name), (this.sound = sound), (this.species = species));
    }
    makeSound() {
        console.log(`${this.name} is making sound ${this.sound}`);
    }
}
// parameter properties
class Vehicle {
    name;
    model;
    releasedYear;
    constructor(name, model, releasedYear) {
        this.name = name;
        this.model = model;
        this.releasedYear = releasedYear;
    }
}
const dog = new Animal('doges bro', 'dog', 'ghew ghew'); //The new keyword means:Create a new object using the Animal class
const cat = new Animal('jack', 'cat', 'meow meow');
cat.makeSound();
//# sourceMappingURL=class.js.map