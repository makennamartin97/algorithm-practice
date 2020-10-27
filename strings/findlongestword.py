def findlongestword(str):
    stringsplit = str.split(" ")
    longestword = 0
    for s in stringsplit:
        if len(s) > longestword:
            longestword = len(s)

    return longestword
print(findlongestword("There's a double rainbow in the sky")) # 7
print(findlongestword("I like mushrooms and bagels")) # 9
print(findlongestword("Sweet serendipity")) # 11
