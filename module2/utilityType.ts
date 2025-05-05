{
// utility types
type Person={
    name: string;
    age:number;
    dev:true;
    email?:string;
    contact:number;

}
//  Pick
type NameAge= Pick<Person,"name"| 'age'>

// Omit
type ContactInfo = Omit<Person,'name'|'age'|'dev'>

// required
type PersonRequired = Required<Person>

// Partial
type PersonPartial = Partial<Person>

// Readonly
type PersonReadOnly= Readonly<Person>

// Record

// type MyObj={
//     a:string;
//     b:string;
// }
type MyObj = Record<string, string>

type EmptyObj= Record<string, unknown>


const obj1 : EmptyObj={
    a:'Rana',
    b:'nnnijiji',
    c:'qwieqwei',
    d:5
}



// 
}