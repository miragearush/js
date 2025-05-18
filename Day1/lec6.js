//conversions

let score="33";
let newScore=Number(33);

//console.log(typeof(newScore));

let booleanCheck=false;
//console.log(Number(booleanCheck));
/*
    "33" -> 33
    "33abc" -> Nan [ Not a Number ]
    true -> 1; false -> 0
*/

let isTrue=" ";
let booleanIsTrue=Boolean(isTrue);
//console.log(booleanIsTrue);
//console.log(typeof booleanIsTrue);
/* 
    1 or any other number -> true
    0 -> false
    "arush" -> true
    "" -> false
    " " -> true
*/

let someNumber=45;
let stringNumber=String(someNumber);
console.log(typeof stringNumber);
console.log(stringNumber);
