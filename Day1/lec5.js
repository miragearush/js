"use strict"; // treat all js code as newer version

//alert(3+3) // this works only in browser we are using node js

let name="arush" //string length same as of integer
let age=18 // range (-2^53) -1 to (2^53) +1 for larger values use BigInt
let isLoggedIn=true; //boolean true or false
/*
    null -> standalone value ; type : object ; null just means there is no value
    undefined -> type : undefined ; it just means the value has not been defined/assigned yet
    symbol ->unique

    object // more later 
*/

console.log(typeof undefined);//undefined
console.log(typeof null);//object

//Big Int : to store very large values

let x=13432n;//n specifies it is of type bigint
console.log(typeof x);

let y=BigInt(234232);
console.log(typeof y);
/*
    arithmetic operations b/w bigint and a numeric - not allowed
    no decimal
    no right shift // since no fixed length
    //there are more info to remember but not relevant at this point of time
*/