// leetcode single number
function singleNumber(nums){
    nums.sort()

    for(i = 0; i < nums.length; i=i+2){
        let next = nums[i+1]
        if(nums[i] != next){
            return nums[i]
        }
    }
    return nums

};
// testing

console.log(singleNumber([7,5,4,0,4,7,0])) //5
console.log(singleNumber([4,3,0,4,3,6,9,6,9])) //0



