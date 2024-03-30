# Data Types in JavaScript

JavaScript is a dynamically typed language, meaning that the data type of a variable is determined at runtime, not at compile time. This eliminates the need to explicitly define the data type of a variable. JavaScript data types are classified into two categories based on how they are stored in memory and accessed:

1. **Primitive Data Types**
2. **Non-Primitive Data Types / Reference Data Types**

## Primitive Data Types

Primitive data types store data directly in memory locations. They are always called by value and stored in the stack memory. Changes in data will not affect the original data (call by value).

### Types:

- **String**: Represents textual data.
- **Number**: Represents numeric data.
- **Boolean**: Represents true or false values.
- **null**: Represents the intentional absence of any object value.
- **undefined**: Represents a variable that has been declared but not assigned a value.
- **Symbol**: Represents a unique and immutable identifier.
- **BigInt**: Represents integers with arbitrary precision.

### Examples:

```javascript
const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;
const id = Symbol('123');
const anotherId = Symbol('123');
```

## Reference (Non-Primitive) Data Types

Reference data types store data indirectly by storing the memory location of the data in the variable. They are always called by reference and stored in the heap memory. Changes in data will affect the original data (call by reference).

### Types:

- **Array**: Represents a collection of elements.
- **Objects**: Represents a collection of key-value pairs.
- **Functions**: Represents reusable blocks of code.

### Examples:

```javascript
const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
};
const myFunction = function(){
    console.log("Hello world");
};
```

## Typeof Operator results

| Type          | Result     |
|---------------|------------|
| Undefined     | "undefined"|
| Null          | "object"   |
| Boolean       | "boolean"  |
| Number        | "number"   |
| String        | "string"   |
| Symbol        | "symbol"   |
| BigInt        | "bigint"   |
| Object        | "object"   |
| function      | "function" |
! array         | "object"   |

## Data Type Definitions:

- **Primitive Data Type**: Data stored directly in memory, called by value, and stored in the stack memory.
- **Reference Data Type**: Data stored indirectly by storing memory location, called by reference, and stored in the heap memory.

## Stack and Heap Example

```javascript
let myYoutubename = "hiteshchoudharydotcom";
let anothername = myYoutubename;
anothername = "chaiaurcode"; // original data remains unchanged (myYoutubename) as anothername is just a copy.

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
};
let userTwo = userOne;
userTwo.email = "hitesh@google.com"; // original data changes (userOne.email) as userTwo points to userOne.
```