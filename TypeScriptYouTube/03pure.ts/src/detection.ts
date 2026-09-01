function detectType(val : number| string){
    if(typeof val === 'string'){
        return val.toLowerCase();
    }
    return val +3;
}

function provideId(id: string | null){
    if(!id){
        console.log('Please provide ID');
        return;
    }
    id.toLowerCase()
}


interface user_05{
  
    name: string;
    email: string;

}


interface Admin{
    name: string;
    email: string;
    isAdmin: boolean;
}

function isAdminAccount(account: user_05 | Admin){
    if('isAdmin' in account){//isAdmin is property of Admin interface, so if it exists in account, 
        //then account is of type Admin
        return account.isAdmin;
    }  
 }

function logvalue(x:Date | string){
    if(x instanceof Date){
        console.log(x.toUTCString());
    } else{
        console.log(x.toUpperCase());
    }
}

type Fish = {swim:()=>void};//method swim is defined in Fish type
type Bird = {fly:()=>void};//method fly is defined in Bird type


function isFish(pet: Fish | Bird){
    return (pet as Fish).swim !==undefined;}

function getFood(pet: Fish | Bird){
    if(isFish(pet)){
    
        pet
        return 'fish food';
    } else{
        pet
        return 'bird food';
    }
}

//it return only true or false it does not 
//return the type of pet, so we need to use type predicate to return the type of pet
function isFish_02(pet: Fish | Bird): pet is Fish{
    return (pet as Fish).swim !==undefined;
}



interface Circle{
    kind: 'circle';
    radius: number;
}

interface Square{
    kind:"square";
    side: number;
}

interface Rectangle{
    kind: "rectangle";
    length: number;
    width: number;
}


type Shape=Circle | Square | Rectangle;

// function getTrueShape(shape: Shape){
//     if(shape.kind === 'circle'){
//         return Math.PI * shape.radius ** 2;
//     }

//     return shape.side **2;
// }
//as you see in the above function, we are not handling the rectangle case, 

// we will get a compile time error, so we can use never type to handle that case
// we shuld always have default case in switch statement, so that if we forget to handle a case, we will get a compile time error
//else it will not throw a error you can know you forgot to handle a case

function getArea(shape: Shape){
    switch(shape.kind){
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'square':
            return shape.side ** 2;
        case 'rectangle':
            return shape.length * shape.width;
        default:
            const _default: never = shape;
            throw new Error(`Unhandled case: ${_default}`);
    }
}