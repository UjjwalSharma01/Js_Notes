//var c = 300 //=> its a global variable kahi bhi declare krlo rhega global hi
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);

// => scope in browser is different and in node is different, how? => 
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()


/*

Closure: when a function is enclosed or nested in a parent function, then the variables of the parent function are accessible to the child function, this is called closure in javascript

*/

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


//variables in javascript can even hold functions


// Hoisting can be done in functions but not in expressions and variables
console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)

// this is known as the expression function
const addTwo = function(num){
    return num + 2
}
