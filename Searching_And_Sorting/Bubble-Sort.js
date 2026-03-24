//write a program to sort the given array using bubble sort;
let arr = [5,4,9,15,7,1,0];

function sort(nums) {
    let n = nums.length;
    
    for(let i =0; i < n - 1; i++){
        let isSwapped = false
        for(let j = 0; j < n -1 - i; j++){
            if(arr[j] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j+1] =  temp;
                
                isSwapped = true;
            }
        }
        if(!isSwapped) break;
    }
    return nums;
}
console.log(sort(arr));