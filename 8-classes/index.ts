// campos em classes

class User {
  name!: string;
  age!: number;
}

const john = new User();
john.name = 'John';
john.age = 30;

console.log(john.name);

// constructor

class NewUser {
  name
  age

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const oliver = new NewUser('Oliver', 25);
const maria = new NewUser('Maria', 30);

console.log(oliver.name);

// readonly fields

class Car {
  brand: string;
  readonly wheels: number = 4;

  constructor(brand: string) {
    this.brand = brand;
  }
}

const ferrari = new Car('Ferrari');
console.log(ferrari.wheels);

// inheritance and super

class Machine {
  name

  constructor(name: string) {
    this.name = name;
  }
}

const machine = new Machine('Machine');

class Computer extends Machine {
    keyboard

    constructor(name: string, keyboard: boolean) {
      super(name);
      this.keyboard = keyboard;
    }
}

const computer = new Computer('Computer', true);
console.log(machine);
console.log(computer);

// methods

class Dwarf {
  name

  constructor(name: string) {
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
  name

  constructor(name: string) {
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
  private _name: string;
  private species: string;

    constructor(name: string, species: string) {
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
  private x!: number
  private y!: number

  setX(x: number) {
    this.x = x;

    console.log("X was set to " + x);
  }

    setY(y: number) {
        this.y = y;

        console.log("Y was set to " + y);
    }
}

const coordinates = new Coordinates();

coordinates.setX(10);
coordinates.setY(20);

// inheritance of interfaces

interface showTitle {
    title: string;
    }

class Book implements showTitle {
    title: string;

    constructor(title: string) {
        this.title = title;
    }

    show() {
        return `The title of the book is: ${this.title}`;
    }
}

const book = new Book('The Lord of the Rings');
console.log(book.show());

class Movie implements showTitle {
    title: string;

    constructor(title: string) {
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
    show(): void {
        console.log("Hello from Base");
    }
}

class Derived extends Base {
    show(): void {
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
    x = 10;
    y = 20;
}

const cInstance = new C();

console.log(cInstance.x);
console.log(cInstance.y);

// protected - accessible within the class and its subclasses just with methods and properties

class E {
    protected x = 10;

    protected show() {
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
    private name = 'John';

    showName() {
        console.log(this.name);
    }
}

const privateInstance = new PrivateClass();
privateInstance.showName();

// static - accessible without creating an instance of the class

class StaticClass {
    static x = 10;

    static show() {
        console.log("Hello from static method");
    }
}

console.log(StaticClass.x);
StaticClass.show();


// generic classes

class GenericClass<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }

    show(): T {
        return this.value;
    }
}

const genericString = new GenericClass<string>('Hello from generic class');
console.log(genericString.show());

