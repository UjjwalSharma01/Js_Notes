/*

how to iterate arrays and maps using foreach operatiors
syntax: for of loop
for(const element of array) {
    console.log(element)
}
 for map, if you want to print keys and value seperately, you can use destructuring
for(const [key, value] of map) {
    console.log(key, value)
}
what are maps -> maps are key value pairs, where key can be any type of data type, its just like objects but easily iterable

 */


// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }