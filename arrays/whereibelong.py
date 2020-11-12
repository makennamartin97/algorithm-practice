def getIndexToIns(arr, num):
    if len(arr) == 0:
        return 0
    arr.sort()
    i = 0
    while num > arr[i]:
        i = i + 1
    return i


print(getIndexToIns([40, 60], 50)) # 1
print(getIndexToIns([10, 20, 30, 40, 50], 35)) # 3
print(getIndexToIns([], 1)) # 0