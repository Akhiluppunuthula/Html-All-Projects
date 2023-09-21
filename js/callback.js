// let arr = ["apple", "banana"]
// arr.forEach(function(name){
//     console.log(name.toUpperCase()) 
// })
// let ar = ["apple", "banana"]
// arr.map(function(name){
//     console.log(name.toUpperCase()) 
// })
// // function ka (name){

// // }
// // let ka = (name) =>{

// // }
// let a = ["apple", "banana"]
// for (let i of a){
//     console.log(i.toUpperCase())
// }
// let obj = {
//     fname:"Apple",
//     lname:"banana"
// }
// for (let i in obj){
//     console.log(i)
// }
// let flag = false;
// function prime(n){
//     if(n=0){
//         console.log("give a positive number")
//     }
//     else if(n=1){
//         console.log("not a prime number")
//     }
//     for (let i=0; i<=n;i++){
//         if (n%i==0){
//             console.log("not a prime number")
//             flag = true;
//         }
//         else{
//             console.log("not a prime")
//         }
//     }
// }
// prime(5)
// const num = 8;
// let isPrime = true;

// if (num <= 1) {
//   isPrime = false;
// } else if (num > 2) {
//   for (let i = 2; i <= num; i++) {
//     if (num % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
// }

// if (isPrime) {
//   console.log(`${num} is a prime number.`);
// } else {
//   console.log(`${num} is not a prime number.`);
// }
// let n = 3;
// let isPrime = true;
// if(n<=1){
//     isPrime = false;
// }
// else if(n>2){
//     for(let i=0;i<=Math.sqrt(n);i++){
//         if(n%i===0){
//             isPrime = false
//             break;
//         }
//     }
// }

// if(isPrime){
//     console.log("yes")
// }
// else{
//     console.log("no");
// }
// function isPrime(number) {
//     if (number <= 1) {
//       return false;
//     }
  
//     // Check from 2 to the square root of the number
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//       if (number % i === 0) {
//         return false; // If it's divisible by any number, it's not prime
//       }
//     }
  
//     return true; // If no divisors were found, it's prime
//   }
  
//   // Example usage:
//   const num = 6;
//   if (isPrime(num)) {
//     console.log(`${num} is a prime number.`);
//   } else {
//     console.log(`${num} is not a prime number.`);
//   }

// function isPrime(num){
//     if(num<=1){
//         return false;
//     }
//     else if(num>2){
//         for (let i = 2; i<=Math.sqrt(num); i++)
//         if(num%i===0){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPrime(6))
