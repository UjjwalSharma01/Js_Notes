// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// nested objects
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
console.log(regularUser);

// accessing nested values

// console.log(regularUser.fullname.userfullname.firstname);



// combining objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } //=> will create the problem of nested objects
const obj3 = Object.assign({}, obj1, obj2)

//using spread operator
const objj4 = {...obj1, ...obj2}
// console.log(objj4);


// this is how you receive the data from the server
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// accesing values in array of objects
users[1].email // breakdown of the code => user[1] will give the object at index 1 and then email will give the email of that object
// console.log(tinderUser);






console.log(Object.keys(tinderUser)); //=> will return the keys of the object in an array, this is very very important in all projects to get the keys of the object
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // => will return the key value pairs in an array of arrays


// to avoid any errors in the code use hasOwnProperty
console.log(tinderUser.hasOwnProperty('isLoggedIn'));









// Destructuring of Objects
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor // => instead of this we can use destructuring to make the code more readable


// Syntax format => const {key1: newKey1, key2: newKey2} = objectName , if you want to use the different keyname
// Syntax format => const {key1, key2} = objectName , if you want to use the same keyname
const {courseInstructor: instructor} = course


console.log(instructor);


// JSON => JavaScript Object Notation, FORMAT OF JSON

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

