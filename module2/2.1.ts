{
// 

// type assertion...
let anything : any;
anything="web development";
// (anything as string) //give string type method...


anything=22222;
(anything as number) //give number type method...

// kg to gram converted...

const kgToGm=(value: string | number | undefined)=>{
    if(typeof value ==='string'){
        const convertedValue = parseFloat(value) * 1000
        return `The Converted value is ${convertedValue}`;
    }
    if(typeof(value)==='number'){
        return value * 1000;
    }

}
const result1 = kgToGm(1000) as number;
const result2 = kgToGm('1000') as string;

type CustomError={
    message:string;
}

try{

}
catch(error){
    console.log((error as CustomError).message)
}



// 
}