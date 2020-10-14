// leetcode rotate array in js

function rotate(nums, k) {
    // assign var to last index
    let last = nums.length-1
    // loop k times
    for(i = 0; i < k; i++){
        // shift last val to first
        nums.unshift(nums[last])
        //remove last val
        nums.pop()
    }

    return nums
    
};

//testing 

console.log(rotate([1,2,3,4,5,6,7],3))