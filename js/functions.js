// 6 types of functions in JS
// 1. Named function
// function firstNamed(){
//     console.log("Hello")
// }
// firstNamed()
// 2.Anonymous Functions = without name used as function expression 
// let greet = function(){
//     console.log("hello")
// }
// greet()
// 3.Arrow Function
// let greet = (name) => {
//     console.log(`Hello ${name}`)
// }
// greet("Akhil")
// IIFE - immidiately invoked function execution - Executed immideatly after creation
// (function (){
//     let str = "hello"
//     console.log(str)
// })();
// 5.Higher order Function
// 6.Constructor Function

// function resolveAfter2Seconds(x) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(x);
//       }, 2000);
//     });
//   }
  
// //   async function f1() {
// //     const x = await resolveAfter2Seconds(10);
// //     console.log(x); // 10
// //   }
  
// //   f1();

// function resolveAfter2Seconds(x) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(x);
//       }, 2000);
//     });
//   }
//   resolveAfter2Seconds()
//   .then((res)=>{
//     console.log(res)
//   }
// )


// function string(str){
//   let count = 0
//   let vowels = "aeiou"
//   for (let i = 0; i<=str.length;i++){
//     if(vowels.includes(str[i])){
//       count++
//     }
//   }
//   return count;
// }
// // console.log(string("Celebration"));

// function arr(n){
//   array.forEach(element => {
    
//   });
// }
// function multiplyByTwo(num) {
//   return num * 2;
// }

// function multiplyByTwoInRange(n) {
//   for (let i = 1; i <= n; i++) {
//     const result = multiplyByTwo(i);
//     console.log(result);
//   }
// }

// // Example usage:
// multiplyByTwoInRange(5);

// function sum(num,length){
//   let mul = []
//   for(let i =1;mul.length< length;i++){
//     mul.push(num*i)
//   }
//   return mul;
// }
// console.log(sum(7,5))