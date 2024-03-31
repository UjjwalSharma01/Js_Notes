const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length); // it will get converted to string if you want some external properties
console.log(balance.toFixed(1)); // it will round off the number to 1 decimal place but this method will return string rather than number

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4)); // it will format the number to a total of 4 significant digits and returns a string

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // it is mainly used for formatting purposes => 10,00,000 and by default will provide formatting according to US standards but we can pass the country code as well to get the desired formatting
// for example en-IN for India

// refer to MDN docs


// functions inside number 
/*
1. Epsilon
2. MAX_SAFE_INTEGER => 2^53 - 1 -> means the maximum number that can be represented in JS
3. MIN_SAFE_INTEGER => -2^53 + 1 -> means the minimum number that can be represented in JS
4. POSITIVE_INFINITY
5. NEGATIVE_INFINITY
6. NaN

*/



// +++++++++++++ Maths +++++++++++++++++++++++++++++

// this librari comes by default in JS

/*
Properties
1. Math.E => Euler's number
2. Math.PI => PI
3. Math.SQRT2 => Square root of 2
4. Math.SQRT1_2 => Square root of 1/2
5. Math.LN2 => Natural log of 2
6. Math.Abs => Absolute value -> returns the absolute value of a number ex -4 => 4
7. Math.ceil => rounds up the number to the nearest integer, ex - 4.2 => 5
8. Math.floor => rounds down the number to the nearest integer, ex - 4.9 => 5
9. Math.round => rounds the number to the nearest integer, ex - 4.6 => 5
10.Math.min => returns the minimum of the numbers passed as arguments
11.Math.max => returns the maximum of the numbers passed as arguments
12.Math.random => returns a random number between 0 and 1, ex - 0.123456
13.Math.pow => returns the value of a number raised to the power of another number
*/

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1); // will give a random number between 1 and 10-> why+1? , since value might be 0.03 and we want to get a number between 1 and 10 so we add 1 to it
console.log(Math.floor(Math.random()*10) + 1);


// if i want values between 10 and 20
const min = 10
const max = 20
// Remember this formula
console.log(Math.floor(Math.random() * (max - min + 1)) + min) // we add min because otherwise it will come in the range of 0 to 10 so we add min to it
/*
Breakdown of console.log(Math.floor(Math.random() * (max - min + 1)) + min)
1. Math.random() => will give a number between 0 and 1
2. Math.random() * (max - min + 1) => will give a number between 0 and 11
3. Math.floor(Math.random() * (max - min + 1)) => will give a number between 0 and 10
4. Math.floor(Math.random() * (max - min + 1)) + min => will give a number between 10 and 20

example
1. Math.random() => 0.123456
2. Math.random() * (max - min + 1) => 0.123456 * 11 => 1.358016
3. Math.floor(Math.random() * (max - min + 1)) => 1
4. Math.floor(Math.random() * (max - min + 1)) + min => 1 + 10 => 11

*/