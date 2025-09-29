/* 

Array length
Array toString()
Array at()
Array join()
Array pop()
Array push()
Array shift()
Array unshift()
Array delete()
Array concat()
Array copyWithin()
Array flat()
Array slice()
Array splice()
Array toSpliced()

*/


// let arr = [11,22,33,23893443,true,'a',null,"hello"]
// // let a = 10;
// // console.log(arr);
// // console.log(arr[0]);
// // console.log(`The array of length is ${arr.length}`);
// // console.log(Array.isArray(arr));
// // console.log(typeof(arr));

// // let ab = null;
// // console.log(typeof(ab));

// let one = arr.includes(true,Number) , Boolean;
// console.log(arr.indexOf(1,Number));
// console.log(arr.indexOf('1',Number));
// console.log(one);

// // for(let b = 0;b<=100;b++){
// //     console.log(b);
// // }


let arr = [1, 2, "mayank",[1,2,3,5]];
console.log(arr.length);
arr.push("hello");
console.log(arr.length);
arr.pop();
console.log(arr.length);
arr.shift();
arr.unshift("hello World!!");
let sliced_arr = arr.slice(1,3);
let spliced_arr = arr.splice(2,1);
console.log(`This is the example of sliced array : ${sliced_arr}`);
console.log(`This is the example of spliced array : ${spliced_arr}`);
console.log(arr);
