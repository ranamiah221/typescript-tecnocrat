{
// 
class Person{
name:string;
age:number;
address:string;
constructor(name:string, age:number,address:string){
    this.name=name;
    this.age=age;
    this.address=address;}

goSleep(isHours:number){
    console.log(`The ${this.name} sleep in Hours ${isHours}`);
}
}



class Student extends Person{
    
    constructor(name:string, age:number,address:string){
        super(name, age, address)
    }
   
    }
    const studentInfo = new Student('Mr X',22,"ctg")
    studentInfo.goSleep(3)



    class Teacher extends Person{
        disenition:string
        constructor(name:string, age:number,address:string, disennition:string){
           super(name, age, address)
            this.disenition=disennition
        }
       
        takeClass(isClass:number){
            console.log(`The ${this.name} sleep in class  ${isClass}`);
        }
        }
         const teacherInfo = new Teacher('Mr Y',42,"Tangail",'profesoor')
         teacherInfo.takeClass(44)


// 
}