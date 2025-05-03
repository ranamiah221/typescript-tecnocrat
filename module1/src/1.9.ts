{
    // using type alice 
type Student={
    name:string;
    age:number,
    gender?:string,
    contactNo?:string,
}
// type alice

const student1:{
    name:string;
    age:number;
    contactNo:string;
    gender:string;
}={
name:'Rana',
age:21,
contactNo:'01736030245',
gender:'male'
}

const student2:{
    name:string;
    age:number;
    contactNo:string;
    gender:string;
}={
name:'Rana miah',
age:25,
contactNo:'0173639465',
gender:'male'
}

// using type alice uses...

const student3:Student={
    name:'rony',
    age:34,

}

// type Number=number;

// function addSum(num1:Number , num2:Number):Number{
//     return num1 + num2;
// }

// addSum(18, 39)

// function type alice....

type Add=(num1: number, num2: number)=> number

const add:Add=(num1, num2)=> num1 + num2
add(33, 22)



// 
}