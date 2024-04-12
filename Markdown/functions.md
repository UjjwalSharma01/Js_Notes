# Understanding JavaScript Functions

## Function Basics

Functions are defined using the `function` keyword followed by a name and a code block.

```javascript
// Defining a function to print a name
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// Calling the function
sayMyName();
```

## Functions with Parameters and Return Statements

Functions can accept parameters and return values using the `return` statement.

```javascript
// Function to divide two numbers
function divideTwoNumbers(number1, number2){
    return (number1 / number2);
}

// Function to add two numbers
function addTwoNumbers(number1, number2){
    return number1 + number2;
}

const result = addTwoNumbers(3, 5);

console.log("Result: ", result);
```

## Handling Default Values and Undefined Parameters

Functions can have default parameter values and handle undefined parameters.

```javascript
// Function with default parameter value
function loginUserMessage(username = "Anonymous"){
    return `${username} just logged in`;
}

// console.log(loginUserMessage()); // Output: "Anonymous just logged in"
// console.log(loginUserMessage("hitesh")); // Output: "hitesh just logged in"
```

## Rest Parameters and Object Parameters

Rest parameters allow functions to accept an arbitrary number of arguments as an array, while objects can be passed directly to functions.

```javascript
// Function with rest parameter to calculate cart price
function calculateCartPrice(...items){
    return items;
}

// Passing an object to a function
const user = {
    username: "hitesh",
    price: 199
};

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);
handleObject({
    username: "sam",
    price: 399
});
```

## Practical Examples

Functions can be used to extract specific values from arrays or objects.

```javascript
// Function to return the second value from an array
function returnSecondValue(getArray){
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000])); // Output: 400
```
