// learn and checkout other methods its very helpful in backend and frontend development, achhe se krna hai


const name = "ujjwal"
const repoCount = 50

// console.log(name + repoCount + " Value"); // should not use this way

// this way is known as template literals - in which we use placeholders where we want to use variables in string

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// another way to create string via object constructor
/*

why to use this way?
- to use string methods
- to use string properties
- to use string prototype
- to use string constructor


which method is preferred? using new method or using const name = ujjwal
- using const name = ujjwal is preferred because it is faster and more efficient but if you want to use string methods then you can use new method
*/
const gameName = new String('ujjwal-sh-com')

// console.log(gameName[0]); // since it is mapped as key value pair so we can access it via index
// console.log(gameName.__proto__); // it will show all the methods and properties of string

// use of string methods and properties

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

// slice method is similar to substring but it can take negative values
// use of slice? -> when you want to get the last few characters of the string
const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   ujjwal    "
console.log(newStringOne);
console.log(newStringOne.trim()); // it will remove the extra spaces from the string

const url = "https://ujjwal.com/ujjwal%20sharma"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));