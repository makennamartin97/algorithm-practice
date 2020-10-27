# reverse a string in python

# backwards iteration pushing into new string
def reverseString(str):
    result = ""
    for s in reversed(range(len(str))):
    # or range(len(str), -1, -1)
        result = result + str[s]

    return result

# testing
print(reverseString("hello")) # olleh
print(reverseString("palm trees")) # seert mlap

# slice statement starting at the end of the string and going backwards by 1 (-1)
def reverseString2(str):
    str = str[::-1]
    return str

print(reverseString2("hello")) # olleh
print(reverseString2("palm trees")) # seert mlap