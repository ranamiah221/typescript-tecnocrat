{
// 
interface Book{
    bookName:string;
    author1?:string;
    pages:number;
    price1:number;

}

interface Magazine{
    magazine:string;
    author2:string;
    price?:number;
}

type NewType= Book | Magazine;

const myBook:NewType={
    bookName:'New Book',
    author1:'rana',
    price1:23,
    pages:45,
   
}

type Intersection= Book & Magazine;

const newBook2:Intersection={
    bookName:'Raba',
    author1:"new",
    pages:98,
    price1:89,
    magazine:"none",
    author2:'two',
}

// 
}