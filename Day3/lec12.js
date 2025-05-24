//  const score=51;
//  console.log(score);

//  const num=new Number(100);
//  console.log(num);
//  console.log(num.toString());//now can be used as string and its functions
//  console.log(num.toFixed(2));//float value upto two decimal points

// const temp=132.8243;
// console.log(temp.toPrecision(3));//133
// console.log(temp.toPrecision(4));//133.8

// const hundreds=1000000;
// console.log(hundreds.toLocaleString());//1,000,000 by default us standards
// console.log(hundreds.toLocaleString('en-IN'));//10,00,000


//------------Maths-----------------

 console.log(Math.abs(-4));//4
 console.log(Math.round(4.5));//5
 console.log(Math.ceil(4.2));//5
 console.log(Math.floor(4.2));//4
 console.log(Math.min(5,2,3,1,6));//1
 console.log(Math.max(4,2,56,62,3));//62

 console.log(Math.random());//values between 0 to 1
 console.log((Math.random()*10)+1);//1 to 9

 const min=10;
 const max=20;

 console.log(Math.floor(Math.random() * (max-min+1))+min);//value betwen 10 to 20