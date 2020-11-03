#given a sorted array and a sum, return whether the array contains a pair
#equals the sum
sarr = [0, 2, 13, 23, 39, 56, 90, 103]
def google(sarr, sum):
    start = 0
    end = len(sarr)-1
    while start < end:
        total = sarr[start] + sarr[end]
        if total == sum:
            return True
        if total < sum:
            start = start + 1
        if total > sum:
            end = end - 1
    return False
print(google(sarr, 48))
