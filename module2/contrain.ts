{
// 
type Student={id:number; name:string; email:string}

const addToStudent=<T extends Student>(student:T)=>{
    const course="Functional Bangla";
    return{
        ...student,
        course
    }
    }

    const student1=addToStudent({id:111, name:'Rana Miah',email:'ranarasul21@gmail.com',dev:'NLWD'})
    const student=addToStudent({id:44, name:'nosu',email:'nosu1@gmail.com',Watch:'apple'})
    const student3=addToStudent({id:44, name:'nosu',email:'nosu1@gmail.com', emni:'emni'})
// 
}