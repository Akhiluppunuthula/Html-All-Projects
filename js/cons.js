// nam()
// console.log("HI");
// function nam(){
//     console.log("hello")
// }
// console.log("hahaha")
// const a = (name) =>{
//     return`${name}`
// }
// console.log(a("Akhil"))
// let amb = new Promise(function(resolve,reject){
//     console.log("Hello")
//     setTimeout(function(){
//         if(typeof("srt")===String){
//             resolve("Hi")
//         }
//         else{
//             reject("ffff")
//         }
//     },2000)
// })
// console.log(amb)
// amb.then((res) =>{
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })
// console.log(amb)

// function num(n,ni){
//     console.log("hi")
// }

// function ni(){
//     console.log("hiii")
// }
// num(ni)


// async function na(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("hi")
//         },2000)
//     })
// }

// let person = {
//     fname : "akhil",
//     lname : "last",
//     getIntro : function(city,place){
//         return this.fname + " " + city + " "+place 
//     }
// }
// let person1 = {
//     fname :"helllo"
// }
// console.log(person.getIntro.call(person1,"hyd","hek"));

let obj = {
    getIntro:function()
{
    this.fname + "hoow are you" 
}
}
let another = {
    fname : "akhil"
}
let hello = obj.getIntro.bind(another)
console.log(hello())