function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) {
    //logic goes here
}
//default value in arguments
let loginUser = (name, email, isPaid = false) => { };
//to return more than one type
// function getValue(myVal: number) {
//     if (myVal > 5) {
//         return true;
//     }
//     return "200 OK";
// }

addTwo(5);
getUpper("hello");
signUpUser("John", "john@example.com", true);
loginUser("John", "john@example.com");
export {};
