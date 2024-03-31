const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // should be ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]] array ke andar array and second array is treated as a single element

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);
/* cancat will return the result in the new array */
const allHeros = marvel_heros.concat(dc_heros) // this will not change the original array
console.log(allHeros);


// spread operator => ek kaach ka glass liya drop krdia it will spread
// this is most used in react and in general in JS
const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]] // nested array

// flat method => it will flatten the array,means it will remove the nested array, returns a new array and does not change the original array
const real_another_array = another_array.flat(Infinity) // inifiity is used to remove all the nested arrays, othwerwise we can pass 1, 2, 3 in depth to remove the nested arrays
console.log(real_another_array);

// 
console.log(Array.isArray("Hitesh")) // false
console.log(Array.from("Hitesh")) // ["H", "i", "t", "e", "s", "h"] => converts the string into an array or any iterable object into an array

// asked in interviews
console.log(Array.from({name: "hitesh"})) // [] => empty array as it is not an iterable object, it should be an array or a string or a set or a map, you need explicitly mention ki keys se array banana hai ya values se

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [100, 200, 300] => it will create an array of the values passed to it