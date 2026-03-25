//write a program for selection sort
let arr = [7,1,5,4,3,2];
//output :- [1,2,3,4,5,7];

function sort(a) {
    let n = a.length;
    
    for(let i = 0; i < n - 1; i++){
        let min = i;
        for(let j = i + 1; j < n; j++){
            if(a[j] < a[min]){
                min = j;
            }
        }
         if(i != min){
            let temp = a[i];
            a[i] = a[min];
            a[min] = temp;
         }
    }
    return a
}
console.log(sort(arr));