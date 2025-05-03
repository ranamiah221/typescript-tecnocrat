{
    // 
type User1={
    name:string;
    age:number
}

interface User2{
    name:string;
    age:number
}

// const user1:={
//     name:'Rana',
//     age:100
// }


type UserWithRole1 = User1 & {role : string}
const user1:UserWithRole1={
    name:'Rana',
    age:100,
    role:'Manager'
}


interface UserWithRole2 extends User2 {role: string}
const user2:UserWithRole2={
    name:'Rana',
    age:100,
    role:'actor' 
}


// js ---> object , array ----> object, function--->object...

type Roll1=number[];

const rollnumber1:Roll1=[1,2,3,4]

interface Roll2{
    [index : number] : number
}

const rollnumber2:Roll2 =[1,2,3,4,5]

// type
type Add1 =(num1:number, num2:number)=> number
const add1:Add1 =(num1 , num2)=> num1 + num2
// interface...
interface Add2{
    (num1:number, num2:number):number
}
const add2:Add2=(num1, num2)=> num1 + num2



    // 
}