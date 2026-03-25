//1. what will be the output of the following code snippet?

console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");

//output :-
// Start
// End
// Promise
// Timeout

//2.Write a function to return new array grater than 50
let arr = [12, 32, 43, 76, 55, 65, 34, 87, 34, 23]

let number = 50;

function GreaterThanFifty(arr, num) {
    let sampleArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            sampleArr.push(arr[i]);
        }
    }
    return sampleArr;
}
console.log(GreaterThanFifty(arr, number));

// using filter method;
let filterArray = arr.filter(item => item > number);
console.log(filterArray)

// using map + filter method;
// map() is for transforming values, not filtering.
// But if you still want:
let newArray = arr.map(item => item > number ? item : null).filter((item) => item !== null);
 console.log(newArray)


