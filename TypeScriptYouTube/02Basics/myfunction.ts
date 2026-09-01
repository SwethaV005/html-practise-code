function addTwo(num: number){
    return num + 2;
  }
function getUpper(val: string){
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean){
    //logic goes here
}
//default value in arguments
let loginUser=(name: string,email: string,isPaid: boolean=false)=>{}


const getHello = (s: string):string => {
    return " ";
}

const heros = ["thor", "spiderman", "ironman"];
heros.map(hero=>(`hero is ${hero}`))// it automatically configures the return type is string

function consoleError(errmsg: string): void{
    console.log(errmsg)
}   

function handleError(errmsg: string): never{
    throw new Error(errmsg)
}
addTwo(5);
getUpper("hello")
signUpUser("John", "john@example.com", true)
loginUser("John", "john@example.com")
export{}