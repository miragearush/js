//Data type summary
//how data is stored in memory and how it is accessed
//based on above criteria primitive and non-primitive

// Primitive - call by value
/*
    7 types: 
        String, Number, Boolean, null, undefined, Symbol (to make value unique more later...)
        BigInt

*/
//Symbol eg:
// const id=Symbol('123');
// const id2=Symbol('123');
// console.log(id===id2);

//Non-primitive or reference type 
/*
    Array,ObjectsFunctions
*/
//Array

const heros=["shatiman","naagraj","doga"];

//Object -> inside curyly braces in key-value pair
let myObj={
    name:"Arush",
    age:"24",
}
//Function 

const myFun=function(){
    console.log("Hello World");
}

//to know data type use typeof
console.log(typeof heros);//object
console.log(typeof myObj);//object
console.log(typeof myFun);//function : actually it's function object


// js is dynamically typed since type of variable is determined at runtime
//we don't need to declare type of variable explicitly