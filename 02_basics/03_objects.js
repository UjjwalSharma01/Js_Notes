// singleton => when declared using consturctor
// Object.create // will cover this later

// object literals


// symbol datatype
const mySym = Symbol("key1")

// creating an object
// format => {key: value} and key can be a string or a symbol
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    // use of symbol as a key ref this syntax
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// accessing the elements of the object
// by using "." operator
console.log(JsUser.email)
//by using "[]" operator
console.log(JsUser["email"])
console.log(JsUser["full name"]) // you cannot accesss this using . operator because key is a string
// to print the symbol key
console.log(JsUser[mySym])




// updating the object

JsUser.email = "hitesh@chatgpt.com"
// to avoid any updates in the object use Object.freeze
// Object.freeze(JsUser) 
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser); // to print the entire object



// adding function to the object

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
//console.log(JsUser.greeting); => this will print function anonymous
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
console.log(JsUser);