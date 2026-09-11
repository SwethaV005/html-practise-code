//with anonymous arrow function inside:
(()=>{
    //do stuff
})();

// with function keyword
(function(){
    //do stuff
})();

//with function name(for recursion)
(function IIFE(){
    num++;
    console.log(num);
    return num!==5? IIFE(num): console.log('finished');

})(num==0);

//Reason 1) Does not pollute the global object namespace
//global

const x='whatever';
const helloworld=()=> "Hello World";

//isolate declaration within the function

(()=>{
    const x="iife whatver";
    const helloworld=()=> "Hello World from IIFE";
    console.log(x);
    console.log(helloworld());
})();
console.log(x);
console.log(helloworld());

//Reason 2) Private variables and methods

const 


