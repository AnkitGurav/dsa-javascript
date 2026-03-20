//sum of all elements in an array
let arr = [5,3,2,0,1];
//o/p :- 11
let n = arr.length;
function sum(n) {
    if(n == 0){
        return arr[n];
    }
    return arr[n] + sum(n -1); 
}
console.log(sum(n - 1));