

# JavaScript Arrays

Arrays in JavaScript are __dynamic data structures__ that allow you to store multiple elements.

## Array Basics

Arrays are declared using square brackets `[]` and can contain elements of any data type.

```javascript
const myArr = [0, 1, 2, 3, 4, 5];
const myHeroes = ["shaktiman", "naagraj"];
```

### Accessing Elements

Elements in an array are accessed using zero-based indexing.

```javascript
console.log(myArr[1]); // Output: 1
```

### Array Creation using new operator


Avoid using `new Array()` for creating arrays with a single element because if u want to create array of a single element -> it will create an array of that length __not the element__ with values undefined.

```javascript
const myArr2 = new Array(1, 2, 3, 4);
```

## Array Methods

JavaScript arrays come with several built-in methods to manipulate and access elements efficiently.

### Adding and Removing Elements

- `push`: Add elements to the end of the array.
- `pop`: Remove the last element from the array.
- `unshift`: Add elements to the beginning of the array.
- `shift`: Remove the first element from the array.

```javascript
myArr.push(6);
myArr.push(7);
myArr.pop();
myArr.unshift(9);
myArr.shift();
```

### Searching and Manipulating

- `includes`: Check if an element exists in the array.
- `indexOf`: Get the index of an element in the array.
- `join`: Join array elements into a string.
- `slice`: Create a shallow copy of a portion of the array.
- `splice`: Remove elements from the array and optionally replace them.

```javascript
console.log(myArr.includes(9)); // Output: true
console.log(myArr.indexOf(3)); // Output: 2
// initial array: [0, 1, 2, 3, 4, 5]
const newArr = myArr.join(); // Output: "0,1,2,3,4,5"
```

### Important Differences

#### `slice` vs `splice`

- `slice`: Returns a shallow copy of a portion of the array without modifying the original array.
- `splice`: Removes elements from the array and returns the removed elements, modifying the original array.

```javascript
const slicedArray = myArr.slice(1, 3); 
const removedElements = myArr.splice(1, 3);
```
