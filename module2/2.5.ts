{
    // function with generic...
    const createArray=(params:string) :string[]=>{
        return [params]
    }

    const response=createArray('Bangladesh')


    const createArrayWithGeneric=<T>(value:T):T[]=>{
        return[value]
    }
    type User={
        id:number;
        name:string;
        age?:number
    }
    const reponse2= createArrayWithGeneric<boolean>(true)
    const reponse3=createArrayWithGeneric<User>({id:222,name:'Rana'})



    const createArrayWithGenericTupple=<T,Q>(value1:T, value2:Q):[T,Q]=>{
        return[value1, value2]
    }
    // type User={
    //     id:number;
    //     name:string;
    //     age?:number
    // }
    const reponse12= createArrayWithGenericTupple<string, string>("Rana","Miah")
  
    const reponse13=createArrayWithGenericTupple<string,User>("Bangladesh",{id:222,name:'Rana'})

    const addToStudent=<T>(student:T)=>{
    const course="Functional Bangla";
    return{
        ...student,
        course
    }
    }

    const student1=addToStudent({id:111, name:'Rana Miah',dev:'NLWD'})
    const student=addToStudent({id:44, name:'nosu',Watch:'apple'})
    // 
}