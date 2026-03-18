// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Input: nums = [3,0,1]

// Output: 2

// Explanation:

// n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

//Find the missing number
let  nums = [9,4,5,7,3,6,2,1,0]
//output :- 8

function findMissingNumber(nums){
    let n = nums.length;
    let totalSum = n * (n + 1)/2
    
    let partialSum = 0;
    for(let i =0; i < nums.length; i++){
        partialSum = partialSum + nums[i];
    }
    
    return totalSum - partialSum

}
console.log(findMissingNumber(nums));