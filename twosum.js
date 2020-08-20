//return indices of 2 values in which the sum = the target value
var nums = [23, 45, 21, 2, 90, 6]
var target = 29;
var twoSum = function(nums, target) {
    for(var i = 0; i < nums.length; i++){
        for(var j = i + 1; j<nums.length; j++){
            if(nums[i] + nums[j] == target){
                return [i, j]
            }
        }
    }
    return null;
    
};
console.log(twoSum(nums, target));