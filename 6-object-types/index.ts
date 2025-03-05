// type of object to function with interface 
interface Product { 
    name: string;
    price: number;
    isAvailable: boolean;
}

function showProductDetails(product: Product) {
    console.log(`Name: ${product.name}, Price: $${product.price}, Available: ${product.isAvailable}`);	
}

let apple = { name: 'Apple', price: 1.99, isAvailable: true };
showProductDetails(apple); // Output: Name: Apple, Price: $1.99, Available: true

let orange = { name: 'Orange', price: 0.99, isAvailable: false };
showProductDetails(orange); // Output: Name: Orange, Price: $0.99, Available: false


// optional properties in interface
interface user {
    name: string;
    age?: number;
    email?: string;
}

function showUserDetails(user: user) {
    console.log(`Name: ${user.name}`);
    if(user.age) {
        console.log(`Age: ${user.age}`);
    }
    if(user.email) {
        console.log(`Email: ${user.email}`);
    }
}

const user1 = { name: 'John', age: 30};
const user2 = { name: 'Jane'};

showUserDetails(user1); // Output: Name: John, Age: 30
showUserDetails(user2); // Output: Name: Jane

// readonly properties in interface
interface Car {
    brand: string;
    model: string;
    readonly wheels: number; // readonly property -> Cannot be changed
}

let car: Car = { brand: 'Toyota', model: 'Corolla', wheels: 4 };
console.log(car.wheels); // Output: 4

// Index Signature in interface

interface Dictionary {
    [index: string]: string;
}
 
let colors: Dictionary = {
    'red': '#ff0000',
    'green': '#00ff00',
    'blue': '#0000ff'
};

console.log(colors['red']); // Output: #ff0000
console.log(colors['green']); // Output: #00ff00
console.log(colors['blue']); // Output: #0000ff

colors.white = '#ffffff'; // Add new key-value pair -> white: #ffffff -> Allowed
colors['black'] = '#000000'; // Add new key-value pair -> black: #000000 -> Allowed

// Extending types using interface

interface Animal {
    name: string;
    species: string;
}

interface Dog extends Animal {
    breed: string;
}

const bird: Animal = { name: 'Parrot', species: 'Bird' };
const dog: Dog = { name: 'Buddy', species: 'Dog', breed: 'Labrador' };

console.log(bird); // Output: { name: 'Parrot', species: 'Bird' }
console.log(dog); // Output: { name: 'Buddy', species: 'Dog', breed: 'Labrador' }

// intersection types in interface

interface Character {
    name: string;
    age: number;
}

interface Hero {
    superpower: string;
}

type SuperHero = Character & Hero;

const spiderman: SuperHero = { name: 'Peter Parker', age: 21, superpower: 'Web-slinging' };

console.log(spiderman); // Output: { name: 'Peter Parker', age: 21, superpower: 'Web-slinging' }

// readonly array in interface

interface IcecreamFlavors {
    readonly flavors: string[];
}

let icecream: IcecreamFlavors = { flavors: ['Vanilla', 'Chocolate', 'Strawberry'] };

console.log(icecream.flavors); // Output: ['Vanilla', 'Chocolate', 'Strawberry']

icecream.flavors.push('Butterscotch'); // Allowed
console.log(icecream.flavors); // Output: ['Vanilla', 'Chocolate', 'Strawberry', 'Butterscotch']
// icecream.flavors = ['Mint']; // Error: Cannot assign to 'flavors' because it is a read-only property.

// tuple in interface

type Employee = [number, string, string];

let john: Employee = [1, 'John Doe', 'Developer'];

// tuple with readonly properties

function showFlavors(flavors: readonly [string, string, string]) {
    console.log(flavors[0]);
    console.log(flavors[1]);
    console.log(flavors[2]);
}

let flavors: [string, string, string] = ['Vanilla', 'Chocolate', 'Strawberry'];

showFlavors(flavors); // Output: Vanilla, Chocolate, Strawberry
