const name="arush";
let email="arush@mail.com";
var age=24; // instead use let 
password="mypass"; // this is also correct but don't use it

console.log(name);
console.log(email);
console.log(age);
console.log(password);

//name="monika";// this will lead to error since constant cannot be reassigned
/*
    difference b/w let and var is of scope i.e;
    let - scope is limited to { }
    var -visible everywhere
    for eg :
        let a=20;
        if(true)
        {
            let a=10;
            console.log(a); // prints 10
        }
        console.log(a);//prints 20 since inside if scope was limited to if's { }

*/

