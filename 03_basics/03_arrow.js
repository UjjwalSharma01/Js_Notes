// Arrow functions
/*
This keyword in javascript

this refers to the current context in javascript and context is nothing but the value of a variable or function at that point of time

and in the node environment, this refers to a empty object but in the browser, this refers to the window object 

this keyword can only be used with objects and not with functions but works with arrow functions and give ans as empty object

*/

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()


// Wont work
// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }


//arrow functions
const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// implicit return, important in react

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

// way to return object in arrow function

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()


