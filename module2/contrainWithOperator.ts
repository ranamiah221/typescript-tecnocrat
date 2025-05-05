{
//generic constraint with keyof operator.
type Vehical={
    bike:string;
    car:string;
    ship:string;
}

type Owner = 'car'| 'bike'|'ship' //manually

type Owner2 = keyof Vehical

const person :Owner='car';
const person2:Owner2= 'car'

const user={
    name:'Rana',
    age:23,
    profession:'student'
}

const farmer={
    land:'45 akor',
    khachi:'1 dojon',
    takkor:'nai'
}


const getProperty=<X,Y extends keyof X>(obj: X, key: Y)=>{
    return obj[key]
}

const result = getProperty(user,'name')
const result2= getProperty(farmer, 'land')




// 
}