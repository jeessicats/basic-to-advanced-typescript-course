"use strict";
function showProductDetails(product) {
    console.log(`Name: ${product.name}, Price: $${product.price}, Available: ${product.isAvailable}`);
}
let apple = { name: 'Apple', price: 1.99, isAvailable: true };
showProductDetails(apple); // Output: Name: Apple, Price: $1.99, Available: true
let orange = { name: 'Orange', price: 0.99, isAvailable: false };
showProductDetails(orange); // Output: Name: Orange, Price: $0.99, Available: false
function showUserDetails(user) {
    console.log(`Name: ${user.name}`);
    if (user.age) {
        console.log(`Age: ${user.age}`);
    }
    if (user.email) {
        console.log(`Email: ${user.email}`);
    }
}
const user1 = { name: 'John', age: 30 };
const user2 = { name: 'Jane' };
showUserDetails(user1); // Output: Name: John, Age: 30
showUserDetails(user2); // Output: Name: Jane
let car = { brand: 'Toyota', model: 'Corolla', wheels: 4 };
console.log(car.wheels); // Output: 4
let colors = {
    'red': '#ff0000',
    'green': '#00ff00',
    'blue': '#0000ff'
};
console.log(colors['red']); // Output: #ff0000
console.log(colors['green']); // Output: #00ff00
console.log(colors['blue']); // Output: #0000ff
colors.white = '#ffffff'; // Add new key-value pair -> white: #ffffff -> Allowed
colors['black'] = '#000000'; // Add new key-value pair -> black: #000000 -> Allowed
const bird = { name: 'Parrot', species: 'Bird' };
const dog = { name: 'Buddy', species: 'Dog', breed: 'Labrador' };
console.log(bird); // Output: { name: 'Parrot', species: 'Bird' }
console.log(dog); // Output: { name: 'Buddy', species: 'Dog', breed: 'Labrador' }
const spiderman = { name: 'Peter Parker', age: 21, superpower: 'Web-slinging' };
console.log(spiderman); // Output: { name: 'Peter Parker', age: 21, superpower: 'Web-slinging' }
let icecream = { flavors: ['Vanilla', 'Chocolate', 'Strawberry'] };
console.log(icecream.flavors); // Output: ['Vanilla', 'Chocolate', 'Strawberry']
icecream.flavors.push('Butterscotch'); // Allowed
console.log(icecream.flavors); // Output: ['Vanilla', 'Chocolate', 'Strawberry', 'Butterscotch']
let john = [1, 'John Doe', 'Developer'];
// tuple with readonly properties
function showFlavors(flavors) {
    console.log(flavors[0]);
    console.log(flavors[1]);
    console.log(flavors[2]);
}
let flavors = ['Vanilla', 'Chocolate', 'Strawberry'];
showFlavors(flavors); // Output: Vanilla, Chocolate, Strawberry
