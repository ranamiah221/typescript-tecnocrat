{
//  condition type...
type a = string;
type b = number;

type x = a extends string ? string : null;

type y = a extends null ? number : b extends number ? number : undefined;

type Sheik ={
    car:string;
    ship:string;
    bike:string;
    plane: string;
}

type CheckVehicle<T> = T extends keyof Sheik ? true: false;

type HasPlane = CheckVehicle<'plane'>



// 
}