# Arrays and objects
## Basic definition of arrays
arrays are resizable in JavaScript, and elements can be added and removed.
values are accessed using the index, which starts from 0.

copy operations always create shallow copies which means that the original array is effected if the copied array is changed.

```javascript
let arr = [1, 2, 3, 4, 5];
for(i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
```
# Methods in arrays
Methods are as follows:
1. push -> adds an element to the end of the array
2. pop -> removes an element from the end of the array
3. unshift -> adds an element to the beginning of the array
4. shift -> removes an element from the beginning of the array
5. includes -> checks if an element is present in the array, returns a boolean
6. indexOf -> returns the index of the element, if not present returns -1
7. join -> joins the elements of the array, returns a string
8. slice -> returns a shallow copy of the array, means original array will be effected if the copied array is changed
9. splice -> removes elements from the array and returns the removed elements

# Very very very Important
## Slice and Splice in javascript
Difference between slice and splice
very very very important
1. slice => returns a shallow copy of the array, means original array will not be affected if the copied array is changed.
2. splice => removes elements from the array and returns the removed elements, it manipulates the original array.

```javascript  
let arr = [1, 2, 3, 4, 5];
let arr2 = arr.slice(0, 3);
console.log(arr2); // [1, 2, 3]
console.log(arr); // [1, 2, 3, 4, 5]
```

```javascript
let arr = [1, 2, 3, 4, 5];
let arr2 = arr.splice(0, 3);
console.log(arr2); // [1, 2, 3]
console.log(arr); // [4, 5]
```
## Concatenation of arrays

### Spread Operator
Spread operator is used to copy the elements of an array or object into another array or object.

ek kaach ka glass liya drop krdia it will spread, this is mostly used in react and in general in JS

```javascript
let arr = [1, 2, 3, 4, 5];
let arr2  = [6, 7, 8, 9, 10];
let arr3 = [...arr, ...arr2];
// output -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

### Concat method
Concat method is used to concatenate two arrays and return a new array.

```javascript
let arr = [1, 2, 3, 4, 5];
let arr2  = [6, 7, 8, 9, 10];
let arr3 = arr.concat(arr2);
// output -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```
 ### Flat Method
 it will flatten the array,means it will remove the nested array, returns a new array and does not change the original array
     
```javascript
let arr = [1, 2, 3, [4, 5]];
let arr2 = arr.flat();
// output -> [1, 2, 3, 4, 5]
```

## Conversion to array

### Array.from Method
Array.from method is used to convert an array-like object or iterable object into an array.

```javascript
let str = 'hello';
let arr = Array.from(str);
// output -> ['h', 'e', 'l', 'l', 'o']
```

# asked in interviews
```javascript
console.log(Array.from({name: "hitesh"})) // [] => empty array as it is not an iterable object, it should be an array or a string or a set or a map, you need explicitly mention ki keys se array banana hai ya values se
```

# Objects
## Definition of objects
Objects are key-value pairs in JavaScript, keys are always strings, and values can be of any type.
format -> {key: value} and key can be a string or a symbol
    
```javascript
let obj = {
    name: "ujjwal Sharma",
    age: 19,
    isStudent: true
}
```
## Acessing values in objects
values can be accessed using the dot notation or the bracket notation.

```javascript
let obj = {
    name: "ujjwal",
    "Full Name": "ujjwal Sharma",
    age: 19,
    isStudent: true
}
console.log(obj.name); // ujjwal 
console.log(obj['age']); // 19
console.log(obj['Full Name']); // this cannot be accessed using the dot notation because the key is the string
console.log(obj[name]); // this will give an error because name is not defined, it should be like
console.log(obj['name']); // ujjwal
```


## Updating the Objects
values can be updated using the dot notation or the bracket notation.

```javascript
let obj = {
    name: "ujjwal",
    age: 19,
    isStudent: true
}
obj.age = 20;
obj['isStudent'] = false;
console.log(obj); // {name: "ujjwal", age: 20, isStudent: false}
```

### Avoiding updates
freeze method is used to avoid updates in the object, it makes the object or it's component immutable.

```javascript
let obj = {
    name: "ujjwal",
    age: 19,
    isStudent: true
}
Object.freeze(obj.name); // this will make the name immutable
```

### Adding functions to objects
functions can be added to objects as well.

```javascript
let obj = {
    name: "ujjwal",
    age: 19,
    isStudent: true,
    greet: function() {
        console.log("Hello");
    }
}
// adding a new function
obj.sayHello = function() {
    console.log("Hello");
}
obj.greet(); // Hello
obj.sayHello(); // Hello
```
### Deleting properties
properties can be deleted using the delete keyword.

```javascript
let obj = {
    name: "ujjwal",
    age: 19,
    isStudent: true
}
delete obj.age;
console.log(obj); // {name: "ujjwal", isStudent: true}
```
### Nested objects
objects can be nested inside objects.

```javascript
let obj = {
    name: "ujjwal",
    age: 19,
    isStudent: true,
    address: {
        city: "New Delhi",
        state: "Delhi"
    }
}
console.log(obj.address.city); // New Delhi
```
### Combining Objects
objects can be combined using the spread operator.

```javascript
let obj = {
    name: "ujjwal",
    age: 19,
    isStudent: true
}
let obj2 = {
    city: "New Delhi",
    state: "Delhi"
}
let obj3 = {...obj, ...obj2};
console.log(obj3); // {name: "ujjwal", age: 19, isStudent: true, city: "New Delhi", state: "Delhi"}
```
### Array of objects
objects can be stored in an array.

```javascript
let arr = [
    {
        name: "ujjwal",
        age: 19,
        isStudent: true
    },
    {
        name: "hitesh",
        age: 20,
        isStudent: false
    }
]
console.log(arr[0].name); // ujjwal
```
### Object.keys, Object.values, Object.entries
Object.keys, Object.values, Object.entries are used to get the keys, values, and key-value pairs of an object respectively.

```javascript
let obj = {
    name: "ujjwal",
    age: 19,
    isStudent: true
}
console.log(Object.keys(obj)); // ["name", "age", "isStudent"], will return an array of keys
console.log(Object.values(obj)); // ["ujjwal", 19, true], will return an array of values
console.log(Object.entries(obj)); // [["name", "ujjwal"], ["age", 19],["isStudent", true]], will return an array of key-value pairs
```

## Object Destructuring
Object destructuring is used to extract values from objects and store them in variables.

```javascript
let obj = {
    name: "ujjwal",
    age: 19,
    isStudent: true
}
let {name, age, isStudent} = obj;
console.log(name); // ujjwal
console.log(age); // 19
console.log(isStudent); // true
```
### Default values
default values can be provided in object destructuring.

```javascript
let obj = {
    name: "ujjwal",
    age: 19
}  
let {name, age, isStudent = true} = obj;
console.log(name); // ujjwal
console.log(age); // 19
console.log(isStudent); // true
```
if you want to use different key name then you can use like this

```javascript
let obj = {
    name: "ujjwal",
    age: 19
}
let {name: myName, age: myAge} = obj;
console.log(myName); // ujjwal
console.log(myAge); // 19
```