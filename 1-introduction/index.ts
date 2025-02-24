const firstName = 'John';
const lastName = 'Doe';
const num1 = 10;

function greeting(name: string) {
  console.log("Hello " + name);
}

greeting(firstName);
greeting(num1); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.