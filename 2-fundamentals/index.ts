// numeric.ts
let x: number = 10; // Type 'number' explicitly specified
let y = 20; // Type 'number' inferred from the value

console.log(x + y); // 30

// x = "Hello"; // Error: Type 'string' is not assignable to type 'number'
y = 10; // OK

const z: number = 3.14159; // Type 'number' explicitly specified, value is a float number 

console.log(z); // 3.14159

console.log(z.toPrecision(4)); // 3.142

// string.ts
let firstName: string = "John"; // Type 'string' explicitly specified
console.log(firstName.toUpperCase()); // JOHN

let fullName: string;

const lastName: string = "Doe"; // Type 'string' explicitly specified, value is a string

fullName = firstName + " " + lastName;

console.log(fullName); // John Doe

console.log(typeof fullName); // string

// boolean.ts
// true or false
let isDone: boolean = false; // Type 'boolean' explicitly specified
console.log(isDone); // false

console.log(typeof isDone); // false

// inference and annotations
let isCompleted = true; // Type 'boolean' inferred from the value
let isApproved: boolean; // Type 'boolean' explicitly specified

let text = "Hello, World!"; // Type 'string' inferred from the value
let message: string; // Type 'string' explicitly specified
console.log(text); // Hello, World!