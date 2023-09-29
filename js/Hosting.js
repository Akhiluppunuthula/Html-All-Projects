// Hosting = Hosting is the process where variables and function declartions are moved to the top of there scope during execution
// Variable hosting
// console.log(c);
// console.log(b);
// console.log(a);

// let a = 19
// var b = 30
// const c = 40

// 2. Functional Hosting
// greet()
// let greet = function (){
//     console.log("hello")
// }

// spread operator is used
// let arr = [1, 3, 4]
// let ab = [2, 4, 6]
// let copy = [...arr, ...ab]
// console.log(copy)
// let ob = {
//     f:"l",
//     b:"u"
// }
// let oj = {
//     b:"f",
//     f:"b"
// }
// let cop = { ...ob,...oj }
// console.log(cop);
// let arr = [3,5,7]
// let max = arr[0]
// for (let i of arr){
//     if(arr[i]>max){
//         max = arr[i];
//     }
// }