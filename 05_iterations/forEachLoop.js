const coding = ["js", "ruby", "java", "python", "cpp"]


// since the passed function is a callbacl function toh uska naam nahi hota

// variation 1
coding.forEach( function (val){
    // console.log(val);
} )


// variation two-> using arrow function
coding.forEach( (item) => {
    // console.log(item);
} )


// passing a function in forEach
function printMe(item){
    // console.log(item);
}

coding.forEach(printMe)




// the values it contains
coding.forEach( (item, index, arr)=> {
    // console.log(item, index, arr);
} )


// when you are given an array of objects
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    // console.log(item.languageName);
} )


// ************************************************deep dive into forEach ***********************************************************************

const coding1 = ["js", "ruby", "java", "python", "cpp"]


// coding1.forEach ((value)=> {
//     // console.log(value);
// });

//for each doesn't return anything

const values = coding1.forEach( (item) => {
    // console.log(item);
    return item
} )

// console.log(values); // undefined-> why? because forEach doesn't return anything, it just iterates over the array and does the operation






const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// returns the values unlike foreach, returns the array
const newNums = myNums.filter( (num) => {
    return num > 4
} )
// console.log(newNums);



// if you want to do the same thing using forEach
// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);


// practice filters here

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


//   to get all the books with genre as history
  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
//   console.log(userBooks);