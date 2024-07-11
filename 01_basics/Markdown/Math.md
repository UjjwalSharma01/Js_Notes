## Properties of Math Object
1. Math.E => Euler's number
2. Math.PI => PI
3. Math.SQRT2 => Square root of 2
4. Math.SQRT1_2 => Square root of 1/2
5. Math.LN2 => Natural log of 2
6. Math.Abs => Absolute value -> returns the absolute value of a number ex -4 => 4
7. Math.ceil => rounds up the number to the nearest integer, ex - 4.2 => 5
8. Math.floor => rounds down the number to the nearest integer, ex - 4.9 => 5
9. Math.round => rounds the number to the nearest integer, ex - 4.6 => 5
10. Math.min => returns the minimum of the numbers passed as arguments
11. Math.max => returns the maximum of the numbers passed as arguments
12. Math.random => returns a random number between 0 and 1, ex - 0.123456
13. Math.pow => returns the value of a number raised to the power of another number
## Get a random number between certain 
Breakdown of `console.log(Math.floor(Math.random() * (max - min + 1)) + min)`

let the max = 20 and min = 10

1. Math.random() => will give a number between 0 and 1
2. Math.random() * (max - min + 1) => will give a number between 0 and 11
3. Math.floor(Math.random() * (max - min + 1)) => will give a number between 0 and 10
4. Math.floor(Math.random() * (max - min + 1)) + min => will give a number between 10 and 20

example
1. Math.random() => 0.123456
2. Math.random() * (max - min + 1) => 0.123456 * 11 => 1.358016
3. Math.floor(Math.random() * (max - min + 1)) => 1
4. Math.floor(Math.random() * (max - min + 1)) + min => 1 + 10 => 11

```javascript
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// 11 <= random number <= 20
```
