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

// function sort(arr){
//     let sortedArray = arr.sort()
//     return sortedArray
// }
// console.log(sort(["a", "ccc", "dddd", "bb"]))

// function second(arr){
//     let sort = arr.sort((a,b)=>a-b)
//     console.log(sort[sort.length-2]) 
// }
// console.log(second([10, 40, 30, 20, 50]));

// function findLargestNums(arr){
//     let another = []
//     for (let i = 0; i<arr.length; i++){
//         let current = arr[i]
//         if(current.length===0){
//             another.push(NaN)
//         }
//         else{
//             let large = Math.max(...current)
//             another.push(large)
//         }
//     }
//     return another
// }

// console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]))

// function findLargestNums(arr){
//     let largest = []
//     for (let i=0; i<arr.length; i++){
//         let large = arr[i][0]
//         for(let j=1;j<arr[i].length;j++){
//             if(arr[i][j]>large){
//                 large=arr[i][j]
//             }
//         }
//         largest.push(large)
//     }
//     return largest
// }
// console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]))

// 20
// function type(a){
//     return(typeof(a))
// }
// console.log(type(true))
//---Medium 13
// function UniqueNumbers(arr){
//     let array = []
//     for (let item of arr){
//         if(!array.includes(item)){
//             array.push(item);
//         }

//     }
//     let count = 0
//     for (let num of array){
//         count+= num
//     }
//     return count
// }
// console.log(UniqueNumbers([1, 2, 2, 1, 3, 5, 1]))

// sorting without using sort predefined function
// function sortedArray(arr){
//     let n=arr.length
//     for(i=0;i<n-1;i++){
//         for(j=0;j<n-i-1;j++){
//             if(arr[j]>arr[j+1]){
//                 [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
//             }
//         }
//     }
//     return arr
// }
// console.log(sortedArray(['b','w','c','y','e','j']))

// function UniqueNumbers(arr){
//     let array = []
//     for (let item of arr){
//         if(!array.includes(item)){
//             array.push(item);
//         }

//     }
//     let n=array.length
//     for(i=0;i<n-1;i++){
//         for(j=0;j<n-i-1;j++){
//             if(array[j]>array[j+1]){
//                 [array[j],array[j+1]]=[array[j+1],array[j]]
//             }
//         }
//     }
//     return array
// }
// console.log(UniqueNumbers(['b','w','c','y','e','j','b','e','w']))

// function string(str){
//     let largest=str[0]
//     for(let i=1;i<str.length;i++){
//         let current = str[i]
//         if(current.length>largest.length){
//             largest=current;
//         }
//     }
//     return largest
// }
// console.log(string( ['nik', 'mikhil', 'Cow','Elephant'] ))

// function greeting(parameterVarible){
//     console.log("Hello World")
//     console.log(parameterVarible)
// }
// greeting("Hacker rank")
//---14
// function remove(arr){
//     let array=[]
//     for (let item of arr){
//         if(!array.includes(item)){
//             array.push(item);
//         }
//     }
//     return array 
// }
// console.log(remove([1, 0, 1, 0]))

//-----16
// function string(char,str){
//     let count=0
//     for (let i= 0;i<str.length;i++){
//         if(char===str[i]){
//             count+=1
//         }
//     }
//     return count
// }
// console.log(string("c", "Chamber cccc secrets"))



// for (var i=0;i<=10;i++){
//     console.log(i);
    
// }
// console.log(i)

// function ad(a){
//     var a=0
//     while(a<=10){
//         console.log(a)
//         a++ 
//     }
    
// }
// console.log(ad(10))

// function multiple(n){
//     let arr= []
//     for (let i=0;i<=n;i+=3){
//         arr.push(i)
//     }
//     return arr
// }
// console.log(multiple(30));

// function multiple(n){
//     for (let i=0;i<=n;i+=3){
//         console.log(i)
//     }
    
// }
// console.log(multiple(30));

// function multiple(n){
//     var a=3
//     while(a<=n){
//         console.log(a)
//         a+=3
//     }

// }
// console.log(multiple(30))

// function find(str){
//     console.log(str[str.length-1])
// }
// console.log(find("sfgsasd"))


// function sum(n){
//     for(i=0;i<=n;i++){
//         if(i>5 && i<9){
//             console.log(i)
//         }
//     }
// }
// console.log(sum(10))

// function sum(n){
//     var a=0
//     while(a<=n){
//         if(a>5 && a<9){
//             console.log(a)
//         }
//         a++
//     }
// }
// console.log(sum(10))
// function find(n){
//     for(i=5;i<9;i++){
//         i>5&&i<9?console.log(i):console.log("invalid")
//     }
// }

// // n>5&&n<9?console.log("true"):console.log("invalid")


// console.log(find(6))
// function num(n){
//     for(let i=n;i>0;i--){
//         console.log(i)
//     }
// }
// console.log(num(10))

// function rev(n){
//     var a=n
//     while(a>=0){
//         console.log(a)
//         a--
//     }
// }
// console.log(rev(10))

// function num(str){
//     for(let i=str.length-1;i>0;i--){
//         console.log(str[i])
//     }
// }
// console.log(num("sjakjamkla"))

// function len(n){
//     let count=0
//     for(let i=0;i<=n.length-1;i++){
//         count++
//     }
//     return count
// }
// console.log(len("A"))

// function string(str){r
//     let count = 0
//     for (i=0;i<=str.length;i++){
//         if("aeiouAEIOU".includes(str[i])){
//             count++
//         }
//     }
//     return count
// }
// console.log(string("celesjaihbv"))


// function findLength(str){
//     let count= 0
//    i=0;
//    while(str[i]==undefined){
//     if(str[i]!=''){
//         count++
//     }
//    }
//    return count
//     }
    

// console.log(findLength("ajh"))




