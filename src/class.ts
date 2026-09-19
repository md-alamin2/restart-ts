// oop -> class >>> object

class Animal {
  name: string;
  species: string;
  sound: string;

  constructor(name: string, species: string, sound: string) {
    ((this.name = name), (this.sound = sound), (this.species = species));
  }

  makeSound(){
    console.log(`${this.name} is making sound ${this.sound}`)
  }
}

// parameter properties
class Vehicle{
    constructor(public name: string, public model: string, public releasedYear: number){}
}

const dog = new Animal('doges bro', 'dog', 'ghew ghew') //The new keyword means:Create a new object using the Animal class
const cat = new Animal('jack', 'cat', 'meow meow')

cat.makeSound()