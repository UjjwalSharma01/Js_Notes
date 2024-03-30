
# Learning String Methods in JavaScript

In JavaScript, understanding different methods to manipulate strings is crucial for both backend and frontend development. 

### Using Template Literals

Template literals allow us to embed variables inside strings using placeholders. This is done by using backticks (`) instead of single or double quotes,also known as string interpolation.

placeholder - ``` ${variableName} ```, it is used to embed variables inside strings.


```javascript
const name = "ujjwal";
const repoCount = 50;
console.log(`Hello, my name is ${name} and my repo count is ${repoCount}.`);
```

dont use  `+` to concatenate strings as it is not efficient
```javascript
const name = "ujjwal"
const repoCount = 50

console.log(name + repoCount + " Value"); // should not use this way
```

### Creating Strings via Object Constructor

Although less efficient, creating strings via the object constructor provides access to additional string methods and properties.
when we create a string using new keyword it is created as an object and in a key value pair, which means we can access it via index.

```javascript
const gameName = new String('ujjwal-sh-com');
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
console.log(gameName[0]); // since it is mapped as key value pair so we can access it via index
console.log(gameName.__proto__); // it will show all the methods and properties of string
```

### String Manipulation Methods

JavaScript offers various methods for string manipulation:

- `substring(startIndex, endIndex)`: Extracts characters between two specified indices.
- `slice(startIndex, endIndex)`: Similar to `substring`, but allows negative indices, use of slice? -> when you want to get the last few characters of the string.
- `trim()`: Removes extra spaces from both ends of a string.
- `replace(oldValue, newValue)`: Replaces a specified value with another value in a string.
- `includes(searchString)`: Checks if a string contains the specified substring.
- `split(separator)`: Splits a string into an array of substrings based on a specified separator.

```javascript
const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "   ujjwal    ";
console.log(newStringOne.trim());

const url = "https://ujjwal.com/ujjwal%20sharma";
console.log(url.replace('%20', '-'));

console.log(url.includes('sundar'));
console.log(gameName.split('-'));

```
Homework
- [ ] Read about all the string methods in JavaScript using mdn docs.
- [ ] Practice using different string methods in your code.
- [ ] Create a string using the object constructor and access its properties and methods.

