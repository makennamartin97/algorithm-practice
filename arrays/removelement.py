# leetcode remove element

# Given an array nums and a value val, remove all instances of that value in-place and return the new length.
class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        i = 0
        while i < len(nums):
            if nums[i] == val:
                nums.remove(nums[i])
                i=i-1
            i=i+1
            
        return len(nums)