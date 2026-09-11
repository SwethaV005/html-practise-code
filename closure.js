// A closure is a function having access to the parent scope, even after the parent function has closed
//  In JavaScript, closures are created every time a function is created, at function creation time.
//global scope
let x=1;

const parentFunction = ()=>{
    let myvalue=2;
    console.log(x);
    console.log(myvalue);

    const childFunction =()=>{
        console.log(x+=5);
        console.log(myvalue+=5);

    }
    return childFunction;
}
const result = parentFunction();
console.log(result);
result();
result();
result();
//closure is created when a function is defined not when it is executed.
// x is a global scope
// myval is local scope of parentFunction .
//child function remembers these values even after 
// the parent function has executed and returned.



//A closure is created when a function is defined inside another function, giving the inner function 
//access to the outer function’s variables even after the outer function has finished running.