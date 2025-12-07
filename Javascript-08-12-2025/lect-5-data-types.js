//Data Types in JavaScript

// symbol => for unique identifiers/uniqueness

// 1. Primitive Data Types

// a) Number
let age = 25;
let temperature = 36.6;

// b) String
let name = "Chetan";
let sentence = "Hello, my name is Chetan";

// c) Boolean
let isStudent = true;
let isWorking = false;

// d) Undefined
let address;
console.log(address); // Output: undefined

// e) Null
let person = null;
console.log(person); // Output: null

// f) Symbol
let uniqueId = Symbol("id1");
let anotherId = Symbol("id1");
console.log(uniqueId === anotherId); // Output: false

// g) BigInt
let bigNumber = BigInt(9007199254741991);
let anotherBigNumber = 9007199254741991n;
console.log(bigNumber === anotherBigNumber); // Output: true

// 2. Non-Primitive Data Types

// a) Object
let student = {
    name: "Chetan",
    age: 25,
    isEnrolled: true
};

// b) Array
let numbers = [1, 2, 3, 4, 5];
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[1]); // Output: Banana

// c) Function
function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Chetan")); // Output: Hello, Chetan!

// d) Date
let currentDate = new Date();
console.log(currentDate); // Output: Current date and time