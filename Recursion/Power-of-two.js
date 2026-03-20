//power of 2
let n = 16

function isPowerOfTwo(n) {

    if(n==1) { return true; }
    else if((n%2 != 0) || n < 0) { return false}

    return isPowerOfTwo(n/2);
};

console.log(isPowerOfTwo(n));