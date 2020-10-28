//leetcode first and last position in array

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let start = 0
    let end = 0
    if(!nums.includes(target)){
        start = -1
        end = -1
    }

    for(let i = 0; i < nums.length; i++){
        if(nums[i] === target){
            start = i
            break
        }
    }
    for(let j = nums.length-1; j >= 0; j--){
        if(nums[j] === target){
            end = j
            break
        }
    }
    

    return [start, end]
};

//testing
//input: [5,7,7,8,8,10], 8
//output: [3,4]