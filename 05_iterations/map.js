// very Important



const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})


// chaining the map and filter functions
const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);

/*

how to enter data in the map and how to declare them
how to declare map
const map = new Map() // empty map
entering data in map
map.set('key', 'value')
map.set('key', 'value')
 */