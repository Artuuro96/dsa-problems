/*
Every class which is a child class of another class, should be used like the parent class itselft
*/

class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  makeSound(): string {
    return "Some generic sound";
  }
}

class Dog extends Animal {
  makeSound(): string {
    return "Woof! Woof!";
  }
}

class Cat extends Animal {
  makeSound(): string {
    return "Meow!";
  }
}

function animalSound(animal: Animal): void {
  console.log(`${animal.name} says: ${animal.makeSound()}`);
}

const myDog = new Dog("Buddy");
const myCat = new Cat("Whiskers");

animalSound(myDog); // Output: "Buddy says: Woof! Woof!"
animalSound(myCat); // Output: "Whiskers says: Meow!"


interface Bird {
  fly(): void;
}

class Sparrow implements Bird {
  fly(): void {
    console.log("Sparrow is flying");
  }
}

class Penguin implements Bird {
  fly(): void {
    console.log("Penguin can't fly");
  }
}

function makeBirdFly(bird: Bird): void {
  bird.fly();
}

const sparrow = new Sparrow();
const penguin = new Penguin();

makeBirdFly(sparrow); // Output: "Sparrow is flying"
makeBirdFly(penguin); // Output: "Penguin can't fly"
