{
// 
//generic type....

type GenericArray<T> = Array<T>

// const rollNumbers:number[]=[1,2,3];
// const rollNumbers:Array<number>=[1,2,3];
const rollNumbers:GenericArray<number>=[1,2,3];

// const mentors:string[]=['Mr.x', 'Mr.y','Mr.z'];
// const rollNumbers:Array<string>=['Mr.x', 'Mr.y','Mr.z'];
const mentors:GenericArray<string>=['Mr.x', 'Mr.y','Mr.z'];

// const boolArray:boolean[]=[true, false, true]
// const boolArray:Array<boolean>=[true, false, true]
const boolArray:GenericArray<boolean>=[true, false, true]

// type User={
//     name:string,
//     age:number
// }
interface User{
    name:string;
    age:number
}
const user:GenericArray<User> =[
    {
        name:'Rana',
        age:12
    },
    {
        name:'Rony',
        age:21
    },
   
]

// generic tupple....
type GenericTupple<X,Y>=[X,Y]
const manush:GenericTupple<string, string> =['Mr.x', 'Mr.y']

const userWithId:GenericTupple<number, {name:string, email:string}>=[1234, {name:'Rana',email:'ranarasul21@gmail.com'}]
// 
}