// Task 1------------------------------------------------
// var a = +prompt("Enter")
// (a === (0123456789)) ?alert("yes"):alert("no")

// function validate(n){
//     if(n===(0123456789)){
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(validate(01234569))
// Task 1------------------------------------------------

// Task 2------------------------------------------------

// var a = +prompt("enter")
// a===12 ?alert(++a):alert(--a)

// function increment (n){
//     if(n===12){
//         return ++n
//     }
//     else{
//         return --n
//     }
// }
// console.log(increment(12))

// Task 2------------------------------------------------

// Task 3------------------------------------------------
// var a = +prompt("enter")
// a===30 ?alert(a+30):alert(a-30)

// function num(n){
//     if(n===30){
//         console.log(n+30);
//     }
//     else{
//         console.log(n-30);
//     }
// }
// console.log(num(30))
// Task 3------------------------------------------------

// Task 4------------------------------------------------

// var a = +prompt("enter a")
// var b = +prompt("enter ")
// a>b ? console.log("yes"):console.log("b is greater")

// function greater(a,b){
//     if(a>b){
//         console.log("a is greater")
//     }
//     else{
//         console.log("b is greater")
//     }
// }
// console.log(greater(7,9))

// Task 4------------------------------------------------

// Task 5------------------------------------------------

// var a = +prompt("enter")
// var b = +prompt("enter")
// var c= +prompt("enter")
// a+b+c === 60? alert("yes"):alert("no")

// function calculate (a,b,c){
//     if(a+b+c===60){
//         console.log("Hello World!")
//     }
//     else{
//         console.log("Enter the number equivalent to 60")
//     }
// }
// console.log(calculate(30,15,15))

// Task 5------------------------------------------------

// Task 6------------------------------------------------

// var a = +prompt("enter")
//  a===0?alert("sunday")
//  :a===1?alert("monday")
//  :a===2?alert("tuesday")
// :a===3?alert("wednesday")
// :a===4?alert("thrusday")
// :a===5?alert("friday")
// :a===6?alert("saturday")
// :alert("invalid")

// function find(n){
//     switch (n) {
//         case 1:"sunday"
//         break;
//         case 2:"monday"
//         break;

//         default:
//             "invalid";
//     }
// }
// console.log(find(1))

// function day(n){
//     if(n===0){
//         console.log("sunday")
//     }
//     else if(n===1){
//         console.log("monday")
//     }
//     else if(n===2){
//         console.log("tuesday")
//     }
//     else if(n===3){
//         console.log("wednesday")
//     }
//     else if(n===4){
//         console.log("thursday")
//     }
//     else{
//         console.log("Invalid");
//     }
// }

// console.log(day(4));
// Task 6------------------------------------------------

// let a = "hello"
// let b = 30
// console.log(a-b);

// function sum(a, b, c) {
//   if (a > b && a > c) {
//     console.log("A is greater");
//   } else if (b > a && b > c) {
//     console.log("B is greater");
//   } else if (c > a && b < c) {
//     console.log("C is greater");
//   } else {
//     console.log("All are equal");
//   }
// }
// console.log(sum(5, 20, 8));

// function greater(a, b) {
//   if (a > b) {
//     console.log("A is greater");
//   } else if (b > a) {
//     console.log("B is greater");
//   } else {
//     console.log("Both are equal");
//   }
// }
// console.log(greater(9, 7));

// function day(a) {
//   if (a <= 12) {
//     console.log("Morning");
//   } else if (a > 12 && a <= 16) {
//     console.log("Afternoon");
//   } else if (a > 16 && a <= 21) {
//     console.log("Evening");
//   } else if (a > 21 && a <= 24) {
//     console.log("Good Night");
//   } else {
//     console.log("Invalid");
//   }
// }
// console.log(day(21));

// function sum(a,b,oper){
//     if(oper == "+"){
//         console.log(a+b)
//     }
//     else if(oper == "-"){
//         return a-b
//     }
//     else if(oper == "*"){
//         return a*b
//     }
//     else if(oper == "/"){
//         return a/b
//     }
//     else if(oper == "%"){
//         return a%b
//     }
//     else if(oper == "**"){
//         return a**b
//     }
//     else{
//         console.log("Invalid Operator")
//     }
// }
// console.log(sum(3,2,"**"))

// function day(n){
//     if(n===0){
//         console.log("Sunday")
//     }
//     else if(n===1){
//         console.log("Monday")
//     }
//     else if(n===2){
//         console.log("Tuesday")
//     }
//     else if(n===3){
//         console.log("Wednesday")
//     }
//     else if(n===4){
//         console.log("Thursday")
//     }
//     else if(n===5){
//         console.log("Friday")
//     }
//     else if(n===6){
//         console.log("Saturday")
//     }
//     else{
//         console.log("Invalid");
//     }
// }

// console.log(day(6));

