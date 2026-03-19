//print 1 to n using Recursion 
let n = 20

function print(val){
    if(val > n){
        return;
    }
    console.log(val);
    print(++val);
}
print(1);