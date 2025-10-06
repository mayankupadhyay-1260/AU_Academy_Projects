//-------------------------- NORMAL FUNCTION ------------------------------: 

const { Document } = require("mongoose");

// function greet(){    // Function declaration
//     console.log("Hello! Good Afternoon");   //Function body
// }
// greet();     // Function calling or invoking


//------------------------ PARAMETERIZED FUNCTION --------------------------------: 
// function square(a){
//     console.log(`The square of the number ${a} is ${a*a}`);
// }
// square(10);

//------------------------- FUNCTION EXPRESSION / ANOMYNOUS FUNCTION -------------------: 
// let sum = function(a,b){
//     console.log(`sum of ${a + "and" +b} is ${a+b} `)
// }
// sum(10,20);

// /*-------------------------To Make this string coming from prompt integer put a (+) in front of it or
// use number datatype in front of it --------------------------------------------------*/
// // let num1 = +prompt("Enter the number 1 :");
// // let num2 = +prompt("Enter the number 2 :");
// // function mult(num1,num2){
// //     console.log(`The multiply of ${num1} and ${num2} is ${num1*num2}`);
// // }
// // mult(num1,num2);


//-------------------------  REST PARAMETERIZED FUNCTION  ---------------------------:
// function func(a,b,...c){
//     console.log(a+b+c[1]);

//     console.log(...c);
// }
// func(1,2,3,5,7,8,3)

//------------------------- RETURN TYPE FUNCTION -------------------------------- :
// return is last line of the function body
// Only one return function is allowed in one function definition
// let fname = prompt("Enter your name : ")
// function hello(name){
//     console.log("This is a type of return function !!");
//     return "Hello " + name;
// }
// console.log(hello(fname));

// Q1> return a array number object
// function array_return(...num){
//     return num;
// }   
// console.log(array_return(3,4,2,6,5,8));

// function object_return(...arr){
//     let brr = new Object(arr);
//     return brr;
// }
// console.log(object_return(3,4,2,6,5,8));


// function myFunc(){
//     const arr = [10,20,30];
//     const brr = [];
//     for(let index = 0; index<arr.length;index++){
//         const element = arr[index];
//         brr[index] = element*element;
//     }
//     return brr;
// }
// let res = myFunc();
// console.log(res);

// ----------------------- ARROW FUNCTION ----------------------------------:

// let myFunc = () => {
//     console.log("This is arrow function : ");
// }
// myFunc();

// // if single parameter paranthese are optional:
// let sum = a =>{
//     let add = a+a;
//     return add;
// }
// console.log(sum(5));

// // if single statement curly braces are optional:
// let mult = (a,b) => console.log(a*b);
// mult(2,3);

// // In case of single statement which is return statement then the curly braces are mandatory:
// let multiply = (a,b) => {return a*b};
// console.log(multiply(2,4));

//----------------------------- CALLBACK FUNCTION -----------------------------:
// function greet(name , callback){
//     console.log(`hello !! ${name}`);
//     callback();
// }
// let call = ()=>{
//         console.log("Hey this is a callback you got it!!");
// }
// greet("OG" , call);

let arr = [12,43,23,66,34,98,56];
let res = arr.sort((a,b) => a-b);
console.log(res);



