"use strict";
// function
// normal function
// function add(num1:number, num2:number):number{
//     return num1 + num2
// }
// add(2,56)
// arrow function
// const arrowFn=(x:number, y:number=10):number => x + y;
// const sum =arrowFn(10,77)
// console.log(sum);
// const multiple=(number1: number, number2: number): number => number1 * number2;
// method...
// const poorUser ={
//     userName: "Rana Miah",
//     balance: 0,
//     addBalance(balance:number):string{
//         return `My new balance is : ${this.balance + balance}`
//     }
// }
// const newBalance= poorUser.addBalance(44);
// console.log(newBalance, poorUser.balance);
// callback functions
const arr = [1, 2, 3, 4, 5, 6];
const newNumber = arr.map((ele) => ele * ele);
console.log(newNumber);
