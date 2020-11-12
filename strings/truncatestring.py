
# freecodecamp
# Basic Algorithm Scripting: Truncate a String
# Truncate a string (first argument) if it is longer than the given maximum 
# string length (second argument). Return the truncated string with a ... 
# ending.

# truncate string problem in python
def truncateString(str, num):
    if len(str) > num:
        res = str[0:num]
        return res
    else:
        return str

print(truncateString("A-tisket a-tasket A green and yellow basket", 8))