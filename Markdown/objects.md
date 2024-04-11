# JavaScript Objects

In JavaScript, objects are key-value pairs where keys can be strings or symbols.

## Object Basics

Objects can be created using object literals `{}` or constructors `new Object()`, but it creates singleton instances which we will cover later on, so we will focus on object literals.

objects are nothing but key-value pairs where key can be a string or a symbol and value can be any datatype.

```javascript
// symbol datatype
const mySym = Symbol("key1");

// creating an object
// format => {key: value} and key can be a string or a symbol
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};
```

### Accessing Object Properties

Properties of an object can be accessed using dot `.` notation or bracket `[]` notation.

__when to use dot and bracket notation?__ -> if the key is a single word and doesn't contain whitespace or any other datatype like symbol then use dot notation, otherwise use bracket notation.

```javascript
console.log(JsUser.email); // Output: "hitesh@google.com"
console.log(JsUser["full name"]); // Output: "Hitesh Choudhary"
console.log(JsUser[mySym]); // Output: "mykey1"
console.log(JsUser.mySym); // Output: undefined
```

### Updating Object Properties

Object properties can be updated by directly assigning new values.

```javascript
JsUser.email = "hitesh@chatgpt.com";
console.log(JsUser);
```

### Handling Symbols and Spaces in Object Keys

Symbols can be used as unique keys in objects, and strings with spaces must be accessed using bracket notation.

```javascript
console.log(JsUser[mySym]); // Accessing value by symbol key

// Updating value with space in the key using bracket notation
JsUser["full name"] = "Hitesh Kumar Choudhary";
console.log(JsUser);
```

### Adding Functions to Objects

Functions can be added as properties to objects.

```javascript
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    age: 18,
    location: "Jaipur",
    email: "ujjwal@google.com"
};

// Adding a function to object
JsUser.greeting = function() {
    console.log("Hello JS user");
};

JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
};
console.log(JsUser); // => this functions will get added to the object
JsUser.greeting(); // Output: "Hello JS user"
JsUser.greetingTwo(); // Output: "Hello JS user, Hitesh"
```

## Nested Objects

Objects can contain nested objects for more complex data structures.

```javascript
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
};
// Accessing nested values
console.log(regularUser);
console.log(regularUser.fullname.userfullname.firstname); // Accessing nested values
```

## Combining Objects

Objects can be combined using `Object.assign()` or the spread operator `...`. Spread operator is a more modern way of combining objects and it is used in most of the cases.

```javascript
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};

const obj3 = Object.assign({}, obj1, obj2);
const obj4 = {...obj1, ...obj2};

console.log(obj3);
console.log(obj4);
```

## Array of Objects

Arrays can store multiple objects, allowing easy access to object properties.

```javascript
const users = [
    { id: 1, email: "h@gmail.com" },
    { id: 2, email: "j@gmail.com" },
    { id: 3, email: "k@gmail.com" }
];

console.log(users[1].email); // Accessing values in an array of objects
// how his code is working -> users[1] will give the object at index 1 and then we are accessing the email property of that object.
```

## Object Methods

JavaScript provides built-in methods for working with objects.

```javascript
const tinderUser = {
    name: "Hitesh",
    age: 18,
    location: "Jaipur",
    email: "ujjwal@google.com"
};
console.log(Object.keys(tinderUser)); // Get keys of the object in the format of an array
console.log(Object.values(tinderUser)); // Get values of the object in the format of an array
console.log(Object.entries(tinderUser)); // Get key-value pairs of the object in the format of an array
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // Check if an object contains a specific key
```

## Object Destructuring

Destructuring allows for extracting values from objects into variables. Mainly used when we are dealing with API responses.

```javascript
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
};
// syntax -> const {key1, key2, key3} = objectName;
// when we need to change the key name -> const {key1: newKeyName} = objectName;
const { courseInstructor: instructor } = course; // we have changed the key name from courseInstructor to instructor

console.log(instructor); // Using object destructuring
```

## JSON (JavaScript Object Notation)

JSON is a popular data format used for exchanging data between a server and a web application.

```json
{
    "name": "hitesh",
    "coursename": "js in hindi",
    "price": "free"
}
```
