/*

for in loops always return the key of the object or array or map
if you want to print the value of the particular array or object you need to use the syntax
Array/Object[key]; 
it doesn't work for maps as maps are not iterable using for in loop

*/

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}


// wont work for maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
for (const key in map) {
    console.log(key, map[key]);
}