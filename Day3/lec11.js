const name="arush";
const cnt=51;
//console.log("My Name is : "+name+" and roll no : "+cnt);
//better way 
//console.log(`My Name is : ${name} and my roll no : ${cnt}`);


const s=new String('Arush-kumar-51');
// exploring string functions 

// console.log(s.length);//property ->14
// console.log(s.toUpperCase());//converts to upper case ->ARUSH-KUMAR-51
// console.log(s.charAt(2));//u
// console.log(s.indexOf('u'));//prints index of first occurence
// console.log(s.substring(0,4));//0-include 4-exclude ->Arus
// console.log(s.slice(-8,-3));//same as substring but accepts negative value
                            //excludes includes -> kumar

const t="   arush   ";
console.log(t.trim());//removes whitespaces from start and end

const url="https://www.arush%20kumar.com";
console.log(url.replace('%20','-'));//https://www.arush-kumar.com
console.log(url.includes('arush'));//returns true if that substring is present
console.log(s.split('-'));//creates an array based on seperator
                        //[ 'Arush', 'kumar', '51' ]