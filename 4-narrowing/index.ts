// type guard -> it is a way to check the type of a variable at runtime
// type guard is a way to check the type of a variable at runtime
function sum(a: number | string, b: number | string) {

    if (typeof a === 'string' && typeof b === 'string') {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === 'number' && typeof b === 'number') {
    console.log(a + b);
  } else {
    console.log("Invalid Operation!");
  }
}

sum(10, 20);
sum("10", "20");
sum(10, "20");

// check if the value exists 
function operations(arr: number[], operation?: string | undefined) {
    if (operation) {
        if (operation === 'sum') {
            console.log(arr.reduce((i, total) => i + total));
        } else if (operation === 'multiply') {
            console.log(arr.reduce((i, total) => i * total));
        } 
    } else {
        console.log("No operation provided");
    }
}

operations([1, 2, 4], 'sum');
operations([1, 2, 4], 'multiply');
operations([1, 2, 3]);

// instanceof -> it is a way to check the type of a variable at runtime
// instanceof is a way to check the type of a variable at runtime
class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Employee extends Person {
    id: number;
    constructor(name: string, id: number) {
        super(name);
        this.id = id;
    }
}

const olivia = new Employee('Olivia', 1);
const john = new Person('John');

console.log(olivia); // Employee { name: 'Olivia', id: 1 }
console.log(john); // Person { name: 'John' }

function personGreeting(person: Object) {
    if (person instanceof Employee) {
        console.log(`Hello ${person.name}, your employee id is ${person.id}`);
    } else if (person instanceof Person) {
        console.log(`Hi ${person.name}, how are you?`);
    }
}

personGreeting(olivia); // Hello Olivia, your employee id is 1
personGreeting(john); // Hi John, how are you?


// in operator -> it is a way to check the type of a variable at runtime
// in is a way to check the type of a variable at runtime
class Animal {
    name
    specie 

    constructor(name: string, specie?: string) {
        this.name = name;
        if (specie) {
            this.specie = specie;
        }
    }
}

const dog = new Animal('Dog', 'Mammal');
const cat = new Animal('Cat');

function animalDetails(animal: Animal) {
    if ('specie' in animal) {
        console.log(`The ${animal.name} is a ${animal.specie}`);
    } else {
        console.log(`The ${animal.name} is a unknown specie`);
    }
}

animalDetails(dog); // The Dog is a Mammal
animalDetails(cat); // The Cat is a unknown specie