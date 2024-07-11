# Functions
Functions are a way to group code together and give it a name. This allows you to reuse the code by calling the function instead of writing the code again. Functions can take arguments and return values.

## Defining a function and calling
```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
greet("Ujjwal");// hello Ujjwal
```

## Function with multiple parameters
when the total number of parameters are not known, e.g. in a shopping cart, we can use rest operator to get all the parameters in an array
__rest operator is always the last parameter in the function__
```javascript
function calculateCartPrice2(...num1){
    return num1; // this will return an array of all the parameters
}
console.log(calculateCartPrice2(200, 400, 500, 2000,9999));
```
```javascript
// sometimes we need to pass some parameters before the rest operator => this is an interview question
function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000)) //=> [500, 2000] => 200 and 400 are not included in the array
```
## Passing object as a parameter
```javascript

function greet({name, age}){
    return `Hello ${name}, you are ${age} years old`;
}
// or
obj{
    name: "Ujjwal",
    age: 25
}
greet(obj);
```
## Default parameters
```javascript
function greet(name = "Ujjwal"){
    return `Hello ${name}`;
}
greet(); // Hello Ujjwal
greet("John"); // Hello John
```
## Arrow functions
```javascript
const greet = (name) => `Hello ${name}`;
greet("Ujjwal");
```
# Scope
Scope is the context in which a variable is declared. In JavaScript, there are two types of scope: global scope and local scope.

`var` -> global scope
`let` and `const` -> block scope/local scope

## Closure: 
when a function is enclosed or nested in a parent function, then the variables of the parent function are accessible to the child function, this is called closure in javascript

## Hoisting
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope before code execution.

Hoisting can be done in functions but not in expressions and variables

```javascript
console.log(x); // undefined
var x = 5;
```
```javascript
greet(); // Hello
function greet(){
    console.log("Hello");
}
```
# Arrow Functions
## This Keyword
This keyword in javascript

this refers to the current context in javascript and context is nothing but the value of a variable or function at that point of time

and in the node environment, this refers to a empty object but in the browser, this refers to the window object 

this keyword can only be used with objects and not with functions but works with arrow functions and give ans as empty object

```javascript
const chai =  () => {
    let username = "hitesh"
    console.log(this);
}
chai();
```
## Arrow functions and this keyword
Arrow functions do not have their own this. The value of this inside an arrow function is always inherited from the enclosing scope.

```javascript
const user = {
  name: "Ujjwal",
  greet: () => {
    console.log(this.name);
  }
};
user.greet(); // Ujjwal
```
## implicit return
Very important in React.

```javascript
const addTwo = (num1, num2) =>  num1 + num2

const addTwo = (num1, num2) => ( num1 + num2 )
// way to return object in arrow function

const addTwo = (num1, num2) => ({username: "Ujjwal", age: 20})
```
## IIFE
Immediately Invoked Function Expression (IIFE) is a function that runs as soon as it is defined.

For example we want to connect the database as soon as the file is loaded, we can use IIFE

```javascript
(function() {
  console.log("Hello, World!");
})();
```
```javascript
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // you need to add ";" at the end of IIFE, kyuki context invoke hogya h but function ko nahi pta ki context rokna kaha par hai


// to reduce the global scope pollution, we can use IIFE


// global scope pollution => when we declare a variable in global scope, it can be accessed from anywhere in the code, this can lead to security issues
```

