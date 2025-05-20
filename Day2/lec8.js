// console.log(2>3);//false
// console.log("2" > 2);//false 
// console.log("2" == 2);//true -> js uses coercion rules to convert string to number then compare

// console.log("002" == 2);//true
// console.log("007"== 7);//true 

console.log(null > 0);//false here null is converted to number i.e;0
console.log(null == 0);//false -> equality works differently and null is only loosely equal to undefined
console.log(null==undefined);//true
console.log(null >= 0);//true

console.log(undefined == 0);//false
console.log(undefined > 0);//false
console.log(undefined < 0);//false

//strict check even data type is checked 

console.log("2"===2);//false
