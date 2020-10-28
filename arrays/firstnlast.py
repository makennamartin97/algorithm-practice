# Given an array of integers nums sorted in ascending order, find the 
# starting and ending position of a given target value.

# If target is not found in the array, return [-1, -1].

class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        if target not in nums:
            start = -1
            end = -1
        else:
            start = nums.index(target)
            end = start
            for i in range(len(nums)-1,start,-1):
                if nums[i] == target:
                    end = i
                    break
            

        return [start, end]