{
    // object defined...
const user={
    roll:1,
    names:{
        firstName:"Md",
        middleName:"Rana",
        lastName:"Miah"
    },
    contractNo:1857866723,
    email:'ranarasul21@gmail.com'

    }
    //object destructuring...
    const {roll, names:{middleName}}=user;

    // array destructuring....
    const myFriends:string[] = ['mungle', 'rakib', 'rofikul', 'tuser','habib', 'hasan','masud'];

    const [,, bestFriend,...rest]=myFriends;
    console.log(bestFriend);




    

}




