// leetcode ugly number

//Write a program to check whether a given number is an ugly number.

//Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.

class Solution:
    def isUgly(self, num: int) -> bool:
        if num < 1:
            return False
        for i in [2,3,5]:
            while num % i == 0:
                num = num // i
                
        return num == 1