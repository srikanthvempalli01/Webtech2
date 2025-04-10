let a=30;
let b=30;
let c=a+b;
console.log(c);

let x;
console.log(x); //undefined value is not assign

x=20;                
x=30;               //reinitialization is possible when i use let keyword but same scope is not possible
console.log(x);

var k=20;
console.log(k);   //reinitialization is possible when i use var keyword
k=30;  
console.log(k);

const z=20;
console.log(z);
// z=40;           // reinitialization is not possible when i use const keyword
// console.log(z);

var s=40;
var s=50;        //same scope for let
console.log(s);

// let h=40;
// let h=50;        //same scope for let is not possible
// console.log(s);

let id=20;
console.log(typeof id);

var name="srikanth";
console.log(typeof name);

var condition=true;
console.log(typeof condition)

var phoneNumber=null;
console.log(typeof phoneNumber)

var address;
console.log(typeof address);