// function month(a) {
//   switch (a) {
//     case 0:
//       console.log("January");
//       break;
//     case 1:
//       console.log("Feburary");
//       break;
//     case 2:
//       console.log("March");
//       break;
//     case 3:
//       console.log("April");
//       break;
//     case 4:
//       console.log("May");
//       break;
//     case 5:
//       console.log("June");
//       break;
//     case 6:
//       console.log("July");
//       break;
//     case 7:
//       console.log("August");
//       break;
//     case 8:
//       console.log("September");
//       break;
//     case 9:
//       console.log("October");
//       break;
//     case 10:
//       console.log("November");
//       break;
//     case 11:
//       console.log("December");
//       break;

//     default:
//       console.log("Invalid month");
//   }
// }
// console.log(month(6));

// function find(n){
//   if("n"%2==0){
//     console.log("Even")
//   }
//   else{
//     console.log("Odd")
//   }
// }
// console.log(find("5"))

// ----------------power========
// function power(units){
//     if(units<100){
//         return units*2 + (10/100)*units
//     }
//     else if(units>100 && units<200){
//         return units*3.5 + (10/100)*units
//     }
//     else if(units>200 && units<500){
//         return units*4.5 + (10/100)*units
//     }
//     else{
//         return units*6 + (10/100)*units
//     }

// }
// console.log(power(148))

//======= palindrome=======
// function palin(n){
//     let rev=0
//     let temp = n
//     while(temp<0){
//         return "Give an positive integer"
//     }
//         while(temp>0){
//             last = temp%10;
//             rev = rev*10 + last;
//             temp = Math.floor(temp/10);
//         }
    
//     if(n==rev){
//         console.log("palindrome")
//     }
//     else{
//         console.log("Not a palindrome")
//     }
// }

// console.log(palin(121))
//=========palindrome string======
// function palin(str){
//     let left = 0
//     let right = str.length-1
//     while(left<right){
//         if(str[left]!==str[right]){
//             console.log("no")
//             return false;
//         }
//         left++
//         right--
//     }
//     return true

// }
// console.log(palin("madam"))

//========prime or not=======
// function prime(n){
//     let isPrime = true
//     if(n<1){
//         console.log("Enter a valid number")
//     }
//     else if(n>1){
//         for(let i=2;i<n;i++){
//             if(n%i==0){
//                 isPrime=false
//                 break
//             }
//         }
//         if(isPrime){
//             console.log("It is a prime number")
//         }
//         else{
//             console.log("It is not a prime number")
//         }
//     }
//     else{
//         console.log("Not a prime")
//     }
// }
// console.log(prime(8))

//====bubble sort=======
// function sort(arr){
//     let n=arr.length
//     for(let i=0;i<n-1;i++){
//         for (let j=0;j<n-i-1;j++){
//             if(arr[j]>arr[j+1]){
//                 [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
//             }
//         }
//     }
//     return arr
// }
// console.log(sort([1,474,74,3,2323,86,87]))


// function simpleArraySum(ar) {
//     // Write your code here
//     let sum=0
//     for(var i= 0;i<ar.length;i++){
//         sum+=ar[i]
//     }
//     return sum

// }
// console.log(simpleArraySum([1,2,3,4,10,11]))


// function plus(arr){
//     let a=0
//     let b=0
//     let c=0
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>0){
//             a++
//         }
//         else if(arr[i]<0){
//             b++
//         }
//         else{
//             c++
//         }
//     }
//     console.log(a/arr.length)
//     console.log(b/arr.length)
//     console.log(c/arr.length)
// }
// console.log(plus([1,1,0,-1,-1]))

// function star(n){
//     for(let i=0;i<n;i++){
//         for(j=n-i;j>0;j--){
//             console.log("#")
//         }
//         console.log("")
//     }
// }
// // console.log(star(4))
// function findMinMaxSum(arr) {
//     if (arr.length < 4) {
//       console.error("Array should have at least 4 elements");
//       return;
//     }
  
//     // Sort the array in ascending order
//     arr.sort((a, b) => a - b);
  
//     let minSum = 0;
//     let maxSum = 0;
  
//     // Calculate the minimum sum (sum of the first four elements)
//     for (let i = 0; i < 4; i++) {
//       minSum += arr[i];
//     }
  
    // Calculate the maximum sum (sum of the last four elements)
//     for (let i = arr.length - 4; i < arr.length; i++) {
//       maxSum += arr[i];
//     }
  
//     return [minSum, maxSum];
//   }
  
//   const arr = [1, 2, 3, 4, 5, 6, 7, 8]; // Replace this array with your own
//   const [minSum, maxSum] = findMinMaxSum(arr);
  
  // console.log(minSum, maxSum);


  // let a= "happy"
  // let b = []
  // for (let i=0; i<a.length; i++) {
  //   if(a[i] == "p"){
  //     b.push("i")
  //   }
  //   else{
  //     b.push(a[i])
  //   }
  // } 
  // let c = b.reverse().join('')
  // console.log(c)
// let a = "happy hood"
// let b= a.reverse()
// console.log(b)