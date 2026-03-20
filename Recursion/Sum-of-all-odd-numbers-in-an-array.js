//Sum of all odd numbers in an array
let arr = [5,2,0,3,6,7,5];
//o/p = 15
let n = arr.length - 1;
// function oddNumberSum(n) {
//     let isOdd = (arr[n] % 2 != 0)
//     if(n == 0){
//         if(isOdd){
//             return arr[n]
//         }else{
//             return 0;
//         }
//     }
    
//     if(isOdd){
//         return arr[n] + oddNumberSum(n -1);
//     }else{
//         return 0 + oddNumberSum(n -1);
//     }
// }
// console.log(oddNumberSum(n));


function oddNumberSum(n) {
    
    let isOdd = (arr[n] % 2 != 0)
    
    if(n == 0){ return isOdd ? arr[n] : 0 }
    
    return (isOdd ? arr[n] : 0) + oddNumberSum(n -1);
}
console.log(oddNumberSum(n));