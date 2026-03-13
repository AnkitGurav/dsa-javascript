// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

let arr = ["A", "n", "k", "i", "t"];

function reverseString(arr) {

    let leng = arr.length;
    let halfLeng = Math.floor(leng / 2);
    // console.log("lang-----",leng )
    // console.log("halfLeng-----", halfLeng)
    for (let i = 0; i < halfLeng; i++) {
        let temp = arr[i];
        arr[i] = arr[leng - 1 - i];
        arr[leng - 1 - i] = temp;
    }
    return arr
}

console.log(reverseString(arr));