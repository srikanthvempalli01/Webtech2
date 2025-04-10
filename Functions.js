function addTwoNumbers(x,y)
{
    return (x+y);
}
console.log(addTwoNumbers(2,3));

//anonymous functions
let multiply=function(k,m)
{
    return k*m;
}
let result=multiply(2,4);
console.log(result);

//arrow functions

let addition=(a,b)=>
{
    return a+b;
}
console.log(addition(43,23));

//self invoking functions

(function(l,m){
    console.log(l+m);
}(6,3));

//call back functions
function myfunction()
{
    console.log("srikanth");
}
setTimeout(() => {
    myfunction();
}, 2000);


