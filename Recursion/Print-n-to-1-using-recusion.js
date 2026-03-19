//Print n to 1 using recusion
let n = 10;

function print(val) {
 
    if(val < 1) {
        return;
    }
    console.log(val);
    print(--val);
}
print(n);