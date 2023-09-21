// // console.log("Hello world")
// // setInterval(function(){
// //     console.log("hi")
// // },3000)
// // let a = "10";
// // setTimeout(function(){
// //     if (a===10){
// //         console.log("hi")
// //     }
// //     else{
// //         console.log("Bye")
// //     }
// // },3000)
// // let obj = {
// //     fname :"akhil",
// //     lname :"upppu",
// //     age : 34
// // }
// // obj.email = "alilhioa"
// // console.log(this.fname)
// // let button = document.getElementById("btn")
// // let clc = document.querySelectorAll(".init")
// // button.addEventListener("click",function(){
// //     clc
// // })
// // console.log('error')
// // console.error('error')
// // console.warn('warn')

// // variables
// // var a = 10
// // let b = 20
// // console.log(a+b)
// // let keyword
// // let a = 10;
// // a = 20
// // console.log(a)
// // const b = 10
// // b = 10 // not supported because we cannot change value by using const
// let a = 10
// let b= 39
// console.log(a+b)
// console.log(a*b)
// console.log(a-b)
// console.log(a/b)
// console.log(a%b)
// console.log(a**2)
// // console.log(a++)
// console.log(++a)
// // console.log(a--)
// let on = {
//     fname : "akhil",
//     lname : "akhi",
//     age : 34,
//     fullName : function(){
//        return this.fname + this.lname;
//     }
// }
// on.fullName()
// console.log(on.fullname())
// const ab = {
//     fullName: function () {
//       return this.firstName + " " + this.lastName;
//     }
//   }
//   const person = {
//     firstName:"John",
//     lastName: "Doe",
//   }
  
//   // This will return "John Doe":
//   ab.fullName.call(person); 
// obj can created by using 
// obj literal- by crct define
// const obj ={
//     fname : "",
//     lname : "",
// }
// by using empty flower brackets and the values to it
// const li = {}
// li.fname="";
// li.lname = "";
// and by using new keyword
// let kim = new Object()
// kim.fname = ""
// kim.lname = ""
// in js objects we can the properties can add deleted and removed
// properties can be added in diff types like
// name.property
// name.["property"]
// name.[expression]
// delete name.property
// we can also access nested objects by . notation
// obj.fname.lname
// obj.fname.["lname"]
// Callbacks and Callbackhells

// var str = "a_khi_l";
// var modifiedStr = str.replaceAll('_', '');
// console.log(modifiedStr);

// function arr(n,t){
//     let count = 0;
//     for (let i =0;i<=n.length;i++){
//         if(n[i]===t){
//             count++;
//         }
//     }
//     return count
// }
// console.log(arr([1,2,3,3,4,5,6,4,5],6))
// let obj = {
//     lname :"al"
// }
// for (let i in obj){
//     console.log(i,obj[i])
// }