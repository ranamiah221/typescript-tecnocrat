{
// 
// get data in to the json...
type Todo={
    userId:number;
    id:number;
    title:string;
    completed:boolean;
}
const getTodo=async(): Promise<Todo>=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json()
    console.log(data)
    return data
}
getTodo()


const createPromise=():Promise<string>=>{
    return new Promise<string>((resolve, reject)=>{
        const data: string ="something";
        if(data){
            resolve(data)
        }else{
            reject("failed to load data")
        }
    })
}

const showData=async():Promise<string>=>{
    const data : string = await createPromise()
    return data;
}

showData();

const createPromise2=()=>{
    return new Promise((resolve, reject)=>{
        const data2="none here";
        if(data2){
            resolve(data2)
        }else{
            reject('not fiund data')
        }
    })
}

const callPromise2=async()=>{
    const data2= await createPromise2()
    console.log(data2);
}

callPromise2();






// 
}