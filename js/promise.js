// // promise = resolve , reject , = (then catch)
// promise are used to async operations in JS
// promise is a object that keeps track on the event wheather completed or determines what happend after the event completion
// promises had 3 stages pending fullfilled and rejected
// let num = new Promise((resolve,reject)=>{
//     console.log("stop")
//     setTimeout(function(){
//         if(2>1){
//             resolve("yes")
//         }
//         else{
//             reject("No")
//         }
//     },3000)

// })



// console.log(num)
// .catch(function(err){
//     console.log(err)
// })

// console.log(num)

// let create = new Promise(function(resolve,reject){
//     console.log("hi")
//     setTimeout(function(){
//         if(2>1){
//             resolve("Yes")
//         }
//         else{
//             reject("No")
//         }
//     },3000)
// })
// console.log(create)
// create
// .then(function(res){
//     console.log(res)
// })
// .catch(function(err){
//     console.log(err)
// })

// 


// let obj = {
//     fname : "Hello",
//     lname : "hi",
//     getIntro : function(){
//         return `this.fname`
//     }
// }
// let person = 
// let arr = [2,3,5,6,9]
// let ab = arr.map(function(n){
//     return n*2
// })
// console.log(ab)
// let ar = [2,3,5,6,9]
// let a = arr.filter(function(n){
//     if(n%2===0){
//         return n
//     }
// })
// console.log(a)