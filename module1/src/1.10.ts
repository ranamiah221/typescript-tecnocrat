{
// 
// type FrontendDevoloper = "fakibuzzDevoloper" | "juniorDevoloper";
// const frontendDevoloper:FrontendDevoloper = "juniorDevoloper";

// type User={
//     name:string;
//     email?:string;
//     gender:'male'|'female',
//     bloodGroup:'O+'| 'B+'| 'AB+'
// }

// const user:User={
//     name:'Rana',
//     gender:'male',
//     bloodGroup:'O+'
// }

type FrontendDevoloper={
    skills:string[],
    designitions1:'Frontend Devoloper'
}
type BackendDevoloper={
    skills:string[],
    designitions2:'Backend Devoloper'
}

type FullStackDevoloper = FrontendDevoloper & BackendDevoloper;

const fullStackDevoloper:FullStackDevoloper ={
   skills:['html', 'css', 'react', 'node.js', 'express.js'],
   designitions1:'Frontend Devoloper',
   designitions2:'Backend Devoloper'
}
// 
}