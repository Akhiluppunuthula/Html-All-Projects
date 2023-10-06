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
