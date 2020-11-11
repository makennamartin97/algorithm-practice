# freecodecamp
# Repeat a given string str (first argument) for num times (second argument). 
# Return an empty string if num is not a positive number. For the purpose of 
# this challenge, do not use the built-in .repeat() method.
# solution in python
def repeatStringNumTimes(str, num):
    if num <= 0:
        return ""
    
    else:
        res = ""
        for s in range(num):
            res = res + str
    return res



print(repeatStringNumTimes("abc", 3)) #abcabcabc

print(repeatStringNumTimes("*", 8)) #********