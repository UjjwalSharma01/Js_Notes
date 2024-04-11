// array

/*

arrays 

arrays are resizable in JavaScript, and elements can be added and removed.

values are accessed using the index, which starts from 0.
copy operations always create shallow copies which means that the original array is effected if the copied array is changed.

*/

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4) // not recommended to use if u want to create array of a single element -> it will create an array of that length not the element with values undefined
// console.log(myArr[1]);

// Array methods
/*
Methods are as follows:
1. push => adds an element to the end of the array
2. pop => removes an element from the end of the array
3. unshift => adds an element to the beginning of the array
4. shift => removes an element from the beginning of the array
5. includes => checks if an element is present in the array, returns a boolean
6. indexOf => returns the index of the element, if not present returns -1
7. join => joins the elements of the array, returns a string
8. slice => returns a shallow copy of the array, means original array will be effected if the copied array is changed
9. splice => removes elements from the array and returns the removed elements

*/

myArr.push(6)
myArr.push(7)
myArr.pop()
console.log(myArr);

myArr.unshift(9)
myArr.shift() // removes the first element

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join()

console.log(myArr);
console.log( newArr);


// slice, splice => very important in interview

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

/*
Difference between slice and splice
very very very importantant
1. slice => returns a shallow copy of the array, means original array will be effected if the copied array is changed, it manipulates the original array
2. splice => removes elements from the array and returns the removed elements

*/