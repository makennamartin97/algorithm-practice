//return true if numbers are repeated in an array

//To apply this idea, we employ the linear search
// algorithm which is the simplest search algorithm.
//we define the loop invariant. A loop invariant is 
//a property that holds before (and after) each iteration.
// Knowing its invariant(s) is essential for understanding the 
//effect of a loop. Here is the loop invariant:
//time limit exceeded not preferred
var nums = [34, 67, 23, 23, 86]
var containsDuplicate = function(nums) {
    nums.sort();

    for(var i = 0; i < nums.length; i++){
        for(var j = 0; j < i; j++){
            if(nums[j] == nums[i]){
                return true;
            }
        }
    }
    return false;
    
};
console.log("Approach 1:" + containsDuplicate(nums));

//faster approach
//sort the array first, then compare each val
var containsDuplicate2 = function(nums) {

    nums.sort();
    for(var i = 0; i < nums.length-1; i++){
        if(nums[i] == nums[i+1]){
            return true;
        }
    }
    return false;
};
console.log("Approach 2:" + containsDuplicate2(nums));