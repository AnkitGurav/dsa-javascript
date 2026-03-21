let arr = [1, 5, 6, 0, 8]

let target = 0;

function findTargetValue(arr, val) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === target) {
            return i
        }
    }
    return -1
}

console.log(findTargetValue(arr, target))