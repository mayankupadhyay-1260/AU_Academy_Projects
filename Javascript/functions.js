//-------------------------- Normal Function : 

// function greet(){    // Function declaration
//     console.log("Hello! Good Afternoon");   //Function body
// }
// greet();     // Function calling or invoking


//------------------------ Parameterized Function : 
// function square(a){
//     console.log(`The square of the number ${a} is ${a*a}`);
// }
// square(10);

//-------------------------Function expression / Anomynous function: 
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


//-------------------------Rest parameterized function---------------------------
// function func(a,b,...c){
//     console.log(a+b+c[1]);

//     console.log(...c);
// }
// func(1,2,3,5,7,8,3)

//-------------------------Return type function--------------------------------
// return is last line of the function body
// Only one return function is allowed in one function definition
// let fname = prompt("Enter your name : ")
// function hello(name){
//     console.log("This is a type of return function !!");
//     return "Hello " + name;
// }
// console.log(hello(fname));

// Q1> return a array number object
function array_return(...num){
    return num;
}   
console.log(array_return(3,4,2,6,5,8));

function object_return(...arr){
    let brr = new Object(arr);
    return brr;
}
console.log(object_return(3,4,2,6,5,8));
