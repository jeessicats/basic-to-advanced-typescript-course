"use strict";
// generics 
function showData(data) {
    return `Data: ${data}`;
}
console.log(showData(123));
console.log(showData('Hello'));
// constraints in generics
function showProductName(product) {
    return `Product name: ${product.name}`;
}
const product1 = { name: 'Laptop', price: 1000 };
const product2 = { name: 'Mobile', price: 500, brand: 'Samsung' };
console.log(showProductName(product1));
console.log(showProductName(product2));
const pen = { name: 'Pen', price: 2, brand: 'Bic' };
const notebook = { name: 'Notebook', price: 10, brand: 'Tilibra' };
// type parameters
function getSomeKey(obj, key) {
    return obj[key];
}
const server = {
    hd: 500,
    ram: 32,
    cpu: 4
};
console.log(getSomeKey(server, 'hd'));
console.log(getSomeKey(server, 'ram'));
function showCharacterName(obj, name) {
    return obj[name];
}
const character = {
    name: 'Stitch',
    age: 3,
    power: true
};
console.log(showCharacterName(character, 'name'));
console.log(showCharacterName(character, 'age'));
console.log(showCharacterName(character, 'power'));
// typeof Type Operator
const userName = 'olivia';
const anotherUserName = 'william';
const truck = {
    km: 10000,
    year: 2020,
    brand: 'Ford'
};
function showKm(km) {
    console.log(`The truck has ${km} km`);
}
showKm(truck.km);
const car = {
    km: 5000,
    year: 2018,
    brand: 'Chevrolet'
};
showKm(car.km);
// const result: Result = 'Olivia'; // error
const result = 10; // ok
const customTest = 'text - 10';
