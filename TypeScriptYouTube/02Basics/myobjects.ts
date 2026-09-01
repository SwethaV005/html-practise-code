const User={
    name:"Swetha",
    email:"swetha@co.dev",
    isActive:true
}
// we can pass the object as an argument to a function and we can also specify the type of the object in the function parameter
//function createUser({name: string, isPaid: boolean}){}

//createUser({name:"Swetha", isPaid:false})
// syntax: function functionName(parameter: type): {returnType}{logic}
//function functionname ():{}{}
function createCourse(): {name: string, price: number}{
    return {name:"ReactJS", price:399}
}


// type User = {
//     name: string,
//     email: string,
//     isActive: boolean
// }   
// function createUser(user: User): User{
//     return {name:"Swetha", email:"swetha@co.dev", isActive:true}
// }

type User ={
    readonly _id: string,
    name: string,
    email: string
    isActive: boolean
    creditcardDetails?: number
}
//not all users have credit card details so we can make it optional by using ? after the property name
let myUser: User={_id:"1234",name:"Swe", email:"s@.com",isActive:false}

myUser.email="swe@.comm"
//myUser._id="12345"// we cannot change the value of readonly property
type cardNumber={
    cardNumber:string

} 

type cardDate={
    cardDate:string

} 

type cardDetails = cardNumber & cardDate & {
    cvv: number;
}



export{}