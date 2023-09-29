// function add(x,y){
//     return x+y;
// }
// console.log(add(2,3))
// function min(n){
//     return n*60 + "sec";
// }
// console.log(min(3))
// function count(n){
//     return n+1;
// }
// console.log(count(4))
// function year(n){
//     return n*365 + " days";
// }
// console.log(year(3))
// function power(v,c){
//     return "power = "+ v*c +" w"
// }
// console.log(power(5,8))
// function space(b){
//     return "something" + " " +b; 
// }
// console.log(space("happened"))
// function sum(a,b){
//     if(a+b===10){
//         return true;
//     }
//     else if(a===10 && b===10){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(sum(5,10))

// function str(a,b){
//     if(a.length===b.length){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(str("hijj","idjj"))

// let a = (name)=>{
//     return `greeting ${name}`
// }
// console.log(a("akhil"))

// function na(arr){
//     if(arr.length!==10){
//         return 
//     }
//     else{
//         let a = arr.slice(0,3).join('')
//         let b = arr.slice(3,6).join('')
//         let c = arr.slice(6).join('')
//         return `(${a}) ${b}-${c}`
//     }
// }
// console.log(na([1,2,3,4,5,6,7,8,9,0]))

function second(arr){
    let a = arr.sort();
    return a[1];
}
console.log(second([7,4,0,6,1]))