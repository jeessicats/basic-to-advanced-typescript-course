"use strict";
// 1 - arrays
let numbers = [1, 2, 3, 4, 5];
let words = ['John', 'Doe', 'Jane', 'Doe'];
console;
numbers.push(6);
console.log(numbers.indexOf(3));
console.log(numbers);
console.log(numbers.pop());
numbers.shift();
console.log(numbers);
// another way to declare an array
let names = ['John', 'Doe', 'Jane', 'Doe'];
console.log(names);
// any type
let anyType = [1, 'John', true, { name: 'John' }];
console.log(anyType);
// parameters
function soma(num1, num2) {
    console.log(num1 + num2);
}
console.log(soma(1, 2));
// return
function sum(num1, num2) {
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
function passCoordinates(coord) {
    console.log("Latitude: " + coord.lat + " Longitude: " + coord.long);
}
const coordinates = { lat: 2345, long: 23434 };
passCoordinates(coordinates);
// optional properties
function person(name, age) {
    console.log(name + " " + age);
}
person('John Doe', 30);
person('Jane Doe');
// validation optional properties
// first argument can't be null or undefined
// second argument can be null or undefined
function person2(name, age) {
    if (age !== undefined) {
        console.log(name + ", " + age + " years old");
    }
    else {
        console.log(name + ", age not informed");
    }
}
person2('Jane Green', 30);
person2('Olivia Brown');
// union types
function print(variable) {
    console.log(`The variable is: ${variable}`);
}
print(1);
print('Good morning');
// more about union types
function showUserRole(role) {
    if (typeof role === 'boolean') {
        return "User access: " + role;
    }
    else {
        return "User role: " + role;
    }
}
console.log(showUserRole(true));
console.log(showUserRole('Admin'));
function showId(id) {
    return id;
}
console.log(showId('1234'));
console.log(showId(1234));
function showCoordinates(point) {
    console.log(`X: ${point.x}, Y: ${point.y}, Z: ${point.z}`);
}
showCoordinates({ x: 1, y: 2, z: 3 });
;
const user = {
    name: 'John Doe',
    email: 'john@email.com'
};
console.log(user);
// literal types
let test;
test = 'test';
console.log(test);
function showColor(color) {
    console.log(`The color is: ${color}`);
}
showColor('red');
// non-null assertion operator -> ! (not recommended) -> use only when you are sure that the variable is not null or undefined
const text = document.getElementById('My text');
console.log(text);
// BigInt -> new type in JavaScript -> used to represent large integers -> number + n -> 9007199254740991n
let myNumber = 9007199254740991n; // 9007199254740991n
console.log(myNumber);
// Symbol -> new type in JavaScript -> used to create unique identifiers
const mySymbol = Symbol('mySymbol');
console.log(mySymbol);
const mySymbol2 = Symbol('mySymbol');
console.log(mySymbol2);
console.log(mySymbol === mySymbol2);
