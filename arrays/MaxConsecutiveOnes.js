// Given a binary array nums, return the maximum number of consecutive 1's in the array.
// Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
// Example 2:

// Input: nums = [1,0,1,1,0,1]
// Output: 2

let nums = [1,1,0,1,1,1]
//output [1,3,12,0,0]

function findMaxConsecutiveOnes(nums){
    
    let currCount = 0;
    let maxCount = 0;
    
    for(let i =0; i< nums.length; i++){
        if(nums[i] == 1){
        currCount = currCount + 1    
        }else{
            maxCount = Math.max(currCount, maxCount);
            currCount = 0;
        }
    }
    
    return Math.max(currCount, maxCount)

}

console.log(findMaxConsecutiveOnes(nums));