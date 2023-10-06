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
// function need(){
//     return new Promise(function(resolve,reject){
//         resolve("12");
//         resolve("hi");
//     })
// }
// need().then(function(data){
//     console.log(data);
// })

// function promise(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(function(){
//             reject("error")
//         },100)
//     })
// }
// function prom2(){
//     return new Promise((resolve)=>{
//         resolve("hello")
//     }
//     )
// }
// promise()
// .then(prom2())
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err);
// })

// function promise(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(function(){
//             reject("error")
//         },100)
//     })
// }
// promise()
// .then((res)=>{
//     console.log(res)
// },
// (err)=>{
//     console.log(err);
// })
// function promise(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(function(){
//             reject("error")
//         },100)
//     })
// }

// promise()
// .then(onSuccess(),failure())



// function promise(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(1)
//         },200)
//     })
// }
// async function start(){
//     let res = await promise()
//     console.log(res)
// }
// start()

// async function opera() {
//     let data = await fetch("")
//     let res = await data.json()
//     console.log(res)
// }
// opera()