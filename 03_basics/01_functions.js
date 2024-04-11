// JS Functions

// Defining a function
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
// calling or referencing a function
// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function divideTwoNumbers(number1, number2){
    return (number1/number2);
    // this is the unreachable code and anything written after return statement will not be executed
    console.log("This is after return statement");
}

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage1(username){
    return `${username} just logged in`
}

// console.log(loginUserMessage1()) => this will return undefined just logged in

function loginUserMessage(username){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}



// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))



// Giving default values to the function parameters
function loginUserMessage2(username = "Anonymous"){
    return `${username} just logged in`
}

// console.log(loginUserMessage2()) //=> Anonymous just logged in 











// Function with multiple parameters
// when the total number of parameters are not known, e.g. in a shopping cart
// we can use rest operator to get all the parameters in an array
// rest operator is always the last parameter in the function
function calculateCartPrice2(...num1){
    return num1; // this will return an array of all the parameters
}
console.log(calculateCartPrice2(200, 400, 500, 2000,9999));



// sometimes we need to pass some parameters before the rest operator => this is an interview question
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000)) //=> [500, 2000] => 200 and 400 are not included in the array




// Passing object in the function
const user = {
    username: "hitesh",
    price: 199
}


// you need to use "anyobject" as the parameter name to pass the object in the function
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)


// u can directly pass the object in the function
handleObject({
    username: "sam",
    price: 399
})






const myNewArray = [200, 400, 100, 600]


// you need to pass "getArray" as the parameter name to pass the array in the function
function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));