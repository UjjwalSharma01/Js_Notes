// Immediately Invoked Function Expressions (IIFE)
// sometimes when we want to run a function immediately after it's created, we can use IIFE, example of usage would be you made a website and you want the database connection to be established as soon as the website is loaded, so you can use IIFE to establish the connection as soon as the website is loaded
// to reduce the global scope pollution, we can use IIFE
// global scope pollution => when we declare a variable in global scope, it can be accessed from anywhere in the code, this can lead to security issues

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // you need to add ";" at the end of IIFE, kyuki context invoke hogya h but function ko nahi pta ki context rokna kaha par hai

// () () => first is for definiton and second is for calling

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');

