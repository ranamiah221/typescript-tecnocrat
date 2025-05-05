{
// 
interface Book{
    bookName:string;
    author:string;
    pages:number;
    price:number;

}

interface Magazine{
    magazine:string;
    author:string;
    price:number;
}

type NewType = Book | Magazine;

const myBook:NewType={
    bookName:'New Book',
    author:'rana',
    price:23,
}

// 
}