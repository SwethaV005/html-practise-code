let score: number |string = 33 
score=44
score="44"

type _user={
    name:string;
    id:number
}

type Admin ={
    username:string;
    id:number
}
//so swetha ca be user and admin also
let swetha :_user | Admin={
    name:"Swetha",
    id:334
}

swetha={
    username: "Swetha",
    id:335
}

// function getDbId(id: number | string){
//     console.log('DB id is :${id}')
// }

getDbId(3)
getDbId("3")

function getDbId(id:number|string){
    if(typeof id ==="string"){
        id.toLowerCase()
    }
}
//array
const data : number[]=[1,2,3]
const data2 : string[]=["1","2",'3']
const data3 : string[]| number[]=["1","2","3"]//either completely number rray or string array

const data4 :(string|number)[]=["1",3,4]//() allows to have both number and strings


let seatAllotment: "aisle" | "middle" |"window"
seatAllotment="aisle"
//seatAllotment="crew"










