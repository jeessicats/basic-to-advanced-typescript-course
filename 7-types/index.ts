// generics 

function showData<T>(data: T): string {
    return `Data: ${data}`;
}

console.log(showData<number>(123));
console.log(showData<string>('Hello'));

// constraints in generics

function showProductName<T extends {name: string}>(product: T): string {
    return `Product name: ${product.name}`;
}

const product1 = {name: 'Laptop', price: 1000};
const product2 = {name: 'Mobile', price: 500, brand: 'Samsung'};

console.log(showProductName(product1));
console.log(showProductName(product2));


// generics com interfaces

interface Product<T, U> {
    name: string;
    price: T;
    brand: U;
}

type Pen = Product<number, string>;
type Notebook = Product<number, string>;

const pen: Pen = {name: 'Pen', price: 2, brand: 'Bic'};
const notebook: Notebook = {name: 'Notebook', price: 10, brand: 'Tilibra'};

// type parameters

function getSomeKey<T extends object, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const server = {
    hd: 500,
    ram: 32,
    cpu: 4
};

console.log(getSomeKey(server, 'hd'));
console.log(getSomeKey(server, 'ram'));

// keyof Type Operator

type Character = {
    name: string;
    age: number;
    power: boolean;
}

type CharacterKey = keyof Character;

function showCharacterName(obj: Character, name: CharacterKey) {
    return obj[name];
}

const character: Character = {
    name: 'Stitch',
    age: 3,
    power: true
};

console.log(showCharacterName(character, 'name'));
console.log(showCharacterName(character, 'age'));
console.log(showCharacterName(character, 'power'));

// typeof Type Operator
const userName: string = 'olivia';
const anotherUserName: typeof userName = 'william';

// indexed access types

type Truck = {
    km: number;
    year: number;
    brand: string;
}

type TruckKm = Truck['km'];
type TruckYear = Truck['year'];
type TruckBrand = Truck['brand'];

const truck: Truck = {
    km: 10000,
    year: 2020,
    brand: 'Ford'
};

function showKm(km: TruckKm) {
    console.log(`The truck has ${km} km`);
}

showKm(truck.km);

const car = {
    km: 5000,
    year: 2018,
    brand: 'Chevrolet'
};

showKm(car.km);

// conditional types

interface A {}

interface B {}

type Result = B extends A ? number : string;

// const result: Result = 'Olivia'; // error
const result: Result = 10; // ok

// template literals type

type testA = "text";

type CustomTest = `${testA} - ${number}`;

const customTest: CustomTest = 'text - 10';

type CustomTest2 = `${testA} - ${number} - ${boolean}`;