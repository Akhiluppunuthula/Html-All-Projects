// This keyword refers to an object or "uesd to refer the object it belongs to"
// let obj = {
//     fname : "akhil",
//     lname : "",
//     getIntro : function (){
//         console.log(`hello ${this.fname} `)
//     }
// }
// obj.getIntro()
// let person = {
//     getIntro : function(city){
//         console.log(this.fname + this.lname + city)
//     }
// }
// let person1 = {
//     fname : "akhil",
//     lname : "ak"
// }
// person.getIntro.call(person1,"hyd")
// let person = {
//     getIntro : function(city){
//         console.log(this.fname + this.lname + city)
//     }
// }
// let person1 = {
//     fname : "akhil",
//     lname : "ak"
// }
// person.getIntro.apply(person1,["hyd"])
// let person = {
//     getIntro : function(){
//         return this.fname + this.lname ;
//     }
// }
// let person1 = {
//     fname : "akhil",
//     lname : "ak"
// }
// let getIntro = person.getIntro.bind(person1)
// getIntro()