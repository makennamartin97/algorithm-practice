# reverse a string in python

def reverseString(str):
    result = ""
    for s in reversed(range(len(str))):
    # or range(len(str), -1, -1)
        result = result + str[s]

    return result

# testing
print(reverseString("hello")) # olleh
print(reverseString("palm trees")) # seert mlap