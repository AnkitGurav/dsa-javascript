let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
//output remove duplicates [0,1,2,3,4]

function removeDuplicates(nums) {
    // console.log("nums----", nums)
    let x = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[x]) {
            x = x + 1
            nums[x] = nums[i]
        }
    }
    return nums.slice(0, x + 1);

}
console.log(removeDuplicates(arr));
