const accountId = 144553 // cannot be changes later
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur" // not the preffered way to use variables like this
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope

var is having global scope whereas let is having local scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState]) // when you want to print the value of multiple variables at once

console.table([accountPassword, accountCity]);