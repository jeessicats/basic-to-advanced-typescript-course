"use strict";
// campos em classes
class User {
}
const john = new User();
john.name = 'John';
john.age = 30;
console.log(john.name);
// constructor
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const oliver = new NewUser('Oliver', 25);
const maria = new NewUser('Maria', 30);
console.log(oliver.name);
// readonly fields
class Car {
    constructor(brand) {
        this.wheels = 4;
        this.brand = brand;
    }
}
const ferrari = new Car('Ferrari');
console.log(ferrari.wheels);
// inheritance and super
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const machine = new Machine('Machine');
class Computer extends Machine {
    constructor(name, keyboard) {
        super(name);
        this.keyboard = keyboard;
    }
}
const computer = new Computer('Computer', true);
console.log(machine);
console.log(computer);
// methods
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        return `Hello stranger, my name is ${this.name}`;
    }
}
const dwarf = new Dwarf('Gimli');
console.log(dwarf.greeting());
// this keyword - refer to the current instance of the class
class Person {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
const person = new Person('John');
person.greeting();
// getters -> get the value of a property -> read properties of an object
class Animal {
    constructor(name, species) {
        this._name = name;
        this.species = species;
    }
    get name() {
        return this._name;
    }
    getSpecies() {
        return this.species;
    }
}
const dog = new Animal('Rex', 'Dog');
console.log(dog.name);
console.log(dog.getSpecies());
// setters -> set the value of a property -> change (mutate) properties of an object
class Coordinates {
    setX(x) {
        this.x = x;
        console.log("X was set to " + x);
    }
    setY(y) {
        this.y = y;
        console.log("Y was set to " + y);
    }
}
const coordinates = new Coordinates();
coordinates.setX(10);
coordinates.setY(20);
class Book {
    constructor(title) {
        this.title = title;
    }
    show() {
        return `The title of the book is: ${this.title}`;
    }
}
const book = new Book('The Lord of the Rings');
console.log(book.show());
class Movie {
    constructor(title) {
        this.title = title;
    }
    show() {
        return `The title of the movie is: ${this.title}`;
    }
}
const movie = new Movie('The Godfather');
console.log(movie.show());
// override methods
class Base {
    show() {
        console.log("Hello from Base");
    }
}
class Derived extends Base {
    show() {
        console.log("Hello from Derived");
    }
}
const base = new Base();
const derived = new Derived();
console.log(base.show());
console.log(derived.show());
// visibility modifiers
// public - default -> accessible from outside the class
class C {
    constructor() {
        this.x = 10;
        this.y = 20;
    }
}
const cInstance = new C();
console.log(cInstance.x);
console.log(cInstance.y);
// protected - accessible within the class and its subclasses just with methods and properties
class E {
    constructor() {
        this.x = 10;
    }
    show() {
        console.log("This is protected method");
    }
}
class F extends E {
    show() {
        console.log(this.x);
    }
    showProtected() {
        this.show();
    }
}
const fInstance = new F();
fInstance.show();
// fInstance.protectedMethod(); // error - protectedMethod is not defined
fInstance.showProtected();
// private - only accessible within the class
// -> not accessible from outside the class -> not accessible from subclasses
class PrivateClass {
    constructor() {
        this.name = 'John';
    }
    showName() {
        console.log(this.name);
    }
}
const privateInstance = new PrivateClass();
privateInstance.showName();
// static - accessible without creating an instance of the class
class StaticClass {
    static show() {
        console.log("Hello from static method");
    }
}
StaticClass.x = 10;
console.log(StaticClass.x);
StaticClass.show();
// generic classes
class GenericClass {
    constructor(value) {
        this.value = value;
    }
    show() {
        return this.value;
    }
}
const genericString = new GenericClass('Hello from generic class');
console.log(genericString.show());
