

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

## Some more experients with arrays

```javascript
const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];
```

## Using `push` and `concat` to entire array

```javascript
// Using push to add an array as a single element
marvel_heros.push(dc_heros); // ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]
console.log(marvel_heros[3][1]); // Output: "flash"

// Using concat to combine arrays without modifying the original array
const allHeros = marvel_heros.concat(dc_heros); // it will comhine both the arrays and will return the new array
console.log(allHeros);
```

## Spread Operator (`...`)

```javascript
// Using spread operator to merge arrays into a new array
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);
```

## Nested Arrays and Flattening

```javascript
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// Flattening nested arrays using flat method
const real_another_array = another_array.flat(Infinity); // format of code => array.flat(depth)
console.log(real_another_array);
```

## Array Methods and Utilities

### Checking Array Type and Conversion

```javascript
// Checking if a variable is an array
console.log(Array.isArray("Hitesh")); // false

// Converting a string into an array of characters
console.log(Array.from("Hitesh")); // ["H", "i", "t", "e", "s", "h"]

// Array.from with non-iterable object (returns an empty array)
console.log(Array.from({ name: "hitesh" }));
```

### Creating Arrays

```javascript
// Creating an array using Array.of
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // [100, 200, 300]
```

## Notes and Observations

- When adding an array into another array using `push`, the entire array is treated as a single element.
- Use `concat` or the spread operator (`...`) to merge arrays into a new array without modifying the originals.
- The `flat` method is useful for flattening nested arrays to a desired depth or completely with `Infinity`.
- `Array.from` can convert strings and other iterable objects into arrays.
- `Array.of` is used to create arrays from individual values.
