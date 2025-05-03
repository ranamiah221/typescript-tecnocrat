{
// ternary operator | optional chaining | nulish coalescing
let age:number = 18;
// if(age >=18){
//     console.log('Adult');
// } 
// else{
//     console.log("Not Adult");
// }

// ternary operation...
// const isAdult = age >= 18 ? 'adult': 'notAdult';
// console.log(isAdult);

// nulish coalescing oparators
// Based on null/undefined ---->decision making.
// const authenticatedUser="";

// const result1 = authenticatedUser ?? "Guest";
// const result2 = authenticatedUser ? authenticatedUser :"Guest";
// console.log({result1}, {result2});



type User={
    name:string;
    address:{
        city:string;
        read:string;
        presentAddress:string;
        permanentAddress?:string;
    }
}

const user:User={
    name:'Rana',
    address:{
        city:'Tangail',
        read:'Awesome road',
        presentAddress:'shawrapara'
    }
}

const permanentAddress = user?.address?.permanentAddress ?? "Address Nai vai"

console.log({permanentAddress});

// 
}