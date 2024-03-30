# JavaScript Conversion Operations

## Type Conversion

- `Number(value)`: Converts a value to a number. For example:

    ```javascript
    let score = "hitesh";
    // console.log(typeof score);
    // console.log(typeof(score));

    let valueInNumber = Number(score);
    // console.log(typeof valueInNumber); 
    // console.log(valueInNumber);
    ```

    while conversions

    `"33"` becomes `33`, `"33abc"` gives `NaN`, and `true` and `false` become `1` and `0`.

- `Boolean(value)`: Converts a value to a boolean. For example:

    ```javascript
    let isLoggedIn = "hitesh";
    let booleanIsLoggedIn = Boolean(isLoggedIn);
    // console.log(booleanIsLoggedIn);
    ```

    `1` becomes `true`, `0` becomes `false`, `""` becomes `false`, and any non-empty string becomes `true`.

- `String(value)`: Converts a value to a string. For example:

    ```javascript
    let someNumber = 33;
    let stringNumber = String(someNumber);
    // console.log(stringNumber);
    // console.log(typeof stringNumber);
    ```

## Arithmetic Operations

- Addition (`+`): `2 + 2`
- Subtraction (`-`): `2 - 2`
- Multiplication (`*`): `2 * 2`
- Exponentiation (`**`): `2 ** 3`
- Division (`/`): `2 / 3`
- Modulus (`%`): `2 % 3`

## String Concatenation

In JavaScript, the `+` operator is also used for string concatenation:

```javascript
let str1 = "hello";
let str2 = " hitesh";

let str3 = str1 + str2;
// console.log(str3);

console.log("1" + 2); // number + string => string in all cases
console.log("this is the console and log of 1 + 2");
console.log(1 + "2"); 
console.log("1" + 2 + 2);
console.log(1 + 2 + "2"); // 3 + "2" => "32"