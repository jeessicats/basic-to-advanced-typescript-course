"use strict";
// function with return of type void -> no return
function message() {
    console.log("Hello, this is a message for you");
}
message();
// callback as an argument
function greetings(name) {
    return `Hello, ${name}`;
}
function displayMessage(callback) {
    console.log(callback("John"));
}
displayMessage(greetings);
// generic function -> T is a type parameter -> can be any type
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c"]));
console.log(firstElement(["John", "Shopia", "Tom"]));
function mergeObjects(obj1, obj2) {
    return Object.assign(obj1, obj2);
}
const obj1 = { name: "John" };
const obj2 = { age: 30 };
const mergedObj = mergeObjects(obj1, obj2);
console.log(mergedObj);
// constraints -> T extends U -> T must be a subtype of U
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(10, 25));
console.log(biggestNumber("10", "29"));
// console.log(biggestNumber(10, "29")); // error
// parameters type -> (a: number, b: number) => number
// return type -> number
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
console.log(mergeArrays(["a", "b", "c"], ["d", "e", "f"]));
console.log(mergeArrays([1, 2, 3], ["a", "b", "c"]));
// optional parameters
function funnyMessage(name, age) {
    if (age) {
        return `Hello, ${name}, you are ${age} years old, right?`;
    }
    return `Hello, ${name}, how old are you?`;
}
console.log(funnyMessage("John"));
console.log(funnyMessage("John", 30));
//default parameters
function defaultSum(a, b = 10) {
    if (b) {
        return a + b;
    }
    return a;
}
console.log(defaultSum(5));
console.log(defaultSum(5, 15));
// unknown type
function printValue(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else if (typeof value === "number") {
        console.log(value.toFixed(2));
    }
    else if (typeof value === "boolean") {
        console.log(value ? "Yes" : "No");
    }
    else if (Array.isArray(value)) {
        console.log(value.join(", "));
    }
    else {
        console.log(value);
    }
}
printValue("Hello");
printValue(10);
printValue(true);
printValue([1, 2, 3]);
printValue({ name: "John" });
// never type -> function that never returns a value or always throws an error
// void can be used to return undefined
function throwError(message) {
    throw new Error(message);
}
// throwError("An error occurred");
// Rest Operator
function sumAll(...numbers) {
    return numbers.reduce((number, sum) => sum + number, 0);
}
console.log(sumAll(1, 2, 3, 4, 5));
console.log(sumAll(10, 20, 30, 40, 50));
// destructuring in function parameters
function showProductDetails({ name, price }) {
    console.log(`Product: ${name}, Price: ${price}`);
}
showProductDetails({ name: "Laptop", price: 1000 });
showProductDetails({ name: "Phone", price: 500 });
