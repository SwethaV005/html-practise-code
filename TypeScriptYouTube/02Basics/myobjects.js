const User = {
    name: "Swetha",
    email: "swetha@co.dev",
    isActive: true
};
// we can pass the object as an argument to a function and we can also specify the type of the object in the function parameter
//function createUser({name: string, isPaid: boolean}){}
//createUser({name:"Swetha", isPaid:false})
// syntax: function functionName(parameter: type): {returnType}{logic}
//function functionname ():{}{}
function createCourse() {
    return { name: "ReactJS", price: 399 };
}
//not all users have credit card details so we can make it optional by using ? after the property name
let myUser = { _id: "1234", name: "Swe", email: "s@.com", isActive: false };
myUser.email = "swe@.comm";
export {};
