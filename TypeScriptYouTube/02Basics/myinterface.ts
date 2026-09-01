interface user{
    readonly dbId: number
    email:string,
    userId: number,
    googleId?: string,
    //starttrail:()=> string
    starttrail():string,
    getCoupon (couponname: string):number

}

interface user{
    githubToken: string
}
// extnede inherits user properties and methods
interface Adming extends user {
       role : "admin" | "ta" | "learner"
}


const swetha : user ={ dbId: 22 , email: "h@h.com",userId: 2211,
    starttrail:()=>{
        return "trail started"
    },
    getCoupon(name: "swetha"): number {
        return 33
    },
    githubToken: "swetha"
}
swetha.email="h@hc.com"