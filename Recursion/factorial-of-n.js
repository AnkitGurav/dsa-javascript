//calculate the factorial of 5! write a program
//output :- 120

let n = 5;

function fact(n) {
    if(n == 1) return 1;
    return n * fact(n-1);
}
console.log(fact(n));