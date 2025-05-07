{
// class and object and methode;
class Animal{
    // parameter properties....
constructor(public name:string,public species:string,public sound:string){
}

makeShow(){
    console.log(`The ${this.name} will sound : ${this.sound}`);
}

}

const dog= new Animal('German shefard', 'dog', 'grew grew');
const cat= new Animal('Parsian', 'cat', 'mew mew')
dog.makeShow()
cat.makeShow()

// 
}