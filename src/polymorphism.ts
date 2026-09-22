// polymorphism => Polymorphism means "one thing can have many forms".

class Person {
  getSleep() {
    console.log("I am a normal happy person. I sleep for 8 hours");
  }
}

class Student extends Person {
  getSleep() {
    console.log("I am a student. I sleep for 7 hours");
  }
}

class NextLevelDeveloper extends Person {
  getSleep() {
    console.log("i am a next level developer. I sleep for 6 hours");
  }
}

const getSleepingHours = (param: Person) => {
  param.getSleep();
};

const person1 = new Person();
const person2 = new Student();
const person3 = new NextLevelDeveloper();

getSleepingHours(person3);

class Shape {
  getArea(): number {
    return 0;
  }
}

class AreaOfCircle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class AreaOfRectangle extends Shape {
  hight: number;
  width: number;

  constructor(hight: number, width: number) {
    super();
    this.hight = hight;
    this.width = width;
  }

  getArea(): number {
    return this.hight * this.width;
  }
}

const getCalculatedArea = (param: Shape) => {
  console.log(param.getArea());
};

const are1 = new Shape();
const are2 = new AreaOfCircle(5);
const are3 = new AreaOfRectangle(2, 4);

getCalculatedArea(are3)
