/*

on the basis of how the data is being stored in the memory and how it is accessed, data types are classified into two categories:
1. Primitive Datatype
2. Non-Primitive Datatype / Reference Datatype


JAVASCRIPT IS A DYNAMICALLY TYPED LANGUAGE that means that the data type of the variable is determined at the runtime, not at the compile time. or we need not to define the data type of the variable explicitly.
example -
let name = "Ujjwal" // string
let age = 22 // number
*/



//  Primitive
// definition - data is stored in the memory location directly, they are always called by value
// stored in the stack memory that means that changes in data will not affect the original data (call by value)

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)
// definition - data is stored in the memory location indirectly. for example, the memory location of the data is stored in the variable, they are always called by reference
// stored in the heap memory that means that changes in data will affect the original data (call by reference)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof score); // "number", because score is a number
console.log(typeof scoreValue); // "number", because scoreValue is a number
console.log(typeof isLoggedIn); // "boolean", because isLoggedIn is a boolean
console.log(typeof outsideTemp); // "object", because null is considered an object in JavaScript
console.log(typeof userEmail); // "undefined", because userEmail has not been assigned a value
console.log(typeof id); // "symbol", because id is a symbol
console.log(typeof anotherId); // "symbol", because anotherId is a symbol
console.log(typeof heros); // "object", because arrays are considered objects in JavaScript
console.log(typeof myObj); // "object", because myObj is an object
console.log(typeof myFunction); // "function", because myFunction is a function

// https://262.ecma-international.org/5.1/#sec-11.4.3


// stack and heap example

let myYoutubename = "hiteshchoudharydotcom"
let anothername = myYoutubename
anothername = "chaiaurcode" // original data is not changes that is -> myYoutubename since anothername is just carrying a copy of myYoutubename

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com" // original data is changes that is -> userOne.email since userTwo is pointing to userOne

console.log(userOne.email);
console.log(userTwo.email);