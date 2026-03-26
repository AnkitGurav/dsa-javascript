let arr = [7,4,3,5,1,2]
//first element always sorted;
//output[ 1, 2, 3, 4, 5, 7 ]
function sort(nums){
    let n = nums.length;
    for(let i = 1; i < n ; i++){
        let prev = i - 1;
        let curr = nums[i];
        
        while(nums[prev] > curr && prev >= 0){
            nums[prev + 1] = nums[prev];
            prev = prev - 1;
        }
        nums[prev + 1] = curr;
    }
    return nums
}
console.log(sort(arr));