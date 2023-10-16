// -----------------------1-----------
// function even(n){
//     if(n%2==0){
//         console.log("even")
//     }
//     else{
//         console.log("odd")
//     }
// }
// console.log(even(5))

//---------------------2-------------
// function swapTwo(a,b){
//     a=a+b
//     b=a-b
//     a=a-b
//     return `${a} ${b}`
// }
// console.log(swapTwo(2,3))

//------3------------
// function even(arr){
//     for (let i=0;i<=arr.length;i++){
//         if(arr[i]%2==0){
//             console.log(arr[i])
//         }
//     }
// }
// console.log(even([2,4,5,6,7,8,9,10,12]))

//---------4--------
// function maxNum(arr){
//     return Math.max(...arr)
// }
// console.log(maxNum([2,3,5,7,8]))

// function maxNum(arr){
//     let max=arr[0]
//     for (let i=1;i<=arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i]
//         }
//     }
//     return max
// }
// console.log(maxNum([2,3,5,7,8]))

//----------5----------
// function fib(n){
//     let a=0
//     let b=1
//     let arr = [a,b]
//     for(let i=0;i<=n;i++){
//         let c = a+b
//         arr.push(c)
//         a = b
//         b = c
//     }
//     return arr
// }
// console.log(fib(7))

//------------7-------
// function fact(n){
//     let fact =1
//     for(let i=1;i<=n;i++){
//         fact*=i
//     }
//     return fact
// }
// console.log(fact(5))

//-------------8-----
// function table(n){
//     for (let i = 1; i <= 10; i++) {
//         console.log(`Table of ${i}:`);
//         for (let j = 1; j <= 10; j++) {
//             console.log(`${i} x ${j} = ${i * j}`);
//         }
//         console.log(); // Add a blank line for separation
//     }
// }
// console.log(table(2))

// function first(str){
//     return str.cap
// }
// console.log(first( 'how are you today? Where are you going' ))

var sum=0;
var number=153;
var temp=number;
while (temp>0) {
    lastdigit=temp%10;
    sum+=lastdigit*lastdigit*lastdigit;
    temp=parseInt(temp/10);
}
if (sum==number) {
    console.log("it is amstrong num");
}
else{
    console.log("faild");
}