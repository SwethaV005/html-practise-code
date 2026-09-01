console.log("Typescript is still ")
console.log("Typescript is amazing")

class user{
    email: string
    name:string
    readonly city:string="Jaipur"
    constructor(email:string,name:string){
        this.email=email;
        this.name=name;
    }
}
//here city is accessible but you cannt edit it 
const swetha = new user("swe@gmail.com","swetha")
swetha.city//now accessbible

class user_01{
    public email: string
    private name:string // we can also write #name but #name is JS && private is TS
    private readonly city:string="Jaipur"
    constructor(email:string,name:string){
        this.email=email;
        this.name=name;
    }
}
//here city is not accessible only accessible within the class
//everything unmarked are public
//instead of using this.xxx professional coder use this way 
class user_02{
   
     readonly city:string="Jaipur"
    constructor(public email:string,
        public name:string){
       
    }
}
const swe = new user("swe@gmail.com","swetha")

//getters and setters
class user_03{
    private _courseCount=1 //cannot access this outsdie the class
    protected count=2;//protected can be accesed with in the same class as well as any class which inherits the class
    readonly city:string="Jaipur"
    constructor(public email:string,
        public name:string){
       
    }
    //private method
    private deleteToken(){
        console.log("Token deleted")
    }
    get getAppleEmail(): string{
        return 'apple${this.email}'
    }

    get coursecount(): number{
        return this._courseCount
    }


    set coursecount(courseNum){
        if(courseNum<=1){
            throw new Error("Course count should be more thn 1")
        }
        this._courseCount+1
    }
}
//it can acquire all poperties and method other than private
class subuser extends user_03{
    isFamily:boolean=true;
    chanfeCoursecount(){
        this.count=4
    }

}
const swe_03 = new user_03("swe@gmail.com","swetha")
