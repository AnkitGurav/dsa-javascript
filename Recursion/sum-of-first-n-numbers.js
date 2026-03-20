//Find Sum of first n numbers using recursion

let n = 5;

function sum(n) {
    if (n == 0) return 0;
    return n + sum(n - 1);
}

console.log(sum(n));