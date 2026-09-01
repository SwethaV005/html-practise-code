const score:Array <number>=[]
const names:Array<string>=[]

function identiyOne(val : boolean| number):boolean| number{
    return val;
}

function identityTwo(val:any):any{
    return val
}

function identityThree<Type>(val:Type):Type{
    return   val
}
//shortcut
function identityfour<T>(val:T):T{
    return   val
}

interface Bottle{
    brand:string,
    type:number
}

const myBottle: Bottle = { brand: "Hydro Flask", type: 1 };

const result = identityfour<Bottle>(myBottle);

function getSearchProducts<T>(products:T[]):T{
    return products[3];
    //return 3 is not valid 
}
//here it locks the type as array but we are returning only one outptut

// coomma is too menton this is not JSX syntax rather its is syntax for generic
const  getMoreSearchProducts =<T,>(products:T[]):T=>{
    const index=4;
    return products[index]
}