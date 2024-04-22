# Understanding Promises in JavaScript

Promises are a modern way to handle asynchronous operations in JavaScript, providing a cleaner and more structured approach compared to callbacks. They represent operations that will be completed (resolved) or not (rejected) in the future.

## Creating a Promise

```javascript
// Creating a promise       
const promiseOne = new Promise(function(resolve, reject){
    // Do an async task (e.g., DB calls, cryptography, network)
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    }, 1000);
});
```

## Consuming a Promise

```javascript
// Consuming the promise
promiseOne.then(function(){
    console.log("Promise consumed");
});
```

## Another Way of Creating and Consuming Promises

```javascript
// Another way of creating and consuming promises
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(function(){
    console.log("Async 2 resolved");
});
```

## Resolving and Handling Promise Results

```javascript
// Resolving and handling promise results
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"});
    }, 1000);
});

promiseThree.then(function(user){
    console.log(user);
});
```

## Handling Rejections and Errors with `catch`

```javascript
// Handling rejections and errors with catch
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({username: "hitesh", password: "123"});
        } else {
            reject('ERROR: Something went wrong');
        }
    }, 1000);
});

promiseFour
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((username) => {
        console.log(username);
    })
    .catch(function(error){
        console.log(error);
    })
    .finally(() => console.log("The promise is either resolved or rejected"));
```

## Using Async/Await Syntax for Promises

```javascript
// Using async/await syntax for promises
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({username: "javascript", password: "123"});
        } else {
            reject('ERROR: JS went wrong');
        }
    }, 1000);
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();
```

## Using `fetch` with Async/Await

```javascript
// Using fetch with async/await
async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
}

getAllUsers();
```

## Chaining Promises and Error Handling

```javascript
// Chaining promises and error handling
fetch('https://api.github.com/users/hiteshchoudhary')
    .then((response) => {
        return response.json(); // Data passed to the next "then"
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error));
```

## Using `Promise.all` for Multiple Promises

```javascript
// Using Promise.all for multiple promises
const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("Promise One resolved");
    }, 1500);
});

const promiseTwo = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("Promise Two resolved");
    }, 1000);
});

Promise.all([promiseOne, promiseTwo])
    .then((results) => {
        console.log(results); // Array of resolved values
    })
    .catch((error) => {
        console.log("Error:", error);
    });
```

This README serves as a comprehensive reference for understanding and using promises effectively in JavaScript.

