console.log("promises");

const promise1 = new Promise(function(resolve,reject){
    console.log("promise1 executed");
    resolve();
})

promise1.then(()=>{
    console.log("promise1 resolved");
})