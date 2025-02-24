// 1 - arrays

let numbers: number[] = [1, 2, 3, 4, 5];
let words: string[] = ['John', 'Doe', 'Jane', 'Doe'];

console
numbers.push(6);
console.log(numbers.indexOf(3));

console.log(numbers);

console.log(numbers.pop());

numbers.shift();

console.log(numbers);

// another way to declare an array
let names: Array<string> = ['John', 'Doe', 'Jane', 'Doe'];
console.log(names);

// any type
let anyType: any[] = [1, 'John', true, { name: 'John' }];
console.log(anyType);

// parameters
function soma(num1: number, num2: number) {
  console.log(num1 + num2);
}

console.log(soma(1, 2));

// return
function sum(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(sum(4, 26));

// anonymous function
//setTimeout(function () {
//    const sallary: number = 1000;
//    console.log(sallary);
//}
//, 1000);

// object type
function passCoordinates(coord: { lat: number, long: number }) {
    console.log("Latitude: " + coord.lat + " Longitude: " + coord.long);
}

const coordinates = {lat: 2345, long: 23434}
passCoordinates(coordinates);

// optional properties
function person(name: string, age?: number) {
    console.log(name + " " + age);
}

person('John Doe', 30);
person('Jane Doe');

// validation optional properties
// first argument can't be null or undefined
// second argument can be null or undefined
function person2(name: string, age?: number) {
    if (age !== undefined) {
        console.log(name + ", " + age + " years old");
    } else {
        console.log(name + ", age not informed");
    }
}

person2('Jane Green', 30);
person2('Olivia Brown');

// union types
function print(variable: number | string) {
    console.log(`The variable is: ${variable}`);
}

print(1);
print('Good morning');

// more about union types
function showUserRole(role: boolean | string) {
    if (typeof role === 'boolean') {
        return "User access: " + role;
    } else {
        return "User role: " + role;
    }
}

console.log(showUserRole(true));
console.log(showUserRole('Admin'));

// type alias

type Id = string | number;

function showId(id: Id) {
    return id;
}

console.log(showId('1234'));
console.log(showId(1234));

// interface
interface Point {
    x: number;
    y: number;
    z: number;
}

function showCoordinates(point: Point) {
    console.log(`X: ${point.x}, Y: ${point.y}, Z: ${point.z}`);	
}

showCoordinates({x: 1, y: 2, z: 3});

// difference between type alias and interface
// type alias can be used with union types
// interface can be used with extends
// interface can be used with implements
// interface can be used with declaration merging
// interface can be modified with declaration merging
// type alias can't be modified with declaration merging

interface User {
    name: string;
    email: string;
};

const user: User = {
    name: 'John Doe',
    email: 'john@email.com'
};

console.log(user);

// literal types

let test: 'test';
test = 'test';

console.log(test);

function showColor(color: 'red' | 'green' | 'blue') {
    console.log(`The color is: ${color}`);
}

showColor('red');

// non-null assertion operator -> ! (not recommended) -> use only when you are sure that the variable is not null or undefined
const text = document.getElementById('My text')!;

console.log(text);

// BigInt -> new type in JavaScript -> used to represent large integers -> number + n -> 9007199254740991n
let myNumber: bigint = 9007199254740991n; // 9007199254740991n
console.log(myNumber);

// Symbol -> new type in JavaScript -> used to create unique identifiers
const mySymbol : symbol = Symbol('mySymbol');
console.log(mySymbol);
const mySymbol2 : symbol = Symbol('mySymbol');
console.log(mySymbol2);

console.log(mySymbol === mySymbol2);